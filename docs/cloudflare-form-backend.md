# Cloudflare Form Backend

The existing trial/contact form posts to `/api/trial` before using the legacy
client-side fallback. The Cloudflare Pages Function validates the required
fields server-side, then forwards the submission to the configured provider.

## Required Cloudflare environment variable

Set one of these Cloudflare Pages environment variables for Preview and
Production:

- `TRIAL_FORM_FORWARD_URL` preferred
- `FORM_FORWARD_URL` supported fallback

The value should be the HTTPS endpoint for the approved form, email, CRM, or
automation provider. Do not commit provider URLs, API keys, webhook URLs, or
other secrets to the repository.

## Failure behavior

If neither environment variable is present, `/api/trial` returns:

- HTTP status: `501`
- JSON code: `FORM_BACKEND_NOT_CONFIGURED`

The public form displays a simple temporary-unavailable message with Jeremy's
email address. Cloudflare logs include the missing environment variable names
without logging submitted form contents.
