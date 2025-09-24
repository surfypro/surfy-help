---
sidebar_position: 3
---

# La qualité des données

Afin de préserver une qualité de données optimale, Surfy permet d'identifier et de résoudre les problèmes potentiels ou les actions à mener sur les données suivantes :

-   Collaborateurs
-   Mobiliers
-   Affectations
-   Espaces
-   Organisations
-   Administration

Pour accéder à la liste des rapports de qualité de données, depuis la page d'accueil,

-   cliquer sur "Administration", "Entreprises" pour "Lister tous les rapports de qualité de données par entité".

Chaque rapport de qualité de données est également accessible individuellement à partir du menu de gauche en cliquant sur une des entités listées ci-dessus puis sur "Les rapports et les actions pour la qualité de données pour les XXX".

## Qualité de données des collaborateurs

### Personnes affectées à un bâtiment sans autre affectation

Ce rapport permet d'identifier les personnes en attente de leur affectation finale à un poste de travail, espace ou quartier et affectées uniquement à un bâtiment.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les personnes cochées.

### Personnes quittant l'entreprise

Ce rapport liste les personnes qui ont une date de fin de contrat postérieure à la date du jour et qui sont affectées à un poste de travail.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les personnes cochées.

### Personnes sans affectation

Ce rapport liste les personnes affectables n'ayant pas d'affectation (bâtiment, poste de travail, calque d'affectation, espace).

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les personnes cochées.

### Personnes en doublon

Ce rapport liste les doublons sur le nom + prénom, le matricule ou l'adresse Email des personnes présentes dans la base de données.

Pour plus d'information sur le traitement des doublons, voir [Résorber le doublon de personnes](/docs/tutorials/person/edit/#résorber-les-doublons-de-personnes)

### Personnes non affectables avec une date de fin expirée

Ce rapport liste les personnes cochées "non affectables" dans la fiche de la personne, avec une date de fin d'affectabilité antérieure à la date du jour.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les personnes cochées.

## Qualité de données des mobiliers

### Postes de travail "de passage" avec affectation

Par définition, les postes de passage ne sont pas affectables puisqu'ils sont destinés à un usage ponctuel ou à des personnes temporairement installées.
Toutefois, il peut arriver par import ou synchronisation de fichier, que ces postes reçoivent une affectation.<br />
Ce rapport permet de lister les postes de passage étant affectés à des collaborateurs afin de supprimer la qualification "de passage" ou l'affectation.

Cocher tout ou partie des cases permet d'extraire la liste en Excel.

### Espaces des objets différents des espaces des postes de travail

Ce rapport permet de lister les objets physiques des postes de travail appartenant à des espaces differents de ceux des postes de travail eux mêmes.

Par copie, import ou manipulation de poste de travail, certains objets le composant peuvent être attribués à un espace autre que celui dans lequel est placé le poste de travail.

Cocher tout ou partie des cases permet d'extraire la liste en Excel, de supprimer les objets physiques cochés ou de réparer en attribuant à l'objet physique l'espace d'appartenance du poste de travail.

## Qualité de données des affectations

### Affectation au poste de travail

Ce rapport permet de lister les dernières affectations aux postes de travail dans les bâtiments de référence, avec la date de l'affectation, les informations de la personne et l'emplacement du poste de travail affecté.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les affectations cochées.

### Affectation au calque d'affectation

Ce rapport permet de lister les dernières affectations aux quartiers dans les bâtiments de référence, avec la date de l'affectation, les informations de la personne et le calque d'affectation.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les affectations cochées.

## Qualité de données des espaces

### Proposition de noms pour les espaces

Ce rapport propose des noms pour les espaces qui n'ont pas de nom ou dont le nom n'est pas unique dans un même étage.<br />
Il est important que chaque espace ait un nom unique afin de pouvoir géolocaliser les espaces sans risque d'erreur.

Cocher tout ou partie des cases permet d'extraire la liste en Excel, de supprimer les espaces cochés, ou de mettre à jour les nouveaux noms des espaces.

### Les espaces sans assez de points

Ce rapport permet de lister les espaces qui ont 0, 1 ou 2 points et qui devraient donc avoir une superficie nulle.
Ces espaces peuvent nuire au bon fonctionnement de l'application et doivent être supprimés ou corrigés.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les espaces cochés.

### Les espaces qui ont une capacité hors assises égale au nombre de places assises

La capacité hors assise peut être utilisée pour définir le nombre de places disponibles dans un espace ou pour connaître le maximum de personnes qu'on peut mettre dans un espace. Ce chiffre s'ajoute au nombre de places assises pour donner la capacité totale d'un espace.

Ce rapport permet de lister les espaces dont la capacité hors assise est égale au nombre de places assises, et dont la capacité totale se retrouve doublée par rapport à la réalité.

Ce peut être le cas sur des espaces dont on a donné la capacité avant de placer le mobilier, ou avant qu'on attribue le nombre de places assises au mobilier. Il est alors nécessaire de supprimer ce doublon d'information pour récupérer une capacité totale cohérente avec le nombre de places assises.

Cocher tout ou partie des cases permet d'extraire la liste en Excel, de supprimer les espaces cochés ou de mettre à zéro la capacité hors assise de ces espaces.

### Les espaces dont la capacité hors assise est différente de 0

Ce rapport permet de pointer les incohérences dans les capacités des espaces ou détecter par exemple le mobilier qui n'a pas encore de place assise.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les espaces cochés. Pour modifier la capacité de l'espace, rechercher et cliquer dans l'espace sur le plan puis modifier l'espace.

## Qualité de données des organisations

### Erreurs sur les organisations des espaces

Ce rapport détecte les associations d'espaces à des organisations qui ne sont pas conformes, comme le rattachement d'un espace à une direction.

Pour modifier une organisation non conforme, voir le chapitre sur la [Hiérarchie des organisations](/docs/tutorials/organization/create#hiérarchie-des-organisations)

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les espaces cochés.

Pour modifier l'organisation de l'espace, rechercher et cliquer dans l'espace sur le plan puis modifier l'organisation de l'espace.

### Erreurs sur la hiérarchie des organisations

Ce rapport détecte des hiérarchies non conformes dans les organisations, comme une organisation ayant en même temps une Direction et des Services.

Pour modifier et mettre en conformité les organisations, voir le chapitre sur la [Hiérarchie des organisations](/docs/tutorials/organization/create#hi%C3%A9rarchie-des-organisations)

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les organisations cochées.

Pour modifier la hiérarchie de l'organisation, cliquer sur l'icône en début de ligne pour "modifier l'organisation XXX" ou lister les organisations et modifier l'organisation non conforme.

## La qualité des données Administration

### Cohérence de l'inventaire

Ce rapport permet de détecter et réparer les incohérences de l'inventaire physique et virtuel pour les postes de travail.

Un objet physique composant un poste de travail permet d'associer une référence, un code d'immobilisation et une date d'achat à cet objet, de manière individuelle.

Afin d'utiliser des objets physiques pour composer des postes de travail, il est nécessaire de créer les objets correspondants, ou de les supprimer si l'inventaire physique n'est plus nécessaire.

Pour plus d'informations sur la conception d'objets physiques dans les postes de travail, voir le chapitre [Composer un poste de travail avec des objets physiques](/docs/tutorials/objects/workplacetype/create/#composer-un-poste-de-travail-avec-des-objets-physiques).

### Emplacement des formes

Ce rapport permet de détecter et repositionner les formes qui appartiennent à un autre espace que celui où il est positionné sur le plan.

Cocher tout ou partie des cases puis "appliquer le changement d'espace" permet de mettre en conformité l'espace d'appartenance de l'objet coché.

L'espace d'appartenance d'un objet placé en dehors d'un espace (poteau, par exemple) ne sera pas modifié.

### Association calque d'analyse aux espaces : type de calque incorrect

Ce rapport détecte les associations avec des types de calques incohérents, par exemple si le type de calque a été modifié et ne correspond pas au type de calque original.

Cocher tout ou partie des cases permet d'extraire la liste en Excel ou de supprimer les associations du calque d'analyse aux espaces cochés.

Pour modifier un calque ou un type de calque d'analyse, voir le chapitre [Modifier un calque d'analyse](/docs/tutorials/dimensionType/edit).

Pour modifier l'association d'un calque d'analyse à un espace, cliquer dans l'espace sur le plan et "modifier" l'espace.