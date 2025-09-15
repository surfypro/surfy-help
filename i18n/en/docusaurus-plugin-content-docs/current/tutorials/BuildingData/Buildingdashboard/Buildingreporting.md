---
sidebar_position: 1
---

# Building Data Reports

<Youtube code="uLK4hGucu0s"/>

Building data reports are obtained from the home page,

-   click on the icon at the end of the building's color line
-   choose "Dashboard for building XXX".
-   click on the desired report icon

The Excel file report is available in downloads.

## Data Reports on Multiple Buildings

To get data reports on multiple buildings:

from the home page,

-   click on the context menu (gray box under the search magnifying glass)
-   click on "List buildings"
-   select buildings to analyze
-   click on the desired data report at the top of the page

The Excel file report is available in downloads.

:::danger ATTENTION
It is preferable to uncheck all buildings after generating a report on multiple buildings, in order not to risk an untimely manipulation on buildings still checked, such as deletion for example.
:::

## Report of People Assigned in the Building

The "report of people assigned in building XXX" lists people assigned in the building in an Excel file.

It consists of 3 tabs:

-   space assignments
-   workstation assignments
-   district assignments

Each line represents an assignment in the building and includes all person information as well as the building, floor, district, space, workstation assignment of the person.
A person assigned twice will see their name appear on two different lines.

### Report Content

-   **Person information**: Name, first name, email, phone, company, department, function
-   **Assignment information**: Space, floor, building, assignment type, assignment date
-   **Space information**: Space name, space typology, space surface, space capacity

### Use Cases

-   **HR Management**: Track employee assignments and space occupancy
-   **Space Planning**: Analyze space utilization and plan reorganizations
-   **Compliance**: Ensure compliance with space allocation policies
-   **Reporting**: Generate reports for management and stakeholders

## Building Workstation Report

The "Building workstation report" lists all workstations in the building with information related to each workstation: name, workstation type, qualifications (flex, transient, ...), organization, building, floor, belonging space.

It allows bulk modification of information related to the "furniture" Workstation: add or verify workstation names, their qualification in Flex or transient, assign them to organizations, to cost centers, etc...
Each line corresponds to a workstation in the building. There is no duplicate line.

### Report Content

-   **Workstation information**: Workstation name, workstation type, number of seats, surface
-   **Location information**: Space, floor, building, workstation position
-   **Workstation details**: Equipment, furniture, accessibility, qualification

### Use Cases

-   **Workplace Planning**: Analyze workstation utilization and plan reorganizations
-   **Facility Management**: Track workstation characteristics and equipment
-   **Compliance**: Ensure compliance with workplace management policies
-   **Reporting**: Generate reports for workplace management and planning

## Report of Assignments to Building Workstations

The "Report of assignments to building workstations" lists assignments to assigned workstations, with the workstation name, space, floor, belonging building as well as all information related to the person assigned to the workstation.
A workstation assigned twice will see its name appear on two different lines.
Any unassigned workstation is not listed in this file.

### Report Content

-   **Workstation information**: Workstation name, workstation type, number of seats, surface
-   **Assignment information**: Space, floor, building, assignment type, assignment date
-   **Person information**: Name, first name, email, phone, company, department, function

### Use Cases

-   **Assignment Management**: Track workstation assignments and occupancy
-   **Space Planning**: Analyze workstation utilization and plan reorganizations
-   **Compliance**: Ensure compliance with workstation assignment policies
-   **Reporting**: Generate reports for assignment management and planning

## Report of All Building Workstations Including Assignments

The "Report of all building workstations including assignments" lists all workstations with the workstation name, qualification, space, floor, belonging building as well as all information related to the person assigned to the workstation if it exists.
Unassigned workstations are present in the list, without information about the person.
A workstation assigned twice will see its name appear on two different lines.

### Report Content

-   **Workstation information**: Workstation name, workstation type, number of seats, surface, qualification
-   **Location information**: Space, floor, building, workstation position
-   **Assignment information**: Person assigned (if any), assignment type, assignment date
-   **Person information**: Name, first name, email, phone, company, department, function (if assigned)

### Use Cases

-   **Complete Workstation Overview**: Get a comprehensive view of all workstations and their assignment status
-   **Vacancy Management**: Identify unassigned workstations and plan new assignments
-   **Space Planning**: Analyze overall workstation utilization and occupancy rates
-   **Reporting**: Generate comprehensive reports for facility management and HR planning

## Building Inventory Report

The "Building inventory report" lists all objects present in the building with their object type, family, carbon footprint, number of seats and their building, floor, district, belonging space as well as the layers of the belonging spaces of the objects.

This report allows you to obtain all the furniture and sort it according to each analysis or assignment layer.

It consists of 3 tabs:

-   Objects: lists all objects except those composing workstations
-   Workstations: lists objects composing workstations
-   Fusion: lists all objects including those composing workstations

### Report Content

-   **Object information**: Object type, reference, asset code, purchase date, manufacturer, model
-   **Location information**: Space, floor, building, object position, district
-   **Object details**: Carbon footprint, number of seats, object family, analysis layers

### Use Cases

-   **Asset Management**: Track and manage building assets and furniture
-   **Maintenance**: Plan maintenance schedules and track equipment
-   **Compliance**: Ensure compliance with asset management policies
-   **Reporting**: Generate reports for asset management and accounting

## Building Space Report

The "Building spaces report" lists all spaces in the building with their surface, perimeter, ratios, typology, cost center, carbon footprint, organization and all information relating to the building spaces.

Each line corresponds to a space in the building. There is no duplicate line.

### Report Content

-   **Space information**: Space name, typology, surface, capacity, perimeter, ratios
-   **Location information**: Floor, building, space position
-   **Space details**: Cost center, carbon footprint, organization, equipment, accessibility

### Use Cases

-   **Space Planning**: Analyze space utilization and plan reorganizations
-   **Facility Management**: Track space characteristics and equipment
-   **Cost Management**: Track space costs and cost center allocations
-   **Reporting**: Generate reports for facility management and planning

## Building Cleaning Services Report

<Youtube code="w72v7SI0xEc"/>

The "Building cleaning services report" allows you to establish the monthly number of hours necessary for the realization of the cleaning service, based on 2 criteria:

-   cleaning pace: defined in space typology, it specifies the number of m² that can be cleaned in one hour in this type of space.
-   cleaning frequency: defined in the "Frequency" analysis layer of each space, it specifies the frequency with which the space must be cleaned.

Once the space typologies are filled in on their pace and all spaces to be cleaned are filled in on their frequency, you can request the "Building cleaning services report".
The file appears in downloads.

After activating modifications, each line in the Excel file displays its "Monthly number of hours".
A sum calculation at the end of the column allows you to obtain the total monthly number of hours for cleaning the digitized parts in Surfy.

Each line corresponds to a space in the building. There is no duplicate line.

### Report Content

-   **Space information**: Space name, space typology, space surface
-   **Cleaning information**: Cleaning pace, cleaning frequency, monthly hours
-   **Location information**: Floor, building, space position

### Use Cases

-   **Cleaning Management**: Plan cleaning schedules and track cleaning hours
-   **Cost Planning**: Calculate cleaning costs and budget planning
-   **Compliance**: Ensure compliance with cleaning standards and frequencies
-   **Reporting**: Generate reports for cleaning management and cost control

## Report of Building Space Analysis Layers

The "Report of building space analysis layers" lists all spaces in the building with their surface, perimeter, ratios, typology, cost center, carbon footprint, organization and all information relating to the building spaces, as well as all space qualifications to analysis or assignment layers.

Each line corresponds to a space in the building. There is no duplicate line.

### Report Content

-   **Space information**: Space name, typology, surface, capacity, perimeter, ratios
-   **Analysis layers**: All analysis and assignment layer qualifications
-   **Location information**: Floor, building, space position
-   **Space details**: Cost center, carbon footprint, organization, analysis layer data

### Use Cases

-   **Space Analysis**: Analyze space qualifications and analysis layer data
-   **Facility Planning**: Plan space usage based on analysis layer information
-   **Compliance**: Ensure compliance with space analysis and assignment policies
-   **Reporting**: Generate comprehensive reports including all space analysis data

## Download Building Flat in Excel

"Download building flat in Excel" allows listing identifiers and names of buildings, floors, spaces and workstations and allows creating concordance tables to find identifiers in Excel imports.

### Export Content

-   **Building information**: Building name, building address, building type
-   **Floor information**: Floor name, floor level, floor surface
-   **Space information**: Space name, space typology, space surface
-   **Workstation information**: Workstation type, workstation seats, workstation surface

### Use Cases

-   **Data Migration**: Prepare data for migration to other systems
-   **Integration**: Integrate with external systems and tools
-   **Analysis**: Perform advanced analysis with external tools
-   **Reporting**: Generate custom reports and dashboards