import { Github, Terminal, GitBranch, FileText, LayoutDashboard, Tag, DollarSign, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Terminal,
    title: "Command run history",
    description: "Every command executed during AI sessions is recorded with timestamps, exit codes, and output.",
  },
  {
    icon: GitBranch,
    title: "Git before/after tracking",
    description: "Capture the state of your repository before and after each run to see exactly what changed.",
  },
  {
    icon: FileText,
    title: "Markdown, JSON, and HTML reports",
    description: "Generate comprehensive reports in multiple formats for easy sharing and review.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard command",
    description: "View and browse your run history with a built-in dashboard interface.",
  },
  {
    icon: Tag,
    title: "Run labels",
    description: "Organize and categorize your runs with custom labels for better traceability.",
  },
  {
    icon: DollarSign,
    title: "Estimated cost tracking",
    description: "Monitor and estimate costs associated with AI-assisted coding sessions.",
  },
  {
    icon: ShieldCheck,
    title: "Sensitive output redaction",
    description: "Automatically redact sensitive information from logs and reports.",
  },
  {
    icon: CheckCircle,
    title: "GitHub Actions tested",
    description: "Verified to work seamlessly in CI/CD pipelines with GitHub Actions.",
  },
]

const roadmapItems = [
  "Better report viewer",
  "Agent profile presets",
  "HTML dashboard",
  "Run comparison",
  "Packaged release",
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Terminal className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">AgentBlackbox</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#quickstart" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Quick Start
            </Link>
            <Link href="#roadmap" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Roadmap
            </Link>
          </nav>
          <Link
            href="https://github.com/5yffb7vk7b-source/agentblackbox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            Local observability for AI coding assistants
          </div>
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Agent<span className="text-primary">Blackbox</span>
          </h1>
          <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
            A local black box recorder for AI coding assistants.
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-muted-foreground">
            Track commands, Git changes, outputs, reports, labels, and estimated costs during AI-assisted coding sessions.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              See Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
            AI coding agents move fast. Your workflow needs a record.
          </h2>
          <p className="text-lg text-muted-foreground">
            When an AI coding assistant runs commands or changes files, it is easy to lose track of what happened. AgentBlackbox gives each run a local audit trail.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Features</h2>
            <p className="text-muted-foreground">Everything you need to track AI-assisted coding sessions</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">See It in Action</h2>
            <p className="text-muted-foreground">Detailed reports for every AI-assisted coding session</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-border bg-secondary">
              <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/50" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/50" />
                  <div className="h-3 w-3 rounded-full bg-primary/50" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground">blocked-run-report.html</span>
              </div>
              <div className="flex aspect-video items-center justify-center bg-secondary/50 p-8">
                <div className="text-center">
                  <ShieldCheck className="mx-auto mb-4 h-16 w-16 text-primary/30" />
                  <p className="font-medium text-muted-foreground">Blocked Run Report</p>
                  <p className="mt-1 text-sm text-muted-foreground/70">Detailed view of blocked commands and actions</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-secondary">
              <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/50" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/50" />
                  <div className="h-3 w-3 rounded-full bg-primary/50" />
                </div>
                <span className="ml-2 text-xs text-muted-foreground">file-change-report.html</span>
              </div>
              <div className="flex aspect-video items-center justify-center bg-secondary/50 p-8">
                <div className="text-center">
                  <GitBranch className="mx-auto mb-4 h-16 w-16 text-accent/30" />
                  <p className="font-medium text-muted-foreground">File Change Report</p>
                  <p className="mt-1 text-sm text-muted-foreground/70">Git diff visualization of all file changes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Quick Start</h2>
            <p className="text-muted-foreground">Get up and running in minutes</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Terminal</span>
            </div>
            <div className="overflow-x-auto p-4">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-muted-foreground">
                  <span className="text-primary">$</span> git clone https://github.com/5yffb7vk7b-source/agentblackbox.git{"\n"}
                  <span className="text-primary">$</span> cd agentblackbox{"\n"}
                  <span className="text-primary">$</span> python3 -m venv .venv{"\n"}
                  <span className="text-primary">$</span> source .venv/bin/activate{"\n"}
                  <span className="text-primary">$</span> pip install -e .{"\n"}
                  <span className="text-primary">$</span> agentblackbox run --project . -- echo {'"'}hello from AgentBlackbox{'"'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="scroll-mt-20 border-y border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Roadmap</h2>
            <p className="text-muted-foreground">What&apos;s coming next</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmapItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  {index + 1}
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Build with visibility.
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            AgentBlackbox helps developers understand what happened during AI-assisted coding sessions.
          </p>
          <Link
            href="https://github.com/5yffb7vk7b-source/agentblackbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                <Terminal className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">AgentBlackbox</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Made by{" "}
              <span className="text-foreground">Matei Domenti</span>
            </p>
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
