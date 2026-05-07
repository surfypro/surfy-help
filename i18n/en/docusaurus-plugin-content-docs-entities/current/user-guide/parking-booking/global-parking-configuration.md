# Global platform configuration (parking)

This guide describes the baseline setup required for parking booking to work.

## 1) Configure parking room types

Create (or verify) parking room types with expected codes in <P code="roomType:code" />:

- `PARKING-CAR`
- `PARKING-ELECTRIC-CAR`
- `PARKING-PRM`

Codes must match exactly (uppercase, hyphenated).

## 2) Configure vehicle -> parking mappings

In booking vehicle configuration:

- set vehicle type (<P code="vehicleType:code" />);
- set propulsion type (<P code="vehiclePropulsionType:code" />);
- link allowed parking room types through `BookingVehicleConfigurationToParkingRoomTypeConfiguration`;
- define allowed day slots (morning / afternoon / full day);
- define single booking per day option.

### About `vehicleType:code` values (e.g. `CAR`, `CAR-...`)

Unlike parking room type codes (`PARKING-CAR`, etc.), **vehicle type** codes are not a fixed standard imposed by Surfy: they come from your master data and may vary per tenant.

What Surfy does:

- a vehicle references a vehicle type and a propulsion type (via their IDs);
- parking compatibility then relies on the **codes** of those master data entries (e.g. `CAR`, `CAR-COMPANY`, etc.) to find the matching booking vehicle configuration.

### Recommended convention for vehicle codes

To keep operations consistent and avoid tenant-to-tenant ambiguity, we recommend:

- `vehicleType:code`:
  - `CAR`
  - `CAR-PRM` (PRM vehicle)
  - `MOTORBIKE`
  - `BICYCLE`
- `vehiclePropulsionType:code`:
  - `THERMAL`
  - `ELECTRIC`
  - `HYBRID`

Important:

- this is a **recommendation** (not a hard technical constraint);
- parking mappings work as long as the same codes are used end-to-end (vehicle master data + booking configuration).

To verify/maintain these codes, refer to the reference pages:

- **Vehicle type**: `/entities/surfy/global-admin/admin-vehicles/vehicle-type`
- **Vehicle propulsion type**: `/entities/surfy/global-admin/admin-vehicles/vehicle-propulsion-type`

## 3) Important blocking point

Without valid `BookingVehicleConfigurationToParkingRoomTypeConfiguration` rows, parking spaces are not proposed.

In practice:

- a vehicle combination without parking mapping is ignored;
- if none of the user’s combinations maps to an allowed parking room type, parking booking is unavailable.

### Why this blocks booking

The booking engine does not propose parking "globally".  
It first looks for a strict match between:

- the user vehicle type;
- the user vehicle propulsion type;
- configured parking mapping rows.

If no row matches the vehicle, no parking space is displayed.

### How to configure (step by step)

1. Create one `BookingVehicleConfiguration` row per allowed combination:
   - `vehicleTypeId` (example: car);
   - `vehiclePropulsionTypeId` (example: thermal, electric, hybrid).
2. For each `BookingVehicleConfiguration`, add one or more `BookingVehicleConfigurationToParkingRoomTypeConfiguration` rows.
3. In each child row, define:
   - allowed parking room type (`parkingRoomTypeCode`);
   - allowed day slots (`allowDaySlotAm`, `allowDaySlotPm`, `allowDaySlotAll`);
   - single booking per day rule (`singleBookingPerDay`).
4. Verify parking room type codes exist in room type master data:
   - `PARKING-CAR`, `PARKING-ELECTRIC-CAR`, `PARKING-PRM`.

### Purpose of each field

For `BookingVehicleConfiguration` (parent level):

- `vehicleTypeId`: targets the vehicle family.
- `vehiclePropulsionTypeId`: refines the rule by propulsion.
- `id`: technical identifier used by child rows.

For `BookingVehicleConfigurationToParkingRoomTypeConfiguration` (parking mapping level):

- `bookingVehicleConfigurationId`: links the row to the parent type + propulsion combination.
- `parkingRoomTypeCode`: allowed parking room type for that combination.
- `allowDaySlotAm`: allows booking on morning slot.
- `allowDaySlotPm`: allows booking on afternoon slot.
- `allowDaySlotAll`: allows booking on full-day slot.
- `singleBookingPerDay`: prevents multiple parking bookings on the same day for vehicles covered by this mapping.

Technical fields (audit/multi-tenant):

- `companyId`, `createdAt`, `updatedAt`, `externalId`, `userCompanyCreatedById`, `userCompanyUpdatedById`.
- These fields are for traceability and company context, not for parking compatibility logic.

### Concrete example

Example rule:

- Parent `BookingVehicleConfiguration`:
  - `vehicleType = CAR`
  - `vehiclePropulsionType = ELECTRIC`
- Child `BookingVehicleConfigurationToParkingRoomTypeConfiguration`:
  - `parkingRoomTypeCode = PARKING-ELECTRIC-CAR`
  - `allowDaySlotAm = true`
  - `allowDaySlotPm = true`
  - `allowDaySlotAll = false`
  - `singleBookingPerDay = true`

Result:

- a user with an electric car can book an electric parking spot in the morning or afternoon;
- they cannot book in full-day mode;
- they cannot create two parking bookings on the same day.
