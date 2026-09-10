---
sidebar_position: 1
sidebar_label: Visual edges (object type)
---

# Visual edges on an object type

In an <OT code="itemType" /> shape editor, you can separate the **useful shape** (**Shape points**) from **display décor** (**Visual edges**). Visual edges appear on the plan but **do not change** footprint, floor area, collisions, or [Segment magnetism on the floor plan](/entities/scenarios/workplace-segment-magnetism).

## What is this for?

- Draw a cross, a line, or any other detail **without bloating** the business shape.
- Keep a simple shape for magnetism and area calculations.
- Still show the décor on the plan for users.

This is **not**:

- [Magnetism](/entities/scenarios/workplace-segment-magnetism) itself ;
- a room segment ;
- visual edges on a workstation type ;
- a made-up “visual stop” term — use **visual edge vertex**.

## Two exclusive layers

The editor offers a single **Shape points** / **Visual edges** control: you work on **one or the other**, never both at once. **Shape points** is the default layer.

## Pan the plan

In the object-type editor (and in the workstation-type editor), **pan the plan** by dragging the **background map** or an empty area of the work canvas. Even without a background map, the work canvas still moves so you can reach the drawing area.

## Creating visual edges

1. Open the object type shape editor (<LSV code="itemType:editor" />).
2. Switch the control to **Visual edges**.
3. Turn on **Add a visual edge** (*Draw a decorative edge (2 clicks) on the visual edges layer*).
4. Click to place each **visual edge vertex**:
   - **Free point**: click away from a shape point.
   - **Reuse a shape point**: largely overlap the pointer and existing point circles, wait for the **hover color change**, then click.
5. Committed edges render as **short dashes** on the plan.
6. A **visual edge vertex** bound to a shape point **cannot be dragged**: it follows that point. To detach it, **delete the edge** (**Remove visual edges**).

Step-by-step guided scenario: [Create visual edges on an object type](/entities/scenarios/item-type-create-visual-edges).

## What the plan shows

- **Shape only**: footprint, magnetism, area, and collisions.
- **Shape + visual edges**: décor is added to the display without changing business geometry.

## Existing data

Historical polygons that mixed shape and décor are **not converted automatically**. Open the type and separate manually if needed.

## See also

- [Create visual edges](/entities/scenarios/item-type-create-visual-edges)
- [Segment magnetism on the floor plan](/entities/scenarios/workplace-segment-magnetism)
