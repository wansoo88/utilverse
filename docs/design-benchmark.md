# Design Benchmark (2026-03-08)

## Goal
- Reduce "generic AI template" perception.
- Align with patterns commonly seen in high-intent random decision tool searches.
- Keep UX cleaner than crowded simulation sites while preserving engagement.

## Benchmarked references
- https://wheelofnames.com
- https://pickerwheel.com
- https://random.org
- https://flipsimu.com

## Repeated patterns observed
- Immediate interaction above the fold (tool is visible without long scroll).
- Strong visual anchor in hero or tool card (wheel/coin/dice motif).
- Clear one-primary-action CTA.
- Supporting trust text ("fair random", "no signup", "fast use").
- Internal linking between related tools for session depth.

## Applied decisions in this codebase
- Hero-first homepage with direct action buttons.
- Visual gallery cards with tool-specific image badges.
- Local animated SVG previews (coin/wheel/dice) to add motion without heavy bundles.
- Cleaner top navigation and better section hierarchy.
- Tool pages now include a visual split hero while keeping long-form SEO sections.

## What we intentionally did not copy
- Overly noisy ad density and cluttered control panels.
- Excessive animation that hurts readability.
- Multi-step setup flows for simple tools.
