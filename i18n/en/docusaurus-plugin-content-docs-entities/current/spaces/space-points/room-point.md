# Point of spaces
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

A point in spaces defines the geometric coordinates for drawing the outline of a space

<OH code="roomPoint"/>




## Required Properties {#properties-mandatory}
    
### X coordinate {#x}

Coordinate on the X axis

*Technical name:* ```x```
<PH code="roomPoint:x"/>

### Y coordinate {#y}

Y axis coordinate

*Technical name:* ```y```
<PH code="roomPoint:y"/>

    



## Associated entities (unique) {#properties-belongs-to}

### Floor {#floor}

Floors represent a work platform or a level of a building.

*Technical name:* ```floor```
<PH code="roomPoint:floor"/>


## Associated entities (list) {#properties-has-many}

### Associations between a point and a space {#room-point-rooms}

The association between a point and a space makes it possible to preserve the order of the points in a space in order to constitute a polyon

*Technical name:* ```roomPointRooms```
<PH code="roomPoint:roomPointRooms"/>

### Segment qualifications {#room-point-segment-starts}

A segment qualification allows you to define the display and orientation properties of a segment between two space points

*Technical name:* ```roomPointSegmentStarts```
<PH code="roomPoint:roomPointSegmentStarts"/>

### Segment qualifications {#room-point-segment-ends}

A segment qualification allows you to define the display and orientation properties of a segment between two space points

*Technical name:* ```roomPointSegmentEnds```
<PH code="roomPoint:roomPointSegmentEnds"/>




