---
search_rank: 0.5
---    
# Service provider company
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

The service provider company allows you to manage service provider personnel by company to which they belong

<OH code="personCompany"/>




## Required Properties {#properties-mandatory}
    
### Last name {#name}

The name of the service provider, for example the company name of a service provider

*Technical name:* ```name```
<PH code="personCompany:name"/>

    


## Basic properties {#properties-base}
    
### Contact {#contact}

Contact information of the service provider

*Technical name:* ```contact```
<PH code="personCompany:contact"/>

### Further information {#comment}

Additional information on the service provider, such as its mission, its values, the functional coverage of its service, etc.

*Technical name:* ```comment```
<PH code="personCompany:comment"/>

### Related documents {#documents}

The link to the documents associated with this service provider

*Technical name:* ```documents```
<PH code="personCompany:documents"/>

    



## Associated entities (list) {#properties-has-many}

### Interventions on objects {#person-company-to-items}

The interventions of service providers on objects make it possible to define, for example, the date of a visit to a fire extinguisher

*Technical name:* ```personCompanyToItems```
<PH code="personCompany:personCompanyToItems"/>

### People {#people}

These are the people entered into Surfy's database

*Technical name:* ```people```
<PH code="personCompany:people"/>

### Provider object types {#person-company-to-item-types}

The service provider object types make it possible to define a relationship between the object type and the service provider and to define the mission.

*Technical name:* ```personCompanyToItemTypes```
<PH code="personCompany:personCompanyToItemTypes"/>

### Types of provider spaces {#person-company-to-room-types}

The types of spaces of the service providers make it possible to define a relationship between a type of space and the service provider and to define a mission.

*Technical name:* ```personCompanyToRoomTypes```
<PH code="personCompany:personCompanyToRoomTypes"/>




