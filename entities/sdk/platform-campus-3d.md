---
sidebar_position: 4.6
sidebar_label: "Vue plateforme (3D)"
---

# Vue plateforme (3D)

**Surface React publique recommandée** pour une carte multi-bâtiments : **`SurfyPlatformView3dReact`**. Stack : **MapLibre** (rues) + **Cuby SDK** — sans Google Maps, sans UI métier Surfy.

Import : **`@surfy/surfy-sdk/react`**.

> Spec eng (anglais) : `docs/surfy-sdk/platform-campus-view-3d.md` dans le monorepo Surfy.

:::warning Contrat public React = plateforme only
`SurfyCampusView3dReact`, `SurfyBuildingLayout3dReact` et `SurfyFloorLayout3dReact` sont **dépréciés** comme surface publique pour les intégrateurs. Préférez la plateforme ; pour un plan d'étage / bâtiment hors carte globale, utilisez l'**API JS** / **Web Component** (`mount*` / tags) — [Éléments de layout](./layout-elements.md). Détail : [Surfy React Web](./surfy-react-web.md).
:::

## Composant recommandé

| Composant | Scope | Props clés |
|-----------|--------|------------|
| `SurfyPlatformView3dReact` | Vue plateforme (tenant) | `tenant` (ou `clientId`), `baseUrl`, `getAccessToken` |

Auth V1 : JWT machine via votre **proxy** (`getAccessToken`) — **jamais** le `clientSecret` dans le navigateur. Voir [Authentification](./authentication.md).

```tsx
import {
  SurfyPlatformView3dReact,
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
```

## Carte MapLibre + structures

- Fond de carte **style rues** (localisation) — les **bâtiments 3D du basemap** sont masqués pour ne pas chevaucher les volumes Surfy.
- Au niveau plateforme, les bâtiments s'affichent en **massing** (volumes structure).
- Les couleurs de massing / structure suivent la **même source** que le pathfinding bâtiment produit : la couleur du bâtiment (`Building.color`). Fallback neutre uniquement si la couleur est absente. Les couleurs d'**espaces** (intégrateur) restent [Couleurs des espaces](./room-colors.md).

### Tuiles MapLibre

Le SDK **ne** met **pas** en cache Surfy les tuiles ni le style MapLibre. Seul le **cache navigateur** s'applique. Hors-ligne, le **plan Surfy** (volumes Cuby + données déjà en cache Surfy) peut rester OK alors que le fond cartographique est manquant ou dégradé — comportement attendu.

## Clic structure → Cuby (style pathfinding, même carte)

Un **clic sur une structure** (ou un focus hôte équivalent) :

1. Focus le bâtiment **dans la même carte MapLibre** — **pas** de changement de composant, **pas** de routage vers une autre vue.
2. Hydrate le volume **Cuby** en rendu type pathfinding bâtiment : **éclaté** (étages ghost), départ **RDC**.
3. Quitter le focus restaure le massing de la structure.

Ce contrat couvre le **rendu** Cuby (look pathfinding). Il **n'inclut pas** le calcul d'itinéraire A→B / wayfinding.

Le produit Surfy `building/3d-maplibre` conserve le même geste de drill in-map (hors périmètre changelog métier).

## Pilotage du contexte (focus hôte)

Pilotez bâtiment / étage / sélection **depuis votre chrome**, hors du composant Surfy :

| API | Rôle |
|-----|------|
| `onReady` / `onBuildingChange` / `onFloorChange` | Cycle de vie & focus notifié à l'hôte |
| `useCurrentZoom` | Lire le niveau de focus courant (`platform` / `campus` / `building` / `floor` / …) |
| `useSetCurrentZoom` | Écrire le focus : `{ type: 'enterBuilding', buildingId }` puis `{ type: 'enterFloor', floorId, buildingId }` |
| `useBuildings` / `useFloors` / `useSpaces` / `useFurniture` | Données session |
| `useSpaceColors` / `useSetSpaceColor` / `useTypologieColors` | Colorisation des espaces |
| `usePositionFromGeo` | **Position par altitude** |
| `useGeoMarker` / `useSelectedSpaceId` | Repère & sélection |

Placez les hooks **sous** le composant (enfants) — même Provider que la vue.

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
        Focus bâtiment 101
      </button>
      <button
        type="button"
        onClick={() => setZoom({ type: 'enterFloor', floorId: 10, buildingId: 101 })}
      >
        Focus étage 10
      </button>
      <span>Niveau : {zoom.level}</span>
    </div>
  );
}
```

Les transitions `enterBuilding` / `enterFloor` déclenchent aussi `onBuildingChange` / `onFloorChange` sur la vue — et le même rendu Cuby PF-style in-map qu'un clic structure.

## Offline plateforme

Après un **premier fetch réussi**, le cache local Surfy conserve le **nécessaire all-in** pour représenter la vue hors-ligne : vision plateforme + détail bâtiment + master data / slices requises au rendu Cuby.

| Règle | Comportement |
|-------|----------------|
| `offlineEnabled` | **Défaut `true`**. `offlineEnabled={false}` → réseau only. |
| SWR | Cache présent + réseau → **afficher d'abord** le cache, puis **re-fetch** et mettre à jour. |
| Premier miss | 1er chargement d'une entité absente du cache = réseau obligatoire. |
| MapLibre | **Pas** de cache Surfy des tuiles/style — [voir ci-dessus](#tuiles-maplibre). |

Layouts étage / bâtiment via API JS / WC : [Éléments de layout](./layout-elements.md). Offline layout React (legacy) : [Surfy React Web — Offline layout](./surfy-react-web.md#offline-layout-étage--bâtiment).

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

## Hors périmètre

- Navigation guidée / **itinéraires A→B** (wayfinding)
- Personnes sur la carte
- React Native / Google Maps
- Web Component ou `SurfySdk.mount*` pour la plateforme
- Nouveaux embeds React campus / building / floor 3D comme contrat public

Pour l'étage 2D / bâtiment 3D hors carte globale : [Éléments de layout](./layout-elements.md) (API JS / WC). Options Cuby layout building : [Options 3D](./options-3d.md).

### Legacy (déprécié)

`SurfyCampusView3dReact` reste exporté à court terme avec marqueur `@deprecated` — ne plus l'utiliser pour de nouveaux embeds. Préférez `SurfyPlatformView3dReact` (+ focus `enterBuilding` si vous devez cadrer un campus / bâtiment).
