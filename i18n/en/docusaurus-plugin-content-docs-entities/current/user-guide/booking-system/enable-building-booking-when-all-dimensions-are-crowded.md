# Enable Building Booking When All Dimensions Are Crowded Feature

## What is this feature for?

The **"Enable building booking when all dimensions are crowded"** feature offers an intelligent backup solution when all zones (dimensions) of your company reach their overload threshold. It allows collaborators to reserve a workplace directly by choosing a specific floor in the building.

## How does it work?

### General Principle

This feature works in complement to the "Enable crowded dimension for booking" feature. It automatically activates when:

1. **All dimensions are overloaded** : Each zone exceeds its defined overload threshold (default 85%)
2. **No zone is available** : The system can no longer propose zones with free workplaces
3. **The feature is enabled** : The administrator has activated this option in the company settings

### Fallback System (Backup Solution)

When all dimensions are overloaded, the system:

1. **Displays an informative message** : "All zones are overloaded. You can reserve directly in the building by choosing a floor."

2. **Proposes floor booking** : For each available building, the collaborator can:
   - See all floors of the building
   - Consult the number of available workplaces per floor
   - Choose directly the desired floor
   - Access an interactive map to select a specific workplace

3. **Displays statistics** : The system shows the number of reserved and available workplaces for each floor

## Behavior According to Activation

### With Activation
- If all dimensions are overloaded, the system automatically proposes building booking
- The collaborator can choose a floor and a specific workplace
- Reservation remains possible even in case of total zone overload

## Concrete Example

Imagine a collaborator with these priority zones:
- **Marketing Zone** (priority 1) - 95% occupancy (overloaded)
- **Development Zone** (priority 2) - 90% occupancy (overloaded)  
- **Sales Zone** (priority 3) - 88% occupancy (overloaded)

**Without activation** : The collaborator cannot reserve because all zones are overloaded.

**With activation** : The system displays:
1. **Informative message** : "All zones are overloaded. You can reserve directly in the building by choosing a floor."

2. **Building booking options** :
   - **Building A** :
     - Floor 1: 12 available workplaces out of 20
     - Floor 2: 8 available workplaces out of 15
     - Floor 3: 5 available workplaces out of 10
   - **Building B** :
     - Floor 1: 6 available workplaces out of 12
     - Floor 2: 3 available workplaces out of 8

3. **Selection interface** : The collaborator clicks on "Reserve a workplace at [Floor Name]" and accesses an interactive map to choose their workplace.


## Configuration

This feature is configured at the company level in the configuration settings. It works in complement to the "Enable crowded dimension for booking" feature.

### Prerequisites
- The "Enable crowded dimension for booking" feature must be enabled
- Buildings and floors must be configured in the system
- Workplaces must be associated with floors


## Relationship with Other Features

This feature works in complement with:

1. **"Enable crowded dimension for booking"** : Determines when zones are considered overloaded
2. **Priority system** : Respects collaborator priority zones when they are available
3. **Floor booking** : Uses the existing building and floor booking system

Activating this feature ensures that your collaborators can always reserve a workplace, even in high-traffic situations, while optimizing the use of your workspaces.
