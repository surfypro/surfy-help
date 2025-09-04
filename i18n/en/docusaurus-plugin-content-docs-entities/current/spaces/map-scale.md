---
search_rank: 0.5
---    
# Plane scale
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A map scale allows you to define the display and scale parameters for maps

<OH code="mapScale"/>




## Required Properties {#properties-mandatory}
    
### P1 {#p-1}

Starting point

*Technical name:* ```p1```
<PH code="mapScale:p1"/>

### P2 {#p-2}

Point of arrival

*Technical name:* ```p2```
<PH code="mapScale:p2"/>

    


## Basic properties {#properties-base}
    
### Distance {#length}

The distance shown on the plan between the 2 points in meters

*Technical name:* ```length```
<PH code="mapScale:length"/>

### Line thickness {#stroke-width}

It is possible to reduce the thickness of the lines to increase the readability of the plan

*Technical name:* ```strokeWidth```
<PH code="mapScale:strokeWidth"/>

### Name of the scale {#name}

To remember the name and reuse it on other floors

*Technical name:* ```name```
<PH code="mapScale:name"/>

### Ratio {#ratio}



*Technical name:* ```ratio```
<PH code="mapScale:ratio"/>

### Segment text size {#segment-distance-text-size}

The size of the text on the distances between the points on the map to optimize the display

*Technical name:* ```segmentDistanceTextSize```
<PH code="mapScale:segmentDistanceTextSize"/>

### Size of object type icons {#item-type-icon-size}

The size of the object type icons on the map, the size will be limited by the size of the space

*Technical name:* ```itemTypeIconSize```
<PH code="mapScale:itemTypeIconSize"/>

### Size of space type icons {#room-icon-size}

The size of icons on the map in spaces relative to space types

*Technical name:* ```roomIconSize```
<PH code="mapScale:roomIconSize"/>

### Space text size {#room-text-size}

The size of the text of the spaces on the plan to optimize the display

*Technical name:* ```roomTextSize```
<PH code="mapScale:roomTextSize"/>

### Text size on objects {#workplace-text-size}

The size of the text on the workstations and on the objects on the map to optimize the display

*Technical name:* ```workplaceTextSize```
<PH code="mapScale:workplaceTextSize"/>

    



## Associated entities (list) {#properties-has-many}

### Floors {#floors}

Floors represent a work platform or a level of a building.

*Technical name:* ```floors```
<PH code="mapScale:floors"/>




