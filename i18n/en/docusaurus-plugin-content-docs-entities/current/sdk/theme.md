---
sidebar_position: 5
sidebar_label: "Theme (MUI)"
---

# Theme (MUI)

The SDK ships a default MUI theme (classic Surfy blue) in the Shadow DOM. The host app can **override** it via `setTheme` — **theme presets are not provided** in the npm package: you define them in your app.

Works on the `SurfyLayout` handle (`setTheme`), Web Components, and Surfy React Web (`themeOptions`).

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

// Revert to the default SDK theme:
layout.setTheme(null);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `theme` | `SurfyThemeOptions \| null \| undefined` | Partial override; `null` or omitted → SDK default |

## `SurfyThemeOptions` type

All fields are **optional** (partial merge).

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

## Tooltips in the Shadow DOM

MUI tooltips are rendered **inside the element's shadow root** to keep Emotion styles. The `tooltip` theme controls their appearance.

## Host-side presets

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

:::tip Demo
The **surfy-sdk-demos** repository (`apps/react-web`) exposes a theme selector that calls `layout.setTheme(...)` on the active element (2D or 3D building).
:::

## Limits

- Only the **listed knobs** in `SurfyThemeOptions` are public; the rest of the internal MUI theme is not configurable.
- Your page CSS does **not** affect the inside of the Shadow DOM — use `setTheme`, not global selectors.

See also [Layout elements](./layout-elements.md) and [Room colors](./room-colors.md).
