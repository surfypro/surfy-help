---
sidebar_position: 5
sidebar_label: Desk release on absence
---

# Static-assignment desk release on absence

When **everyone** assigned to a fixed desk is away for the **full day** (leave, off-site, or remote work), and both the company and the desk are set up for it, colleagues can **book that desk for that day** — without changing the fixed assignment or turning the desk into permanent flex.

This is called a **desk released by absence**.

## What is this for?

- Use fixed desks efficiently when holders are away all day.
- Let colleagues book the desk **for that day only**.
- Keep the static assignment: the next day the desk belongs to the holder again.

This is **not**:

- a permanent flex desk ;
- **Static shape** on the floor plan (magnetism when placing) ;
- the [Booking security view](./booking-security-day-view) (different map, different purpose).

<CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-en" kind="video" asGif width={640} gifFps={8} alt="Desk release on absence: booking on the building map" />

## Prerequisites (administration)

**Both** of the following must be in place. If either is missing, nothing happens.

### 1) Company option

Turn on <P code="company:enableStaticDeskReleaseOnAbsence" /> in company properties.

See also [Company](/entities/admin/company#enable-static-desk-release-on-absence).

### 2) Releasable desk

On each relevant desk, check <P code="workplace:isReleasable" /> when editing the workplace.

See also [Workplace](/entities/things/workplace#is-releasable).

## For holder(s) — declare an absence

1. Open <LIV code="personWorkingLocation:my-planning" />.
2. For the day in question, choose **full day** (not half-day).
3. Set a **working location** for absence: **codes** **OOO** (leave), **OFF** (off-site), or **REMOTE** (remote work).

The desk becomes a **desk released by absence** when **all** people assigned to that desk are away for the **entire** day with one of these **working location codes**.

If several people share the same fixed desk, **everyone** must be away that day for the desk to be released.

Once release applies, a message lists which desks are available for colleagues to book that day.

## For a colleague — book a released desk

1. Open <LIV code="personWorkingLocation:my-planning" /> for the day you plan to come to the office.
2. In a building where you may book, choose **Book a workstation**, then the **floor** you want.
3. On the **building booking map**, spot **desks released by absence**: they appear in a **different shade of green** from free flex desks. There is **no legend** on the map — identify them by the desk colour.
4. Click the released desk and confirm the booking.

You need booking rights in that building.

## If a colleague already booked your desk

While **someone else** has booked the released desk for that day:

- you **cannot remove** your absence declaration (**working location** codes **OOO**, **OFF**, or **REMOTE**) ;
- you **cannot** declare a return to the office that day ;
- a message shows who booked the desk and that their booking must be cancelled first.

The colleague's booking is kept: the holder cannot « take back » the desk by cancelling absence while the booking exists.

## Limits (current version)

- **Full day only** — no release for half-days.
- **No automatic relocation** of the colleague who booked if the holder returns.
- **Flex desk** — if a desk is both flex and releasable, flex behaviour wins.
- **Desk with no assignment** — already free permanently; out of scope here.
- The fixed assignment is **not removed** — only that day's booking is opened to colleagues.

## See also

- [Workplace booking confirmation window](./workplace-booking-confirmation-window) — another Mon planning rule (confirmation window).
- Guided scenario: [Desk release on absence](/entities/scenarios/static-desk-release-on-absence).
- Property pages: [Company](/entities/admin/company#enable-static-desk-release-on-absence) · [Workplace](/entities/things/workplace#is-releasable).
