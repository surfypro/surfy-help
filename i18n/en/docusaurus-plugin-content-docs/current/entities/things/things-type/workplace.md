---
sidebar_position: 7
---

# Workplace

A workplace represents a specific workstation or desk that can be assigned to a person for their daily work activities.

## Properties

### Basic Information
- **<P code="workplace:name" />** - The name of the workplace (required)
- **<P code="workplace:code" />** - Unique identifier code for the workplace
- **<P code="workplace:description" />** - Description of the workplace

### Location and Assignment
- **<P code="workplace:room" />** - The room where the workplace is located
- **<P code="workplace:floor" />** - The floor containing the workplace
- **<P code="workplace:building" />** - The building containing the workplace
- **<P code="workplace:workplaceType" />** - Type or category of the workplace
- **<P code="workplace:person" />** - Person currently assigned to the workplace

### Physical Properties
- **<P code="workplace:area" />** - Area of the workplace in square meters/feet
- **<P code="workplace:height" />** - Height of the workplace in meters/feet
- **<P code="workplace:width" />** - Width of the workplace in meters/feet
- **<P code="workplace:depth" />** - Depth of the workplace in meters/feet
- **<P code="workplace:seatsCount" />** - Number of seats at the workplace

### Workplace Characteristics
- **<P code="workplace:isAccessible" />** - Flag indicating if the workplace is wheelchair accessible
- **<P code="workplace:hasNaturalLight" />** - Flag indicating if the workplace has natural light
- **<P code="workplace:hasAirConditioning" />** - Flag indicating if the workplace has air conditioning
- **<P code="workplace:isQuiet" />** - Flag indicating if the workplace is in a quiet area
- **<P code="workplace:isCollaborative" />** - Flag indicating if the workplace supports collaboration

### Visual Properties
- **<P code="workplace:color" />** - Color used to represent the workplace in visualizations
- **<P code="workplace:picture" />** - Image of the workplace
- **<P code="workplace:icon" />** - Icon representing the workplace type

### Management Information
- **<P code="workplace:organization" />** - Organization assigned to the workplace
- **<P code="workplace:costCenter" />** - Cost center associated with the workplace
- **<P code="workplace:manager" />** - Person responsible for managing the workplace
- **<P code="workplace:active" />** - Flag indicating if the workplace is currently active
- **<P code="workplace:available" />** - Flag indicating if the workplace is available for assignment

### Additional Properties
- **<P code="workplace:notes" />** - Additional notes about the workplace
- **<P code="workplace:tags" />** - Tags or labels for categorizing the workplace
- **<P code="workplace:customFields" />** - Custom properties specific to the workplace

## Workplace Types

### Individual Workplaces
- **Individual Desk** - Single-person workstation
- **Executive Desk** - Senior management workstation
- **Standing Desk** - Height-adjustable workstation
- **Corner Desk** - Corner workstation for privacy

### Shared Workplaces
- **Shared Desk** - Multi-person workstation
- **Hot Desk** - Unassigned workstation for temporary use
- **Collaborative Space** - Team-oriented workspace
- **Meeting Table** - Table-based collaborative workspace

### Specialized Workplaces
- **Lab Bench** - Laboratory workstation
- **Server Rack** - IT infrastructure workspace
- **Reception Desk** - Welcome and administrative workspace
- **Security Station** - Security monitoring workspace

## Usage

Workplaces are used in Surfy to:
- Assign people to specific workstations
- Track workplace utilization and occupancy
- Manage workplace assignments and changes
- Generate workplace-specific reports and analytics
- Plan workplace layouts and configurations
- Handle workplace booking and reservations

## Related Entities

- **<P code="room" />** - Room containing the workplace
- **<P code="floor" />** - Floor containing the workplace
- **<P code="building" />** - Building containing the workplace
- **<P code="workplaceType" />** - Type/category of the workplace
- **<P code="person" />** - Person assigned to the workplace
- **<P code="organization" />** - Organization assigned to the workplace
- **<P code="costCenter" />** - Cost center associated with the workplace

## Workplace Management

Workplaces can be managed for:
- **Assignment Management** - Assigning and reassigning people to workplaces
- **Space Planning** - Optimizing workplace layouts and configurations
- **Utilization Tracking** - Monitoring workplace usage and efficiency
- **Maintenance** - Planning workplace maintenance and repairs
- **Cost Allocation** - Allocating costs at the workplace level
- **Reporting** - Generating workplace-specific utilization reports

## Workplace Assignment Process

1. **Identification** - Identify available workplaces
2. **Assessment** - Assess workplace suitability for the person
3. **Assignment** - Assign the person to the workplace
4. **Configuration** - Configure the workplace for the person's needs
5. **Monitoring** - Monitor workplace utilization and satisfaction
6. **Adjustment** - Make adjustments as needed
