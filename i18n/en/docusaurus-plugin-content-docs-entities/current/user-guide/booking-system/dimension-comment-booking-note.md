---
sidebar_position: 6
sidebar_label: Dimension comment
---

# Dimension comment — booking note

## What is this feature for?

On each <OT code="dimension" /> (neighborhood / zone), you can enter a **comment**.  
When this field is not empty, an **informational note** appears under the desk booking button for that dimension, to guide people who book (event, temporary closure, organizational instruction, and so on).

The note is **complementary information**: it does not block booking and does not look like an error alert.

## How to set the comment?

1. Open the <OT code="dimension" /> record (with the usual edit rights).
2. Fill in <P code="dimension:comment" />.
3. Save.

The text is free-form; Surfy does not translate it automatically (single language — the one you type).

## Where does the note appear?

As soon as a comment is set, the note appears **under the button** used to book a desk in that dimension, including:

- in <LIV code="personWorkingLocation:my-planning" />;
- when you book a desk **for someone else**;
- in **guest planning**.

If the comment is empty, **no note** appears under the button.

## Remove the note

To hide the note:

1. Open the <OT code="dimension" /> record again.
2. **Clear** <P code="dimension:comment" /> (or leave only spaces).
3. Save.

The note then disappears under the booking button.

## What this feature does not do

- It does **not** apply to parking booking.
- It does not add a message outside the shared desk booking button (no global banner, no red alert).

## See also

- <OT code="dimension" /> record: [Comment](/entities/admin/dimensions/dimension#comment) property.
- [Desk and parking booking confirmation](./workplace-booking-confirmation-window) — another My planning–related rule.
