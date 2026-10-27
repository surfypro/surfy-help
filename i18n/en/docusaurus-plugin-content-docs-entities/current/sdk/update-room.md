---
sidebar_position: 7
sidebar_label: "Spaces (updateRoom)"
---

# Updating a space (`updateRoom`)

`layout.updateRoom(roomId, options)` lets you change **several properties of a single space** in one call (partial merge).

## Signature

```ts
import { SurfySdk, type SurfyRoomUpdateOptions } from '@surfy/surfy-sdk';

const layout = SurfySdk.mountFloor2d({ /* … */ });

layout.updateRoom(roomId, {
  color?: string | null;
  showLabel?: boolean;
});
```

| Option | Type | Description |
|--------|------|-------------|
| `color` | `string \| null` | CSS color; `null` removes the override for this space |
| `showLabel` | `boolean` | Shows / hides the space 3D label |

Only the keys you provide are applied.

## Examples

```ts
const layout = SurfySdk.mountBuilding3d({
  container: '#map',
  tenant,
  baseUrl,
  buildingId: 42,
  getAccessToken,
});

layout.updateRoom(577183, {
  color: '#2196F3',
  showLabel: true,
});

layout.updateRoom(577183, { showLabel: false });
layout.updateRoom(577183, { color: null });
```

## Difference from `setRoomColors`

| Method | Behavior |
|--------|----------|
| `setRoomColors(map)` | **Replaces** the entire color map |
| `updateRoom(id, { color })` | **Merges** the color of a single space |

## Availability

| Kind | `color` | `showLabel` |
|------|---------|-------------|
| `floor-2d` | yes | ignored (no 3D labels) |
| `building-3d` | yes | yes |

Global labels (`setOptions({ showRoomLabels })`) remain the master switch.

See also [Room colors](./room-colors.md) and [3D options](./options-3d.md).
