# Point d'ancrage du texte sur un type de poste

Sur la vue d'édition des formes d'un <OT code="workplaceType" /> (<LSV code="workplaceType:editor" />), vous pouvez définir et enregistrer la position par défaut du libellé affiché sur le plan (<P code="workplaceType:textAnchor" />). Lors de l'ajout d'un poste de travail sur le plan, le libellé reprend cette position.

<CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-fr" kind="video" asGif width={640} gifFps={8} alt="Déplacer le point d'ancrage du texte sur un type de poste" />

## Prérequis

- Droits de modification sur les types de postes de travail.
- Un type de poste existant.

## Étapes

1. Ouvrez le type de poste concerné.
2. Accédez à la vue d'édition des formes (<LSV code="workplaceType:editor" />).
3. Activez l'option d'ancrage du texte (raccourci **A** ou option équivalente dans la barre d'outils).
4. Déplacez le **point d'ancrage** à l'emplacement souhaité pour le libellé.
5. Enregistrez le type de poste.
6. Lorsque vous ajoutez un poste de ce type sur le plan, le libellé s'affiche à la position définie.

## Réinitialiser l'ancrage

Vous pouvez remettre le point d'ancrage à sa position initiale via l'action de réinitialisation disponible dans la vue d'édition des formes.

## Limites (version actuelle)

- La position définie sur le type s'applique aux **nouveaux postes** créés à partir de ce type ; les postes déjà placés sur le plan conservent leur ancrage existant jusqu'à modification individuelle.
- L'ancrage concerne l'affichage du **libellé** sur le plan, pas la forme du poste elle-même.

## Voir aussi

- [Rotation groupée des postes sur le plan](./workplace-group-rotation)
- [Modification multiple d'espaces sur le plan](./rooms-bulk-edit)
