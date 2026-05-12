# Authentication without claims

This guide describes behavior when <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is disabled.

## Settings to know

- <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> enables automatic assignment of roles configured in the rule.
- Without <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" />, claims are not used for role assignment.

## Behavior

When <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> is enabled:

- Rule roles are assigned automatically only when a new user is automatically associated for the first time.
- Rule content roles follow the same logic: they are added only during that first automatic association.
- These automatic assignments are add-only.

If the user already exists on another tenant, association to a new tenant may be created, but static roles are not replayed as a full synchronization.

## Role governance

- Roles and content roles not exposed as claims remain manually managed.
- Roles and content roles exposed as claims are not synced while claims mode is disabled.
- Roles marked as claims are not meant to be governed by static rule associations.
