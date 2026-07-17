# Text anchor point on a workstation type

On a <OT code="workplaceType" /> shape editor view (<LSV code="workplaceType:editor" />), you can set and save the default label position shown on the floor plan (<P code="workplaceType:textAnchor" />). When you add a workstation of that type to the plan, the label uses this position.

<CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-en" kind="video" asGif width={640} gifFps={8} alt="Move the text anchor point on a workstation type" />

## Prerequisites

- Permission to edit workstation types.
- An existing workstation type.

## Steps

1. Open the workstation type.
2. Go to the shape editor view (<LSV code="workplaceType:editor" />).
3. Turn on the text anchor option (shortcut **A** or the equivalent toolbar option).
4. Move the **anchor point** to the desired label position.
5. Save the workstation type.
6. When you add a workstation of this type on the plan, the label appears at the defined position.

## Reset the anchor

You can restore the anchor to its initial position using the reset action in the shape editor view.

## Limits (current version)

- The position set on the type applies to **new workstations** created from that type; workstations already on the plan keep their existing anchor until changed individually.
- The anchor controls **label** placement on the plan, not the workstation shape itself.

## See also

- [Group rotation of workstations on the floor plan](./workplace-group-rotation)
- [Bulk room edit on the floor plan](./rooms-bulk-edit)
