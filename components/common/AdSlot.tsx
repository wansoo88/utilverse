import Script from 'next/script'

type AdSlotProps = {
  slot: string
  format?: 'auto' | 'horizontal' | 'rectangle'
  label: string
}

export function AdSlot({ slot, format = 'auto', label }: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  const minHeight = format === 'horizontal' ? 90 : format === 'rectangle' ? 250 : 120

  if (!client) {
    return (
      <div
        className="card"
        style={{
          padding: '1rem',
          minHeight: `${minHeight}px`,
          display: 'grid',
          placeItems: 'center',
          borderStyle: 'dashed',
          textAlign: 'center',
          color: 'var(--text-muted)'
        }}
      >
        Ad Slot Placeholder: {label}
      </div>
    )
  }

  return (
    <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
      {/* AdSense 정책: 광고임을 명시 */}
      <p
        style={{
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          textAlign: 'center',
          margin: '0 0 2px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        Advertisement
      </p>
      <div
        className="card"
        style={{ padding: '0.5rem', overflow: 'hidden', minHeight: `${minHeight}px` }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
        {/* adsbygoogle.js는 app/layout.tsx에서 전역 1회 로드 */}
        <Script id={`adsbygoogle-init-${slot}`} strategy="afterInteractive">
          {`(window.adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>
    </div>
  )
}
