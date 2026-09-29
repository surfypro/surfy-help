---
search_rank: 0.5
sidebar_key: person-to-room-booking
sidebar_label: "Réservation à l'espace des personnes"
---

# Réservation à l'espace des personnes
<ObjectTypeMenuBreadcrumb code="personToRoomBooking" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Les réservations aux espaces des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

<OH code="personToRoomBooking"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Début de la réservation {#start-datetime}

La date et l'heure de début de la réservation

*Nom technique:* ```startDatetime```
<PH code="personToRoomBooking:startDatetime"/>

### Fin de la réservation {#end-datetime}

La date et l'heure de fin de la réservation

*Nom technique:* ```endDatetime```
<PH code="personToRoomBooking:endDatetime"/>

    


## Propriétés de base {#properties-base}
    
### Avertissement e-mail de confirmation envoyé le {#email-confirmation-warning-notification-sent-at}

La date et l'heure d'envoi de l'avertissement e-mail avant annulation de la réservation non confirmée

*Nom technique:* ```emailConfirmationWarningNotificationSentAt```
<PH code="personToRoomBooking:emailConfirmationWarningNotificationSentAt"/>

### Espace confirmé le {#room-has-been-confirmed-at}

Date et heure de confirmation de présence pour la réservation d'espace (parking)

*Nom technique:* ```roomHasBeenConfirmedAt```
<PH code="personToRoomBooking:roomHasBeenConfirmedAt"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Emplacement de travail des personnes {#person-working-location}

Un emplacement de travail des personnes définie le lieu de travail des personnes

*Nom technique:* ```personWorkingLocation```
<PH code="personToRoomBooking:personWorkingLocation"/>

### Espace {#room}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```room```
<PH code="personToRoomBooking:room"/>

### Personne {#person}

Ce sont les personnes entrées dans la base de données de Surfy

*Nom technique:* ```person```
<PH code="personToRoomBooking:person"/>





