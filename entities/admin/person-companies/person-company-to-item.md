# Intervention sur un objet
<!--- THIS FILE IS GENERATED PLEASE DO NOT EDIT IT DIRECTLY --->

Les interventions des prestataires sur des objets permettent de définir par exemple la date d'une visite sur un extincteur

<OH code="personCompanyToItem"/>


## Propriétés de base {#properties-base}

### Commentaire {#comment}

Un commentaire sur l'intervention

*Nom technique:* ```comment```
<PH code="personCompanyToItem:comment"/>

### Date et heure de l'intervention {#datetime}

Le moment auquel l'intervention a eu lieu

*Nom technique:* ```datetime```
<PH code="personCompanyToItem:datetime"/>


## Entités associées (unique) {#properties-belongs-to}

### Entreprise prestataire {#person-company}

L'entreprise prestataire permet de conserver les informations de l'entreprise d'un prestataire de service pour connaître par exemple le nombres de postes ou l'espace occupé par ce dernier, ou savoir quels sont les types équipements ou type d'espaces qu'il a en gestion

*Nom technique:* ```personCompany```
<PH code="personCompanyToItem:personCompany"/>

### Objet {#item}



*Nom technique:* ```item```
<PH code="personCompanyToItem:item"/>





