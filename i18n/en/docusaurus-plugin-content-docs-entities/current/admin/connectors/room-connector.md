# Space connector
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Space connectors allow you to create a link between several spaces on different floors

<OH code="roomConnector"/>


## Basic properties {#properties-base}

### Average waiting time {#wait-time}

The average wait time before the space connector becomes available

*Technical name:* ```waitTime```
<PH code="roomConnector:waitTime"/>

### Space connector name {#name}



*Technical name:* ```name```
<PH code="roomConnector:name"/>

### Time between each floor {#time-per-floor}

The time required to be able to move from each floor to the next

*Technical name:* ```timePerFloor```
<PH code="roomConnector:timePerFloor"/>


## Associated entities (unique) {#properties-belongs-to}

###  Room Connector Type {#room-connector-type}



*Technical name:* ```roomConnectorType```
<PH code="roomConnector:roomConnectorType"/>


## Associated entities (list) {#properties-has-many}

### Spaces {#rooms}

Spaces are workplaces or areas in order to divide a floor into sub-spaces.

*Technical name:* ```rooms```
<PH code="roomConnector:rooms"/>




