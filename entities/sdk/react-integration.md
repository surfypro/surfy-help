---
sidebar_position: 10
sidebar_label: "Intégration React"
---

# Intégration React — quel chemin choisir ?

| Besoin | Chemin |
|--------|--------|
| App React, **carte multi-bâtiments** | **[Vue plateforme](./platform-campus-3d.md)** — `SurfyPlatformView3dReact` (**seule** surface React publique recommandée) ; drill structure→Cuby in-map ; pilotage contexte + offline |
| App React, composition / hooks autour de la plateforme | **[Surfy React Web](./surfy-react-web.md)** (`@surfy/surfy-sdk/react`) — Provider + hooks ; layouts campus/building/floor React = **dépréciés** |
| Offline après 1er fetch (plateforme / layout) | Prop `offlineEnabled` (**défaut `true`**, SWR) — [plateforme](./platform-campus-3d.md#offline-plateforme) · [layout](./surfy-react-web.md#offline-layout-étage--bâtiment) |
| App React, plan d'étage / bâtiment **hors** carte globale | `SurfySdk.mountFloor2d` / `mountBuilding3d` dans un `useEffect` — [Éléments de layout](./layout-elements.md) |
| HTML / Vue / non-React | [Web Component ou mount*](./layout-elements.md) (étage / bâtiment ; pas de plateforme WC) |

Intégrez d'abord via la **plateforme React** si vous avez besoin d'une vue globale. Ne présentez plus campus / building React comme entrée principale.

## Mount depuis React (API JS)

Utile pour un layout étage / bâtiment **sans** importer les composants React de layout (dépréciés) :

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
4. **Hooks Surfy** : uniquement via `@surfy/surfy-sdk/react` sous `SurfySdkReactProvider` (typiquement enfants de la plateforme).

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

Les demos **surfy-sdk-demos** (route **plateforme** : clic structure → Cuby PF-style) et les E2E associés valident le chargement et l'absence d'erreurs runtime. Réutilisez ces patterns en CI.
