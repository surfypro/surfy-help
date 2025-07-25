---
sidebar_position: 1
---
# Créer une Personne


## Créer une personne

<Youtube code="eBXD7Atx9Dg"/>

Pour créer une personne dans Surfy à partir de la page d'accueil,
-   cliquer sur "collaborateurs", "personnes" puis sur "créer une personne". 
-   renseigner <P code="person:lastname" /> et <P code="person:firstname" />, ces deux propriétés sont obligatoires.
-   "valider" la création, ou compléter les informations éventuelles : 
        -   <P code="person:email" />, <P code="person:picture" />, <P code="person:title" />, <P code="person:monitorReference" />, <P code="person:computerReference" />, <P code="person:telephone" />, <P code="person:cellphone" />, <P code="person:code" />, <P code="person:startDate" />, <P code="person:endDate" />, <P code="person:info" />
        -   la propriété <P code="person:notAffectable" /> permet de qualifier les personnes ne pouvant être affectées, personnes en congé maternité ou en congé longue durée
        -   indiquer <P code="person:organization" /> à partir de la liste des organisations déjà créées
        -   renseigner <P code="person:personState" />, <P code="person:personSecurityProfile" />, <P code="person:costCenter" />, <P code="person:company" />
        -   valider la création.

:::tip Bon à savoir
 Dans le menu contextuel, "lister les personnes" permet d'obtenir la liste des personnes déjà entrées dans la base de données. La première personne de la liste est la dernière personne entrée dans la base.
 :::


## Clé d'identification

Afin de créer correctement les personnes dans Surfy et d'éviter les doublons, une clé d'identification est nécessaire. Elle permet de retrouver les personnes en évitant d'utiliser leur prénom et nom, sujets à erreurs.

Différentes clés sont possibles :

-   le matricule de la personne est la première clé fiable à utiliser.
-   l'email est aussi un champ unique et peut être utilisée comme clé d'identification de la personne
-   le "nom complet" peut toutefois être utilisé dans le cas d'une nomenclature maitrisée (orthographe et casse)
-   l'identifiant Surfy unique délivré par Surfy, disponible depuis un export des personnes une fois les personnes créées dans Surfy.

L'identifiant Surfy est la clé d'identification de chaque entité dans Surfy. Il est attribué par Surfy et est unique.
Chaque personne a un identifiant unique qui permet d'identifier la personne lors d'un export puis d'un réimport de données.


## Importer des personnes 

<Youtube code="J-SiqS2Wq8I"/>

On peut importer des personnes en masse dans Surfy via Excel.

-   à partir de la page d'accueil, cliquer sur "collaborateurs", "personnes", "importer des personnes".
-   l'"aide sur l'import des données pour les personnes", en haut à droite de l'écran permet de "télécharger le gabarit d'import"
-   le fichier téléchargé comprend toutes les colonnes nécessaires à l'import dans Surfy : le prénom, le nom de famille, l'email, le titre, la référence écran, référence ordinateur, téléphone fixe, portable, matricule, et toutes informations possibles à importer.

:::tip Bon à savoir
La colonne A "Identifiant Surfy" n'est pas à renseigner. L'identifiant est attribué par Surfy, il est unique, non modifiable et devient la véritable identité de la personne dans la base de données de Surfy.
:::

-   sélectionner uniquement les colonnes qui ont été remplies et les copier/coller dans une nouvelle feuille du fichier Excel. Les colonnes utilisées doivent être adjacentes.
 -  sélectionner l'ensemble avec "ctrl A", copier avec "ctrl C"
 -  dans la fenêtre d'import des personnes dans Surfy, coller les informations avec "ctrl V"
 -  "comparer" les informations du fichier avec la base de Surfy permet de détecter les personnes qui seront créées.
 -  créer l'ensemble des personnes dans Surfy, en cliquant sur "Tout créer".
 -  les personnes sont importées dans la base de données de Surfy.


L'"aide à l'import des données pour les personnes" permet aussi de choisir les propriétés à importer grace à l'icône "copier" en face de chaque propriété :
 
-   copier chaque propriété désirée pour l'importation
-   coller chaque propriété en têtes de colonne d'un fichier Excel vierge
-   remplir les lignes avec les informations à importer.
-   sélectionner uniquement les colonnes qui ont été remplies et les copier/coller dans une nouvelle feuille du fichier Excel afin que les colonnes utilisées soient adjacentes.
 -  sélectionner l'ensemble avec "ctrl A", copier avec "ctrl C"
 -  dans la fenêtre d'import des personnes dans Surfy, coller les informations avec "ctrl V"
 -  "comparer" les informations du fichier avec la base de Surfy permet de détecter les personnes qui seront créées.
 -  créer l'ensemble des personnes dans Surfy, en cliquant sur "Tout créer".
 -  les personnes sont importées dans la base de données de Surfy.




:::tip Bon à savoir
Depuis l'icône "Voir plus d'option pour la personne", on peut également "Voir les informations pour la personne dans la barre latérale" pour afficher les informations de la personne à droite de l'écran
:::