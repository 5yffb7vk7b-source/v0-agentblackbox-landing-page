# ProofPatch Follow-Up Plan

## Batch 1 Summary

- Initial send date: 2026-05-28
- Sent count: 9 (sent and verified at audit time on 2026-05-28)
- Channel: Gmail direct send
- ICP: developer / AI-coding users
- Excluded: iannuttall via Gmail, small-business wrong-ICP drafts
- **Sent copies later deleted:** the user manually deleted the 9 sent copies from Gmail after
  the audit; they now sit in **Trash** (active Sent Mail returns 0) and will auto-purge
  ~2026-06-27. Deletion does not undo delivery — the recipients still received the emails.
- **Campaign record:** `outreach-tracker.csv` (+ the audit docs) is the authoritative record,
  not Gmail. **Base all follow-ups on the tracker, not Sent Mail.**

## What Batch 1 Got Wrong (honest read)

The first emails were personalized but formulaic. Three recurring problems to correct in
every follow-up:

1. **Canned feature list.** "commands run, git diffs, blocked actions, rollback plan"
   appeared in almost every email. It reads mail-merged. Drop it from follow-ups — describe
   the idea in plain words, once, differently each time.
2. **Asserted the pain instead of asking about it.** The emails told people they have a gap.
   Follow-ups should ask whether the problem is real *for them*.
3. **Premature asks.** kailesk got a "$200 flat" + "worth 15 minutes?"; yiming and vlad got
   "Would you try it?" / "takes 10 minutes to set up" on first contact. No follow-up should
   ask for installation, a meeting, or money unless they've already shown interest.

## New Follow-Up Tone

Write like a developer emailing another developer, not like marketing.

- **More human, less polished.** Lowercase is fine. One idea, a few sentences. No taglines
  like "fills in the what" or "two sides of the same stack."
- **Less salesy.** No price, no "set it up," no meeting ask, no feature bullet list.
- **Ask for an opinion, not an installation.** You want their read on the problem, not a trial.
- **Frame ProofPatch as early and experimental.** "still rough," "early thing I'm building,"
  "not sure if it's useful yet." This lowers the bar to reply and is honest.
- **Avoid "Would you try it?"** unless they've already shown interest. Replace with curiosity
  about whether the problem exists.
- **Use "does this problem actually show up for you?" style questions.** Genuine, answerable,
  no commitment implied.

### Reusable opinion-ask phrasings

- "Does this problem actually show up for you, or am I inventing it?"
- "Curious whether this is a real itch in your workflow or a non-issue."
- "I might be overthinking this — does after-the-run evidence matter to you at all?"
- "Would value your take as someone who's actually built in this space."
- "No pitch — just trying to figure out if I'm solving a real problem."

## Follow-Up Rules (revised)

- Do not follow up before Day 5 unless someone replies first.
- One follow-up only. If no reply after that, mark cold — do not keep emailing.
- Ask for their opinion on the problem, never for an install/demo/payment.
- Frame ProofPatch as early/experimental; it's fine to admit it's rough.
- No feature lists, no price, no "would you try it?" in any follow-up.
- If someone replies with interest, *then* respond manually and you can offer a link or a
  look — update tracker to interested/replied.
- If someone objects or says not interested, mark not_interested and stop.
- Do not follow up with small-business wrong-ICP contacts (none were sent; not applicable).
- Do not send mass follow-ups without review. No drafts created by the assistant.

## Follow-Up Schedule

- Day 0: 2026-05-28 — initial emails sent
- Day 1–2: 2026-05-29 to 2026-05-30 — only monitor replies
- Day 3–4: 2026-05-31 to 2026-06-01 — review replies manually if any, no follow-up yet
- Day 5–6: 2026-06-02 to 2026-06-03 — send ONE short opinion-ask follow-up to non-responders
- Day 10+: 2026-06-07 onward — mark cold/no_response; only the highest-value leads
  (Bayram, hesreallyhim) are worth an alternate channel, and only if it feels natural

**Earliest follow-up date: 2026-06-02 (Day 5).**

## Follow-Up Angles (opinion-first, per lead)

Each angle is a question about whether the problem is real for them — not a pitch. Keep
follow-ups to 2–4 sentences. These are notes, not finished copy; write each one fresh so the
batch doesn't look templated again.

| Lead | Contact | Sent Date | Earliest Follow-Up | Status | Opinion-ask follow-up angle |
|---|---|---|---|---|---|
| tdwhere123 | tdwhere123@gmail.com | 2026-05-28 | 2026-06-02 | contacted | "You literally named a repo 'evidence-backed completion' — so you've clearly thought about this. Did you end up building the after-the-run evidence part into do-it, or did it not turn out to matter? Genuinely curious which." |
| yimwoo (Yiming Wu) | yiming.wu@outlook.com | 2026-05-28 | 2026-06-02 | contacted | "When HOTL pauses for human review — does the human actually have enough to look at, or is it mostly vibes + the diff? Trying to figure out if that's a real gap or one I'm imagining." |
| Kailesk Khumar (HouseofMVPs) | kailesk@houseofmvps.com | 2026-05-28 | 2026-06-02 | contacted | No price this time. "Out of curiosity — on your 14-day handoffs, do clients ever actually ask what the AI changed, or do they just trust the result? Trying to learn whether that's a real concern or not." |
| Sandeep Roy (sgroy10) | sgroy10@gmail.com | 2026-05-28 | 2026-06-02 | contacted | "Does speclock log what happened when a rule blocks something, or does that just vanish after the run? Asking because I'm not sure anyone actually wants that record — you'd know better than me." |
| Sean Donahoe | sean@seandonahoe.com | 2026-05-28 | 2026-06-02 | contacted | "You built verification loops into agents-md — do people ever want to see what those loops actually produced afterward, or is passing/failing enough? Curious as the person who designed it." |
| Bayram Annakov | bayram.annakov@gmail.com | 2026-05-28 | 2026-06-02 | contacted | Founder-to-founder opinion ask. "claude-reflect captures the correction — do you think the execution trail *before* the correction is worth keeping, or is that noise? Would value your read; it's an early thing I'm still figuring out." |
| Florian Bruniaux | florian@bruniaux.com | 2026-05-28 | 2026-06-02 | contacted | "You catch problems before the agent runs with ctxharness. Do you personally care what happened after it ran, or is that someone else's problem in your view? Just trying to see if the after-side is a real gap." |
| Vlad Tansky | vladta@wix.com | 2026-05-28 | 2026-06-02 | contacted | Drop the trial ask. "You review the instructions agents get — are you ever curious what they actually did with them, or is that out of scope for what you're building? No pitch, just wondering if it's a real question for you." |
| hesreallyhim | git-public@hesreallyhim.com | 2026-05-28 | 2026-06-02 | contacted | Don't re-ask for a listing — it's too early. "Honestly it's probably too early to be in awesome-claude-code. More useful question: from everything you see in that ecosystem, does anyone actually want an audit trail of what their agent did, or is that not a thing people ask for?" |

## Pending Non-Gmail Outreach

| Lead | Channel | Status | Note |
|---|---|---|---|
| iannuttall | GitHub Discussion | pending | No public email — GitHub Discussion / DM only. Not included in the Gmail batch. If pursued, open with an opinion-ask in the same tone, not a pitch. |
