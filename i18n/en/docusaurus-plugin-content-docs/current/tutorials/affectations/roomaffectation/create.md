---
sidebar_position: 1
---
# Create a Space Assignment
Space assignments correspond to free assignments in a defined space. You can find the location of the space occupied by the person or know the person assigned to the chosen space by searching for the person or the space.

Assignment to a space is always done from the space, to which you can assign one or more people.

## Assign a Person to a Space

To assign a person to a space,

-   click on the space to assign
-   in the space card on the left, click on "Assign a person"
-   click on the person in the proposed list
-   the person is assigned to the space.
-   If the person is already assigned elsewhere, a window allows you to choose which assignments to delete.

The list of people assigned to a space or to the workstations in that space is available by clicking in the concerned space then in the "Assignments" tab of the space card.


:::tip Bon à savoir
On peut afficher le nom des personnes affectées aux espaces en cliquant sur l'icone "Gérer les textes d'affichage des espaces" au dessus du plan et en sélectionnant les informations à afficher.
:::


## Créer et affecter une personne à un espace

Si la personne à affecter n'est pas encore créée dans la base de données de Surfy, on peut la créer et l'affecter en un seul mouvement :

-   cliquer sur l'espace à affecter
-   dans la fiche d'espace à gauche, cliquer sur "Affecter une personne"
-   rechercher la personne
-   si la personne n'existe pas dans Surfy, cliquer sur "créer et associer une personne"
-   compléter la fiche de la personne
-   valider la création de la personne
-   la personne est créée et affectée à l'espace.


## Affecter des personnes aux espaces par import Excel

On peut affecter des personnes en masse en important le fichier Excel correspondant.
Ce fichier doit être composé au minimum :
-   de l'identifiant de la <P code="roomAffectation:person" /> à affecter
-   de l'identifiant de l'<P code="roomAffectation:room" /> de l'affectation
-   des bons en-têtes sur les colonnes à importer.


:::warning Attention
Les nouvelles affectations créées par importation viennent s'ajouter aux affectations déjà présentes, sans proposition de suppression de ces affectations.
Il faut donc veiller à supprimer toutes les affectations  obsolètes avant d'importer le fichier.
Les affectations à conserver nécessitent de renseigner dans l'import l'"Identifiant de l'affectation" afin de ne pas créer un doublon d'affectation
:::

