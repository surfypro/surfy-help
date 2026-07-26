---
sidebar_position: 2
sidebar_label: "Installation"
---

# Installation

## Package

```bash
pnpm add @surfy/surfy-sdk
# ou
npm install @surfy/surfy-sdk
```

Tant que le package n'est pas publié sur le registre npm public, utilisez l'artefact produit par le monolithe Surfy (`pnpm build:sdk` → dépendance `file:…/dist/surfy-sdk`). Voir le dépôt **surfy-sdk-demos** pour un exemple de consommation.

### Entrées publiées

| Import | Rôle |
|--------|------|
| `@surfy/surfy-sdk` | Layout : `SurfySdk.mountFloor2d` / `mountBuilding3d`, enregistrement des Web Components, types |
| `@surfy/surfy-sdk/react` | **Surfy React Web** — Provider, composants de layout, hooks `useRoom` / `useSetRoom` / … (ne enregistre **pas** les custom elements) |
| `@surfy/surfy-sdk/client` | **API données** isomorphic — `SurfyClient`, `createFilter`, types d'entités |

React / React DOM sont des **peerDependencies** optionnelles (requises seulement pour `@surfy/surfy-sdk/react`).

## Montage API JS (recommandé hors React)

```ts
import { SurfySdk } from '@surfy/surfy-sdk';

const layout = SurfySdk.mountFloor2d({
  container: '#map',
  tenant: 'mon-tenant',
  baseUrl: 'https://app.surfy.pro',
  floorId: 10065,
  getAccessToken: async () => {
    const response = await fetch('/api/surfy-token');
    if (!response.ok) {
      throw new Error(`Token request failed (${response.status})`);
    }
    const { token } = await response.json();
    return token;
  },
});
```

`mountFloor2d` / `mountBuilding3d` enregistrent les custom elements si besoin, vérifient `window` / `document`, et attachent le layout au conteneur.

### Web Component (markup)

```html
<script type="module">
  import '@surfy/surfy-sdk'; // enregistre les tags
</script>
<surfy-floor-layout-2d
  floor-id="10065"
  tenant="mon-tenant"
  base-url="https://app.surfy.pro"
  fill-parent
></surfy-floor-layout-2d>
```

Puis `setAccessTokenProvider` sur l'élément — voir [Éléments de layout](./layout-elements.md).

### Surfy React Web

```ts
import {
  SurfySdkReactProvider,
  SurfyFloorLayout2dReact,
  useRoom,
} from '@surfy/surfy-sdk/react';
```

Détail : [Surfy React Web](./surfy-react-web.md).

### Constantes de tags

```ts
import {
  SURFY_FLOOR_LAYOUT_2D_TAG,
  SURFY_BUILDING_LAYOUT_3D_TAG,
} from '@surfy/surfy-sdk';
```

## Prérequis côté Surfy

- Un **tenant** Surfy actif (`tenant` = slug).
- Un **étage** (`floorId`) ou un **bâtiment** (`buildingId`).
- Des **credentials API** (`clientId` + `clientSecret` / connection string) côté **backend** uniquement.
- L'origine API (`baseUrl`) joignable (CORS si domaine différent).

## Vérifier la version chargée

```ts
import { SurfySdk, SURFY_SDK_VERSION } from '@surfy/surfy-sdk';

console.log(SurfySdk.version, SURFY_SDK_VERSION); // ex. "0.2.0"
```

Chaque requête layout envoie aussi l'en-tête `X-Surfy-Sdk-Version` pour le support.
