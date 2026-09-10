---
sidebar_position: 8
sidebar_label: Create visual edges (object type)
---

# Create visual edges on an object type

You already have a **useful shape** on an <OT code="itemType" /> and want a decorative line (e.g. a diagonal) **without** changing footprint or magnetism. This scenario covers the full gesture: exclusive layer, optional bind to a shape point, short dashes, and the result on the plan.

Detailed guide: [Visual edges (object type)](/entities/user-guide/floor-plan/item-type-visual-edges).

## Prerequisites

- Permission to edit object types.
- A type with a shape already defined (shape points).

## Steps

1. **Open the object type shape editor**  
   Starting point: shape editor view (<LSV code="itemType:editor" />). The active layer is **Shape points**.

2. **Switch to Visual edges**  
   The exclusive **Shape points** / **Visual edges** control activates the décor drawing layer.

3. **Turn on Add a visual edge**  
   *Draw a decorative edge (2 clicks) on the visual edges layer.*

4. **Place the first visual edge vertex**  
   Zoom if needed. To reuse a shape point: largely overlap the circles until the **hover color change**, then click. Otherwise click away for a free point.

5. **Place the second vertex and commit the edge**  
   Same rule for the other end. The edge renders as **short dashes**. A vertex bound to a shape point **stays put** and follows that point.

6. **(Optional) Pan the plan**  
   Drag the background map or empty work canvas to reach the drawing area.

## Gestures without narration

- **Delete an edge** to detach a vertex bound to a shape point — a bound vertex does not move when dragged.
- On the floor plan, an object of the type shows **shape + décor**; magnetism and area read **shape only**.

## Limits

- No visual edges on workstation types in this release.
- This is not a room segment or floor-plan Magnetism.
- Legacy mixed shapes are not split automatically.

## See also

- [Visual edges (object type)](/entities/user-guide/floor-plan/item-type-visual-edges)
- [Segment magnetism on the floor plan](./workplace-segment-magnetism)
