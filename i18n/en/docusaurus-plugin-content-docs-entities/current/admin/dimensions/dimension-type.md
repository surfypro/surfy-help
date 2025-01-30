# Layer type
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="dimensionType"/>




## Required Properties {#properties-mandatory}
    
### Name of the dimension type {#name}



*Technical name:* ```name```
<PH code="dimensionType:name"/>

    


## Basic properties {#properties-base}
    
### Description {#description}



*Technical name:* ```description```
<PH code="dimensionType:description"/>

### Dimension type code {#code}

The code identifies the type of dimension, it is used when specific calculations apply to the type of dimension

*Technical name:* ```code```
<PH code="dimensionType:code"/>

### order of appearance {#order}

Allows you to sort layer types to display them

*Technical name:* ```order```
<PH code="dimensionType:order"/>

    



## Associated entities (list) {#properties-has-many}

### Analysis layers {#dimensions}



*Technical name:* ```dimensions```
<PH code="dimensionType:dimensions"/>

### Analysis layers by building {#dimension-buildings}



*Technical name:* ```dimensionBuildings```
<PH code="dimensionType:dimensionBuildings"/>

### Analysis layers per floor {#dimension-floors}



*Technical name:* ```dimensionFloors```
<PH code="dimensionType:dimensionFloors"/>

### Space analysis layers {#dimension-rooms}



*Technical name:* ```dimensionRooms```
<PH code="dimensionType:dimensionRooms"/>

### Types of building assignment layers {#dimension-type-to-buildings}

Building assignment layer types are used to define the different types of building assignment layers. By associating an assignment layer type with a building, this allows an analysis layer to be transformed into an assignment layer.

*Technical name:* ```dimensionTypeToBuildings```
<PH code="dimensionType:dimensionTypeToBuildings"/>




