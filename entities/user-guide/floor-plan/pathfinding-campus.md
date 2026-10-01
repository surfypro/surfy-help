---
sidebar_position: 3
sidebar_label: Pathfinding
---

# Pathfinding

Le **Pathfinding** permet de trouver un chemin d’un espace à un autre et de le suivre sur une vue 3D, lorsque <P code="company:enablePathfinding" /> est activé pour l’entreprise.

Cette page décrit la navigation **dans un bâtiment**. La navigation **entre plusieurs bâtiments** d’un campus (parcours extérieur) est un autre usage — elle n’est pas couverte ici.

## Navigation dans un bâtiment

Depuis la fiche d’un <OT code="building" />, ouvrez la vue <LSV code="building:building-pathfinding" />.

1. À gauche, choisissez l’**origine** puis la **destination** (espaces de ce bâtiment ; une destination peut aussi être un équipement rattaché à un espace).
2. À droite, la carte du bâtiment affiche le **chemin en 3D** entre les deux points.
3. Suivez le tracé pour vous repérer d’étage en étage à l’intérieur de **ce** bâtiment.

### Prérequis

- <P code="company:enablePathfinding" /> activé.
- Accès à la fiche du <OT code="building" /> et à la vue Pathfinding.
- Espaces (et connecteurs d’espaces entre étages, le cas échéant) déjà préparés pour la navigation.

### Actualiser la navigation (admin)

Sur la même vue, un administrateur peut **actualiser la navigation** du bâtiment. Le calcul prend en compte les **connecteurs d’espaces** entre étages. Surfy reste utilisable pendant le traitement ; un message indique quand la navigation est à jour.

### Ce que ce n’est pas

- **Pas** la navigation **campus** multi-bâtiments ni le trajet extérieur entre bâtiments.
- **Pas** l’[aperçu 3D d’un seul espace](/entities/user-guide/floor-plan/room-3d-preview) depuis le plan d’étage.
- **Pas** un outil réservé au débogage technique : c’est une vue de **navigation** pour se repérer dans le bâtiment.

## Voir aussi

- [Aperçu 3D d'un espace](/entities/user-guide/floor-plan/room-3d-preview)
