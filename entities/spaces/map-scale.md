---
search_rank: 0.5
---    
# Échelle plan
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Une échelle de plan permet de définir les paramètres d'affichage et de mise à l'échelle pour les plans

<OH code="mapScale"/>




## Propriétés obligatoires {#properties-mandatory}
    
### P1 {#p-1}

Point de départ

*Nom technique:* ```p1```
<PH code="mapScale:p1"/>

### P2 {#p-2}

Point d'arrivé

*Nom technique:* ```p2```
<PH code="mapScale:p2"/>

    


## Propriétés de base {#properties-base}
    
### Distance {#length}

La distance representée sur le plan entre les 2 points en mètre

*Nom technique:* ```length```
<PH code="mapScale:length"/>

### Epaisseur des lignes {#stroke-width}

Il est possible de réduire l'épaisseur des lignes pour augmenter la lisibilité du plan

*Nom technique:* ```strokeWidth```
<PH code="mapScale:strokeWidth"/>

### Nom de l'échelle {#name}

Pour se rémémorer le nom et le réutiliser sur d'autres étages

*Nom technique:* ```name```
<PH code="mapScale:name"/>

### Ratio {#ratio}



*Nom technique:* ```ratio```
<PH code="mapScale:ratio"/>

### Taille des icônes des types d'espace {#room-icon-size}

La taille des icones sur le plan dans les espaces par rapport aux types d'espace

*Nom technique:* ```roomIconSize```
<PH code="mapScale:roomIconSize"/>

### Taille des icônes des types d'objet {#item-type-icon-size}

La taille des icones des types d'objet sur le plan, la taille sera limitée par la taille de l'espace

*Nom technique:* ```itemTypeIconSize```
<PH code="mapScale:itemTypeIconSize"/>

### Taille du texte des espaces {#room-text-size}

La taille du texte des espaces sur le plan pour optimiser l'affichage

*Nom technique:* ```roomTextSize```
<PH code="mapScale:roomTextSize"/>

### Taille du texte des segments {#segment-distance-text-size}

La taille du texte sur les distances entre les points sur le plan pour optimiser l'affichage

*Nom technique:* ```segmentDistanceTextSize```
<PH code="mapScale:segmentDistanceTextSize"/>

### Taille du texte sur les objets {#workplace-text-size}

La taille du texte sur les postes de travail et sur les objets sur le plan pour optimiser l'affichage

*Nom technique:* ```workplaceTextSize```
<PH code="mapScale:workplaceTextSize"/>

    



## Entités associées (liste) {#properties-has-many}

### Étages {#floors}

Les étages represent un plateau de travail ou un niveau d'un bâtiment

*Nom technique:* ```floors```
<PH code="mapScale:floors"/>




