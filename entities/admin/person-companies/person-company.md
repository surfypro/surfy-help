# Entreprise prestataire
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

L'entreprise prestataire permet de gérer le personnel prestataire par entreprise d'appartenance

<OH code="personCompany"/>




## Propriétés obligatoires {#properties-mandatory}
    
### Nom {#name}

Le nom du prestataire, par exemple le nom de l'entreprise d'un prestataire de service

*Nom technique:* ```name```
<PH code="personCompany:name"/>

    


## Propriétés de base {#properties-base}
    
### Contact {#contact}

Les informations de contact du prestataire

*Nom technique:* ```contact```
<PH code="personCompany:contact"/>

### Documents associés {#documents}

Le lien vers les documents associés à ce prestataire

*Nom technique:* ```documents```
<PH code="personCompany:documents"/>

### Informations complémentaires {#comment}

Des informations complémentaires sur le prestataire, comme sa mission, ses valeurs, la couverture fonctionelle de sa préstation etc

*Nom technique:* ```comment```
<PH code="personCompany:comment"/>

    



## Entités associées (liste) {#properties-has-many}

### Interventions sur des objet {#person-company-to-items}

Les interventions des prestataires sur des objets permettent de définir par exemple la date d'une visite sur un extincteur

*Nom technique:* ```personCompanyToItems```
<PH code="personCompany:personCompanyToItems"/>

### Personnes {#people}

Ce sont les personnes entrées dans la base de données de Surfy

*Nom technique:* ```people```
<PH code="personCompany:people"/>

### Types d'espaces des prestataires {#person-company-to-room-types}

Les types d'espaces des prestataires permettent de définir une relation entre un type d'espaces et le prestataire et d'y définir une mission

*Nom technique:* ```personCompanyToRoomTypes```
<PH code="personCompany:personCompanyToRoomTypes"/>

### Types d'objets des prestataires {#person-company-to-item-types}

Les types d'objets des prestataires permettent de définir une relation entre le type d'objet et le prestataires et d'y définir la mission

*Nom technique:* ```personCompanyToItemTypes```
<PH code="personCompany:personCompanyToItemTypes"/>




