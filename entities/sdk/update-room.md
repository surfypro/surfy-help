---
sidebar_position: 7
sidebar_label: "Espaces (updateRoom)"
---

# Mise à jour d'un espace (`updateRoom`)

`updateRoom(roomId, options)` permet de modifier **plusieurs propriétés d'un seul espace** en un appel (merge partiel).

## Signature

```ts
import type { SurfyRoomUpdateOptions, SurfyLayoutElement } from '@surfy/surfy-sdk';

layout.updateRoom(roomId, {
  color?: string | null;
  showLabel?: boolean;
  displayTextAnchor?: boolean;
});
```

| Option | Type | Description |
|--------|------|-------------|
| `color` | `string \| null` | Couleur CSS ; `null` retire la surcharge pour cet espace |
| `showLabel` | `boolean` | Affiche / masque le libellé 3D de l'espace |
| `displayTextAnchor` | `boolean` | Affiche / masque la ligne d'ancre du texte (3D) |

Seules les clés fournies sont appliquées.

## Exemples

```ts
const layout = document.querySelector('surfy-building-layout-3d')!;

// Couleur + texte + ancre en un seul appel
layout.updateRoom(577183, {
  color: '#2196F3',
  showLabel: true,
  displayTextAnchor: true,
});

// Masquer uniquement le texte de cet espace
layout.updateRoom(577183, { showLabel: false });

// Retirer la couleur de cet espace (les autres surcharges restent)
layout.updateRoom(577183, { color: null });
```

## Différence avec `setRoomColors`

| Méthode | Comportement |
|---------|--------------|
| `setRoomColors(map)` | **Remplace** toute la carte de couleurs |
| `updateRoom(id, { color })` | **Fusionne** la couleur d'un seul espace |

## Disponibilité

| Élément | `color` | `showLabel` / `displayTextAnchor` |
|---------|---------|-----------------------------------|
| `<surfy-floor-layout-2d>` | oui | ignorés (pas de libellés 3D) |
| `<surfy-building-layout-3d>` | oui | oui |

Les libellés globaux (`setOptions({ showRoomLabels })`) restent le master switch : un espace avec `showLabel: true` reste masqué si les labels globaux sont désactivés.

Voir aussi [Couleurs des espaces](./room-colors.md) et [Options 3D](./options-3d.md).
