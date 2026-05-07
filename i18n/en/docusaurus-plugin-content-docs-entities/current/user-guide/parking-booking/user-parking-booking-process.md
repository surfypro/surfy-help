# User parking booking flow

This guide describes what the end user sees and does once configuration is in place.

## Step 1 - Open booking

The user opens planning/booking. The system loads buildings where parking booking is allowed for this user.

## Step 2 - Compatibility checks

Before proposing spaces, the system checks:

- a vehicle exists;
- the vehicle matches configured parking room types;
- the selected day slot (morning / afternoon / full day) is allowed;
- single booking per day rule is respected.

If any check fails, a message is shown and booking is blocked.

## Step 3 - Choose building and floor

The user selects a building, then a floor.

The system displays availability stats (total, booked, free spaces).

## Step 4 - Choose parking space

The user selects a compatible free space (or uses automatic booking if available).

## Step 5 - Confirm

The system checks real-time availability:

- if free, booking is confirmed;
- otherwise, the user must select another space.
