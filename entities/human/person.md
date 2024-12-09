# Personne
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Propriétés de base {#properties-base}

### Badge RIE {#badgeRestaurant}

La référence du badge du RIE ou du restaurant

*Nom technique:* ```badgeRestaurant```

### Commentaire {#info}

Commentaire sur la personne permettant de conserver des informations supplémentaires ou diverses

*Nom technique:* ```info```

### Date d'entrée {#startDate}

La date d'entrée de la personne

*Nom technique:* ```startDate```

### Date de sortie {#endDate}

La date de sortie de la personne

*Nom technique:* ```endDate```

### Email {#email}

Le courriel de la personne

*Nom technique:* ```email```

### Immatriculation {#registrationNumber}

Le numéro d'immatriculation de la personne

*Nom technique:* ```registrationNumber```

### Matricule {#code}

Matricule RH de la personne

*Nom technique:* ```code```

### Nom complet {#fullname}

Le nom complet de la personne permettant de le retrouver plus facilement

*Nom technique:* ```fullname```

### Nom de famille {#lastname}

Le nom de famille de la personne

*Nom technique:* ```lastname```

### Non Affectable {#notAffectable}

La personne ne peut pas être affectée à un poste de travail, un espace, un bâtiment ou un calque d'affectation

*Nom technique:* ```notAffectable```

### Numéro de badge {#badgeNumber}

Le numéro de badge de la personne

*Nom technique:* ```badgeNumber```

### Numéro de casier {#boxNumber}

Le numéro de casier de la personne

*Nom technique:* ```boxNumber```

### Photo de profil {#picture}

La photo de la personne pour l'avoir en trombinoscope ou dans la recherche

*Nom technique:* ```picture```

### Prénom {#firstname}

Le prénom de la personne

*Nom technique:* ```firstname```

### Référence écran {#monitorReference}

La référence de l'écran peut êre utilisée pour enregistrer la référence de l'écran associé à cette personne

*Nom technique:* ```monitorReference```

### Référence ordinateur {#computerReference}

La référence de l'ordinateur peut êre utilisée pour enregistrer la référence de l'ordinateur associé à cette personne

*Nom technique:* ```computerReference```

### Téléphone fixe {#telephone}

Le téléphone fixe de la personne

*Nom technique:* ```telephone```

### Téléphone portable {#cellphone}

Le téléphone portable de la personne

*Nom technique:* ```cellphone```

### Titre {#title}

Le titre de la personne

*Nom technique:* ```title```


## Entités associées (unique) {#properties-belongs-to}

### Centre de coût {#costCenter}

Le centre de coût permet de repartir les espaces dynamiquement pour la refacturation

*Nom technique:* ```costCenter```

### Entreprise prestataire {#personCompany}

L'entreprise prestataire permet de conserver les informations de l'entreprise d'un prestataire de service pour connaître par exemple le nombres de postes ou l'espace occupé par ce dernier, ou savoir quels sont les types équipements ou type d'espaces qu'il a en gestion

*Nom technique:* ```personCompany```

### Genre de la personne {#personGender}



*Nom technique:* ```personGender```

### L'organisation de la personne {#organization}

L'organisation de rattachement de la personne

*Nom technique:* ```organization```

### Profil de sécurité {#personSecurityProfile}

Permet de déterminer le profil de sécurité des personnes pour la gestion d'incidents

*Nom technique:* ```personSecurityProfile```

### Statut {#personState}

Permet de détérminer le type de contrat de la personne

*Nom technique:* ```personState```


## Entités associées (liste) {#properties-has-many}

### Affectations au bâtiment {#personToBuildings}



*Nom technique:* ```personToBuildings```

### Affectations au poste de travail {#workplaceAffectations}



*Nom technique:* ```workplaceAffectations```

### Affectations aux calques d'affectation {#dimensionToPeople}



*Nom technique:* ```dimensionToPeople```

### Affectations d'espace {#roomAffectations}



*Nom technique:* ```roomAffectations```

### Associations d'objet à personne {#itemToPeople}



*Nom technique:* ```itemToPeople```

### Emplacements de travail des personnes {#personWorkingLocations}

Un emplacement de travail des personnes définie le lieu de travail des personnes

*Nom technique:* ```personWorkingLocations```

### Relations depuis cette personne {#personToPersonSources}

Les relations des personnes depuis cette personne

*Nom technique:* ```personToPersonSources```

### Relations vers cette personne {#personToPersonTargets}

Les relations des personnes vers cette personne

*Nom technique:* ```personToPersonTargets```

### Réservations à l'espace des personnes {#personToRoomBookings}

Les réservations aux espaces des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToRoomBookings```

### Réservations au calque d'affectation des personnes {#personToDimensionBookings}

Les réservations aux calques d'affectations des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToDimensionBookings```

### Réservations au poste de travail des personnes {#personToWorkplaceBookings}

Les réservations des postes de travail des personnes sont enregistrés et disponible avec les dates de début et fin de réservation

*Nom technique:* ```personToWorkplaceBookings```

### Utilisateurs de l'entreprise {#userCompanies}



*Nom technique:* ```userCompanies```




