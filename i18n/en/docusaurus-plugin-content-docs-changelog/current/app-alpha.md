# What's New (alpha)

This page describes **visible changes** already available on the **Surfy alpha application**, before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, useful content is moved to [What's New](./app.md); this page is then hidden by renaming it to `_app-alpha.md`.

## June 23, 2026 - v3.4.217

Summary of updates tested on alpha since production (`master`), including work from the `meetingrooms` and `react19` branches.

### Authentication and access

- <OT code="userRegistrationTenantRule" />
  - Automatic association of a user to a tenant when their sign-in token contains a custom claim matching the code defined on the company.
  - <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" />: claim name to read in the token.
  - <P code="company:jwtClaimCode" />: expected value in that claim.
  - The existing mode using `Surfy.Tenant.{ExactTenantName}` in token roles remains available when the custom claim is not set.
  - Guide: [Associate a user to a tenant via a custom JWT claim](/en/entities/user-guide/security-model/tenant-association-via-jwt-claim).

- Sign-in
  - After authentication, redirection can target a specific URL passed in the link (for example from a **workstation assignment QR code**).
  - Search message on the platform selection screen reworded (“No platform found”).

### <OT code="company" />

- New property <P code="company:prettyName" />: organization **display name**, in addition to the technical identifier.
  - Shown on tenant selection cards, in the search bar (filters by display name) and in the change-tenant menu.
  - Platform lists are sorted by display name.

### Planning and bookings

- **Parking** booking (My planning)
  - Button per building **floor** showing how many spaces are available.
  - Tooltip with current bookings and availability by parking space type.

- **Workstation** booking
  - **Release this booking** button on already booked workstations in planning.
  - Same-day booking confirmation: only bookings **created before the end** of the <P code="company:workplaceBookingConfirmationRange" /> window can receive a reminder or be cancelled automatically.
  - A booking made after that time (e.g. on a desk freed later in the day) is no longer affected.

- **Meeting room** booking
  - Clearer error messages when calendar event creation fails via Microsoft calendar.

### Plan and 3D views

- **Plan**
  - Background image sharper in view mode, smooth in edit mode.
  - **Map scale**: smoother creation and linking to the floor; clearer segment colours while drawing.
  - **Space** deletion: orphan segment points are removed from the plan and database.

- **Building 3D view**
  - Optimized loading and display (stability and smoothness).

### Import, export and reports

- **Excel import**
  - Downloadable templates and copyable column list: headers aligned with the importer (apostrophes removed from French labels).

- <OT code="building" />
  - **Spaces** report: export includes identifiers for spaces, floors, buildings, cost centers, organizations, distribution cost types and space types.

- **Tenant operations**
  - Import **people and organizations** from an HR file in CSV format (when the operation is enabled on the tenant).

### General interface

- **Entity lists**: clear message when pagination goes beyond the number of available items.
- **Side menu**: fixed display of nested entries.
- **Error messages**: messages offering an action (account creation, data correction, missing address, etc.) display more reliably.
