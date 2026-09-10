---
sidebar_position: 3
draft: true
---

# What's New (next train)

This page is **local-only** (`pnpm start` in surfy-help). It is **not** published on help.surfy.pro.

This page describes **visible changes** merged on the **`next`** release train, **not yet** available on the alpha application.

**Next train**: parallel integration branch alongside **`alpha`**. Features land here via PRs targeting `next` (`--base next`). When they are **promoted to alpha** and deployed on [app-alpha.surfy.pro](https://app-alpha.surfy.pro), move their bullets to **What's New (alpha)** (`_app-alpha.md`) and remove them from here.

The alpha application (for QA testing) remains at [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro). The production application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, only **features** are moved to [What's New](./app.md) from the alpha page; **Fixed bugs** sections are **not** copied to production.


## September 1, 2026 - v3.5.33

- **Floor plan — edit mode — Magnetism (update)**
  - Magnetism now compares only workstations and objects in the **same space**, within a **neighbourhood of about 1.5 m** (centre to centre). During the gesture, **dotted lines** link the centre of the shape in progress to the centres of those neighbours. Multiple snaps remain possible within that perimeter; on release, one smooth transition to the retained pose.
  - Detailed scenario (behaviours and rules): [Segment magnetism on the floor plan](/entities/scenarios/workplace-segment-magnetism).

- **Planning and bookings — desk release on absence**
  - Company option <P code="company:enableStaticDeskReleaseOnAbsence" /> (off by default) and <P code="workplace:isReleasable" /> on each relevant desk: when **everyone** assigned declares a **full day** as leave, off-site, or remote work, the desk is **bookable for that day** (**desk released by absence**) on the **building booking map**. The fixed assignment does not change; the desk does **not** become permanent flex.
  - On the map, **distinct shade of green** from flex desks for desks released by absence (**no legend**).
  - While a colleague has booked the desk that day, the holder **cannot remove** the absence declaration or declare a return to the office.
  - Guide: [Desk release on absence](/entities/user-guide/booking-system/static-desk-release-on-absence). Guided scenario: [Desk release on absence](/entities/scenarios/static-desk-release-on-absence).
  <CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-en" kind="video" asGif width={640} gifFps={8} alt="Desk release on absence: setup, absence, booking, and block" />

## August 7, 2026 - v3.5.32

- **Floor plan — edit mode**
  - New **Magnetism** option (**off by default**, remembered on this device). When enabled, while **moving**, **duplicating**, or **placing** a workstation or object, **sides** can snap to shapes already on the plan. When **several** sides can align at once (often two axes at 90°, e.g. left **and** top), the plan offers **several snaps together** — a live preview of the full set during the gesture; on release, **one** smooth transition into the pose that satisfies all of those snaps. If they are not all compatible, the plan keeps a feasible subset (sometimes only one).
  - During **rotation**, 45° steps still guide the gesture; if Magnetism is on and a target (or snap set) is nearby, **releasing** finalises side alignment (not the 45° step). Guided scenario: [Segment magnetism on the floor plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-en" kind="video" asGif width={640} gifFps={8} alt="Several simultaneous snaps (Magnetism) on the floor plan in edit mode" />
  - When several workstations and/or objects are selected, a rotation handle on the selection frame lets you rotate them **together** (workstations only, objects only, or both), while keeping their relative layout. Guided scenario: [Group rotation on the floor plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-en" kind="video" asGif width={640} gifFps={8} alt="Group rotation of workstations and objects in plan edit mode" />

- <LIV code="personWorkingLocation:booking-security-day" />
  - New **booking security view** on working locations (when the view is assigned to your role): see where people **with** a security profile have booked.
  - **Planning mode**: multi working-day horizon, then drill-down by floor or zone, profile, and person cards.
  - **Day mode**: date and filters; **colored floor plan** by bookers’ security profile when **exactly one** floor is selected.
  - One **person card** per building; several locations in the same building stay on the same card.
  - Guide: [Booking security view](/entities/user-guide/booking-system/booking-security-day-view). Guided scenario: [From planning to day](/entities/scenarios/booking-security-day-view).
  <CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-en" kind="video" asGif width={640} gifFps={8} alt="Booking security view: from planning to day with colored floor plan" />

- **Surfy SDK (integrators)**
  - Embed a read-only **2D** floor plan or **3D** building (colors, zoom, selection) in your application.
  - Three integration surfaces: **Web Component**, **JavaScript API** (`SurfySdk.mountFloor2d` / `mountBuilding3d`), and **Surfy React Web** (hooks).
  - Client **data** API (buildings / floors / rooms) in the same ship, with machine JWT auth via your backend (no secret in the browser).
  - Guide: [Surfy SDK](/entities/sdk/).
