# Today's Outreach List — ProofPatch

Date: 2026-05-27  
Sender: Matei / ProofPatch — matei4business@gmail.com  
Status: DRAFT ONLY. Do not send until explicitly approved.

Product definition: ProofPatch is a local CLI that wraps AI coding-agent sessions and produces a reviewable evidence trail — commands, Git changes, failures, blocked actions, and rollback plans — before a generated patch ships.

---

## 1. tdwhere123

Priority: A  
Contact method: Email  
Contact value: tdwhere123@gmail.com  
Repo/site: github.com/tdwhere123/do-it  
Why they fit: Their repo do-it is described as "installable AI coding workflow for risk-based routing and evidence-backed completion." That phrase is ProofPatch's output verbatim.  
ProofPatch angle: They named the value prop. Ask if it is solved or still missing from their workflow.  
Subject: your "evidence-backed completion" repo

Message:

Hey — saw do-it: "AI coding workflow for risk-based routing and evidence-backed completion."

That's what ProofPatch generates — commands run, git diffs, blocked actions, rollback plan. All local, nothing uploaded.

Are you solving this gap inside do-it already, or is it still missing from the workflow?

— Matei

---

## 2. yimwoo (Yiming Wu)

Priority: A  
Contact method: Email  
Contact value: yiming.wu@outlook.com  
Repo/site: github.com/yimwoo/hotl-plugin  
Why they fit: Built HOTL — Human-on-the-Loop for Claude Code. Pauses the agent at planning, verification, and execution steps for human review.  
ProofPatch angle: HOTL decides when to stop. ProofPatch gives the human something concrete to review when it does.  
Subject: the evidence layer for HOTL's review step

Message:

Hey Yiming — HOTL pauses Claude Code for human review at each stage. ProofPatch generates what the human actually reviews: commands run, git diffs, what got blocked, rollback plan. All local.

HOTL handles when to pause. ProofPatch fills in the what.

Would you try it alongside HOTL, or does HOTL already cover this somehow?

— Matei

---

## 3. Kailesk Khumar (HouseofMVPs)

Priority: A  
Contact method: Email  
Contact value: kailesk@houseofmvps.com  
Repo/site: houseofmvps.com  
Why they fit: Agency shipping fixed-price Claude Code MVPs in 14 days to paying clients. Client audit trail is a real deliverable gap.  
ProofPatch angle: Client accountability — what do you hand the client when they ask what the AI actually changed?  
Subject: client audit trail for your Claude Code builds

Message:

Hey Kailesk — HouseofMVPs ships Claude Code MVPs in 14 days. When you hand off, do clients ever ask what the AI actually changed? Or is the git diff the whole story?

I built ProofPatch for that gap — commands run, git diffs, blocked actions, rollback plan. $200 flat to set it up in your repo.

Worth 15 minutes?

— Matei

---

## 4. Florian Bruniaux

Priority: A  
Contact method: Email  
Contact value: florian@bruniaux.com  
Repo/site: github.com/FlorianBruniaux/ctxharness  
Why they fit: Built ctxharness — catches stale versions, broken paths, and missing scripts in AI instruction files before the agent runs. Same users as ProofPatch, adjacent timing.  
ProofPatch angle: ctxharness validates before the agent runs. ProofPatch captures what happened after. Pre-run and post-run.  
Subject: ctxharness validates before — ProofPatch captures after

Message:

Hey Florian — ctxharness catches broken paths and stale scripts in AI instruction files before the agent runs. I built ProofPatch for the other end: an audit trail of what the agent actually did — commands, git state, blocked actions, rollback plan. All local.

Same users, different timing. Would it be worth pairing them?

— Matei

---

## 5. Sean Donahoe

Priority: A  
Contact method: Email  
Contact value: sean@seandonahoe.com  
Repo/site: github.com/TheRealSeanDonahoe/agents-md  
Why they fit: agents-md (540 stars) uses explicit "verification loops" language — forces the agent to verify before committing. ProofPatch logs exactly what those loops produced.  
ProofPatch angle: agents-md enforces verification loops. ProofPatch logs the evidence they produced.  
Subject: logging the verification loops from agents-md

Message:

Hey Sean — agents-md forces verification loops before the agent commits. ProofPatch logs what those loops actually produced: commands run, exit codes, git state, what got blocked.

You handle the instruction side. I handle the evidence side.

Interested in seeing whether they fit together?

— Matei

---

## 6. hesreallyhim

Priority: A  
Contact method: Email  
Contact value: git-public@hesreallyhim.com  
Repo/site: github.com/hesreallyhim/awesome-claude-code  
Why they fit: Maintains awesome-claude-code (44,965 stars) — the highest-reach Claude Code resource on GitHub. No current entry covers post-session evidence.  
ProofPatch angle: A listing request. ProofPatch fills the audit/evidence-trail gap in the list.  
Subject: ProofPatch for awesome-claude-code — local audit trail tool

Message:

Hey — I maintain ProofPatch, a local CLI that generates an audit trail for every Claude Code session: commands run, git diffs, blocked actions, rollback plan. Nothing leaves the machine.

I think it fits awesome-claude-code as the audit/evidence-trail entry. No current listing covers that gap. Would you take a look?

Happy to send the GitHub link if useful.

— Matei

---

## 7. Vlad Tansky

Priority: A  
Contact method: Email  
Contact value: vladta@wix.com  
Repo/site: github.com/vltansky/roast-my-agents-md  
Why they fit: Wix engineer building roast-my-agents-md — AGENTS.md/CLAUDE.md reviewer backed by real A/B test evidence. Evidence-driven approach aligns with ProofPatch.  
ProofPatch angle: He reviews what agents are told. ProofPatch records what they did. Instruction side and execution side.  
Subject: you review agent instructions — I log what they ran

Message:

Hey Vlad — roast-my-agents-md reviews AGENTS.md/CLAUDE.md quality using real A/B evidence. ProofPatch captures the execution-side evidence: what the agent actually ran when those instructions were in effect — commands, git diffs, blocked actions.

You improve the instructions. I record what happened when they ran.

Would you try it? Takes about 10 minutes to set up.

— Matei

---

## 8. sgroy10 (Sandeep Roy)

Priority: A  
Contact method: Email  
Contact value: sgroy10@gmail.com  
Repo/site: github.com/sgroy10/speclock  
Why they fit: Built speclock — AI Constraint Engine that enforces CLAUDE.md, .cursorrules, AGENTS.md rules as laws, with 991 tests.  
ProofPatch angle: speclock = enforcement side. ProofPatch = evidence side. Same oversight stack.  
Subject: what happens when speclock's rules run

Message:

Hey Sandeep — speclock enforces AI coding rules as laws. ProofPatch records what happened when they ran: blocked commands, exit codes, git diffs, failures.

Enforcement without evidence is half the picture. Does speclock have a logging layer, or does that disappear after the run?

— Matei

---

## 9. Bayram Annakov

Priority: A  
Contact method: Email  
Contact value: bayram.annakov@gmail.com  
Repo/site: onsa.ai  
Why they fit: Founder at onsa.ai. Built claude-reflect (1,044 stars) — captures corrections and syncs them back to CLAUDE.md. SaaS founder thinking about AI agent feedback loops.  
ProofPatch angle: claude-reflect captures corrections. ProofPatch captures what the agent ran before and after those corrections applied.  
Subject: claude-reflect captures feedback — ProofPatch captures what triggered it

Message:

Hey Bayram — claude-reflect captures corrections and syncs learning to CLAUDE.md. ProofPatch captures what the agent actually ran when those corrections were (or weren't) followed — commands, diffs, failures.

You close the learning loop. I generate the execution evidence for the step before that.

Worth a quick look? I do paid setups ($200) for teams who want it running in their repo.

— Matei

---

## 10. iannuttall

Priority: A  
Contact method: GitHub Discussion (no public email)  
Contact value: github.com/iannuttall — open a Discussion on claude-sessions  
Repo/site: github.com/iannuttall/claude-sessions (1,203 stars) + claude-agents (2,058 stars)  
Why they fit: Most prolific Claude Code tool builder on GitHub: 6 repos, 5,000+ combined stars. Daily user with deep workflow pain.  
ProofPatch angle: claude-sessions tracks sessions as documentation. ProofPatch tracks them as an evidence trail. Same sessions, different layer.  
Subject: ProofPatch — execution evidence layer for claude-sessions

Message:

Hey — your claude-sessions repo tracks Claude Code sessions as documentation. ProofPatch tracks them as an evidence trail: commands run, exit codes, git state, blocked actions, rollback plan. All local.

You solve the documentation side. I solve the evidence-trail side. Same sessions, different layer.

Would you try it? Your take would be more useful than most.

— Matei (ProofPatch)

---
