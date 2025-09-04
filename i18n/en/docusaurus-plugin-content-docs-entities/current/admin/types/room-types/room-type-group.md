---
search_rank: 0.5
---    
# Space typology group
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A space typology group allows you to group several types of spaces to facilitate their management and display.

<OH code="roomTypeGroup"/>




## Required Properties {#properties-mandatory}
    
### Space typology group name {#name}



*Technical name:* ```name```
<PH code="roomTypeGroup:name"/>

    


## Basic properties {#properties-base}
    
### Code {#code}



*Technical name:* ```code```
<PH code="roomTypeGroup:code"/>

### Color {#color}



*Technical name:* ```color```
<PH code="roomTypeGroup:color"/>

### Exclude {#exclude}

Exclude space typologies from this group

*Technical name:* ```exclude```
<PH code="roomTypeGroup:exclude"/>

    



## Associated entities (list) {#properties-has-many}

### Associations group of space typology on the floors {#room-type-group-floors}

A space typology group association on floors allows you to define the groups of space types available on each floor

*Technical name:* ```roomTypeGroupFloors```
<PH code="roomTypeGroup:roomTypeGroupFloors"/>

### Associations of space typology group to buildings {#room-type-group-buildings}

A space typology group association with buildings allows you to define the groups of space types available in each building

*Technical name:* ```roomTypeGroupBuildings```
<PH code="roomTypeGroup:roomTypeGroupBuildings"/>

### Space typology group associations to space typology {#room-type-group-to-room-types}

A space typology group to space typology association allows you to define which space types belong to which groups

*Technical name:* ```roomTypeGroupToRoomTypes```
<PH code="roomTypeGroup:roomTypeGroupToRoomTypes"/>




