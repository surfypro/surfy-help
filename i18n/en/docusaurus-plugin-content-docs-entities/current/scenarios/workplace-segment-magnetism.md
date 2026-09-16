---
sidebar_position: 7
sidebar_label: Segment magnetism on the floor plan
---

# Segment magnetism on the floor plan

On a floor plan (<LIV code="floor:map" />), turn on **Magnetism** so workstation and object **sides** snap together while you **move**, **duplicate**, or **place** them. The plan only compares shapes in the **same space** that are **nearby** (about **1.5 m**, center to center). When several neighbours qualify, the plan can offer **several snaps at once** (often two axes at 90°, e.g. left **and** top).

<CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-en" kind="video" asGif width={640} gifFps={8} alt="Several simultaneous snaps (Magnetism) on the floor plan in edit mode" />

## Prerequisites

- Edit rights on the floor plan.
- Floor plan open on the relevant level.

## Steps

1. **Open the floor plan**  
   Scenario starting point: <LIV code="floor:map" /> view.

2. **Click on the Enable plan edit mode button**  
   Switches the plan to edit mode so you can move and rotate workstations and objects (shortcut **e**).

3. **Click on the Enable Magnetism button**  
   *Snaps workstation and object sides together while moving, duplicating, or placing. Remembered on this device.*

4. **Select a workstation**  
   That shape becomes the active selection.

## Gestures without narration

- **Drag** the workstation toward **several** neighbours already placed in the **same space** (e.g. one on the left and one above): several preview zones / edges can appear **together** when sides can snap.
- **Release**: the shape settles in **one** smooth transition into the pose that satisfies all of those snaps. If they are not all compatible, the plan keeps a feasible subset (sometimes only one).
- **Rotate** near a target: **45°** steps still guide the gesture; on **release**, if a snap set is nearby, the final angle follows side alignment.

## How it works

### Magnetism option

- **Off by default.** Once enabled, the choice stays remembered on **this device** (browser / workstation).
- With the option off, there is no side snapping, no magnetism preview, and rotation keeps only the 45° steps.

### Gestures covered

| Gesture | Behaviour |
|---------|-----------|
| **Move** a selected shape | Magnetism is active when the option is on and the shape belongs to a known space. |
| **Duplicate** a shape | Same logic as moving: the copy being placed can snap to neighbours in the same space. |
| **Place** from a space detail panel | When you add a workstation or object **into a space** (the space is known), magnetism works like when moving. |
| **Place without a known space** | No magnetism (the plan cannot filter neighbours by space). |
| **Rotation** (single shape or group) | 45° steps guide the gesture; on **release**, if Magnetism is on and a side snap is nearby, the final angle favours side alignment over the 45° step. |

### Neighbour scope

The plan looks for snaps **only** among workstations and objects that meet **both** conditions:

1. **Same space** — the shape in progress and the neighbour belong to the same space (no snapping across a wall into another space).
2. **Nearby** — the centres of both shapes are about **1.5 m** apart or less on the plan.

**Walls** and space **outlines** are not snap targets.

### What you see during the gesture

While you hold the shape (move, duplicate, place, or rotate before release), the plan may show several kinds of cues:

| Cue | Meaning |
|-----|---------|
| **Dotted lines** (centre → centre) | Link the centre of the shape in progress to the centre of **each eligible neighbour** (same space, ≤ ~1.5 m). They show the **comparison perimeter**: shapes whose sides will be tested. |
| **Coloured zones** between two sides | Area where a snap would apply if you released there. |
| **Highlighted edges** | Sides involved in a retained snap (already placed shape and shape in progress). |
| **Several zones / edges at once** | **Simultaneous** snaps are possible (often on two perpendicular axes). The plan only proposes **mutually compatible** combinations. |

If several snaps cannot coexist, the plan **honestly narrows** the proposed set (sometimes one snap, sometimes none).

### Side snap rules

For one side to snap onto another:

- Both sides must be **roughly parallel** (nearly aligned, not at a sharp angle).
- Each side must be at least about **30 cm** long on the plan.
- Sides must be **close enough** (window of about **5 cm**) to “stick” on release.
- At similar distance, the plan favours sides of **similar length**.

### On release

When you release the mouse (or confirm placement):

- The shape moves in **one smooth transition** to the pose that satisfies **all** retained snaps from the proposed set.
- If the displayed set was not fully achievable, only a **feasible subset** is applied.

## Tip

- To **align several shapes together**, keep them in the **same space** within about **1.5 m** centre to centre — beyond that, they no longer participate in magnetism.
- To **rotate a group** without magnetism, see [Group rotation on the floor plan](./workplace-group-rotation).

## Limits

- The building **3D** view is not included.
- No snapping to walls or space polygons.
- No magnetism across different spaces, or beyond the neighbourhood (~1.5 m).
- Without Magnetism (or without a nearby target), rotation keeps the usual **45°** step behaviour.

## See also

- [Group rotation on the floor plan](./workplace-group-rotation)
- [Text anchor on a workstation type](./workplace-type-text-anchor)
