---
sidebar_position: 3
sidebar_label: Rotation groupée sur le plan
---

# Rotation groupée sur le plan

Sur le plan d’un étage (<LIV code="floor:map" />), orientez **plusieurs postes de travail et/ou objets en une seule fois** lorsqu’ils sont sélectionnés ensemble.

<CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes et d’objets en mode édition du plan" />

## Prérequis

- Droits d’édition sur le plan de l’étage.
- Plan ouvert sur l’étage concerné.

## Étapes

1. **Ouvrez le plan de l’étage**  
   Point de départ du scénario : vue <LIV code="floor:map" />.

2. **Cliquez sur le bouton Activer le mode édition du plan**  
   Passe le plan en mode édition pour déplacer et orienter les postes et les objets (raccourci **e**).

3. **Sélectionnez un poste ou un objet** (première forme)  
   La forme devient la sélection active.

4. **Maintenez la touche Maj**  
   Permet d’ajouter d’autres postes et/ou objets à la sélection.

5. **Sélectionnez une autre forme** (poste ou objet)  
   Au moins deux formes sont sélectionnées ; le cadre en pointillés apparaît.

## Gestes sans narration

- Sur le **bord supérieur** du cadre : déplacer, dupliquer (si activé), ou **faire pivoter** via la poignée de rotation.
- Faites glisser la poignée de rotation : **toutes** les formes sélectionnées (postes et objets) tournent **autour du centre de la sélection**, en conservant leur disposition relative.
- Relâchez **Maj** lorsque la sélection n’est plus nécessaire.

## Rotation d’une seule forme

Si un **seul** poste ou un **seul** objet est sélectionné, la poignée de rotation reste sur la forme elle-même.

## Astuce

- Maintenez **Maj** pendant la rotation pour un **angle libre**.
- Sans Maj, la rotation se cale sur des angles de **45°**.
- Pour **coller les côtés** entre postes ou objets, activez le [Magnétisme de segments sur le plan](./workplace-segment-magnetism).

## Limites

- La vue **3D** du bâtiment n’est pas concernée.

## Voir aussi

- [Magnétisme de segments sur le plan](./workplace-segment-magnetism)
- [Modification multiple d’espaces](./rooms-bulk-edit)
- [Ancrage du texte (type de poste)](./workplace-type-text-anchor)
