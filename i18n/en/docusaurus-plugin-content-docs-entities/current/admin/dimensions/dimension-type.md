---
search_rank: 0.5
---    
# Layer type
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A layer type allows you to categorize analysis layers according to their use or area of application.

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

### Analysis layer associations to buildings {#dimension-buildings}

An analysis layer association with buildings allows you to define specific analysis layers for each building

*Technical name:* ```dimensionBuildings```
<PH code="dimensionType:dimensionBuildings"/>

### Analysis layer associations to floors {#dimension-floors}

An analysis layer to floor association allows you to define specific analysis layers for each floor

*Technical name:* ```dimensionFloors```
<PH code="dimensionType:dimensionFloors"/>

### Analysis layer associations to spaces {#dimension-rooms}

An analysis layer association to spaces allows you to define specific analysis layers for each space

*Technical name:* ```dimensionRooms```
<PH code="dimensionType:dimensionRooms"/>

### Analysis Layers {#dimensions}

An analysis layer allows categorizing and analyzing spaces according to different criteria for statistical analysis and reporting

*Technical name:* ```dimensions```
<PH code="dimensionType:dimensions"/>

### Types of building assignment layers {#dimension-type-to-buildings}

Building assignment layer types are used to define the different types of building assignment layers. By associating an assignment layer type with a building, this allows an analysis layer to be transformed into an assignment layer.

*Technical name:* ```dimensionTypeToBuildings```
<PH code="dimensionType:dimensionTypeToBuildings"/>




