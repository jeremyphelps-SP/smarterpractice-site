# Cloudflare Form Backend

The existing trial/contact form posts to `/api/trial`. The public form layout,
fields, and user flow are unchanged. The Cloudflare Pages Function validates
required fields server-side, then delivers the request through Cloudflare-native
email sending when the binding is configured.

## Backend priority

1. Send through the Cloudflare Email Service binding named `TRIAL_EMAIL`.
2. If no email binding is present, optionally forward to
   `TRIAL_FORM_FORWARD_URL` or `FORM_FORWARD_URL`.
3. If neither backend is configured, fail safely with
   `FORM_BACKEND_NOT_CONFIGURED`.

Submitted form contents are never written to console logs.

## Required Cloudflare Email setup

Configure these Cloudflare Pages settings for both Preview and Production:

- Binding type: Cloudflare Email Service / Send Email
- Binding name: `TRIAL_EMAIL`
- Destination email address: `jeremy@smarterpractice.ai`

The function sends:

- To: `jeremy@smarterpractice.ai`
- Subject: `New Smarter Practice AI trial request`
- Plain-text body: submitted name, practice name, practice email, role, workflow
  challenge, source, form name, and submission timestamp
- Reply-To: submitted practice email

The default sender is `forms@smarterpractice.ai`. If Cloudflare Email Service
requires a different verified sender, set this environment variable:

- `TRIAL_EMAIL_FROM`

Do not commit sender credentials, API keys, webhook URLs, or private provider
configuration to the repository.

## Optional forwarding fallback

The previous forwarding variables remain supported as a secondary fallback:

- `TRIAL_FORM_FORWARD_URL` preferred
- `FORM_FORWARD_URL` supported fallback

These are not required when `TRIAL_EMAIL` is configured.

## Failure behavior

If no email binding or forwarding URL is present, `/api/trial` returns:

- HTTP status: `501`
- JSON code: `FORM_BACKEND_NOT_CONFIGURED`

The public form displays a simple temporary-unavailable message with Jeremy's
email address. Cloudflare logs include only configuration/error codes, not the
submitted form contents.

## Testing steps

1. In Cloudflare Pages Preview, add the `TRIAL_EMAIL` send-email binding.
2. If needed, add `TRIAL_EMAIL_FROM` with a verified sender address on
   `smarterpractice.ai`.
3. Redeploy the preview.
4. Submit the `/contact` form with a safe test request.
5. Confirm the form shows the existing success message.
6. Confirm the email arrives at `jeremy@smarterpractice.ai`.
7. Repeat the same setup for Production before launch.
