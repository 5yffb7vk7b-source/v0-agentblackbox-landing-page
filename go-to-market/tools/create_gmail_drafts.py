#!/usr/bin/env python3
"""
ProofPatch outreach — reads leads.csv, builds personalized emails, creates Gmail drafts.

Sender : matei4business@gmail.com
Mode   : DRAFT ONLY — never sends without manual action in Gmail UI.
Scope  : gmail.compose (no inbox read access)

Batch mode (from leads.csv):
  python create_gmail_drafts.py --dry-run
  python create_gmail_drafts.py --create           (status=approved rows only)

Single lead mode:
  python create_gmail_drafts.py --dry-run --to jane@example.com --name "Jane" --context "Built HOTL for Claude Code"
  python create_gmail_drafts.py --create  --to jane@example.com --name "Jane" --context "Built HOTL for Claude Code" --notes "agency"

Credentials (never committed):
  ~/.config/proofpatch-outreach/credentials.json   OAuth client (from Google Cloud)
  ~/.config/proofpatch-outreach/token.json         refresh token (auto-created)
"""

import csv
import re
import base64
import argparse
import sys
from pathlib import Path
from datetime import date, timedelta
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

SENDER = "matei4business@gmail.com"
SUBJECT = "reviewing AI-generated patches"
SCOPES = ["https://www.googleapis.com/auth/gmail.compose"]

SCRIPT_DIR = Path(__file__).resolve().parent
GTM_DIR = SCRIPT_DIR.parent
LEADS_CSV = GTM_DIR / "leads.csv"
TRACKER_CSV = GTM_DIR / "outreach-tracker.csv"
COLD_MESSAGES_MD = GTM_DIR / "cold-messages.md"
CREDS_DIR = Path.home() / ".config" / "proofpatch-outreach"
TOKEN_FILE = CREDS_DIR / "token.json"
CREDS_FILE = CREDS_DIR / "credentials.json"

TRACKER_FIELDS = ["date", "name", "email", "source", "status", "draft_created", "followup_due", "notes"]


# ── Template parsing ───────────────────────────────────────────────────────────

AUDIENCE_HEADINGS = {
    "1. Solo Developer": "solo-dev",
    "2. SaaS Founder": "saas-founder",
    "3. Agency": "agency",
    "4. Open Source Maintainer": "open-source",
    "5. AI Coding Power User": "ai-power-user",
}


def parse_templates(md_path: Path) -> dict:
    """Return {audience_key: {version: body_text}} from cold-messages.md."""
    text = md_path.read_text()
    templates: dict = {}
    sections = re.split(r"^## ", text, flags=re.MULTILINE)
    for section in sections:
        for heading, key in AUDIENCE_HEADINGS.items():
            if not section.startswith(heading):
                continue
            templates[key] = {}
            for version in ("Casual", "Professional", "Follow-up"):
                pattern = rf"\*\*{version}\*\*\n(.*?)(?=\n\*\*|\n---|\Z)"
                m = re.search(pattern, section, re.DOTALL)
                if m:
                    templates[key][version.lower()] = m.group(1).strip()
    return templates


def pick_template(lead: dict, templates: dict) -> str:
    """Choose the right template body based on lead notes/observed_ai_tool."""
    notes = (lead.get("notes") or "").lower()
    if "agency" in notes:
        audience = "agency"
    elif "founder" in notes or "saas" in notes:
        audience = "saas-founder"
    elif "open source" in notes or "maintainer" in notes:
        audience = "open-source"
    else:
        audience = "ai-power-user"
    bucket = templates.get(audience, templates.get("ai-power-user", {}))
    return bucket.get("casual", "")


def build_body(lead: dict, template: str) -> str:
    """Inject name + personalization into a template body."""
    first_name = (lead.get("name") or "there").split()[0]
    personalization = (lead.get("personalization") or "").strip()
    body = template.replace("[name]", first_name)
    if personalization:
        # Strip just the template's first sentence ("Hey — …" / "Hey [name] — …")
        # so the personalization line becomes the sole opener.
        body_stripped = re.sub(r"^Hey[^\n]+?[.?][\"'\s]*", "", body, count=1).strip()
        return f"Hey {first_name} — {personalization}.\n\n{body_stripped}\n\n— Matei"
    return f"{body}\n\n— Matei"


# ── CSV helpers ────────────────────────────────────────────────────────────────

def load_leads(path: Path, status_filter: str | None = None) -> list[dict]:
    with open(path, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    if status_filter:
        rows = [r for r in rows if r.get("status", "").strip() == status_filter]
    return rows


def mark_drafted(path: Path, email: str) -> None:
    rows = []
    fieldnames = None
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            if row.get("email", "").strip().lower() == email.strip().lower():
                row["status"] = "drafted"
            rows.append(row)
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def append_tracker(path: Path, lead: dict, drafted: bool) -> None:
    today = date.today().isoformat()
    followup = (date.today() + timedelta(days=5)).isoformat() if drafted else ""
    row = {
        "date": today,
        "name": lead.get("name", ""),
        "email": lead.get("email", ""),
        "source": lead.get("source", ""),
        "status": "drafted" if drafted else "dry-run",
        "draft_created": "yes" if drafted else "no",
        "followup_due": followup,
        "notes": lead.get("notes", ""),
    }
    needs_header = not path.exists() or path.stat().st_size == 0
    with open(path, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=TRACKER_FIELDS)
        if needs_header:
            writer.writeheader()
        writer.writerow(row)


# ── Gmail auth + draft ─────────────────────────────────────────────────────────

def get_gmail_service():
    try:
        from google.auth.transport.requests import Request
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
        from googleapiclient.discovery import build
    except ImportError:
        print("❌  Missing Google libraries. Install with:")
        print("    pip install google-auth-oauthlib google-api-python-client --break-system-packages")
        sys.exit(1)

    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not CREDS_FILE.exists():
                print(f"\n❌  credentials.json not found at:\n    {CREDS_FILE}\n")
                print("Setup steps:")
                print("  1. https://console.cloud.google.com/ → create a project")
                print("  2. APIs & Services → Library → enable Gmail API")
                print("  3. OAuth consent screen → External → scope: gmail.compose")
                print("     → add matei4business@gmail.com as test user")
                print("  4. Credentials → OAuth client ID → Desktop app → Download JSON")
                print(f"  5. Save file to: {CREDS_FILE}")
                print("\nSee go-to-market/tools/README.md for full instructions.\n")
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDS_FILE), SCOPES)
            creds = flow.run_local_server(port=0, open_browser=True)

        CREDS_DIR.mkdir(parents=True, exist_ok=True)
        TOKEN_FILE.write_text(creds.to_json())
        print(f"✅  Token saved to {TOKEN_FILE}")

    return build("gmail", "v1", credentials=creds)


def create_draft(service, to: str, subject: str, body: str) -> str:
    msg = MIMEMultipart("alternative")
    msg["to"] = to
    msg["from"] = SENDER
    msg["subject"] = subject
    msg.attach(MIMEText(body, "plain"))
    raw = base64.urlsafe_b64encode(msg.as_bytes()).decode()
    result = service.users().drafts().create(
        userId="me", body={"message": {"raw": raw}}
    ).execute()
    return result["id"]


# ── CLI ────────────────────────────────────────────────────────────────────────

def print_draft_preview(lead: dict, templates: dict) -> None:
    email = lead.get("email", "").strip()
    body = build_body(lead, pick_template(lead, templates))
    print(f"  TO:      {email}")
    print(f"  SUBJECT: {SUBJECT}")
    print(f"  BODY:")
    for line in body.splitlines():
        print(f"    {line}")
    print(f"\n  {'-'*56}\n")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Create ProofPatch outreach drafts in Gmail. Never auto-sends.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    # Batch mode
    parser.add_argument("--leads", default=str(LEADS_CSV), metavar="FILE",
                        help=f"leads CSV (default: {LEADS_CSV})")
    # Single-lead mode
    parser.add_argument("--to", metavar="EMAIL", help="Recipient email (single-lead mode)")
    parser.add_argument("--name", metavar="NAME", help="Recipient name (single-lead mode)")
    parser.add_argument("--context", metavar="TEXT",
                        help="One sentence about their specific work (personalization hook)")
    parser.add_argument("--notes", default="", metavar="TEXT",
                        help="Optional: 'agency', 'founder', etc. — controls template selection")
    # Mode
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--dry-run", action="store_true",
                      help="Print email bodies without contacting Gmail")
    mode.add_argument("--create", action="store_true",
                      help="Authenticate Gmail and create drafts")
    args = parser.parse_args()

    if not COLD_MESSAGES_MD.exists():
        print(f"❌  cold-messages.md not found: {COLD_MESSAGES_MD}")
        sys.exit(1)

    templates = parse_templates(COLD_MESSAGES_MD)

    # ── Single-lead mode ───────────────────────────────────────────────────────
    if args.to or args.name:
        if not args.to or not args.name:
            parser.error("Single-lead mode requires both --to and --name")
        lead = {
            "name": args.name,
            "email": args.to,
            "personalization": args.context or "",
            "notes": args.notes,
            "source": "manual",
            "status": "approved",
        }
        print(f"\n{'='*62}")
        if args.dry_run:
            print(f"  DRY RUN — single lead")
            print(f"{'='*62}\n")
            print_draft_preview(lead, templates)
        else:
            print(f"  Creating draft for {args.to} ...")
            print(f"{'='*62}\n")
            print_draft_preview(lead, templates)
            service = get_gmail_service()
            body = build_body(lead, pick_template(lead, templates))
            draft_id = create_draft(service, args.to, SUBJECT, body)
            print(f"  ✅  Draft id={draft_id}  →  {args.to}")
            append_tracker(TRACKER_CSV, lead, drafted=True)
            print(f"\n  Review at: https://mail.google.com/#drafts")
            print(f"  Nothing was sent. Send manually after reviewing.\n")
        return

    # ── Batch mode ─────────────────────────────────────────────────────────────
    leads_path = Path(args.leads)
    if not leads_path.exists():
        print(f"❌  Leads file not found: {leads_path}")
        sys.exit(1)

    if args.dry_run:
        leads = load_leads(leads_path)
        sendable = [r for r in leads if r.get("status", "").strip() not in ("drafted", "skip")]
        print(f"\n{'='*62}")
        print(f"  DRY RUN — {len(sendable)} lead(s) (status != drafted/skip)")
        print(f"  Set status=approved then run --create to push to Gmail")
        print(f"{'='*62}\n")
        for lead in sendable:
            if not lead.get("email", "").strip() or "@" not in lead.get("email", ""):
                print(f"  ⚠  SKIP  {lead.get('name', '?')} — no valid email\n")
                continue
            status_tag = f"[{lead.get('status', '?').upper()}]"
            print(f"  {status_tag} {lead.get('name', '?')}")
            print_draft_preview(lead, templates)
        return

    # --create batch
    leads = load_leads(leads_path, status_filter="approved")
    if not leads:
        print("\n⚠  No leads with status='approved' in leads.csv.")
        print("   Open leads.csv, set status=approved for rows you want drafted, then re-run.\n")
        sys.exit(0)

    service = get_gmail_service()
    print(f"\nCreating {len(leads)} draft(s) → matei4business@gmail.com\n")
    created = 0
    for lead in leads:
        email = lead.get("email", "").strip()
        if not email or "@" not in email:
            print(f"  ⚠  SKIP  {lead.get('name', '?')} — no valid email")
            continue
        body = build_body(lead, pick_template(lead, templates))
        draft_id = create_draft(service, email, SUBJECT, body)
        print(f"  ✅  Draft id={draft_id}  →  {email}")
        mark_drafted(leads_path, email)
        append_tracker(TRACKER_CSV, lead, drafted=True)
        created += 1

    print(f"\n{'='*62}")
    print(f"  {created} draft(s) created. Nothing was sent.")
    print(f"  Review at: https://mail.google.com/#drafts")
    print(f"  Send each one manually after reviewing.")
    print(f"{'='*62}\n")


if __name__ == "__main__":
    main()
