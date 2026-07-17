# Bulk room edit on the floor plan

On a floor plan view (<LIV code="floor:map" />), in **edit mode**, you can update reference properties for **multiple selected rooms** in one step.

<CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-en" kind="video" asGif width={640} gifFps={8} alt="Bulk room edit on the floor plan in edit mode" />

## Prerequisites

- Permission to update rooms.
- **Edit mode** enabled (shortcut **e** or the equivalent option in the plan toolbar).

## Steps

1. Open the floor plan.
2. Enable **edit mode**.
3. Select **at least two rooms**:
   - hold **Shift** and click each room, or
   - use the selection tool to include several rooms.
4. A **dashed frame** surrounds the selection. On the **top edge** of the frame, click the **bulk edit** icon.
5. The **right drawer** opens. You can change for all selected rooms:
   - <P code="room:organization" />
   - <P code="room:costCenter" />
   - <P code="room:distributionCostType" />
   - <P code="room:roomConnector" />
6. In the **dimensions** section, pick a value per analysis layer type; it is applied to every selected room.
7. Click **Apply**: changes are saved and the plan refreshes.

## Multiple values

When selected rooms do not share the same value for a property, the field shows **"Multiple values"**. Choosing a new value overwrites that property on **all** selected rooms.

## Limits (current version)

- Bulk edit covers **reference fields** (organization, cost center, etc.) and **dimensions**, not text fields such as the room name.
- The action is shown only when **at least two rooms** are selected.

## See also

- [Group rotation of workplaces on the plan](./workplace-group-rotation)
- [Text anchor point on a workstation type](./workplace-type-text-anchor)
- [Edit a room](/en/docs/tutorials/surfaces/room/edit)
