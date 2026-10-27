---
sidebar_position: 2
sidebar_label: "Installation"
---

# Installation

## Package

```bash
pnpm add @surfy/surfy-sdk
# or
npm install @surfy/surfy-sdk
```

Until the package is published on the public npm registry, use the artifact produced by the Surfy monolith (`pnpm build:sdk` → `file:…/dist/surfy-sdk` dependency). See the **surfy-sdk-demos** repository for a consumption example.

### Published entry points

| Import | Role |
|--------|------|
| `@surfy/surfy-sdk` | Layout: `SurfySdk.mountFloor2d` / `mountBuilding3d`, Web Component registration, types |
| `@surfy/surfy-sdk/react` | **Surfy React Web** — Provider, layout components, `useRoom` / `useSetRoom` / … hooks (does **not** register custom elements) |
| `@surfy/surfy-sdk/client` | **Isomorphic data API** — `SurfyClient`, `createFilter`, entity types |

React / React DOM are optional **peerDependencies** (required only for `@surfy/surfy-sdk/react`).

## JS API mount (recommended outside React)

```ts
import { SurfySdk } from '@surfy/surfy-sdk';

const layout = SurfySdk.mountFloor2d({
  container: '#map',
  tenant: 'my-tenant',
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

`mountFloor2d` / `mountBuilding3d` register the custom elements if needed, check `window` / `document`, and attach the layout to the container.

### Web Component (markup)

```html
<script type="module">
  import '@surfy/surfy-sdk'; // registers the tags
</script>
<surfy-floor-layout-2d
  floor-id="10065"
  tenant="my-tenant"
  base-url="https://app.surfy.pro"
  fill-parent
></surfy-floor-layout-2d>
```

Then `setAccessTokenProvider` on the element — see [Layout elements](./layout-elements.md).

### Surfy React Web

```ts
import {
  SurfySdkReactProvider,
  SurfyFloorLayout2dReact,
  useRoom,
} from '@surfy/surfy-sdk/react';
```

Details: [Surfy React Web](./surfy-react-web.md).

### Tag constants

```ts
import {
  SURFY_FLOOR_LAYOUT_2D_TAG,
  SURFY_BUILDING_LAYOUT_3D_TAG,
} from '@surfy/surfy-sdk';
```

## Surfy-side prerequisites

- An active Surfy **tenant** (`tenant` = slug).
- A **floor** (`floorId`) or a **building** (`buildingId`).
- **API credentials** (`clientId` + `clientSecret` / connection string) on the **backend** only.
- A reachable API origin (`baseUrl`) (CORS if a different domain).

## Check the loaded version

```ts
import { SurfySdk, SURFY_SDK_VERSION } from '@surfy/surfy-sdk';

console.log(SurfySdk.version, SURFY_SDK_VERSION); // e.g. "0.2.0"
```

Each layout request also sends the `X-Surfy-Sdk-Version` header for support.
