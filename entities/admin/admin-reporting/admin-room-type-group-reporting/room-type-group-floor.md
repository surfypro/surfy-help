---
search_rank: 0.5
sidebar_key: room-type-group-floor
sidebar_label: "Association groupe de typologie d'espace aux étages"
---

# Association groupe de typologie d'espace aux étages
<ObjectTypeMenuBreadcrumb code="roomTypeGroupFloor" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Une association groupe de typologie d'espace aux étages permet de définir les groupes de types d'espaces disponibles dans chaque étage

<OH code="roomTypeGroupFloor"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Capacité totale {#total-capacity-count}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```
<PH code="roomTypeGroupFloor:totalCapacityCount"/>

### Empreinte carbone {#carbon-footprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```
<PH code="roomTypeGroupFloor:carbonFootprint"/>

### Nombre d'affectations {#people-count}



*Nom technique:* ```peopleCount```
<PH code="roomTypeGroupFloor:peopleCount"/>

### Nombre d'espaces {#rooms-count}

Le nombre total d'espaces

*Nom technique:* ```roomsCount```
<PH code="roomTypeGroupFloor:roomsCount"/>

### Nombre de places assises {#seats-count}

Le nombre total de places assises

*Nom technique:* ```seatsCount```
<PH code="roomTypeGroupFloor:seatsCount"/>

### Nombre de postes de travail {#workplaces-count}

Le nombre total de postes de travail dans les espaces

*Nom technique:* ```workplacesCount```
<PH code="roomTypeGroupFloor:workplacesCount"/>

### Nombre de postes de travail de passage {#transit-workplaces-count}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```
<PH code="roomTypeGroupFloor:transitWorkplacesCount"/>

### Nombre de postes de travail partagés {#shared-workplaces-count}

Nombre total de postes de travail partagés par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```
<PH code="roomTypeGroupFloor:sharedWorkplacesCount"/>

### Nombre de postes flex {#flex-workplaces-count}

Nombre total de postes flex

*Nom technique:* ```flexWorkplacesCount```
<PH code="roomTypeGroupFloor:flexWorkplacesCount"/>

### Nombre de postes libres {#free-workplaces-count}

Nombre total de postes libres

*Nom technique:* ```freeWorkplacesCount```
<PH code="roomTypeGroupFloor:freeWorkplacesCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="roomTypeGroupFloor:totalPeopleCount"/>

### Ratio d'occupation {#people-ratio}

Le ratio d'occupation est le nombre de métres carrés divisé par le nombre de personnes affectées soit directement dans les espaces, soit via un poste de travail

*Nom technique:* ```peopleRatio```
<PH code="roomTypeGroupFloor:peopleRatio"/>

### Ratio postes de travail {#workplaces-ratio}

Le ratio postes de travail est le nombre de métres carrés divisé par le nombre de postes de travail

*Nom technique:* ```workplacesRatio```
<PH code="roomTypeGroupFloor:workplacesRatio"/>

### Surface qualifiée {#rooms-area}

La surface qualifiée est la somme des surfaces des espaces

*Nom technique:* ```roomsArea```
<PH code="roomTypeGroupFloor:roomsArea"/>

### Taux d'occupation {#occupancy-rate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```
<PH code="roomTypeGroupFloor:occupancyRate"/>

### Taux de foisonnement {#expansion-ratio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```
<PH code="roomTypeGroupFloor:expansionRatio"/>

### Taux de places assises par affectations {#seats-people-ratio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```
<PH code="roomTypeGroupFloor:seatsPeopleRatio"/>

### Taux de places assises par postes de travail {#total-capacity-workplace-count-ratio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```
<PH code="roomTypeGroupFloor:totalCapacityWorkplaceCountRatio"/>

### Taux de postes de travail en flex {#flex-ratio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```
<PH code="roomTypeGroupFloor:flexRatio"/>

### Taux de postes de travail partagés {#shared-workplaces-ratio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail

*Nom technique:* ```sharedWorkplacesRatio```
<PH code="roomTypeGroupFloor:sharedWorkplacesRatio"/>

    



## Entités associées (unique) {#properties-belongs-to}

### Étage {#floor}

Les étages represent un plateau de travail ou un niveau d'un bâtiment

*Nom technique:* ```floor```
<PH code="roomTypeGroupFloor:floor"/>

### Groupe de typologie d'espace {#room-type-group}

Un groupe de typologie d'espace permet de regrouper plusieurs types d'espaces pour faciliter leur gestion et leur affichage

*Nom technique:* ```roomTypeGroup```
<PH code="roomTypeGroupFloor:roomTypeGroup"/>





