---
search_rank: 0.5
sidebar_key: company
sidebar_label: "Entreprise"
---

# Entreprise
<ObjectTypeMenuBreadcrumb code="company" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Une entreprise représente une organisation ou une société qui utilise la plateforme Surfy pour gérer ses espaces de travail et ses ressources

<OH code="company"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom de l'entreprise {#name}

Nom de l'entreprise

*Nom technique:* ```name```
<PH code="company:name"/>

    


## Propriétés de base {#properties-base}
    
### Activer la réservation par bâtiment quand toutes les dimensions sont surchargées {#enable-building-booking-when-all-dimensions-are-crowded}

Permet d'activer la réservation directe par bâtiment et étage lorsque toutes les dimensions sont surchargées, offrant une alternative de réservation quand aucune zone n'est disponible

*Nom technique:* ```enableBuildingBookingWhenAllDimensionsAreCrowded```
<PH code="company:enableBuildingBookingWhenAllDimensionsAreCrowded"/>

### Activer la surcharge des dimensions pour la réservation {#enable-crowded-dimension-for-booking}

Permet d'activer la fonctionnalité de surcharge des dimensions pour les réservations, permettant de définir des seuils d'occupation au-delà desquels un espace est considéré comme surchargé et active la priorité sur les affectations des quartiers

*Nom technique:* ```enableCrowdedDimensionForBooking```
<PH code="company:enableCrowdedDimensionForBooking"/>

### Activer le pathfinding {#enable-pathfinding}

Activer la fonctionnalité de recherche de chemin

*Nom technique:* ```enablePathfinding```
<PH code="company:enablePathfinding"/>

### Autoriser Surfy à suivre l'activité des utilisateurs pour améliorer l'expérience utilisateur {#track-user-activity}

Autoriser Surfy à suivre l'activité des utilisateurs pour améliorer l'expérience utilisateur

*Nom technique:* ```trackUserActivity```
<PH code="company:trackUserActivity"/>

### Icône {#icon-path}

Le logo de l'entreprise en carré

*Nom technique:* ```iconPath```
<PH code="company:iconPath"/>

### Images proxy {#proxy-images}

Activer le proxy pour les images

*Nom technique:* ```proxyImages```
<PH code="company:proxyImages"/>

### Logo {#logo-path}

Le chemin du logo de votre entreprise

*Nom technique:* ```logoPath```
<PH code="company:logoPath"/>

### Nombre de jours de planification {#planning-number-of-days}

Nombre de jours pour la planification

*Nom technique:* ```planningNumberOfDays```
<PH code="company:planningNumberOfDays"/>

### Nombre de jours de travail par semaine {#working-days-count}

Le nombre de jours de travail par semaine peut être 5 pour les jours ouvrés, 6 incluant le samedi et 7 incluant le dimanche

*Nom technique:* ```workingDaysCount```
<PH code="company:workingDaysCount"/>

### Plage de confirmation de réservation de poste de travail {#workplace-booking-confirmation-range}

Plage horaire pendant laquelle les utilisateurs peuvent confirmer leurs réservations de postes de travail. Format: HH:MM-HH:MM (ex: 06:00-10:30). Ne rien mettre dans ce champ pour ne pas activer la confirmation de réservation de poste de travail

*Nom technique:* ```workplaceBookingConfirmationRange```
<PH code="company:workplaceBookingConfirmationRange"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Type d'entreprise {#company-type}

Un type d'entreprise permet de catégoriser les entreprises selon leur usage

*Nom technique:* ```companyType```
<PH code="company:companyType"/>


## Entités associées (liste) {#properties-has-many}

### Bâtiments {#buildings}

Le bâtiment est utilisé pour regrouper les étages

*Nom technique:* ```buildings```
<PH code="company:buildings"/>

### Emplacements de travail de l'entreprise {#company-working-locations}

Un emplacement de travail de l'entreprise permet de personnaliser pour une entreprise les lieux de travail des personnes pour la réservation

*Nom technique:* ```companyWorkingLocations```
<PH code="company:companyWorkingLocations"/>

### Types de bâtiments {#building-types}

Un type de bâtiment permet de catégoriser les bâtiments selon leur usage

*Nom technique:* ```buildingTypes```
<PH code="company:buildingTypes"/>

### Utilisateurs de l'entreprise {#user-companies}

Les utilisateurs de l'entreprise ont accès à la plateforme Surfy de leur entreprise

*Nom technique:* ```userCompanies```
<PH code="company:userCompanies"/>




