---
search_rank: 0.5
---

<ObjectTypeMenuBreadcrumb code="dimensionBuilding" />

# Association calque d'analyse aux bâtiments
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Une association calque d'analyse aux bâtiments permet de définir les calques d'analyse spécifiques pour chaque bâtiment

<OH code="dimensionBuilding"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Capacité totale {#total-capacity-count}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```
<PH code="dimensionBuilding:totalCapacityCount"/>

### Empreinte carbone {#carbon-footprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```
<PH code="dimensionBuilding:carbonFootprint"/>

### Nombre d'affectations {#people-count}



*Nom technique:* ```peopleCount```
<PH code="dimensionBuilding:peopleCount"/>

### Nombre d'affectations directement à ce calque d'affectation {#dimension-people-count}

Le nombre de personnes qui sont affectées à ce calque d'affectation pour l'ensemble du bâtiment

*Nom technique:* ```dimensionPeopleCount```
<PH code="dimensionBuilding:dimensionPeopleCount"/>

### Nombre d'espaces {#rooms-count}

Le nombre total d'espaces

*Nom technique:* ```roomsCount```
<PH code="dimensionBuilding:roomsCount"/>

### Nombre de places assises {#seats-count}

Le nombre total de places assises

*Nom technique:* ```seatsCount```
<PH code="dimensionBuilding:seatsCount"/>

### Nombre de postes de travail {#workplaces-count}

Le nombre total de postes de travail dans les espaces

*Nom technique:* ```workplacesCount```
<PH code="dimensionBuilding:workplacesCount"/>

### Nombre de postes de travail de passage {#transit-workplaces-count}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```
<PH code="dimensionBuilding:transitWorkplacesCount"/>

### Nombre de postes de travail partagés {#shared-workplaces-count}

Nombre total de postes de travail partagés par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```
<PH code="dimensionBuilding:sharedWorkplacesCount"/>

### Nombre de postes flex {#flex-workplaces-count}

Nombre total de postes flex

*Nom technique:* ```flexWorkplacesCount```
<PH code="dimensionBuilding:flexWorkplacesCount"/>

### Nombre de postes libres {#free-workplaces-count}

Nombre total de postes libres

*Nom technique:* ```freeWorkplacesCount```
<PH code="dimensionBuilding:freeWorkplacesCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="dimensionBuilding:totalPeopleCount"/>

### Ratio d'occupation {#people-ratio}

Le ratio d'occupation est le nombre de métres carrés divisé par le nombre de personnes affectées soit directement dans les espaces, soit via un poste de travail

*Nom technique:* ```peopleRatio```
<PH code="dimensionBuilding:peopleRatio"/>

### Ratio postes de travail {#workplaces-ratio}

Le ratio postes de travail est le nombre de métres carrés divisé par le nombre de postes de travail

*Nom technique:* ```workplacesRatio```
<PH code="dimensionBuilding:workplacesRatio"/>

### Surface qualifiée {#rooms-area}

La surface qualifiée est la somme des surfaces des espaces

*Nom technique:* ```roomsArea```
<PH code="dimensionBuilding:roomsArea"/>

### Taux d'occupation {#occupancy-rate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```
<PH code="dimensionBuilding:occupancyRate"/>

### Taux de foisonnement {#expansion-ratio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```
<PH code="dimensionBuilding:expansionRatio"/>

### Taux de places assises par affectations {#seats-people-ratio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```
<PH code="dimensionBuilding:seatsPeopleRatio"/>

### Taux de places assises par postes de travail {#total-capacity-workplace-count-ratio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```
<PH code="dimensionBuilding:totalCapacityWorkplaceCountRatio"/>

### Taux de postes de travail en flex {#flex-ratio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```
<PH code="dimensionBuilding:flexRatio"/>

### Taux de postes de travail partagés {#shared-workplaces-ratio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail

*Nom technique:* ```sharedWorkplacesRatio```
<PH code="dimensionBuilding:sharedWorkplacesRatio"/>

    


## Propriétés de base {#properties-base}
    
### Nombre de postes de travail réservables {#bookable-workplaces-count}

Le nombre total de postes de travail réservables dans ce calque d'analyse pour ce bâtiment

*Nom technique:* ```bookableWorkplacesCount```
<PH code="dimensionBuilding:bookableWorkplacesCount"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Bâtiment {#building}

Le bâtiment est utilisé pour regrouper les étages

*Nom technique:* ```building```
<PH code="dimensionBuilding:building"/>

### Calque d'analyse {#dimension}

Un calque d'analyse permet de catégoriser et analyser les espaces selon différents critères pour des analyses statistiques et de reporting

*Nom technique:* ```dimension```
<PH code="dimensionBuilding:dimension"/>

### Type de calque {#dimension-type}

Un type de calque permet de catégoriser les calques d'analyse selon leur usage ou leur domaine d'application

*Nom technique:* ```dimensionType```
<PH code="dimensionBuilding:dimensionType"/>





