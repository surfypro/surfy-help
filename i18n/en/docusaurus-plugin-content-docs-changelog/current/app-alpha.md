# What's New (alpha)

This page describes **visible changes** already **deployed** on the **Surfy alpha application** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, only **features** are moved to [What's New](./app.md); the **Fixed bugs** sections are **not** copied to production (they are for the test team during the alpha cycle). This page is then hidden by renaming it to `_app-alpha.md`.


## July 24, 2026 - v3.5.32

- **Floor plan**
  - On plan option icon buttons, a **long press** opens the related scenario help (e.g. focus room and neighbors), with the same content as the guided scenario.
  - After a **bulk room edit** that changes dimensions, a message confirms the update.
  - New option to **show only the selected room and its neighbors** (depth 1, 2, or 3) so you can focus on one area of the plan. Guided scenario: [Focus room and neighbors](/entities/scenarios/focus-room-neighbors).
  <CloudinaryAsset publicId="help/changelog/v3.5.21/focus-room-neighbors-en" kind="video" asGif width={640} gifFps={8} alt="Focus on a room and its neighbors on the floor plan" />
  - **Organizations (top level)** view: affected people’s **service** (organization) is shown on workstations on the plan.
  - **Edit mode**: when several workstations are selected, a rotation handle on the selection frame lets you rotate them **together** while keeping their relative layout. Guided scenario: [Group workstation rotation](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-group-rotation-en" kind="video" asGif width={640} gifFps={8} alt="Group rotation of workstations in plan edit mode" />

- **Floor plan — rooms**
  - In **edit mode**, when **at least two rooms** are selected, an action on the selection frame opens a panel to bulk-edit <P code="room:organization" />, <P code="room:costCenter" />, <P code="room:distributionCostType" />, <P code="room:roomConnector" />, and dimensions. Guided scenario: [Bulk room edit](/entities/scenarios/rooms-bulk-edit).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-en" kind="video" asGif width={640} gifFps={8} alt="Bulk room edit on the floor plan in edit mode" />

- **Building clone**
  - After a successful clone, newly accessible buildings appear in the application **without signing in again**.

- <OT code="itemType" />
  - You can add an **icon badge** (<P code="itemType:iconBadge" />) on the **right inside** the icon square: short text, background color, and text color, to tell apart variants that share the same pictogram. Guided scenario: [Icon badge on an object type](/entities/scenarios/item-type-icon-badge-create).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/item-type-icon-badge-create-en" kind="video" asGif width={640} gifFps={8} alt="Create an object type with an icon badge" />

- <LIV code="roomPoint:dq-not-used" />
  - During building cloning, unused points are automatically removed so scenario creation can continue.
  - If anomalies persist, cloning stays blocked so you can manually fix the data quality report.

- <OT code="building" />
  - New <LSV code="building:building-dxf-importer" /> view to **create floors** for a building and **import a DXF plan** (with its PNG image) for each floor.
  - Import directly produces the **space topology** on the selected floor.
  - Option to **reuse the background image** already stored on the floor instead of uploading a new PNG.
  - Option to **create a dedicated map scale** for each floor during import.
  - **Automatic scale bar detection** on the PNG image: the scale can be calculated and saved on the floor.
  - Detailed error messages when the DXF drawing frame does not match the PNG or when the expected polygon layer cannot be found.

- <OT code="workplaceType" />
  - In the shape editor view (<LSV code="workplaceType:editor" />), you can set and save the default label display position (<P code="workplaceType:textAnchor" />) using the anchor option (shortcut **A**).
  - When you add a workstation on the plan, the label uses the position defined on the type. Guided scenario: [Text anchor on a workstation type](/entities/scenarios/workplace-type-text-anchor).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-en" kind="video" asGif width={640} gifFps={8} alt="Move the text anchor point on a workstation type" />

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
