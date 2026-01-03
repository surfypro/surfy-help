---
search_rank: 0.5
---    
# Role
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A role defines access permissions to features in the user interface

<OH code="jupRole"/>




## Required Properties {#properties-mandatory}
    
### Code {#code}



*Technical name:* ```code```
<PH code="jupRole:code"/>

    


## Basic properties {#properties-base}
    
### Name {#name}



*Technical name:* ```name```
<PH code="jupRole:name"/>

    



## Associated entities (list) {#properties-has-many}

### API user associations to role {#api-user-to-jup-roles}

An API user role association allows you to define access permissions to API features for a specific user

*Technical name:* ```apiUserToJupRoles```
<PH code="jupRole:apiUserToJupRoles"/>

### Associations play a role in visions {#jup-role-to-jup-ui-layouts}

A role-to-visions association allows you to define access permissions to different visions for a role.

*Technical name:* ```jupRoleToJupUiLayouts```
<PH code="jupRole:jupRoleToJupUiLayouts"/>

### Authentication rule-to-role associations {#user-registration-tenant-rule-to-jup-roles}



*Technical name:* ```userRegistrationTenantRuleToJupRoles```
<PH code="jupRole:userRegistrationTenantRuleToJupRoles"/>

### Company user associations to the role {#jup-user-company-to-jup-roles}

An enterprise user role association allows you to define feature access permissions for a specific enterprise user

*Technical name:* ```jupUserCompanyToJupRoles```
<PH code="jupRole:jupUserCompanyToJupRoles"/>

### Role associations to interface operations {#jup-role-to-jup-ui-operations}

A role association to interface operations allows you to define access permissions to the different interface operations for a role

*Technical name:* ```jupRoleToJupUiOperations```
<PH code="jupRole:jupRoleToJupUiOperations"/>

### Role associations to plan tabs {#jup-role-to-jup-ui-layout-tabs}

A role association with plan tabs allows you to define access permissions to the different plan tabs for a role.

*Technical name:* ```jupRoleToJupUiLayoutTabs```
<PH code="jupRole:jupRoleToJupUiLayoutTabs"/>

### Role associations with interface options {#jup-role-to-jup-ui-options}

A role association with interface options allows you to define access permissions to the different interface options for a role

*Technical name:* ```jupRoleToJupUiOptions```
<PH code="jupRole:jupRoleToJupUiOptions"/>

### Role associations with interface views {#jup-role-to-jup-ui-views}

A role to interface view association allows you to define access permissions to the different interface views for a role

*Technical name:* ```jupRoleToJupUiViews```
<PH code="jupRole:jupRoleToJupUiViews"/>

### Role to object type associations {#jup-role-to-jup-object-types}

A role to object type association allows you to define specific CRUD permissions for a role on an entity type

*Technical name:* ```jupRoleToJupObjectTypes```
<PH code="jupRole:jupRoleToJupObjectTypes"/>




