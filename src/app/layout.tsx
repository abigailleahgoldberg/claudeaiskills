import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude AI Skills -- Learn to Use Claude Effectively',
  description: 'Practical AI training, prompting guides, and skill-building resources for professionals using Anthropic\'s Claude.',
  openGraph: {
    title: 'Claude AI Skills -- Learn to Use Claude Effectively',
    description: 'Practical AI training, prompting guides, and skill-building resources for professionals using Anthropic\'s Claude.',
    url: 'https://claudeaiskills.com',
    siteName: 'Claude AI Skills',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude AI Skills -- Learn to Use Claude Effectively',
    description: 'Practical AI training, prompting guides, and skill-building resources for professionals using Anthropic\'s Claude.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: '#07090F', color: '#F8FAFC' }}>
        {children}
      </body>
    </html>
  )
}
