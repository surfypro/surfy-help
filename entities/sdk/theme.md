---
sidebar_position: 5
sidebar_label: "Thème (MUI)"
---

# Thème (MUI)

Le SDK embarque un thème MUI par défaut (bleu classique Surfy) dans le Shadow DOM. L'application hôte peut le **surcharger** via `setTheme` — les **presets de thème ne sont pas fournis** dans le package npm : vous les définissez dans votre app.

Fonctionne sur **tous** les éléments de layout (`surfy-floor-layout-2d`, `surfy-building-layout-3d`, …).

## `setTheme(theme?)`

```ts
import type { SurfyThemeOptions, SurfyLayoutElement } from '@surfy/surfy-sdk';

const layout = document.querySelector('surfy-floor-layout-2d') as SurfyLayoutElement;

layout.setTheme({
  mode: 'light',
  primary: { main: '#0277bd' },
  background: { default: '#e1f5fe', paper: '#ffffff' },
  tooltip: {
    backgroundColor: '#01579b',
    color: '#e1f5fe',
    fontSize: 13,
  },
});

// Revenir au thème SDK par défaut :
layout.setTheme(null);
```

| Paramètre | Type | Description |
|-----------|------|-------------|
| `theme` | `SurfyThemeOptions \| null \| undefined` | Surcharge partielle ; `null` ou omission → défaut SDK |

## Type `SurfyThemeOptions`

Tous les champs sont **optionnels** (merge partiel).

```ts
type SurfyThemeOptions = {
  mode?: 'light' | 'dark';
  primary?: {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
  };
  tooltip?: {
    backgroundColor?: string;
    color?: string;
    fontSize?: number | string;
  };
  background?: {
    default?: string;
    paper?: string;
  };
};
```

## Tooltips dans le Shadow DOM

Les info-bulles MUI sont rendues **dans le shadow root** de l'élément pour conserver les styles Emotion. Le thème `tooltip` contrôle leur apparence.

## Presets côté hôte

```ts
const themes: Record<string, SurfyThemeOptions> = {
  ocean: {
    mode: 'light',
    primary: { main: '#0277bd' },
    background: { default: '#e1f5fe', paper: '#ffffff' },
  },
  forest: {
    mode: 'light',
    primary: { main: '#2e7d32' },
    background: { default: '#e8f5e9', paper: '#ffffff' },
  },
};

function applyPreset(name: keyof typeof themes) {
  layout.setTheme(themes[name]);
}
```

:::tip Démo
Le dépôt **surfy-sdk-demos** (`apps/react-web`) expose un sélecteur de thème qui appelle `layout.setTheme(...)` sur l'élément actif (2D ou bâtiment 3D).
:::

## Limites

- Seuls les **knobs listés** dans `SurfyThemeOptions` sont publics ; le reste du thème MUI interne n'est pas configurable.
- Le CSS de votre page **n'affecte pas** l'intérieur du Shadow DOM — utilisez `setTheme`, pas des sélecteurs globaux.

Voir aussi [Éléments de layout](./layout-elements.md) et [Couleurs des espaces](./room-colors.md).
