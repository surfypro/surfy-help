---
search_rank: 0.5
---    
# Organisation
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Les organisations ont deux niveaux hiérarchiques : les directions et les services, et permettent de définir la structure organisationnelle de l'entreprise

<OH code="organization"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom {#name}

Nom qui va définir l'organisation

*Nom technique:* ```name```
<PH code="organization:name"/>

    


## Propriétés de base {#properties-base}
    
### Code {#code}

Ce code peut être utilisé pour contenir la codification de l'organisation ou la clé pour l'identification via un logiciel tiers

*Nom technique:* ```code```
<PH code="organization:code"/>

### Couleur {#color}

La couleur de l'organisation permet de différencier les organisations sur les plans et dans l'interface

*Nom technique:* ```color```
<PH code="organization:color"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Direction {#organization}

Les organisations ont deux niveaux hiérarchiques : les directions et les services, et permettent de définir la structure organisationnelle de l'entreprise

*Nom technique:* ```organization```
<PH code="organization:organization"/>


## Entités associées (liste) {#properties-has-many}

### Associations organisation aux bâtiments {#organization-buildings}

Une association organisation aux bâtiments permet de définir les organisations responsables de chaque bâtiment

*Nom technique:* ```organizationBuildings```
<PH code="organization:organizationBuildings"/>

### Associations organisation aux étages {#organization-floors}

Une association organisation aux étages permet de définir les organisations responsables de chaque étage

*Nom technique:* ```organizationFloors```
<PH code="organization:organizationFloors"/>

### Espaces {#rooms}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```rooms```
<PH code="organization:rooms"/>

### Personnes {#people}

Ce sont les personnes entrées dans la base de données de Surfy

*Nom technique:* ```people```
<PH code="organization:people"/>

### Postes de travail {#workplaces}



*Nom technique:* ```workplaces```
<PH code="organization:workplaces"/>

### Services {#organizations}

Les organisations ont deux niveaux hiérarchiques : les directions et les services, et permettent de définir la structure organisationnelle de l'entreprise

*Nom technique:* ```organizations```
<PH code="organization:organizations"/>




