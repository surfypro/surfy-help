---
sidebar_position: 4
sidebar_label: Ancrage du texte (type de poste)
---

# Ancrage du texte sur un type de poste

Sur l’éditeur de formes d’un <OT code="workplaceType" /> (<LSV code="workplaceType:editor" />), définissez la position par défaut du libellé (<P code="workplaceType:textAnchor" />). Lors de l’ajout d’un poste sur le plan, le libellé reprend cette position.

<CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-fr" kind="video" asGif width={640} gifFps={8} alt="Déplacer le point d'ancrage du texte sur un type de poste" />

## Prérequis

- Droits de modification sur les types de postes de travail.
- Un type de poste existant.

## Étapes

1. **Ouvrez le type de poste et accédez à l’éditeur de formes**  
   Point de départ du scénario : vue <LSV code="workplaceType:editor" />.

2. **Cliquez sur le bouton Commencer la manipulation de l'espace de travail**  
   Active le mode sélection / manipulation sur l’éditeur du type de poste.

3. **Cliquez sur le bouton Déplacer l'ancre du texte**  
   *Afficher et déplacer le point d’ancrage du texte pour ce type de poste* (raccourci **A**).

## Gestes sans narration

- Faites glisser le **point d’ancrage** jusqu’à la position souhaitée pour le libellé.
- Enregistrez le type de poste pour que les **nouveaux** postes reprennent cette position.

## Réinitialiser l’ancrage

Vous pouvez remettre le point d’ancrage à sa position initiale via l’action de réinitialisation dans la vue d’édition des formes.

## Limites

- La position définie sur le type s’applique aux **nouveaux postes** ; les postes déjà placés conservent leur ancrage jusqu’à modification individuelle.
- L’ancrage concerne le **libellé** sur le plan, pas la forme du poste.

## Voir aussi

- [Rotation groupée sur le plan](./workplace-group-rotation)
- [Modification multiple d’espaces](./rooms-bulk-edit)
