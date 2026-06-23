---
search_rank: 0.5
sidebar_key: user-registration-tenant-rule
sidebar_label: "Règle d'authentification"
---

# Règle d'authentification
<ObjectTypeMenuBreadcrumb code="userRegistrationTenantRule" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="userRegistrationTenantRule"/>






## Propriétés de base {#properties-base}
    
### Associer automatiquement les rôles {#automatic-user-to-role-mapping}

Associer automatiquement les rôles et les rôles de contenu aux utilisateurs qui respectent cette règle

*Nom technique:* ```automaticUserToRoleMapping```
<PH code="userRegistrationTenantRule:automaticUserToRoleMapping"/>

### Domaines {#domains}

Séparer les domaines avec des espaces et inclure l'arobase

*Nom technique:* ```domains```
<PH code="userRegistrationTenantRule:domains"/>

### Name {#name}



*Nom technique:* ```name```
<PH code="userRegistrationTenantRule:name"/>

### Nom de la propriété JWT pour l'association au tenant {#jwt-token-tenant-mapping-property-name}

Nom du claim dans le token JWT (liste de valeurs) à comparer avec le code claim JWT de l'entreprise pour associer l'utilisateur au tenant

*Nom technique:* ```jwtTokenTenantMappingPropertyName```
<PH code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName"/>

### Utiliser le mappage des rôles via le token OpenID et les Claims {#use-open-id-token-role-mapping}

Associer automatiquement les rôles à partir des rôles inclus dans le token OpenID

*Nom technique:* ```useOpenIdTokenRoleMapping```
<PH code="userRegistrationTenantRule:useOpenIdTokenRoleMapping"/>

### Utiliser les claims OpenID pour associer au tenant {#use-open-id-token-claims-to-associate-to-tenant}

Associer l'utilisateur au tenant uniquement si le claim exact Surfy.Tenant.{NomDuTenant} est présent dans le token, ou si un claim JWT personnalisé contient le code claim JWT de l'entreprise

*Nom technique:* ```useOpenIdTokenClaimsToAssociateToTenant```
<PH code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant"/>

    

## Entités associées (unique) {#properties-belongs-to}

### Connection d'authentification {#authentification-connection}

Une connexion d'authentification permet de configurer les méthodes d'authentification pour accéder à la plateforme (SSO, LDAP, etc.)

*Nom technique:* ```authentificationConnection```
<PH code="userRegistrationTenantRule:authentificationConnection"/>


## Entités associées (liste) {#properties-has-many}

### Associations de règle d'authentification à rôle {#user-registration-tenant-rule-to-jup-roles}



*Nom technique:* ```userRegistrationTenantRuleToJupRoles```
<PH code="userRegistrationTenantRule:userRegistrationTenantRuleToJupRoles"/>

### Associations de règle d'authentification à rôle de contenu {#user-registration-tenant-rule-to-content-roles}



*Nom technique:* ```userRegistrationTenantRuleToContentRoles```
<PH code="userRegistrationTenantRule:userRegistrationTenantRuleToContentRoles"/>




