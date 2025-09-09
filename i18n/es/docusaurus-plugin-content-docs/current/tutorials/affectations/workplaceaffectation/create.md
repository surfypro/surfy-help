---
sidebar_position: 1
---
# Créer une Affectation à un poste de travail

Les affectations aux postes de travail correspondent à des affectations fixes. On peut retrouver l'emplacement du poste de travail ou connaitre la personne affectée à un poste de travail choisi en faisant une recherche sur la personne ou sur le poste de travail ou l'espace.

L'affectation à un poste de travail se fait toujours à partir du poste de travail, auquel on peut affecter une ou plusieurs personnes.

## Affecter une personne à un poste de travail

Pour affecter une personne à un poste de travail,

-   cliquer sur le poste de travail à affecter
-   dans la fiche du poste de travail à gauche, cliquer sur "Affecter une personne"
-   cliquer sur la personne dans la liste proposée
-   la personne est affectée au poste de travail.
-   Si la personne est déjà affectée par ailleurs, une fenêtre permet de choisir les affectations à supprimer.

Le nom de la personne affectée apparait sur la fiche du poste de travail et sur le plan en passant la souris sur le poste de travail. La liste des personnes affectées à un espace ou aux postes de travail de cet espace est disponible en cliquant dans l'espace concerné puis dans l'onglet "Affectations" de la fiche de l'espace.


:::tip Bon à savoir
On peut afficher le nom des personnes affectées aux postes de travail en cliquant sur l'icone "Gérer les textes d'affichage des postes de travail" au dessus du plan et en sélectionnant les informations à afficher.
:::


## Créer et affecter une personne à un poste de travail

Si la personne à affecter n'est pas encore créée dans la base de données de Surfy, on peut la créer et l'affecter en un seul mouvement.

<Youtube code="gqpkHBE_0Lw"/>

Pour "créer et associer" une nouvelle personne,

-   cliquer sur le poste de travail à affecter
-   dans la fiche du poste de travail à gauche, cliquer sur "Affecter une personne"
-   rechercher la personne
-   si la personne n'existe pas dans Surfy, cliquer sur "créer et associer une personne"
-   compléter la fiche de la personne
-   valider la création de la personne
-   la personne est créée et affectée au poste de travail.


## Affecter des personnes aux postes de travail par import Excel

On peut affecter des personnes en masse en important le fichier Excel correspondant.
Ce fichier doit être composé au minimum :
-   de l'identifiant de la personne à affecter
-   de l'identifiant du poste de travail de l'affectation
-   des bons en-têtes sur les colonnes à importer.

Pour cela :
-	Sortir le fichier Excel « rapport des postes de travail » pour obtenir l’identifiant des postes de travail
-	Sortir la « liste des personnes » en Excel pour obtenir leur identifiant
-	Sortir le gabarit d’affectation des personnes à un postes de travail pour obtenir les en-têtes corrects pour la réimportation du fichier Excel
-	Remplir les colonnes «Identifiant Surfy (<P code="workplaceAffectation:person" />) » avec l’identifiant de la personne, et « Identifiant du poste de travail (<P code="workplaceAffectation:workplace" />) » avec l’identifiant du poste de travail.
-	Importer ces deux colonnes uniquement, dans « importer des affectations au poste de travail ».


:::warning Attention
Les nouvelles affectations créées par importation viennent s'ajouter aux affectations déjà présentes, sans proposition de suppression de ces affectations.
Il faut donc veiller à supprimer toutes les affectations  obsolètes avant d'importer le fichier.
Les affectations à conserver nécessitent de renseigner dans l'import l'"Identifiant de l'affectation" afin de ne pas créer un doublon d'affectation
 :::