# Point des espaces
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->



<OH code="roomPoint"/>


## Propriétés de base {#properties-base}

### x {#x}

Coordonnée sur l'axe X

*Nom technique:* ```x```
<PH code="roomPoint:x"/>

### y {#y}

Coordonnée sur l'axe Y

*Nom technique:* ```y```
<PH code="roomPoint:y"/>


## Entités associées (unique) {#properties-belongs-to}

### Étage {#floor}

Les étages represent un plateau de travail ou un niveau d'un bâtiment

*Nom technique:* ```floor```
<PH code="roomPoint:floor"/>


## Entités associées (liste) {#properties-has-many}

### Associations entre un point et un espace {#room-point-rooms}

L'association entre un point et un espace permet de conserver l'ordre des points dans un espace afin de constituer un polyon

*Nom technique:* ```roomPointRooms```
<PH code="roomPoint:roomPointRooms"/>

### Qualifications de segments {#room-point-segment-starts}



*Nom technique:* ```roomPointSegmentStarts```
<PH code="roomPoint:roomPointSegmentStarts"/>

### Qualifications de segments {#room-point-segment-ends}



*Nom technique:* ```roomPointSegmentEnds```
<PH code="roomPoint:roomPointSegmentEnds"/>




