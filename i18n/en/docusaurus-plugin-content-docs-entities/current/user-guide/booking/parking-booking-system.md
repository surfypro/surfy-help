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
   - Enter the **"Code"** field with exactly these values (uppercase, with hyphens)
   - Add a name and color to facilitate identification

2. **Associate Rooms to Types**:
   - For each parking space (room) in the system
   - Select the appropriate room type (the one with code `PARKING-CAR`, `PARKING-ELECTRIC-CAR`, or `PARKING-PRM`)
   - The system will automatically use the room type code to filter available spaces

**Important**: Codes must be written exactly as indicated (uppercase, with hyphens) for the system to recognize them correctly.

## Vehicle Types

The system supports different vehicle types. Each vehicle is defined by:

### Vehicle Type
- **CAR**: Car
- Other types can be added as needed (motorcycle, bicycle, etc.)

### Propulsion Type
The propulsion type determines the vehicle's power source:
- **ELECTRIC**: Electric propulsion
- **THERMAL**: Thermal propulsion (gasoline, diesel, etc.)
- **HYBRID**: Hybrid propulsion
- **MANUAL**: Manual propulsion (bicycle, etc.)
- Other types can be configured as needed

## Vehicle to Parking Space Mapping

The system automatically associates vehicles with appropriate parking space types:

### Mapping Rules

1. **Electric Car (CAR + ELECTRIC)**
   - Maps to: **PARKING-ELECTRIC-CAR**
   - The system only shows spaces equipped for electric charging

2. **Non-Electric Car (CAR + other propulsion)**
   - Maps to: **PARKING-CAR**
   - The system shows standard parking spaces

3. **People with Reduced Mobility**
   - Maps to: **PARKING-PRM**
   - Accessible based on the user's specific needs

### System Behavior

- If a user owns multiple vehicles, the system displays all spaces compatible with at least one of their vehicles
- If a user has no registered vehicles, they cannot reserve parking spaces
- The system automatically filters available spaces based on the user's vehicles

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
2. The vehicle must be properly configured with its type (e.g., CAR) and propulsion type (e.g., ELECTRIC, THERMAL, etc.)

### Result
Once these three conditions are met:
- The person is associated with the building
- The parking booking option is enabled
- The person has at least one vehicle registered

The user will then be able to see and reserve parking spaces in this building. The spaces offered will be automatically filtered according to the registered vehicle types.

### Important Note
This configuration must be performed for each building where the user should be able to reserve parking spaces. If a user works in multiple buildings, the option must be enabled separately for each building.

## Important Notes

- Parking spaces are reserved for a specific period (generally one day)
- The system automatically checks compatibility between vehicles and space types
- Reservations can be viewed in the "My Reservations" section
- Administrators can configure vehicle and space types according to the company's needs
