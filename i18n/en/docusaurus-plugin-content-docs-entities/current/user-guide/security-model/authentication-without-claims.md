# Authentication without claims

This guide describes behavior when <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is disabled.

## Settings to know

- <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> enables automatic assignment of roles configured in the rule.
- Without <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" />, claims are not used for role assignment.

## Behavior

When <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> is enabled:

- Rule roles are assigned automatically when the user is added to a tenant.
- Rule content roles are assigned when the user-tenant association is created for the first time.
- These automatic assignments are add-only.

## Role governance

- Roles and content roles not exposed as claims remain manually managed.
- Roles and content roles exposed as claims are not synced while claims mode is disabled.
