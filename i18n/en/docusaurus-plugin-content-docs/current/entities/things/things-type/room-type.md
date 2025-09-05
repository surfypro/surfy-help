---
sidebar_position: 6
---

# Room Type

A room type defines the category and characteristics of rooms, allowing for consistent classification and management of spaces across buildings and floors.

## Properties

### Basic Information
- **<P code="roomType:name" />** - The name of the room type (required)
- **<P code="roomType:code" />** - Unique identifier code for the room type
- **<P code="roomType:description" />** - Description of the room type's purpose and characteristics

### Visual Properties
- **<P code="roomType:color" />** - Color used to represent rooms of this type in 2D visualizations
- **<P code="roomType:color3d" />** - Color used for 3D visualization of rooms of this type
- **<P code="roomType:icon" />** - Icon representing the room type on plans and maps

### Room Type Characteristics
- **<P code="roomType:defaultArea" />** - Default area for rooms of this type
- **<P code="roomType:defaultCapacity" />** - Default capacity for rooms of this type
- **<P code="roomType:defaultSeatsCount" />** - Default number of seats for rooms of this type
- **<P code="roomType:isBookable" />** - Flag indicating if rooms of this type can be booked
- **<P code="roomType:requiresApproval" />** - Flag indicating if booking requires approval

### Management Properties
- **<P code="roomType:active" />** - Flag indicating if the room type is currently active
- **<P code="roomType:tags" />** - Tags or labels for categorizing the room type
- **<P code="roomType:notes" />** - Additional notes about the room type

## Common Room Types

### Office Spaces
- **Individual Office** - Single-person office spaces
- **Shared Office** - Multi-person office spaces
- **Open Plan** - Open workspace areas
- **Executive Office** - Senior management offices

### Meeting Spaces
- **Conference Room** - Large meeting rooms for presentations
- **Meeting Room** - Standard meeting rooms
- **Huddle Room** - Small, informal meeting spaces
- **Training Room** - Spaces designed for training sessions

### Support Spaces
- **Break Room** - Employee break and relaxation areas
- **Kitchen** - Food preparation and dining areas
- **Reception** - Welcome and waiting areas
- **Storage** - Storage and utility spaces

### Specialized Spaces
- **Server Room** - IT infrastructure spaces
- **Laboratory** - Research and testing spaces
- **Medical Room** - Healthcare and first aid spaces
- **Security Room** - Security and monitoring spaces

## Usage

Room types are used in Surfy to:
- Categorize and classify rooms consistently
- Apply standard properties and settings to similar rooms
- Generate reports by room type
- Manage room-specific policies and permissions
- Plan space allocation and utilization
- Standardize room design and configuration

## Related Entities

- **<P code="room" />** - Rooms that belong to this type
- **<P code="building" />** - Buildings containing rooms of this type
- **<P code="floor" />** - Floors containing rooms of this type
- **<P code="organization" />** - Organizations using rooms of this type
- **<P code="costCenter" />** - Cost centers associated with rooms of this type

## Room Type Management

Room types can be managed for:
- **Standardization** - Ensuring consistent room classifications
- **Space Planning** - Planning room layouts and configurations
- **Policy Management** - Applying type-specific policies and rules
- **Reporting** - Generating reports by room type
- **Cost Allocation** - Allocating costs by room type
- **Maintenance** - Planning maintenance by room type

## Benefits of Room Type Classification

- **Consistency** - Standardized room categorization across the organization
- **Efficiency** - Quick identification and management of similar spaces
- **Planning** - Better space planning and allocation
- **Reporting** - Enhanced reporting and analytics capabilities
- **Maintenance** - Streamlined maintenance and service planning
- **Compliance** - Easier compliance with space and safety regulations
