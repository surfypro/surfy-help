# Managing guests: how “Person Type” is used

Guest management in Surfy relies on a **person type** (in reference data) to identify which persons are considered guests.

## Prerequisite: a “guest” person type

For **guest planning** to work, you must have a <OT code="personType" /> whose <P code="personType:code" /> is:

- **`GUEST`**

The code is matched **case-insensitively** (for example `guest` also works), but using `GUEST` is recommended for consistency.

### Recommendation

- Keep **only one** person type with code `GUEST` (avoid duplicates).

## Default behavior (what Surfy does automatically)

When the `GUEST` type exists:

- The <LIV code="personWorkingLocation:guest-planning" /> view lists guests based on that type.
- When creating a guest from the planning view, Surfy automatically assigns the person to the `GUEST` type.

If the `GUEST` type does not exist:

- A warning message is displayed in the creation panel.
- Guest creation is **disabled** until a `GUEST` type becomes available.

## Troubleshooting

- **I don’t see any guests in the planning view**: check that the relevant persons have a type matching `GUEST`.
- **The create button is disabled**: create (or fix) the <OT code="personType" /> with code `GUEST`.

