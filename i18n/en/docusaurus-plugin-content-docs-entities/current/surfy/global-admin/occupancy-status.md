# Occupancy status
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

The occupancy status makes it possible to identify the real-time status of a space or workstation, for example if it is free, occupied or squatted, the occupancy status is updated. day by connected objects present in space

<OH code="occupancyStatus"/>




## Required Properties {#properties-mandatory}
    
### Color {#color}

Color allows you to color spaces or workstations on plans according to their occupancy status

*Technical name:* ```color```
<PH code="occupancyStatus:color"/>

### Name of occupancy state {#name}



*Technical name:* ```name```
<PH code="occupancyStatus:name"/>

### Occupancy status code {#code}

The code makes it possible to identify and carry out technical operations on the occupancy state

*Technical name:* ```code```
<PH code="occupancyStatus:code"/>

    





## Associated entities (list) {#properties-has-many}

### Spaces {#rooms}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```rooms```
<PH code="occupancyStatus:rooms"/>




