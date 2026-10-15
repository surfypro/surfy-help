---
search_rank: 0.5
sidebar_key: structure-exclusion
sidebar_label: "Exclusion de structure"
---

# Exclusion de structure
<ObjectTypeMenuBreadcrumb code="structureExclusion" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Une exclusion de structure définit un trou (patio, vide, colonne) à l'intérieur de la forme extérieure de la structure

<OH code="structureExclusion"/>






## Propriétés de base {#properties-base}
    
### Nom {#name}

Nom optionnel pour retrouver facilement l'exclusion (patio, cage d'ascenseur, etc.)

*Nom technique:* ```name```
<PH code="structureExclusion:name"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Structure {#structure}

Une structure définit une forme géométrique qui peut être utilisée pour calibrer et positionner des éléments sur des cartes

*Nom technique:* ```structure```
<PH code="structureExclusion:structure"/>


## Entités associées (liste) {#properties-has-many}

### Points d'exclusion de structure {#structure-exclusion-points}

Un point d'exclusion de structure définit un sommet du polygone de trou à l'intérieur de la forme extérieure

*Nom technique:* ```structureExclusionPoints```
<PH code="structureExclusion:structureExclusionPoints"/>




