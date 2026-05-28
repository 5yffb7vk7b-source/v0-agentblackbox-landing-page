#!/usr/bin/env python3
"""
Generates go-to-market/today-outreach-list.md from the LEADS data structure.
Run: python3 go-to-market/build_today_outreach.py
"""

import os
import sys

OUTPUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "today-outreach-list.md")

LEADS = [
    {
        "number": 1,
        "name": "tdwhere123",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "tdwhere123@gmail.com",
        "repo_site": "github.com/tdwhere123/do-it",
        "why_fit": (
            'Their repo do-it is described as "installable AI coding workflow for '
            'risk-based routing and evidence-backed completion." '
            "That phrase is ProofPatch's output verbatim."
        ),
        "angle": "They named the value prop. Ask if it is solved or still missing from their workflow.",
        "subject": 'your "evidence-backed completion" repo',
        "body": (
            'Hey — saw do-it: "AI coding workflow for risk-based routing and evidence-backed completion."\n'
            "\n"
            "That's what ProofPatch generates — commands run, git diffs, blocked actions, rollback plan."
            " All local, nothing uploaded.\n"
            "\n"
            "Are you solving this gap inside do-it already, or is it still missing from the workflow?\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 2,
        "name": "yimwoo (Yiming Wu)",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "yiming.wu@outlook.com",
        "repo_site": "github.com/yimwoo/hotl-plugin",
        "why_fit": (
            "Built HOTL — Human-on-the-Loop for Claude Code. Pauses the agent at planning,"
            " verification, and execution steps for human review."
        ),
        "angle": "HOTL decides when to stop. ProofPatch gives the human something concrete to review when it does.",
        "subject": "the evidence layer for HOTL's review step",
        "body": (
            "Hey Yiming — HOTL pauses Claude Code for human review at each stage."
            " ProofPatch generates what the human actually reviews: commands run, git diffs,"
            " what got blocked, rollback plan. All local.\n"
            "\n"
            "HOTL handles when to pause. ProofPatch fills in the what.\n"
            "\n"
            "Would you try it alongside HOTL, or does HOTL already cover this somehow?\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 3,
        "name": "Kailesk Khumar (HouseofMVPs)",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "kailesk@houseofmvps.com",
        "repo_site": "houseofmvps.com",
        "why_fit": (
            "Agency shipping fixed-price Claude Code MVPs in 14 days to paying clients."
            " Client audit trail is a real deliverable gap."
        ),
        "angle": "Client accountability — what do you hand the client when they ask what the AI actually changed?",
        "subject": "client audit trail for your Claude Code builds",
        "body": (
            "Hey Kailesk — HouseofMVPs ships Claude Code MVPs in 14 days."
            " When you hand off, do clients ever ask what the AI actually changed?"
            " Or is the git diff the whole story?\n"
            "\n"
            "I built ProofPatch for that gap — commands run, git diffs, blocked actions, rollback plan."
            " $200 flat to set it up in your repo.\n"
            "\n"
            "Worth 15 minutes?\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 4,
        "name": "Florian Bruniaux",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "florian@bruniaux.com",
        "repo_site": "github.com/FlorianBruniaux/ctxharness",
        "why_fit": (
            "Built ctxharness — catches stale versions, broken paths, and missing scripts"
            " in AI instruction files before the agent runs. Same users as ProofPatch, adjacent timing."
        ),
        "angle": "ctxharness validates before the agent runs. ProofPatch captures what happened after. Pre-run and post-run.",
        "subject": "ctxharness validates before — ProofPatch captures after",
        "body": (
            "Hey Florian — ctxharness catches broken paths and stale scripts in AI instruction files"
            " before the agent runs. I built ProofPatch for the other end: an audit trail of what the"
            " agent actually did — commands, git state, blocked actions, rollback plan. All local.\n"
            "\n"
            "Same users, different timing. Would it be worth pairing them?\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 5,
        "name": "Sean Donahoe",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "sean@seandonahoe.com",
        "repo_site": "github.com/TheRealSeanDonahoe/agents-md",
        "why_fit": (
            'agents-md (540 stars) uses explicit "verification loops" language —'
            " forces the agent to verify before committing."
            " ProofPatch logs exactly what those loops produced."
        ),
        "angle": "agents-md enforces verification loops. ProofPatch logs the evidence they produced.",
        "subject": "logging the verification loops from agents-md",
        "body": (
            "Hey Sean — agents-md forces verification loops before the agent commits."
            " ProofPatch logs what those loops actually produced: commands run, exit codes,"
            " git state, what got blocked.\n"
            "\n"
            "You handle the instruction side. I handle the evidence side.\n"
            "\n"
            "Interested in seeing whether they fit together?\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 6,
        "name": "hesreallyhim",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "git-public@hesreallyhim.com",
        "repo_site": "github.com/hesreallyhim/awesome-claude-code",
        "why_fit": (
            "Maintains awesome-claude-code (44,965 stars) — the highest-reach Claude Code"
            " resource on GitHub. No current entry covers post-session evidence."
        ),
        "angle": "A listing request. ProofPatch fills the audit/evidence-trail gap in the list.",
        "subject": "ProofPatch for awesome-claude-code — local audit trail tool",
        "body": (
            "Hey — I maintain ProofPatch, a local CLI that generates an audit trail for every"
            " Claude Code session: commands run, git diffs, blocked actions, rollback plan."
            " Nothing leaves the machine.\n"
            "\n"
            "I think it fits awesome-claude-code as the audit/evidence-trail entry."
            " No current listing covers that gap. Would you take a look?\n"
            "\n"
            "Happy to send the GitHub link if useful.\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 7,
        "name": "Vlad Tansky",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "vladta@wix.com",
        "repo_site": "github.com/vltansky/roast-my-agents-md",
        "why_fit": (
            "Wix engineer building roast-my-agents-md — AGENTS.md/CLAUDE.md reviewer backed"
            " by real A/B test evidence. Evidence-driven approach aligns with ProofPatch."
        ),
        "angle": "He reviews what agents are told. ProofPatch records what they did. Instruction side and execution side.",
        "subject": "you review agent instructions — I log what they ran",
        "body": (
            "Hey Vlad — roast-my-agents-md reviews AGENTS.md/CLAUDE.md quality using real A/B evidence."
            " ProofPatch captures the execution-side evidence: what the agent actually ran when those"
            " instructions were in effect — commands, git diffs, blocked actions.\n"
            "\n"
            "You improve the instructions. I record what happened when they ran.\n"
            "\n"
            "Would you try it? Takes about 10 minutes to set up.\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 8,
        "name": "sgroy10 (Sandeep Roy)",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "sgroy10@gmail.com",
        "repo_site": "github.com/sgroy10/speclock",
        "why_fit": (
            "Built speclock — AI Constraint Engine that enforces CLAUDE.md, .cursorrules,"
            " AGENTS.md rules as laws, with 991 tests."
        ),
        "angle": "speclock = enforcement side. ProofPatch = evidence side. Same oversight stack.",
        "subject": "what happens when speclock's rules run",
        "body": (
            "Hey Sandeep — speclock enforces AI coding rules as laws. ProofPatch records what happened"
            " when they ran: blocked commands, exit codes, git diffs, failures.\n"
            "\n"
            "Enforcement without evidence is half the picture."
            " Does speclock have a logging layer, or does that disappear after the run?\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 9,
        "name": "Bayram Annakov",
        "priority": "A",
        "contact_method": "Email",
        "contact_value": "bayram.annakov@gmail.com",
        "repo_site": "onsa.ai",
        "why_fit": (
            "Founder at onsa.ai. Built claude-reflect (1,044 stars) — captures corrections"
            " and syncs them back to CLAUDE.md. SaaS founder thinking about AI agent feedback loops."
        ),
        "angle": "claude-reflect captures corrections. ProofPatch captures what the agent ran before and after those corrections applied.",
        "subject": "claude-reflect captures feedback — ProofPatch captures what triggered it",
        "body": (
            "Hey Bayram — claude-reflect captures corrections and syncs learning to CLAUDE.md."
            " ProofPatch captures what the agent actually ran when those corrections were"
            " (or weren't) followed — commands, diffs, failures.\n"
            "\n"
            "You close the learning loop. I generate the execution evidence for the step before that.\n"
            "\n"
            "Worth a quick look? I do paid setups ($200) for teams who want it running in their repo.\n"
            "\n"
            "— Matei"
        ),
    },
    {
        "number": 10,
        "name": "iannuttall",
        "priority": "A",
        "contact_method": "GitHub Discussion (no public email)",
        "contact_value": "github.com/iannuttall — open a Discussion on claude-sessions",
        "repo_site": "github.com/iannuttall/claude-sessions (1,203 stars) + claude-agents (2,058 stars)",
        "why_fit": (
            "Most prolific Claude Code tool builder on GitHub: 6 repos, 5,000+ combined stars."
            " Daily user with deep workflow pain."
        ),
        "angle": "claude-sessions tracks sessions as documentation. ProofPatch tracks them as an evidence trail. Same sessions, different layer.",
        "subject": "ProofPatch — execution evidence layer for claude-sessions",
        "body": (
            "Hey — your claude-sessions repo tracks Claude Code sessions as documentation."
            " ProofPatch tracks them as an evidence trail: commands run, exit codes, git state,"
            " blocked actions, rollback plan. All local.\n"
            "\n"
            "You solve the documentation side. I solve the evidence-trail side."
            " Same sessions, different layer.\n"
            "\n"
            "Would you try it? Your take would be more useful than most.\n"
            "\n"
            "— Matei (ProofPatch)"
        ),
    },
]


def render_lead(lead):
    lines = []
    lines.append(f"## {lead['number']}. {lead['name']}")
    lines.append("")
    lines.append(f"Priority: {lead['priority']}  ")
    lines.append(f"Contact method: {lead['contact_method']}  ")
    lines.append(f"Contact value: {lead['contact_value']}  ")
    lines.append(f"Repo/site: {lead['repo_site']}  ")
    lines.append(f"Why they fit: {lead['why_fit']}  ")
    lines.append(f"ProofPatch angle: {lead['angle']}  ")
    lines.append(f"Subject: {lead['subject']}")
    lines.append("")
    lines.append("Message:")
    lines.append("")
    lines.append(lead["body"])
    lines.append("")
    lines.append("---")
    return "\n".join(lines)


def build():
    header = (
        "# Today's Outreach List — ProofPatch\n"
        "\n"
        "Date: 2026-05-27  \n"
        "Sender: Matei / ProofPatch — matei4business@gmail.com  \n"
        "Status: DRAFT ONLY. Do not send until explicitly approved.\n"
        "\n"
        "Product definition: ProofPatch is a local CLI that wraps AI coding-agent sessions"
        " and produces a reviewable evidence trail — commands, Git changes, failures,"
        " blocked actions, and rollback plans — before a generated patch ships.\n"
        "\n"
        "---"
    )

    sections = [render_lead(lead) for lead in LEADS]

    content = header + "\n\n" + "\n\n".join(sections) + "\n"

    with open(OUTPUT_PATH, "w") as f:
        f.write(content)

    print(f"Written: {OUTPUT_PATH}")
    print(f"Leads written: {len(LEADS)}")


if __name__ == "__main__":
    build()
