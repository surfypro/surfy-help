---
sidebar_position: 5
sidebar_label: Modification multiple d’espaces
---

# Modification multiple d’espaces

Sur le plan (<LIV code="floor:map" />), harmonisez en une fois les propriétés de référence de **plusieurs espaces** sélectionnés.

<CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-fr" kind="video" asGif width={640} gifFps={8} alt="Modification multiple d'espaces sur le plan en mode édition" />

## Prérequis

- Droits de modification sur les espaces.
- Plan ouvert sur l’étage concerné.

## Étapes

1. **Ouvrez le plan de l’étage**  
   Point de départ du scénario : vue <LIV code="floor:map" />.

2. **Cliquez sur le bouton Activer le mode édition du plan**  
   Passe le plan en mode édition pour sélectionner et modifier les espaces (raccourci **e**).

3. **Modifier les propriétés de tous les espaces sélectionnés**  
   Ouvre le panneau latéral après sélection de plusieurs espaces avec **Maj**. Vous pouvez harmoniser notamment :
   - <P code="room:organization" />
   - <P code="room:costCenter" />
   - <P code="room:distributionCostType" />
   - <P code="room:roomConnector" />
   - les **dimensions** par type de calque d’analyse

4. **Cliquez sur le bouton Sauvegarder**  
   Applique les changements à tous les espaces sélectionnés.

## Gestes sans narration

- Coloration **Organisations**, clic dans le vide, sélection de deux espaces avec **Maj**, choix d’une organisation dans le dialogue, puis validation.

## Valeurs multiples

Lorsque les espaces sélectionnés n’ont pas la même valeur pour une propriété, le champ affiche **« Valeurs multiples »**. En choisissant une nouvelle valeur, elle remplace la valeur de **tous** les espaces sélectionnés pour cette propriété.

## Limites

- La modification multiple concerne les **référentiels** et les **dimensions**, pas les champs texte comme le nom de l’espace.
- L’action n’apparaît que lorsque **au moins deux espaces** sont sélectionnés.

## Voir aussi

- [Rotation groupée sur le plan](./workplace-group-rotation)
- [Ancrage du texte (type de poste)](./workplace-type-text-anchor)
