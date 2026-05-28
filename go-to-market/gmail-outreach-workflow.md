# Gmail Outreach Workflow — ProofPatch

All cold outreach email for ProofPatch is sent from:

```
Sender:   Matei / ProofPatch
Email:    matei4business@gmail.com
Reply-To: matei4business@gmail.com
```

**Draft first. Always. Send only after explicit approval.**

---

## How Gmail auth is set up

**Tool:** `JaviEzpeleta/gmail-mcp-server` v1.1.0
**Location:** `~/.local/gmail-mcp-server/` (outside this repo — never committed)
**Entry point:** `~/.local/gmail-mcp-server/dist/index.js`
**Auth type:** OAuth 2.0, Web application credentials (Google Cloud Console)
**Default mode:** `GMAIL_ALLOW_DIRECT_SEND=false` — creates drafts only

The MCP server is registered in `~/.claude/settings.json` (user-level Claude Code config).
It is NOT in the project repo. Credentials are NOT in the repo.

---

## Where credentials live

| File | Location | In repo? |
|---|---|---|
| OAuth client ID + secret | `~/.local/gmail-mcp-server/.env` | No — gitignored at server level |
| Refresh token | `~/.local/gmail-mcp-server/.env` | No |
| Built server binary | `~/.local/gmail-mcp-server/dist/index.js` | No — separate clone |
| MCP config | `~/.claude/settings.json` | No — user-level, outside repo |

The `.env` inside `~/.local/gmail-mcp-server/` is gitignored by that repo's own `.gitignore`.
This repo's `.gitignore` also blocks: `.env`, `gmail-credentials.json`, `gmail-token.json`, `*_refresh_token.txt`, `oauth_tokens/`.

---

## One-time setup checklist

### Step 1 — Google Cloud Console (browser, ~10 minutes)

1. Go to https://console.cloud.google.com/
2. Create a new project: name it `proofpatch-gmail-mcp` (or any name)
3. Go to **APIs & Services → Library**
4. Search "Gmail API" → click **Enable**
5. Go to **APIs & Services → OAuth consent screen**
   - User type: **External**
   - App name: `ProofPatch Outreach`
   - Support email: `matei4business@gmail.com`
   - Developer contact: `matei4business@gmail.com`
   - Add scopes: `gmail.readonly`, `gmail.send`, `gmail.modify`
   - Add test user: `matei4business@gmail.com`
   - Save and continue through all steps
6. Go to **APIs & Services → Credentials**
   - Click **+ CREATE CREDENTIALS → OAuth client ID**
   - Application type: **Web application** (NOT Desktop)
   - Name: `Gmail MCP Web Client`
   - Authorized redirect URIs: `http://localhost:8765/oauth2callback`
   - Click Create
7. Copy the **Client ID** and **Client Secret** — you'll need them next

### Step 2 — Create the .env file

```bash
# Run this in terminal (! prefix sends to Claude Code shell)
cat > ~/.local/gmail-mcp-server/.env << 'EOF'
GMAIL_CLIENT_ID=PASTE_CLIENT_ID_HERE
GMAIL_CLIENT_SECRET=PASTE_CLIENT_SECRET_HERE
GMAIL_REFRESH_TOKEN=
GMAIL_ALLOW_DIRECT_SEND=false
OAUTH_REDIRECT_PORT=8765
EOF
```

### Step 3 — Run the OAuth setup to get the refresh token

```bash
cd ~/.local/gmail-mcp-server && npm run setup
```

This starts a local server on port 8765, prints an authorization URL.
Open the URL in your browser (on WSL2: paste into Windows browser — localhost:8765 is accessible).
Authorize with `matei4business@gmail.com`.
The terminal will print:

```
GMAIL_CLIENT_ID=...
GMAIL_CLIENT_SECRET=...
GMAIL_REFRESH_TOKEN=1//0g...  ← copy this
```

Edit `~/.local/gmail-mcp-server/.env` and paste the refresh token value.

### Step 4 — Configure Claude Code MCP

Tell Claude Code: "Add the Gmail MCP server to settings" and it will add this block to
`~/.claude/settings.json` (do NOT paste credentials into this file — use the .env path):

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

### Step 5 — Restart Claude Code

Close and reopen the Claude Code session. The `gmail` MCP tools will appear.
Verify with: "list the gmail MCP tools available" — you should see `create_draft`, `list_emails`, `search_emails`, `get_email_details`.

### Step 6 — Send test draft

Ask Claude Code:
> "Create a Gmail draft to matei4business@gmail.com with subject 'ProofPatch Gmail draft test' and body 'This is a test draft. If you see this in Gmail drafts, the setup worked.'"

Check Gmail Drafts folder at mail.google.com to confirm.

---

## How to create a draft (day-to-day workflow)

Tell Claude Code:
> "Draft an email to [address] — subject: [subject]. Use the ProofPatch outreach message for [audience type] from go-to-market/today-outreach-list.md. Sign as Matei."

Claude Code will call `create_draft` with:
- `to`: recipient address
- `subject`: subject line
- `body`: message body
- `from`: matei4business@gmail.com (inferred from authenticated account)

The draft appears in Gmail's Drafts folder. **Nothing is sent yet.**

---

## How to send only after approval

Default state: `GMAIL_ALLOW_DIRECT_SEND=false` in the `.env` file.
The `send_email` tool exists but returns an error if this flag is false.

**To enable sending for a session:**

1. Review drafts in Gmail (mail.google.com → Drafts)
2. When satisfied, tell Claude Code: "send now" explicitly
3. Claude Code will ask you to confirm which drafts to send
4. Before sending, temporarily set `GMAIL_ALLOW_DIRECT_SEND=true` in the .env:
   ```bash
   sed -i 's/GMAIL_ALLOW_DIRECT_SEND=false/GMAIL_ALLOW_DIRECT_SEND=true/' ~/.local/gmail-mcp-server/.env
   ```
5. After sending, immediately revert:
   ```bash
   sed -i 's/GMAIL_ALLOW_DIRECT_SEND=true/GMAIL_ALLOW_DIRECT_SEND=false/' ~/.local/gmail-mcp-server/.env
   ```

**Alternative (safer):** Just send drafts directly from Gmail's web UI.
The MCP server creates the draft; you click Send in Gmail. No flag changes needed.

---

## How to log sent outreach in outreach-tracker.csv

After each email is sent (either via MCP or Gmail UI), update the CSV:

```
status     → contacted
last_contacted → YYYY-MM-DD
notes      → append: "Emailed via matei4business@gmail.com. [subject line]"
```

When a reply comes in:
```
status     → replied
notes      → append: "[date] replied: [brief summary]"
```

When a call is booked:
```
status     → call_booked
```

When a setup is paid:
```
status     → client
notes      → append: "$200 paid YYYY-MM-DD"
```

---

## Security rules

1. Never commit `.env` files, token files, or credentials to git.
2. Never paste `GMAIL_CLIENT_SECRET` or `GMAIL_REFRESH_TOKEN` into a repo file.
3. Never put credentials in `~/.claude/settings.json` as plain values — always use `envFile`.
4. `GMAIL_ALLOW_DIRECT_SEND` defaults to `false`. Change only when explicitly sending, then revert.
5. If credentials are ever exposed (committed, logged, shared), revoke immediately at:
   https://console.cloud.google.com/ → Credentials → Delete the OAuth client.

---

## Current auth status

| Item | Status |
|---|---|
| Server cloned | ✅ `~/.local/gmail-mcp-server/` |
| Dependencies installed | ✅ `npm install` done |
| TypeScript built | ✅ `dist/index.js` ready |
| `.env` file created | ❌ Needs Google Cloud credentials |
| OAuth refresh token obtained | ❌ Needs `npm run setup` after Step 2 |
| Claude Code settings.json updated | ❌ Needs credentials first |
| Test draft sent | ❌ Pending |

**Next action:** Complete Step 1 (Google Cloud Console) then tell Claude Code your Client ID and Client Secret.
