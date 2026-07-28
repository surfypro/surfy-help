---
sidebar_position: 4
sidebar_label: Booking security view
---

# Booking security view

On working locations, the <LIV code="personWorkingLocation:booking-security-day" /> view shows **where** people **with** a <OT code="personSecurityProfile" /> have booked — on a chosen day or across a working-day horizon.

This is **not** compliance based on **assignments**, and it is not the Booking maps.

<CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-en" kind="video" asGif width={640} gifFps={8} alt="Booking security view: from planning to day with colored floor plan" />

## What is this view for?

- Quickly locate bookings of people who have a security profile.
- Browse a **horizon** (planning mode), then a specific **day**.
- Read a **colored floor plan** by bookers’ security profile when the plan display rule applies.

## Who can open it?

Access depends on your **role**: the view must be assigned to the relevant role(s) (like other list views). It is not hard-coded to one job in the product.

## Open the view

1. Open the **working locations** index.
2. Choose the tab / link for <LIV code="personWorkingLocation:booking-security-day" /> (label along the lines of **Security — restricted profiles (daytime)**).

The view is not in the main menu in V1, and it is **not** nested inside Booking maps.

## Planning mode and day mode

### Planning mode

Without a forced date, you see a **horizon** of working days: quantities by profile, then drill-down **floor** or **zone** → **profile** → person **cards**.

### Day mode

Pick a date (or click a day from planning). Filters and lists / cards apply to that day.

Moving from planning to day updates the page address **and** the left-hand filters so they stay in sync.

## Filters

You can filter by:

- **dates**;
- **buildings** (same perimeter as Booking maps: buildings with assignment zones and flex workstations);
- **floors**;
- **zones** (assignment);
- **security profiles**.

## Lists and person cards

- Only people **with** a security profile appear.
- **One card per building**: the same person in two buildings → two cards.
- Several desks or slots **in the same building** → **one** card with several locations.

## When the colored plan appears

| Situation | Display |
|-----------|---------|
| **Planning** mode | No plan (lists / aggregates only) |
| **Day** mode + **exactly one** floor selected | **Colored plan** by **bookers’** security profile for that day |
| **Day** mode + no floor, or **several** floors | Lists / cards only — a message explains how to show the plan |

There are no stacked multi-floor plans and no 3D plan in this view.

## When there is nothing to show

If no one with a security profile booked for the selected filters, a clear **message** says so (no silent empty screen).

## What this is not

- Editing security profiles (master data lives elsewhere).
- Compliance / coloring based on **assignments**.
- Meeting rooms.
- A mode inside Booking maps.

## See also

- Guided scenario: [From planning to day](/entities/scenarios/booking-security-day-view)
