---
sidebar_position: 2
sidebar_label: Aperçu 3D d'un espace
---

# Aperçu 3D d'un espace

Sur le plan d'un étage (<LIV code="floor:map" />), vous pouvez ouvrir un **aperçu 3D en lecture seule** de l'espace sélectionné : forme de l'espace, postes et objets à l'intérieur, **sans** les espaces voisins.

<CloudinaryAsset publicId="help/changelog/v3.5.55/room-3d-preview-fr" kind="video" asGif width={640} gifFps={8} alt="Aperçu 3D d'un espace depuis le plan : icône bas de carte, panneau à droite, espace seul" />

## Prérequis

- Accès à la vue plan d'un <OT code="floor" /> (<LIV code="floor:map" />).
- Un <OT code="room" /> sélectionné sur le plan (carte de l'espace visible).

## Étapes

1. Ouvrez le plan de l'étage (<LIV code="floor:map" />).
2. Cliquez sur un espace pour l'afficher dans sa carte (onglet d'informations).
3. En bas de la carte, cliquez sur l'icône **Aperçu 3D de l'espace**.
4. Un panneau s'ouvre à droite : faites tourner la vue à la souris pour explorer l'espace.
5. Fermez le panneau pour revenir au plan 2D — rien n'a été modifié.

## Ce que vous voyez

- **Un seul espace** : la géométrie de l'espace sélectionné.
- **Le contenu interne** : postes de travail et objets placés dans cet espace (lorsqu'ils existent).
- **Pas de voisins** : couloirs et espaces adjacents n'apparaissent pas dans cet aperçu.

## Limites

- **Lecture seule** : l'aperçu ne permet pas de déplacer, ajouter ou enregistrer quoi que ce soit.
- L'icône n'est disponible que sur la **carte de l'espace** depuis le plan 2D (pas depuis les autres onglets de la carte, ni depuis une liste).
- Si l'aperçu ne peut pas s'afficher, un message calme indique qu'il est indisponible — le plan 2D reste utilisable.

## Voir aussi

- [Arêtes visuelles sur un type d'objet](/entities/user-guide/floor-plan/item-type-visual-edges)
