type SkeletonVariant = 'card' | 'text' | 'button'

function SkeletonBlock({ height, width = '100%', borderRadius = '8px' }: { height: string; width?: string; borderRadius?: string }) {
  return (
    <div
      className="skeleton"
      style={{ height, width, borderRadius }}
      aria-hidden="true"
    />
  )
}

export function Skeleton({ variant = 'card' }: { variant?: SkeletonVariant }) {
  if (variant === 'text') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <SkeletonBlock height="1rem" width="85%" />
        <SkeletonBlock height="1rem" width="70%" />
        <SkeletonBlock height="1rem" width="90%" />
      </div>
    )
  }

  if (variant === 'button') {
    return <SkeletonBlock height="48px" width="140px" borderRadius="11px" />
  }

  // card
  return (
    <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <SkeletonBlock height="140px" borderRadius="12px" />
      <SkeletonBlock height="1.1rem" width="60%" />
      <SkeletonBlock height="0.9rem" width="80%" />
      <SkeletonBlock height="0.9rem" width="70%" />
    </div>
  )
}
