---
sidebar_position: 7
sidebar_label: Magnétisme de segments sur le plan
---

# Magnétisme de segments sur le plan

Sur le plan d’un étage (<LIV code="floor:map" />), activez le **Magnétisme** pour coller les **côtés** des postes et des objets entre eux lors du déplacement (et aussi à la duplication ou à la pose). Lorsque plusieurs voisins sont proches, le plan peut proposer **plusieurs accrochages en même temps** (souvent deux axes à 90°, par ex. à gauche **et** en haut).

<CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-fr" kind="video" asGif width={640} gifFps={8} alt="Plusieurs accrochages simultanés (Magnétisme) sur le plan en mode édition" />

## Prérequis

- Droits d’édition sur le plan de l’étage.
- Plan ouvert sur l’étage concerné.

## Étapes

1. **Ouvrez le plan de l’étage**  
   Point de départ du scénario : vue <LIV code="floor:map" />.

2. **Cliquez sur le bouton Activer le mode édition du plan**  
   Passe le plan en mode édition pour déplacer et orienter les postes et les objets (raccourci **e**).

3. **Cliquez sur le bouton Activer le Magnétisme**  
   *Aimante les côtés des postes et objets lors du déplacement, de la duplication ou de la pose. Mémorisé sur cet appareil.*

4. **Sélectionnez un poste**  
   La forme devient la sélection active.

## Gestes sans narration

- **Faites glisser** le poste vers **plusieurs** voisins déjà posés (ex. un à gauche et un en haut) : plusieurs zones / arêtes d’aperçu peuvent apparaître **ensemble** lorsque les côtés peuvent s’aimanter.
- **Relâchez** : la forme rejoint **en une seule** transition douce la pose qui respecte tous ces accrochages. Si tout n’est pas compatible, le plan se limite à un sous-ensemble possible (parfois un seul).
- **Faites pivoter** près d’une cible : les crans à **45°** restent pendant le geste ; au **relâchement**, si un jeu d’accrochages est proche, l’angle final suit l’alignement des côtés.

## Astuce

- L’option est **désactivée par défaut**. Une fois activée, elle reste mémorisée sur **cet appareil**.
- Les côtés trop courts ou trop éloignés ne s’aimantent pas. Les murs et les pièces ne sont pas concernés.

## Limites

- La vue **3D** du bâtiment n’est pas concernée.
- Hors Magnétisme (ou sans cible proche), la rotation garde le comportement habituel des crans à 45°.

## Voir aussi

- [Rotation groupée sur le plan](./workplace-group-rotation)
- [Ancrage du texte (type de poste)](./workplace-type-text-anchor)
