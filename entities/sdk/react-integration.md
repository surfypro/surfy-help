---
sidebar_position: 10
sidebar_label: "Intégration React"
---

# Intégration React

Exemple TypeScript aligné sur le dépôt **surfy-sdk-demos** (`apps/react-web`). La démo propose trois onglets mappés aux tags SDK :

| Onglet démo | Tag Web Component |
|-------------|-------------------|
| Étage 2D | `surfy-floor-layout-2d` |
| Étage 3D | `surfy-floor-layout-3d` (placeholder — tag pas encore enregistré) |
| Bâtiment 3D | `surfy-building-layout-3d` |

## Installation

```bash
pnpm add @surfy/surfy-sdk
```

## Types importés du package

```ts
import type {
  SurfyLayoutElement,
  SurfyThemeOptions,
  SurfyLayout3dOptions,
} from '@surfy/surfy-sdk';
```

Ne redéfinissez pas l'interface à la main — utilisez `SurfyLayoutElement` depuis le package.

## Composant (étage 2D)

```tsx
import { useEffect, useRef, useState } from 'react';
import { SurfyFloorLayout2dElementImpl } from '@surfy/surfy-sdk';
import type { SurfyLayoutElement } from '@surfy/surfy-sdk';

export function FloorLayout2dPanel() {
  const hostRef = useRef<HTMLDivElement>(null);
  const layoutRef = useRef<SurfyLayoutElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const el = new SurfyFloorLayout2dElementImpl() as SurfyLayoutElement;
    el.setAttribute('floor-id', import.meta.env.VITE_SURFY_FLOOR_ID);
    el.setAttribute('tenant', import.meta.env.VITE_SURFY_TENANT);
    el.setAttribute('base-url', import.meta.env.VITE_SURFY_BASE_URL);
    el.setAttribute('fill-parent', '');

    el.setAccessTokenProvider(async () => {
      const res = await fetch('/api/surfy-token');
      if (!res.ok) throw new Error('Token failed');
      const { token } = await res.json();
      return token;
    });

    const onReady = () => setReady(true);
    el.addEventListener('surfy:ready', onReady);
    host.appendChild(el);
    layoutRef.current = el;

    return () => {
      el.removeEventListener('surfy:ready', onReady);
      el.remove();
      layoutRef.current = null;
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
      <button
        disabled={!ready}
        onClick={() => layoutRef.current?.setRoomColors({ 577183: '#2196F3' })}
      >
        Colorier un espace
      </button>
      <button onClick={() => layoutRef.current?.clearRoomColors()}>
        Effacer les couleurs
      </button>
      <div ref={hostRef} style={{ flex: 1, minHeight: 0 }} />
    </div>
  );
}
```

## Bâtiment 3D

Même pattern avec `SurfyBuildingLayout3dElementImpl` (exporté depuis `@surfy/surfy-sdk`) et l'attribut `building-id` :

```tsx
import { SurfyBuildingLayout3dElementImpl } from '@surfy/surfy-sdk';
import type { SurfyBuildingLayout3dElement } from '@surfy/surfy-sdk';

const el = new SurfyBuildingLayout3dElementImpl() as SurfyBuildingLayout3dElement;
el.setAttribute('building-id', String(buildingId));
// … tenant, base-url, fill-parent, setAccessTokenProvider …

el.setOptions({ floorSpace: 280, showRoomLabels: true });
el.addEventListener('surfy:ready', () => el.fitToView());
```

Voir [Options 3D](./options-3d.md) et la démo `LayoutDemoPanel` dans **surfy-sdk-demos**.

## Thème depuis React

```tsx
const ocean: SurfyThemeOptions = {
  primary: { main: '#0277bd' },
  background: { default: '#e1f5fe', paper: '#ffffff' },
};

layoutRef.current?.setTheme(ocean);
```

La démo utilise un contexte React (`DemoThemeContext`) qui appelle `setTheme` sur l'élément actif — les presets restent dans l'app hôte, pas dans le SDK. Voir [Thème](./theme.md).

## Points importants React

1. **Instanciation impérative** : `new SurfyFloorLayout2dElementImpl()` ou `SurfyBuildingLayout3dElementImpl`, puis `appendChild`.
2. **Token provider** : configurez `setAccessTokenProvider` avant ou juste après `appendChild`.
3. **Pas de props React Surfy** : le SDK n'exporte pas de composant React canvas ; ce sont des custom elements avec Shadow DOM.
4. **Arbres React distincts** : vos hooks et le React interne du SDK ne partagent pas d'état.

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

## `fill-parent` en React

```tsx
useEffect(() => {
  const el = layoutRef.current;
  if (!el) return;
  if (fillParent) el.setAttribute('fill-parent', '');
  else el.removeAttribute('fill-parent');
}, [fillParent]);
```

## Tests E2E

La démo inclut des tests Playwright qui vérifient notamment :

- émission de `surfy:ready` (2D et bâtiment 3D)
- absence d'erreurs JavaScript
- application de `setRoomColors`
- chargement du canvas 3D (dimensions non nulles)

Réutilisez ces patterns pour valider vos intégrations CI.
