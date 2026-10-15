---
search_rank: 0.5
sidebar_key: segment-connector-type
sidebar_label: "Type de connecteur de segment"
---

# Type de connecteur de segment
<ObjectTypeMenuBreadcrumb code="segmentConnectorType" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un type de connecteur de segment qualifie une porte d'entrée/sortie bâtiment (outside-in, outside-out, outside-in-out) — distinct des types SVG door-left/door-right

<OH code="segmentConnectorType"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Code du type de connecteur de segment {#code}

Codes Tongue : outside-in, outside-out, outside-in-out

*Nom technique:* ```code```
<PH code="segmentConnectorType:code"/>

### Nom du type de connecteur de segment {#name}



*Nom technique:* ```name```
<PH code="segmentConnectorType:name"/>

    


## Propriétés de base {#properties-base}
    
### Couleur {#color}

Couleur optionnelle du type de Segment Connector — utilisée en Mode connecteurs sur la Vue Pathfinding bâtiment

*Nom technique:* ```color```
<PH code="segmentConnectorType:color"/>

    



## Entités associées (liste) {#properties-has-many}

### Connecteurs de segment {#segment-connectors}

Un connecteur de segment qualifie un segment de porte comme entrée/sortie bâtiment pour le Pathfinding

*Nom technique:* ```segmentConnectors```
<PH code="segmentConnectorType:segmentConnectors"/>




