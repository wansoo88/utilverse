# Bugs and Risks

## Active issues
- None confirmed from runtime testing in this environment.

## Known operational risks
### RISK-001: CSP incompatibility after real AdSense activation
- Symptom: Ads fail to render or console CSP errors.
- Cause: Missing script/frame/connect domains in CSP allow-list.
- Mitigation: Validate console/network after enabling real `NEXT_PUBLIC_ADSENSE_CLIENT` and update CSP domains conservatively.

### RISK-002: basePath deployment mismatch
- Symptom: 404 or broken static assets under production path.
- Cause: Hosting/reverse-proxy strips or misroutes `/random-decision`.
- Mitigation: Verify final URL, static assets, and metadata routes under `/random-decision` on Vercel preview and production.

### RISK-003: Placeholder contact email remaining in production
- Symptom: Trust/approval weakness due to non-operational contact channel.
- Cause: Deployment before real inbox replacement.
- Mitigation: Replace contact mailbox before AdSense submission.

## Resolved bugs
### FIX-001: Non-crypto RNG in tools
- Date: 2026-03-08
- Resolution: Implemented `lib/random.ts` and migrated all generator tools to crypto-based RNG.

### FIX-002: Ads/SEO setup lacked production docs
- Date: 2026-03-08
- Resolution: Added deployment guide and consolidated architecture/decision docs.