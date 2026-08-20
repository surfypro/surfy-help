---
search_rank: 0.5
sidebar_key: item-type-point
sidebar_label: "Point des types d'objet"
---

# Point des types d'objet
<ObjectTypeMenuBreadcrumb code="itemTypePoint" />
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Un point des types d'objet permet de définir des positions spécifiques pour les types d'objets sur les plans

<OH code="itemTypePoint"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Coordonnée X {#x}

Position horizontale du point sur le plan

*Nom technique:* ```x```
<PH code="itemTypePoint:x"/>

### Coordonnée Y {#y}

Position verticale du point sur le plan

*Nom technique:* ```y```
<PH code="itemTypePoint:y"/>

### Index de tri {#sort-index}

Ordre d'affichage du point

*Nom technique:* ```sortIndex```
<PH code="itemTypePoint:sortIndex"/>

    



## Entités associées (unique) {#properties-belongs-to}

### Type d'objet {#item-type}

Un type d'objet permet de catégoriser et définir les caractéristiques des objets physiques présents dans les espaces de travail

*Nom technique:* ```itemType```
<PH code="itemTypePoint:itemType"/>


## Entités associées (liste) {#properties-has-many}

### Arêtes visuelles de types d'objet {#item-type-visual-edge-starts}

Une arête visuelle définit un segment d'affichage uniquement sur le type d'objet, distinct des points de forme

*Nom technique:* ```itemTypeVisualEdgeStarts```
<PH code="itemTypePoint:itemTypeVisualEdgeStarts"/>

### Arêtes visuelles de types d'objet {#item-type-visual-edge-ends}

Une arête visuelle définit un segment d'affichage uniquement sur le type d'objet, distinct des points de forme

*Nom technique:* ```itemTypeVisualEdgeEnds```
<PH code="itemTypePoint:itemTypeVisualEdgeEnds"/>




