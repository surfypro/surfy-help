# What's New (alpha)

This page describes **visible changes** already available on the **Surfy alpha application**, before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, only **features** are moved to [What's New](./app.md); the **Fixed bugs** sections are **not** copied to production (they are for the test team during the alpha cycle). This page is then hidden by renaming it to `_app-alpha.md`.


## August 7, 2026 - v3.5.29

- **Floor plan**
  - In **view mode**, dragging on a shape — even one already selected — **pans the plan**; a **click** (without dragging) **selects** the shape.
  - In **edit mode**, dragging a selected desk or object **moves the shape**; with **Move space** enabled, dragging a selected room **moves the space**.

## July 28, 2026 - v3.5.25

- <LIV code="personWorkingLocation:booking-security-day" />
  - New **booking security view** on working locations (when the view is assigned to your role): see where people **with** a security profile have booked.
  - **Planning mode**: multi working-day horizon, then drill-down by floor or zone, profile, and person cards.
  - **Day mode**: date and filters; **colored floor plan** by bookers’ security profile when **exactly one** floor is selected.
  - One **person card** per building; several locations in the same building stay on the same card.
  - Guide: [Booking security view](/entities/user-guide/booking-system/booking-security-day-view). Guided scenario: [From planning to day](/entities/scenarios/booking-security-day-view).
  <CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-en" kind="video" asGif width={640} gifFps={8} alt="Booking security view: from planning to day with colored floor plan" />

## July 26, 2026 - v3.5.24

- **Surfy SDK (integrators)**
  - Embed a read-only **2D** floor plan or **3D** building (colors, zoom, selection) in your application.
  - Three integration surfaces: **Web Component**, **JavaScript API** (`SurfySdk.mountFloor2d` / `mountBuilding3d`), and **Surfy React Web** (hooks).
  - Client **data** API (buildings / floors / rooms) in the same ship, with machine JWT auth via your backend (no secret in the browser).
  - Guide: [Surfy SDK](/entities/sdk/).


- **Floor plan — edit mode**
  - New **Magnetism** option (**off by default**, remembered on this device). When enabled, while **moving**, **duplicating**, or **placing** a workstation or object, **sides** can snap to shapes already on the plan. When **several** sides can align at once (often two axes at 90°, e.g. left **and** top), the plan offers **several snaps together** — a live preview of the full set during the gesture; on release, **one** smooth transition into the pose that satisfies all of those snaps. If they are not all compatible, the plan keeps a feasible subset (sometimes only one).
  - During **rotation**, 45° steps still guide the gesture; if Magnetism is on and a target (or snap set) is nearby, **releasing** finalises side alignment (not the 45° step). Guided scenario: [Segment magnetism on the floor plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-en" kind="video" asGif width={640} gifFps={8} alt="Several simultaneous snaps (Magnetism) on the floor plan in edit mode" />

## July 25, 2026 - v3.5.23

- **Floor plan — edit mode**
  - When several workstations and/or objects are selected, a rotation handle on the selection frame lets you rotate them **together** (workstations only, objects only, or both), while keeping their relative layout. Guided scenario: [Group rotation on the floor plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-en" kind="video" asGif width={640} gifFps={8} alt="Group rotation of workstations and objects in plan edit mode" />

## July 24, 2026 - v3.5.23

- **Floor plan**
  - On plan option icon buttons, a **long press** opens the related scenario help (e.g. focus room and neighbors), with the same content as the guided scenario.
  - After a **bulk room edit** that changes dimensions, a message confirms the update.

- **Building clone**
  - After a successful clone, newly accessible buildings appear in the application **without signing in again**.

### Fixed bugs (alpha QA verification)

These items are listed for the test team on [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
They are **not** copied into the production changelog (`app.md`).

- **Object icon on the plan**: the icon could keep the wrong size or offset relative to the shape (zoom / scale); the pictogram and selection area stay aligned.
- **Moving an object**: after dragging an object and releasing, the icon could **snap back** to the old position until another click; the saved position shows correctly as soon as you release.
- **Bulk delete of objects or workstations**: delete confirmation and the plan did not update correctly (a reload was often needed); the selection disappears from the plan after confirmation.
- **Several workstations selected**: the UI stayed stuck on one workstation detail and blocked returning to the list for bulk delete; the selection table remains usable.
- **Empty segment type**: in edit mode, “empty” segments were no longer shown as dotted; the dotted style is visible again.
- **Merging room points**: after a merge, a shared segment that was already deleted could **remain visible** until reload; the plan updates immediately.
- **Workstation type editor**: icons for object types linked to the workstation type could **disappear**; they show again in the composition.
- **Hover help on plan options**: hovering some buttons (e.g. select / manipulate) could cause an **error** and freeze the UI; hover stays stable and help appears when a scenario is linked.

## July 22, 2026 - v3.5.23

- <OT code="itemType" />
  - You can add an **icon badge** (<P code="itemType:iconBadge" />) on the **right inside** the icon square: short text, background color, and text color, to tell apart variants that share the same pictogram. Guided scenario: [Icon badge on an object type](/entities/scenarios/item-type-icon-badge-create).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/item-type-icon-badge-create-en" kind="video" asGif width={640} gifFps={8} alt="Create an object type with an icon badge" />

## July 20, 2026 - v3.5.21

- **Floor plan**
  - New option to **show only the selected room and its neighbors** (depth 1, 2, or 3) so you can focus on one area of the plan. Guided scenario: [Focus room and neighbors](/entities/scenarios/focus-room-neighbors).
  <CloudinaryAsset publicId="help/changelog/v3.5.21/focus-room-neighbors-en" kind="video" asGif width={640} gifFps={8} alt="Focus on a room and its neighbors on the floor plan" />

- <LIV code="roomPoint:dq-not-used" />
  - During building cloning, unused points are automatically removed so scenario creation can continue.
  - If anomalies persist, cloning stays blocked so you can manually fix the data quality report.

## July 6, 2026 - v3.5.15

- <OT code="building" />
  - New <LSV code="building:building-dxf-importer" /> view to **create floors** for a building and **import a DXF plan** (with its PNG image) for each floor.
  - Import directly produces the **space topology** on the selected floor.
  - Option to **reuse the background image** already stored on the floor instead of uploading a new PNG.
  - Option to **create a dedicated map scale** for each floor during import.
  - **Automatic scale bar detection** on the PNG image: the scale can be calculated and saved on the floor.
  - Detailed error messages when the DXF drawing frame does not match the PNG or when the expected polygon layer cannot be found.

- **Plan**
  - **Organizations (top level)** view: affected people’s **service** (organization) is shown on workstations on the plan.
  - **Edit mode**: when several workstations are selected, a rotation handle on the selection frame lets you rotate them **together** while keeping their relative layout. Guided scenario: [Group workstation rotation](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-group-rotation-en" kind="video" asGif width={640} gifFps={8} alt="Group rotation of workstations in plan edit mode" />

- <OT code="workplaceType" />
  - In the shape editor view (<LSV code="workplaceType:editor" />), you can set and save the default label display position (<P code="workplaceType:textAnchor" />) using the anchor option (shortcut **A**).
  - When you add a workstation on the plan, the label uses the position defined on the type. Guided scenario: [Text anchor on a workstation type](/entities/scenarios/workplace-type-text-anchor).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-en" kind="video" asGif width={640} gifFps={8} alt="Move the text anchor point on a workstation type" />

- **Floor plan — rooms**
  - In **edit mode**, when **at least two rooms** are selected, an action on the selection frame opens a panel to bulk-edit <P code="room:organization" />, <P code="room:costCenter" />, <P code="room:distributionCostType" />, <P code="room:roomConnector" />, and dimensions. Guided scenario: [Bulk room edit](/entities/scenarios/rooms-bulk-edit).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-en" kind="video" asGif width={640} gifFps={8} alt="Bulk room edit on the floor plan in edit mode" />
