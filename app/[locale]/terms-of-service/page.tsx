import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMeta } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Terms of Service | Decision Toolkit',
    description: 'Terms of service for the use of Decision Toolkit and related content.',
    path: `/${params.locale}/terms-of-service`
  })
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()

  return (
    <div className="container-page">
      <article className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">Terms of Service</h1>
        <p className="section-copy">These Terms govern your access to and use of Decision Toolkit. By using the site, you agree to comply with these Terms and applicable laws. If you do not agree, you should discontinue use of the service.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>1. Service Nature</h2>
        <p className="section-copy">Decision Toolkit provides random utility tools and related informational content on an "as is" and "as available" basis. We may modify, suspend, or discontinue portions of the service at any time without guaranteed prior notice.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>2. Acceptable Use</h2>
        <p className="section-copy">You may use the site for lawful personal, educational, and internal team purposes. You must not misuse the service through automated abuse, scraping beyond reasonable public access, interference attempts, security testing without authorization, fraud, or unlawful conduct.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>3. Content and Intellectual Property</h2>
        <p className="section-copy">Unless stated otherwise, original site content, branding, copy, and interface elements are protected by intellectual property laws. Limited quotation with clear attribution may be permitted, but bulk copying, mirror publishing, or unauthorized commercial reuse is prohibited.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>4. Third-Party Services</h2>
        <p className="section-copy">The site may include links, analytics providers, and advertising partners. We are not responsible for third-party content, policies, or service changes. Your interactions with third parties are governed by their own terms and privacy practices.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>5. Disclaimers</h2>
        <p className="section-copy">Random outputs are intended for general utility and entertainment. They are not professional advice and should not be relied upon for critical legal, medical, financial, or safety-sensitive decisions. You remain responsible for decisions taken using tool results.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>6. Limitation of Liability</h2>
        <p className="section-copy">To the maximum extent permitted by law, Decision Toolkit and its operators are not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, revenue, goodwill, or business opportunity resulting from use of the service.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>7. Indemnity</h2>
        <p className="section-copy">You agree to defend and indemnify Decision Toolkit from claims, losses, and expenses arising from your misuse of the service, your violation of these Terms, or your violation of rights of others.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>8. Governing Law and Disputes</h2>
        <p className="section-copy">These Terms are governed by applicable law determined by the operator jurisdiction. Disputes shall be resolved through competent courts or lawful dispute mechanisms recognized in that jurisdiction, unless mandatory local consumer law requires otherwise.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>9. Changes to Terms</h2>
        <p className="section-copy">We may update these Terms as product scope and legal requirements evolve. Continued use after updates means you accept the revised Terms.</p>
      </article>
    </div>
  )
}