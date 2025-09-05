---
sidebar_position: 1
---

# Person

A person represents an individual who can be assigned to spaces, workstations, or other entities in Surfy.

## Properties

### Basic Information
- **<P code="person:lastname" />** - The person's last name (required)
- **<P code="person:firstname" />** - The person's first name (required)
- **<P code="person:email" />** - The person's email address
- **<P code="person:picture" />** - Profile picture of the person
- **<P code="person:title" />** - Job title or position
- **<P code="person:code" />** - Employee number or unique identifier code

### Contact Information
- **<P code="person:telephone" />** - Landline phone number
- **<P code="person:cellphone" />** - Mobile phone number

### Equipment References
- **<P code="person:monitorReference" />** - Reference to the person's monitor
- **<P code="person:computerReference" />** - Reference to the person's computer

### Dates
- **<P code="person:startDate" />** - Start date in the organization
- **<P code="person:endDate" />** - End date in the organization

### Additional Information
- **<P code="person:info" />** - Additional notes or information about the person
- **<P code="person:notAffectable" />** - Flag indicating if the person cannot be assigned (e.g., on leave)

### Organizational Links
- **<P code="person:organization" />** - The organization the person belongs to
- **<P code="person:personState" />** - Current state or status of the person
- **<P code="person:personSecurityProfile" />** - Security profile assigned to the person
- **<P code="person:costCenter" />** - Cost center associated with the person
- **<P code="person:company" />** - Company name (for service providers)

## Usage

Persons are used throughout Surfy to:
- Assign people to workstations and rooms
- Track occupancy and utilization
- Manage team structures and organizations
- Generate reports on space usage
- Handle booking and reservation systems

## Related Entities

- **<P code="organization" />** - Organizations that people belong to
- **<P code="workplace" />** - Workstations assigned to people
- **<P code="room" />** - Rooms assigned to people
- **<P code="building" />** - Buildings where people are located
