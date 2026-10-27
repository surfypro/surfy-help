---
sidebar_position: 4.6
sidebar_label: "Client data API"
---

# Client data API (`SurfyClient`)

Entry point **`@surfy/surfy-sdk/client`**: **isomorphic** client (browser or Node 18+) to query buildings, floors, spaces via QueryNode — **same** auth / tenant rules as the layout (`getAccessToken`, no `clientSecret`).

No DOM side effects: ideal for an integrator backend or to populate lists before opening a plan.

## Creation

```ts
import {
  SurfyClient,
  createFilter,
  type IBuilding,
  type SurfyQueryNode,
} from '@surfy/surfy-sdk/client';

const client = SurfyClient.create({
  baseUrl: 'https://app.surfy.pro',
  tenant: 'my-tenant',
  getAccessToken: async () => token,
});
```

## `fetchEntities`

Main surface: `POST /api/v1/data/entities` with **your** QueryNode (business queries stay in your app).

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

Exported entity types: `IBuilding`, `IFloor`, `IRoom`, … — no remapped DTO.

## Auth

Same as the layout: machine JWT provided by `getAccessToken`. See [Authentication](./authentication.md).

The client **rejects** any `clientSecret` option passed by mistake.

## Layout vs data

| Need | Entry point |
|------|-------------|
| Display a 2D plan / 3D building | `@surfy/surfy-sdk` (`mount*`) or `@surfy/surfy-sdk/react` |
| List / filter entities | `@surfy/surfy-sdk/client` |

Layout rendering remains **browser-only**; entity JSON fetch also works server-side.
