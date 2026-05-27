# ProofPatch outreach tools

## create_gmail_drafts.py

Reads `leads.csv`, generates personalized cold emails from `cold-messages.md` templates, and creates Gmail drafts in `matei4business@gmail.com`.

**Emails are never sent automatically. All sends happen manually in the Gmail UI.**

---

## Setup: Google Cloud OAuth credentials (one-time, ~8 minutes)

1. Go to [https://console.cloud.google.com/](https://console.cloud.google.com/) → create a project (any name, e.g. `proofpatch-outreach`)
2. **APIs & Services → Library** → search "Gmail API" → **Enable**
3. **APIs & Services → OAuth consent screen**
   - User type: **External**
   - App name: `ProofPatch Outreach`
   - Support email: `matei4business@gmail.com`
   - Developer contact: `matei4business@gmail.com`
   - Scopes: add `https://www.googleapis.com/auth/gmail.compose`
   - Test users: add `matei4business@gmail.com`
   - Save and continue through all steps
4. **APIs & Services → Credentials → + CREATE CREDENTIALS → OAuth client ID**
   - Application type: **Desktop app**
   - Name: `ProofPatch Draft Tool`
   - Click **Create** → **Download JSON**
5. Save the downloaded file to:
   ```
   ~/.config/proofpatch-outreach/credentials.json
   ```
   This file stays outside the repo and is never committed.

---

## Install Python dependencies (one-time)

```bash
pip install google-auth-oauthlib google-api-python-client --break-system-packages
```

---

## How to add leads

Edit `go-to-market/leads.csv`. Columns:

| Column | Description |
|---|---|
| `name` | Full name or handle |
| `email` | Recipient email address |
| `source` | Where you found them (GitHub, Twitter, etc.) |
| `repo_or_profile_url` | Link to their profile or relevant repo |
| `observed_ai_tool` | Which AI coding tool they use (Claude Code, Cursor, etc.) |
| `personalization` | One sentence about their specific work — injected at the top of the email |
| `status` | `new` → `approved` → `drafted` (or `skip`) |
| `notes` | Internal notes, priority, etc. |

**To queue a lead for drafting: set `status=approved` in the CSV.**

---

## Dry run — preview emails without touching Gmail

```bash
python go-to-market/tools/create_gmail_drafts.py --dry-run
```

Prints every email body to the terminal. No network calls. No authentication required.

---

## Create drafts — push to Gmail Drafts folder

```bash
python go-to-market/tools/create_gmail_drafts.py --create
```

On first run, a browser window opens for OAuth authorization with `matei4business@gmail.com`. The token is saved to `~/.config/proofpatch-outreach/token.json` and reused automatically on subsequent runs.

Only leads with `status=approved` in `leads.csv` are drafted. After each draft is created:
- `leads.csv` status is updated to `drafted`
- A row is appended to `outreach-tracker.csv`

---

## Review and send manually

1. Go to [https://mail.google.com](https://mail.google.com) (logged in as `matei4business@gmail.com`)
2. Open **Drafts**
3. Read each draft in full — edit recipient, subject, or body as needed
4. Click **Send** when satisfied

**Never ask the script or Claude Code to send. Always send from Gmail UI after your own review.**

---

## Credential locations (outside repo, never committed)

```
~/.config/proofpatch-outreach/
  credentials.json    ← OAuth client (from Google Cloud — download once)
  token.json          ← refresh token (auto-created on first --create run)
```

---

## Other files

| File | Purpose |
|---|---|
| `create_gmail_draft.py` | Lower-level single-draft utility (accepts --to, --subject, --body directly) |
| `batch_drafts_template.json` | Template for batch mode of the single-draft utility |
