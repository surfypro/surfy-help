# Restrict scenario visibility by role

This guide explains how <P code="jupRole:excludeScenarios" /> works.

## What this setting does

When the restriction is active for a user, Surfy limits visibility to main buildings (no scenarios) and the floors of those buildings.

## When the behavior is applied

Scenario filtering applies only when both conditions are true:

- the user has **no content role** assigning buildings or floors;
- all of the user’s roles have <P code="jupRole:excludeScenarios" /> enabled.

## Important configuration note

In the current implementation, filtering is triggered only if **all** of the user’s roles have <P code="jupRole:excludeScenarios" /> enabled, as long as no content role already grants a building/floor scope.

## Practical recommendation

For a profile that should never see scenarios:

- enable <P code="jupRole:excludeScenarios" /> on all roles assigned to that profile;
- avoid assigning content roles that grant building/floor scope to that profile.
