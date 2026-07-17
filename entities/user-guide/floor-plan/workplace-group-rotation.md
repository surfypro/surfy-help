# Rotation groupée des postes sur le plan

Sur la vue plan d’un étage (<LIV code="floor:map" />), en **mode édition**, vous pouvez orienter **plusieurs postes de travail en une seule fois** lorsqu’ils sont sélectionnés ensemble.

<CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes de travail en mode édition du plan" />

## Prérequis

- Droits d’édition sur le plan de l’étage.
- **Mode édition** activé (raccourci **e** ou option équivalente dans la barre d’outils du plan).

## Étapes

1. Ouvrez le plan de l’étage concerné.
2. Activez le **mode édition**.
3. Sélectionnez **au moins deux postes de travail** :
   - maintenez **Maj** enfoncée et cliquez sur chaque poste, ou
   - utilisez l’outil de sélection pour englober plusieurs postes.
4. Un **cadre en pointillés** entoure la sélection. Sur le **bord supérieur** du cadre, trois actions sont disponibles (de gauche à droite) :
   - déplacer la sélection ;
   - dupliquer la sélection (si l’option est activée pour votre organisation) ;
   - **faire pivoter les postes ensemble** (icône de rotation).
5. Faites glisser la poignée de rotation : tous les postes sélectionnés tournent **autour du centre de la sélection**, en conservant leur disposition relative.
6. Relâchez la souris : l’orientation est enregistrée sur chaque poste.

## Rotation d’un seul poste

Si un **seul** poste est sélectionné, la poignée de rotation reste sur le poste lui-même (comportement inchangé).

## Astuce

- Maintenez **Maj** pendant la rotation pour choisir un **angle libre**.
- Sans Maj, la rotation se cale sur des angles de **45°**.

## Limites (version actuelle)

- La rotation groupée concerne les **postes de travail** uniquement (pas un mélange postes + objets meubles dans un même geste).
- La vue **3D** du bâtiment n’est pas concernée.

## Voir aussi

- [Modification multiple d'espaces sur le plan](./rooms-bulk-edit)
- [Point d'ancrage du texte sur un type de poste](./workplace-type-text-anchor)
