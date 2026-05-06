---
search_rank: 0.5
sidebar_key: person
sidebar_label: "Personne"
---

# Personne
<ObjectTypeMenuBreadcrumb code="person" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Ce sont les personnes entrées dans la base de données de Surfy

<OH code="person"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom de famille {#lastname}

Le nom de famille de la personne

*Nom technique:* ```lastname```
<PH code="person:lastname"/>

### Prénom {#firstname}

Le prénom de la personne

*Nom technique:* ```firstname```
<PH code="person:firstname"/>

    


## Propriétés de base {#properties-base}
    
### Badge RIE {#badge-restaurant}

La référence du badge du RIE ou du restaurant d'entreprise

*Nom technique:* ```badgeRestaurant```
<PH code="person:badgeRestaurant"/>

### Commentaire {#info}

Commentaire sur la personne permettant de conserver des informations supplémentaires ou diverses

*Nom technique:* ```info```
<PH code="person:info"/>

### Date d'entrée {#start-date}

La date d'entrée de la personne dans l'entreprise

*Nom technique:* ```startDate```
<PH code="person:startDate"/>

### Date de fin de la non affectabilité {#not-affectable-end-date}

La date de fin du comportement non affectable de la personne

*Nom technique:* ```notAffectableEndDate```
<PH code="person:notAffectableEndDate"/>

### Date de sortie {#end-date}

La date de sortie de la personne de l'entreprise

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

Le matricule RH de la personne

*Nom technique:* ```code```
<PH code="person:code"/>

### Nom complet {#fullname}

Le nom complet de la personne permettant de le retrouver plus facilement

*Nom technique:* ```fullname```
<PH code="person:fullname"/>

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

### Référence écran {#monitor-reference}

La référence de l'écran informatique associé à cette personne

*Nom technique:* ```monitorReference```
<PH code="person:monitorReference"/>

### Référence ordinateur {#computer-reference}

La référence de l'ordinateur associé à cette personne

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

Le centre de coût permet de répartir les espaces dynamiquement pour la refacturation

*Nom technique:* ```costCenter```
<PH code="person:costCenter"/>

### Entreprise prestataire {#person-company}

L'entreprise prestataire permet de gérer le personnel prestataire par entreprise d'appartenance

*Nom technique:* ```personCompany```
<PH code="person:personCompany"/>

### Genre de la personne {#person-gender}

Permet de dénombrer chaque genre, par exemple pour la gestion des sanitaires

*Nom technique:* ```personGender```
<PH code="person:personGender"/>

### L'organisation de la personne {#organization}

Le Service de rattachement de la personne

*Nom technique:* ```organization```
<PH code="person:organization"/>

### Profil de sécurité {#person-security-profile}

Permet d'indiquer le profil de sécurité de la personne pour la gestion de la sécurité

*Nom technique:* ```personSecurityProfile```
<PH code="person:personSecurityProfile"/>

### Statut {#person-state}

Permet d'indiquer le type de contrat de la personne vis à vis de l'entreprise

*Nom technique:* ```personState```
<PH code="person:personState"/>

### Type de personne {#person-type}

Indique si la personne est un collaborateur (employé interne) ou un invité (externe, visiteur)

*Nom technique:* ```personType```
<PH code="person:personType"/>


## Entités associées (liste) {#properties-has-many}

### Affectations au bâtiment {#person-to-buildings}

Permet d'attribuer une personne à un bâtiment, sans information supplémentaire. L'affectation peut être comptabilisée, ou non.

*Nom technique:* ```personToBuildings```
<PH code="person:personToBuildings"/>

### Affectations au poste de travail {#workplace-affectations}

Permet d'attribuer un poste de travail fixe à une personne

*Nom technique:* ```workplaceAffectations```
<PH code="person:workplaceAffectations"/>

### Affectations aux calques d'affectation {#dimension-to-people}

Permet d'affecter une personne à un quartier, territoire ou village

*Nom technique:* ```dimensionToPeople```
<PH code="person:dimensionToPeople"/>

### Affectations d'espace {#room-affectations}

Permet d'affecter une personne à un espace simple

*Nom technique:* ```roomAffectations```
<PH code="person:roomAffectations"/>

### Affectations véhicules {#person-to-vehicles}

Permet d'associer une personne à un ou plusieurs véhicules

*Nom technique:* ```personToVehicles```
<PH code="person:personToVehicles"/>

### Associations d'objet à personne {#item-to-people}

Permet d'associer un objet à une personne (siège ergonomique, casier)

*Nom technique:* ```itemToPeople```
<PH code="person:itemToPeople"/>

### Emplacements de travail des personnes {#person-working-locations}

Un emplacement de travail des personnes définie le lieu de travail des personnes

*Nom technique:* ```personWorkingLocations```
<PH code="person:personWorkingLocations"/>

### Relations depuis cette personne {#person-to-person-sources}

Permet de connaitre la relation descendante entre deux personnes, par exemple la relation hiérarchique

*Nom technique:* ```personToPersonSources```
<PH code="person:personToPersonSources"/>

### Relations vers cette personne {#person-to-person-targets}

Permet de connaitre la relation ascendante entre deux personnes, par exemple la relation hiérarchique

*Nom technique:* ```personToPersonTargets```
<PH code="person:personToPersonTargets"/>

### Réservations à l'espace des personnes {#person-to-room-bookings}

Les réservations aux espaces des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

*Nom technique:* ```personToRoomBookings```
<PH code="person:personToRoomBookings"/>

### Réservations au calque d'affectation des personnes {#person-to-dimension-bookings}

Les réservations aux calques d'affectation des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

*Nom technique:* ```personToDimensionBookings```
<PH code="person:personToDimensionBookings"/>

### Réservations au poste de travail des personnes {#person-to-workplace-bookings}

Les réservations des postes de travail des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

*Nom technique:* ```personToWorkplaceBookings```
<PH code="person:personToWorkplaceBookings"/>

### Utilisateurs de l'entreprise {#user-companies}

Les utilisateurs de l'entreprise ont accès à la plateforme Surfy de leur entreprise

*Nom technique:* ```userCompanies```
<PH code="person:userCompanies"/>




