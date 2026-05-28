# Demo Script — ProofPatch (60 seconds)

Format: screen recording. Terminal on left, or full screen terminal switching to browser.
No intro slide. No music. Start mid-action.

---

## Setup before recording

- Have a real project open (the ProofPatch repo itself works)
- Have `proofpatch` installed and on PATH
- Have a workflow YAML ready at `workflows/tasks/release-workflow.yml`
- Clear the terminal. Font size 18+.
- Record at 1280×720 minimum

---

## Script

**[0:00–0:08] — Start talking before the first keypress**

> "I just had Claude Code make some changes to this repo. Before I merge anything, I want to see exactly what it ran, what it changed, and whether I can roll it back. This is ProofPatch."

Type:
```
proofpatch run --project . --label "claude-session" -- pytest -q
```

**[0:08–0:22] — Let it run, talk over the output**

Output appears:
```
8 passed in 0.4s
HTML report: reports/run-20260527.html
Rollback plan: ready
```

> "It wraps the test command. Captures every line of output, the exit code, timing. If there were secrets in the output, they'd be redacted. And it's already built a rollback plan for what changed."

**[0:22–0:35] — Show the evidence**

Type:
```
proofpatch latest
```

Output shows: label, timestamp, exit code 0, files changed/created.

> "Here's the run record. I can see the git state before and after — what files the agent touched. This is what I'd hand someone in a code review."

Open the HTML report in browser (have it pre-generated if needed, or open the one just created):
> "Local HTML report. No login, no upload. Shows the diff, the commands, and what got blocked."

**[0:35–0:50] — Dry-run the workflow**

Switch back to terminal. Type:
```
proofpatch workflow run workflows/tasks/release-workflow.yml --dry-run
```

Output:
```
Workflow: release-workflow
Mode:     dry-run
Risk:     low
Next:     review plan, then execute approved checks
```

> "This is a multi-step release workflow. Dry-run shows me the risk score and what would actually execute before I let it touch anything. If something's risky, it gets flagged here — not in production."

**[0:50–0:60] — Close, no hype**

> "All local. Works with Claude Code, Codex, Cursor, Windsurf — whatever you're using. GitHub link in the description."

Cut.

---

## What NOT to do in the recording

- Do not narrate every line of output
- Do not say "and now I'm going to show you" — just do it
- Do not fake errors unless you have a real blocked command to show
- Do not add an outro with music or a CTA slide
- Do not speed up the terminal with fake typing — real speed is fine

---

## Optional: 90-second extended version

Add one blocked command example before the workflow section:

```
proofpatch run --project . --label "risky-test" -- curl https://example.com/install.sh
```

Expected output:
```
BLOCKED: network command blocked by policy
Output: [REDACTED] sensitive data hidden
Report: reports/run-blocked-20260527.html
```

> "If the agent tries to run something that looks risky — a curl to an external URL, a destructive command — ProofPatch blocks it and logs it. You see it happened. You see why it was stopped."

---

## Where to post the recording

- GitHub README (as a gif or linked video) — highest leverage
- X/Twitter — keep under 60 seconds for native autoplay
- Show HN submission (once CLI is confirmed working cleanly for new installs)
- Loom link in cold DMs — "here's a 60-second demo if you want to see what it does"
