import { useState, useEffect } from 'react'

export default function SurpriseApp() {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchQuote = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}letters/101_quotes_for_yamiki.md`)
      const text = await res.text()
      const lines = text.split('\n').filter(l => l.trim().length > 10)
      const randomQuote = lines[Math.floor(Math.random() * lines.length)]
      setQuote(randomQuote.replace(/^[\d\.\-\*]+\s*/, ''))
    } catch (e) {
      setQuote("You are magical.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '24px' }}>
      <div style={{ fontSize: '48px' }}>✨</div>
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-tertiary))',
        padding: '32px',
        borderRadius: 'var(--rounded-lg)',
        boxShadow: '0 0 20px rgba(255, 197, 207, 0.4)',
        textAlign: 'center',
        minHeight: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {loading ? (
          <p className="body-lg" style={{ color: 'var(--color-on-primary)' }}>Finding a quote...</p>
        ) : (
          <p className="headline-md" style={{ color: 'var(--color-on-primary)', fontStyle: 'italic' }}>
            "{quote}"
          </p>
        )}
      </div>
      <button className="btn-primary" onClick={fetchQuote}>
        Another Quote
      </button>
    </div>
  )
}
