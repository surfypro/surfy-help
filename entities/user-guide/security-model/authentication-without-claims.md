# Authentification sans claims

Ce guide décrit le comportement quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est désactivé.

## Réglages à connaître

- <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> active l'association automatique des rôles prévus dans la règle.
- Sans <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" />, les claims ne sont pas utilisés pour associer les rôles.

## Comportement

Quand <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> est activé :

- Les rôles de la règle sont associés automatiquement lors de l'arrivée de l'utilisateur sur un tenant.
- Les rôles de contenu de la règle sont associés lors de la première création de l'association utilisateur-tenant.
- Ces associations automatiques sont faites en ajout uniquement.

## Gouvernance des rôles

- Les rôles et rôles de contenu non exposés comme claims restent en gestion manuelle.
- Les rôles et rôles de contenu exposés comme claims ne sont pas synchronisés tant que le mode claims est désactivé.
