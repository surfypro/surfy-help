# Role to object type association
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A role to object type association allows you to define specific CRUD permissions for a role on an entity type

<OH code="jupRoleToJupObjectType"/>






## Basic properties {#properties-base}
    
### Creation (C) {#ar-create}

Allows entity creation

*Technical name:* ```arCreate```
<PH code="jupRoleToJupObjectType:arCreate"/>

### Reading (R) {#ar-read}

Allows reading of entities

*Technical name:* ```arRead```
<PH code="jupRoleToJupObjectType:arRead"/>

### Suppression (D) {#ar-delete}

Allows deletion of entities

*Technical name:* ```arDelete```
<PH code="jupRoleToJupObjectType:arDelete"/>

### Update (U) {#ar-update}

Allows updating of entities

*Technical name:* ```arUpdate```
<PH code="jupRoleToJupObjectType:arUpdate"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Entity type {#jup-object-type}

An entity type defines the different types of objects available in the user interface

*Technical name:* ```jupObjectType```
<PH code="jupRoleToJupObjectType:jupObjectType"/>

### Role {#jup-role}

A role defines access permissions to features in the user interface

*Technical name:* ```jupRole```
<PH code="jupRoleToJupObjectType:jupRole"/>





