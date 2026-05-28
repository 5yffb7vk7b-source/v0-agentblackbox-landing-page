# Gmail Outreach Setup — ProofPatch

**Sender:** Matei / ProofPatch `<matei4business@gmail.com>`
**Behavior:** Draft-only by default. Send only on explicit approval.

---

## Current status

| Component | State |
|---|---|
| MCP server binary | ✅ Built — `~/.local/gmail-mcp-server/dist/index.js` |
| Claude Code `~/.claude/settings.json` | ✅ Configured — points to server + envFile |
| `.env` credentials file | ❌ Not created — needs Google Cloud client_id + secret |
| OAuth refresh token | ❌ Not obtained — needs `npm run setup` after .env |
| Gmail MCP tools live in session | ❌ Will appear after .env + restart |

---

## What is installed

**Tool:** [`JaviEzpeleta/gmail-mcp-server`](https://github.com/JaviEzpeleta/gmail-mcp-server) v1.1.0
**Location:** `~/.local/gmail-mcp-server/` — outside this repo, never committed
**MCP tools available after auth:**
- `create_draft` — creates a Gmail draft (to, subject, body, cc, bcc)
- `list_emails` — list recent emails with filters
- `get_email_details` — fetch full email content
- `search_emails` — Gmail search syntax
- `find_and_draft_reply` — find latest from a sender and draft reply

**Send is disabled by default.** `GMAIL_ALLOW_DIRECT_SEND=false` in `.env`.

---

## Claude Code settings.json (already configured)

`~/.claude/settings.json` now contains:

```json
{
  "mcpServers": {
    "gmail": {
      "command": "node",
      "args": ["/home/kali/.local/gmail-mcp-server/dist/index.js"],
      "envFile": "/home/kali/.local/gmail-mcp-server/.env"
    }
  }
}
```

The server will auto-load on next Claude Code restart once the `.env` file exists with valid credentials.

---

## One-time Google Cloud setup (~8 minutes in browser)

1. **Go to:** https://console.cloud.google.com/
2. **New project** — name it `proofpatch-outreach` (or anything)
3. **APIs & Services → Library** → search "Gmail API" → **Enable**
4. **APIs & Services → OAuth consent screen**
   - User type: **External**
   - App name: `ProofPatch Outreach`
   - Support email: `matei4business@gmail.com`
   - Developer contact: `matei4business@gmail.com`
   - Scopes: add `gmail.readonly`, `gmail.send`, `gmail.modify`
   - Test users: add `matei4business@gmail.com`
   - Save and continue through all steps
5. **APIs & Services → Credentials → + CREATE CREDENTIALS → OAuth client ID**
   - Type: **Web application** (not Desktop)
   - Name: `Gmail MCP Web Client`
   - Authorized redirect URI: `http://localhost:8765/oauth2callback`
   - Click Create → copy **Client ID** and **Client Secret**

---

## Create the credentials file

Run in terminal (replace placeholders with real values):

```bash
! cat > ~/.local/gmail-mcp-server/.env << 'EOF'
GMAIL_CLIENT_ID=YOUR_CLIENT_ID.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=YOUR_CLIENT_SECRET
GMAIL_REFRESH_TOKEN=
GMAIL_ALLOW_DIRECT_SEND=false
OAUTH_REDIRECT_PORT=8765
EOF
```

---

## Get the refresh token

```bash
! cd ~/.local/gmail-mcp-server && npm run setup
```

The script starts a local server on port 8765 and prints a URL.
**On WSL2:** paste the URL into your Windows browser. `localhost:8765` maps correctly.
Authorize with `matei4business@gmail.com`.

The terminal prints:
```
GMAIL_CLIENT_ID=...
GMAIL_CLIENT_SECRET=...
GMAIL_REFRESH_TOKEN=1//0g...      ← copy this value
```

Edit the `.env` file and paste the refresh token value:
```bash
! nano ~/.local/gmail-mcp-server/.env
```

---

## Activate in Claude Code

Restart the Claude Code session. The `gmail` MCP tools will appear.

**Verify:** tell Claude Code: _"list the gmail MCP tools available"_ — you should see `create_draft`.

---

## Creating a draft (day-to-day)

Tell Claude Code:
> "Draft an email using the gmail MCP tool.
> To: [recipient]
> Subject: [subject]
> Body: [message]
> Sign as Matei."

Claude Code calls `create_draft`. The draft appears in Gmail at mail.google.com → Drafts.
**Nothing is sent.**

---

## Sending (only after explicit approval)

Default: send is disabled. To enable for a single batch:

**Option 1 (safer) — send from Gmail UI:**
Review drafts at mail.google.com. Click Send manually. No flag changes needed.

**Option 2 — enable MCP send temporarily:**
```bash
! sed -i 's/GMAIL_ALLOW_DIRECT_SEND=false/GMAIL_ALLOW_DIRECT_SEND=true/' ~/.local/gmail-mcp-server/.env
```
After sending, immediately revert:
```bash
! sed -i 's/GMAIL_ALLOW_DIRECT_SEND=true/GMAIL_ALLOW_DIRECT_SEND=false/' ~/.local/gmail-mcp-server/.env
```

**Do not say "send now" unless you have reviewed the recipient, subject, and body first.**

---

## Credential security

| Rule | Detail |
|---|---|
| `.env` location | `~/.local/gmail-mcp-server/.env` — outside this repo |
| Repo `.gitignore` | Blocks `.env`, `gmail-*.json`, `*_refresh_token.txt` |
| `settings.json` | Uses `envFile` path — no credentials in the file itself |
| Never commit | client_id, client_secret, refresh_token |
| If exposed | Revoke at https://console.cloud.google.com → Credentials |

---

## Minimum Gmail permissions

The OAuth scope set is the minimum needed:
- `gmail.readonly` — read emails (for search/list)
- `gmail.send` — send and draft
- `gmail.modify` — modify labels/threads

No access to Google Drive, Calendar, Contacts, or any other Google service.
