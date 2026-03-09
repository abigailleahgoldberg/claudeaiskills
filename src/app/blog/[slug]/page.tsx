import { posts } from '../data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.seoTitle,
    description: post.seoDescription,
  }
}

function renderContent(content: string): string {
  // Split into paragraphs on double newline
  const paragraphs = content.split(/\n\n+/)
  return paragraphs
    .map((para) => {
      const trimmed = para.trim()
      if (!trimmed) return ''
      // Convert **bold** to <strong>
      const withBold = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Convert [text](url) to <a>
      const withLinks = withBold.replace(
        /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
        '<a href="$2" style="color:#00C896;text-decoration:underline;" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      return `<p style="margin:0 0 1.25rem;line-height:1.75;color:rgba(248,250,252,0.8);">${withLinks}</p>`
    })
    .join('')
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const html = renderContent(post.content)

  return (
    <main style={{ background: '#07090F', minHeight: '100vh', color: '#F8FAFC', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(124,58,237,0.2)' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #7C3AED, #00C896)', borderRadius: 8 }} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', letterSpacing: '-0.02em' }}>Claude AI Skills</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/blog" style={{ color: '#00C896', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Blog</a>
          <a href="https://thevoiceofcash.com/consultation" style={{ background: '#7C3AED', color: '#F8FAFC', padding: '0.5rem 1.25rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '2rem', fontSize: '0.85rem', color: 'rgba(248,250,252,0.4)' }}>
          <a href="/blog" style={{ color: '#00C896', textDecoration: 'none' }}>Blog</a>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>{post.category}</span>
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', color: '#A78BFA', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', padding: '0.2rem 0.65rem', borderRadius: 100 }}>
            {post.category.toUpperCase()}
          </span>
          <span style={{ color: 'rgba(248,250,252,0.4)', fontSize: '0.85rem' }}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span style={{ color: 'rgba(248,250,252,0.3)', fontSize: '0.85rem' }}>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        <p style={{ fontSize: '1.15rem', color: 'rgba(248,250,252,0.6)', lineHeight: 1.7, marginBottom: '2.5rem', borderLeft: '3px solid #7C3AED', paddingLeft: '1.25rem' }}>
          {post.excerpt}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(248,250,252,0.08)', marginBottom: '2.5rem' }} />

        {/* Content */}
        <div
          style={{ fontSize: '1.05rem' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {/* CTA Footer */}
      <section style={{ padding: '3rem 2rem 5rem', textAlign: 'center', borderTop: '1px solid rgba(124,58,237,0.15)' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 24, padding: '2.5rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: '#F8FAFC' }}>
            Get Claude working for your business
          </h2>
          <p style={{ color: 'rgba(248,250,252,0.6)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            We build Claude-powered workflows, automations, and tools for businesses ready to move fast.
          </p>
          <a
            href="https://thevoiceofcash.com/consultation"
            style={{ display: 'inline-block', background: '#00C896', color: '#07090F', padding: '0.875rem 2rem', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(248,250,252,0.08)', padding: '2rem', textAlign: 'center', color: 'rgba(248,250,252,0.4)', fontSize: '0.875rem' }}>
        <p style={{ margin: 0 }}>2026 Claude AI Skills. Not affiliated with Anthropic. Independent training resource.</p>
      </footer>
    </main>
  )
}
