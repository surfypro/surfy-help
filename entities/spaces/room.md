# Espace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



## Propriétés de base

### Capacité hors assises [capacity] {#capacity}
        
La capacité declarée peut être utilisé pour définir le nombre de places disponibles dans un espace ou pour connaître le maximum de personnes qu'on peut mettre dans un espace, ce chiffre s'ajoute au nombre de places assises pour donner la capacité totale
### Capacité totale [totalCapacityCount] {#totalCapacityCount}
        
La capacité totale de places est la somme du nombre de places assises et de la capacité hors assises au niveau des espaces
### Email utilisé pour la réservation de cet espace [bookingEmail] {#bookingEmail}
        
Ce courriel permet de réserver cette salle via le système de messagerie
### Empreinte carbone [carbonFootprint] {#carbonFootprint}
        
L'empreinte carbone est le nombre de CO2 émis
### External Id2 [externalId2] {#externalId2}
        

### Information supplémentaire [info] {#info}
        
Permet de conserver des informations supplémentaires de type texte sur l'espace
### Nom de l'espace [name] {#name}
        
Le nom d'espace est utilisé pour le définir et le retrouver facilement.
### Nombre d'affectations [peopleCount] {#peopleCount}
        
Le nombre de personnes affectées dans l'espace, soit directement, soit à travers un poste de travail
### Nombre de personnes dans l'espace en temps réel [livePeopleCount] {#livePeopleCount}
        
Cette valeur est mise à jour par les capteurs de comptage des personnes présent dans l'espace et fournit le nombre de personnes présent en temps réel dans l'espace
### Nombre de places assises [seatsCount] {#seatsCount}
        
Le nombre total de places assises
### Nombre de postes de travail [workplacesCount] {#workplacesCount}
        
Le nombre de postes de travail dans l'espace est calculé automatiquement
### Nombre de postes de travail de passage [transitWorkplacesCount] {#transitWorkplacesCount}
        
Nombre de postes de travail de passage, ces postes ne sont pas comptabilisés dans les postes libres et ne sont pas en flex
### Nombre de postes de travail partagés [sharedWorkplacesCount] {#sharedWorkplacesCount}
        
Nombre de postes de travail partagés par au moins 2 personnes
### Nombre de postes flex [flexWorkplacesCount] {#flexWorkplacesCount}
        
Nombre de postes flex dans l'espace
### Nombre de postes libres [freeWorkplacesCount] {#freeWorkplacesCount}
        
Nombre de postes libres dans l'espace
### Nombre total d'affectations [totalPeopleCount] {#totalPeopleCount}
        
Le nombre total de personnes affectées, soit directement affécté aux espaces, soit à travers un poste de travail
### Numéro de cylindre [keyCylinderCode] {#keyCylinderCode}
        
Le numéro de cylindre permet de définir le numéro de cylindre de la serrure de la porte de l'espace ou un élement en relation avec l'accès physique de l'espace
### Périmètre [perimeter] {#perimeter}
        
Le périmètre d'espace représente son contour
### Photo de l'espace [picture] {#picture}
        
La photo de l'espace permet de le visualiser facilement
### Ratio d'occupation [peopleRatio] {#peopleRatio}
        
Le ratio d'occupation est le nombre de métres carrés de l'espace divisé par le nombre de personnes affectées aux espaces, soit directement, soit via un poste de travail , cette valeur est calculée
### Ratio par poste de travail [workplacesRatio] {#workplacesRatio}
        
Le ratio par poste de travail est le nombre de métres carrés de l'espace divisé par le nombre de postes de travail, cette valeur est calculée automatiquement
### Surface [area] {#area}
        
La surface qualifiée au sol pour cet espace
### Taux d'occupation [occupancyRate] {#occupancyRate}
        
Permet de connaître le taux d'usage des postes de travail, c'est le nombre de personnes affectées divisé par le nombre de postes de travail
### Taux de foisonnement [expansionRatio] {#expansionRatio}
        
Permet de connaître le taux d'usage des postes de travail, c'est l'inverse du nombre de personnes affectées divisé par le nombre de postes de travail
### Taux de places assises par affectations [seatsPeopleRatio] {#seatsPeopleRatio}
        
Le nombre de places assises par personnes affectées
### Taux de places assises par postes de travail [totalCapacityWorkplaceCountRatio] {#totalCapacityWorkplaceCountRatio}
        
Le taux de places par postes de travail est la capacité totale des espaces divisé par le nombre de postes de travail, cela permet de comprendre le taux de places en fonction du nombre de postes de travail
### Taux de postes de travail en flex [flexRatio] {#flexRatio}
        
Le taux de poste de travail en flex est calculé en divisant le nombre de postes de travail en flex par le nombre total de postes de travail
### Taux de postes de travail partagés [sharedWorkplacesRatio] {#sharedWorkplacesRatio}
        
Taux de postes de travail partagés par au moins 2 personnes par rapport à l'ensemble des postes de travail de l'espace
### Text Anchor [textAnchor] {#textAnchor}
        


## Entités associées (unique)

### Centre de coût [costCenter] {#costCenter}
        
Permet de connaitre à quel centre de coût associer l'espace quand il s'agit de gérer la refacturation au centre de coût par espace
### Connecteur d'espace [roomConnector] {#roomConnector}
        
Les connecteurs d'espaces permettent de créer un lien entre plusieurs espaces dans des étages différents
### Étage [floor] {#floor}
        

### État d'occupation [occupancyStatus] {#occupancyStatus}
        
L'état d'occupation permet d'identifier l'état en temps réel d'un espace ou d'un poste de travail, comme par exemple s'il est libre, occupé ou squaté, l'état d'occupation est mis à jour par les objets connectés présent dans l'espace
### Organisation [organization] {#organization}
        

### Type de distribution des coûts [distributionCostType] {#distributionCostType}
        
Permet de déterminer le mode de calcul de la clé de répartition des coûts
### Typologie d'espace [roomType] {#roomType}
        


## Entités associées (liste)

### Affectations d'espace [roomAffectations] {#roomAffectations}
        

### Associations entre un point et un espace [roomPointRooms] {#roomPointRooms}
        
L'association entre un point et un espace permet de conserver l'ordre des points dans un espace afin de constituer un polyon
### Calques d'analyse des espaces [dimensionRooms] {#dimensionRooms}
        

### Objets [items] {#items}
        

### Postes de travail [workplaces] {#workplaces}
        

### Réservations à l'espace des personnes [personToRoomBookings] {#personToRoomBookings}
        
Les réservations aux espaces des personnes sont enregistrés et disponible avec les dates de début et fin de réservation



