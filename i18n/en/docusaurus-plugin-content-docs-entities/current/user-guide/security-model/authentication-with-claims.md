# Authentication with claims

This guide describes behavior when <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" /> is enabled.

## Principle

- Roles exposed as claims are synced from the token.
- Content roles exposed as claims are synced from the token.
- Roles and content roles not exposed as claims are not governed by the token.

## Expected JWT format

To be processed, values must be present in the JWT token in:

- `roles: ["..."]` (recommended format).
- or `role: ["..."]`.
- or `roles: "value1 value2"` (space-separated values).

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
