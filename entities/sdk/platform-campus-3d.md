---
sidebar_position: 4.6
sidebar_label: "Vue plateforme / campus"
---

# Vue plateforme / Vue campus (3D)

Deux **entry points React** pour embarquer une carte 3D multi-bâtiments : **Vue plateforme** (tout le tenant) et **Vue campus** (un campus). Stack : **MapLibre** (rues) + **Cuby SDK** — sans Google Maps, sans UI métier Surfy.

Import : **`@surfy/surfy-sdk/react`**.

> Spec eng (anglais) : `docs/surfy-sdk/platform-campus-view-3d.md` dans le monorepo Surfy.

## Deux composants

| Composant | Scope | Props clés |
|-----------|--------|------------|
| `SurfyPlatformView3dReact` | Vue plateforme | `tenant` (ou `clientId`), `baseUrl`, `getAccessToken` |
| `SurfyCampusView3dReact` | Vue campus | idem + **`campusId`** |

Auth V1 : JWT machine via votre **proxy** (`getAccessToken`) — **jamais** le `clientSecret` dans le navigateur. Voir [Authentification](./authentication.md).

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
      tenant="mon-tenant"
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
      tenant="mon-tenant"
      campusId={campusId}
      baseUrl="https://app.surfy.pro"
      getAccessToken={fetchToken}
      style={{ width: '100%', height: '70vh' }}
    />
  );
}
```

## Carte MapLibre + volumes Cuby

- Fond de carte **style rues** (localisation) — les **bâtiments 3D du basemap** sont masqués pour ne pas chevaucher les volumes Surfy.
- Volumes = **Cuby SDK** uniquement (plusieurs bâtiments actifs).
- Clic / focus bâtiment → détail étages ; étages dessous en mode Cuby, étage courant en réalité.

## Hooks & callbacks

Placez les hooks **sous** le composant (enfants) :

| Hook / callback | Rôle |
|-----------------|------|
| `onReady` / `onBuildingChange` / `onFloorChange` | Cycle de vie & focus |
| `useBuildings` / `useFloors` / `useSpaces` / `useFurniture` | Données session |
| `useSpaceColors` / `useSetSpaceColor` / `useTypologieColors` | Colorisation |
| `usePositionFromGeo` | **Position par altitude** |
| `useGeoMarker` / `useSelectedSpaceId` | Repère & sélection |

## Offline

Après un **premier fetch réussi** (vision + détail bâtiment), le SDK peut **réutiliser le cache** (IndexedDB) au remount — MVP offline.

## Altitude étage 0 & Position par altitude

Le calibrage du bâtiment peut porter l’**Altitude étage 0**. L’intégrateur injecte `{ lat, lng, altitude }` (mètres AMSL) :

```tsx
function LocateButton() {
  const positionFromGeo = usePositionFromGeo({
    onSpaceSelect: id => console.log('espace', id),
  });
  return (
    <button
      type="button"
      onClick={() =>
        positionFromGeo({ lat: 48.86, lng: 2.35, altitude: 42.5 })
      }
    >
      Positionner
    </button>
  );
}
```

Sans altitude étage 0 calibrée : erreur `SdkAltitudeFloor0LockedError` (`ALTITUDE_FLOOR0_MISSING`).

## Hors périmètre MVP

- Navigation guidée / itinéraires (wayfinding)
- Personnes sur la carte
- React Native / Google Maps
- Web Component ou `SurfySdk.mount*` pour plateforme / campus

Pour l’étage 2D / bâtiment 3D classique : [Surfy React Web](./surfy-react-web.md), [Éléments de layout](./layout-elements.md), [Options 3D](./options-3d.md).
