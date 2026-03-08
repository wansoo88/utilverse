import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMeta } from '@/lib/seo'
import { isLocale } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return buildMeta({
    title: 'Privacy Policy | Decision Toolkit',
    description: 'Privacy policy for Decision Toolkit, including cookies, analytics, and ad policy details.',
    path: `/${params.locale}/privacy-policy`
  })
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()

  return (
    <div className="container-page">
      <article className="card" style={{ padding: '1.2rem' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-copy">This Privacy Policy explains how Decision Toolkit collects, uses, and protects information when you access our website and tool pages. Our services are designed to work without mandatory account creation, and most decision interactions run directly in the browser.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>1. Information We Process</h2>
        <p className="section-copy">We may process two broad categories of information: (a) technical and usage data such as visited pages, interaction timestamps, approximate geography, and device/browser signals; and (b) locally stored tool data, such as recent result history, saved in your browser storage for convenience. Local tool history is not intended as a central profile and can usually be cleared from browser settings or in-tool controls.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>2. Cookies, Local Storage, and Ad Technology</h2>
        <p className="section-copy">Decision Toolkit may use cookies or similar technologies to maintain basic functionality, measure performance, and support advertising where applicable. If Google AdSense or similar partners are enabled, those partners may use cookies to personalize, measure, and report ad interactions according to their own policies and regulatory obligations.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>3. Purpose and Legal Basis</h2>
        <p className="section-copy">We process information to operate and secure the site, improve content quality, diagnose technical issues, prevent abuse, and maintain service analytics. Depending on jurisdiction, this may rely on legitimate interests, consent for certain cookie categories, or legal obligations related to safety and compliance.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>4. Data Sharing</h2>
        <p className="section-copy">We do not sell personal information as part of our core product model. Limited sharing may occur with service providers that help us host, analyze, secure, and monetize the site, under contractual or policy controls appropriate to their role.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>5. Retention and Security</h2>
        <p className="section-copy">Retention periods vary by data type and operational need. We retain only what is needed for service continuity, performance analysis, legal compliance, and abuse prevention. While no web system can guarantee absolute security, we apply reasonable technical and organizational safeguards to reduce risk.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>6. Regional Rights (GDPR/CCPA and Similar)</h2>
        <p className="section-copy">Depending on location, you may have rights related to access, correction, deletion, objection, portability, or opt-out from certain data uses. To exercise eligible rights, contact us using the address on our Contact page with enough detail to verify and process the request.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>7. Children and Sensitive Decisions</h2>
        <p className="section-copy">Our tools are general-purpose utilities and are not intended for high-risk decision contexts. Parents and guardians should supervise children when appropriate. Do not rely on random outputs for critical medical, legal, or financial decisions.</p>

        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '1rem' }}>8. Policy Updates</h2>
        <p className="section-copy">We may revise this policy when product features, laws, or third-party services change. Updated versions will be posted on this page with a revised effective date where applicable.</p>
      </article>
    </div>
  )
}