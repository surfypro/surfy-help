# Authentification avec claims

Ce guide décrit le comportement quand <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> est activé.

## Principe

- Les rôles exposés comme claims sont synchronisés depuis le token.
- Les rôles de contenu exposés comme claims sont synchronisés depuis le token.
- Les rôles et rôles de contenu non exposés comme claims ne sont pas pilotés par le token.

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
