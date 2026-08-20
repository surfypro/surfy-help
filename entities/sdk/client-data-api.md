---
sidebar_position: 4.6
sidebar_label: "API données client"
---

# API données client (`SurfyClient`)

Entrée **`@surfy/surfy-sdk/client`** : client **isomorphic** (navigateur ou Node 18+) pour interroger bâtiments, étages, espaces via QueryNode — **mêmes règles** d'auth / tenant que le layout (`getAccessToken`, pas de `clientSecret`).

Pas d'effet de bord DOM : idéal pour un backend intégrateur ou pour peupler des listes avant d'ouvrir un plan.

## Création

```ts
import {
  SurfyClient,
  createFilter,
  type IBuilding,
  type SurfyQueryNode,
} from '@surfy/surfy-sdk/client';

const client = SurfyClient.create({
  baseUrl: 'https://app.surfy.pro',
  tenant: 'mon-tenant',
  getAccessToken: async () => token,
});
```

## `fetchEntities`

Surface principale : `POST /api/v1/data/entities` avec **votre** QueryNode (les requêtes métier restent dans votre app).

```ts
const buildingsQn: SurfyQueryNode<'building'> = {
  name: 'building',
  _: ['id', 'name'],
  filters: [createFilter('is', 'buildingId', null)],
  order: 'name asc',
  pagination: { limit: 200 },
};

const buildings = await client.fetchEntities<IBuilding>(buildingsQn);
```

Types d'entités exportés : `IBuilding`, `IFloor`, `IRoom`, … — pas de DTO remappé.

## Auth

Identique au layout : JWT machine fourni par `getAccessToken`. Voir [Authentification](./authentication.md).

Le client **refuse** toute option `clientSecret` passée par erreur.

## Layout vs données

| Besoin | Entrée |
|--------|--------|
| Afficher un plan 2D / bâtiment 3D | `@surfy/surfy-sdk` (`mount*`) ou `@surfy/surfy-sdk/react` |
| Lister / filtrer des entités | `@surfy/surfy-sdk/client` |

Le rendu layout reste **navigateur** ; le fetch JSON d'entités fonctionne aussi côté serveur.
