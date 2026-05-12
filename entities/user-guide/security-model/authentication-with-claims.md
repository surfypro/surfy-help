# Authentification avec claims

Ce guide décrit le comportement quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est activé.

## Principe

- Les rôles exposés comme claims sont synchronisés depuis le token.
- Les rôles de contenu exposés comme claims sont synchronisés depuis le token.
- Les rôles et rôles de contenu non exposés comme claims ne sont pas pilotés par le token.

La synchronisation est complète pour les rôles concernés :

- si le claim est présent dans le token, le rôle est ajouté à l'utilisateur ;
- si le claim n'est plus présent, l'association au rôle est retirée ;
- ce comportement s'applique à la connexion et après un rafraîchissement silencieux du token.

Seuls les rôles et rôles de contenu marqués comme claims sont pilotés par ce mécanisme :

- côté rôles : <P code="jupRole:isClaim" /> doit être activé ;
- côté rôles de contenu : <P code="contentRole:isClaim" /> doit être activé.

Les rôles non marqués comme claims restent en gestion manuelle ou via les règles d'association statiques.

## Format attendu dans le JWT

Pour être pris en compte (support officiel actuel), les valeurs doivent être présentes dans le token JWT au format :

- `roles: ["a", "b"]`.

## Comment former les codes à mettre dans les claims

Un claim peut correspondre à un rôle de 2 façons :

- Correspondance directe avec le code du rôle ou du rôle de contenu (exemple : `admin_tenant`).
- Format Surfy : `Surfy.Role.<RoleSuffix>` (exemple : `Surfy.Role.AdminTenant`).

Le suffixe (`AdminTenant`) est la version PascalCase du code :

- `admin_tenant` -> `Surfy.Role.AdminTenant`
- `admin-tenant` -> `Surfy.Role.AdminTenant`
- `adminTenant` -> `Surfy.Role.AdminTenant`

## Claims tenant-scopés

Vous pouvez aussi utiliser des claims limités à un tenant :

- `Surfy.Tenant.<NomExactDuTenant>.Role.<RoleSuffix>`

Exemple :

- `Surfy.Tenant.acme-corp.Role.AdminTenant`

Règles importantes :

- `<NomExactDuTenant>` doit correspondre exactement au nom du tenant dans Surfy.
- Si le nom ne correspond pas, le claim est ignoré pour ce tenant.
- Ce mécanisme s'applique aux rôles et rôles de contenu exposés comme claims.

## Association au tenant via claim

Une règle peut aussi demander que l'utilisateur ne soit associé au tenant que si le token contient un claim dédié :

- activer <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" /> sur la règle ;
- ajouter la valeur `Surfy.Tenant.<NomExactDuTenant>` dans le tableau `roles` du token.

Ce claim sert uniquement à autoriser la création de l'association utilisateur-tenant. Il ne donne pas de rôle par lui-même.

Exemple :

- `roles: ["Surfy.Tenant.acme-corp"]` autorise l'association au tenant dont le nom exact est `acme-corp`.
- `roles: ["Surfy.Tenant.acme-corp.Role.AdminTenant"]` donne un rôle limité à ce tenant, mais ne crée pas à lui seul l'association utilisateur-tenant.

## Interaction avec les règles statiques

Quand <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> est aussi activé, les rôles non exposés comme claims peuvent encore être ajoutés par la règle, mais uniquement lors de la première association automatique d'un nouvel utilisateur.

Les rôles exposés comme claims ne doivent pas être gérés par cette association statique : ils sont gouvernés par le contenu du token.
