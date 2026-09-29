# Desk and parking booking confirmation

## What is this feature for?

When the company enables a confirmation window, Surfy asks users to confirm presence for **same-day** bookings (desk and parking spot), so unused resources can be released and daily planning stays reliable.

Goals:

- release reserved desks and parking spots that are not confirmed,
- warn users before cancellation,
- confirm desk and parking together when both still need confirmation.

## How does it work?

### 1) Confirmation window (desk and parking)

The company configures a single <P code="company:workplaceBookingConfirmationRange" /> window with an IANA timezone (for example `06:00-10:00@Europe/Paris`).

This window applies to **same-day** bookings in a **full-day** or **morning** slot:

- **desk** booking,
- **parking** booking.

**Afternoon-only** slots are not subject to this confirmation.

### 2) Automatic confirmation on the same day

If you create a booking **on the day you use it** (desk or parking), it is **confirmed automatically** at creation. No confirmation button appears for that booking.

If you book **in advance** (the day before or earlier), manual confirmation is still required on the day during the window.

### 3) Buttons in My planning

During the confirmation window, <LIV code="personWorkingLocation:my-planning" /> offers:

- a button to confirm the **desk** if it is not confirmed yet,
- a button to confirm **parking** if it is not confirmed yet,
- a **shared** button (desk + parking) when both still need confirmation for the same slot — one click confirms both.

As soon as only one item remains to confirm, only the matching dedicated button is shown.

### 4) Reminder email before the end of the window

Around 15 minutes before the end of the window, a reminder email is sent if a same-day booking is still unconfirmed.

If both desk **and** parking are concerned on the same day for the same person, **one email** covers both (separate sections).

The message includes a direct link to **My planning**:

`https://app.surfy.pro/{TenantName}/views/i/personWorkingLocation/my-planning`

### 5) Automatic cancellation after the end of the window

If the booking is still not confirmed after the window ends, it is automatically cancelled and a notification email is sent.

Again, desk and parking on the same day for the same person produce **one cancellation email** when both are concerned.

## Behavior based on confirmation status

### Booking confirmed (manually or automatically)

- the booking is kept,
- no cancellation email is sent for that booking.

### Booking not confirmed after the window

- the booking is automatically cancelled,
- the user receives a cancellation notification email.

## What users experience

- confirmation buttons (desk, parking, or both) in **My planning** during the window,
- no button when the same-day booking was created on that day (automatic confirmation),
- a reminder email before the window ends when needed,
- a cancellation email when confirmation was not completed in time.

## Best practices

- set a window that matches typical arrival times,
- communicate clearly that confirmation in **My planning** is required to keep a booking made in advance,
- make sure user email addresses are valid to receive reminders.

## See also

- [User parking booking process](../parking-booking/user-parking-booking-process) — book a spot as an end user.
- [Desk release on absence](./static-desk-release-on-absence) — another My planning rule (temporary sharing of a fixed desk).
