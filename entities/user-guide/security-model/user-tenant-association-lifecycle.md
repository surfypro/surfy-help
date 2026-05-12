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

Si <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" /> est activé sur la règle, la création de cette association est autorisée uniquement si le tableau `roles` du token contient la valeur exacte `Surfy.Tenant.<NomExactDuTenant>`.

Ce contrôle agit seulement sur la création de l'association utilisateur-tenant. Il ne supprime pas automatiquement une association existante.

## Étape 3 - Application des rôles selon la modalité choisie

### Modalité A - Avec claims

Quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est activé :

- les rôles exposés comme claims sont synchronisés depuis le token,
- les rôles de contenu exposés comme claims sont synchronisés depuis le token,
- les associations pilotées par claims sont ajoutées ou retirées pour correspondre au token,
- les rôles non exposés comme claims ne sont pas modifiés par cette synchronisation.

La synchronisation concerne uniquement les rôles et rôles de contenu marqués comme claims.

### Modalité B - Sans claims

Quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est désactivé et que <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> est activé :

- les rôles de la règle sont ajoutés uniquement lors de la première association automatique d'un nouvel utilisateur,
- les rôles de contenu de la règle suivent la même logique,
- ces attributions sont en ajout uniquement.

Les rôles marqués comme claims ne sont pas pilotés par ces associations statiques.

## Ce qu'il faut retenir

- Oui, la vérification des rôles continue après login, lors du rafraîchissement du token.
- Le mode claims gouverne uniquement les rôles et rôles de contenu exposés comme claims, avec ajout et retrait selon le token.
- Les autres rôles restent sous gestion manuelle ou via les règles statiques, en ajout uniquement lors de la première association automatique.
- La valeur `Surfy.Tenant.<NomExactDuTenant>` dans `roles` peut conditionner l'association au tenant, mais ne donne pas de rôle.
