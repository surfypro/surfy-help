---
sidebar_position: 5
---

# Item Type

An item type defines the characteristics and properties of objects that can be placed in Surfy spaces, such as furniture, equipment, or other items.

## Properties

### Basic Information
- **<P code="itemType:name" />** - The name of the item type (required)
- **<P code="itemType:code" />** - Unique identifier code for the item type
- **<P code="itemType:description" />** - Description of the item type
- **<P code="itemType:itemTypeFamily" />** - Family or category the item type belongs to (required)

### Visual Properties
- **<P code="itemType:picture" />** - Image representing the item type
- **<P code="itemType:color" />** - Color used to represent the item type in visualizations
- **<P code="itemType:icon" />** - Icon representing the item type (for icon-based objects)
- **<P code="itemType:iconShape" />** - Shape of the icon (circle, square, triangle, etc.)
- **<P code="itemType:iconBackgroundColor" />** - Background color of the icon
- **<P code="itemType:iconBorderColor" />** - Border color of the icon

### Physical Properties
- **<P code="itemType:height" />** - Height of the item in meters/feet
- **<P code="itemType:width" />** - Width of the item in meters/feet
- **<P code="itemType:depth" />** - Depth of the item in meters/feet
- **<P code="itemType:zIndex" />** - Vertical stacking order for overlapping items (default: 0)
- **<P code="itemType:seatsCount" />** - Number of seats provided by the item (for seating furniture)

### Display and Reference
- **<P code="itemType:displayItemReferenceInMap" />** - Flag to show item reference on maps
- **<P code="itemType:object3dModel" />** - 3D model file for the item type

### Business Properties
- **<P code="itemType:price" />** - Cost or price of the item type
- **<P code="itemType:manufacturer" />** - Manufacturer or brand of the item
- **<P code="itemType:carbonFootprint" />** - Environmental impact rating of the item

### Management Properties
- **<P code="itemType:active" />** - Flag indicating if the item type is currently active
- **<P code="itemType:tags" />** - Tags or labels for categorizing the item type

## Item Type Categories

### Scaled Object Types
Items that are drawn to scale on plans:
- **Furniture** - Desks, chairs, tables, cabinets
- **Equipment** - Computers, printers, appliances
- **Fixtures** - Lighting, plumbing, electrical fixtures

### Icon Object Types
Items represented by icons on plans:
- **Small Items** - Plants, decorations, small equipment
- **Strategic Points** - Emergency exits, fire extinguishers, information points
- **Service Areas** - Coffee machines, water coolers, vending machines

## Usage

Item types are used in Surfy to:
- Define standard furniture and equipment specifications
- Ensure consistency in object representation across plans
- Manage inventory and asset tracking
- Generate reports on object types and quantities
- Plan space layouts with appropriate furniture
- Calculate costs and environmental impact

## Related Entities

- **<P code="itemTypeFamily" />** - Family/category of the item type
- **<P code="item" />** - Individual instances of the item type
- **<P code="workplace" />** - Workstations using this item type
- **<P code="room" />** - Rooms containing items of this type
- **<P code="building" />** - Buildings containing items of this type

## Item Type Management

Item types can be managed for:
- **Standardization** - Ensuring consistent object specifications
- **Inventory Control** - Tracking quantities and locations
- **Space Planning** - Planning layouts with appropriate furniture
- **Cost Management** - Tracking costs and budgets
- **Sustainability** - Monitoring environmental impact
- **Maintenance** - Planning maintenance schedules
