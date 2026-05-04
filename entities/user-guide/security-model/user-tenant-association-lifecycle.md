# Association utilisateur-tenant : cycle et modalités

Ce guide explique à quel moment Surfy associe un utilisateur à un tenant, et comment les rôles sont appliqués.

## À quels moments la vérification est faite

La vérification est rejouée dans deux situations :

- À la connexion de l'utilisateur.
- Après un rafraîchissement silencieux du token.

Cela signifie que les rôles pilotés par claims peuvent être mis à jour après la connexion initiale, en fonction du token rafraîchi.

## Étape 1 - Recherche des règles applicables

Surfy applique les règles d'authentification qui correspondent :

- au domaine de l'email utilisateur,
- et à la connexion d'authentification utilisée.

Si aucune règle ne correspond, aucune association supplémentaire n'est créée.

## Étape 2 - Association au tenant

Pour chaque tenant défini par les règles applicables :

- si l'association utilisateur-tenant existe déjà, Surfy la réutilise,
- sinon Surfy crée l'association utilisateur-tenant.

## Étape 3 - Application des rôles selon la modalité choisie

### Modalité A - Avec claims

Quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est activé :

- les rôles exposés comme claims sont synchronisés depuis le token,
- les rôles de contenu exposés comme claims sont synchronisés depuis le token,
- les rôles non exposés comme claims ne sont pas modifiés par cette synchronisation.

### Modalité B - Sans claims

Quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est désactivé et que <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> est activé :

- les rôles de la règle sont ajoutés lors d'une nouvelle association utilisateur-tenant,
- les rôles de contenu de la règle sont ajoutés uniquement lors de la première création d'association utilisateur-tenant pour l'utilisateur,
- ces attributions sont en ajout uniquement.

## Ce qu'il faut retenir

- Oui, la vérification des rôles continue après login, lors du rafraîchissement du token.
- Le mode claims gouverne uniquement les rôles et rôles de contenu exposés comme claims.
- Les autres rôles restent sous gestion manuelle ou via les règles statiques.
