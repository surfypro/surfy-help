# Object
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="item"/>




## Required Properties {#properties-mandatory}
    
### Position {#position}



*Technical name:* ```position```
<PH code="item:position"/>

### Rotation {#rotation}



*Technical name:* ```rotation```
<PH code="item:rotation"/>

    


## Basic properties {#properties-base}
    
### Date of purchase {#purchase-date}

The date of purchase of the object

*Technical name:* ```purchaseDate```
<PH code="item:purchaseDate"/>

### Immobilizer code {#code}

The asset number is used to keep the accounting number

*Technical name:* ```code```
<PH code="item:code"/>

### Number of associations to people {#item-affectations-count}

The number of associations of this object with people

*Technical name:* ```itemAffectationsCount```
<PH code="item:itemAffectationsCount"/>

### Object reference {#reference}

The object reference is used to find it and to differentiate this object from others

*Technical name:* ```reference```
<PH code="item:reference"/>

### Price {#price}

The purchase price of the item if it is different from the price of the item type

*Technical name:* ```price```
<PH code="item:price"/>

### Text Anchor {#text-anchor}



*Technical name:* ```textAnchor```
<PH code="item:textAnchor"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Object space {#room}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```room```
<PH code="item:room"/>

### Object type {#item-type}



*Technical name:* ```itemType```
<PH code="item:itemType"/>

### Workplace {#workplace}



*Technical name:* ```workplace```
<PH code="item:workplace"/>


## Associated entities (list) {#properties-has-many}

### Interventions on objects {#person-company-to-items}

The interventions of service providers on objects make it possible to define, for example, the date of a visit to a fire extinguisher

*Technical name:* ```personCompanyToItems```
<PH code="item:personCompanyToItems"/>

### Object movements {#item-facts}



*Technical name:* ```itemFacts```
<PH code="item:itemFacts"/>

### Object-to-person associations {#item-to-people}

Allows you to associate an object with a person (ergonomic seat, locker)

*Technical name:* ```itemToPeople```
<PH code="item:itemToPeople"/>




