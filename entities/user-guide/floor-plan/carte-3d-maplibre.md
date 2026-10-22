---
sidebar_position: 4
sidebar_label: Carte 3D MapLibre
---

# Carte 3D MapLibre (exploration campus)

La vue <LIV code="building:3d-maplibre" /> permet d’explorer **plusieurs bâtiments** sur une carte 3D : d’abord en **volumes** (Mode structure), puis en **détail** d’un bâtiment (Mode bâtiment), **sans quitter la carte** et **sans créer d’itinéraire**.

## Ouvrir la vue

Depuis la liste des <OT code="building" />, ouvrez la vue <LIV code="building:3d-maplibre" /> (**Carte 3D MapLibre**).

## Mode structure

En **Mode structure**, les bâtiments apparaissent sous forme de **volumes**.

- À gauche, une **liste des noms** de bâtiments.
- Cliquez un nom (ou zoomez sur un bâtiment) pour le mettre en focus et passer en Mode bâtiment.

## Mode bâtiment

En **Mode bâtiment**, le bâtiment focus s’affiche en **détail 3D** (même rendu que la vue Pathfinding), en **lecture seule**.

- **Un seul** bâtiment à la fois en Mode bâtiment ; les autres restent en Mode structure.
- Un panneau latéral propose les **contrôles d’étage / d’affichage** de la même famille que le Pathfinding (étage courant, aperçu des autres étages, etc.).
- **Pas** de choix d’origine / destination et **pas** d’édition d’itinéraire sur cette vue.

Au **premier** focus d’un bâtiment, le détail peut prendre un instant à s’afficher ; ensuite, revenir sur ce bâtiment est immédiat.

## Zoom : sortir et revenir

- **Dézoom** suffisamment → retour au **Mode structure** (volumes).
- **Rezoom** sur le même bâtiment → retour au **Mode bâtiment** (détail déjà chargé).

## Ce que ce n’est pas

- **Pas** la [navigation Pathfinding](/entities/user-guide/floor-plan/pathfinding-campus) avec origine et destination dans un bâtiment.
- **Pas** l’[aperçu 3D d’un seul espace](/entities/user-guide/floor-plan/room-3d-preview) depuis le plan d’étage.

## Voir aussi

- [Pathfinding — navigation dans un bâtiment](/entities/user-guide/floor-plan/pathfinding-campus)
- [Aperçu 3D d'un espace](/entities/user-guide/floor-plan/room-3d-preview)
