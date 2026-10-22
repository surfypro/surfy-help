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

### Mode connecteurs {#mode-connecteurs}

Pour contrôler rapidement que les **connecteurs d’espaces** (liaisons entre étages) et les **connecteurs de segment** (entrées / sorties du bâtiment) sont correctement reliés :

1. Ouvrez la vue <LSV code="building:building-pathfinding" />.
2. Activez **Mode connecteurs** (désactivé par défaut).
3. Les espaces et liaisons liés aux connecteurs prennent la **couleur du type** ; sans couleur → **gris**. Des **traits verticaux** matérialisent les liaisons entre étages.

Vous pouvez définir une couleur optionnelle sur les fiches <OT code="roomConnectorType" /> et <OT code="segmentConnectorType" />.

**Mode connecteurs** n’est **pas** le tracé d’itinéraire origine → destination : c’est une aide visuelle pour vérifier le câblage des connecteurs dans **ce** bâtiment (pas le campus multi-bâtiments).

### Ce que ce n’est pas

- **Pas** la navigation **campus** multi-bâtiments ni le trajet extérieur entre bâtiments.
- **Pas** l’[exploration multi-bâtiments en lecture seule](/entities/user-guide/floor-plan/carte-3d-maplibre) sur la Carte 3D MapLibre (Mode structure / Mode bâtiment, sans itinéraire).
- **Pas** l’[aperçu 3D d’un seul espace](/entities/user-guide/floor-plan/room-3d-preview) depuis le plan d’étage.
- **Pas** un outil réservé au débogage technique : c’est une vue de **navigation** pour se repérer dans le bâtiment.

## Voir aussi

- [Carte 3D MapLibre](/entities/user-guide/floor-plan/carte-3d-maplibre)
- [Aperçu 3D d'un espace](/entities/user-guide/floor-plan/room-3d-preview)
