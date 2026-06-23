# Associer un utilisateur à un tenant via un claim JWT personnalisé

Ce guide complète [Authentification avec claims](./authentication-with-claims.md). Il décrit comment autoriser l'association automatique d'un utilisateur à un tenant lorsque le fournisseur d'identité ne peut pas placer la valeur attendue dans le tableau `roles` du token.

## Quand utiliser cette configuration

Utilisez ce mode lorsque :

- <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" /> est activé sur la règle d'authentification ;
- le fournisseur d'identité expose les droits d'accès tenant dans **un autre claim JWT** (et non dans `roles` avec la valeur `Surfy.Tenant.{NomExactDuTenant}`).

Le mode standard (`Surfy.Tenant.{NomExactDuTenant}` dans `roles`) reste inchangé et peut continuer à être utilisé sur d'autres règles ou connexions.

## Principe

Surfy compare la valeur configurée sur l'entreprise avec une liste de valeurs lues dans un claim JWT nommé sur la règle :

1. Sur l'**entreprise** (tenant cible), renseignez <P code="company:jwtClaimCode" /> : l'identifiant attendu dans le token.
2. Sur la **règle d'authentification**, renseignez <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> : le **nom du claim** dans le token JWT (exemple : `groups`, `tenant_codes`, etc.).
3. À la connexion, si le claim contient une valeur **identique** à <P code="company:jwtClaimCode" />, Surfy peut créer l'association utilisateur-tenant (si elle n'existe pas déjà).

Cette vérification s'ajoute aux conditions déjà en place : domaine de l'email utilisateur et connexion d'authentification de la règle.

## Configuration dans Surfy

### Étape 1 — Définir le code sur l'entreprise

Sur le tenant cible :

- renseignez <P code="company:jwtClaimCode" /> avec une valeur **unique et explicite** pour cette organisation ;
- cette valeur doit correspondre exactement à ce que le fournisseur d'identité enverra dans le token (respect de la casse).

Exemple : `jwtClaimCode = SURFY-ACME-PROD`

### Étape 2 — Configurer la règle d'authentification

Sur la <OT code="userRegistrationTenantRule" /> liée à ce tenant :

- activez <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" /> ;
- renseignez <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> avec le nom exact du claim côté fournisseur d'identité.

Si <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> est **vide**, Surfy utilise le mode standard : présence de `Surfy.Tenant.{NomExactDuTenant}` dans le tableau `roles`, où `{NomExactDuTenant}` correspond au nom technique de l'entreprise.

## Format attendu dans le token JWT

Le claim nommé dans <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> peut être fourni de deux façons :

- **Tableau de textes** : `["VALEUR-A", "VALEUR-B"]`
- **Texte** : une seule valeur, ou plusieurs valeurs séparées par des virgules : `"VALEUR-A, VALEUR-B"`

Surfy compare chaque valeur (après suppression des espaces inutiles) à <P code="company:jwtClaimCode" />.

Exemple de token (illustration) :

```json
{
  "groups": ["AUTRE-GROUPE", "SURFY-ACME-PROD"]
}
```

Avec `jwtClaimCode = SURFY-ACME-PROD` sur l'entreprise, l'association au tenant est autorisée.

## Ce que ce mécanisme fait — et ne fait pas

- **Fait** : autoriser la **création** de l'association utilisateur-tenant lorsque le claim correspond.
- **Ne fait pas** : accorder des rôles à lui seul. Les rôles restent gérés par les autres options de la règle (association statique ou synchronisation via claims dans `roles`).
- **Ne fait pas** : retirer automatiquement une association déjà existante si le claim disparaît du token.

## Bonnes pratiques de sécurité

- Choisissez des valeurs de <P code="company:jwtClaimCode" /> **spécifiques** à chaque tenant ; évitez des codes génériques partagés entre organisations.
- Configurez le fournisseur d'identité pour n'émettre ce claim **qu'aux utilisateurs autorisés** à accéder au tenant Surfy concerné.
- Restreignez les domaines dans <P code="userRegistrationTenantRule:domains" /> aux adresses e-mail de confiance.
- Vérifiez que la connexion d'authentification de la règle correspond bien au fournisseur utilisé par vos utilisateurs.

## Voir aussi

- [Authentification avec claims](./authentication-with-claims.md) — synchronisation des rôles et association via `Surfy.Tenant.{NomExactDuTenant}` dans `roles`
- [Association utilisateur-tenant : cycle et modalités](./user-tenant-association-lifecycle.md) — moments où Surfy vérifie et applique les règles
