---
sidebar_position: 3
---

# Data Quality

To maintain optimal data quality, Surfy allows you to identify and resolve potential problems or actions to be taken on the following data:

-   Collaborators
-   Furniture
-   Assignments
-   Spaces
-   Organizations
-   Administration

To access the list of data quality reports, from the home page,

-   click on "Administration", "Companies" to "List all data quality reports by entity".

Each data quality report is also individually accessible from the left menu by clicking on one of the entities listed above then on "Reports and actions for data quality for XXX".

## Collaborator Data Quality

### People Assigned to a Building Without Other Assignment

This report allows you to identify people waiting for their final assignment to a workstation, space or district and assigned only to a building.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked people.

### People Leaving the Company

This report lists people who have a contract end date after today's date and who are assigned to a workstation.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked people.

### People Without Assignment

This report lists assignable people who have no assignment (building, workstation, assignment layer, space).

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked people.

### Duplicate People

This report lists duplicates on last name + first name, employee number or email address of people present in the database.

For more information on handling duplicates, see [Resolve Person Duplicates](/docs/tutorials/person/edit/#resolve-person-duplicates)

### Non-Assignable People with Expired End Date

This report lists people checked "non-assignable" in the person's file, with an assignability end date prior to today's date.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked people.

## Furniture Data Quality

### "Transit" Workstations with Assignment

By definition, transit workstations are not assignable since they are intended for occasional use or temporarily installed people.
However, it may happen through import or file synchronization that these workstations receive an assignment.<br />
This report allows you to list transit workstations that are assigned to collaborators in order to remove the "transit" qualification or the assignment.

Checking all or part of the boxes allows you to extract the list in Excel.

### Object Spaces Different from Workstation Spaces

This report allows you to list physical objects of workstations belonging to spaces different from those of the workstations themselves.

Through copying, import or workstation manipulation, certain objects composing it may be assigned to a space other than the one in which the workstation is placed.

Checking all or part of the boxes allows you to extract the list in Excel, delete the checked physical objects or repair by assigning the physical object the belonging space of the workstation.

## Assignment Data Quality

### Workstation Assignment

This report allows you to list the latest workstation assignments in reference buildings, with the assignment date, person information and the location of the assigned workstation.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked assignments.

### Assignment Layer Assignment

This report allows you to list the latest district assignments in reference buildings, with the assignment date, person information and the assignment layer.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked assignments.

## Space Data Quality

### Space Name Proposals

This report proposes names for spaces that have no name or whose name is not unique on the same floor.<br />
It is important that each space has a unique name in order to be able to geolocate spaces without risk of error.

Checking all or part of the boxes allows you to extract the list in Excel, delete the checked spaces, or update the new space names.

### Spaces Without Enough Points

This report allows you to list spaces that have 0, 1 or 2 points and should therefore have zero area.
These spaces can harm the proper functioning of the application and must be deleted or corrected.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked spaces.

### Spaces with Standing Capacity Equal to Number of Seats

Standing capacity can be used to define the number of available places in a space or to know the maximum number of people that can be placed in a space. This figure is added to the number of seats to give the total capacity of a space.

This report allows you to list spaces whose standing capacity is equal to the number of seats, and whose total capacity is doubled compared to reality.

This can be the case on spaces where capacity was given before placing furniture, or before assigning the number of seats to furniture. It is then necessary to remove this information duplication to recover a total capacity consistent with the number of seats.

Checking all or part of the boxes allows you to extract the list in Excel, delete the checked spaces or set the standing capacity of these spaces to zero.

### Spaces with Standing Capacity Different from 0

This report allows you to point out inconsistencies in space capacities or detect for example furniture that does not yet have seats.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked spaces. To modify the space capacity, search and click in the space on the plan then modify the space.

### Unused Scales

This report lists scales that are not used on floors and can be deleted.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked scales.

### Scale Name Proposals

This report proposes unique names for scales, including the floors and buildings where they are used.

This allows you to have a customized scale name especially on scenarios.

Checking all or part of the boxes allows you to extract the list in Excel, delete the checked scales or update the scales with their new name.

### Segment Qualification: Non-Unique Point Segments

This report allows you to verify that there are no exact segment duplicates on the same points

### Segment Qualification: Segment Points are on Two Different Floors

This report allows you to verify that segment points are on the same floor.

### Space Points: Unique Point Positions

This report allows you to verify that there are no exact position duplicates on points.

### Space Points: Unused Points

This report allows you to see points that are not used in spaces.

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked points

## Organization Data Quality

### Space Organization Errors

This report detects associations of spaces to organizations that are not compliant, such as the attachment of a space to a department.

To modify a non-compliant organization, see the chapter on [Organization Hierarchy](/docs/tutorials/organization/create#organization-hierarchy)

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked spaces.

To modify the space organization, search and click in the space on the plan then modify the space organization.

### Organization Hierarchy Errors

This report detects non-compliant hierarchies in organizations, such as an organization having both a Department and Services at the same time.

To modify and bring organizations into compliance, see the chapter on [Organization Hierarchy](/docs/tutorials/organization/create#organization-hierarchy)

Checking all or part of the boxes allows you to extract the list in Excel or delete the checked organizations.

To modify the organization hierarchy, click on the icon at the beginning of the line to "modify organization XXX" or list organizations and modify the non-compliant organization.

## Administration Data Quality

### Inventory Consistency

This report allows you to detect and repair inconsistencies between physical and virtual inventory for workstations.

A physical object composing a workstation allows you to associate a reference, an asset code and a purchase date to this object, individually.

In order to use physical objects to compose workstations, it is necessary to create the corresponding objects, or delete them if physical inventory is no longer necessary.

For more information on designing physical objects in workstations, see the chapter [Compose a Workstation with Physical Objects](/docs/tutorials/objects/workplacetype/create/#compose-a-workstation-with-physical-objects).

### Shape Placement

This report allows you to detect and reposition shapes that belong to a different space than the one where they are positioned on the plan.

Checking all or part of the boxes then "apply space change" allows you to bring the belonging space of the checked object into compliance.

The belonging space of an object placed outside a space (pole, for example) will not be modified.

### Analysis Layer Association to Spaces: Incorrect Layer Type

This report detects associations with inconsistent layer types, for example if the layer type has been modified and does not correspond to the original layer type.

Checking all or part of the boxes allows you to extract the list in Excel or delete the analysis layer associations to checked spaces.

To modify an analysis layer or layer type, see the chapter [Modify an Analysis Layer](/docs/tutorials/dimensionType/edit).

To modify the association of an analysis layer to a space, click in the space on the plan and "modify" the space.