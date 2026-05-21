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

- Assigning a person on the plan (checklist dialog)
  - When you assign a person to a **space** or **workstation**, the dialog that offers to remove their other existing assignments has been improved for the **buildings** section.
  - Each other building listed shows icons for whether the person is **counted** in the building (<P code="personToBuilding:addToPeopleCount" />), may **book a workstation** (<P code="personToBuilding:allowWorkplaceBookingInTheBuilding" />), or may **book parking** (<P code="personToBuilding:allowParkingBookingInTheBuilding" />) there.
  - By default, only building assignments where the person is still counted remain **checked**; links already excluded from the count are no longer selected automatically.
  - If you confirm removing an assignment to a building where workstation or parking booking is already allowed, Surfy **no longer deletes** the link: the person is removed from the building count, but the related booking options are kept.
  - The same icons appear on the **person record** (building assignments panel) and in **global person search** results.

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
