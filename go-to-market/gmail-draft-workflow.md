# Gmail Draft Workflow — ProofPatch

**Sender:** Matei / ProofPatch — matei4business@gmail.com
**Rule:** Draft only. Never auto-send. Send manually from Gmail UI.

---

## How to authenticate matei4business@gmail.com

### What you need from Google Cloud Console (one-time, ~8 minutes)

1. Go to https://console.cloud.google.com/
2. Create a project (name it anything, e.g. `proofpatch-outreach`)
3. **APIs & Services → Library** → search "Gmail API" → **Enable**
4. **APIs & Services → OAuth consent screen**
   - User type: **External**
   - App name: `ProofPatch Outreach`
   - Support email: `matei4business@gmail.com`
   - Developer contact email: `matei4business@gmail.com`
   - Scopes: add `https://www.googleapis.com/auth/gmail.compose`
   - Test users: add `matei4business@gmail.com`
   - Save and continue through all steps
5. **APIs & Services → Credentials → + CREATE CREDENTIALS → OAuth client ID**
   - Application type: **Desktop app**
   - Name: `ProofPatch Draft Tool`
   - Click **Create**
   - Click **Download JSON**
   - Save the file to: `~/.config/proofpatch-outreach/credentials.json`

That file never goes in the repo.

### Run auth once to get the token

```bash
python3 go-to-market/tools/create_gmail_draft.py --auth-only
```

A browser window opens (or a URL is printed — paste it in your Windows browser on WSL2).
Authorize with `matei4business@gmail.com`.
Token is saved to `~/.config/proofpatch-outreach/token.json`.

After this, `create_gmail_draft.py` works without re-authorizing until the token expires (it auto-refreshes).

---

## What tools and scopes are used

### Python script (primary tool)

**Path:** `go-to-market/tools/create_gmail_draft.py`
**Scope:** `https://www.googleapis.com/auth/gmail.compose`

This scope allows:
- Creating and updating drafts
- Sending messages (but the script never calls the send API)

This scope does NOT allow:
- Reading your inbox or sent mail
- Accessing any other Google service
- Deleting messages

### MCP server (Claude Code integration)

**Path:** `~/.local/gmail-mcp-server/dist/index.js` (outside repo)
**Config:** `~/.claude/settings.json` → mcpServers → gmail
**Scope:** gmail.readonly + gmail.send + gmail.modify (broader, set in OAuth flow)
**Status:** Built and registered. Needs `~/.local/gmail-mcp-server/.env` with credentials.

The Python script is the more immediate path. Use it for batches and the CLI. The MCP server activates inside Claude Code once `.env` credentials are added (see `gmail-outreach-setup.md`).

---

## How to run lead search

Use the `gh` CLI (already installed) to find targets:

```bash
# People actively using Claude Code
gh search repos "CLAUDE.md" --limit 20 --json fullName,description,owner,updatedAt,stargazersCount

# AI coding workflow builders
gh search repos "AI coding workflow" --limit 20 --json fullName,description,owner,updatedAt

# People with evidence-backed or safety-oriented AI workflows
gh search repos "agentic workflow" --topic "safety" --limit 15 --json fullName,description,owner

# Check a specific user's profile for email/Twitter
gh api users/USERNAME | jq '{email:.email, twitter:.twitter_username, blog:.blog, bio:.bio}'
```

See full query list in `go-to-market/outreach-targets.md`.
Log found leads in `go-to-market/leads.md` before drafting.

---

## How to create drafts

### Single draft

```bash
python3 go-to-market/tools/create_gmail_draft.py \
  --to recipient@example.com \
  --subject "Subject line" \
  --body "Message body.

— Matei"
```

### Batch drafts from JSON file

```bash
# Edit the template, then run:
python3 go-to-market/tools/create_gmail_draft.py \
  --batch go-to-market/tools/batch_drafts_template.json
```

The JSON format:
```json
[
  {
    "to": "person@example.com",
    "subject": "Subject",
    "body": "Body text\n\n— Matei"
  }
]
```

All drafts go to Gmail Drafts folder. Nothing is sent.

---

## How to review drafts before sending

1. Go to https://mail.google.com (logged in as matei4business@gmail.com)
2. Open **Drafts** folder
3. Review each draft: recipient, subject, body
4. Edit if needed directly in Gmail
5. Click **Send** manually when satisfied

**Never ask Claude Code to send emails. Always send from the Gmail UI after your own review.**

---

## How to disable or revoke access

### Revoke the token (immediate, no browser needed)

```bash
python3 -c "
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from pathlib import Path
import json
token = Path.home() / '.config/proofpatch-outreach/token.json'
creds = Credentials.from_authorized_user_file(str(token))
import requests
requests.post('https://oauth2.googleapis.com/revoke', params={'token': creds.token})
token.unlink()
print('Token revoked and deleted.')
"
```

### Revoke from Google account settings

1. Go to https://myaccount.google.com/permissions
2. Find `ProofPatch Outreach` (or whatever app name you used)
3. Click **Remove Access**

### Delete the OAuth client entirely

1. Go to https://console.cloud.google.com/
2. APIs & Services → Credentials
3. Find the Desktop app credential → Delete

---

## Safety rules

1. **No auto-send.** The script never calls `users().messages().send()`. Only `users().drafts().create()`.
2. **No secrets in repo.** `credentials.json` and `token.json` live in `~/.config/proofpatch-outreach/` — outside the repo and gitignored.
3. **No spam.** Maximum 10 outreach emails per day. Every message personalized to the recipient.
4. **No fake leads.** Only contact people with a verified public profile and a clear reason to care about ProofPatch.
5. **No broad scopes.** Only `gmail.compose` requested for the Python script.
6. **Review before sending.** Every draft must be read in full in the Gmail UI before clicking Send.
7. **One ask per message.** Never pitch pricing in first contact. End with one question.

---

## Credential storage map

```
~/.config/proofpatch-outreach/       ← outside repo, gitignored
  credentials.json                   ← OAuth client (from Google Cloud)
  token.json                         ← refresh token (auto-created)

~/.local/gmail-mcp-server/           ← outside repo
  .env                               ← MCP server credentials (not yet created)

~/.claude/settings.json              ← Claude Code config, uses envFile path
```

None of these paths are inside the repo. The repo `.gitignore` blocks `.env`, `gmail-*.json`, and `*_refresh_token.txt` as an extra safety net.
