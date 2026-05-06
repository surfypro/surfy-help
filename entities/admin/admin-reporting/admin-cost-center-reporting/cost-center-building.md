---
search_rank: 0.5
sidebar_key: cost-center-building
sidebar_label: "Association centre de coût aux bâtiments"
---

# Association centre de coût aux bâtiments
<ObjectTypeMenuBreadcrumb code="costCenterBuilding" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Une association centre de coût aux bâtiments permet de définir les centres de coût spécifiques pour chaque bâtiment

<OH code="costCenterBuilding"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Capacité totale {#total-capacity-count}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```
<PH code="costCenterBuilding:totalCapacityCount"/>

### Empreinte carbone {#carbon-footprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```
<PH code="costCenterBuilding:carbonFootprint"/>

### Nombre d'affectations {#people-count}



*Nom technique:* ```peopleCount```
<PH code="costCenterBuilding:peopleCount"/>

### Nombre d'espaces {#rooms-count}

Le nombre total d'espaces

*Nom technique:* ```roomsCount```
<PH code="costCenterBuilding:roomsCount"/>

### Nombre de places assises {#seats-count}

Le nombre total de places assises

*Nom technique:* ```seatsCount```
<PH code="costCenterBuilding:seatsCount"/>

### Nombre de postes de travail {#workplaces-count}

Le nombre total de postes de travail dans les espaces

*Nom technique:* ```workplacesCount```
<PH code="costCenterBuilding:workplacesCount"/>

### Nombre de postes de travail de passage {#transit-workplaces-count}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```
<PH code="costCenterBuilding:transitWorkplacesCount"/>

### Nombre de postes de travail partagés {#shared-workplaces-count}

Nombre total de postes de travail partagés par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```
<PH code="costCenterBuilding:sharedWorkplacesCount"/>

### Nombre de postes flex {#flex-workplaces-count}

Nombre total de postes flex

*Nom technique:* ```flexWorkplacesCount```
<PH code="costCenterBuilding:flexWorkplacesCount"/>

### Nombre de postes libres {#free-workplaces-count}

Nombre total de postes libres

*Nom technique:* ```freeWorkplacesCount```
<PH code="costCenterBuilding:freeWorkplacesCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="costCenterBuilding:totalPeopleCount"/>

### Ratio d'occupation {#people-ratio}

Le ratio d'occupation est le nombre de métres carrés divisé par le nombre de personnes affectées soit directement dans les espaces, soit via un poste de travail

*Nom technique:* ```peopleRatio```
<PH code="costCenterBuilding:peopleRatio"/>

### Ratio postes de travail {#workplaces-ratio}

Le ratio postes de travail est le nombre de métres carrés divisé par le nombre de postes de travail

*Nom technique:* ```workplacesRatio```
<PH code="costCenterBuilding:workplacesRatio"/>

### Surface qualifiée {#rooms-area}

La surface qualifiée est la somme des surfaces des espaces

*Nom technique:* ```roomsArea```
<PH code="costCenterBuilding:roomsArea"/>

### Taux d'occupation {#occupancy-rate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```
<PH code="costCenterBuilding:occupancyRate"/>

### Taux de foisonnement {#expansion-ratio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```
<PH code="costCenterBuilding:expansionRatio"/>

### Taux de places assises par affectations {#seats-people-ratio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```
<PH code="costCenterBuilding:seatsPeopleRatio"/>

### Taux de places assises par postes de travail {#total-capacity-workplace-count-ratio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```
<PH code="costCenterBuilding:totalCapacityWorkplaceCountRatio"/>

### Taux de postes de travail en flex {#flex-ratio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```
<PH code="costCenterBuilding:flexRatio"/>

### Taux de postes de travail partagés {#shared-workplaces-ratio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail

*Nom technique:* ```sharedWorkplacesRatio```
<PH code="costCenterBuilding:sharedWorkplacesRatio"/>

    



## Entités associées (unique) {#properties-belongs-to}

### Bâtiment {#building}

Le bâtiment est utilisé pour regrouper les étages

*Nom technique:* ```building```
<PH code="costCenterBuilding:building"/>

### Centre de coût {#cost-center}

Le centre de coût permet de répartir les espaces dynamiquement pour la refacturation

*Nom technique:* ```costCenter```
<PH code="costCenterBuilding:costCenter"/>





