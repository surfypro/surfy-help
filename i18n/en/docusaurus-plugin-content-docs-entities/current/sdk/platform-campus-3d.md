---
sidebar_position: 4.6
sidebar_label: "Platform view (3D)"
---

# Platform view (3D)

**Recommended public React surface** for a multi-building map: **`SurfyPlatformView3dReact`**. Stack: **MapLibre** (streets) + **Cuby SDK** — no Google Maps, no Surfy métier UI.

Import: **`@surfy/surfy-sdk/react`**.

> Eng spec (English): `docs/surfy-sdk/platform-campus-view-3d.md` in the Surfy monorepo.

:::warning Public React contract = platform only
**Sole entry:** `SurfyPlatformView3dReact` (**Platform view**).  
`SurfyStructureCubyView3dReact` is **removed** from the public contract (do not import).  
`SurfyCampusView3dReact`, `SurfyBuildingLayout3dReact`, and `SurfyFloorLayout3dReact` remain **deprecated**. Prefer the platform view; for a floor / building plan outside the global map, use the **JS API** / **Web Component** (`mount*` / tags) — [Layout elements](./layout-elements.md). Details: [Surfy React Web](./surfy-react-web.md).
:::

## Recommended component

| Component | Scope | Key props |
|-----------|--------|-----------|
| `SurfyPlatformView3dReact` | Platform view (tenant) | `tenant` (or `clientId`), `baseUrl`, `getAccessToken` |

Auth V1: machine JWT via your **proxy** (`getAccessToken`) — **never** put `clientSecret` in the browser. See [Authentication](./authentication.md).

```tsx
import {
  SurfyPlatformView3dReact,
  useBuildings,
  usePositionFromGeo,
} from '@surfy/surfy-sdk/react';

export function PlatformEmbed() {
  return (
    <SurfyPlatformView3dReact
      tenant="my-tenant"
      baseUrl="https://app.surfy.pro"
      getAccessToken={fetchToken}
      style={{ width: '100%', height: '70vh' }}
      onReady={() => console.log('ready')}
      onBuildingChange={id => console.log('building', id)}
      onFloorChange={id => console.log('floor', id)}
    />
  );
}
```

## MapLibre map + structures

- **Street-style** basemap (location) — **basemap 3D buildings** are hidden so they do not overlap Surfy volumes.
- At platform level, buildings render as **massing** (structure volumes).
- Massing / structure colors follow the **same source** as product building pathfinding: the building color (`Building.color`). Neutral fallback only when the color is missing. Integrator **space** colors remain [Room colors](./room-colors.md).

### MapLibre tiles

The SDK does **not** keep a Surfy cache of MapLibre tiles or style. Only the **browser cache** applies. Offline, the **Surfy plan** (Cuby volumes + data already in the Surfy cache) can stay OK while the cartographic basemap is missing or degraded — expected behavior.

## Structure click → Cuby (pathfinding look, same map)

A **click on a structure** (or equivalent host focus):

1. Focuses the building **in the same MapLibre map** — **no** component switch, **no** routing to another view.
2. Hydrates the **Cuby** volume with a building-pathfinding-style look: **exploded** (ghost floors), starting at **ground floor (RDC)**.
3. Leaving focus restores the structure massing.

This contract covers Cuby **rendering** (pathfinding look). It does **not** include A→B route / wayfinding computation.

The Surfy product `building/3d-maplibre` uses the **same entry** `SurfyPlatformView3dReact` (same in-map drill geste; outside métier changelog scope).

## Context control SDK (host chrome)

Drive building / floor / selection / position from **your chrome**, outside the Surfy component. Demo or host drawers / lists / buttons (buildings, floors, inject geo) are **host chrome** — **not** métier drawers packaged inside the SDK component.

| API | Role |
|-----|------|
| `onReady` / `onBuildingChange` / `onFloorChange` | Lifecycle & focus notified to the host |
| `useCurrentZoom` | Read current focus level (`platform` / `campus` / `building` / `floor` / …) |
| `useSetCurrentZoom` | Write focus: `{ type: 'enterBuilding', buildingId }` then `{ type: 'enterFloor', floorId, buildingId }` |
| `useBuildings` / `useFloors` / `useSpaces` / `useFurniture` | Session data |
| `useSpaceColors` / `useSetSpaceColor` / `useTypologieColors` | Space coloring |
| `usePositionFromGeo` | **Position by altitude** |
| `useGeoMarker` / `useSelectedSpaceId` | Marker & selection |

Place hooks **under** the component (as children) — same Provider as the view.

```tsx
import { useCurrentZoom, useSetCurrentZoom } from '@surfy/surfy-sdk/react';

function HostFocusChrome() {
  const setZoom = useSetCurrentZoom();
  const zoom = useCurrentZoom();

  return (
    <div>
      <button
        type="button"
        onClick={() => setZoom({ type: 'enterBuilding', buildingId: 101, campusId: 1 })}
      >
        Focus building 101
      </button>
      <button
        type="button"
        onClick={() => setZoom({ type: 'enterFloor', floorId: 10, buildingId: 101 })}
      >
        Focus floor 10
      </button>
      <span>Level: {zoom.level}</span>
    </div>
  );
}
```

`enterBuilding` / `enterFloor` transitions also fire `onBuildingChange` / `onFloorChange` on the view — and the same Cuby PF-style in-map look as a structure click.

## Offline platform

After a **first successful fetch**, the Surfy local cache keeps the **all-in** payload needed to render offline: platform vision + building detail + master data / slices required for Cuby.

| Rule | Behavior |
|------|----------|
| `offlineEnabled` | **Default `true`**. `offlineEnabled={false}` → network only. |
| SWR | Cache present + network → **show cache first**, then **re-fetch** and update. |
| First miss | First load of an entity absent from cache = network required. |
| MapLibre | **No** Surfy cache of tiles/style — [see above](#maplibre-tiles). |

Floor / building layouts via JS API / WC: [Layout elements](./layout-elements.md). React layout offline (legacy): [Surfy React Web — Offline layout](./surfy-react-web.md#offline-layout-floor--building).

## Position by altitude (`usePositionFromGeo`)

The integrator **injects** a position `{ lat, lng, altitude }` (metres AMSL) via **`usePositionFromGeo` only**. This tranche does **not** expose an API to edit calibration (Altitude floor 0 / floor heights) — the building must already carry a calibrated altitude floor 0 in Surfy data.

```tsx
function LocateButton() {
  const positionFromGeo = usePositionFromGeo({
    onSpaceSelect: id => console.log('space', id),
  });
  return (
    <button
      type="button"
      onClick={() =>
        positionFromGeo({ lat: 48.86, lng: 2.35, altitude: 42.5 })
      }
    >
      Locate
    </button>
  );
}
```

Without calibrated altitude floor 0: error `SdkAltitudeFloor0LockedError` (`ALTITUDE_FLOOR0_MISSING`).

## Out of scope

- Guided navigation / **A→B routes** (wayfinding)
- Editing Altitude floor 0 / floor-height calibration via the SDK
- Métier drawers / lists **packaged** in the SDK bundle (chrome = host)
- People on the map
- React Native / Google Maps
- Web Component or `SurfySdk.mount*` for the platform
- `SurfyStructureCubyView3dReact` (removed) and new campus / building / floor 3D React embeds as a public contract

For classic 2D floor / 3D building outside the global map: [Layout elements](./layout-elements.md) (JS API / WC). Cuby building layout options: [3D options](./options-3d.md).

### Legacy

| Export | Status |
|--------|--------|
| `SurfyStructureCubyView3dReact` | **Removed** from the public contract — use `SurfyPlatformView3dReact` |
| `SurfyCampusView3dReact` | Exported short-term (`@deprecated`) — do not use for new embeds |
