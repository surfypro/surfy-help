---
sidebar_position: 4
---

# Room

A room represents a specific space within a floor or building that can be assigned to people, organizations, or used for specific purposes.

## Properties

### Basic Information
- **<P code="room:name" />** - The name of the room (required)
- **<P code="room:code" />** - Unique identifier code for the room
- **<P code="room:description" />** - Description of the room's purpose or function

### Location and Structure
- **<P code="room:floor" />** - The floor where the room is located
- **<P code="room:building" />** - The building containing the room
- **<P code="room:roomType" />** - Type or category of the room (office, meeting room, etc.)
- **<P code="room:area" />** - Area of the room in square meters/feet
- **<P code="room:height" />** - Height of the room in meters/feet

### Room Characteristics
- **<P code="room:capacity" />** - Maximum number of people the room can accommodate
- **<P code="room:seatsCount" />** - Number of seats available in the room
- **<P code="room:hasWindows" />** - Flag indicating if the room has windows
- **<P code="room:isAccessible" />** - Flag indicating if the room is wheelchair accessible
- **<P code="room:hasAirConditioning" />** - Flag indicating if the room has air conditioning

### Visual Properties
- **<P code="room:color" />** - Color used to represent the room in visualizations
- **<P code="room:color3d" />** - Color used for 3D visualization of the room
- **<P code="room:icon" />** - Icon representing the room type
- **<P code="room:picture" />** - Image of the room

### Management Information
- **<P code="room:organization" />** - Organization assigned to the room
- **<P code="room:costCenter" />** - Cost center associated with the room
- **<P code="room:manager" />** - Person responsible for managing the room
- **<P code="room:active" />** - Flag indicating if the room is currently active

### Additional Properties
- **<P code="room:notes" />** - Additional notes about the room
- **<P code="room:tags" />** - Tags or labels for categorizing the room
- **<P code="room:customFields" />** - Custom properties specific to the room

## Usage

Rooms are used in Surfy to:
- Define specific spaces within buildings and floors
- Assign people and organizations to specific areas
- Manage room bookings and reservations
- Track room utilization and occupancy
- Generate room-specific reports and analytics
- Plan space layouts and configurations

## Related Entities

- **<P code="floor" />** - Floor containing the room
- **<P code="building" />** - Building containing the room
- **<P code="roomType" />** - Type/category of the room
- **<P code="organization" />** - Organization assigned to the room
- **<P code="person" />** - People assigned to the room
- **<P code="workplace" />** - Workstations located in the room
- **<P code="costCenter" />** - Cost center associated with the room

## Room Types

Common room types include:
- **Office Rooms** - Individual or shared office spaces
- **Meeting Rooms** - Conference and meeting spaces
- **Break Rooms** - Break areas and lounges
- **Storage Rooms** - Storage and utility spaces
- **Specialized Rooms** - Labs, server rooms, etc.

## Room Management

Rooms can be managed for:
- **Space Planning** - Optimizing room layouts and configurations
- **Capacity Management** - Ensuring rooms meet occupancy requirements
- **Booking Management** - Handling room reservations and scheduling
- **Maintenance** - Tracking room maintenance and repairs
- **Cost Allocation** - Allocating costs at the room level
- **Reporting** - Generating room-specific utilization reports
