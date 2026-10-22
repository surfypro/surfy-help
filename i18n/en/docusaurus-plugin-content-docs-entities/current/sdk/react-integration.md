---
sidebar_position: 10
sidebar_label: "React integration"
---

# React integration — which path?

| Need | Path |
|------|------|
| React app, **multi-building map** | **[Platform view](./platform-campus-3d.md)** — `SurfyPlatformView3dReact` (**sole** recommended public React surface); structure→Cuby in-map drill; context control + offline |
| React app, composition / hooks around the platform | **[Surfy React Web](./surfy-react-web.md)** (`@surfy/surfy-sdk/react`) — Provider + hooks; campus/building/floor React layouts = **deprecated** |
| Offline after first fetch (platform / layout) | `offlineEnabled` prop (**default `true`**, SWR) — [platform](./platform-campus-3d.md#offline-platform) · [layout](./surfy-react-web.md#offline-layout-floor--building) |
| React app, floor / building plan **outside** the global map | `SurfySdk.mountFloor2d` / `mountBuilding3d` in a `useEffect` — [Layout elements](./layout-elements.md) |
| HTML / Vue / non-React | [Web Component or mount*](./layout-elements.md) (floor / building; no platform WC) |

Integrate via **platform React** first when you need a global view. Do not present campus / building React as the primary entry.

## Mount from React (JS API)

Useful for a floor / building layout **without** importing the React layout components (deprecated):

```tsx
import { useEffect, useRef } from 'react';
import { SurfySdk, type SurfyLayout } from '@surfy/surfy-sdk';

export function FloorLayout2dMount({ floorId }: { floorId: number }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<SurfyLayout | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const layout = SurfySdk.mountFloor2d({
      container: host,
      tenant: import.meta.env.VITE_SURFY_TENANT,
      baseUrl: import.meta.env.VITE_SURFY_BASE_URL,
      floorId,
      getAccessToken: async () => {
        const res = await fetch('/api/surfy-token');
        if (!res.ok) throw new Error('Token failed');
        const { token } = await res.json();
        return token;
      },
      fillParent: true,
    });
    layoutRef.current = layout;

    return () => {
      layout.destroy();
      layoutRef.current = null;
    };
  }, [floorId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
      <button
        type="button"
        onClick={() => layoutRef.current?.setRoomColors({ 577183: '#2196F3' })}
      >
        Color a space
      </button>
      <div ref={hostRef} style={{ flex: 1, minHeight: 0 }} />
    </div>
  );
}
```

## Key points

1. **Cleanup**: always call `destroy()` (mount) or unmount the React component.
2. **Token**: `getAccessToken` at mount — never put a secret in the front bundle.
3. **Sizing**: the parent needs an explicit height — see [Sizing](./layout-and-sizing.md).
4. **Surfy hooks**: only via `@surfy/surfy-sdk/react` under `SurfySdkReactProvider` (typically children of the platform).

## Vite proxy (development)

```ts
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': { target: 'http://localhost:8787', changeOrigin: true },
    },
  },
});
```

## Tests

**surfy-sdk-demos** (**platform** route: structure click → Cuby PF-style) and related E2E validate load and no runtime errors. Reuse those patterns in CI.
