---
sidebar_position: 4.6
sidebar_label: "Platform / campus view"
---

# Vue plateforme / Vue campus (3D)

Two **React entry points** to embed a multi-building 3D map: **Vue plateforme** (whole tenant) and **Vue campus** (one campus). Stack: **MapLibre** (streets) + **Cuby SDK** — no Google Maps, no Surfy métier UI.

Import: **`@surfy/surfy-sdk/react`**.

> Eng spec (English): `docs/surfy-sdk/platform-campus-view-3d.md` in the Surfy monorepo.

## Two components

| Component | Scope | Key props |
|-----------|--------|-----------|
| `SurfyPlatformView3dReact` | Vue plateforme | `tenant` (or `clientId`), `baseUrl`, `getAccessToken` |
| `SurfyCampusView3dReact` | Vue campus | same + **`campusId`** |

Auth V1: machine JWT via your **proxy** (`getAccessToken`) — **never** put `clientSecret` in the browser. See [Authentication](./authentication.md) (FR default if EN unavailable).

```tsx
import {
  SurfyPlatformView3dReact,
  SurfyCampusView3dReact,
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

export function CampusEmbed({ campusId }: { campusId: number }) {
  return (
    <SurfyCampusView3dReact
      tenant="my-tenant"
      campusId={campusId}
      baseUrl="https://app.surfy.pro"
      getAccessToken={fetchToken}
      style={{ width: '100%', height: '70vh' }}
    />
  );
}
```

## MapLibre map + Cuby volumes

- **Street-style** basemap (location) — **basemap 3D buildings** are hidden so they do not overlap Surfy volumes.
- Volumes = **Cuby SDK** only (several active buildings).
- Building click / focus → floor detail; floors below in Cuby mode, current floor in reality mode.

## Hooks & callbacks

Place hooks **under** the component (as children):

| Hook / callback | Role |
|-----------------|------|
| `onReady` / `onBuildingChange` / `onFloorChange` | Lifecycle & focus |
| `useBuildings` / `useFloors` / `useSpaces` / `useFurniture` | Session data |
| `useSpaceColors` / `useSetSpaceColor` / `useTypologieColors` | Coloring |
| `usePositionFromGeo` | **Position par altitude** |
| `useGeoMarker` / `useSelectedSpaceId` | Marker & selection |

## Offline

After a **first successful fetch** (vision + building detail), the SDK can **reuse the cache** (IndexedDB) on remount — MVP offline.

## Altitude étage 0 & Position par altitude

Building calibration may carry **Altitude étage 0**. The integrator injects `{ lat, lng, altitude }` (metres AMSL):

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

## Out of MVP scope

- Guided navigation / routes (wayfinding)
- People on the map
- React Native / Google Maps
- Web Component or `SurfySdk.mount*` for platform / campus

For classic 2D floor / 3D building: [Surfy React Web](./surfy-react-web.md), [Layout elements](./layout-elements.md), [3D options](./options-3d.md) (FR default if EN unavailable).
