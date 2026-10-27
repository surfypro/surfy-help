---
sidebar_position: 8
sidebar_label: "Room colors"
---

# Room colors

Color one or more spaces via `setRoomColors`. The API is **identical** on the JS API (`SurfyLayout`), Web Components, and Surfy React Web (`roomColors` prop / equivalent methods).

## Basic usage

```ts
import { SurfySdk } from '@surfy/surfy-sdk';

const layout = SurfySdk.mountFloor2d({
  container: '#map',
  tenant,
  baseUrl,
  floorId,
  getAccessToken,
  onReady: () => {
    layout.setRoomColors({
      577183: '#2196F3',
    });
  },
});
```

Keys are **numeric space IDs** (`roomId`), not display names.

## Multiple spaces in one call

```ts
el.setRoomColors({
  577183: '#2196F3', // blue
  577181: '#4CAF50', // green
  577219: '#F44336', // red
});
```

Each value is a valid CSS color (`#hex`, `rgb()`, `hsl()`, CSS names).

## Behavior

```mermaid
stateDiagram-v2
  [*] --> Default: el load
  Default: fill #e8e8e8
  Default --> Colored: setRoomColors(map)
  Colored --> Colored: setRoomColors(new map)
  Colored --> Default: clearRoomColors()
```

| Action | Effect |
|--------|--------|
| `setRoomColors(colors)` | **Replaces** the whole integrator color set (not a partial add) |
| `clearRoomColors()` | Back to default fill `#e8e8e8` |
| New partial call | Merge yourself with the previous state |

### Incremental update (host pattern)

```ts
let currentColors: Record<number, string> = {};

function colorRoom(roomId: number, color: string) {
  currentColors = { ...currentColors, [roomId]: color };
  el.setRoomColors(currentColors);
}

function removeRoomColor(roomId: number) {
  const { [roomId]: _, ...rest } = currentColors;
  currentColors = rest;
  el.setRoomColors(currentColors);
}
```

## Color after user selection

```ts
let selectedRoomId: number | undefined;

el.addEventListener('surfy:room-selected', (e) => {
  selectedRoomId = e.detail.roomId;
});

document.getElementById('highlight-btn')!.addEventListener('click', () => {
  if (selectedRoomId !== undefined) {
    el.setRoomColors({ [selectedRoomId]: '#FF9800' });
  }
});
```

## Finding space IDs

- `surfy:room-selected` / `surfy:room-hover` events: `detail.roomId`
- Shadow DOM (debug): `[data-room-id]` on space SVG groups
- Layout API: `rooms[].id` field in the `layout/floor/data` response

:::tip Demo
The **surfy-sdk-demos** project dynamically colors the first rendered space or the one selected by the user.
:::

## Limits

- **2D**: only space polygon **fill** is overridden, not strokes or equipment icons.
- **3D building**: `setRoomColors` overrides CubyV2 **room materials** (same `roomId` semantics).
- No gradient or pattern: solid color per space.
- Surfy business colors (cost center, analysis layers) are not exposed — use `setRoomColors` for your own semantics.
- **Structure / massing** colors on the Platform view: source `Building.color` (not `setRoomColors`) — see [Platform view](./platform-campus-3d.md).
