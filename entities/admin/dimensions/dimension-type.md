---
search_rank: 0.5
---    
# Type de calque
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un type de calque permet de catégoriser les calques d'analyse selon leur usage ou leur domaine d'application

<OH code="dimensionType"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom du type de dimension {#name}



*Nom technique:* ```name```
<PH code="dimensionType:name"/>

    


## Propriétés de base {#properties-base}
    
### Code du type de dimension {#code}

Le code permet d'identifier le type de dimension, il est utilisé lorsque des calculs spécifiques s'appliquent sur le type de dimension

*Nom technique:* ```code```
<PH code="dimensionType:code"/>

### Description {#description}



*Nom technique:* ```description```
<PH code="dimensionType:description"/>

### Ordre d'affichage {#order}

Permet de trier les types de calque pour les afficher

*Nom technique:* ```order```
<PH code="dimensionType:order"/>

    



## Entités associées (liste) {#properties-has-many}

### Associations calque d'analyse aux bâtiments {#dimension-buildings}

Une association calque d'analyse aux bâtiments permet de définir les calques d'analyse spécifiques pour chaque bâtiment

*Nom technique:* ```dimensionBuildings```
<PH code="dimensionType:dimensionBuildings"/>

### Associations calque d'analyse aux espaces {#dimension-rooms}

Une association calque d'analyse aux espaces permet de définir les calques d'analyse spécifiques pour chaque espace

*Nom technique:* ```dimensionRooms```
<PH code="dimensionType:dimensionRooms"/>

### Associations calque d'analyse aux étages {#dimension-floors}

Une association calque d'analyse aux étages permet de définir les calques d'analyse spécifiques pour chaque étage

*Nom technique:* ```dimensionFloors```
<PH code="dimensionType:dimensionFloors"/>

### Calques d'analyse {#dimensions}

Un calque d'analyse permet de catégoriser et analyser les espaces selon différents critères pour des analyses statistiques et de reporting

*Nom technique:* ```dimensions```
<PH code="dimensionType:dimensions"/>

### Types de calques d'affectation du bâtiment {#dimension-type-to-buildings}

Les types de calques d'affectation du bâtiment permettent de définir les différents types de calques d'affectation du bâtiment. En associant un type de calque d'affectation à un bâtiment, cela permet de transformer un calque d'analyse en calque d'affectation.

*Nom technique:* ```dimensionTypeToBuildings```
<PH code="dimensionType:dimensionTypeToBuildings"/>




