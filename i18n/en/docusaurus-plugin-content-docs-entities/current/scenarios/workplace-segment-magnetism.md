---
sidebar_position: 7
sidebar_label: Segment magnetism on the floor plan
---

# Segment magnetism on the floor plan

On a floor plan (<LIV code="floor:map" />), turn on **Magnetism** so workstation and object **sides** snap together while you move them (and also when duplicating or placing). When several neighbours are nearby, the plan can offer **several snaps at once** (often two axes at 90°, e.g. left **and** top).

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

- **Drag** the workstation toward **several** neighbours already on the plan (e.g. one on the left and one above): several preview zones / edges can appear **together** when sides can snap.
- **Release**: the shape settles in **one** smooth transition into the pose that satisfies all of those snaps. If they are not all compatible, the plan keeps a feasible subset (sometimes only one).
- **Rotate** near a target: **45°** steps still guide the gesture; on **release**, if a snap set is nearby, the final angle follows side alignment.

## Tip

- The option is **off by default**. Once enabled, it stays remembered on **this device**.
- Sides that are too short or too far apart do not snap. Walls and rooms are not included.

## Limits

- The building **3D** view is not included.
- Without Magnetism (or without a nearby target), rotation keeps the usual **45°** step behaviour.

## See also

- [Group rotation on the floor plan](./workplace-group-rotation)
- [Text anchor on a workstation type](./workplace-type-text-anchor)
