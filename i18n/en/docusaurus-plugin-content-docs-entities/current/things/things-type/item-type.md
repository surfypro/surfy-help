# Object type
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="itemType"/>




## Required Properties {#properties-mandatory}
    
### Height index {#z-index}

The higher the height index, the more the object will be positioned above the others; It can be negative; for example for a seat: -1; Tip: for Icons, set the index to 9

*Technical name:* ```zIndex```
<PH code="itemType:zIndex"/>

### Object type name {#name}

Allows you to quickly identify the type of object with a complete, logical and descriptive name; You can indicate the dimensions, for example: Meeting Table 340x120; Tip: always start with the largest dimension

*Technical name:* ```name```
<PH code="itemType:name"/>

    


## Basic properties {#properties-base}
    
### Carbon footprint {#carbon-footprint}

The carbon footprint is the weight in Kilograms of CO2 emitted by each object from this type of object; it is given by the manufacturer

*Technical name:* ```carbonFootprint```
<PH code="itemType:carbonFootprint"/>

### Code {#code}

Allows you to quickly access the object type by typing the code in the search during object creation

*Technical name:* ```code```
<PH code="itemType:code"/>

### Color {#color}

Can be chosen from a pre-selection, or in advanced selection by Hexa or RGB code to respect your graphic charter

*Technical name:* ```color```
<PH code="itemType:color"/>

### Description {#description}

Allows you to have additional information on the type of object

*Technical name:* ```description```
<PH code="itemType:description"/>

### Enable navigation {#exclude-from-pathfinding}

Enables navigation for this object type

*Technical name:* ```excludeFromPathfinding```
<PH code="itemType:excludeFromPathfinding"/>

### Height {#height}

Allows you to give the height in centimeters of the type of object in 3d vision

*Technical name:* ```height```
<PH code="itemType:height"/>

### Icon {#icon}

Gives you access to three types of icon: 1) “Fontawsome” Icons, visible by checking “show all” or by searching by keyword in English in the search box; 2) “SURFY” Icons intended for illustrations added to plans in strategic locations (Toilets, Stairs, Elevators, Copy Points, etc.) but which can also be used as classic icons; 3) The “SURFY 2” Icons listing the regulatory icons of the ISO 7010 Safety standard; Their shape can be round, square or triangular

*Technical name:* ```icon```
<PH code="itemType:icon"/>

### Icon background color {#icon-background-color}

The background color allows you to correctly configure multi-color icons, particularly triangular ones.

*Technical name:* ```iconBackgroundColor```
<PH code="itemType:iconBackgroundColor"/>

### Icon border color {#icon-border-color}

The border color allows you to correctly configure multi-color icons, especially triangular ones.

*Technical name:* ```iconBorderColor```
<PH code="itemType:iconBorderColor"/>

### Icon shape {#icon-shape}

The shape of the icon can influence its display on the plan

*Technical name:* ```iconShape```
<PH code="itemType:iconShape"/>

### Is it associatable with a person ? {#is-affectable}

Allows you to know if the object type is associable with a person

*Technical name:* ```isAffectable```
<PH code="itemType:isAffectable"/>

### Number of seats {#seats-count}

The number of seats for this type of object (armchair, seat, sofa, etc.) is accumulated in Surfy by space, floor and building

*Technical name:* ```seatsCount```
<PH code="itemType:seatsCount"/>

### Photo {#picture}

Allows you to load the photo of the type of object, which will be visible in the inventory in PDF and on the sheet of the object selected on the plan

*Technical name:* ```picture```
<PH code="itemType:picture"/>

### Price {#price}

The purchase price of the item type

*Technical name:* ```price```
<PH code="itemType:price"/>

### Show plan information {#display-item-reference-in-map}

Allows you to display the “Reference” field of each object on the plan

*Technical name:* ```displayItemReferenceInMap```
<PH code="itemType:displayItemReferenceInMap"/>

    

## Associated entities (unique) {#properties-belongs-to}

### 3d model {#object-3d-model}

The 3D Model allows a realistic 3D representation of objects placed on the plan; In the absence of a 3D model, the objects are represented in full form in the 3D view

*Technical name:* ```object3dModel```
<PH code="itemType:object3dModel"/>

### Family of object types {#item-type-family}

Allows you to display objects by Family on the plans and in the pdf inventory

*Technical name:* ```itemTypeFamily```
<PH code="itemType:itemTypeFamily"/>

### Object type manufacturer {#manufacturer}

Allows you to identify the manufacturer of the object type

*Technical name:* ```manufacturer```
<PH code="itemType:manufacturer"/>


## Associated entities (list) {#properties-has-many}

### Object types in workstation type {#workplace-type-item-types}



*Technical name:* ```workplaceTypeItemTypes```
<PH code="itemType:workplaceTypeItemTypes"/>

### Objects {#items}



*Technical name:* ```items```
<PH code="itemType:items"/>

### Points of object types {#item-type-points}



*Technical name:* ```itemTypePoints```
<PH code="itemType:itemTypePoints"/>

### Provider object types {#person-company-to-item-types}

The service provider object types make it possible to define a relationship between the object type and the service provider and to define the mission.

*Technical name:* ```personCompanyToItemTypes```
<PH code="itemType:personCompanyToItemTypes"/>




