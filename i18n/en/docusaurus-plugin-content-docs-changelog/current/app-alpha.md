---
sidebar_position: 2
---

# What's New (alpha)

This page describes **visible changes** already **deployed** on the **Surfy alpha application** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, only **features** are moved to [What's New](./app.md); the **Fixed bugs** sections are **not** copied to production (they are for the test team during the alpha cycle). This page is then hidden by renaming it to `_app-alpha.md`.


## September 3, 2026 - v3.5.35

- **Floor plan — filters: area distribution**
  - The **"Distribution of selected areas (m²)"** accordion (table, pie chart, or polar area chart) is now available when you select nodes in the **Organizations**, **Space typologies**, **Space typology groups**, and **Cost centers — Rooms tab** filters on the floor plan — same behaviour as for **analysis layers**.
  - Totals reflect the **qualified floor area** of selected nodes on the **current floor scope** of the plan.
  - The accordion is **not** shown on cost center **Workstations** or **People** tabs.
  <CloudinaryAsset publicId="help/changelog/v3.5.46/map-filter-analytics-org-typo-cc-en" kind="video" asGif width={424} gifFps={8} alt="Distribution of selected areas in floor plan organization filters" />

## September 2, 2026 - v3.5.34

### Fixed bugs (alpha test verification)

These items are listed for the test team on [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
They are **not** copied to the production changelog (`app.md`).

- **Floor plan — Show only neighboring rooms:** when the option was on, selecting a **workstation** or **object** inside a space did not apply the neighbourhood filter (only clicking the space worked); the neighbourhood now applies the same way as when you select the space (depth 1, 2, or 3).

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

## August 18, 2026 - v3.5.33

- <OT code="itemType" />
  - In the object-type shape editor, switch between **Shape points** and **Visual edges** (one active layer at a time; default: Shape points).
  - **Visual edges** appear on the plan but **do not** affect Magnetism, floor area, or collisions / footprint. They are drawn with **short dashes**.
  - While drawing visual edges, you can reuse an existing shape point only when the circles **largely overlap** and the point **changes color on hover**; then click to bind. Otherwise the vertex is free.
  - A **visual edge vertex** bound to a shape point **cannot be dragged**; to detach it, **delete the edge**. When bound, the edge follows the point when it moves.
  - **Move the plan** in the object-type editor (and in the workstation-type editor): drag the background map; without a background map, the canvas still pans.
  - Historically mixed shapes are **not** converted automatically.
  - Guide: [Visual edges (object type)](/entities/user-guide/floor-plan/item-type-visual-edges). Guided scenario: [Create visual edges](/entities/scenarios/item-type-create-visual-edges).

## August 17, 2026 - v3.5.32

- **Floor plan**
  - **View mode:** dragging on a shape — even one already selected — **pans the plan**; a **click** (no drag) **selects** the shape.
  - **Edit mode:** dragging a selected workstation or object **moves the shape**; with **Move the space** on, dragging a room **moves the space**.
  - **Plan zoom:** during a drag (shape or pan), or just before dragging again, a scale change (wheel, pinch, zoom / fit buttons) **keeps the shape / plan under the pointer** — the move no longer jumps away.
  - On plan option icon buttons, a **long press** opens the related scenario help (e.g. focus room and neighbors), with the same content as the guided scenario.
  - After a **bulk room edit** that changes dimensions, a message confirms the update.
  - New option to **show only the selected room and its neighbors** (depth 1, 2, or 3) so you can focus on one area of the plan. Guided scenario: [Focus room and neighbors](/entities/scenarios/focus-room-neighbors).
  <CloudinaryAsset publicId="help/changelog/v3.5.21/focus-room-neighbors-en" kind="video" asGif width={640} gifFps={8} alt="Focus on a room and its neighbors on the plan" />
  - **Organisations (upper level)** view: the **department** of people assigned to workstations is shown on the plan.
  - **Edit mode — Magnetism** (**off by default**, remembered on this device). When enabled, while **moving**, **duplicating**, or **placing** a workstation or object, **sides** can snap to shapes already on the plan. When **several** sides can align at once (often two axes at 90°, e.g. left **and** top), the plan offers **several snaps together** — a live preview of the full set during the gesture; on release, **one** smooth transition into the pose that satisfies all of those snaps. If they are not all compatible, the plan keeps a feasible subset (sometimes only one).
  - During **rotation**, 45° steps still guide the gesture; if Magnetism is on and a target (or snap set) is nearby, **releasing** finalises side alignment (not the 45° step). Guided scenario: [Segment magnetism on the floor plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-en" kind="video" asGif width={640} gifFps={8} alt="Several simultaneous snaps (Magnetism) on the floor plan in edit mode" />
  - **Edit mode:** when several workstations and/or objects are selected, a rotation handle on the selection frame lets you rotate them **together** (workstations only, objects only, or both), while keeping their relative layout. Guided scenario: [Group rotation on the floor plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-en" kind="video" asGif width={640} gifFps={8} alt="Group rotation of workstations and objects in plan edit mode" />

- **Floor plan — spaces**
  - In **edit mode**, when **at least two spaces** are selected, an action on the selection frame opens a panel to bulk-edit <P code="room:organization" />, <P code="room:costCenter" />, <P code="room:distributionCostType" />, <P code="room:roomConnector" />, and dimensions. Guided scenario: [Bulk room edit](/entities/scenarios/rooms-bulk-edit).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-en" kind="video" asGif width={640} gifFps={8} alt="Bulk room edit on the plan in edit mode" />

- <OT code="itemType" />
  - You can add a **badge** (<P code="itemType:iconBadge" />) on the right **inside** the icon square: short text, background color, and text color, to distinguish variants that share the same pictogram. Guided scenario: [Icon badge on an object type](/entities/scenarios/item-type-icon-badge-create).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/item-type-icon-badge-create-en" kind="video" asGif width={640} gifFps={8} alt="Creating an object type with an icon badge" />

- <LIV code="roomPoint:dq-not-used" />
  - When cloning a building, unused points are removed automatically so scenario creation can continue.
  - If anomalies remain, cloning stays blocked so you can fix the data-quality report manually.

- <OT code="building" />
  - New <LSV code="building:building-dxf-importer" /> view to **create floors** for a building and **import a DXF plan** (with its PNG image) for each floor.
  - Import produces the **space topology** on the target floor directly.
  - Option to **reuse the background image** already stored on the floor instead of uploading a new PNG.
  - Option to **create a dedicated plan scale** for each floor during import.
  - **Automatic scale-bar detection** on the PNG image: the scale can be calculated and saved on the floor.
  - Detailed error messages when the DXF frame does not match the PNG or when the expected polygon layer is missing.

- <OT code="workplaceType" />
  - In the shape editor view (<LSV code="workplaceType:editor" />), you can set and save the default label display position (<P code="workplaceType:textAnchor" />) using the anchor option (shortcut **A**).
  - When adding a workstation to the plan, the label uses this position defined on the type. Guided scenario: [Text anchor (workstation type)](/entities/scenarios/workplace-type-text-anchor).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-en" kind="video" asGif width={640} gifFps={8} alt="Move the default text anchor on a workstation type" />

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

### Fixed bugs (alpha test verification)

These items are listed for the test team on [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
They are **not** copied to the production changelog (`app.md`).

- **Object icon on the plan**: the icon could keep the wrong size or offset relative to the shape (zoom / scale); the pictogram and selection area stay aligned.
- **Moving an object**: after moving an object and releasing, the icon could **return to the old position** until another click; the saved position displays correctly on release.
- **Bulk delete of objects or workstations**: the delete confirmation and plan did not update correctly (reload was often needed); the selection disappears from the plan after confirmation.
- **Several workstations selected**: the UI could stay on one workstation record and block returning to the list for bulk delete; the selection table stays usable.
- **Empty-type segments**: in edit mode, “empty” segments were no longer shown dashed; the dashed style is visible again.
- **Merging room points**: after a merge, a shared segment already deleted could **stay visible** until reload; the plan updates immediately.
- **Workstation-type editor**: icons for object types linked to the workstation type could **stop showing**; they appear again in the composition.
- **Plan option hover help**: hovering some buttons (e.g. selection / manipulation) could trigger an **error** and block the UI; hover stays stable and help shows when a scenario is linked.
