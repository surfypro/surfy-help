# Type d'espace du prestataire
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Les types d'espaces des prestataires permettent de définir une relation entre un type d'espaces et le prestataire et d'y définir une mission

<OH code="personCompanyToRoomType"/>


## Propriétés de base {#properties-base}



## Entités associées (unique) {#properties-belongs-to}

### Entreprise prestataire {#person-company}

L'entreprise prestataire permet de conserver les informations de l'entreprise d'un prestataire de service pour connaître par exemple le nombres de postes ou l'espace occupé par ce dernier, ou savoir quels sont les types équipements ou type d'espaces qu'il a en gestion

*Nom technique:* ```personCompany```
<PH code="personCompanyToRoomType:personCompany"/>

### Mission du prestataire {#person-company-mission}

Les missions des prestataires permettent de connaitre le domaine d'intervention des prestataires

*Nom technique:* ```personCompanyMission```
<PH code="personCompanyToRoomType:personCompanyMission"/>

### Typologie d'espace {#room-type}



*Nom technique:* ```roomType```
<PH code="personCompanyToRoomType:roomType"/>





