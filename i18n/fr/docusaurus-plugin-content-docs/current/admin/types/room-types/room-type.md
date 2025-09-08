---
search_rank: 0.5
---    
# Space typology
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="roomType"/>




## Required Properties {#properties-mandatory}
    
### Space type name {#name}



*Technical name:* ```name```
<PH code="roomType:name"/>

    


## Basic properties {#properties-base}
    
### 2d color {#color}

The color of the type of space makes it possible to differentiate each type on the 2d plan

*Technical name:* ```color```
<PH code="roomType:color"/>

### 3d color {#color-3d}

Allows you to manage the color of the type of space in 3d, this option is only applicable to the 3d vision of the floor

*Technical name:* ```color3d```
<PH code="roomType:color3d"/>

### Cadence {#cadence}

The rate is a numerical value indicating the difficulty of cleaning the type of space. It is equal to the number of m² that can be treated in one hour in this type (circulation, laboratory, etc.)

*Technical name:* ```cadence```
<PH code="roomType:cadence"/>

### Code {#code}



*Technical name:* ```code```
<PH code="roomType:code"/>

### Icon {#icon}

The icon for the type of space makes it possible to display for this type of space an icon in 2d and 3d plans instead of the classic information on the plan, associated with the background color this makes it possible to render the more pleasant reading of the plan

*Technical name:* ```icon```
<PH code="roomType:icon"/>

### Is bookable? {#is-bookable}

Check this box if this type of space can be reserved

*Technical name:* ```isBookable```
<PH code="roomType:isBookable"/>

### Show walls {#display-walls-on-3d}

Allows you to display or not the walls of the space in the 3d floor plan, the undisplayed walls are dotted in 2d, this allows you to have a more pleasant view, especially for open spaces

*Technical name:* ```displayWallsOn3d```
<PH code="roomType:displayWallsOn3d"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Type of cost distribution {#distribution-cost-type}

A cost distribution type allows you to define the methods for distributing costs between different cost centers

*Technical name:* ```distributionCostType```
<PH code="roomType:distributionCostType"/>


## Associated entities (list) {#properties-has-many}

### Associations of space typology on the floors {#room-type-floors}

A space typology association with floors makes it possible to define the types of spaces available on each floor

*Technical name:* ```roomTypeFloors```
<PH code="roomType:roomTypeFloors"/>

### Associations of space typology with buildings {#room-type-buildings}

A space typology association with buildings makes it possible to define the types of spaces available in each building

*Technical name:* ```roomTypeBuildings```
<PH code="roomType:roomTypeBuildings"/>

### Partner export transformations for space types {#partner-export-mapping-to-room-types}



*Technical name:* ```partnerExportMappingToRoomTypes```
<PH code="roomType:partnerExportMappingToRoomTypes"/>

### Space typology group associations to space typology {#room-type-group-to-room-types}

A space typology group to space typology association allows you to define which space types belong to which groups

*Technical name:* ```roomTypeGroupToRoomTypes```
<PH code="roomType:roomTypeGroupToRoomTypes"/>

### Spaces {#rooms}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```rooms```
<PH code="roomType:rooms"/>

### Types of provider spaces {#person-company-to-room-types}

The types of spaces of the service providers make it possible to define a relationship between a type of space and the service provider and to define a mission.

*Technical name:* ```personCompanyToRoomTypes```
<PH code="roomType:personCompanyToRoomTypes"/>




