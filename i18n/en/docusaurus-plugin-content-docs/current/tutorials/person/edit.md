---
sidebar_position: 2
---
# Modifier une Personne


## Rechercher une personne

On peut accéder à la fiche de la personne de plusieurs façons :

-       par la loupe en effectuant une recherche puis en cliquant sur la personne recherchée
-       par la [liste filtrée](/en/docs/courses/find/listfindcourse) des personnes ("collaborateurs", "Personnes", "Lister les personnes" puis "filtrer les personnes")
-       par l'affectation de la personne en cliquant dans l'espace ou sur le poste de travail de la personne affectée puis sur l'icône "voir plus d'option pour la personne" en face du nom de la personne affectée dans la fiche de l'espace ou du poste de travail
-       par la fiche de l'objet associé à la personne, en cliquant sur l'objet puis sur l'icône "voir plus d'option pour la personne"
-       par la fiche des personnes en relation avec cette personne (manager, personne managée)


:::tip Bon à savoir
Depuis l'icône "Voir plus d'option pour la personne", on peut également "Voir les informations pour la personne dans la barre latérale" pour afficher les informations de la personne à droite de l'écran
:::

## Modifier les informations d'une personne

Pour modifier les informations d'une personne,

-   rechercher la personne avec la loupe, par nom, prénom ou matricule
-   cliquer sur le résultat recherché
-   dans le menu contextuel (etiquette grise sous la loupe de recherche), cliquer sur "modifier la personne XXX". 
-   modifier les informations éventuelles : 
        -   <P code="person:email" />, <P code="person:picture" />, <P code="person:title" /> de la personne, <P code="person:monitorReference" />, <P code="person:computerReference" />, <P code="person:telephone" />, <P code="person:cellphone" />, <P code="person:code" />, <P code="person:startDate" />, <P code="person:endDate" />, <P code="person:info" />
        -   la propriété <P code="person:notAffectable" /> permet de qualifier les personnes ne pouvant être affectées, personnes en congé maternité ou en congé longue durée
        -   indiquer l'<P code="person:organization" /> de la personne à partir de la liste des organisations déjà créées
        -   renseigner le <P code="person:personState" />, le <P code="person:personSecurityProfile" />, le <P code="person:costCenter" />, l'<P code="person:company" /> de la personne
        -   valider les modifications.




## Clé d'identification

Pour mettre à jour les informations des personnes dans Surfy, une clé d'identification est nécessaire afin de retrouver les personnes en évitant d'utiliser leur prénom et nom, sujets à erreurs.

Différentes clés sont possibles :

-   le <P code="person:code" /> de la personne est la première clé fiable à utiliser.
-   l'<P code="person:email" /> est aussi un champ unique et peut être utilisée comme clé d'identification de la personne
-   le "nom complet" peut toutefois être utilisé dans le cas d'une nomenclature maitrisée (orthographe et casse)
-   l'identifiant Surfy unique délivré par Surfy, disponible depuis un export des personnes.

L'identifiant Surfy est la clé d'identification de chaque entité dans Surfy. Il est attribué par Surfy et est unique.
Chaque personne a un identifiant unique qui permet d'identifier la personne lors d'un export puis d'un réimport de données.

A l'importation de modifications sur les personnes dans Surfy et afin d'identifier correctement les personnes concernées, la colonne avec la clé est à joindre nécessairement aux colonnes comportant les informations à importer.

## Résorber les doublons de Personnes

Résorber les doublons de personnes s'effectue en trois étapes : Détection des doublons, fusion des informations et suppression du doublon inutile.

<Youtube code="tm65Pwrhogo"/>

La base de données de Surfy peut comporter des doublons de personnes : Nom ou prénom mal orthographiés, traits d'union ou accents présents ou pas, adresse Email ou matricule erronés. Les doublons détectés sont isolés dans Surfy grace à la présence d'une clé commune.
Une fois les doublons isolés, on peut choisir et fusionner les informations puis supprimer la personne en doublon.

Pour lister les doublons, dans le menu à gauche de l'écran,

-       cliquer sur "Collaborateurs", "Personnes" puis "Les rapports et les actions pour la qualité de données pour les personnes"
-       demander les "Personnes en doublon"

Les doublons sont listés en trois catégories suivant la clé commune détectée: Email, Matricule ou Nom complet.
Le nombre de doublons est indiqué dans chaque catégorie.

Pour résorber les doublons,

-       cliquer dans la catégorie comportant des doublons
-       cliquer sur le doublon à résorber
-       choisir un des doublons comme base de départ en cochant la case "Merge" correspondante (colonnes 1 ou 2)
-       le "résultat de la fusion" affiche les informations du doublon choisi (colonne 3)
-       cliquer sur les informations du doublon non choisi afin de récupérer ses informations dans la fusion
-       les informations sélectionnées pour la fusion sont en gris dans les colonnes des doublons et affichées dans le "résultat de la fusion"
-       "Fusionner" les doublons en bas de page rassemble les informations grisées dans le doublon choisi, le doublon non choisi est supprimé.


## Modifier des personnes par fichier Excel

-   exporter en Excel la liste des personnes à modifier par le rapport des personnes ou la [liste filtrée](/en/docs/courses/find/listfindcourse) des personnes
-   compléter les informations à importer dans les colonnes avec leurs en-têtes
-   sélectionner la colonne comportant la clé d'identification
-   sélectionner également les colonnes qui ont été remplies
-   copier/coller dans une nouvelle feuille du fichier Excel. Les colonnes utilisées doivent être adjacentes.
 -  sélectionner l'ensemble avec "ctrl A", copier avec "ctrl C"
 -  dans la fenêtre d'import des personnes dans Surfy, coller les informations avec "ctrl V"
 -  "comparer" les informations du fichier avec la base de Surfy permet de détecter les modifications apportées sur les personnes.
 -  mettre à jour l'ensemble des informations des personnes dans Surfy, en cliquant sur "Mettre à jour".
 -  les modifications des personnes sont importées dans la base de données de Surfy.


