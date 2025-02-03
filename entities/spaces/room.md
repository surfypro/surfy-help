# Espace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

<OH code="room"/>






## Propriétés de base {#properties-base}
    
### Capacité hors assises {#capacity}

La capacité declarée peut être utilisé pour définir le nombre de places disponibles dans un espace ou pour connaître le maximum de personnes qu'on peut mettre dans un espace, ce chiffre s'ajoute au nombre de places assises pour donner la capacité totale

*Nom technique:* ```capacity```
<PH code="room:capacity"/>

### Capacité totale {#total-capacity-count}

La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces

*Nom technique:* ```totalCapacityCount```
<PH code="room:totalCapacityCount"/>

### Email utilisé pour la réservation de cet espace {#booking-email}

Ce courriel permet de réserver cette salle via le système de messagerie

*Nom technique:* ```bookingEmail```
<PH code="room:bookingEmail"/>

### Empreinte carbone {#carbon-footprint}

L'empreinte carbone est le nombre de CO2 émis

*Nom technique:* ```carbonFootprint```
<PH code="room:carbonFootprint"/>

### External Id2 {#external-id-2}



*Nom technique:* ```externalId2```
<PH code="room:externalId2"/>

### Information supplémentaire {#info}

Permet de conserver des informations supplémentaires de type texte sur l'espace

*Nom technique:* ```info```
<PH code="room:info"/>

### Nom d'affichage {#pretty-name}

Permet d'avoir un nom d'affichage en plus du nom technique de l'espace, par exemple pour les salles de réunions

*Nom technique:* ```prettyName```
<PH code="room:prettyName"/>

### Nom de l'espace {#name}

Le nom d'espace est utilisé pour le définir et le retrouver facilement.

*Nom technique:* ```name```
<PH code="room:name"/>

### Nombre d'affectations {#people-count}

Le nombre de personnes affectées dans l'espace, soit directement, soit à travers un poste de travail

*Nom technique:* ```peopleCount```
<PH code="room:peopleCount"/>

### Nombre de personnes dans l'espace en temps réel {#live-people-count}

Cette valeur est mise à jour par les capteurs de comptage des personnes présent dans l'espace et fournit le nombre de personnes présent en temps réel dans l'espace

*Nom technique:* ```livePeopleCount```
<PH code="room:livePeopleCount"/>

### Nombre de places assises {#seats-count}

Le nombre total de places assises

*Nom technique:* ```seatsCount```
<PH code="room:seatsCount"/>

### Nombre de postes de travail {#workplaces-count}

Le nombre de postes de travail dans l'espace est calculé automatiquement

*Nom technique:* ```workplacesCount```
<PH code="room:workplacesCount"/>

### Nombre de postes de travail de passage {#transit-workplaces-count}

Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex

*Nom technique:* ```transitWorkplacesCount```
<PH code="room:transitWorkplacesCount"/>

### Nombre de postes de travail partagés {#shared-workplaces-count}

Nombre de postes de travail partagés par au moins 2 personnes

*Nom technique:* ```sharedWorkplacesCount```
<PH code="room:sharedWorkplacesCount"/>

### Nombre de postes flex {#flex-workplaces-count}

Nombre de postes flex dans l'espace

*Nom technique:* ```flexWorkplacesCount```
<PH code="room:flexWorkplacesCount"/>

### Nombre de postes libres {#free-workplaces-count}

Nombre de postes libres dans l'espace

*Nom technique:* ```freeWorkplacesCount```
<PH code="room:freeWorkplacesCount"/>

### Nombre total d'affectations {#total-people-count}

Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail

*Nom technique:* ```totalPeopleCount```
<PH code="room:totalPeopleCount"/>

### Numéro de cylindre {#key-cylinder-code}

Le numéro de cylindre permet de définir le numéro de cylindre de la serrure de la porte de l'espace ou un élement en relation avec l'accès physique de l'espace

*Nom technique:* ```keyCylinderCode```
<PH code="room:keyCylinderCode"/>

### Périmètre {#perimeter}

Le périmètre d'espace représente son contour

*Nom technique:* ```perimeter```
<PH code="room:perimeter"/>

### Photo de l'espace {#picture}

La photo de l'espace permet de le visualiser facilement

*Nom technique:* ```picture```
<PH code="room:picture"/>

### Ratio d'occupation {#people-ratio}

Le ratio d'occupation est le nombre de métres carrés de l'espace divisé par le nombre de personnes affectées aux espaces, soit directement, soit via un poste de travail , cette valeur est calculée

*Nom technique:* ```peopleRatio```
<PH code="room:peopleRatio"/>

### Ratio par poste de travail {#workplaces-ratio}

Le ratio par poste de travail est le nombre de métres carrés de l'espace divisé par le nombre de postes de travail, cette valeur est calculée automatiquement

*Nom technique:* ```workplacesRatio```
<PH code="room:workplacesRatio"/>

### Surface {#area}

La surface qualifiée au sol pour cet espace

*Nom technique:* ```area```
<PH code="room:area"/>

### Taux d'occupation {#occupancy-rate}

Permet de connaître le taux d'occupation des postes de travail, c'est le nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```occupancyRate```
<PH code="room:occupancyRate"/>

### Taux de foisonnement {#expansion-ratio}

Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisés par le nombre de postes de travail

*Nom technique:* ```expansionRatio```
<PH code="room:expansionRatio"/>

### Taux de places assises par affectations {#seats-people-ratio}

Le nombre de places assises par personnes affectées

*Nom technique:* ```seatsPeopleRatio```
<PH code="room:seatsPeopleRatio"/>

### Taux de places assises par postes de travail {#total-capacity-workplace-count-ratio}

Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail

*Nom technique:* ```totalCapacityWorkplaceCountRatio```
<PH code="room:totalCapacityWorkplaceCountRatio"/>

### Taux de postes de travail en flex {#flex-ratio}

Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail

*Nom technique:* ```flexRatio```
<PH code="room:flexRatio"/>

### Taux de postes de travail partagés {#shared-workplaces-ratio}

Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail de l'espace

*Nom technique:* ```sharedWorkplacesRatio```
<PH code="room:sharedWorkplacesRatio"/>

### Text Anchor {#text-anchor}



*Nom technique:* ```textAnchor```
<PH code="room:textAnchor"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Centre de coût {#cost-center}

Permet de connaitre à quel centre de coût associer l'espace quand il s'agit de gérer la refacturation au centre de coût par espace

*Nom technique:* ```costCenter```
<PH code="room:costCenter"/>

### Connecteur d'espace {#room-connector}

Les connecteurs d'espaces permettent de créer un lien entre plusieurs espaces dans des étages différents

*Nom technique:* ```roomConnector```
<PH code="room:roomConnector"/>

### Étage {#floor}

Les étages represent un plateau de travail ou un niveau d'un bâtiment

*Nom technique:* ```floor```
<PH code="room:floor"/>

### État d'occupation {#occupancy-status}

L'état d'occupation permet d'identifier l'état en temps réel d'un espace ou d'un poste de travail, comme par exemple s'il est libre, occupé ou squaté, l'état d'occupation est mis à jour par les objets connectés présent dans l'espace

*Nom technique:* ```occupancyStatus```
<PH code="room:occupancyStatus"/>

### Organisation {#organization}

Les organisations ont deux niveaux hiérarchiques : les directions et les services, et permettent de définir la structure organisationnelle de l'entreprise

*Nom technique:* ```organization```
<PH code="room:organization"/>

### Type de distribution des coûts {#distribution-cost-type}

Permet de déterminer le mode de calcul de la clé de répartition des coûts

*Nom technique:* ```distributionCostType```
<PH code="room:distributionCostType"/>

### Typologie d'espace {#room-type}



*Nom technique:* ```roomType```
<PH code="room:roomType"/>


## Entités associées (liste) {#properties-has-many}

### Affectations d'espace {#room-affectations}

Permet d'affecter une personne à un espace simple

*Nom technique:* ```roomAffectations```
<PH code="room:roomAffectations"/>

### Associations entre un point et un espace {#room-point-rooms}

L'association entre un point et un espace permet de conserver l'ordre des points dans un espace afin de constituer un polyon

*Nom technique:* ```roomPointRooms```
<PH code="room:roomPointRooms"/>

### Calques d'analyse des espaces {#dimension-rooms}



*Nom technique:* ```dimensionRooms```
<PH code="room:dimensionRooms"/>

### Objets {#items}



*Nom technique:* ```items```
<PH code="room:items"/>

### Postes de travail {#workplaces}



*Nom technique:* ```workplaces```
<PH code="room:workplaces"/>

### Réservations à l'espace des personnes {#person-to-room-bookings}

Les réservations aux espaces des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

*Nom technique:* ```personToRoomBookings```
<PH code="room:personToRoomBookings"/>




