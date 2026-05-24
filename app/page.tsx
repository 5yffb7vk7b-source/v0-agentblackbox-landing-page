import { Github } from "lucide-react"
import Link from "next/link"

import { brand } from "./brand"

const proofItems = [
  "What ran",
  "What changed",
  "What failed",
  "What was blocked",
  "What can be rolled back",
  "What should happen next",
]

const features = [
  {
    label: "Local Run Tracking",
    desc: "Capture commands, labels, timestamps, exit codes, stdout, stderr, and run status in your repo.",
  },
  {
    label: "Git Change Evidence",
    desc: "Record before and after Git state so AI-assisted edits have reviewable context.",
  },
  {
    label: "Local Reports",
    desc: "Generate Markdown, JSON, and HTML reports for runs, diffs, failures, and review evidence.",
  },
  {
    label: "Rollback Planning",
    desc: "Preview a local rollback plan before applying recovery steps to changed files.",
  },
  {
    label: "Run Compare",
    desc: "Compare saved runs to see command, output, status, cost, and Git change differences.",
  },
  {
    label: "Workflow Layer",
    desc: "Plan, validate, dry-run, and log workflow YAML for AI coding-agent tasks.",
  },
  {
    label: "Safe Workflow Executor",
    desc: "Run only explicit approved local commands with timeouts, redaction, and risky-command blocking.",
  },
  {
    label: "Workflow Intelligence Dashboard",
    desc: "Review workflow status, risk, blocked commands, failures, reports, and next actions locally.",
  },
]

const reportCards = [
  {
    title: "Policy Block Report",
    eyebrow: "policy block",
    status: "Blocked",
    tone: "text-destructive",
    rows: [
      ["command", "curl https://example.com/install.sh"],
      ["reason", "network command blocked by policy"],
      ["output", "[REDACTED] sensitive token hidden"],
    ],
    summary: "Shows blocked commands, policy reasons, command context, and redacted output.",
  },
  {
    title: "Git Evidence Report",
    eyebrow: "git evidence",
    status: "Review",
    tone: "text-primary",
    rows: [
      ["changed", "app/page.tsx"],
      ["created", "reports/run-20260519.html"],
      ["rollback", "plan ready"],
    ],
    summary: "Shows Git diffs, before/after state, affected files, and review evidence.",
  },
  {
    title: "Workflow Intelligence Report",
    eyebrow: "workflow run",
    status: "Low risk",
    tone: "text-primary",
    rows: [
      ["mode", "dry-run"],
      ["status", "completed"],
      ["next", "review plan, then execute approved checks"],
    ],
    summary: "Shows workflow status, risk summary, execution mode, and recommended next actions.",
  },
]

function ReportMockCard({
  title,
  eyebrow,
  status,
  tone,
  rows,
  summary,
}: {
  title: string
  eyebrow: string
  status: string
  tone: string
  rows: string[][]
  summary: string
}) {
  return (
    <article className="flex h-full flex-col border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border bg-muted/20 px-4 py-3">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</span>
        <span className={`font-mono text-xs ${tone}`}>{status}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="font-mono text-base text-foreground">{title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary}</p>
        </div>
        <div className="mt-auto space-y-2 border border-border bg-card p-4 font-mono text-xs">
          {rows.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[5.5rem_1fr] gap-3">
              <span className="text-muted-foreground">{key}</span>
              <span className="min-w-0 break-words text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-6">
          <Link href="#" className="font-mono text-base text-foreground">
            {brand.productName}
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
            <Link href="#features" className="hidden font-mono text-xs text-muted-foreground hover:text-foreground sm:inline">
              Features
            </Link>
            <Link href="#workflows" className="hidden font-mono text-xs text-muted-foreground hover:text-foreground sm:inline">
              Workflows
            </Link>
            <Link href="#reports" className="hidden font-mono text-xs text-muted-foreground hover:text-foreground sm:inline">
              Reports
            </Link>
            <Link href="#quickstart" className="hidden font-mono text-xs text-muted-foreground hover:text-foreground sm:inline">
              Quickstart
            </Link>
            <Link
              href={brand.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 font-mono text-xs text-foreground hover:bg-secondary"
            >
              <Github className="h-3.5 w-3.5" />
              View source on GitHub
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-18 sm:px-6 md:py-24 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
                  local-first
                </span>
                <span className="border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
                  open source
                </span>
                <span className="border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
                  no hosted dashboard required
                </span>
              </div>

              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {brand.productName}
              </p>
              <h1 className="mb-4 font-mono text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
                {brand.tagline}
              </h1>
              <p className="mb-5 text-xl text-foreground sm:text-2xl">
                Local evidence before you trust or ship AI-generated code.
              </p>
              <p className="mb-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                ProofPatch records what coding agents ran, what changed in Git, what was blocked, what reports were
                generated, and what rollback plan exists before developers trust or ship AI-generated code.
              </p>

              <div className="mb-5 flex flex-wrap items-center gap-4">
                <Link
                  href={brand.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-4 py-2.5 font-mono text-sm text-background hover:bg-foreground/90"
                >
                  <Github className="h-4 w-4" />
                  View source on GitHub
                </Link>
                <Link
                  href="#quickstart"
                  className="inline-flex items-center border border-border px-4 py-2.5 font-mono text-sm text-foreground hover:bg-card"
                >
                  Quick start
                </Link>
              </div>

              <p className="font-mono text-xs text-muted-foreground">
                Local-first · Open source · No hosted dashboard required
              </p>
              <div className="mt-5 max-w-2xl border border-border bg-card px-4 py-3">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {brand.transitionNote}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full border border-border bg-card shadow-2xl shadow-black/20">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">{brand.productName} terminal</span>
                </div>
                <div className="space-y-4 p-5 font-mono text-xs leading-6 sm:text-sm">
                  <div className="grid gap-1 border-b border-border pb-4">
                    <span className="text-muted-foreground">CLI command:</span>
                    <span className="text-foreground">{brand.currentPreferredCli}</span>
                  </div>
                  <div>
                    <div className="break-words text-foreground">
                      <span className="text-muted-foreground">$ </span>
                      {brand.currentPreferredCli} run --project . --label &quot;demo&quot; -- pytest -q
                    </div>
                    <div className="mt-2 text-primary">8 passed</div>
                    <div>
                      <span className="text-muted-foreground">HTML report: </span>
                      reports/run-20260519.html
                    </div>
                    <div>
                      <span className="text-muted-foreground">Workflow dashboard: </span>
                      workflows/reports/latest.html
                    </div>
                    <div>
                      <span className="text-muted-foreground">Rollback plan: </span>
                      ready
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="break-words text-foreground">
                      <span className="text-muted-foreground">$ </span>
                      {brand.currentPreferredCli} workflow run{" "}
                      <span className="break-all">workflows/tasks/release-workflow.yml</span>{" "}
                      --dry-run
                    </div>
                    <div className="mt-2 grid gap-1 text-muted-foreground">
                      <span>
                        <span className="text-foreground">Workflow:</span> release-workflow
                      </span>
                      <span>
                        <span className="text-foreground">Mode:</span> dry-run
                      </span>
                      <span>
                        <span className="text-foreground">Risk:</span> low
                      </span>
                      <span>
                        <span className="text-foreground">Next action:</span> review plan, then execute approved local checks
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="break-words text-foreground">
                      <span className="text-muted-foreground">$ </span>
                      {brand.currentPreferredCli} workflow report latest --html
                    </div>
                    <div className="mt-2 text-muted-foreground">
                      HTML report: <span className="text-foreground">workflows/reports/latest.html</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border px-5 py-3">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    CLI transition:{" "}
                    <code className="bg-muted px-1 py-0.5 font-mono text-foreground">{brand.currentPreferredCli}</code>{" "}
                    is currently supported,{" "}
                    <code className="bg-muted px-1 py-0.5 font-mono text-foreground">{brand.legacyCliName}</code>{" "}
                    remains legacy, and{" "}
                    <code className="bg-muted px-1 py-0.5 font-mono text-foreground">{brand.futureCliAlias}</code> is
                    planned after the final package rename.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="min-w-0">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Why {brand.productName} exists
                </p>
                <h2 className="font-mono text-3xl leading-tight text-foreground">
                  AI coding tools move fast. Review evidence should keep up.
                </h2>
                <p className="mt-5 leading-8 text-muted-foreground">
                  ProofPatch does not replace your coding agent. It records the trail the agent leaves behind, so you
                  can review trust, auditability, rollback planning, and shipping risk before changes land.
                </p>
              </div>
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {proofItems.map((item) => (
                  <div key={item} className="bg-background p-5">
                    <p className="font-mono text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 md:py-20">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Features</p>
            <h2 className="mb-4 max-w-3xl font-mono text-3xl leading-tight text-foreground">
              A local evidence layer for AI coding-agent work.
            </h2>
            <p className="mb-10 max-w-3xl leading-8 text-muted-foreground">{brand.shortDescription}</p>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.label} className="flex min-h-48 flex-col bg-background p-6">
                  <p className="mb-3 font-mono text-sm text-foreground">{feature.label}</p>
                  <p className="text-sm leading-7 text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflows" className="scroll-mt-20 border-b border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Built for AI coding-agent workflows
                </p>
                <h2 className="font-mono text-3xl leading-tight text-foreground">
                  Works around your agent, not instead of it.
                </h2>
                <p className="mt-5 leading-8 text-muted-foreground">
                  Use ProofPatch around Codex, Claude Code, Claude Desktop/Cowork-style workflows, OpenJarvis, OpenClaw,
                  and other local coding assistants. The agent can generate code; ProofPatch records the evidence trail
                  around the work.
                </p>
              </div>
              <div className="border border-border bg-background p-5">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Workflow loop</p>
                <div className="flex flex-wrap gap-2">
                  {["Plan", "Dry-run", "Execute", "Log", "Report", "Compare", "Rollback plan", "Review", "Ship"].map(
                    (step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="border border-border bg-card px-3 py-2 font-mono text-xs text-foreground">
                          {step}
                        </span>
                        {index < 8 && <span className="text-muted-foreground">→</span>}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reports" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 md:py-20">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Reports and dashboards
            </p>
            <h2 className="mb-5 max-w-3xl font-mono text-3xl leading-tight text-foreground">
              Reviewable proof, without broken screenshots or hidden state.
            </h2>
            <p className="mb-10 max-w-3xl leading-8 text-muted-foreground">
              These cards are ProofPatch-styled report mockups for local review of blocked commands, Git evidence, and
              workflow intelligence.
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {reportCards.map((card) => (
                <ReportMockCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section id="quickstart" className="scroll-mt-20 border-b border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Quickstart</p>
                <h2 className="font-mono text-3xl leading-tight text-foreground">Install the current CLI locally.</h2>
                <p className="mt-5 leading-8 text-muted-foreground">
                  Install from the current open-source repo, then use{" "}
                  <code className="bg-muted px-1 py-0.5 font-mono text-foreground">{brand.currentPreferredCli}</code>{" "}
                  as the preferred supported CLI command.
                </p>
                <p className="mt-4 border border-border bg-background px-4 py-3 text-sm leading-7 text-muted-foreground">
                  CLI transition:{" "}
                  <code className="bg-muted px-1 py-0.5 font-mono text-foreground">{brand.currentPreferredCli}</code>{" "}
                  is currently supported,{" "}
                  <code className="bg-muted px-1 py-0.5 font-mono text-foreground">{brand.legacyCliName}</code> remains
                  legacy, and{" "}
                  <code className="bg-muted px-1 py-0.5 font-mono text-foreground">{brand.futureCliAlias}</code> is
                  planned after the final package rename.
                </p>
              </div>
              <div className="min-w-0 border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:text-sm">
                  <code>{`git clone ${brand.githubRepoUrl}.git
cd ${brand.legacyCliName}
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
${brand.currentPreferredCli} version
${brand.currentPreferredCli} run --project . --label "demo" -- pytest -q
${brand.currentPreferredCli} latest
${brand.currentPreferredCli} workflow list
${brand.currentPreferredCli} workflow run workflows/tasks/release-workflow.yml --dry-run
${brand.currentPreferredCli} workflow report latest --html`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-18 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Local-first by design
                </p>
                <h2 className="font-mono text-3xl leading-tight text-foreground">
                  Keep proof where the work happens.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Runs locally in your repo",
                  "Stores history locally",
                  "Generates local reports",
                  "Redacts sensitive output",
                  "Blocks risky commands when configured",
                  "Keeps workflow execution explicit and reviewable",
                  "Does not require a hosted dashboard",
                  "Preserves the GitHub link to the current CLI repo",
                ].map((item) => (
                  <div key={item} className="border border-border bg-card p-4">
                    <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 md:py-24">
            <p className="mb-5 font-mono text-3xl leading-tight text-foreground">
              ProofPatch creates local evidence before you trust AI-generated code.
            </p>
            <p className="mx-auto mb-8 max-w-2xl leading-8 text-muted-foreground">
              Track what happened, review why it happened, and keep a rollback plan close before you ship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={brand.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-sm text-background hover:bg-foreground/90"
              >
                <Github className="h-4 w-4" />
                View source on GitHub
              </Link>
              <Link
                href="#quickstart"
                className="inline-flex items-center border border-border px-5 py-3 font-mono text-sm text-foreground hover:bg-card"
              >
                Quickstart
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-6">
          <span className="font-mono text-xs text-muted-foreground">{brand.productName}</span>
          <span className="font-mono text-xs text-muted-foreground">Made by Matei Domenti</span>
        </div>
      </footer>
    </div>
  )
}
