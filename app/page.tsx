import { Github } from "lucide-react"
import Link from "next/link"

const features = [
  { label: "Command run history", desc: "Timestamps, exit codes, stdout/stderr captured per run" },
  { label: "Git before/after tracking", desc: "Automatic snapshots before and after each session" },
  { label: "Markdown, JSON, HTML reports", desc: "Export runs in multiple formats for sharing" },
  { label: "Dashboard command", desc: "Browse and search runs from your terminal" },
  { label: "Run labels", desc: "Tag runs for organization and filtering" },
  { label: "Estimated cost tracking", desc: "Monitor token usage and API costs" },
  { label: "Sensitive output redaction", desc: "Automatically strip secrets from logs" },
  { label: "GitHub Actions tested", desc: "CI/CD integration ready out of the box" },
]

const roadmap = [
  "Better report viewer",
  "Agent profile presets",
  "HTML dashboard",
  "Run comparison",
  "Packaged release",
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-sm text-foreground">agentblackbox</span>
          <div className="flex items-center gap-6">
            <Link href="#features" className="font-mono text-xs text-muted-foreground hover:text-foreground">
              features
            </Link>
            <Link href="#quickstart" className="font-mono text-xs text-muted-foreground hover:text-foreground">
              quickstart
            </Link>
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground hover:bg-secondary"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="flex flex-col justify-center">
              {/* Badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                  Python CLI
                </span>
                <span className="border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                  local-first
                </span>
                <span className="border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                  open source
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-4 font-mono text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                AgentBlackbox
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                A local black box recorder for AI coding assistants.
              </p>
              <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
                Track commands, Git changes, outputs, reports, labels, and estimated costs 
                during AI-assisted coding sessions. Keep a full audit trail without sending 
                data anywhere.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://github.com/5yffb7vk7b-source/agentblackbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-4 py-2 font-mono text-sm text-background hover:bg-foreground/90"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
                <Link
                  href="#quickstart"
                  className="inline-flex items-center border border-border px-4 py-2 font-mono text-sm text-foreground hover:bg-card"
                >
                  Quick start
                </Link>
              </div>
            </div>

            {/* Terminal Preview */}
            <div className="flex items-center">
              <div className="w-full border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox run --project . --label &quot;codex refactor&quot; \</span>
<span className="text-foreground">    --estimated-cost 0.03 -- pytest -q</span>
{"\n"}
{"\n"}<span className="text-primary">8 passed</span>
{"\n"}
{"\n"}<span className="text-muted-foreground">HTML report:</span> <span className="text-foreground">reports/run-20260519.html</span>
{"\n"}<span className="text-muted-foreground">Dashboard:</span>  <span className="text-foreground">9 runs</span> <span className="text-muted-foreground">•</span> <span className="text-destructive">2 blocked</span> <span className="text-muted-foreground">•</span> <span className="text-foreground">$0.03 estimated</span>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Why it exists */}
        <section className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Why it exists
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                AI coding agents can run commands and change files quickly. AgentBlackbox gives 
                every run a local audit trail so developers can review what happened, what changed, 
                and how to roll back.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Features
            </h2>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.label} className="bg-background p-6">
                  <p className="mb-2 font-mono text-sm text-foreground">{f.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Reports
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    blocked-run-report.html
                  </span>
                </div>
                <div className="flex aspect-video items-center justify-center bg-muted/30 p-8">
                  <div className="text-center">
                    <div className="mb-3 font-mono text-3xl text-muted-foreground/40">[blocked]</div>
                    <p className="font-mono text-xs text-muted-foreground">
                      Blocked run report
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    file-change-report.html
                  </span>
                </div>
                <div className="flex aspect-video items-center justify-center bg-muted/30 p-8">
                  <div className="text-center">
                    <div className="mb-3 font-mono text-3xl text-muted-foreground/40">[diff]</div>
                    <p className="font-mono text-xs text-muted-foreground">
                      File-change report
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Quick start
            </h2>
            <div className="border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-loose">
<span className="text-muted-foreground">$</span> <span className="text-foreground">git clone https://github.com/5yffb7vk7b-source/agentblackbox.git</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">cd agentblackbox</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">python3 -m venv .venv</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">source .venv/bin/activate</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">pip install -e .</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox dashboard</span>
              </pre>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Roadmap
            </h2>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
              {roadmap.map((item, i) => (
                <div key={item} className="bg-background p-4">
                  <span className="mb-2 block font-mono text-xs text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="mb-8 font-mono text-2xl text-foreground">
              Build with visibility.
            </p>
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono text-sm text-background hover:bg-foreground/90"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-xs text-muted-foreground">agentblackbox</span>
          <span className="font-mono text-xs text-muted-foreground">Made by Matei Domenti</span>
        </div>
      </footer>
    </div>
  )
}
