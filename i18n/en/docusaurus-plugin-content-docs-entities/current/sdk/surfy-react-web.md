---
sidebar_position: 4.5
sidebar_label: "Surfy React Web"
---

# Surfy React Web

SDK React package: **`@surfy/surfy-sdk/react`** (does **not** register custom elements — unlike `@surfy/surfy-sdk`).

## Recommended public surface

For a **multi-building map**, use **only**:

| Export | Role |
|--------|------|
| **`SurfyPlatformView3dReact`** | **Sole** Platform view entry MapLibre + structures + in-map Cuby drill — [guide](./platform-campus-3d.md) |
| `SurfySdkReactProvider` | Instance provider (isolated store for multi-embeds) |
| Platform hooks | `useBuildings`, `useSetCurrentZoom`, `usePositionFromGeo`, … — [Context control SDK](./platform-campus-3d.md#context-control-sdk-host-chrome) |

Structure click → hydrates Cuby with a **pathfinding-style** look (exploded, ground floor) **in the same map**; structure colors = `Building.color` (SSOT). No A→B routing in this contract. Building / floor lists / inject geo = **host chrome** via hooks — not drawers packaged in the SDK component.

### Removed / deprecated (do not recommend)

| Export | Replacement |
|--------|-------------|
| `SurfyStructureCubyView3dReact` | **Removed** — `SurfyPlatformView3dReact` |
| `SurfyCampusView3dReact` | `SurfyPlatformView3dReact` (+ host focus) |
| `SurfyBuildingLayout3dReact` | Platform for the global map; otherwise **JS API / WC** `mountBuilding3d` / `<surfy-building-layout-3d>` |
| `SurfyFloorLayout3dReact` | **JS API / WC** (2D floor: `mountFloor2d` / `<surfy-floor-layout-2d>`) |
| `SurfyFloorLayout2dReact` | Prefer `mountFloor2d` / WC for new embeds outside the platform |

`SurfyStructureCubyView3dReact` is no longer exported. Others remain available short-term (`@deprecated`) for migration — **do not** present them as the public contract.

For HTML / Vue / non-React (floor / building): [Layout elements](./layout-elements.md) — **kept**.

## Parity with JS API / Web Component (legacy layouts)

When you still use a React floor/building layout (legacy), semantics stay aligned with [`SurfySdk.mount*`](./layout-elements.md):

| Contract | React props / callbacks | Handle (`ref`) |
|----------|-------------------------|----------------|
| Auth / tenant | `tenant`, `baseUrl`, `getAccessToken` | — |
| Entity | `floorId` / `buildingId` (+ optional `floorIds`) | — |
| Initial 3D options | `layout3dOptions?` | `setOptions(partial)` — merge |
| Colors | `roomColors?` | `setRoomColors` / `clearRoomColors` / `updateRoom` |
| Theme | `themeOptions?` | — |
| Ready / error | `onReady` / `onError` | — |
| Hover / selection | `onRoomHover` / `onRoomSelected` | — |
| Offline | `offlineEnabled?` (**default `true`**) | — |
| Camera / pins | — | `fitToView`, `zoomOn`, `addPin`, … |

Controls live in **your UI**, outside the Surfy component.

### Host chrome outside the component (platform — recommended)

```tsx
import {
  SurfyPlatformView3dReact,
  useSetCurrentZoom,
  usePositionFromGeo,
} from '@surfy/surfy-sdk/react';

function HostChrome() {
  const setZoom = useSetCurrentZoom();
  const positionFromGeo = usePositionFromGeo();
  return (
    <>
      <button type="button" onClick={() => setZoom({ type: 'enterBuilding', buildingId: 101 })}>
        Focus building
      </button>
      <button
        type="button"
        onClick={() => positionFromGeo({ lat: 48.86, lng: 2.35, altitude: 42.5 })}
      >
        Position by altitude
      </button>
    </>
  );
}

export function PlatformWithHostChrome() {
  return (
    <div style={{ height: '70vh' }}>
      <SurfyPlatformView3dReact
        tenant={tenant}
        baseUrl={baseUrl}
        getAccessToken={fetchToken}
        style={{ width: '100%', height: '100%' }}
      >
        <HostChrome />
      </SurfyPlatformView3dReact>
    </div>
  );
}
```

See [Context control SDK](./platform-campus-3d.md#context-control-sdk-host-chrome). `setOptions` detail (legacy building layout): [3D options](./options-3d.md). Space colors: [Room colors](./room-colors.md).

## Offline layout (floor / building)

After a **first successful load**, the SDK keeps in the **Surfy local cache** everything needed to **render the plan offline**: layout (floor or building) **and** master data / slices required for rendering.

| Rule | Behavior |
|------|----------|
| `offlineEnabled` | **Default `true`**. Opt out: `offlineEnabled={false}` → network only (no Surfy cache read/write). |
| SWR | Cache present **and** connectivity → **show cache first**, then **re-fetch** and update. |
| First miss | Without ever fetching this entity: the **first** load requires the network. |
| All-in content | Floor/building layout + master data needed for render — one Surfy bundle. |

```tsx
<SurfyFloorLayout2dReact
  floorId={floorId}
  tenant={tenant}
  baseUrl={baseUrl}
  getAccessToken={fetchToken}
  fillParent
  // offlineEnabled // default true — omit = Surfy cache on
/>
```

For the **Platform view** (vision + building detail + MapLibre): [Platform — Offline](./platform-campus-3d.md#offline-platform).

## Example — 2D floor + hooks (legacy React)

```tsx
import { useEffect, useState } from 'react';
import { fetchFloorLayoutData } from '@surfy/surfy-sdk';
import {
  SurfyFloorLayout2dReact,
  useRoom,
  useRooms,
  useSetRoom,
} from '@surfy/surfy-sdk/react';

async function loadLayout(floorId: number) {
  return fetchFloorLayoutData({
    floorId,
    tenant,
    baseUrl,
    getAccessToken: fetchToken,
  });
}

function RoomPanel({ roomId, workCanvasId }: { roomId: number; workCanvasId: string }) {
  const room = useRoom(roomId);
  const rooms = useRooms(workCanvasId);
  const setRoom = useSetRoom();

  return (
    <div>
      <p>{room?.name ?? '…'} ({rooms.length} spaces)</p>
      <button
        type="button"
        onClick={() => room && setRoom(room.id, { ...room, name: `${room.name} ★` })}
      >
        Mark
      </button>
    </div>
  );
}

export function FloorEmbed({ floorId }: { floorId: number }) {
  const [layoutData, setLayoutData] = useState<Awaited<ReturnType<typeof loadLayout>> | null>(null);

  useEffect(() => {
    void loadLayout(floorId).then(setLayoutData);
  }, [floorId]);

  if (!layoutData) return null;

  return (
    <div style={{ height: '70vh' }}>
      <SurfyFloorLayout2dReact
        floorId={floorId}
        tenant={tenant}
        baseUrl={baseUrl}
        getAccessToken={fetchToken}
        layoutData={layoutData}
        fillParent
        onReady={() => console.log('ready')}
      />
      {/* Hooks: children under the Provider created by SurfyFloorLayout2dReact */}
    </div>
  );
}
```

`SurfyFloorLayout2dReact` / `SurfyBuildingLayout3dReact` accept `layoutData` (already-loaded layout payload). Use `fetchFloorLayoutData` / `fetchBuildingLayoutData` from `@surfy/surfy-sdk`, or your own loader. Without `layoutData`, the component may self-fetch (with offline SWR if `offlineEnabled` stays `true`).

For **new** floor / building embeds outside the platform, prefer `SurfySdk.mountFloor2d` / `mountBuilding3d` or Web Components — [Layout elements](./layout-elements.md).

### Explicit provider

```tsx
import { SurfySdkReactProvider, SurfyFloorLayout2dReact } from '@surfy/surfy-sdk/react';

<SurfySdkReactProvider>
  <SurfyFloorLayout2dReact wrapProvider={false} /* … */ />
  <RoomPanel roomId={577183} workCanvasId={workCanvasId} />
</SurfySdkReactProvider>
```

`wrapProvider={false}` when you already provide the Provider (multi-panels sharing the same store).

## Auth

Same rule as other surfaces: `getAccessToken` prop → machine JWT via your backend. See [Authentication](./authentication.md).

## V1 limits

- **Read-only** plan (no Work Canvas editing).
- **No** React Native mobile in this package.
- Do not document / import internal Surfy modules outside `@surfy/surfy-sdk/react`.
- No A→B routes / wayfinding on the public React surface.

Multi-building map: [Platform view](./platform-campus-3d.md). Path overview: [React integration](./react-integration.md).
