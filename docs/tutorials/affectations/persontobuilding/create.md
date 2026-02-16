---
sidebar_position: 1
---
# Créer une Affectation à un bâtiment

L'affectation au bâtiment permet d'attribuer aux personnes un bâtiment d'appartenance avant de leur donner une affectation plus précise, dans le cas d'une gestion multi sites par exemple.
L'affectation au bâtiment peut être comptabilisée dans le nombre d'affectations du bâtiment, ou non.

L'affectation au bâtiment permet également la réservation sur l'ensemble des postes de travail réservables du bâtiment, moyennant la configuration requise. Voir [Réserver un poste de travail](/docs/tutorials/booking/workstationbooking/workplace)


## Affecter une personne à un bâtiment depuis la fiche de la personne

On peut modifier les affectations d'une personne en modifiant la fiche de la personne.

La loupe de recherche sous le logo de l'entreprise permet de rechercher une personne dans la base de données de Surfy.

Cliquer sur le nom ouvre la fiche de la personne, avec ses informations d'affectations.

Pour modifier ces informations,

-   cliquer dans le menu contextuel (case grise sous la loupe de recherche) pour "modifier la personne XXX"
-   en bas de page, cliquer sur la bande "Affectations au bâtiment"

Les bâtiments d'affectation de la personne sont disponibles à la création, modification ou suppression.

Pour créer une nouvelle affectation à un bâtiment,

-   cliquer sur "Créer une affectation au bâtiment"
-   choisir le bâtiment pour l'affectation
-   comptabiliser ou non l'affectation dans les données d'occupation
-   autoriser ou non la réservation à l'ensemble du bâtiment
-   autoriser ou non la réservation de parking sur ce bâtiment
-   valider la création, chaque affectation s'ajoute à la liste.


Si la personne n'est pas encore créée dans la base de données de Surfy, on peut "Créer et associer" cette personne au bâtiment :

-   cliquer sur "Créer et associer"
-   remplir la fiche de la personne
-   "valider la création" de la personne

La personne est créée et affectée au bâtiment correspondant.

## Affecter une personne à un bâtiment par la liste d'affectations

On peut créer une affectation au bâtiment depuis le menu de gauche,

-   cliquer sur "Affectations", "Affectations au bâtiment", puis "Créer une affectation au bâtiment".
-   rechercher la <P code="personToBuilding:person" /> à affecter en cliquant sur le "crayon" de la "Personne"
-   rechercher le <P code="personToBuilding:building" /> d'affectation en cliquant sur le "crayon" du "Bâtiment"
-   comptabiliser ou non l'affectation dans les données d'occupation
-   autoriser ou non la réservation à l'ensemble du bâtiment
-   autoriser ou non la réservation de parking sur ce bâtiment
-   valider la création

La personne est affectée au bâtiment.

:::tip Bon à savoir
Depuis la page d'accueil et pour une mise à jour des informations des bâtiments, il est nécessaire de "recharger les données visibles" en cliquant sur l'icone en haut à droite de l'écran. Une fois les données recalculées, rafraichir par la flèche tournante en haut à gauche de l'écran, ou par F5 afin d'obtenir les bonnes informations sur la fiche du bâtiment.
:::

## Créer et affecter une personne au bâtiment

Si la personne à affecter au bâtiment n'est pas encore créée dans la base de données de Surfy, on peut la créer et l'affecter en un seul mouvement :

-   cliquer sur "Affectations", "Affectations au bâtiment", puis "Créer une affectation au bâtiment".
-   rechercher la <P code="personToBuilding:person" /> à affecter en cliquant sur le "crayon" de la "Personne"
-   si la personne n'existe pas dans Surfy, cliquer sur "créer et associer un personne"
-   remplir les informations de création de personne et "valider la création" de la personne
-   rechercher le <P code="personToBuilding:building" /> d'affectation en cliquant sur le "crayon" du "Bâtiment"
-   comptabiliser ou non l'affectation dans les données d'occupation
-   autoriser ou non la réservation à l'ensemble du bâtiment
-   autoriser ou non la réservation de parking sur ce bâtiment
-   valider la création

La personne est créée et affectée au bâtiment.

## Affecter des personnes au bâtiment par import Excel

-   cliquer sur "Affectations", "Affectations au bâtiment", puis "Importer des affectations au bâtiment".
-   composer le gabarit d'import en cliquant sur l'icone " Voir l'aide sur l'import de données pour les affectations au bâtiment" en haut à droite de l'écran
-   remplir le fichier Excel d'import : identification personne, identification bâtiment.
-   importer les colonnes nécessaires en copiant collant dans la case prévue à cet effet
-   "Comparer" puis "Créer" les affectations au bâtiment listées.

Les affectations au bâtiment sont créées.