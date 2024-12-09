# Entreprise prestataire
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

L'entreprise prestataire permet de conserver les informations de l'entreprise d'un prestataire de service pour connaître par exemple le nombres de postes ou l'espace occupé par ce dernier, ou savoir quels sont les types équipements ou type d'espaces qu'il a en gestion

## Propriétés de base {#properties-base}

### Contact {#contact}

Les informations de contact du prestataire

*Nom technique:* ```contact```

### Documents associés {#documents}

Le lien vers les documents associés à ce prestataire

*Nom technique:* ```documents```

### Informations complémentaires {#comment}

Des informations complémentaires sur le prestataire, comme sa mission, ses valeurs, la couverture fonctionelle de sa préstation etc

*Nom technique:* ```comment```

### Nom {#name}

Le nom du prestataire, par exemple le nom de l'entreprise d'un prestataire de service

*Nom technique:* ```name```




## Entités associées (liste) {#properties-has-many}

### Interventions sur des objet {#person-company-to-items}

Les interventions des prestataires sur des objets permettent de définir par exemple la date d'une visite sur un extincteur

*Nom technique:* ```personCompanyToItems```

### Personnes {#people}



*Nom technique:* ```people```

### Types d'espaces des prestataires {#person-company-to-room-types}

Les types d'espaces des prestataires permettent de définir une relation entre un type d'espaces et le prestataire et d'y définir une mission

*Nom technique:* ```personCompanyToRoomTypes```

### Types d'objets des prestataires {#person-company-to-item-types}

Les types d'objets des prestataires permettent de définir une relation entre le type d'objet et le prestataires et d'y définir la mission

*Nom technique:* ```personCompanyToItemTypes```




