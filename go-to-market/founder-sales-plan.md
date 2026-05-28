# Founder Sales Plan — First $200 Client

7-day plan. One goal: one paid setup client.
Daily tasks are concrete. Each takes 30–90 minutes.

---

## Email sender setup

**All cold outreach emails must be sent from:**

```
From:    Matei / ProofPatch <matei4business@gmail.com>
Reply-To: matei4business@gmail.com
```

**Rules:**
- Never send from your personal email address.
- Never use a different alias or forwarding address.
- Always draft first. Never send directly unless you have explicitly said "send now."
- If any email tool or automation is not authenticated to `matei4business@gmail.com`, stop and complete auth before sending anything.

**Tool:** `JaviEzpeleta/gmail-mcp-server` — OAuth 2.0, draft-first by default
**Full setup guide:** `go-to-market/gmail-outreach-workflow.md`
**Server location:** `~/.local/gmail-mcp-server/` (outside repo, never committed)

**Auth status as of 2026-05-27:** Server installed and built. Awaiting Google Cloud OAuth credentials.
See `gmail-outreach-workflow.md` Steps 1–6 to complete setup.

**Until setup is complete, all emails are drafted to files only — not sent.**

---

## The pitch in one sentence

> "I'll set up ProofPatch in your repo in one session — you leave with a working audit trail, a custom workflow config, and a rollback plan ready. $200 flat."

---

## Pricing clarity

| Tier | Price | What you deliver |
|---|---|---|
| Early Setup | $200 one-time | Repo install, one workflow YAML, walkthrough run, 7 days async Q&A |
| Custom Workflow | $500 | Early Setup + up to 3 workflow configs, blocklist tuned to their stack, dry-run validation |
| Monthly Support | $300/month | Config updates, async support, quarterly review session |

**Start with Early Setup.** It's a clear yes/no buy. Easy to deliver in 1–2 hours. Builds trust for the upsell.

**Do not offer a free setup.** Offer a free 20-minute demo call instead. Paid means they show up and give real feedback.

---

## Day 1 — Find and contact

**Goal:** send 10 outreach messages, set up tracking spreadsheet.

**Tasks:**
1. Create a tracking spreadsheet with columns: Name, Platform, Date Sent, Reply (Y/N/date), Outcome, Notes.
2. Run GitHub search query 1: `"claude code" language:markdown in:file`. Find 5 repos with active maintenance. Note the owner.
3. Run Twitter search: `"claude code" "merged" since:2026-05-01`. Find 5 people actively discussing it.
4. Send 10 messages using the casual version from `cold-messages.md`. One per person. Personalize the first line.
5. Do not send the GitHub link yet. End with a question.

**Do not do:** post publicly anywhere today. Build your list first.

---

## Day 2 — First replies + problem validation

**Goal:** respond to any replies. Start understanding what words people use for the problem.

**Tasks:**
1. Check all 10 messages. Reply to anyone who responded within the hour.
2. Run GitHub search query 3: `"claude.md" in:path`. Find 5 more targets. Add to spreadsheet.
3. Send 5 more messages (total 15 sent by end of day).
4. Write down every phrase people use when they describe the problem. These go into your copy later.

**If someone asks "what does it cost?"** — reply: "Early setup is $200 flat, one session. Happy to demo it first if you want to see it running."

**If someone says the problem isn't real for them** — ask: "What do you do instead? Just trust the diff?" Log the answer.

---

## Day 3 — First public post

**Goal:** one public post, watch for inbound.

**Tasks:**
1. Post the problem-first Twitter post from `launch-checklist.md` (Post 2 — text, no video needed yet).
2. Reply to 5 conversations in the `#claude-code` channel of Anthropic's Discord with genuine, non-pitchy comments.
3. Check tracking spreadsheet. Any replies from Day 1–2 that need follow-up?
4. Send 5 more new cold messages (total 20 sent).

**If no replies at all by end of Day 3:** reread your messages. The problem might not be landing. Try this reframe:
> "Quick question: after a Claude Code session, do you have any record of what commands actually ran — not just the diff?"

---

## Day 4 — Demo call prep and Reddit

**Goal:** post to Reddit, prepare a 15-minute live demo.

**Tasks:**
1. Post to `r/ClaudeAI` using the Reddit post format from `launch-checklist.md`.
2. Set up a Loom or screen record for a 15-minute walkthrough of your repo. This is for demo calls, not public posting yet. Have it ready before you need it.
3. Follow up with anyone who replied on Day 1–2 but hasn't converted. Use the follow-up message from `cold-messages.md`.
4. Check Reddit post. Reply to every comment within 2 hours of posting.

**If a Reddit comment asks for a demo:** reply publicly "happy to show you — DM me" and follow up in DMs with the Loom link.

---

## Day 5 — Direct ask day

**Goal:** turn any warm conversation into a booked demo call or a direct yes.

**Tasks:**
1. Review tracking spreadsheet. Mark anyone who replied as "warm."
2. For every warm lead, send a direct ask:
   > "Happy to do a quick 20-minute live demo so you can see it running in a real repo. Would that be useful? I can make time this week."
3. If they say yes to a demo — book it. Show the demo script from `demo-script.md` live in your actual repo.
4. After the demo, send the close:
   > "If this is useful, the Early Setup is $200 — I clone it into your repo, configure it for your stack, walk you through the first run. Usually takes one 60–90 min session. Want to move forward?"
5. Send 5 more cold messages using the professional version (LinkedIn targets from queries 39–44 in `outreach-targets.md`).

---

## Day 6 — First paid client target

**Goal:** close the first $200 client, or identify the real blocker.

**Tasks:**
1. Follow up with anyone who attended a demo but didn't respond. One message:
   > "Any questions after the demo? Happy to answer before you decide."
2. Post the terminal demo video on Twitter (record it now if you haven't). Use the Post 1 format from `launch-checklist.md`.
3. Check GitHub search queries 4–6 for new targets. Add 5 to spreadsheet.
4. Send 5 more new messages (total ~35 sent).

**If a demo went well but they didn't buy:** ask directly:
> "What would make it a clear yes for you?"
Listen. Do not discount yet. The answer tells you what's actually blocking.

**Adjust pricing if:** you've done 3+ demos and everyone says "I'd pay $50 but not $200." Drop Early Setup to $150 and test again. Do not drop below $150 — it signals low value.

---

## Day 7 — Debrief and plan week 2

**Goal:** analyze what happened, decide what to change.

**Tasks:**
1. Count: messages sent, replies, demos booked, demos done, clients.
2. Review every conversation. Note the most common:
   - Objections ("I don't need this because...")
   - Questions ("Does it work with X?")
   - Positive signals ("Oh that's exactly what I need")
3. Update the cold message templates based on what worked.
4. If 0 clients: the problem may not be urgent enough for $200, OR you haven't found the right audience yet. Post a genuine question on r/ClaudeAI or HN asking "how do you review AI-generated code before merging?" — no pitch. Just research.
5. If 1+ clients: run the setup, deliver clean. Ask for a one-sentence testimonial afterward.

---

## Tracking template

Use a spreadsheet or a plain text file. One row per contact.

```
Name | Platform | Sent | Replied | Outcome | Notes
-----|----------|------|---------|---------|------
@username | Twitter | 2026-05-27 | Yes | Demo booked | Uses Cursor daily
John D. | LinkedIn | 2026-05-27 | No | - | CTO at 20-person SaaS
```

**Review it daily. If a column is blank, fill it in.**

---

## What success looks like at the end of Day 7

- 30–40 messages sent
- 5–10 replies
- 2–4 demos completed
- 1 paid client ($200)

If you hit 1 paid client: you have proof the thing is sellable. Move to 3 clients in week 2 before building anything new.

If you hit 0 paid clients but 5+ genuine conversations: you have real research. The positioning or the audience needs to shift. Do not build more features yet.

---

## Hard rules

- Do not build new features to close a deal. If someone says "I'd pay if it had X," note it. Do not promise it.
- Do not give away free setups to convert. Run the call, then ask for the $200.
- Do not spend Day 1–7 tweaking the landing page. It's done.
- The answer to "not enough interest" is more outreach, not a better product.
