# Authentication with claims

This guide describes behavior when <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is enabled.

## Principle

- Roles exposed as claims are synced from the token.
- Content roles exposed as claims are synced from the token.
- Roles and content roles not exposed as claims are not governed by the token.

Synchronization is complete for the roles it governs:

- if the claim is present in the token, the role is added to the user;
- if the claim is no longer present, the role association is removed;
- this behavior applies at sign-in and after silent token refresh.

Only roles and content roles marked as claims are governed by this mechanism:

- for roles: <P code="jupRole:isClaim" /> must be enabled;
- for content roles: <P code="contentRole:isClaim" /> must be enabled.

Roles not marked as claims remain manually managed or managed through static assignment rules.

## Expected JWT format

To be processed (current official support), values must be present in the JWT token using:

- `roles: ["a", "b"]`.

## How to format role codes in claims

A claim matches a role in two ways:

- Direct match with the role or content role code (example: `admin_tenant`).
- Surfy format: `Surfy.Role.<RoleSuffix>` (example: `Surfy.Role.AdminTenant`).

The suffix (`AdminTenant`) is the PascalCase version of the code:

- `admin_tenant` -> `Surfy.Role.AdminTenant`
- `admin-tenant` -> `Surfy.Role.AdminTenant`
- `adminTenant` -> `Surfy.Role.AdminTenant`

## Tenant-scoped claims

You can also use tenant-scoped claims:

- `Surfy.Tenant.<ExactTenantName>.Role.<RoleSuffix>`

Example:

- `Surfy.Tenant.acme-corp.Role.AdminTenant`

Important rules:

- `<ExactTenantName>` must exactly match the tenant name in Surfy.
- If the name does not match, the claim is ignored for that tenant.
- This applies to roles and content roles exposed as claims.

## Tenant association through claim

A rule can also require the user to be associated to a tenant only when the token contains a dedicated claim:

- enable <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" /> on the rule;
- add `Surfy.Tenant.<ExactTenantName>` to the token `roles` array.

This claim only authorizes creation of the user-tenant association. It does not grant a role by itself.

Example:

- `roles: ["Surfy.Tenant.acme-corp"]` authorizes association to the tenant whose exact name is `acme-corp`.
- `roles: ["Surfy.Tenant.acme-corp.Role.AdminTenant"]` grants a role scoped to that tenant, but does not create the user-tenant association by itself.

## Interaction with static rules

When <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> is also enabled, roles not exposed as claims can still be added by the rule, but only when a new user is automatically associated for the first time.

Roles exposed as claims should not be managed by static assignment: they are governed by token contents.
