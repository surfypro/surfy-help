---
search_rank: 0.5
---

<ObjectTypeMenuBreadcrumb code="floor" />

# Étage
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Les étages represent un plateau de travail ou un niveau d'un bâtiment

<OH code="floor"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Niveau {#level}

Le niveau de l'étage permet de définir sa position par rapport aux autres étages, par exemple utilisez 0 pour le RDC ou -1 pour les parkings

*Nom technique:* ```level```
<PH code="floor:level"/>

### Nom de l'étage {#name}

Le nom de l'étage est utilisé pour pouvoir le retrouver facilement.

*Nom technique:* ```name```
<PH code="floor:name"/>

    


## Propriétés de base {#properties-base}
    
### Capacité réglementaire {#regulatory-capacity}

La capacité réglementaire du plateau, permet de gérer l'évacuation du public et des employés

*Nom technique:* ```regulatoryCapacity```
<PH code="floor:regulatoryCapacity"/>

### Capacité totale {#total-capacity-count}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```
<PH code="floor:totalCapacityCount"/>

### Empreinte carbone {#carbon-footprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```
<PH code="floor:carbonFootprint"/>

### Fond de plan {#background-layout}

Le fond de plan permet d'avoir un premier niveau de calque afin de pouvoir redessiner les plans, il doit être à l'échelle

*Nom technique:* ```backgroundLayout```
<PH code="floor:backgroundLayout"/>

### Graphe de navigation de l'étage {#pathfinding-graph}

Le graphe de navigation permet de calculer les chemins les plus courts entre les points de l'étage

*Nom technique:* ```pathfindingGraph```
<PH code="floor:pathfindingGraph"/>

### Hauteur sous plafond {#height}

La hauteur sous plafond de l'étage

*Nom technique:* ```height```
<PH code="floor:height"/>

### Nombre d'affectations {#people-count}



*Nom technique:* ```peopleCount```
<PH code="floor:peopleCount"/>

### Nombre d'espaces {#rooms-count}

Le nombre total d'espaces

*Nom technique:* ```roomsCount```
<PH code="floor:roomsCount"/>

### Nombre de places assises {#seats-count}

Le nombre total de places assises

*Nom technique:* ```seatsCount```
<PH code="floor:seatsCount"/>

### Nombre de postes de travail {#workplaces-count}

Le nombre total de postes de travail dans les espaces

*Nom technique:* ```workplacesCount```
<PH code="floor:workplacesCount"/>

### Nombre de postes de travail de passage {#transit-workplaces-count}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```
<PH code="floor:transitWorkplacesCount"/>

### Nombre de postes de travail partagés {#shared-workplaces-count}

Nombre total de postes de travail partagés par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```
<PH code="floor:sharedWorkplacesCount"/>

### Nombre de postes flex {#flex-workplaces-count}

Nombre total de postes flex

*Nom technique:* ```flexWorkplacesCount```
<PH code="floor:flexWorkplacesCount"/>

### Nombre de postes libres {#free-workplaces-count}

Nombre total de postes libres

*Nom technique:* ```freeWorkplacesCount```
<PH code="floor:freeWorkplacesCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="floor:totalPeopleCount"/>

### Opacité du fond de plan {#background-layout-opacity}

L'opacité permet de voir plus ou moins le fond de plan

*Nom technique:* ```backgroundLayoutOpacity```
<PH code="floor:backgroundLayoutOpacity"/>

### Ratio d'occupation {#people-ratio}

Le ratio d'occupation est le nombre de métres carrés divisé par le nombre de personnes affectées soit directement dans les espaces, soit via un poste de travail

*Nom technique:* ```peopleRatio```
<PH code="floor:peopleRatio"/>

### Ratio postes de travail {#workplaces-ratio}

Le ratio postes de travail est le nombre de métres carrés divisé par le nombre de postes de travail

*Nom technique:* ```workplacesRatio```
<PH code="floor:workplacesRatio"/>

### Surface qualifiée {#rooms-area}

La surface qualifiée est la somme des surfaces des espaces

*Nom technique:* ```roomsArea```
<PH code="floor:roomsArea"/>

### Taux d'occupation {#occupancy-rate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```
<PH code="floor:occupancyRate"/>

### Taux de foisonnement {#expansion-ratio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```
<PH code="floor:expansionRatio"/>

### Taux de places assises par affectations {#seats-people-ratio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```
<PH code="floor:seatsPeopleRatio"/>

### Taux de places assises par postes de travail {#total-capacity-workplace-count-ratio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```
<PH code="floor:totalCapacityWorkplaceCountRatio"/>

### Taux de postes de travail en flex {#flex-ratio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```
<PH code="floor:flexRatio"/>

### Taux de postes de travail partagés {#shared-workplaces-ratio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail

*Nom technique:* ```sharedWorkplacesRatio```
<PH code="floor:sharedWorkplacesRatio"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Bâtiment {#building}

Le bâtiment est utilisé pour regrouper les étages

*Nom technique:* ```building```
<PH code="floor:building"/>

### Échelle du plan {#map-scale}

L'échelle permet de calculer en proportion les surfaces réelles et la taille des objets

*Nom technique:* ```mapScale```
<PH code="floor:mapScale"/>

### Structure {#structure}

Une structure définit une forme géométrique qui peut être utilisée pour calibrer et positionner des éléments sur des cartes

*Nom technique:* ```structure```
<PH code="floor:structure"/>


## Entités associées (liste) {#properties-has-many}

### Associations calque d'analyse aux étages {#dimension-floors}

Une association calque d'analyse aux étages permet de définir les calques d'analyse spécifiques pour chaque étage

*Nom technique:* ```dimensionFloors```
<PH code="floor:dimensionFloors"/>

### Associations centre de coût aux étages {#cost-center-floors}

Une association centre de coût aux étages permet de définir les centres de coût spécifiques pour chaque étage

*Nom technique:* ```costCenterFloors```
<PH code="floor:costCenterFloors"/>

### Associations groupe de typologie d'espace aux étages {#room-type-group-floors}

Une association groupe de typologie d'espace aux étages permet de définir les groupes de types d'espaces disponibles dans chaque étage

*Nom technique:* ```roomTypeGroupFloors```
<PH code="floor:roomTypeGroupFloors"/>

### Associations organisation aux étages {#organization-floors}

Une association organisation aux étages permet de définir les organisations responsables de chaque étage

*Nom technique:* ```organizationFloors```
<PH code="floor:organizationFloors"/>

### Associations rôle de contenu aux étages {#content-role-to-floors}

Une association rôle de contenu aux étages permet de définir les permissions d'accès spécifiques aux étages pour un rôle donné

*Nom technique:* ```contentRoleToFloors```
<PH code="floor:contentRoleToFloors"/>

### Associations typologie d'espace aux étages {#room-type-floors}

Une association typologie d'espace aux étages permet de définir les types d'espaces disponibles dans chaque étage

*Nom technique:* ```roomTypeFloors```
<PH code="floor:roomTypeFloors"/>

### Espaces {#rooms}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```rooms```
<PH code="floor:rooms"/>

### Etages inclus dans la configuration de la transformation des exports partenaires {#partner-export-mapping-configuration-to-floors}



*Nom technique:* ```partnerExportMappingConfigurationToFloors```
<PH code="floor:partnerExportMappingConfigurationToFloors"/>

### Points des espaces {#room-points}

Un point des espaces définit les coordonnées géométriques pour dessiner le contour d'un espace

*Nom technique:* ```roomPoints```
<PH code="floor:roomPoints"/>




