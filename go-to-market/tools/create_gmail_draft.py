#!/usr/bin/env python3
"""
ProofPatch Gmail Draft Creator
Sender: matei4business@gmail.com
Mode:   DRAFT ONLY — never sends without manual action in Gmail UI.
Scope:  gmail.compose (minimum — no read access to inbox)

Usage:
  python3 create_gmail_draft.py --to addr@example.com --subject "Subject" --body "Body text"
  python3 create_gmail_draft.py --batch drafts.json
  python3 create_gmail_draft.py --auth-only   # run OAuth flow then exit

Credentials live at: ~/.config/proofpatch-outreach/
  credentials.json  — OAuth client (from Google Cloud Console, download once)
  token.json        — refresh token (auto-created after first auth, gitignored)

Neither file should ever be committed to the repo.
"""

import os
import sys
import json
import base64
import argparse
from pathlib import Path
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# ── Config ────────────────────────────────────────────────────────────────────

SENDER        = "matei4business@gmail.com"
CREDS_DIR     = Path.home() / ".config" / "proofpatch-outreach"
TOKEN_FILE    = CREDS_DIR / "token.json"
CREDS_FILE    = CREDS_DIR / "credentials.json"
# Minimum scope: create/update drafts only. Does NOT grant read access to inbox.
SCOPES        = ["https://www.googleapis.com/auth/gmail.compose"]


# ── Auth ──────────────────────────────────────────────────────────────────────

def get_service():
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from googleapiclient.discovery import build

    creds = None

    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not CREDS_FILE.exists():
                print(f"\n❌  credentials.json not found at:\n    {CREDS_FILE}\n")
                print("Steps to fix:")
                print("  1. Go to https://console.cloud.google.com/")
                print("  2. APIs & Services → Credentials")
                print("  3. Create OAuth 2.0 Client ID → Desktop app")
                print("  4. Download JSON → save to:", CREDS_FILE)
                print("  5. Re-run this script\n")
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDS_FILE), SCOPES)
            # port=0 picks a free port; open_browser=True works on WSL2 via Windows browser
            creds = flow.run_local_server(port=0, open_browser=True)

        CREDS_DIR.mkdir(parents=True, exist_ok=True)
        TOKEN_FILE.write_text(creds.to_json())
        print(f"✅  Token saved to {TOKEN_FILE}")

    return build("gmail", "v1", credentials=creds)


# ── Draft creation ─────────────────────────────────────────────────────────────

def create_draft(service, to: str, subject: str, body: str) -> str:
    """Create a single Gmail draft. Returns draft ID."""
    msg = MIMEMultipart("alternative")
    msg["to"]      = to
    msg["from"]    = SENDER
    msg["subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    raw = base64.urlsafe_b64encode(msg.as_bytes()).decode()
    result = service.users().drafts().create(
        userId="me",
        body={"message": {"raw": raw}}
    ).execute()

    draft_id = result["id"]
    print(f"  ✅  Draft created  id={draft_id}  to={to}  subject={subject!r}")
    return draft_id


# ── Batch mode ────────────────────────────────────────────────────────────────

def run_batch(service, batch_file: str):
    """Read a JSON array of {to, subject, body} objects and create drafts."""
    with open(batch_file) as f:
        items = json.load(f)
    print(f"\nCreating {len(items)} draft(s) from {batch_file} ...\n")
    for item in items:
        create_draft(service, item["to"], item["subject"], item["body"])
    print(f"\nDone. Review at https://mail.google.com/#drafts\n")


# ── CLI ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Create Gmail drafts from matei4business@gmail.com. Never sends."
    )
    parser.add_argument("--to",        help="Recipient email address")
    parser.add_argument("--subject",   help="Email subject line")
    parser.add_argument("--body",      help="Email body (plain text)")
    parser.add_argument("--batch",     help="Path to JSON file with array of {to,subject,body}")
    parser.add_argument("--auth-only", action="store_true",
                        help="Run OAuth flow and save token, then exit")
    args = parser.parse_args()

    service = get_service()

    if args.auth_only:
        print("✅  Auth complete. Token saved. You can now create drafts.")
        return

    if args.batch:
        run_batch(service, args.batch)
        return

    if not (args.to and args.subject and args.body):
        parser.error("Provide --to, --subject, and --body (or --batch FILE or --auth-only)")

    print(f"\nCreating draft ...\n")
    create_draft(service, args.to, args.subject, args.body)
    print(f"\nReview at https://mail.google.com/#drafts\n")


if __name__ == "__main__":
    main()
