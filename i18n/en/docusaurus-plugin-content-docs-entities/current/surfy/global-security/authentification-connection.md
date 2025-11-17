---
search_rank: 0.5
---    
# Authentication login
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

An authentication connection allows you to configure the authentication methods for accessing the platform (SSO, LDAP, etc.)

<OH code="authentificationConnection"/>




## Required Properties {#properties-mandatory}
    
### Last name {#name}

Authentication connection name

*Technical name:* ```name```
<PH code="authentificationConnection:name"/>

    


## Basic properties {#properties-base}
    
### Authorized domains {#domaines}

Email domains allowed for this authentication connection

*Technical name:* ```domaines```
<PH code="authentificationConnection:domaines"/>

### IDP Public Certificate {#public-idp-certificate}

Identity Provider (IDP) public certificate used for SAML signature validation

*Technical name:* ```publicIdpCertificate```
<PH code="authentificationConnection:publicIdpCertificate"/>

    



## Associated entities (list) {#properties-has-many}

### Authentication rules {#user-registration-tenant-rules}



*Technical name:* ```userRegistrationTenantRules```
<PH code="authentificationConnection:userRegistrationTenantRules"/>




