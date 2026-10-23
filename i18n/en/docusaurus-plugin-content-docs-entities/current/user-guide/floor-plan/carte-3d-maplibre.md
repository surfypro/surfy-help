---
sidebar_position: 4
sidebar_label: MapLibre 3D Map
---

# MapLibre 3D Map (campus exploration)

The <LIV code="building:3d-maplibre" /> view lets you explore **several buildings** on a 3D map: first as **volumes** (Structure mode), then as **detail** for one building (Building mode), **without leaving the map** and **without creating a route**.

## Open the view

From the <OT code="building" /> list, open the <LIV code="building:3d-maplibre" /> view (**MapLibre 3D Map**).

## Structure mode

In **Structure mode**, buildings appear as **volumes**.

- On the left, a **name list** of buildings.
- Click a name (or zoom on a building) to focus it and enter Building mode.

## Building mode

In **Building mode**, the focused building shows in **3D detail** (same rendering as the Pathfinding view), **read-only**.

- **Only one** building at a time in Building mode; the others stay in Structure mode.
- A side panel offers the **same family of floor / display controls** as Pathfinding (current floor, other floors preview, etc.).
- **No** origin / destination picker and **no** route editing on this view.

## Detail loading {#detail-loading}

The **first** time you enter Building mode (click or zoom), the detail may need to **load**:

- A **loading indicator** appears on the building **pin / name**; **step detail** may show in the global loading indicator.
- While loading is in progress for that building, the pin **stays visible** (even if zoom would otherwise hide labels).
- When you **approach** a building, loading can start **before** you click — entering Building mode is then faster.
- Once the **detail is ready**, **zooming back in** on the same building is usually **immediate**.
- On failure: an error message is shown; the pin may keep a failure indicator.

## Zoom: leave and return

- **Zoom out** far enough → back to **Structure mode** (volumes).
- **Zoom in** again on the same building → back to **Building mode** (detail already ready).

## What this is not

- **Not** [Pathfinding navigation](/entities/user-guide/floor-plan/pathfinding-campus) with origin and destination inside a building.
- **Not** the [3D preview of a single room](/entities/user-guide/floor-plan/room-3d-preview) from the floor plan.

## See also

- [Pathfinding — navigating inside a building](/entities/user-guide/floor-plan/pathfinding-campus)
- [3D room preview](/entities/user-guide/floor-plan/room-3d-preview)
