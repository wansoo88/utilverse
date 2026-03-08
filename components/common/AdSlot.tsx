import Script from 'next/script'

type AdSlotProps = {
  slot: string
  format?: 'auto' | 'horizontal' | 'rectangle'
  label: string
}

export function AdSlot({ slot, format = 'auto', label }: AdSlotProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  if (!client) {
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

  return (
    <div className="card" style={{ padding: '0.5rem', overflow: 'hidden' }}>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      <Script id={`adsbygoogle-${slot}`} strategy="afterInteractive">
        {`(window.adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  )
}