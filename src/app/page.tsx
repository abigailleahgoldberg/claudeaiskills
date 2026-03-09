'use client'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(124,58,237,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #7C3AED, #00C896)', borderRadius: 8 }} />
          <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', letterSpacing: '-0.02em' }}>Claude AI Skills</span>
        </div>
        <a href="https://thevoiceofcash.com/consultation" style={{ background: '#7C3AED', color: '#F8FAFC', padding: '0.5rem 1.25rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
          Get Early Access
        </a>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 4rem', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: 100, padding: '0.4rem 1rem', marginBottom: '2rem', fontSize: '0.85rem', color: '#00C896', fontWeight: 600, letterSpacing: '0.05em' }}>
          POWERED BY ANTHROPIC CLAUDE
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', color: '#F8FAFC' }}>
          Build Real AI Skills<br />
          <span style={{ background: 'linear-gradient(135deg, #7C3AED, #00C896)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>With Claude</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'rgba(248,250,252,0.7)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 560, margin: '0 auto 2.5rem' }}>
          Practical AI training, prompting guides, and skill-building resources for professionals using Anthropic's Claude.
        </p>
        <a href="https://thevoiceofcash.com/consultation" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', color: '#F8FAFC', padding: '1rem 2.5rem', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 8px 32px rgba(124,58,237,0.4)' }}>
          Browse Skills
        </a>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: '4rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              icon: '✦',
              title: 'Prompt Engineering',
              desc: 'Master the art of crafting precise, effective prompts that get consistent, high-quality results from Claude across any task.',
              color: '#7C3AED',
            },
            {
              icon: '⚡',
              title: 'AI Workflow Automation',
              desc: 'Learn to integrate Claude into your existing tools and workflows to automate repetitive tasks and boost productivity.',
              color: '#00C896',
            },
            {
              icon: '◈',
              title: 'Business Applications',
              desc: 'Discover proven use cases and implementation patterns for deploying Claude across marketing, operations, and strategy.',
              color: '#7C3AED',
            },
          ].map((card) => (
            <div key={card.title} style={{ background: 'rgba(248,250,252,0.04)', border: '1px solid rgba(248,250,252,0.1)', borderRadius: 16, padding: '2rem', transition: 'border-color 0.2s' }}>
              <div style={{ width: 48, height: 48, background: `${card.color}20`, border: `1px solid ${card.color}40`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.4rem', color: card.color }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#F8FAFC' }}>{card.title}</h3>
              <p style={{ color: 'rgba(248,250,252,0.6)', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section id="notify" style={{ padding: '4rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 24, padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', color: '#F8FAFC' }}>
            Get notified when we launch
          </h2>
          <p style={{ color: 'rgba(248,250,252,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Be the first to access Claude AI Skills when we go live.
          </p>
          {submitted ? (
            <div style={{ background: 'rgba(0,200,150,0.15)', border: '1px solid rgba(0,200,150,0.4)', borderRadius: 12, padding: '1rem', color: '#00C896', fontWeight: 600 }}>
              You're on the list! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ flex: '1 1 240px', padding: '0.875rem 1.25rem', borderRadius: 10, border: '1px solid rgba(248,250,252,0.15)', background: 'rgba(248,250,252,0.06)', color: '#F8FAFC', fontSize: '1rem', outline: 'none' }}
              />
              <button type="submit" style={{ padding: '0.875rem 1.75rem', background: '#7C3AED', color: '#F8FAFC', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(248,250,252,0.08)', padding: '2rem', textAlign: 'center', color: 'rgba(248,250,252,0.4)', fontSize: '0.875rem' }}>
        <p style={{ margin: 0 }}>2026 Claude AI Skills. Not affiliated with Anthropic. Independent training resource.</p>
      </footer>
    </main>
  )
}
