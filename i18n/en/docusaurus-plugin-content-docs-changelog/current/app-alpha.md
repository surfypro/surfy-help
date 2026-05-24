# What's New (alpha)

This page describes **visible changes** already available on the **Surfy alpha application**, before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, useful content is moved to [What's New](./app.md); this page is then hidden by renaming it to `_app-alpha.md`.

## May 22, 2026 - v3.4.199

- <OT code="companyWorkingLocation" />
  - New property <P code="companyWorkingLocation:label" /> lets you set a **custom label** for each company working location (office, remote work, etc.).
  - This label replaces the default wording in **planning**, **bookings** and **global person search**.
  - In planning, each working location choice (office, remote work, etc.) shows a **tooltip** explaining what that choice means for on-site workstation and parking booking.

- Plan
  - When you assign or remove a person on a **space** or **workstation**, assignments and indicators for that space (occupancy, counts) update immediately on the plan.

- <OT code="building" />
  - Property <P code="building:surface" /> is now labeled **Declared surface**, with a description clarifying that it is a manually entered value, separate from qualified surface calculated from modeled spaces.

- Parking booking (planning)
  - The collapsible “Book parking” panel appears only when no parking space is already booked for the time slot, in the current building or another building.
  - If a parking booking already exists in another building for the same slot, a message explains this and new booking options are not offered for the current building.
  - When a booking already exists in the building, reserved spaces are shown directly, without the collapsible panel.
