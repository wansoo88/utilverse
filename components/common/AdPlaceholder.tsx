export function AdPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="card"
      style={{
        padding: '1rem',
        borderStyle: 'dashed',
        textAlign: 'center',
        color: 'var(--text-muted)'
      }}
    >
      Ad Slot Placeholder: {label}
    </div>
  )
}
