---
sidebar_position: 2
sidebar_label: "Installation"
---

# Installation

## npm

```bash
pnpm add @surfy/surfy-sdk
# ou
npm install @surfy/surfy-sdk
```

Le package publie un bundle ESM unique (`index.js`) et des types TypeScript (`index.d.ts`).

## Enregistrement des Web Components

L'import du package enregistre automatiquement les éléments disponibles :

- `surfy-floor-layout-2d`
- `surfy-building-layout-3d`
- `surfy-floor-layout-3d` — **pas encore enregistré** (tag réservé, voir changelog)

### JavaScript / TypeScript (recommandé)

```ts
import '@surfy/surfy-sdk';
// ou explicitement :
import { registerSurfyLayoutElements } from '@surfy/surfy-sdk';

registerSurfyLayoutElements();
// → surfy-floor-layout-2d, surfy-building-layout-3d
// À venir : surfy-floor-layout-3d
```

### HTML (CDN — exemple)

```html
<script type="module">
  import { registerSurfyLayoutElements } from 'https://cdn.example/@surfy/surfy-sdk/index.js';
  registerSurfyLayoutElements();
</script>

<surfy-floor-layout-2d
  id="plan"
  floor-id="10065"
  tenant="mon-tenant"
  base-url="https://app.surfy.pro"
></surfy-floor-layout-2d>
```

### Constantes de tags

```ts
import {
  SURFY_FLOOR_LAYOUT_2D_TAG,
  SURFY_FLOOR_LAYOUT_3D_TAG,
  SURFY_BUILDING_LAYOUT_3D_TAG,
} from '@surfy/surfy-sdk';
```

## Prérequis côté Surfy

- Un **tenant** Surfy actif (`tenant` = identifiant client / slug).
- Un **étage** (`floor-id`) pour les vues 2D/3D étage, ou un **bâtiment** (`building-id`) pour la vue bâtiment 3D.
- Des **credentials API** (`clientId` + `clientSecret`) ou un flux JWT équivalent.
- L'origine API (`base-url`) joignable depuis le navigateur (CORS si domaine différent).

## Vérifier la version chargée

```ts
import { SURFY_SDK_VERSION } from '@surfy/surfy-sdk';

console.log(SURFY_SDK_VERSION); // ex. "0.1.0"
```

Chaque requête layout envoie aussi l'en-tête `X-Surfy-Sdk-Version` pour le support.
