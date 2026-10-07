---
sidebar_position: 2
sidebar_label: 3D room preview
---

# 3D room preview

On a floor plan (<LIV code="floor:map" />), you can open a **read-only 3D preview** of the selected room: room shape, desks and objects inside, **without** neighboring rooms.

<CloudinaryAsset publicId="help/changelog/v3.5.55/room-3d-preview-en" kind="video" asGif width={640} gifFps={8} alt="3D room preview from the floor plan: card icon, right panel, single room only" />

## Prerequisites

- Access to a <OT code="floor" /> plan view (<LIV code="floor:map" />).
- A <OT code="room" /> selected on the plan (room card visible).

## Steps

1. Open the floor plan (<LIV code="floor:map" />).
2. Click a room so its card appears (information tab).
3. At the bottom of the card, click the **3D room preview** icon.
4. A panel opens on the right: orbit the view with the mouse to explore the room.
5. Close the panel to return to the 2D plan — nothing was changed.

## What you see

- **One room only**: the geometry of the selected room.
- **Internal content**: workplaces and objects placed in that room (when they exist).
- **No neighbors**: corridors and adjacent rooms do not appear in this preview.

## Limits

- **Read-only**: the preview does not let you move, add, or save anything.
- The icon is only on the **room card** from the 2D plan (not on other card tabs, and not from a list).
- If the preview cannot load, a calm message says it is unavailable — the 2D plan stays usable.

## See also

- [Visual edges on an object type](/entities/user-guide/floor-plan/item-type-visual-edges)
