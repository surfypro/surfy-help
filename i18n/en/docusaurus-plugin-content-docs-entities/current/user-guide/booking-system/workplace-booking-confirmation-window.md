# Workplace booking confirmation window

## What is this feature for?

This feature lets users confirm their same-day workplace booking during a company-defined confirmation window.

Goals:

- release reserved desks that are not confirmed,
- warn users before cancellation,
- keep daily planning accurate for teams.

## How does it work?

### 1) Confirmation window

The company configures a confirmation window with an IANA timezone (for example `06:00-10:00@Europe/Paris`).

For same-day bookings, users must confirm their presence during this window from **My planning**.

### 2) Reminder email before the end of the window

Around 15 minutes before the end of the window, a reminder email is sent to users with an unconfirmed same-day booking.

The email includes a direct link to **My planning** so users can confirm quickly:

`https://app.surfy.pro/{TenantName}/views/i/personWorkingLocation/my-planning`

### 3) Automatic cancellation after the end of the window

If the booking is still not confirmed after the window ends, the booking is automatically cancelled and a cancellation email is sent.

## Behavior based on confirmation status

### Booking confirmed inside the window

- the booking is kept,
- no cancellation email is sent.

### Booking not confirmed after the window

- the booking is automatically cancelled,
- the user receives a cancellation notification email.

## What users experience

- a confirmation action for same-day bookings,
- a reminder email before the window ends when the booking is still unconfirmed,
- a cancellation email when confirmation was not completed in time.

## Best practices

- set a window that matches typical arrival times,
- communicate clearly that confirmation in **My planning** is required to keep a booking,
- make sure user email addresses are valid to receive reminders.
