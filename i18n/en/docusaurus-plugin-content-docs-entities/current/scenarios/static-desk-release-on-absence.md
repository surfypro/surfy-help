---
sidebar_position: 9
sidebar_label: Desk release on absence
---

# Desk release on absence

Temporary sharing of a fixed-assignment desk: company + desk setup, holder full-day absence, colleague booking on the building map, then blocking if the holder tries to remove absence.

<CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-en" kind="video" asGif width={640} gifFps={8} alt="Desk release on absence: setup, absence, booking, and block" />

## Prerequisites

- **Company** and **workplace** edit rights for setup.
- <P code="company:enableStaticDeskReleaseOnAbsence" /> enabled.
- <P code="workplace:isReleasable" /> checked on at least one non-flex fixed-assignment desk.
- Holder(s) assigned to that desk; colleague with booking rights in the building.

## Steps

### 1) Enable release (company + desk)

1. Open **company** properties and enable <P code="company:enableStaticDeskReleaseOnAbsence" />.
2. Edit the **workplace** and check <P code="workplace:isReleasable" />.

Both settings are required.

### 2) Declare a full-day absence (holder)

1. Open <LIV code="personWorkingLocation:my-planning" />.
2. On the chosen day, switch to **full day**.
3. Choose a **working location** for absence: **codes** **OOO** (leave), **OFF** (off-site), or **REMOTE** (remote work).

When everyone assigned to the desk is away all day, the desk becomes **released by absence**. A message lists the affected desks.

### 3) Book a released desk (colleague)

1. The colleague opens <LIV code="personWorkingLocation:my-planning" /> for the same day.
2. In the building, they choose **Book a workstation**, then a **floor**.
3. On the map, they spot **desks released by absence**: a **different shade of green** from free flex desks (no legend on the map).
4. They book the desk for the day.

### 4) Block absence removal (holder)

1. While the colleague has not cancelled, the holder reopens <LIV code="personWorkingLocation:my-planning" />.
2. If they try to remove their absence declaration (**working location** codes **OOO**, **OFF**, or **REMOTE**) or declare a return to the office, Surfy **refuses** and shows a message (booking in progress).
3. The holder sees **who** booked their desk.

## Gestures without narration

- Desk with **several assignments**: release only when **all** holders are away for the full day.
- Building map: **released by absence** vs free flex — **distinct colours** on the plan (no legend).

## Limits

- No half-day; no permanent flex conversion; no automatic relocation of the colleague.
- Do not confuse with the [Booking security view](/entities/user-guide/booking-system/booking-security-day-view).

## See also

- Guide: [Desk release on absence](/entities/user-guide/booking-system/static-desk-release-on-absence)
