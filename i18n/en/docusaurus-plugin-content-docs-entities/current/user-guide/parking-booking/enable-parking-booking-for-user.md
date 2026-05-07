# Enable parking booking for a user

For a user to book parking, three conditions must be met.

## 1) Associate the person to the building

In the person-building relation, the person must be linked to the target building.

## 2) Enable parking booking on that building

In the same relation, enable the option allowing parking booking in the building.

## 3) Verify the person’s vehicles

The person must have at least one correctly configured vehicle:

- vehicle type via <P code="vehicleType:code" />
- propulsion type via <P code="vehiclePropulsionType:code" />

## 4) Verify compatibility with global configuration

Even with correct building association, parking booking is only possible if the user’s vehicles match valid parking configuration rows (see global configuration guide).
