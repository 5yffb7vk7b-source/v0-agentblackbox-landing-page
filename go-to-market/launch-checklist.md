# Launch Checklist — ProofPatch

Practical checklist for each channel. Includes what to post, what not to post, and the first 24-hour plan.

---

## Before anything goes public

- [ ] Install ProofPatch from scratch in a clean directory. Make sure `pip install -e .` and `proofpatch run ...` work without errors.
- [ ] Generate at least one real HTML report and confirm it looks clean.
- [ ] Run `proofpatch workflow run ... --dry-run` and confirm output is readable.
- [ ] README has the quickstart commands and they work exactly as written.
- [ ] GitHub repo is public and the description is set (not blank).
- [ ] Landing page URL is in the GitHub repo About section.

**Do not launch on HN or Reddit until these pass. A broken install is worse than no launch.**

---

## Hacker News — Show HN

**Eligibility:** Show HN requires something people can actually run or try, not just a landing page. ProofPatch qualifies once the CLI installs cleanly and runs.

### What to post

**Title format:**
> Show HN: ProofPatch – local audit trail for AI-generated patches (Claude Code, Cursor, Codex)

**Body (keep it short — 3–5 sentences):**
> I built this because I kept merging AI-generated code without a clear picture of what actually ran and what changed. ProofPatch wraps any AI coding session and captures the full trail locally: commands, git diffs, blocked actions, rollback plans, HTML reports. Nothing leaves your machine. Works with Claude Code, Cursor, Codex, and anything else that generates patches.
>
> GitHub: [link]

### What NOT to post

- Do not mention pricing in the Show HN body
- Do not say "I'm looking for beta users" or "DM me" — HN readers hate it
- Do not add a marketing tagline as the title
- Do not post on a Friday or weekend — aim Tuesday/Wednesday 8–10am ET

### First 24 hours on HN

- [ ] Post at 9am ET on a Tuesday or Wednesday
- [ ] Watch for comments. Reply to every comment within 30 minutes for the first 2 hours.
- [ ] If someone says "this doesn't install" — fix it immediately and reply with the fix
- [ ] If someone asks "how is this different from X" — answer directly and honestly
- [ ] Do not ask friends to upvote — HN detects it and it backfires
- [ ] Collect every critical comment as a product improvement note

---

## Reddit

### Where to post

- `r/ClaudeAI` — primary target
- `r/LocalLLaMA` — secondary (local-first angle works here)
- `r/devops` — post only if you frame it around audit/compliance, not the tool itself

### What to post

**Post type:** self post, not link post. Show the problem first.

**Example title for r/ClaudeAI:**
> I built a local tool to capture what Claude Code actually did before I merge — here's how it works

**Body:**
> Been using Claude Code daily and kept running into the same thing: the diff is there, but I don't have a clean picture of what commands ran, what got blocked, or how to recover if something's wrong. Built ProofPatch to wrap those sessions and generate a local evidence trail — commands, git diffs, blocked actions, rollback plan. All local, no upload.
>
> Happy to share the GitHub link if anyone's interested. Also genuinely curious how others are handling this — do you just trust the diff?

### What NOT to post

- Do not cross-post the same text to multiple subreddits on the same day
- Do not post to r/programming or r/coding — too general, no context
- Do not use "I made a thing" as the title — too vague
- Do not immediately reply to comments with "buy here" or pricing

### Reddit 24-hour plan

- [ ] Post in r/ClaudeAI first
- [ ] Check for comments every 2 hours for the first day
- [ ] If it gets traction (10+ upvotes), post to r/LocalLLaMA the next day with a different angle
- [ ] Turn the top-voted comment reply into a FAQ item for the README

---

## X / Twitter

### What to post

**Post 1 — terminal demo gif or video (highest priority)**
> I kept merging Claude Code output without a clear picture of what ran.
>
> So I built ProofPatch: a local CLI that wraps AI coding sessions and captures the trail — commands, git diffs, blocked actions, rollback plan.
>
> Nothing leaves your machine. Works with Claude Code, Cursor, Codex.
>
> [gif/video] [GitHub link]

**Post 2 — problem-first text post (use if no demo ready)**
> Genuine question for anyone using Claude Code or Cursor:
>
> What do you actually do before you merge an AI-generated patch? Run tests? Read the diff? Just ship it?
>
> Asking because I built a tool for this and want to know if the problem is real for others.

**Post 3 — reply campaign**
Search `"claude code" "merged"` and `"cursor" "review"`. Reply to real conversations:
> Curious — when you say you reviewed the diff, do you have a record of what commands the agent ran, or just the file changes?

### What NOT to post

- Do not use #AI or #MachineLearning — wrong audience
- Do not post a wall of text with no visual — it will not be read
- Do not quote your own tweet to bump it on day 1 — looks desperate

### Twitter 24-hour plan

- [ ] Post the demo video thread in the morning
- [ ] Reply to 5 existing conversations about AI code review (don't pitch, just engage)
- [ ] DM 3 people who replied publicly to your tweet asking if they'd try it

---

## GitHub README / Demo

- [ ] Add a terminal gif or asciinema recording at the top of the README
- [ ] Make the quickstart section the second thing visible (after the one-line description)
- [ ] Add a "Who this is for" section: Claude Code users, Cursor users, teams merging AI patches
- [ ] Link the landing page in the About field and in the README
- [ ] Add a Discussions tab and pin a "show us your workflow" thread

---

## Direct DMs

### Sequencing

Day 1: Find 10 targets (GitHub search results, Twitter replies, Reddit comments). Send casual version.
Day 3: If no reply, do not follow up yet.
Day 5–6: Send follow-up version to non-replies.
Day 8: Mark non-replies as "cold" and move on. Do not send a third message.

### Rules

- Personalize the first line with something specific about their repo or post
- Never paste a link in the first message — offer it
- Track every send in a spreadsheet (name, platform, date sent, replied, outcome)
- If someone replies "not interested" — thank them and ask one question: what do they use instead

---

## What not to do on launch day

- Do not post everywhere at once — you can't respond to all of it
- Do not put the pricing in public posts until you've had conversations
- Do not repost the same message in multiple communities in the same week
- Do not launch on HN if the install is broken
