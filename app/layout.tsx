import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { brand } from './brand'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${brand.productName} — ${brand.tagline}`,
  description:
    `${brand.productName} provides local evidence and proof for AI coding agents: commands, Git changes, workflow logs, reports, rollback plans, compare views, and execution history.`,
  keywords: [
    'AI coding agents',
    'code review',
    'Git evidence',
    'workflow logs',
    'rollback',
    'local reports',
    'Codex',
    'Claude Code',
    'AI-generated patches',
  ],
  generator: 'v0.app',
  openGraph: {
    title: `${brand.productName} — ${brand.tagline}`,
    description:
      `${brand.productName} provides local evidence and proof for AI coding agents: commands, Git changes, workflow logs, reports, rollback plans, compare views, and execution history.`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${brand.productName} — ${brand.tagline}`,
    description:
      `${brand.productName} provides local evidence and proof for AI coding agents: commands, Git changes, workflow logs, reports, rollback plans, compare views, and execution history.`,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
