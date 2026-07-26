---
sidebar_position: 10
sidebar_label: "Intégration React"
---

# Intégration React — quel chemin choisir ?

| Besoin | Chemin |
|--------|--------|
| App React, composition + hooks Surfy | **[Surfy React Web](./surfy-react-web.md)** (`@surfy/surfy-sdk/react`) — **recommandé** |
| App React, surface minimale sans hooks | `SurfySdk.mountFloor2d` / `mountBuilding3d` dans un `useEffect` |
| HTML / Vue / non-React | [Web Component ou mount*](./layout-elements.md) |

Ne traite **pas** Surfy React Web comme un simple wrapper autour du tag HTML : c'est l'arbre React public du SDK (Provider + layout + hooks).

## Mount depuis React (API JS)

Utile si vous ne voulez pas importer `@surfy/surfy-sdk/react` :

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
        Colorier un espace
      </button>
      <div ref={hostRef} style={{ flex: 1, minHeight: 0 }} />
    </div>
  );
}
```

## Points importants

1. **Cleanup** : appelez toujours `destroy()` (mount) ou démontez le composant React.
2. **Token** : `getAccessToken` au montage — jamais de secret dans le bundle front.
3. **Sizing** : le parent doit avoir une hauteur explicite — voir [Taille](./layout-and-sizing.md).
4. **Hooks Surfy** : uniquement via `@surfy/surfy-sdk/react` sous `SurfySdkReactProvider`.

## Proxy Vite (développement)

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

Les demos **surfy-sdk-demos** et les E2E associés valident le chargement 2D / bâtiment 3D, les couleurs et l'absence d'erreurs runtime. Réutilisez ces patterns en CI.
