# What's New (alpha)

This page describes **visible changes** already available on the **Surfy alpha application**, before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, useful content is moved to [What's New](./app.md); this page is then hidden by renaming it to `_app-alpha.md`.

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
