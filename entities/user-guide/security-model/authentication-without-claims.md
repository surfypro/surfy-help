# Authentification sans claims

Ce guide décrit le comportement quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est désactivé.

## Réglages à connaître

- <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> active l'association automatique des rôles prévus dans la règle.
- Sans <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" />, les claims ne sont pas utilisés pour associer les rôles.

## Comportement

Quand <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> est activé :

- Les rôles de la règle sont associés automatiquement uniquement lors de la première création automatique d'association pour un nouvel utilisateur.
- Les rôles de contenu de la règle suivent la même logique : ils sont ajoutés uniquement lors de cette première association automatique.
- Ces associations automatiques sont faites en ajout uniquement.

Si l'utilisateur existe déjà sur un autre tenant, l'association à un nouveau tenant peut être créée, mais les rôles statiques ne sont pas rejoués comme une synchronisation complète.

## Gouvernance des rôles

- Les rôles et rôles de contenu non exposés comme claims restent en gestion manuelle.
- Les rôles et rôles de contenu exposés comme claims ne sont pas synchronisés tant que le mode claims est désactivé.
- Les rôles marqués comme claims ne sont pas faits pour être pilotés par les associations statiques de la règle.
