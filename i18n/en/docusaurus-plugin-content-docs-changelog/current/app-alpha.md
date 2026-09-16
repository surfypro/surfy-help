---
sidebar_position: 2
---

# What's New (alpha)

This page describes **visible changes** already **deployed** on the **Surfy alpha application** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, only **features** are moved to [What's New](./app.md); the **Fixed bugs** sections are **not** copied to production (they are for the test team during the alpha cycle). This page is then hidden by renaming it to `_app-alpha.md`.


## September 14, 2026 - v3.5.50

- <LIV code="personWorkingLocation:booking-maps" />
  - **Parking spaces** appear on the **same floor** as workstations when parking is configured for that floor (also in the day panel of <LIV code="personWorkingLocation:booking-security-day" /> and the drawers of <LIV code="personWorkingLocation:my-planning" />).
  - A **parking-only floor** (no desks) shows the parking layer, not an empty desk layer.
  - **Person search** covers both **desk and parking** bookings.
  - Hover on a space: **space name**, **occupant** when booked, and **time slot**; colours distinguish free / booked / booked by you.
  - The **parking type icon** stays visible even when the space has a display name.
  - From <LIV code="personWorkingLocation:my-planning" />, you can book a **desk** or a **parking space** on the same floor plan, depending on configuration.

- <LIV code="personWorkingLocation:booking-security-day" />
  - New view to see where people **with** a security profile have booked (when the view is assigned to your role).
  - **Planning mode**: multi working-day horizon, then drill-down by floor or zone, profile, and person cards.
  - **Day mode**: date and filters; **colored floor plan** by bookers’ security profile when **exactly one** floor is selected.
  - One **person card** per building; several locations in the same building stay on the same card.
  - Guide: [Booking security view](/entities/user-guide/booking-system/booking-security-day-view). Guided scenario: [From planning to day](/entities/scenarios/booking-security-day-view).
  <CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-en" kind="video" asGif width={640} gifFps={8} alt="Booking security view: from planning to day with colored floor plan" />

- **Planning and bookings — desk release on absence**
  - Company option <P code="company:enableStaticDeskReleaseOnAbsence" /> (off by default) and <P code="workplace:isReleasable" /> on each relevant desk: when **everyone** assigned declares a **full day** as leave, off-site, or remote work, the desk is **bookable for that day** (**desk released by absence**) on the <LIV code="personWorkingLocation:booking-maps" /> map. The fixed assignment does not change; the desk does **not** become permanent flex.
  - On the map, **distinct shade of green** from flex desks for desks released by absence (**no legend**).
  - While a colleague has booked the desk that day, the holder **cannot remove** the absence declaration or declare a return to the office.
  - Guide: [Desk release on absence](/entities/user-guide/booking-system/static-desk-release-on-absence). Guided scenario: [Desk release on absence](/entities/scenarios/static-desk-release-on-absence).
  <CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-en" kind="video" asGif width={640} gifFps={8} alt="Desk release on absence: setup, absence, booking, and block" />

- <LIV code="floor:map" />
  - **Magnetism** (**off by default**, remembered on this device): while **moving**, **duplicating**, or **placing** a workstation or object, **sides** can snap to shapes already on the plan. Several simultaneous snaps possible; on release, one smooth transition to the retained pose.
  - Magnetism compares only workstations and objects in the **same space**, within about **1.5 m** (centre to centre), with **dotted lines** to neighbours during the gesture.
  - During **rotation**, 45° steps still guide the gesture; if Magnetism is on and a target is nearby, **releasing** finalises side alignment. Scenario: [Segment magnetism on the floor plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-en" kind="video" asGif width={640} gifFps={8} alt="Several simultaneous snaps (Magnetism) on the floor plan in edit mode" />
  - Group rotation of selected **workstations and/or objects** (not workstations only), keeping their relative layout. Scenario: [Group rotation on the floor plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-en" kind="video" asGif width={640} gifFps={8} alt="Group rotation of workstations and objects in plan edit mode" />
  - **"Distribution of selected areas (m²)"** accordion also in **Organizations**, **Space typologies**, **Space typology groups**, and **Cost centers — Rooms tab** filters (same as analysis layers); not on cost center **Workstations** / **People** tabs.
  <CloudinaryAsset publicId="help/changelog/v3.5.46/map-filter-analytics-org-typo-cc-en" kind="video" asGif width={424} gifFps={8} alt="Distribution of selected areas in floor plan organization filters" />
  - Bulk room edit: the panel now also includes <P code="room:roomType" />. Scenario: [Bulk room edit](/entities/scenarios/rooms-bulk-edit).

- <LSV code="itemType:shape-editor" />
  - Switch between **Shape points** and **Visual edges** (one active layer; default: Shape points).
  - **Visual edges** appear on the plan but **do not** affect Magnetism, floor area, or collisions / footprint (**short dashes**).
  - Bind to a shape point only when circles **largely overlap** and the point **changes color on hover**.
  - A bound visual-edge vertex **cannot be dragged**; to detach it, **delete the edge**.
  - **Move the plan** in this editor (and in <LSV code="workplaceType:editor" />): drag the background map; without a background, the canvas still pans.
  - Guide: [Visual edges (object type)](/entities/user-guide/floor-plan/item-type-visual-edges). Scenario: [Create visual edges](/entities/scenarios/item-type-create-visual-edges).

- <LSV code="building:dashboard" />
  - **Service ratio** table: **Service**, **workstation count (PdT)**, and **m²/PdT** columns, with header hover help.
  - On report data tables: toggles for **precise figures**, **show / hide m²**, and **recalculate percentages** based on still-visible series.
  - Click the chart **legend** to hide or show a series; the table follows the same selection.
  - Some reports sort category labels **alphabetically**.

- **Surfy SDK (integrators)**
  - Embed a read-only **2D** floor plan or **3D** building (colors, zoom, selection) in your application.
  - Three integration surfaces: **Web Component**, **JavaScript API** (`SurfySdk.mountFloor2d` / `mountBuilding3d`), and **Surfy React Web** (hooks).
  - Client **data** API (buildings / floors / rooms) in the same ship, with machine JWT auth via your backend (no secret in the browser).
  - Guide: [Surfy SDK](/entities/sdk/).

### Fixed bugs (alpha test verification)

These items are listed for the test team on [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
They are **not** copied to the production changelog (`app.md`).

- <LIV code="floor:map" /> — **Show only neighboring rooms**: when the option was on, selecting a **workstation** or **object** inside a space did not apply the neighbourhood filter (only clicking the space worked); the neighbourhood now applies the same way as when you select the space (depth 1, 2, or 3).
