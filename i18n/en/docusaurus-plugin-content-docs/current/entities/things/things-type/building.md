---
sidebar_position: 3
---

# Building

A building represents a physical structure that contains floors, rooms, and other spaces in Surfy.

## Properties

### Basic Information
- **<P code="building:name" />** - The name of the building (required)
- **<P code="building:code" />** - Unique identifier code for the building
- **<P code="building:description" />** - Description of the building

### Location Information
- **<P code="building:address" />** - Physical address of the building
- **<P code="building:city" />** - City where the building is located
- **<P code="building:postalCode" />** - Postal/ZIP code of the building
- **<P code="building:country" />** - Country where the building is located
- **<P code="building:latitude" />** - Geographic latitude coordinate
- **<P code="building:longitude" />** - Geographic longitude coordinate

### Building Characteristics
- **<P code="building:buildingType" />** - Type or category of building (office, warehouse, etc.)
- **<P code="building:constructionYear" />** - Year the building was constructed
- **<P code="building:totalArea" />** - Total area of the building in square meters/feet
- **<P code="building:numberOfFloors" />** - Total number of floors in the building
- **<P code="building:height" />** - Height of the building in meters/feet

### Management Information
- **<P code="building:owner" />** - Owner of the building
- **<P code="building:manager" />** - Person responsible for managing the building
- **<P code="building:costCenter" />** - Cost center associated with the building
- **<P code="building:active" />** - Flag indicating if the building is currently active

### Additional Properties
- **<P code="building:picture" />** - Image of the building
- **<P code="building:notes" />** - Additional notes about the building
- **<P code="building:tags" />** - Tags or labels for categorizing the building

## Usage

Buildings are used in Surfy to:
- Organize space management at the highest level
- Group floors and rooms into logical structures
- Manage building-wide policies and settings
- Generate building-level reports and analytics
- Handle building-specific assignments and permissions
- Track building utilization and occupancy

## Related Entities

- **<P code="floor" />** - Floors within the building
- **<P code="room" />** - Rooms within the building
- **<P code="campus" />** - Campus that contains the building
- **<P code="organization" />** - Organizations operating in the building
- **<P code="person" />** - People assigned to the building
- **<P code="workplace" />** - Workstations located in the building

## Building Management

Buildings serve as the top-level container for:
- **Floor Management** - Organizing floors within the building
- **Space Planning** - Planning and allocating spaces across floors
- **Access Control** - Managing building-wide access permissions
- **Maintenance** - Tracking building maintenance and repairs
- **Cost Allocation** - Allocating costs at the building level
- **Reporting** - Generating building-specific reports and analytics
