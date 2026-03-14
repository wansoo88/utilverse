'use client'

/**
 * StatsPanel — 도구별 세션 통계 표시
 * props: records (string[]) — history items
 * computeFn — 결과 문자열에서 분석용 값 추출
 */

interface StatItem {
  label: string
  value: string | number
}

interface Props {
  stats: StatItem[]
  title?: string
}

export function StatsPanel({ stats, title = 'Session Stats' }: Props) {
  if (!stats.length) return null

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '0.75rem 1rem',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.08))',
        border: '1px solid rgba(99,102,241,0.2)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem'
      }}
    >
      <p style={{ width: '100%', fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
        {title}
      </p>
      {stats.map(({ label, value }) => (
        <div key={label} style={{ minWidth: '60px' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0, color: 'var(--brand)' }}>{value}</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>{label}</p>
        </div>
      ))}
    </div>
  )
}
