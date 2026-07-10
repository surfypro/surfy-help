# Modification multiple d'espaces sur le plan

Sur la vue plan d'un étage (<LIV code="floor:map" />), en **mode édition**, vous pouvez harmoniser en une fois les propriétés de référence de **plusieurs espaces** sélectionnés.

## Prérequis

- Droits de modification sur les espaces.
- **Mode édition** activé (raccourci **e** ou option équivalente dans la barre d'outils du plan).

## Étapes

1. Ouvrez le plan de l'étage concerné.
2. Activez le **mode édition**.
3. Sélectionnez **au moins deux espaces** :
   - maintenez **Maj** enfoncée et cliquez sur chaque espace, ou
   - utilisez l'outil de sélection pour englober plusieurs espaces.
4. Un **cadre en pointillés** entoure la sélection. Sur le **bord supérieur** du cadre, cliquez sur l'icône **modification multiple**.
5. Le **panneau latéral droit** s'ouvre. Vous pouvez modifier pour tous les espaces sélectionnés :
   - <P code="room:organization" />
   - <P code="room:costCenter" />
   - <P code="room:distributionCostType" />
   - <P code="room:roomConnector" />
6. Dans la section **dimensions**, choisissez une valeur par type de calque d'analyse : elle sera appliquée à chaque espace sélectionné.
7. Cliquez sur **Appliquer** : les modifications sont enregistrées et le plan est mis à jour.

## Valeurs multiples

Lorsque les espaces sélectionnés n'ont pas la même valeur pour une propriété, le champ affiche **« Valeurs multiples »**. En choisissant une nouvelle valeur, elle remplace la valeur de **tous** les espaces sélectionnés pour cette propriété.

## Limites (version actuelle)

- La modification multiple concerne les **référentiels** (organisation, centre de coût, etc.) et les **dimensions**, pas les champs texte comme le nom de l'espace.
- L'action n'apparaît que lorsque **au moins deux espaces** sont sélectionnés.

## Voir aussi

- [Rotation groupée des postes sur le plan](./workplace-group-rotation.md)
- [Modifier un espace](/docs/tutorials/surfaces/room/edit)
