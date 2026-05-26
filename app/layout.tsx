import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { brand } from './brand'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const META_DESCRIPTION = `${brand.productName} records commands, Git changes, failures, blocked actions, workflow logs, reports, comparisons, and rollback plans for AI-generated patches.`

export const metadata: Metadata = {
  metadataBase: new URL('https://proofpatch-landing-page.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: `${brand.productName} — ${brand.tagline}`,
  description: META_DESCRIPTION,
  keywords: [
    'ProofPatch',
    'AI coding agents',
    'AI coding agent audit trail',
    'AI generated code review',
    'local workflow evidence',
    'Git change evidence',
    'rollback plan',
    'workflow reports',
    'Codex',
    'Claude Code',
    'coding agent observability',
  ],
  openGraph: {
    title: `${brand.productName} — ${brand.tagline}`,
    description: META_DESCRIPTION,
    url: '/',
    siteName: brand.productName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand.productName} — ${brand.tagline}`,
    description: META_DESCRIPTION,
    images: ['/opengraph-image'],
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
