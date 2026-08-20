---
sidebar_position: 4.5
sidebar_label: "Surfy React Web"
---

# Surfy React Web

Surface **préférée** pour une application React (Surfy ou tierce) : composer le plan dans **votre** arbre React avec les hooks publics, sans wrapper autour du Web Component.

Import : **`@surfy/surfy-sdk/react`** (n'enregistre **pas** les custom elements — contrairement à `@surfy/surfy-sdk`).

## Concepts

| Export | Rôle |
|--------|------|
| `SurfySdkReactProvider` | Provider d'instance (store isolé pour multi-embeds) |
| `SurfyFloorLayout2dReact` | Plan d'étage 2D (wrappe le Provider par défaut) |
| `SurfyBuildingLayout3dReact` | Bâtiment 3D Cuby |
| `useRoom` / `useRoomValue` | Lire un espace hydraté par id |
| `useSetRoom` | Écrire / effacer un espace dans le store |
| `useRooms` | Liste d'espaces (id de canvas ou liste d'ids) |

Les hooks sont liés au **Provider le plus proche**. Placez-les **sous** le layout (ou sous un `SurfySdkReactProvider` partagé).

## Exemple — étage 2D + hooks

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

`SurfyFloorLayout2dReact` / `SurfyBuildingLayout3dReact` acceptent `layoutData` (payload layout déjà chargé). Utilisez `fetchFloorLayoutData` / `fetchBuildingLayoutData` depuis `@surfy/surfy-sdk`, ou votre propre chargement.

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

Pour HTML / Vue / non-React : [Éléments de layout](./layout-elements.md). Aperçu React + `mount*` : [Intégration React](./react-integration.md).
