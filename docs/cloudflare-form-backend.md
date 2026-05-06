# Cloudflare Form Backend

The existing trial/contact form posts to `/api/trial`. The public form layout,
fields, and user flow are unchanged.

## Final Architecture

Contact form -> Pages Function `/api/trial` -> Pages Service binding
`TRIAL_FORM_SERVICE` -> Worker `smarterpractice-trial-email` -> send-email
binding `SEND_EMAIL` -> `jeremy@smarterpractice.ai`

The `/api/trial` Pages Function still validates the required fields before it
calls the Worker. The Worker validates the same fields again before sending
email.

Submitted form contents are never written to console logs.

## Response Contract

Successful submissions should return:

- HTTP status: `200`
- JSON body: `{ "success": true }`

The Worker returns this only after `env.SEND_EMAIL.send(...)` succeeds. The
Pages Function normalizes successful Worker/service responses to the same JSON
body before responding to the browser. The browser treats any `2xx` response as
successful unless a JSON response explicitly includes `{ "success": false }`;
this prevents a delivered email from showing a false error if an intermediate
Cloudflare layer returns a successful response with no JSON body.

## Backend Priority

1. POST to the Pages Service binding named `TRIAL_FORM_SERVICE`.
2. If no service binding is present, send through direct Pages email bindings
   named `TRIAL_EMAIL` or `SEND_EMAIL` when available.
3. If no email binding is present, optionally forward to
   `TRIAL_FORM_FORWARD_URL` or `FORM_FORWARD_URL`.
4. If no backend is configured, fail safely with
   `FORM_BACKEND_NOT_CONFIGURED`.

The direct Pages email bindings and forwarding URLs are fallback paths only. The
preferred production path is the dedicated Email Worker service binding.

## Email Worker

Worker source:

- `workers/trial-email-worker/index.ts`
- `workers/trial-email-worker/wrangler.jsonc`

The Worker uses a `fetch(request, env)` handler because the website sends an
HTTP POST request. It does not use an `email(message, env, ctx)` handler, which
is for incoming email events.

The Worker sends:

- To: `jeremy@smarterpractice.ai`
- Subject: `New Smarter Practice AI trial request`
- Plain-text body: submitted name, practice name, practice email, role,
  workflow challenge or message, source, form name, and timestamp
- Reply-To: submitted practice email

The default sender is `forms@smarterpractice.ai`. If Cloudflare Email Sending
requires a different verified sender, set this Worker variable:

- `TRIAL_EMAIL_FROM`

## Required Cloudflare Setup

Complete these steps for Preview and Production:

1. Ensure Cloudflare Email Sending is enabled for `smarterpractice.ai`.
2. Ensure `jeremy@smarterpractice.ai` is a verified or allowed destination if
   Cloudflare requires verification for the account/domain setup.
3. Deploy the Worker from `workers/trial-email-worker`:
   `wrangler deploy`.
4. Confirm the deployed Worker name is `smarterpractice-trial-email`.
5. In the Cloudflare Pages project, add a Service binding:
   - Binding name: `TRIAL_FORM_SERVICE`
   - Service: `smarterpractice-trial-email`
6. Add the `TRIAL_FORM_SERVICE` binding in both Preview and Production
   environments.
7. If required, add Worker variable `TRIAL_EMAIL_FROM` with a verified sender
   address on `smarterpractice.ai`.
8. Redeploy the Pages preview.
9. Submit a safe test request through `/contact`.
10. Confirm the form shows the existing success message.
11. Confirm the email arrives at `jeremy@smarterpractice.ai`.

## Worker Send Email Binding

The Worker `wrangler.jsonc` defines this send-email binding:

- Binding type: Send Email
- Binding name: `SEND_EMAIL`
- Destination address: `jeremy@smarterpractice.ai`

No D1, KV, Queue, R2, Workers AI, Analytics Engine, external form service, CRM
webhook, Zapier, Make, Airtable, or Formspree service is required.

## Optional Fallbacks

The previous forwarding variables remain supported as secondary fallback paths:

- `TRIAL_FORM_FORWARD_URL`
- `FORM_FORWARD_URL`

These are not required when `TRIAL_FORM_SERVICE` is configured.

Direct Pages email bindings also remain supported only as fallback paths:

- `TRIAL_EMAIL`
- `SEND_EMAIL`

## Failure Behavior

If no service binding, email binding, or forwarding URL is present,
`/api/trial` returns:

- HTTP status: `501`
- JSON code: `FORM_BACKEND_NOT_CONFIGURED`

The public form displays a simple temporary-unavailable message with Jeremy's
email address. Cloudflare logs include only configuration/error codes, not the
submitted form contents.
