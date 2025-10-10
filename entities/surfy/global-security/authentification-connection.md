---
search_rank: 0.5
---    
# Connection d'authentification
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Une connexion d'authentification permet de configurer les méthodes d'authentification pour accéder à la plateforme (SSO, LDAP, etc.)

<OH code="authentificationConnection"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom {#name}

Nom de la connexion d'authentification

*Nom technique:* ```name```
<PH code="authentificationConnection:name"/>

    


## Propriétés de base {#properties-base}
    
### Certificat public IDP {#public-idp-certificate}

Certificat public du fournisseur d'identité (IDP) utilisé pour la validation des signatures SAML

*Nom technique:* ```publicIdpCertificate```
<PH code="authentificationConnection:publicIdpCertificate"/>

    



## Entités associées (liste) {#properties-has-many}

### Règles d'authentification {#user-registration-tenant-rules}



*Nom technique:* ```userRegistrationTenantRules```
<PH code="authentificationConnection:userRegistrationTenantRules"/>




