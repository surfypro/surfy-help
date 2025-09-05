---
sidebar_position: 2
---

# Organization

An organization represents a group, department, or company structure within Surfy that can contain people and be associated with various entities.

## Properties

### Basic Information
- **<P code="organization:name" />** - The name of the organization (required)
- **<P code="organization:code" />** - Unique identifier code for the organization
- **<P code="organization:description" />** - Description or purpose of the organization

### Organizational Structure
- **<P code="organization:parentOrganization" />** - Parent organization if this is a sub-organization
- **<P code="organization:organizationType" />** - Type or category of the organization
- **<P code="organization:level" />** - Hierarchical level within the organization structure

### Contact Information
- **<P code="organization:email" />** - Primary email address for the organization
- **<P code="organization:telephone" />** - Primary phone number for the organization
- **<P code="organization:address" />** - Physical address of the organization

### Additional Properties
- **<P code="organization:website" />** - Organization's website URL
- **<P code="organization:logo" />** - Organization's logo image
- **<P code="organization:color" />** - Color used to represent the organization in visualizations
- **<P code="organization:active" />** - Flag indicating if the organization is currently active

## Usage

Organizations are used in Surfy to:
- Group people into logical units
- Organize space assignments and management
- Generate organizational reports and analytics
- Manage permissions and access control
- Structure cost center hierarchies
- Create organizational charts and visualizations

## Related Entities

- **<P code="person" />** - People who belong to the organization
- **<P code="building" />** - Buildings where the organization operates
- **<P code="room" />** - Rooms assigned to the organization
- **<P code="costCenter" />** - Cost centers associated with the organization
- **<P code="workplace" />** - Workstations assigned to organization members

## Organizational Hierarchy

Organizations can form hierarchical structures:
- **Parent Organizations** - Higher-level organizations that contain sub-organizations
- **Sub-organizations** - Organizations that belong to a parent organization
- **Root Organizations** - Top-level organizations with no parent

This hierarchy allows for:
- Complex organizational reporting structures
- Delegated management and permissions
- Hierarchical cost allocation
- Multi-level space planning and management
