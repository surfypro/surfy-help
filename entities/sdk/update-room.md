---
sidebar_position: 7
sidebar_label: "Espaces (updateRoom)"
---

# Mise à jour d'un espace (`updateRoom`)

`layout.updateRoom(roomId, options)` permet de modifier **plusieurs propriétés d'un seul espace** en un appel (merge partiel).

## Signature

```ts
import { SurfySdk, type SurfyRoomUpdateOptions } from '@surfy/surfy-sdk';

const layout = SurfySdk.mountFloor2d({ /* … */ });

layout.updateRoom(roomId, {
  color?: string | null;
  showLabel?: boolean;
});
```

| Option | Type | Description |
|--------|------|-------------|
| `color` | `string \| null` | Couleur CSS ; `null` retire la surcharge pour cet espace |
| `showLabel` | `boolean` | Affiche / masque le libellé 3D de l'espace |

Seules les clés fournies sont appliquées.

## Exemples

```ts
const layout = SurfySdk.mountBuilding3d({
  container: '#map',
  tenant,
  baseUrl,
  buildingId: 42,
  getAccessToken,
});

layout.updateRoom(577183, {
  color: '#2196F3',
  showLabel: true,
});

layout.updateRoom(577183, { showLabel: false });
layout.updateRoom(577183, { color: null });
```

## Différence avec `setRoomColors`

| Méthode | Comportement |
|---------|--------------|
| `setRoomColors(map)` | **Remplace** toute la carte de couleurs |
| `updateRoom(id, { color })` | **Fusionne** la couleur d'un seul espace |

## Disponibilité

| Kind | `color` | `showLabel` |
|------|---------|-------------|
| `floor-2d` | oui | ignoré (pas de libellés 3D) |
| `building-3d` | oui | oui |

Les libellés globaux (`setOptions({ showRoomLabels })`) restent le master switch.

Voir aussi [Couleurs des espaces](./room-colors.md) et [Options 3D](./options-3d.md).
