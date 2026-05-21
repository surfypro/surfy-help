# What's New (alpha)

This page describes **visible changes** already available on the **Surfy alpha application**, before they are rolled out to the standard production application.

**To try these updates**: [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

Most organizations’ day-to-day application remains at [https://app.surfy.pro](https://app.surfy.pro).

When a release goes to production, useful content is moved to [What's New](./app.md); this page is then hidden by renaming it to `_app-alpha.md`.

## May 21, 2026 - v3.4.199

- <OT code="person" />
  - New property <P code="person:mainLocation" /> (reference establishment) on the person record.

- Workday import of people, organizations and cost centers
  - The import now sets <P code="person:mainLocation" /> from each person’s Workday location.

- Building assignments
  - On the person record, assignment checklists (room, workstation) and global search show icons for each link: counted in the building, workstation booking and parking booking allowed.
  - When removing a building assignment from these lists, a link with workstation or parking booking configured is no longer deleted: the person is removed from the building count instead.

- Parking booking (planning)
  - Parking booking options are grouped in a collapsible “Book parking” panel.

- <OT code="userRegistrationTenantRule" />
  - Refined help texts for OpenID claim options and tenant association.

## May 20, 2026 - v3.4.198

- <OT code="building" />
  - New property <P code="building:code" /> on the building record.
  - <P code="building:surface" /> is also shown on the building card when set.

- Workday import of people, organizations and cost centers
  - During the building-assignment step, <P code="personToBuilding:allowWorkplaceBookingInTheBuilding" /> and <P code="personToBuilding:allowParkingBookingInTheBuilding" /> are set according to the target building’s <P code="building:code" />.
  - The generic thermal vehicle assignment step is blocked with a clear message if the expected vehicle (external key `GENERIC-THERMIC`) does not exist in Surfy yet.

- Color properties
  - More reliable color entry when editing a color property on a record.

- Workstation booking on an assignment layer
  - Clearer booking button labels when a specific floor applies to the selected time slot.
