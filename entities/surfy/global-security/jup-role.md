# Rôle
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un rôle définit les permissions d'accès aux fonctionnalités dans l'interface utilisateur

<OH code="jupRole"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Code {#code}



*Nom technique:* ```code```
<PH code="jupRole:code"/>

    


## Propriétés de base {#properties-base}
    
### Name {#name}



*Nom technique:* ```name```
<PH code="jupRole:name"/>

    



## Entités associées (liste) {#properties-has-many}

### Associations d'utilisateur d'api au rôle {#api-user-to-jup-roles}

Une association d'utilisateur d'API au rôle permet de définir les permissions d'accès aux fonctionnalités de l'API pour un utilisateur spécifique

*Nom technique:* ```apiUserToJupRoles```
<PH code="jupRole:apiUserToJupRoles"/>

### Associations de règle d'authentification à rôle {#user-registration-tenant-rule-to-jup-roles}



*Nom technique:* ```userRegistrationTenantRuleToJupRoles```
<PH code="jupRole:userRegistrationTenantRuleToJupRoles"/>

### Associations rôle à type d'objet {#jup-role-to-jup-object-types}

Une association rôle à type d'objet permet de définir les permissions CRUD spécifiques pour un rôle sur un type d'entité

*Nom technique:* ```jupRoleToJupObjectTypes```
<PH code="jupRole:jupRoleToJupObjectTypes"/>

### Associations rôle aux layouts d'interface {#jup-role-to-jup-ui-layouts}

Une association rôle aux layouts d'interface permet de définir les permissions d'accès aux différentes dispositions d'interface pour un rôle

*Nom technique:* ```jupRoleToJupUiLayouts```
<PH code="jupRole:jupRoleToJupUiLayouts"/>

### Associations rôle aux opérations d'interface {#jup-role-to-jup-ui-operations}

Une association rôle aux opérations d'interface permet de définir les permissions d'accès aux différentes opérations de l'interface pour un rôle

*Nom technique:* ```jupRoleToJupUiOperations```
<PH code="jupRole:jupRoleToJupUiOperations"/>

### Associations rôle aux options d'interface {#jup-role-to-jup-ui-options}

Une association rôle aux options d'interface permet de définir les permissions d'accès aux différentes options de l'interface pour un rôle

*Nom technique:* ```jupRoleToJupUiOptions```
<PH code="jupRole:jupRoleToJupUiOptions"/>

### Associations rôle aux vues d'interface {#jup-role-to-jup-ui-views}

Une association rôle aux vues d'interface permet de définir les permissions d'accès aux différentes vues de l'interface pour un rôle

*Nom technique:* ```jupRoleToJupUiViews```
<PH code="jupRole:jupRoleToJupUiViews"/>

### Associations utilisateur de l'entreprise au rôle {#jup-user-company-to-jup-roles}

Une association utilisateur de l'entreprise au rôle permet de définir les permissions d'accès aux fonctionnalités pour un utilisateur spécifique de l'entreprise

*Nom technique:* ```jupUserCompanyToJupRoles```
<PH code="jupRole:jupUserCompanyToJupRoles"/>




