# Connecteur d'espace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Les connecteurs d'espaces permettent de créer un lien entre plusieurs espaces dans des étages différents

<OH code="roomConnector"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom du connecteur d'espace {#name}



*Nom technique:* ```name```
<PH code="roomConnector:name"/>

    


## Propriétés de base {#properties-base}
    
### Temps d'attente moyen {#wait-time}

Le temps d'attente moyenne avant que le connecteur d'espace soit disponible

*Nom technique:* ```waitTime```
<PH code="roomConnector:waitTime"/>

### Temps entre chaque étage {#time-per-floor}

Le temps nécessaire pour pouvoir passer de chaque étage au prochain

*Nom technique:* ```timePerFloor```
<PH code="roomConnector:timePerFloor"/>

    

## Entités associées (unique) {#properties-belongs-to}

###  Room Connector Type {#room-connector-type}



*Nom technique:* ```roomConnectorType```
<PH code="roomConnector:roomConnectorType"/>


## Entités associées (liste) {#properties-has-many}

### Espaces {#rooms}

Les espaces sont des lieux de travail ou des zones afin de découper un étage en sous espaces

*Nom technique:* ```rooms```
<PH code="roomConnector:rooms"/>




