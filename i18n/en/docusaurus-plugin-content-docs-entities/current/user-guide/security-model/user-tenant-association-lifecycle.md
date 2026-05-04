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

## Step 3 - Apply roles based on selected mode

### Mode A - With claims

When <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is enabled:

- roles exposed as claims are synced from the token,
- content roles exposed as claims are synced from the token,
- roles not exposed as claims are not changed by this sync.

### Mode B - Without claims

When <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is disabled and <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> is enabled:

- rule roles are added when a new user-tenant association is created,
- rule content roles are added only on the user's first user-tenant association creation,
- these assignments are add-only.

## Key takeaway

- Yes, role checks continue after login during token refresh.
- Claims mode governs only roles and content roles exposed as claims.
- Other roles remain manually managed or managed by static rules.
