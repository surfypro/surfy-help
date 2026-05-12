# User-tenant association: lifecycle and modes

This guide explains when Surfy associates a user with a tenant and how roles are applied.

## When checks are performed

Checks are re-run in two situations:

- At user sign-in.
- After silent token refresh.

This means claim-governed roles can be updated after the initial login, based on the refreshed token.

## Step 1 - Find applicable rules

Surfy applies authentication rules matching:

- the user's email domain,
- and the authentication connection used.

If no rule matches, no additional association is created.

## Step 2 - Associate the user to tenant

For each tenant defined by applicable rules:

- if the user-tenant association already exists, Surfy reuses it,
- otherwise Surfy creates the user-tenant association.

If <P code="userRegistrationTenantRule:useOpenIdTokenClaimsToAssociateToTenant" /> is enabled on the rule, this association is created only when the token `roles` array contains the exact value `Surfy.Tenant.<ExactTenantName>`.

This check only controls creation of the user-tenant association. It does not automatically remove an existing association.

## Step 3 - Apply roles based on selected mode

### Mode A - With claims

When <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is enabled:

- roles exposed as claims are synced from the token,
- content roles exposed as claims are synced from the token,
- claim-governed associations are added or removed to match the token,
- roles not exposed as claims are not changed by this sync.

Synchronization applies only to roles and content roles marked as claims.

### Mode B - Without claims

When <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is disabled and <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> is enabled:

- rule roles are added only during the first automatic association of a new user,
- rule content roles follow the same logic,
- these assignments are add-only.

Roles marked as claims are not governed by these static assignments.

## Key takeaway

- Yes, role checks continue after login during token refresh.
- Claims mode governs only roles and content roles exposed as claims, adding and removing them according to the token.
- Other roles remain manually managed or managed by static rules, add-only during the first automatic association.
- The `Surfy.Tenant.<ExactTenantName>` value in `roles` can gate tenant association, but does not grant any role.
