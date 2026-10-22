---
sidebar_position: 4.5
sidebar_label: "Surfy React Web"
---

# Surfy React Web

Package React du SDK : **`@surfy/surfy-sdk/react`** (n'enregistre **pas** les custom elements — contrairement à `@surfy/surfy-sdk`).

## Surface publique recommandée

Pour une **carte multi-bâtiments**, utilisez **uniquement** :

| Export | Rôle |
|--------|------|
| **`SurfyPlatformView3dReact`** | Vue plateforme MapLibre + structures + drill Cuby in-map — [guide](./platform-campus-3d.md) |
| `SurfySdkReactProvider` | Provider d'instance (store isolé pour multi-embeds) |
| Hooks plateforme | `useBuildings`, `useSetCurrentZoom`, `usePositionFromGeo`, … — [pilotage contexte](./platform-campus-3d.md#pilotage-du-contexte-focus-hôte) |

Clic structure → hydrate Cuby **style pathfinding** (éclaté, RDC) **dans la même carte** ; couleurs de structure = `Building.color` (SSOT). Pas d'itinéraire A→B dans ce contrat.

### Déprécié (ne plus recommander)

| Export | Remplacement |
|--------|--------------|
| `SurfyCampusView3dReact` | `SurfyPlatformView3dReact` (+ focus hôte) |
| `SurfyBuildingLayout3dReact` | Plateforme pour la carte globale ; sinon **API JS / WC** `mountBuilding3d` / `<surfy-building-layout-3d>` |
| `SurfyFloorLayout3dReact` | **API JS / WC** (étage 2D : `mountFloor2d` / `<surfy-floor-layout-2d>`) |
| `SurfyFloorLayout2dReact` | Préférer `mountFloor2d` / WC pour les nouveaux embeds hors plateforme |

Les exports restent disponibles à court terme (`@deprecated` dans les types) pour migration — **ne pas** les présenter comme contrat public.

Pour HTML / Vue / non-React (étage / bâtiment) : [Éléments de layout](./layout-elements.md) — **conservés**.

## Parité avec l'API JS / Web Component (layouts legacy)

Quand vous utilisez encore un layout React floor/building (legacy), la sémantique reste alignée sur [`SurfySdk.mount*`](./layout-elements.md) :

| Contrat | Props / callbacks React | Handle (`ref`) |
|---------|-------------------------|----------------|
| Auth / tenant | `tenant`, `baseUrl`, `getAccessToken` | — |
| Entité | `floorId` / `buildingId` (+ `floorIds?` bâtiment) | — |
| Options 3D initiales | `layout3dOptions?` | `setOptions(partial)` — merge |
| Couleurs | `roomColors?` | `setRoomColors` / `clearRoomColors` / `updateRoom` |
| Thème | `themeOptions?` | — |
| Prêt / erreur | `onReady` / `onError` | — |
| Survol / sélection | `onRoomHover` / `onRoomSelected` | — |
| Offline | `offlineEnabled?` (**défaut `true`**) | — |
| Caméra / pins | — | `fitToView`, `zoomOn`, `addPin`, … |

Les contrôles vivent **dans votre UI**, hors du composant Surfy.

### Contrôles hors composant (bâtiment 3D — legacy)

```tsx
import { useRef } from 'react';
import {
  SurfyBuildingLayout3dReact,
  type SurfyBuildingLayout3dReactHandle,
} from '@surfy/surfy-sdk/react';

export function BuildingWithHostChrome({ buildingId }: { buildingId: number }) {
  const layoutRef = useRef<SurfyBuildingLayout3dReactHandle>(null);

  return (
    <div style={{ height: '70vh' }}>
      <button
        type="button"
        onClick={() =>
          layoutRef.current?.setOptions({ selectedFloorIds: [101, 102] })
        }
      >
        Étages 101–102
      </button>
      <button
        type="button"
        onClick={() => {
          layoutRef.current?.setRoomColors({ 577183: '#2196F3' });
          layoutRef.current?.fitToView();
        }}
      >
        Colorier + cadrer
      </button>
      <SurfyBuildingLayout3dReact
        ref={layoutRef}
        buildingId={buildingId}
        tenant={tenant}
        baseUrl={baseUrl}
        getAccessToken={fetchToken}
        fillParent
        onReady={() => console.log('ready')}
        onRoomHover={(d) => console.log('hover', d)}
        onRoomSelected={(d) => console.log('selected', d)}
        onError={(err) => console.error(err)}
      />
    </div>
  );
}
```

Préférez désormais la [Vue plateforme](./platform-campus-3d.md) pour explorer un bâtiment depuis la carte globale. Détail `setOptions` : [Options 3D](./options-3d.md). Couleurs d'espaces : [Couleurs des espaces](./room-colors.md).

## Offline layout (étage / bâtiment)

Après un **premier chargement réussi**, le SDK conserve en **cache local Surfy** tout le nécessaire pour **représenter le plan hors-ligne** : layout (étage ou bâtiment) **et** master data / slices requises au rendu.

| Règle | Comportement |
|-------|----------------|
| `offlineEnabled` | **Défaut `true`**. Opt-out : `offlineEnabled={false}` → réseau uniquement (pas de lecture/écriture du cache Surfy). |
| SWR | S'il y a du cache **et** de la connectivité → **afficher d'abord** le cache, puis **re-fetch** et mettre à jour le contexte. |
| Premier miss | Sans jamais avoir fetch cette entité : le **1er** chargement exige le réseau. |
| Contenu all-in | Layout floor/building + données maîtres nécessaires au rendu — un seul bundle Surfy. |

```tsx
<SurfyFloorLayout2dReact
  floorId={floorId}
  tenant={tenant}
  baseUrl={baseUrl}
  getAccessToken={fetchToken}
  fillParent
  // offlineEnabled // défaut true — omis = cache Surfy actif
/>
```

Pour la **Vue plateforme** (vision + détail bâtiment + MapLibre) : [Vue plateforme — Offline](./platform-campus-3d.md#offline-plateforme).

## Exemple — étage 2D + hooks (legacy React)

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
      <p>{room?.name ?? '…'} ({rooms.length} espaces)</p>
      <button
        type="button"
        onClick={() => room && setRoom(room.id, { ...room, name: `${room.name} ★` })}
      >
        Marquer
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
      {/* Hooks : enfants sous le Provider créé par SurfyFloorLayout2dReact */}
    </div>
  );
}
```

`SurfyFloorLayout2dReact` / `SurfyBuildingLayout3dReact` acceptent `layoutData` (payload layout déjà chargé). Utilisez `fetchFloorLayoutData` / `fetchBuildingLayoutData` depuis `@surfy/surfy-sdk`, ou votre propre chargement. Sans `layoutData`, le composant peut self-fetch (avec offline SWR si `offlineEnabled` reste à `true`).

Pour de **nouveaux** embeds étage / bâtiment hors plateforme, préférez `SurfySdk.mountFloor2d` / `mountBuilding3d` ou les Web Components — [Éléments de layout](./layout-elements.md).

### Provider explicite

```tsx
import { SurfySdkReactProvider, SurfyFloorLayout2dReact } from '@surfy/surfy-sdk/react';

<SurfySdkReactProvider>
  <SurfyFloorLayout2dReact wrapProvider={false} /* … */ />
  <RoomPanel roomId={577183} workCanvasId={workCanvasId} />
</SurfySdkReactProvider>
```

`wrapProvider={false}` si vous fournissez déjà le Provider (multi-panneaux partageant le même store).

## Auth

Même règle que les autres surfaces : prop `getAccessToken` → JWT machine via votre backend. Voir [Authentification](./authentication.md).

## Limites V1

- **Lecture seule** du plan (pas d'édition Work Canvas).
- **Pas** de React Native mobile dans ce package.
- Ne documentez / n'importez pas les modules internes Surfy hors de `@surfy/surfy-sdk/react`.
- Pas d'itinéraires A→B / wayfinding sur la surface React publique.

Carte multi-bâtiments : [Vue plateforme](./platform-campus-3d.md). Aperçu des chemins : [Intégration React](./react-integration.md).
