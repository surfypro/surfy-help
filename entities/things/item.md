---
search_rank: 0.5
sidebar_key: item
sidebar_label: "Objet"
---

# Objet
<ObjectTypeMenuBreadcrumb code="item" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un objet représente un élément physique ou matériel présent dans les espaces de travail

<OH code="item"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Position {#position}



*Nom technique:* ```position```
<PH code="item:position"/>

### Rotation {#rotation}



*Nom technique:* ```rotation```
<PH code="item:rotation"/>

    


## Propriétés de base {#properties-base}
    
### Code d'immobilisation {#code}

Le numéro d'immobilisation est utilisé pour conserver le numéro comptable

*Nom technique:* ```code```
<PH code="item:code"/>

### Commentaire {#comment}

Remarque ou note libre sur l'objet

*Nom technique:* ```comment```
<PH code="item:comment"/>

### Date d'achat {#purchase-date}

La date d'achat de l'objet

*Nom technique:* ```purchaseDate```
<PH code="item:purchaseDate"/>

### Nombre d'associations aux personnes {#item-affectations-count}

Le nombre d'associations de cet objet aux personnes

*Nom technique:* ```itemAffectationsCount```
<PH code="item:itemAffectationsCount"/>

### Prix {#price}

Le prix d'achat de l'objet s'il est différent du prix du type d'objet

*Nom technique:* ```price```
<PH code="item:price"/>

### Référence de l'objet {#reference}

La référence de l'objet est utilisé pour le retrouver et pour differencier cet objet des autres

*Nom technique:* ```reference```
<PH code="item:reference"/>

### Text Anchor {#text-anchor}



*Nom technique:* ```textAnchor```
<PH code="item:textAnchor"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Espace {#room}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```room```
<PH code="item:room"/>

### Poste de travail {#workplace}



*Nom technique:* ```workplace```
<PH code="item:workplace"/>

### Type d'objet {#item-type}

Un type d'objet permet de catégoriser et définir les caractéristiques des objets physiques présents dans les espaces de travail

*Nom technique:* ```itemType```
<PH code="item:itemType"/>


## Entités associées (liste) {#properties-has-many}

### Associations d'objet à personne {#item-to-people}

Permet d'associer un objet à une personne (siège ergonomique, casier)

*Nom technique:* ```itemToPeople```
<PH code="item:itemToPeople"/>

### Interventions sur des objet {#person-company-to-items}

Les interventions des prestataires sur des objets permettent de définir par exemple la date d'une visite sur un extincteur

*Nom technique:* ```personCompanyToItems```
<PH code="item:personCompanyToItems"/>

### Mouvements d'objet {#item-facts}

Un mouvement d'objet enregistre les déplacements ou changements de statut d'un objet dans le système

*Nom technique:* ```itemFacts```
<PH code="item:itemFacts"/>




