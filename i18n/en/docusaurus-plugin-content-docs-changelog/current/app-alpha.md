# What's New (alpha)

This page describes **visible changes** already available on the **Surfy alpha application**, before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, useful content is moved to [What's New](./app.md); this page is then hidden by renaming it to `_app-alpha.md`.

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
  - **Edit mode**: when several workstations are selected, a rotation handle on the selection frame lets you rotate them **together** while keeping their relative layout.

- <OT code="workplaceType" />
  - In the shape editor view (<LSV code="workplaceType:editor" />), you can set and save the default label display position (<P code="workplaceType:textAnchor" />) using the anchor option (shortcut **A**).
  - When you add a workstation on the plan, the label uses the position defined on the type.
