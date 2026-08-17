---
sidebar_position: 4
sidebar_label: Text anchor (workstation type)
---

# Text anchor on a workstation type

On a <OT code="workplaceType" /> shape editor (<LSV code="workplaceType:editor" />), set the default label position (<P code="workplaceType:textAnchor" />). When you add a workstation on the plan, the label uses this position.

<CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-en" kind="video" asGif width={640} gifFps={8} alt="Move the text anchor point on a workstation type" />

## Prerequisites

- Rights to edit workstation types.
- An existing workstation type.

## Steps

1. **Open the workstation type and go to the shape editor**  
   Scenario starting point: <LSV code="workplaceType:editor" /> view.

2. **Click on the Start workplace manipulation button**  
   Enables selection / manipulation mode on the workstation type editor.

3. **Click on the Move text anchor button**  
   *Show and move the text anchor point for this workstation type* (shortcut **A**).

## Gestures without narration

- Drag the **anchor point** to the desired label position.
- Save the workstation type so **new** workstations use this position.

## Reset the anchor

You can reset the anchor to its initial position via the reset action in the shape editor.

## Limits

- The position defined on the type applies to **new workstations**; already placed workstations keep their anchor until edited individually.
- The anchor affects the **label** on the plan, not the workstation shape.

## See also

- [Group rotation on the floor plan](./workplace-group-rotation)
- [Bulk room edit](./rooms-bulk-edit)
