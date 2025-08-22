# Groupe de typologie d'espace
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un groupe de typologie d'espace permet de regrouper plusieurs types d'espaces pour faciliter leur gestion et leur affichage

<OH code="roomTypeGroup"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom du groupe de typologie d'espace {#name}



*Nom technique:* ```name```
<PH code="roomTypeGroup:name"/>

    


## Propriétés de base {#properties-base}
    
### Code {#code}



*Nom technique:* ```code```
<PH code="roomTypeGroup:code"/>

### Couleur {#color}



*Nom technique:* ```color```
<PH code="roomTypeGroup:color"/>

### Exclure {#exclude}

Exclure les typologies d'espace de ce groupe

*Nom technique:* ```exclude```
<PH code="roomTypeGroup:exclude"/>

    



## Entités associées (liste) {#properties-has-many}

### Associations groupe de typologie d'espace à typologie d'espace {#room-type-group-to-room-types}

Une association groupe de typologie d'espace à typologie d'espace permet de définir quels types d'espaces appartiennent à quels groupes

*Nom technique:* ```roomTypeGroupToRoomTypes```
<PH code="roomTypeGroup:roomTypeGroupToRoomTypes"/>

### Associations groupe de typologie d'espace aux bâtiments {#room-type-group-buildings}

Une association groupe de typologie d'espace aux bâtiments permet de définir les groupes de types d'espaces disponibles dans chaque bâtiment

*Nom technique:* ```roomTypeGroupBuildings```
<PH code="roomTypeGroup:roomTypeGroupBuildings"/>

### Associations groupe de typologie d'espace aux étages {#room-type-group-floors}

Une association groupe de typologie d'espace aux étages permet de définir les groupes de types d'espaces disponibles dans chaque étage

*Nom technique:* ```roomTypeGroupFloors```
<PH code="roomTypeGroup:roomTypeGroupFloors"/>




