# What's New

<!-- ## August 27, 2025 - v3.4.100

- Added a company view allowing to have the list of all data quality reports. -->

## August 27, 2025 - v3.4.99

- Workplace booking plans now display the name of the merged space.
- Space names are now displayed above workstations in workplace booking plans.

## August 17, 2025 - v3.4.97

- Improved display of object type properties in documentation.
- The rotation icon for objects and workstations is now positioned above other shapes.
- The data quality report on district assignments now includes the email of assigned persons, the name of the assignment layer type, the assignment identifier and the district priority.
- Added district assignment priority in the building assignment report.
- In person search, only district assignments with the smallest priorities are displayed.
- Percentage types are now importable from Excel.
- Buildings in "View all bookings on a plan" are now only those with assignment layers; there is also now a photo and floor list for selection.

## July 2, 2025 - v3.4.94
- Added infinite scroll functionality in the meeting room display page to view all building rooms.
- After selecting a building in the meeting room display page, the building accordion automatically closes.
- Added functionality to manage district overload in workstation booking
    - It is now possible to define district priority in the district to person association
        - Districts are displayed in priority order in workstation booking, districts with the same priority are displayed simultaneously.
    - It is possible to define an overload threshold for each district
    - It is possible to activate overload management from the company

## May 25, 2025 - v3.4.91

- Associated object identifiers can now be exported in Excel exports from list pages if they are selected.
- A new view with occupations by Services is now available.
- Added two new reports in graphic reports for flex workstation bookings:
    - Number of people who booked by date and by district
    - Number of bookings by date and by district
- Implementation of a data quality report on district assignments to see the latest district assignments in reference buildings.

## May 15, 2025 - v3.4.88

- Improved space movement
- Improved plan image saving with the ability to select only which object types to display on the image

## May 12, 2025 - v3.4.85

- Improved space rebilling: when a space is distributed by workstation, workstations can now be part of a distributed cost center.
- Objects that are part of a workstation's physical inventory correctly change space when the workstation is moved.
- Implementation of a data quality report on workstation assignments to see the latest workstation assignments in reference buildings.

## April 22, 2025 - v3.4.82

- Improved workstation booking interface.
    - Implementation of a <OT code="companyWorkingLocation"/> entity in the "planning"/"planning administration" menu, allowing to add a work location per company. To use only certain work locations for flex workstation booking, the company must have work locations. Otherwise, all work locations will be used for booking.
    - Implementation of a view in "planning"/"person work locations" to see bookings on a plan, allowing to visualize where people who booked a workstation are located with navigation by date and floor.
    - Implementation of a search engine in this page to locate a colleague on the plan and see their schedule. This functionality is also accessible from the Teams application.
    - Added the security profile icon of people on person tooltips on booking plans.
    - When displaying a workstation booked by a person in the schedule, all bookable workstations are displayed instead of only the workstations in the workstation space.
- Added additional icons for meeting room audio/video equipment.
- Added a new property <P code="person:notAffectableEndDate"/>
- Added a new data quality report to list people whose non-assignable end date has expired

<!-- ## January 31, 2025 - v3.4.61
- Introduction of Surfy Copilot in Beta version to help with plan creation
-->

## April 2, 2025 - v3.4.70

- Improved building display on Google Maps plan
- Users can only be searched by email
- It is now possible to import campuses via Excel

## March 20, 2025 - v3.4.67

- Improved SAP interface for person import

## March 6, 2025 - v3.4.64

- Added German translations

## March 2, 2025 - v3.4.63

- Prices are now displayed with 2 decimal places and the exact value is available in the tooltip.

## February 20, 2025 - v3.4.62

- Object types can be excluded from orientation graph creation via an option in the object type properties
- Icons are all excluded from orientation graph creation

## January 23, 2025 - v3.4.59

- Objects are colored by default according to the object type color in all views, except in the occupation view where they are white.

## January 22, 2025 - v3.4.58

- Improved application performance

## January 12, 2025 - v3.4.52

- Improvements in error handling during import
- Implementation of an option to know if an object type is assigned or not to a person
    - It is necessary to check this property for lockers and assignable object types before this version
- Graphic dashboards by dates can be grouped by day, week, month, quarter or year
- In entity editing and viewing pages, associations under properties are now separated into 3 parts: base associations, reporting associations and security associations. Moreover, instead of being open and displayed directly, you now need to expand the association you want to see for details. This modification allows faster page loading, presents less irrelevant information to the user and offers more space for tables. Associations are sorted alphabetically.
- Improved API allowing the use of plans in an external context, for example integrating Surfy plans into another software to choose a free workstation to assign.

## December 27, 2024 - v3.4.49

- The color palette now has white and black.
- In space type selection there is now the typology icon
- Implementation of color selections for cost centers, organizations and security profiles

## December 14, 2024 - v3.4.47

- Improved zoom on plans on touch and mobile screens
- Implementation of a "Legend" entity allowing to create custom legends for plans to export as images
    - Legends must be configured and can be used in image exports
- Plan openings during workstation booking now use the same right window
- Dashboards to have according to the chosen period:
    - Workstation bookings by day of the week
    - Workstation bookings by date
- Synchronization implemented with Lucca HR management software
- Language choice is preserved even after disconnection from Surfy
- Image save window takes into account floor change
- 3D plans can now be saved as images

## December 3, 2024 - v3.4.44

- Overall improvement in object movement speed
    - Improved movement of space points in plan editing mode
    - Improved movement of scale points
    - Improved movement of 2D plan navigation
- Districts are now displayable on space text areas on the 2D plan and in their tooltip

## November 30, 2024 - v3.4.43

- Circle, triangle and rectangle type icon sizes are now standardized
- Icon size in workstation types is now static and is 30cm regardless of icon size in plan scale
- Flex workstation bookings can now be made on an entire building, you need to assign people directly to the building and set workstations to flex and bookable
- The number of bookable days in the schedule is now configurable from company properties

## November 20, 2024 - v3.4.40

- An icon warns of District mode configuration (In the building color bar above the plan, following the current view name). Clicking this icon exits District mode.
- Implementation of parking booking in the assignment building, on the planning page. Codes to use on space types are PARKING-CAR, PARKING-ELECTRIC-CAR and PARKING-PRM.

## November 13, 2024 - v3.4.38

- Improved 3D cuby engine.
    - Possibility to activate or not the display of ghost floors from 3D plans.
    - The building's 3D plan on the plan centers better and has better brightness
    - Spaces between floors now take into account the floor ceiling height and it is possible to have 0m gap in display between floors
- Person data quality reports have been modified
    - The report of people without assignment now excludes spaces, workstations, buildings and districts
    - The report of people without assignment but assigned to a building, now excludes assignments to spaces, workstations and districts

## November 5, 2024 - v3.4.36

- Color display in space typology selection box

## October 29, 2024 - v3.4.32
- Modified color choice palettes
- Added colors in the "organization hierarchy" page
- The "Directions" plan view now displays the Direction name and service name on the plan
- Added a "display name" for spaces, useful for displaying common meeting room names for example
    - This name can be searched or displayed on the plan
- Implementation of the "Meeting Rooms" page allowing to quickly view all building meeting rooms
    - Meeting rooms displayed are space types grouped in a space type group with code MEETING
- When creating an entity there is now a mode to "edit after creation". The "edit card after creation" mode is the default mode. It comes in addition to "continue creating" or "open after creation" modes.
- Implementation of FontAwesome icons in version 6.6.0

## October 3, 2024 - v3.4.22
- Buildings can now be searched in the global search bar
- Implementation of campuses allowing to group several buildings
    - Added an icon to have the grouped view of buildings in the top menu shortcuts
- Added privacy policy in the login page
- In 2D plan mode, tooltips now appear to the left of shapes to avoid screen shaking effect
- In automatic association to a platform via authentication rules, only the connection type of the rule allows association with the platform
- Space typology groupings now have, from the plan tab, help that recalls typologies included or not in the grouping.

## September 6, 2024 - v3.4.13

- Implementation of FontAwesome icons in version 6.5.2
- Implementation of an advanced mode for 3D object type visualization to preview them without axes and ground occupation area
- The login page now includes a registration link and a link to the Surfy website
- Improved 3D visualizations to remove screen shaking effect
- Updated Surfy connection systems using OpenID Connect
- Cost center view opens on space cost centers by default
- Improved automatic imports by automatically creating colors for new entities
- Added current view name on tooltip text to change views on plan view
- Added current view name at the top of the plan page in parentheses after the floor name in 2D in 3D and on the building in 3D
- Added building address in plan image legend
- Added an option from plan image download to preview the legend before image export
- Improved 3D floor navigation

## June 5, 2024 - v3.3.233

- The company tile now has a link to the company dashboard
- A person can book flex workstations in several districts
- The plan view icon is now the first in the vertical icon list
- Doors are now taken into account in scenarios and 2D image exports
- Checkboxes to select objects or dimensions on the plan are more readable.

## April 30, 2024 - v3.3.232

- From the plan in editing, the shortcut to merge vertices is now shift + w
- The person's company is now called service provider company.
    - It is possible to associate a service provider company with an object type and associate a service with it (For example: Fire extinguishers managed by Dubernard)
    - It is possible to associate a service provider company with a space type (for example Otis for elevator maintenance)
- It is possible to create an intervention on an object by a service provider with a date and description
- Service providers are visible on the plan on object and space cards
- Creation of a data quality report on objects, allowing to find physical inventory objects that are not in the same space as the workstation to which they are attached
- Creation of a data quality report on spaces allowing to find spaces that have standing capacity equal to the number of seats to regularize the situation and reset standing capacity to 0 and have correct total capacity

## April 15, 2024 - v3.3.229

- The Capacity property on space is now called Standing capacity
- New calculated properties are now available
    - Total capacity which is the sum of standing capacities of spaces and seats (be careful to remove standing capacities of spaces that duplicate with seats to have correct total capacity)
    - Seating rate per workstation
- Implementation of space type groups allowing to group space types and therefore group indicators by space type group. The grouping takes into account space type inclusion or exclusion. For example:
    - Total surface excluding parking
    - Number of parking spaces (disabled, bike, motorcycle, electric, ...)
    - Total capacity excluding catering
    - Total capacity of meeting spaces

## April 10, 2024 - v3.3.228

- It is now possible to recalculate building data directly from the assignment layer selection card
- In workstation booking only workstations checked "bookable" are bookable. Non-bookable workstations are transparent, inert and have no display text
- It is possible to book workstations while being present in several districts
- In global search, links to views not available based on roles are no longer clickable

## April 4, 2024 - v3.3.224

- It is now possible to enter the number of assignments in a district manually without having to create and associate real people in Surfy

## March 25, 2024 - v3.3.223

- Double confirmation when deleting plan scales
- Added price on objects in addition to object types
- Added current day in space booking schedule for flex workstation booking
- View building assignments from search engine when a person is searched
- The person data quality report "People assigned to a building without workstation assignment" now excludes "non-assignable" people
- Implementation of a data quality report on spaces allowing to find spaces without points or with only 1 or 2 points
- Fixes
    - Improved tooltips with multiple points that were truncated

## March 7, 2024 - v3.3.219

- Added a link to go to Surfy Academy from the profile menu

## February 27, 2024 - v3.3.217

- Implementation of an option to change the quality of 2D plan image export.

<!-- 
- Implementation of PDF image export
** vault implementation for secret management **
-->

## February 15, 2024 - v3.3.211

- Improved plan navigation via touch devices
    - Touch gesture zoom activation
    - Improved shape selection
    - Disabled tooltips
- Possibility to see security icons (Surfy2) in inventory PDF export
- On the plan, clicking on space, workstation or object text has no effect
- Improved left menu
    - Added icons for first level options
    - It is now possible to reduce the left menu to have more space on the rest of the page
- Improved authentications
    - Google connection opens Google login page directly via popup
    - Improved certificate management for Microsoft 365 connection
- Harmonized building photo view display according to building type (vertical, horizontal or without images)
- The top left icon to see the company dashboard is no longer directly available, you need to go through administration menu > companies to access it

## January 13, 2024 - v3.3.208

- It is no longer possible to assign a person to a flex or passage workstation via the plan interface
- It is now possible to zoom on the selected assignment district
- Added an "is bookable" option on workstations allowing to indicate to a booking tool that the workstation is bookable

## December 2, 2023 - v3.3.205

- Implementation of an option on the company allowing to activate pathfinding features (beta)
    - Implementation of time and distance calculation between two shapes
- The default 3D view of the floor is now the zenith view
- Implementation of two new segment types
    - for sliding doors
    - for empty partitions

November 2023 news:

<Youtube code="yXREgUBb_vQ"/>

## November 17, 2023 - v3.3.204

- Implementation of a section allowing in case of error to refresh the page, disconnect or contact us
- Activation of FontAwesome icon search for object types in uppercase or lowercase
- Harmonized display of icons represented on the plan (shape, background color, border color)
     - In object selection to put on the plan
     - In global object search
     - When adding to the plan

## November 13, 2023 - v3.3.203

- Cost centers have at the end of their name:
    - a * when they are distributed by building
    - two ** when they are distributed by floor
- Implementation of an option to search in lists for fields without value
    - for example list people without employee number, email or cost center
- The news list is now available from https://help.surfy.pro
- In plan editing mode segments formerly dotted are now solid purple lines to easily add points on them

## November 10, 2023 - v3.3.202

- Improved person deduplication report by adding all person properties
- Added a segment type to create a simple partition without thickness, useful for open space boundaries for example or building outline
- Changed boolean type display in read-only from checkbox form to "Yes" or "No"
    - For example in import comparisons
- Added number of workstations per cost center in cost distribution report
- Improved cost center Excel report by adding a tab specifying surfaces to distribute by cost center

---

## November 6, 2023 - v3.3.201

- Improved synchronizations with partner applications
- Implementation of doors in 2D and 3D plans via qualification of separation segment between 2 spaces
    - Doors are now materialized in 3D partitions
    - Possibility to display the door on both sides of the segment for doors with opening in both directions
- Improved partitions in 3D plans
- Segments belonging to multiple spaces are colored red and are slightly wider in plan editing mode
    - The objective is to visually identify them in modeling phases
- Data quality reports now have pagination

## October 27, 2023 - v3.3.199

<Youtube code="0ES_njXDAec"/>

- Implementation of a data quality report on people allowing to find duplicates based on emails, employee numbers or first name and last name couple

## October 20, 2023 - v3.3.197

- Implementation of filters on lists by workstation, room, floor or building when there is a link
- Harmonized right-side option opening windows
- Implementation of a "security deposit" property on the building
- Implementation of a "cylinder number" property for spaces

<Youtube code="WP2wDykMBiY"/>

## September 18, 2023 - v3.3.194

- Added an icon on object types in the add object option in a space allowing to see if the object type has a 3D model
- Updated FontAwesome icons to version 6.4.2
- Default sorting of 3D models by name
- Implementation of contextual help in imports
- People with the "non-assignable" property checked can no longer be associated with spaces, workstations or assignment layers from plan options

<Youtube code="wdVhXVFKapU"/>

## September 6, 2023 - v3.3.192

- Improved file imports

## September 4, 2023 - v3.3.191

- Implementation of new data quality reports on plan scales
    - Allowing to detect and delete unused plan scales
    - Allowing to give unique names to plan scales with floor and building names used by scales
- Implementation of new data quality reports on spaces allowing to detect empty space names or identical space names on the same floor

## August 25, 2023 - v3.3.188

<Youtube code="M34PFhnWlj0"/>

- Implementation of a view dedicated to assignment layers with layer selection navigation
    - The first available layer is selected by default
- Views must now be included in people's roles to be visible
    - A building can have a default view that will be used when connecting for the first time when opening the plan
    - Based on user roles only views that are authorized will be available
        - This functionality is disabled for now pending adequate role configuration on platforms and administrator training
    - If the person has no view associated via these roles; the space typology view is still offered
- Sorting of assignments to analysis layers and spaces by alphabetical order of last names then first names
- Implementation of an option to create ghost floors when not all floors are modeled in the building in 3D plans on the plan
- The lowest floor above ground floor is now used as reference structure for 3D plans on the plan
- Added help for synchronization operations with other applications
- The space inventory list or assignment list on the plan remain accessible regardless of space name length
    - Also for selected dimensions
- Added line breaks in object type descriptions in PDF inventory
- Added object type manufacturer in PDF inventory
- Implementation of Warning and Safety Condition icons from ISO 7010 standard in Surfy icons
- Implementation of triangle icons
    - Possibility to configure icon background color
    - Possibility to configure icon border color
- Security icons now have default color, background color, border color and shape values
- A second confirmation is requested when deleting object type families
- Implementation of a data quality report allowing to find problems on organization hierarchy associated with spaces
- Filters implemented on organizations
    - From the plan, in space editing, only services are associable to the space
    - From the organization editing page, only directions can be associated as parent organization
- Assignment layers must now be associated with at least one building to be used as assignment layer via "assignment layer to building" association from assignment layer editing page
    - Scenarios will be associated with this layer if "Associate analysis and assignment layers with spaces" is checked
    - It is no longer possible to associate people with analysis layers
- Separation of surface and workstation graphic reports in distinct tabs for better readability in building and company report pages
- Improved Excel reports
    - Added assignment or analysis layers of spaces for each physical or virtual object in inventory report
    - Added organizations and cost centers of spaces for workstation or space assignments in building person report
- People assigned only to scenarios are now correctly displayed in the global search bar

## June 14, 2023 - v3.3.184

- Proposal to delete a person's assignments on workstations or spaces when assigning the person to a space
    - Assignments in the same building are checked by default

## June 9, 2023 - v3.3.183

- Possibility to refresh all entity data from the import page
    - Practical for example to refresh full names of people after an import which will improve person search

## June 6, 2023 - v3.3.182

- Added object type family, number of seats and carbon footprint in merged building inventory report
- Implementation of an icon to optimize space for the plan and hide plan navigation menu
- Implementation of an option to include or not scenarios in global search
- Reuse of a vertex on multiple spaces
    - Implementation of an option to separate a vertex on multiple spaces
    - Implementation of an option to merge vertices on multiple spaces into a single vertex
- Possibility to rotate icons in 2D, rotation is only applied in 3D and in 2D editing mode.

## May 25, 2023 - v3.3.180

- Added a building chart representing qualified surface by space typology
- Implementation of 2D heat maps. Heat maps are not exportable as images for now. Don't hesitate to contact us if you want to add other heat maps. The following maps are available for now:
    - Assignment density of workstations
    - Seating density
    - Workstation density
    - Furniture carbon footprint density
- Possibility to search on integer and decimal types in search fields to the right of lists

## May 23, 2023 - v3.3.179

- Added company name and building name in image exports

## May 16, 2023 - v3.3.177

- Improved navigation experience with browser scroll bars
- Replaced icons in calculated data displays from the plan with a more readable property list
- On page reload plan editing mode is no longer saved and must be reset via option or keyboard shortcut "e".
    - Users tended to leave it activated without making plan modifications which reduces navigation performance and impacts user experience
    - Editing mode should only be activated to make plan modifications
- Implementation of transparency on space colors in image export

## May 15, 2023 - v3.3.176

- Added a photo field on a space
- Added direction and service fields in the "List people without workstation assignments" report

## May 2, 2023 - v3.3.175

- Implementation of an option to see space colors with transparency

## April 28, 2023 - v3.3.174

- Added a tab in building person report with building district assignments

## April 27, 2023 - v3.3.173

- Added employee number and email as filter in person search for assignments
- Added an option to change partition display mode in 3D plan
- Implementation of mechanism to assign people to workstations based on days of the week
- Added carbon footprint management in kilograms of CO2
    - Carbon footprint per object type
    - Carbon footprint per analysis layer per square meter
- Grouping of security profiles assigned to workstations or floor spaces in a single tab
- Harmonized navigation and coloring of 2D and 3D plans
- Added icons in workstation types
- Introduction of red security icons from ISO 7071 standard
- Possibility to have square icons
- Added an option to choose segment creation distance and mouse point will be used for direction
    - This option allows creating squares or rectangles
- Added object type family in building inventory report
- Implementation of a free text field on workstation called "Comment"
- Workstation coloring on the plan now has a dedicated tab to the left of the plan: Color workstations according to their state
- Following an assignment to a workstation or space, a window detects other person assignments on workstations, spaces or buildings and proposes to delete them
    - By default for deletion only assignments in the same building are checked
    - If the workstation is passage, the same window proposes to delete the workstation passage type
    - Scenario assignments are not proposed for deletion
- Added an option to assign people to workstations based on presence days in the week
    - Possibility to see free workstations based on days of the week
- Adding company users requires using a filter with the exact email or name of the person to find them
- Analysis layer and typology colors on the plan are now the real defined colors and are no longer "softened" by Surfy, allowing plans respecting exactly the company's graphic charter

## March 30, 2023 - v3.3.168

- Verification of company associations at each connection
- Added an option to directly open a page after connection via Microsoft accounts
- Increased space around objects and workstations after zoom

## March 26, 2023 - v3.3.167

- Added room assignments in transfer matrix in its dedicated tab and import of room assignments from matrix in space transfer matrix import page from room assignments

## February 27, 2023 - v3.3.164

- Possibility to see from the plan the security profiles of people assigned to spaces in the people tab
- Possibility to display on the plan the security profiles of people assigned to spaces
    - Configuration is available from space display text management tab in People tab
- Possibility to define the number of people to display on the plan per line
    - Configuration is available from space display text management tab in People tab
- Possibility to display on plans only people with security profiles
    - Option available from views tab
- Implementation of a new "Security Compliance" view
    - Allows quick analysis of people assigned to workstations or spaces with security profiles.

## February 21, 2023 - v3.3.163

- The building inventory page, as well as inventory PDF export, now presents all physical and virtual inventory objects

## February 16, 2023 - v3.3.162

- Scenario floors now have the correct scale directly after creation without needing to refresh the page

## February 6, 2023 - v3.3.161

- Reorganization of 2D plan icon options by grouping contextual options to the right of the list
    - The add room option is only available when nothing is selected on the plan
- Possibility to reuse a vertex when creating a space
    - Option to merge multiple spaces into one via vertex options
- Object type default color is now white
- Re-implementation of transfer matrices

## January 25, 2023 - v3.3.160

- Consideration of complex identifiers in synchronization with zbre application.
- User emails no longer overflow from menu when connecting with Surfy accounts

## January 12, 2023 - v3.3.157

- Implementation of new menu for all users
- Possibility to choose colors via advanced mode
- Implementation of certificate for connection with SAP Success Factors (Security improvement)
- Renaming of flex places and free places to flex workstations and free workstations to dissociate workstations and free seats
- Error on surface calculation of direction type organizations
- Surface calculation in 3D tooltip

## January 9, 2023 - v3.3.152

- Creation of a view for organization hierarchy
    - A role update is necessary to see this view by Surfy
- Display on plan of cost centers associated with people assigned to workstations
    - Accessible via plan cost center tab
    - Use of multiple coloring (hatching) of workstation in case of assignments of people with different colored cost centers
        - Implementation of hatching for person security profiles
- Space types with "do not display walls" option now have dotted polygons in 2D plan image as outline.
- Implementation of loading and blocking of vertex creation while vertices are being created
- Implementation of an option to reset rotation angle of workstations and objects on 2D plan
- Implementation of full name in person card
    - Full name is calculated after saving from person card. Data must be reloaded after Excel import.
    - It is possible to search full name from search bar
    - Full name can be used as key in Excel import

## December 1, 2022 - v3.3.145

- Implementation of new 3D plans (floor and building)
    - Role adjustment necessary
- Implementation of automatic calculation of monthly work hours in cleaning service report
- Use of correct background image in exports of entire building in zip

## November 28, 2022 - v3.3.142

- Implementation of object type manufacturer for object types to identify brand or manufacturer
- Possibility to see number of seats on plan and in tooltip

## November 24, 2022 - v3.3.139

- Copy to cart
    - Protection of entity type copies by an option in roles
    - Possibility to copy to cart from entity list (object types and workstation types)
- Implementation of dedicated navigation on plan icons for assignment layers in 2D plan
- Possibility to add videos in news list
- Added available seats per object types
    - Calculation of seating ratios for analysis dimensions
    - Possible update of seats per object types from workstation type editing page
    - Display of number of seats and seating rate per person in all dimensions
- Implementation of fields
    - "Created by user" which specifies the name of the user who created the entity
    - "Updated by user" which specifies the name of the user who last modified the entity
- Added pagination navigation on building pages (map, 3d, ...)
- Initial limitation of 3D building display to 10, as it's impossible to display more than 16 buildings in 3D simultaneously
- Introduction of functionality to separate a space into 2 spaces by selecting two vertices
    - Role configuration is necessary to benefit from this functionality
<Youtube code="7tGXPZaw3c0"/>
- Updated Microsoft 365 authentication to support connections via all mobile phones and tablets
    - Automatic Microsoft 365 token extension from 35 minutes before end.
        - Token duration remains one hour
- Implementation of "Building owner user" property on buildings
    - Building owner user always sees the building and building floors even if there are content roles in place.
    - Owner can be modified or removed on building
    - When creating a scenario, the user who creates the scenario becomes the building owner
- Building dashboard loading problem

## November 7, 2022 - v3.3.124

- Possibility to copy a building to cart via scenarios page
    - Plan scales must have unique names in source and target platform
    - Plan structures must have unique names in source and target platform
    - Rooms and workstations must all have a name
    - Object types must have unique names in source and target platform
- Refresh of building scenario data from an icon in scenarios page

## November 5, 2022 - v3.3.123

- Floor navigation on the right now occupies its own space instead of being above the plan
- Moving object types and workstation types across multiple platforms via cart
- File import allows importing multiple entity types
    - One per Excel tab
    - Tab names can be technical names of entity types

## October 23, 2022 - v3.3.109

- District management in Flex environments
    - Grouped selection via plan of an analysis layer
    - Direct assignment of a person to an analysis layer
    - Association of an analysis layer to a building to calculate assignments by analysis layer
    - List of analysis layer assignments
    - List of analysis layer inventory

## October 18, 2022 - v3.3.108

- Export of multiple floor images in png in a zip file from 2D plan image export tab

## October 14, 2022 - v3.3.106

- Rooms with icons via icon display on plan have white background by default.
- Added number of objects in object type list on plan
- Added object type family and shape in object card on plan
- Added an icon on person security profiles
    - Icon display in assigned person list
    - Icon display in assigned workstation tooltip
- Added person gender
    - Requires view and content update
- Proxy of plan background images
- Center on plan option no longer takes into account room anchoring when display line is not checked (cuby alignment)
- Data quality report of unused object types correctly deletes object types

## September 14, 2022 - v3.3.99

- Added complete inventory tab (merged physical and virtual) in building inventory report
- Updated information presentation on the left of the plan
    - Moved navigation icons to the left
    - Dimensions and indicators are available via accordion under the element
    - Possibility to open or close all at once
- Readjustment of rates and ratios on building dimensions

## August 18, 2022 - v3.3.96

- Added help for roles in Surfy allowing to recall roles and associated functionalities
- Added space analysis layer report by building
- Opening of global backup file

## August 13, 2022 - v3.3.92

- Updated Z#bre interface allowing synchronization of multiple buildings
- Added new security icons

## July 26, 2022 - v3.3.90

- Added room assignments in transfer matrix in its dedicated tab and import of room assignments from matrix in space transfer matrix import page from room assignments

## July 25, 2022 - v3.3.89

- Improved quality of "Screenshot without legend" option renders

## July 23, 2022 - v3.3.88

- Improvements to floor and building 3D plan navigation
- Introduction of new navigation menu available from user photo
- Sorting of scenarios by creation order (last created first in list)
- Added name filter for workstation selection from workstation selection dialog
- Added animations in 2D plan zooms
- Plan grid only available in 2D plan editing mode
- Conservation of plan view in 2D plans.
    - Modifications made after changing plan view are not saved
- Added an option to move a person assigned to a workstation to the workstation room from room assignment view
    - Requires page refresh
- Simplified and enlarged workstation tooltip to read assignments more easily
- Copy of object identifiers identical to comparison in import
- Display via icon when a person is assigned to a building without being counted in person card
- Updated workstation card
    - Opening person card by clicking on photo from plan
    - Zoom on workstation on plan from workstation list
- Added flex workstation ratios as indicator
- Re-implementation of zoom on loading of object type and workstation type editors

## June 26, 2022 - v3.3.81

- Creation of data and image export to Sharingcloud
- Replacement of 3D floor display including 3D shapes
- Added an option to see person information from sidebar accessible from person options
- Recentering of workstation positions according to center of occupied space on ground
- Inventory
    - Added tab containing virtual inventory in building inventory report
    - Sorting by floor level order in PDF inventory
- Changed zoom in/out behavior in plan to stay centered on selected shapes
- Improved rotation of workstations and objects from 2D plan
- Readjustment of analysis dimension, organization and room type foisonnement rates

## May 12, 2022 - v3.3.73

- Added service and direction in data quality report of people not assigned to workstation but being in a building

## May 5, 2022 - v3.3.70

- Added building structure
- Integration of building structure in 3D plans
- Improved ergonomics of room and object type creation
- Loading of 3D models of object types

## April 23, 2022 - v3.3.67

- Added person company for service provider occupation management

## April 19, 2022 - v3.3.63

- Use of relative size for texts and circles in polygon creation

## April 17, 2022 - v3.3.62

- Updating space analysis layers from plan requires space data to be saved beforehand.
- Scenarios no longer copy external keys of buildings
- Copy image url in lists and simple view
- Data quality
    - Excel export of data quality table selection
    - Person data quality report for people who have contract end date after today and who are assigned to a workstation
- Added deletion in entities in context of HR data import from SAP SF and Talentsoft

## March 22, 2022 - v3.3.58

- Added news list from user profile

## March 22, 2022 - v3.3.57

- Search bar closes when clicking outside search area
- Updated texts to associate entities
    - For example "Create and associate workstation assignment" becomes "Create workstation assignment"
    - Removed "Associate workstation assignment" tab when not relevant
- Fix of 3D rotation behavior (Stop and refresh)

## March 20, 2022 - v3.3.55

- Added an option to remove object colors on plan
- Added a filter option to color workstations according to person security profile on 2D plan
- Possibility to add as text on plan:
    - Person organizations
    - Person cost center
    - Person security status
    - Workstation organizations

## March 13, 2022 - v3.3.54

- Updated global search bar behavior
    - Preserves search, but closes results window

## March 10, 2022 - v3.3.50

- Creation of person card, link via search
- Added number of building assignments in sum of building assignments
- Explicit message in entity dialog when no entity is found
- Re-implementation of legend in image exports

## March 5, 2022 - v3.3.43

- Display images via Surfy server as option per platform. Configurable from company page.
- Add an option to clear saved filters
- Distances and decimal numbers can be saved with decimal values containing 0 like 5.0004
- Implementation of tooltips on Google map for locations with multiple buildings
- Added enterprise authentication via OKTA
- Automatic redirection to page with company list if there is only one company
- Possibility to set up rules for authentication (automatically associate users with a platform with roles and content roles during registration)
- Management of text movement in role options
- Saving filters on associated entities from editing pages (for example room organizations)
- Export of Surfy icons in images
- Delete or remove scale from plan

## February 26, 2022 - v3.3.38

- Excel import formats now accept schema names in titles for example "person:code" instead of "Employee Number (person)"
- Added Italian as language
- Implementation of a menu dedicated to data qualities and a new data quality report for people assigned only to a building
- Implementation of property selection in tables (list type pages)
- Person to building import in SAP SF import
- It is now possible to navigate to more than 5 entities for associated objects from an entity viewing page by default

## February 13, 2022 - v3.3.38

- Implementation of a tab dedicated to data qualities to filter:
    - People assigned only to a building
    - Unused workstation types
    - Unused object types
- Field selection in list filters and corresponding Excel outputs.
- Filter memorization in lists.
- Possibility to associate a person with a building.
- Added a 2nd confirmation for building, floor and room deletion.
- Object height is now respected in Floor 3D view.
- Memorization of search for adding workstations or objects.
