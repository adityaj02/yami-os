export default function GenericApp({ id }) {
  return (
    <div style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--color-on-surface-variant)' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>✨</div>
      <p className="body-lg">The {id} experience is coming soon...</p>
    </div>
  )
}
