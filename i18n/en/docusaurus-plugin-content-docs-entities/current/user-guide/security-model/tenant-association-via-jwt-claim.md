# Associate a user to a tenant via a custom JWT claim

This guide complements [Authentication with claims](./authentication-with-claims.md). It explains how to allow automatic association of a user to a tenant when the identity provider cannot place the expected value in the token `roles` array.

## When to use this configuration

Use this mode when:

- <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" /> is enabled on the authentication rule;
- the identity provider exposes tenant access rights in **another JWT claim** (not in `roles` with the value `Surfy.Tenant.{ExactTenantName}`).

The standard mode (`Surfy.Tenant.{ExactTenantName}` in `roles`) is unchanged and can still be used on other rules or connections.

## Principle

Surfy compares the value configured on the company with a list of values read from a JWT claim named on the rule:

1. On the **company** (target tenant), set <P code="company:jwtClaimCode" />: the identifier expected in the token.
2. On the **authentication rule**, set <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" />: the **claim name** in the JWT token (for example: `groups`, `tenant_codes`, etc.).
3. At sign-in, if the claim contains a value **identical** to <P code="company:jwtClaimCode" />, Surfy may create the user-tenant association (if it does not already exist).

This check is in addition to existing conditions: the user's email domain and the rule's authentication connection.

## Configuration in Surfy

### Step 1 — Set the code on the company

On the target tenant:

- set <P code="company:jwtClaimCode" /> to a **unique, explicit** value for that organization;
- this value must match exactly what the identity provider will send in the token (case-sensitive).

Example: `jwtClaimCode = SURFY-ACME-PROD`

### Step 2 — Configure the authentication rule

On the <OT code="userRegistrationTenantRule" /> linked to that tenant:

- enable <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" />;
- set <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> to the exact claim name on the identity provider side.

If <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> is **empty**, Surfy uses the standard mode: presence of `Surfy.Tenant.{ExactTenantName}` in the `roles` array, where `{ExactTenantName}` is the company's technical name.

## Expected JWT token format

The claim named in <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> can be provided in two ways:

- **Array of strings**: `["VALUE-A", "VALUE-B"]`
- **String**: a single value, or several comma-separated values: `"VALUE-A, VALUE-B"`

Surfy compares each value (after trimming spaces) to <P code="company:jwtClaimCode" />.

Example token (illustration):

```json
{
  "groups": ["OTHER-GROUP", "SURFY-ACME-PROD"]
}
```

With `jwtClaimCode = SURFY-ACME-PROD` on the company, association to the tenant is allowed.

## What this mechanism does — and does not do

- **Does**: allow **creation** of the user-tenant association when the claim matches.
- **Does not**: grant roles by itself. Roles remain managed by other rule options (static assignment or claim sync in `roles`).
- **Does not**: automatically remove an existing association if the claim disappears from the token.

## Security best practices

- Choose <P code="company:jwtClaimCode" /> values that are **specific** to each tenant; avoid generic codes shared across organizations.
- Configure the identity provider to emit this claim **only to users authorized** to access the relevant Surfy tenant.
- Restrict domains in <P code="userRegistrationTenantRule:domains" /> to trusted email addresses.
- Ensure the rule's authentication connection matches the provider your users actually use.

## See also

- [Authentication with claims](./authentication-with-claims.md) — role sync and association via `Surfy.Tenant.{ExactTenantName}` in `roles`
- [User-tenant association: lifecycle and modes](./user-tenant-association-lifecycle.md) — when Surfy checks and applies rules
