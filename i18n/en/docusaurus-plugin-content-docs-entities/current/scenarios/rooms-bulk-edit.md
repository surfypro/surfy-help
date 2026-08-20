---
sidebar_position: 5
sidebar_label: Bulk room edit
---

# Bulk room edit

On the floor plan (<LIV code="floor:map" />), update reference properties for **several selected rooms** in one go.

<CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-en" kind="video" asGif width={640} gifFps={8} alt="Bulk room edit on the floor plan in edit mode" />

## Prerequisites

- Rights to edit rooms.
- Floor plan open on the relevant level.

## Steps

1. **Open the floor plan**  
   Scenario starting point: <LIV code="floor:map" /> view.

2. **Click on the Enable plan edit mode button**  
   Switches the plan to edit mode so you can select and edit rooms (shortcut **e**).

3. **Edit properties for all selected rooms**  
   Opens the side panel after selecting several rooms with **Shift**. You can harmonize in particular:
   - <P code="room:organization" />
   - <P code="room:costCenter" />
   - <P code="room:distributionCostType" />
   - <P code="room:roomConnector" />
   - **dimensions** by analysis layer type

4. **Click on the Save button**  
   Applies the changes to all selected rooms.

## Gestures without narration

- **Organizations** colouring, click in empty space, select two rooms with **Shift**, pick an organization in the dialog, then confirm.

## Multiple values

When selected rooms do not share the same value for a property, the field shows **“Multiple values”**. Choosing a new value replaces that property on **all** selected rooms.

## Limits

- Bulk edit covers **reference data** and **dimensions**, not text fields such as the room name.
- The action appears only when **at least two rooms** are selected.

## See also

- [Group rotation on the floor plan](./workplace-group-rotation)
- [Text anchor on a workstation type](./workplace-type-text-anchor)
