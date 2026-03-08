import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-page">
      <section className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">Page not found</h1>
        <p className="section-copy" style={{ marginBottom: '1rem' }}>
          The page you requested does not exist.
        </p>
        <Link className="btn btn-primary" href="/en">
          Go to home
        </Link>
      </section>
    </div>
  )
}
