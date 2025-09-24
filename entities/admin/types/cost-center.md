---
search_rank: 0.5
---    
# Centre de coût
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Le centre de coût permet de répartir les espaces dynamiquement pour la refacturation

<OH code="costCenter"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom du centre de coût {#name}



*Nom technique:* ```name```
<PH code="costCenter:name"/>

    


## Propriétés de base {#properties-base}
    
### Code {#code}



*Nom technique:* ```code```
<PH code="costCenter:code"/>

### Couleur {#color}



*Nom technique:* ```color```
<PH code="costCenter:color"/>

### Distribuer par bâtiment {#distribute-by-building}

Répartir au prorata l'espace utilisé par ce centre de coût dans le bâtiment sur les autres centres de coût dans le bâtiment

*Nom technique:* ```distributeByBuilding```
<PH code="costCenter:distributeByBuilding"/>

### Distribuer par étage {#distribute-by-floor}

Répartir au prorata l'espace utilisé par ce centre de coût sur l'étage sur les autres centres de coût du même l'étage

*Nom technique:* ```distributeByFloor```
<PH code="costCenter:distributeByFloor"/>

### Info {#info}



*Nom technique:* ```info```
<PH code="costCenter:info"/>

    



## Entités associées (liste) {#properties-has-many}

### Associations centre de coût aux bâtiments {#cost-center-buildings}

Une association centre de coût aux bâtiments permet de définir les centres de coût spécifiques pour chaque bâtiment

*Nom technique:* ```costCenterBuildings```
<PH code="costCenter:costCenterBuildings"/>

### Associations centre de coût aux étages {#cost-center-floors}

Une association centre de coût aux étages permet de définir les centres de coût spécifiques pour chaque étage

*Nom technique:* ```costCenterFloors```
<PH code="costCenter:costCenterFloors"/>

### Espaces {#rooms}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```rooms```
<PH code="costCenter:rooms"/>

### Personnes {#people}

Ce sont les personnes entrées dans la base de données de Surfy

*Nom technique:* ```people```
<PH code="costCenter:people"/>

### Postes de travail {#workplaces}



*Nom technique:* ```workplaces```
<PH code="costCenter:workplaces"/>




