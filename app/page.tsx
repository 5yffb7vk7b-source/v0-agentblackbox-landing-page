import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const features = [
  { label: "Command run history", desc: "timestamps, exit codes, stdout/stderr" },
  { label: "Git before/after tracking", desc: "automatic snapshots per run" },
  { label: "Markdown, JSON, HTML reports", desc: "export and share" },
  { label: "Dashboard command", desc: "browse runs locally" },
  { label: "Run labels", desc: "organize and filter" },
  { label: "Estimated cost tracking", desc: "monitor token usage" },
  { label: "Sensitive output redaction", desc: "strip secrets from logs" },
  { label: "GitHub Actions tested", desc: "CI/CD ready" },
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
    <div className="min-h-screen bg-background font-mono">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-4">
          <span className="text-sm text-foreground">agentblackbox</span>
          <div className="flex items-center gap-4">
            <Link href="#install" className="text-xs text-muted-foreground hover:text-foreground">
              install
            </Link>
            <Link href="#features" className="text-xs text-muted-foreground hover:text-foreground">
              features
            </Link>
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              github
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 py-16">
        {/* Hero */}
        <section className="mb-20">
          <p className="mb-2 text-xs text-muted-foreground">local observability for ai coding assistants</p>
          <h1 className="mb-6 font-mono text-3xl font-normal text-foreground md:text-4xl">
            agentblackbox
          </h1>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A local black box recorder for AI coding assistants. Track commands, 
            Git changes, outputs, reports, labels, and estimated costs during 
            AI-assisted coding sessions.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-xs text-foreground hover:bg-secondary"
            >
              <Github className="h-3 w-3" />
              View source
            </Link>
            <Link
              href="#install"
              className="text-xs text-primary hover:underline"
            >
              Quick start
            </Link>
          </div>
        </section>

        {/* Why */}
        <section className="mb-20 border-l border-border pl-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            AI coding agents move fast. When they run commands or change files, 
            it&apos;s easy to lose track of what happened. This tool gives each run 
            a local audit trail.
          </p>
        </section>

        {/* Install */}
        <section id="install" className="mb-20 scroll-mt-16">
          <h2 className="mb-4 text-xs font-normal uppercase tracking-wide text-muted-foreground">
            Install
          </h2>
          <div className="border border-border bg-card">
            <div className="border-b border-border px-3 py-2">
              <span className="text-xs text-muted-foreground">terminal</span>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-loose">
<span className="text-muted-foreground">$</span> <span className="text-foreground">git clone https://github.com/5yffb7vk7b-source/agentblackbox.git</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">cd agentblackbox</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">python3 -m venv .venv && source .venv/bin/activate</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">pip install -e .</span>
            </pre>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-20">
          <h2 className="mb-4 text-xs font-normal uppercase tracking-wide text-muted-foreground">
            Usage
          </h2>
          <div className="border border-border bg-card">
            <div className="border-b border-border px-3 py-2">
              <span className="text-xs text-muted-foreground">terminal</span>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-loose">
<span className="text-muted-foreground"># wrap any command</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox run --project . -- echo &quot;hello&quot;</span>
{"\n"}
{"\n"}<span className="text-muted-foreground"># view runs</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox dashboard</span>
{"\n"}
{"\n"}<span className="text-muted-foreground"># generate report</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox report --format html --output report.html</span>
            </pre>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mb-20 scroll-mt-16">
          <h2 className="mb-4 text-xs font-normal uppercase tracking-wide text-muted-foreground">
            Features
          </h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.label} className="bg-card p-4">
                <p className="text-sm text-foreground">{f.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-20">
          <h2 className="mb-4 text-xs font-normal uppercase tracking-wide text-muted-foreground">
            Reports
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-border bg-card">
              <div className="border-b border-border px-3 py-2">
                <span className="text-xs text-muted-foreground">blocked-run-report.html</span>
              </div>
              <div className="flex aspect-[4/3] items-center justify-center p-8">
                <div className="text-center">
                  <div className="mb-2 text-2xl text-muted-foreground/30">[blocked]</div>
                  <p className="text-xs text-muted-foreground">command audit log</p>
                </div>
              </div>
            </div>
            <div className="border border-border bg-card">
              <div className="border-b border-border px-3 py-2">
                <span className="text-xs text-muted-foreground">file-change-report.html</span>
              </div>
              <div className="flex aspect-[4/3] items-center justify-center p-8">
                <div className="text-center">
                  <div className="mb-2 text-2xl text-muted-foreground/30">[diff]</div>
                  <p className="text-xs text-muted-foreground">git change visualization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-20">
          <h2 className="mb-4 text-xs font-normal uppercase tracking-wide text-muted-foreground">
            Roadmap
          </h2>
          <ul className="text-sm text-muted-foreground">
            {roadmap.map((item, i) => (
              <li key={item} className="border-b border-border py-2 last:border-0">
                <span className="mr-3 text-xs text-muted-foreground/50">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="border-t border-border pt-16">
          <p className="mb-4 text-sm text-muted-foreground">
            Open source. MIT license.
          </p>
          <Link
            href="https://github.com/5yffb7vk7b-source/agentblackbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"
          >
            github.com/5yffb7vk7b-source/agentblackbox
            <ExternalLink className="h-3 w-3" />
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-4">
          <span className="text-xs text-muted-foreground">agentblackbox</span>
          <span className="text-xs text-muted-foreground">by Matei Domenti</span>
        </div>
      </footer>
    </div>
  )
}
