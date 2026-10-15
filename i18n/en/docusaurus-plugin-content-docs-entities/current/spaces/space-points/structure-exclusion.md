---
search_rank: 0.5
sidebar_key: structure-exclusion
sidebar_label: "Structure exclusion"
---

# Structure exclusion
<ObjectTypeMenuBreadcrumb code="structureExclusion" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A structural exclusion defines a hole (patio, void, column) inside the external shape of the structure.

<OH code="structureExclusion"/>






## Basic properties {#properties-base}
    
### Last name {#name}

Optional name for easy identification of the exclusion (patio, elevator shaft, etc.)

*Technical name:* ```name```
<PH code="structureExclusion:name"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Structure {#structure}

A structure defines a geometric shape that can be used to calibrate and position features on maps

*Technical name:* ```structure```
<PH code="structureExclusion:structure"/>


## Associated entities (list) {#properties-has-many}

### Structure exclusion points {#structure-exclusion-points}

A structure exclusion point defines a vertex of the hole polygon inside the outer shape

*Technical name:* ```structureExclusionPoints```
<PH code="structureExclusion:structureExclusionPoints"/>




