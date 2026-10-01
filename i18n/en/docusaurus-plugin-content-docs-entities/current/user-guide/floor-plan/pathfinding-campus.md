---
sidebar_position: 3
sidebar_label: Pathfinding
---

# Pathfinding

**Pathfinding** lets you find a route from one space to another and follow it in a 3D view when <P code="company:enablePathfinding" /> is enabled for the company.

This page covers navigation **inside a building**. Navigation **across several buildings** on a campus (outdoor segments) is a different use — it is not covered here.

## Navigating inside a building

From a <OT code="building" /> record, open the <LSV code="building:building-pathfinding" /> view.

1. On the left, choose the **origin** then the **destination** (spaces in this building; a destination can also be an item linked to a space).
2. On the right, the building map shows the **3D route** between the two points.
3. Follow the path to find your way floor by floor **within this building**.

### Prerequisites

- <P code="company:enablePathfinding" /> enabled.
- Access to the <OT code="building" /> record and the Pathfinding view.
- Spaces (and space connectors between floors, when needed) already prepared for navigation.

### Refresh navigation (admin)

On the same view, an administrator can **refresh navigation** for the building. The calculation takes **space connectors** between floors into account. Surfy stays usable while it runs; a message indicates when navigation is up to date.

### What this is not

- **Not** multi-building **campus** navigation or outdoor travel between buildings.
- **Not** the [3D preview of a single room](/entities/user-guide/floor-plan/room-3d-preview) from the floor plan.
- **Not** a technical debug-only tool: it is a **navigation** view to find your way in the building.

## See also

- [3D room preview](/entities/user-guide/floor-plan/room-3d-preview)
