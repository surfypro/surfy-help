---
search_rank: 0.5
sidebar_key: workplace
sidebar_label: "Poste de travail"
---

# Poste de travail
<ObjectTypeMenuBreadcrumb code="workplace" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="workplace"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Position {#position}

La position du poste de travail dans l'espace

*Nom technique:* ```position```
<PH code="workplace:position"/>

### Rotation {#rotation}

L'angle de rotation du poste de travail dans l'espace

*Nom technique:* ```rotation```
<PH code="workplace:rotation"/>

    


## Propriétés de base {#properties-base}
    
### Commentaire {#comment}

Une information supplémentaire sur le poste de travail

*Nom technique:* ```comment```
<PH code="workplace:comment"/>

### Est de passage ? {#is-transit}

Si ce poste est de passage, ce poste sera exclu des postes de travail libres sans être réservable en flex, un poste de passage permet d'avoir un poste de travail disponible pour tout ceux qui souhaitent l'utiliser sans être inclus dans un système de réservation

*Nom technique:* ```isTransit```
<PH code="workplace:isTransit"/>

### Est en flex ? {#is-flex}

Si ce poste est utilisé en mode Flex

*Nom technique:* ```isFlex```
<PH code="workplace:isFlex"/>

### Est partagé ? {#is-shared}

Si ce poste est partagé par plusieurs personnes, ce champ automatique est validé dès qu'il y a au moins 2 affectations sur le poste de travail

*Nom technique:* ```isShared```
<PH code="workplace:isShared"/>

### Est réservable ? {#is-bookable}

Si ce poste de travail est reservable dans un système de réservation

*Nom technique:* ```isBookable```
<PH code="workplace:isBookable"/>

### Nom du poste de travail {#name}

Le nom du poste de travail est utilisé pour l'identifier plus simplement

*Nom technique:* ```name```
<PH code="workplace:name"/>

### Nombre d'affectations {#workplace-affectations-count}

Nombre d'affectations sur le poste de travail

*Nom technique:* ```workplaceAffectationsCount```
<PH code="workplace:workplaceAffectationsCount"/>

### Taux d'affectation moyen {#workplace-affectations-calculated-rate-sum}

Taux d'affectation moyen du poste de travail en fonction de l'affectation des jours de présence des personnes

*Nom technique:* ```workplaceAffectationsCalculatedRateSum```
<PH code="workplace:workplaceAffectationsCalculatedRateSum"/>

### Text Anchor {#text-anchor}



*Nom technique:* ```textAnchor```
<PH code="workplace:textAnchor"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Centre de coût {#cost-center}

Le centre de coût permet de répartir les espaces dynamiquement pour la refacturation

*Nom technique:* ```costCenter```
<PH code="workplace:costCenter"/>

### Espace du poste de travail {#room}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```room```
<PH code="workplace:room"/>

### Organisation {#organization}

Les organisations ont deux niveaux hiérarchiques : les directions et les services, et permettent de définir la structure organisationnelle de l'entreprise

*Nom technique:* ```organization```
<PH code="workplace:organization"/>

### Type d'usage de poste de travail {#workplace-usage-type}

Le type d'usage de poste de travail permet de catégoriser les postes de travail selon leur utilisation avec les termes de l'entreprise et de les visualiser avec des couleurs différentes sur les plans

*Nom technique:* ```workplaceUsageType```
<PH code="workplace:workplaceUsageType"/>

### Type de poste de travail {#workplace-type}



*Nom technique:* ```workplaceType```
<PH code="workplace:workplaceType"/>


## Entités associées (liste) {#properties-has-many}

### Affectations au poste de travail {#workplace-affectations}

Permet d'attribuer un poste de travail fixe à une personne

*Nom technique:* ```workplaceAffectations```
<PH code="workplace:workplaceAffectations"/>

### Objets {#items}

Un objet représente un élément physique ou matériel présent dans les espaces de travail

*Nom technique:* ```items```
<PH code="workplace:items"/>

### Réservations au poste de travail des personnes {#person-to-workplace-bookings}

Les réservations des postes de travail des personnes sont enregistrées et disponibles avec les dates de début et de fin de réservation

*Nom technique:* ```personToWorkplaceBookings```
<PH code="workplace:personToWorkplaceBookings"/>




