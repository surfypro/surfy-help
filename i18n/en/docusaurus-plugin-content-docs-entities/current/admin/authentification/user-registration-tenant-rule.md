---
search_rank: 0.5
---    
# Authentication rule
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="userRegistrationTenantRule"/>






## Basic properties {#properties-base}
    
### Areas {#domains}

Separate domains with spaces and include the at sign

*Technical name:* ```domains```
<PH code="userRegistrationTenantRule:domains"/>

### Automatically associate roles {#automatic-user-to-role-mapping}

Automatically associate roles and content roles with users who meet this rule

*Technical name:* ```automaticUserToRoleMapping```
<PH code="userRegistrationTenantRule:automaticUserToRoleMapping"/>

### Name {#name}



*Technical name:* ```name```
<PH code="userRegistrationTenantRule:name"/>

    

## Associated entities (unique) {#properties-belongs-to}

### Authentication login {#authentification-connection}

An authentication connection allows you to configure the authentication methods for accessing the platform (SSO, LDAP, etc.)

*Technical name:* ```authentificationConnection```
<PH code="userRegistrationTenantRule:authentificationConnection"/>


## Associated entities (list) {#properties-has-many}

### Authentication rule to content role associations {#user-registration-tenant-rule-to-content-roles}



*Technical name:* ```userRegistrationTenantRuleToContentRoles```
<PH code="userRegistrationTenantRule:userRegistrationTenantRuleToContentRoles"/>

### Authentication rule-to-role associations {#user-registration-tenant-rule-to-jup-roles}



*Technical name:* ```userRegistrationTenantRuleToJupRoles```
<PH code="userRegistrationTenantRule:userRegistrationTenantRuleToJupRoles"/>




