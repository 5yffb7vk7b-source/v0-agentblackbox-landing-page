# ProofPatch Product Positioning

> Derived from: README.md, app/brand.ts, app/page.tsx, go-to-market/founder-sales-plan.md,
> go-to-market/cold-messages.md, go-to-market/demo-script.md, go-to-market/leads.md,
> go-to-market/outreach-targets.md. No invented claims.

---

## One-Line Definition

ProofPatch is a local CLI that wraps AI coding-agent sessions and produces a reviewable evidence trail — commands, Git changes, failures, blocked actions, and rollback plans — before a generated patch ships.

*(Source: README.md, brand.ts tagline, page.tsx hero copy)*

---

## What ProofPatch Does

### The CLI command

```
proofpatch run --project . --label "session-name" -- <any command>
```

Run any command (tests, linters, scripts) through ProofPatch. It wraps the execution and records everything around it.

*(Legacy CLI name: `agentblackbox`. Preferred name going forward: `proofpatch`.)*

### What it records

| Record | What is captured |
|--------|-----------------|
| **Commands** | The exact local checks, workflow runs, and review commands around an agent session |
| **Git changes** | Before and after file state so reviewers can see what the patch touched |
| **Failures** | Exit codes, stderr, timed-out runs, and failed verification steps in one trail |
| **Blocks** | Risky commands and policy decisions that stopped unsafe workflow execution |
| **Rollback plans** | Local recovery context for changed, created, and untracked files |
| **Next actions** | Review prompts that point developers toward the safest follow-up |

*(Source: page.tsx `proofItems` array)*

### What it outputs

- **Local HTML report** — run summary, diffs, blocks, failures (`reports/run-YYYYMMDD.html`)
- **Markdown and JSON reports** — for each run, diff, failure, and review evidence trail
- **Workflow Intelligence Dashboard** — review workflow status, risk, blocked commands, failures, reports, and next actions locally
- **Run compare output** — compare saved runs: command, output, status, cost, Git change differences

All output stays on disk in the local repo. No upload. No login. No hosted service.

*(Source: page.tsx `features` array, brand.ts shortDescription)*

### What it checks / enforces

- **Risky-command blocking** — policy-defined commands are blocked and logged, not silently skipped
- **Secret redaction** — sensitive tokens in captured output are redacted before writing to reports
- **Timeouts** — hanging commands are terminated, not left to run indefinitely
- **Dry-run mode** — workflow YAML can be validated and risk-scored before execution

*(Source: page.tsx `trustItems`, demo-script.md)*

### Workflow layer

ProofPatch can also plan, dry-run, and execute multi-step workflow YAML files for AI coding-agent tasks:

```
proofpatch workflow run workflows/tasks/release-workflow.yml --dry-run
proofpatch workflow report latest --html
```

The dry-run shows mode, risk level, and recommended next action before anything executes.

*(Source: page.tsx terminal demo, demo-script.md)*

### Where it runs

- In your **local repo**, from the terminal
- Installed via `pip install -e .` (Python, virtual environment)
- No hosted dashboard required
- External agents (Claude Code, Cursor, Codex) remain manual — ProofPatch wraps them, not the other way around

*(Source: page.tsx trustItems, README.md quickstart)*

### What problem it solves

AI coding agents (Claude Code, Cursor, Codex, Windsurf, GitHub Copilot) write code fast. The problem: there is no structured record of *what the agent actually ran*, *what it changed*, *what failed*, *what was blocked*, or *how to undo it* if the patch is wrong.

The git diff shows what changed. It does not show what commands ran, what was blocked, what timed out, or what a rollback would require.

ProofPatch is the missing evidence layer between "the agent ran" and "I merged the patch."

*(Source: page.tsx "A patch is not proof. The trail around it is.", demo-script.md opening line)*

---

## What ProofPatch Is NOT

- **Not a generic website audit service.** ProofPatch has no features for auditing small-business websites, reviewing landing pages, or fixing design issues. The small-business outreach batch created earlier (go-to-market/small-business-website-leads.md) was a wrong turn — those 10 Gmail drafts are filed separately and should not be sent as ProofPatch outreach.

- **Not a design agency or freelance web service.** ProofPatch does not review visual design, fix broken images, correct typos on external websites, or consult on UX. None of its code does any of this.

- **Not a cold-email website-fix offer.** The pitch "I found a bug on your website — here's how to fix it" is not ProofPatch. That is a separate service concept that conflicts with the developer-tool positioning.

- **Not just a landing page.** This repo (`v0-agentblackbox-landing-page`) is the marketing site only. The actual CLI source lives at `github.com/5yffb7vk7b-source/agentblackbox`. The product is a real local CLI tool with tests, workflow YAML support, report generation, and policy enforcement.

- **Not just a wrapper around Claude Code.** ProofPatch works around Codex, Claude Code, Claude Desktop, Cursor, Windsurf, and any local coding assistant. The agent is irrelevant to ProofPatch's operation — it wraps whatever command you give it.

- **Not a cloud service or SaaS dashboard.** There is no login, no upload, no hosted report viewer. Everything stays in the local repo.

*(Source: page.tsx trustItems, README.md, brand.ts, demo-script.md)*

---

## Primary ICP

The right buyer is someone who is **already using an AI coding agent in a real workflow** and has felt — or anticipates — the problem of not having a clear record of what the agent did.

### Highest-fit profiles

| Profile | Why they fit |
|---------|-------------|
| **Claude Code power users** | Daily users who have felt the "what did it actually run?" gap after a session |
| **Cursor users** | Using `.cursorrules` and watching the agent make changes — ProofPatch captures the evidence trail |
| **Codex CLI users** | Running Codex in CI or locally and need a structured record per run |
| **GitHub Copilot users** | Using Copilot for code suggestions and needing a diff + execution record |
| **AGENTS.md / CLAUDE.md / .cursorrules authors** | People who already think carefully about agent instructions — they understand the gap ProofPatch fills |
| **AI-heavy dev agencies** | Agencies shipping AI-assisted code to clients who need an audit trail as a deliverable |
| **Technical founders / solo devs** | Shipping fast with AI tools and wanting reviewable evidence before merging |
| **Open source maintainers** | Accepting AI-generated PRs and needing structured review evidence |
| **Vibe-coders with production stakes** | People who built apps quickly with AI and now need confidence before deploying |

### Who to reach first (ranked by buyer signal)

1. People who have already built adjacent tools (HOTL, speclock, agnix, ctxharness, claude-reflect) — they understand the problem
2. Agencies using Claude Code for client work (HouseofMVPs, Intent Solutions) — client deliverable angle
3. Open source maintainers of AI workflow tools (iannuttall, awesome-claude-code) — influence + distribution
4. Technical founders actively using AI coding tools to ship their product
5. Content creators with Claude Code audiences (claude-code-mastery, claude-code-templates) — distribution

*(Source: go-to-market/leads.md, go-to-market/outreach-targets.md, go-to-market/founder-sales-plan.md)*

---

## Core Pain

AI agents can change code quickly. After a session, developers typically have:
- The git diff (what changed in files)
- Whatever their test suite reported (pass/fail)

They do not have:
- A record of every command the agent ran
- Which commands were blocked and why
- Stderr, exit codes, and timeouts from verification steps
- A structured rollback plan for what was created or modified
- A comparison between this run and a previous run

The result: developers either blindly trust the diff, or spend time manually reconstructing what happened. Neither is a workflow. Both are gaps ProofPatch fills.

*(Source: page.tsx section "A patch is not proof. The trail around it is.", demo-script.md opening)*

---

## Core Promise

ProofPatch gives developers a local, reviewable audit trail for AI coding sessions — so every generated patch has visible evidence before it ships.

The evidence stays in your repo. Nothing leaves your machine. The agent still writes code at full speed. ProofPatch records the trail that makes reviewing it trustworthy.

*(Source: README.md, brand.ts shortDescription, page.tsx hero)*

---

## Best Outreach Angle

**Lead with the gap, not the tool.**

The highest-converting opening is a question about their current review process:

> "After a Claude Code session, do you have any record of what commands actually ran — not just the diff?"

If they say "I just check the diff" or "I run the tests and hope," they have the pain. The tool pitch comes after that.

**Second-best angle: point to their own work.**

When contacting people who built adjacent tools (HOTL, speclock, agnix, ctxharness), the angle is the specific gap their tool doesn't cover yet. They already understand the problem — the conversation is about complementary coverage, not education.

**For agencies:**

> "When you hand off a Claude Code build, what do you give the client if they ask what the AI actually changed?"

The client accountability angle is the clearest $200 sale for an agency. It is a concrete deliverable, not an abstract audit concept.

**Offer structure:**

> "Early setup is $200 flat — I clone it into your repo, configure it for your stack, walk you through the first run. One 60–90 minute session."

*(Source: go-to-market/cold-messages.md, go-to-market/founder-sales-plan.md)*

---

## Bad Outreach Angles to Avoid

| Angle | Why it is wrong |
|-------|----------------|
| "I found a bug on your website — quick fix idea" | This is what the small-business website-fix batch did. It is not ProofPatch. It positions us as a freelance web-fix service, not a developer tool. Do not send those drafts as ProofPatch outreach. |
| "Website audit for your small business" | Same problem. ProofPatch has no small-business product. This wastes goodwill and confuses the ProofPatch brand. |
| "We help teams improve their site without guessing" | Generic, wrong ICP, wrong product. |
| "AI platform for code quality" | Too vague. ProofPatch is a local CLI, not a platform. The word "platform" is explicitly banned in cold-messages.md. |
| "Solution for your development team" | Too vague. "Solution" is explicitly banned in cold-messages.md. |
| Leading with the GitHub link in the first message | Sends people to the tool before they've confirmed they have the pain. |
| Pitching the price before confirming the problem | $200 is only the right answer after "yes, I have that problem." |

*(Source: go-to-market/cold-messages.md general rules, this session's small-business-website-leads.md mismatch)*

---

## Contradictions Found Between Files

| File | Claim | Actual state | Notes |
|------|-------|-------------|-------|
| `go-to-market/small-business-website-leads.md` | 10 Gmail drafts to small businesses about website bugs | ProofPatch has no website-fix product | Drafts exist in Gmail. Do not send them as ProofPatch outreach. They could work for a separate side project but are off-brand for ProofPatch. |
| `go-to-market/outreach-tracker.csv` (original) | Schema: `date,name,email,source,status,draft_created,followup_due,notes` | New schema added this session | The original schema was replaced with a richer one in this session. No data was lost (it was empty). |
| `go-to-market/today-outreach-list.md` (prior version) | Referenced "Gmail not yet authenticated" | Gmail MCP is now connected and functional | The auth note was stale. The Gmail MCP worked in this session. Update the status note before sending. |
| `brand.ts` CLI name | `currentPreferredCli: "proofpatch"`, `legacyCliName: "agentblackbox"` | GitHub repo is still named `agentblackbox` | The CLI command `proofpatch` is preferred but the GitHub URL still uses `agentblackbox`. The quickstart clones to `proofpatch/` dir, which is correct. No action needed unless the repo is renamed. |
| `README.md` "Live site" | `https://proofpatch-landing.vercel.app` | Should be verified as live before outreach links it | Confirm the Vercel deployment is current before sending any email that references the landing page URL. |
