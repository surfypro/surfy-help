---
sidebar_label: Confirmation before Microsoft
---

# Confirmation page before Microsoft

When you **Authenticate** Surfy access from a connected tool (for example to allow Surfy to answer in an assistant), Surfy first shows a **confirmation page** on the Surfy site, **before** the Microsoft sign-in page.

## Why this page?

This step **improves security against phishing**. You clearly see that the sign-in request comes from **Surfy** (Surfy branding, Surfy address, message) before you enter your credentials at Microsoft. If a Microsoft page opened alone, without that context, it would be harder to check where the request came from.

## What you see

- A public Surfy page (you do not need to already be signed in to Surfy).
- An **authentication reason**: a short text explaining why sign-in is requested (for example to authenticate Surfy from a connected tool). If the reason is unknown, a generic Surfy sign-in message is shown.
- A button to **continue to Microsoft**.

## What happens next

1. You continue to Microsoft and sign in as usual.
2. Microsoft sends you back to **the same Surfy page**.
3. Depending on the case:
   - either Surfy **returns** you to the tool that requested the connection;
   - or a **thank-you** message appears and the window **closes automatically** after a few seconds.

## Limits

- This page covers **Surfy authentication from a connected tool** (authorization bridge), not day-to-day sign-in to the Surfy app in the browser.
- Never enter your Microsoft credentials on a page that does **not** first show the Surfy context described above.

## See also

- [Authentication with claims](./authentication-with-claims)
- [Authentication without claims](./authentication-without-claims)
