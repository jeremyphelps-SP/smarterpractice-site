# Wix to Cloudflare Redirect Map

These are launch migration notes for the move from Wix to Cloudflare. The
redirects below are 301 redirects, not 401 redirects. A 301 means permanently
moved. A 401 means unauthorized.

## Launch Redirects

| Wix path | Launch destination | Notes |
| --- | --- | --- |
| `/` | `/` | Homepage remains the homepage. |
| `/thecoaches` | `/how-it-works` | Replaces coach overview with the workflow explanation page. |
| `/thecoaches/practice-growth-coach` | `/#scenario-matrix` | Future candidate: `/use-cases/practice-growth`. |
| `/thecoaches/staffing-&-hr-coach` | `/how-it-works` | Future candidate: `/use-cases/staffing-hr`. |
| `/thecoaches/ppo-power-negotiator` | `/#scenario-matrix` | Future candidate: `/use-cases/ppo-strategy`. |
| `/thecoaches/dental-claims-coach` | `/#scenario-matrix` | Future candidate: `/use-cases/claim-denials`. |
| `/resources` | `/how-it-works` | Replaces resources with the workflow explanation page for launch. |
| `/contact` | `/contact` | Contact route uses the existing trial/contact form flow. |
| `/about` | `/how-it-works` | Replaces about page with current product explanation. |
| `/terms` | `/terms` | Legal route remains available. |
| `/pricing-plans/list` | `/#trial` | Future candidate: `/pricing`. |

## Cloudflare Notes

- Cloudflare redirects can be handled with Cloudflare Pages `_redirects` or
  Cloudflare dashboard redirect rules.
- Fragments such as `#scenario-matrix` are handled by the browser, not the
  server. If Cloudflare cannot preserve fragment behavior in the desired way,
  redirect to the clean page instead and document the limitation.
- The launch `_redirects` file intentionally avoids no-op redirect rules such as
  `/contact /contact 301` and `/terms /terms 301` because those can create
  redirect loops.
- Longer-term SEO opportunity: create dedicated use-case landing pages for PPO
  strategy, claim denials, staffing/HR, practice growth, assisted hygiene, case
  acceptance, and scheduling utilization.
