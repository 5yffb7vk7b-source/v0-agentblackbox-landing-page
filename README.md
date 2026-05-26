# ProofPatch Landing Page

Public landing page for [ProofPatch](https://proofpatch-landing-page.vercel.app) — a local evidence layer for AI coding-agent work.

ProofPatch records commands, Git changes, failures, blocked actions, workflow logs, reports, comparisons, and rollback plans so developers have reviewable proof before an AI-generated patch ships.

## Live site

**https://proofpatch-landing-page.vercel.app**

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tooling repo

The ProofPatch CLI source lives at [github.com/5yffb7vk7b-source/agentblackbox](https://github.com/5yffb7vk7b-source/agentblackbox). The quickstart on the landing page clones that repo into a local `proofpatch/` directory.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Deployed on Vercel
