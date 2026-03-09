import { posts } from './data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Claude AI Skills',
  description: 'Practical guides, comparisons, and tutorials for getting real value from Claude AI in your business.',
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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

      {/* Header */}
      <section style={{ padding: '4rem 2rem 2rem', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#00C896', fontWeight: 600, letterSpacing: '0.05em' }}>
          THE BLOG
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          Practical Claude Guides
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(248,250,252,0.65)', lineHeight: 1.7, maxWidth: 560 }}>
          No hype, no theory. Guides that help you get real work done with Claude.
        </p>
      </section>

      {/* Post grid */}
      <section style={{ padding: '2rem 2rem 4rem', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1.5rem' }}>
          {sorted.map((post) => (
            <article
              key={post.slug}
              style={{
                background: 'rgba(248,250,252,0.04)',
                border: '1px solid rgba(248,250,252,0.09)',
                borderRadius: 16,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', color: '#A78BFA', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', padding: '0.2rem 0.65rem', borderRadius: 100 }}>
                  {post.category.toUpperCase()}
                </span>
                <span style={{ color: 'rgba(248,250,252,0.4)', fontSize: '0.8rem' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span style={{ color: 'rgba(248,250,252,0.3)', fontSize: '0.8rem' }}>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.35, margin: 0, color: '#F8FAFC' }}>
                {post.title}
              </h2>
              <p style={{ color: 'rgba(248,250,252,0.6)', lineHeight: 1.65, margin: 0, fontSize: '0.95rem' }}>
                {post.excerpt}
              </p>
              <a
                href={`/blog/${post.slug}`}
                style={{ color: '#00C896', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                Read more &rarr;
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '3rem 2rem 5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 24, padding: '2.5rem 2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: '#F8FAFC' }}>
            Want AI systems built for your business?
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
