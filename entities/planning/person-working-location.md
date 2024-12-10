# Emplacement de travail des personnes
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un emplacement de travail des personnes définie le lieu de travail des personnes

<OH code="personWorkingLocation"/>


## Propriétés de base {#properties-base}

### Date {#date}



*Nom technique:* ```date```
<PH code="personWorkingLocation:date"/>

### Day Slot Type {#day-slot-type}



*Nom technique:* ```daySlotType```
<PH code="personWorkingLocation:daySlotType"/>


## Entités associées (unique) {#properties-belongs-to}

###  Working Location {#working-location}



*Nom technique:* ```workingLocation```
<PH code="personWorkingLocation:workingLocation"/>

### Personne {#person}



*Nom technique:* ```person```
<PH code="personWorkingLocation:person"/>


## Entités associées (liste) {#properties-has-many}

### Réservations à l'espace des personnes {#person-to-room-bookings}

Les réservations aux espaces des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToRoomBookings```
<PH code="personWorkingLocation:personToRoomBookings"/>

### Réservations au calque d'affectation des personnes {#person-to-dimension-bookings}

Les réservations aux calques d'affectations des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToDimensionBookings```
<PH code="personWorkingLocation:personToDimensionBookings"/>

### Réservations au poste de travail des personnes {#person-to-workplace-bookings}

Les réservations des postes de travail des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToWorkplaceBookings```
<PH code="personWorkingLocation:personToWorkplaceBookings"/>




