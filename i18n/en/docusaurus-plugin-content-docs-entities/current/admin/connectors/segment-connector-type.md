---
search_rank: 0.5
sidebar_key: segment-connector-type
sidebar_label: "Segment connector type"
---

# Segment connector type
<ObjectTypeMenuBreadcrumb code="segmentConnectorType" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A segment connector type qualifies a building entry/exit door (outside-in, outside-out, outside-in-out) — distinct from the SVG door-left/door-right types

<OH code="segmentConnectorType"/>




## Required Properties {#properties-mandatory}
    
### Segment connector type code {#code}

Tongue Codes: outside-in, outside-out, outside-in-out

*Technical name:* ```code```
<PH code="segmentConnectorType:code"/>

### Segment connector type name {#name}



*Technical name:* ```name```
<PH code="segmentConnectorType:name"/>

    





## Associated entities (list) {#properties-has-many}

### Segment connectors {#segment-connectors}

A segment connector qualifies a door segment as a building entry/exit for Pathfinding

*Technical name:* ```segmentConnectors```
<PH code="segmentConnectorType:segmentConnectors"/>




