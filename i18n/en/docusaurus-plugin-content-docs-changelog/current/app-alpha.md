---
sidebar_position: 2
---

# What's New (alpha)

This page describes **visible changes** already **deployed** on the **Surfy alpha application** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, only **features** are moved to [What's New](./app.md); the **Fixed bugs** sections are **not** copied to production (they are for the test team during the alpha cycle). This page is then hidden by renaming it to `_app-alpha.md`.

## September 28, 2026

- 3D room preview from the floor plan
  - On a floor plan (<LIV code="floor:map" />), select a <OT code="room" />: at the bottom of its card, the **3D room preview** icon opens a panel on the right.
  - You see **this room only** in 3D (shape + desks and objects inside), **without** neighboring rooms. Orbit the view with the mouse. **Read-only**: nothing on the plan is changed.
  - Guide: [3D room preview](/entities/user-guide/floor-plan/room-3d-preview).
  <CloudinaryAsset publicId="help/changelog/v3.5.55/room-3d-preview-en" kind="video" asGif width={640} gifFps={8} alt="3D room preview from the floor plan: card icon, right panel, single room only" />

## September 17, 2026 - v3.5.54

- Store new images on Azure (France)
  - New company option <P code="company:storeNewImagesOnAzureFrance" /> (company record). When enabled, **new** product image uploads are hosted in **France**. Display (sizes / previews) stays the same. Existing images are **not** migrated.
  - Do not confuse this with <P code="company:proxyImages" />. Accepted formats when adding an image stay **unchanged** per upload path.
  - Guide: [Store new images on Azure (France)](/entities/user-guide/company-store-new-images-on-azure-france).
- Booking confirmation (desk and parking)
  - The <P code="company:workplaceBookingConfirmationRange" /> window now applies to same-day **desk** and **parking** bookings (full-day or morning slots).
  - A booking created **on the same day** (desk or parking) is **confirmed automatically**: no confirmation button appears for that booking.
  - In <LIV code="personWorkingLocation:my-planning" />, you can confirm the **desk**, the **parking spot**, or **both in one click** when both still need confirmation for the same slot.
  - Reminder and cancellation emails combine desk and parking into **one message** when they concern the same person on the same day.
  - Guide: [Desk and parking booking confirmation](/entities/user-guide/booking-system/workplace-booking-confirmation-window).
