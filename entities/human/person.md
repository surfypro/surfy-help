# Personne
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="person"/>


## Propriétés de base {#properties-base}

### Badge RIE {#badge-restaurant}

La référence du badge du RIE ou du restaurant

*Nom technique:* ```badgeRestaurant```
<PH code="person:badgeRestaurant"/>

### Commentaire {#info}

Commentaire sur la personne permettant de conserver des informations supplémentaires ou diverses

*Nom technique:* ```info```
<PH code="person:info"/>

### Date d'entrée {#start-date}

La date d'entrée de la personne

*Nom technique:* ```startDate```
<PH code="person:startDate"/>

### Date de sortie {#end-date}

La date de sortie de la personne

*Nom technique:* ```endDate```
<PH code="person:endDate"/>

### Email {#email}

Le courriel de la personne

*Nom technique:* ```email```
<PH code="person:email"/>

### Immatriculation {#registration-number}

Le numéro d'immatriculation de la personne

*Nom technique:* ```registrationNumber```
<PH code="person:registrationNumber"/>

### Matricule {#code}

Matricule RH de la personne

*Nom technique:* ```code```
<PH code="person:code"/>

### Nom complet {#fullname}

Le nom complet de la personne permettant de le retrouver plus facilement

*Nom technique:* ```fullname```
<PH code="person:fullname"/>

### Nom de famille {#lastname}

Le nom de famille de la personne

*Nom technique:* ```lastname```
<PH code="person:lastname"/>

### Non Affectable {#not-affectable}

La personne ne peut pas être affectée à un poste de travail, un espace, un bâtiment ou un calque d'affectation

*Nom technique:* ```notAffectable```
<PH code="person:notAffectable"/>

### Numéro de badge {#badge-number}

Le numéro de badge de la personne

*Nom technique:* ```badgeNumber```
<PH code="person:badgeNumber"/>

### Numéro de casier {#box-number}

Le numéro de casier de la personne

*Nom technique:* ```boxNumber```
<PH code="person:boxNumber"/>

### Photo de profil {#picture}

La photo de la personne pour l'avoir en trombinoscope ou dans la recherche

*Nom technique:* ```picture```
<PH code="person:picture"/>

### Prénom {#firstname}

Le prénom de la personne

*Nom technique:* ```firstname```
<PH code="person:firstname"/>

### Référence écran {#monitor-reference}

La référence de l'écran peut êre utilisée pour enregistrer la référence de l'écran associé à cette personne

*Nom technique:* ```monitorReference```
<PH code="person:monitorReference"/>

### Référence ordinateur {#computer-reference}

La référence de l'ordinateur peut êre utilisée pour enregistrer la référence de l'ordinateur associé à cette personne

*Nom technique:* ```computerReference```
<PH code="person:computerReference"/>

### Téléphone fixe {#telephone}

Le téléphone fixe de la personne

*Nom technique:* ```telephone```
<PH code="person:telephone"/>

### Téléphone portable {#cellphone}

Le téléphone portable de la personne

*Nom technique:* ```cellphone```
<PH code="person:cellphone"/>

### Titre {#title}

Le titre de la personne

*Nom technique:* ```title```
<PH code="person:title"/>


## Entités associées (unique) {#properties-belongs-to}

### Centre de coût {#cost-center}

Le centre de coût permet de repartir les espaces dynamiquement pour la refacturation

*Nom technique:* ```costCenter```
<PH code="person:costCenter"/>

### Entreprise prestataire {#person-company}

L'entreprise prestataire permet de conserver les informations de l'entreprise d'un prestataire de service pour connaître par exemple le nombres de postes ou l'espace occupé par ce dernier, ou savoir quels sont les types équipements ou type d'espaces qu'il a en gestion

*Nom technique:* ```personCompany```
<PH code="person:personCompany"/>

### Genre de la personne {#person-gender}



*Nom technique:* ```personGender```
<PH code="person:personGender"/>

### L'organisation de la personne {#organization}

L'organisation de rattachement de la personne

*Nom technique:* ```organization```
<PH code="person:organization"/>

### Profil de sécurité {#person-security-profile}

Permet de déterminer le profil de sécurité des personnes pour la gestion d'incidents

*Nom technique:* ```personSecurityProfile```
<PH code="person:personSecurityProfile"/>

### Statut {#person-state}

Permet de détérminer le type de contrat de la personne

*Nom technique:* ```personState```
<PH code="person:personState"/>


## Entités associées (liste) {#properties-has-many}

### Affectations au bâtiment {#person-to-buildings}



*Nom technique:* ```personToBuildings```
<PH code="person:personToBuildings"/>

### Affectations au poste de travail {#workplace-affectations}



*Nom technique:* ```workplaceAffectations```
<PH code="person:workplaceAffectations"/>

### Affectations aux calques d'affectation {#dimension-to-people}



*Nom technique:* ```dimensionToPeople```
<PH code="person:dimensionToPeople"/>

### Affectations d'espace {#room-affectations}



*Nom technique:* ```roomAffectations```
<PH code="person:roomAffectations"/>

### Associations d'objet à personne {#item-to-people}



*Nom technique:* ```itemToPeople```
<PH code="person:itemToPeople"/>

### Emplacements de travail des personnes {#person-working-locations}

Un emplacement de travail des personnes définie le lieu de travail des personnes

*Nom technique:* ```personWorkingLocations```
<PH code="person:personWorkingLocations"/>

### Relations depuis cette personne {#person-to-person-sources}

Les relations des personnes depuis cette personne

*Nom technique:* ```personToPersonSources```
<PH code="person:personToPersonSources"/>

### Relations vers cette personne {#person-to-person-targets}

Les relations des personnes vers cette personne

*Nom technique:* ```personToPersonTargets```
<PH code="person:personToPersonTargets"/>

### Réservations à l'espace des personnes {#person-to-room-bookings}

Les réservations aux espaces des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToRoomBookings```
<PH code="person:personToRoomBookings"/>

### Réservations au calque d'affectation des personnes {#person-to-dimension-bookings}

Les réservations aux calques d'affectations des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToDimensionBookings```
<PH code="person:personToDimensionBookings"/>

### Réservations au poste de travail des personnes {#person-to-workplace-bookings}

Les réservations des postes de travail des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToWorkplaceBookings```
<PH code="person:personToWorkplaceBookings"/>

### Utilisateurs de l'entreprise {#user-companies}



*Nom technique:* ```userCompanies```
<PH code="person:userCompanies"/>




