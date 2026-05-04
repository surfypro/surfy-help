# Parking Booking System

## Overview

Surfy's parking booking system allows users to reserve parking spaces in their company's buildings. The system automatically filters available spaces based on the user's vehicle type and propulsion method.

## Parking Space Types

The system recognizes three types of parking spaces:

### 1. PARKING-CAR
- **Description**: Standard parking space for thermal engine vehicles
- **Usage**: Intended for cars and other non-electric motor vehicles

### 2. PARKING-ELECTRIC-CAR
- **Description**: Parking space equipped for electric vehicles
- **Usage**: Intended for electric cars requiring a charging station

### 3. PARKING-PRM
- **Description**: Parking space reserved for people with reduced mobility (PRM)
- **Usage**: Accessible to users who need adapted parking

### Configuring Parking Space Types

For the system to recognize parking spaces, an administrator must configure room types (RoomType) with the appropriate codes:

1. **Create Parking Room Types**:
   - Access room type management (RoomType)
   - Create three room types with the following codes:
     - `PARKING-CAR` for standard parking spaces
     - `PARKING-ELECTRIC-CAR` for electric parking spaces
     - `PARKING-PRM` for PRM parking spaces
   - Enter property <P code="roomType:code" /> with exactly these values (uppercase, with hyphens)
   - Add a name and color to facilitate identification

2. **Associate Rooms to Types**:
   - For each parking space (room) in the system
   - Select the appropriate room type (the one with code `PARKING-CAR`, `PARKING-ELECTRIC-CAR`, or `PARKING-PRM`)
   - The system will automatically use <P code="roomType:code" /> to filter available spaces

**Important**: Codes must be written exactly as indicated (uppercase, with hyphens) for the system to recognize them correctly.

## Vehicle Types

The system supports different vehicle types. Each vehicle is defined by:

### Vehicle Type
- **`CAR`**: Car
- **`CAR-PRM`**: Car for people with reduced mobility (PRM)
- The system uses property <P code="vehicleType:code" /> for filtering.
- The mapping is currently provided for `CAR` and `CAR-PRM`.

### Propulsion Type
The propulsion type determines whether the vehicle is considered "electric" or "non-electric" for parking filtering:

- **`ELECTRIC`**: Electric propulsion
- **`*`**: Non-electric propulsion (all other propulsion codes)

To make the mapping work, property <P code="vehiclePropulsionType:code" /> must be **exactly** `ELECTRIC` (electric vehicles) or `*` (non-electric vehicles).

## Vehicle to Parking Space Mapping

The system automatically associates vehicles with parking space types based on booking vehicle configuration master data.

### Configuration Source

Mappings are read from booking vehicle configuration, together with its linked parking mapping lines:

- Vehicle configuration: vehicle type + propulsion type
- Mapping lines: parking space type, allowed day slots, and single booking per day option

Filtering uses the combination of:
- <P code="vehicleType:code" />
- <P code="vehiclePropulsionType:code" />
- parking room type code (`PARKING-CAR`, `PARKING-ELECTRIC-CAR`, `PARKING-PRM`)

### Advanced Mapping Options

Each vehicle-to-parking mapping can be configured with two advanced options:

#### 1. Allowed Day Slot Types (`allowedDaySlotTypes`)

This option controls which time slots during the day a vehicle type can book parking spaces:

- **`am`**: Morning slot (typically 8:00 AM - 1:30 PM)
- **`pm`**: Afternoon slot (typically 2:00 PM - 7:00 PM)
- **`all`**: Full day slot (typically 8:00 AM - 7:00 PM)

**How it works:**
- When a user's working location has a specific day slot type (e.g., "all day"), the system checks if their vehicle type is allowed to book parking during that slot
- If the vehicle's allowed day slots don't include the user's working location slot, the system will:
  - Display a message indicating which day slots are available for booking
  - Prevent booking if no compatible slots exist
  - Show a warning if only some parking types are compatible

**Example:**
- Electric cars might be configured to only allow booking during `am` or `pm` slots (not `all`)
- If a user with an electric car has an "all day" working location, they'll see a message like: "You can only book parking in the morning or afternoon"
- Standard cars might allow all slot types: `['am', 'pm', 'all']`

#### 2. Single Booking Per Day (`singleBookingPerDay`)

This option restricts a vehicle type to only one parking booking per day:

- **`true`**: The user can only book one parking space per day, regardless of time slot
- **`false`**: The user can book multiple parking spaces per day (e.g., one in the morning, one in the afternoon)

**How it works:**
- When `singleBookingPerDay` is `true` for a vehicle type, the system checks if the user already has a parking booking for that day
- If a booking exists, the system prevents creating another booking and displays a message like: "You already have a parking booking for this day. With your vehicle type, you can only book one parking space per day."
- The check considers bookings across all day slots (morning, afternoon, and full day) for the same date
- This is useful for vehicle types that require special parking spaces (like electric cars with charging stations) where availability is limited

**Example:**
- Electric cars might have `singleBookingPerDay: true` to ensure fair distribution of charging stations
- Standard cars might have `singleBookingPerDay: false` to allow multiple bookings per day

### System Behavior

- If a user owns multiple vehicles, the system displays all spaces compatible with at least one of their vehicles
- If a user has no registered vehicles, they cannot reserve parking spaces
- The system automatically filters available spaces based on the user's vehicles
- The system enforces day slot compatibility and single booking per day restrictions based on the vehicle type configuration

## Booking Process

### Step 1: Access to Booking
1. The user accesses the booking section of their workplace
2. The system automatically loads buildings where parking booking is authorized

### Step 2: Building Selection
1. The user sees a list of buildings with available parking spaces
2. For each building, the system displays only spaces compatible with the user's vehicles

### Step 3: Floor Selection
1. The user selects a building
2. The system displays floors containing available parking spaces
3. For each floor, the user sees:
   - Total number of spaces
   - Number of already reserved spaces
   - Number of free spaces

### Step 4: Space Selection
1. The user clicks on a floor to see the parking map
2. The map displays:
   - Available spaces (in green or normal color)
   - Already reserved spaces (in red or different color)
   - Spaces compatible with the user's vehicles
3. The user clicks on an available space to reserve it

### Step 5: Confirmation
1. The system checks availability in real-time
2. If the space is still available, the reservation is confirmed
3. If the space was reserved in the meantime, the system displays an error message

## Statistics Display

For each floor, the system displays:
- **Total Spaces**: Total number of parking spaces on the floor
- **Reserved Spaces**: Number of spaces already reserved for the selected period
- **Free Spaces**: Number of spaces still available

## Automatic Booking

The system also offers an automatic booking feature:
- The user can ask the system to automatically reserve an available space
- The system selects the first space compatible with the user's vehicles
- This feature is useful when the user has no preference for a specific space

## Conflict Management

If two users attempt to reserve the same space simultaneously:
- The system detects the conflict
- The first reservation is confirmed
- The second reservation is refused with an information message
- The user can then select another available space

## Booking Prerequisites

To be able to reserve a parking space, the user must:
1. Have at least one vehicle registered in their profile
2. Have the necessary permissions to reserve in the concerned building
3. Have a workplace defined for the desired period

## Enabling Parking Booking for a User

For a user to be able to reserve parking spaces in a building, **three conditions** must be met:

### Condition 1: The Person Must Be Associated with the Building
1. Access the concerned person's profile
2. Create or modify the building assignment (relationship "Person to Building")
3. Ensure that the person is properly associated with the building where they should be able to reserve

### Condition 2: Enable Parking Booking Option
1. In the building assignment, locate the option **"Allow parking booking in the building"**
2. Check this option to enable parking booking
3. Save the changes

### Condition 3: The Person Must Have a Vehicle
1. The person must have at least one vehicle registered in their profile
2. The vehicle must be properly configured with:
   - <P code="vehicleType:code" /> (e.g., `CAR` or `CAR-PRM`)
   - <P code="vehiclePropulsionType:code" /> (e.g., `ELECTRIC` or `*` for non-electric vehicles)

### Result
Once these three conditions are met:
- The person is associated with the building
- The parking booking option is enabled
- The person has at least one vehicle registered

The user will then be able to see and reserve parking spaces in this building. The spaces offered will be automatically filtered according to the registered vehicle types.

### Important Note
This configuration must be performed for each building where the user should be able to reserve parking spaces. If a user works in multiple buildings, the option must be enabled separately for each building.

## Parking Configuration

This section gathers the required setup to control parking filtering and booking rules.

### 1) Configure parking space types

1. Create room types with the following codes:
   - `PARKING-CAR`
   - `PARKING-ELECTRIC-CAR`
   - `PARKING-PRM`
2. Ensure property <P code="roomType:code" /> exactly matches those codes.
3. Link each parking room to the correct room type.

### 2) Configure vehicle -> parking mappings

1. In booking vehicle configuration, create one configuration per:
   - vehicle type
   - propulsion type
2. Add one or more mapping lines to parking room types.
3. For each line, define:
   - allowed day slots (morning, afternoon, full day)
   - single booking per day option

### 3) Common rule examples

- `CAR` + `ELECTRIC` -> `PARKING-ELECTRIC-CAR` with `am` and `pm`, and single booking per day enabled
- `CAR` + `*` -> `PARKING-CAR` with `am`, `pm`, `all`
- `CAR-PRM` + `*` -> `PARKING-PRM` with `am`, `pm`, `all`

## Important Notes

- Parking spaces are reserved for a specific period (generally one day)
- The system automatically checks compatibility between vehicles and space types
- The system enforces day slot restrictions and single booking per day rules based on vehicle type configuration
- Reservations can be viewed in the "My Reservations" section
- Administrators can configure vehicle and space types according to the company's needs
- Advanced mapping options are configured in booking master data, without code changes
