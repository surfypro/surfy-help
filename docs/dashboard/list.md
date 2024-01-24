---
sidebar_position: 1
---

# Les rapports de données du bâtiment

<Youtube code="r53dlxQAioU"/>

Les rapports de données d'un bâtiment s'obtiennent à partir de la page d'accueil, en cliquant sur l'icône en bout de bande de couleur du bâtiment puis sur "Tableau de bord du bâtiment XXX".
Cliquer sur l'icône du rapport permet sa mise à disposition dans les téléchargements.

Pour obtenir les rapports de données sur plusieurs bâtiments :

depuis la page d'accueil,

-   cliquer sur le menu contextuel (case grise sous la loupe de recherche)
-   cliquer sur "Lister les bâtiments"
-   sélectionner les bâtiments à analyser
-   cliquer sur le rapport de donnée voulu en haut de page
-   le rapport en fichier Excel est disponible dans les téléchargements

## Rapport des personnes affectées dans le bâtiment

Le "rapport des personnes affectées dans le bâtiment XXX" liste les personnes affectées dans le bâtiment en fichier Excel.

Il est composé de 3 onglets :

-   affectations aux espaces
-   affectations aux postes de travail
-   affectations aux quartiers

Chaque ligne représente une affectation dans le bâtiment et comporte toutes les informations de la personne ainsi que le bâtiment, l'étage, le quartier, l'espace, le poste de travail d'affectation de la personne.
Une personne affectée deux fois verra son nom apparaitre sur deux lignes différentes.

## Rapport des postes de travail du bâtiment

Le "Rapport des postes de travail du bâtiment" liste tous les postes de travail du bâtiment avec les informations liées à chaque poste : nom, type de poste de travail, qualifications (flex, de passage,...), organisation, bâtiment, étage, espace d'appartenance.

Il permet la modification en masse des informations liées au "mobilier" Poste de travail : ajouter ou vérifier les noms des postes de travail, leur qualification en Flex ou de passage, les affecter à des organisations, àdes centres de coût, etc...
Chaque ligne correspond à un poste de travail du bâtiment. Il n'y a pas de doublon de ligne.

## Rapport des affectations aux postes de travail du bâtiment

Le "Rapport des affectations aux postes de travail du bâtiment" liste les affectations aux postes de travail affectés, avec le nom du poste de travail, l'espace, étage, bâtiment d'appartenance ainsi que toutes les informations liées à la personne affectée au poste de travail.
Un poste de travail affecté deux fois verra son nom apparaitre sur deux lignes différentes.
Tout poste non affecté n'est pas listé dans ce fichier.

## Rapport de tous les postes de travail du bâtiment incluant les affectations

Le "Rapport de tous les postes de travail du bâtiment incluant les affectations" liste l'ensemble des postes de travail avec le nom du poste de travail, la qualification, l'espace, étage, bâtiment d'appartenance ainsi que toutes les informations liées à la personne affectée au poste de travail si elle existe.
Les postes de travail non affectés sont présents dans la liste, sans information sur la personne.
Un poste de travail affecté deux fois verra son nom apparaitre sur deux lignes différentes.

## Rapport de l'inventaire du bâtiment

Le "Rapport de l'inventaire du bâtiment" liste tous les objets présents sur le bâtiment avec leur type d'objet, famille, empreinte carbone, nombre de places assises et leur bâtiment, étage, quartier, espace d'appartenance ainsi que les calques des espaces d'appartenance des objets.

Ce rapport permet d'obtenir l'ensemble du mobilier et de le trier en fonction de chaque calque d'analyse ou d'affectation.

Il est composé de 3 onglets :

-   Objets : liste tous les objets exceptés les objets composant les postes de travail
-   Postes de travail : liste les objets composant les postes de travail
-   Fusion : liste tous les objets y compris ceux composant les postes de travail

## Rapport des espaces du bâtiment

Le "Rapport des espaces du bâtiment" liste l'ensemble des espaces du bâtiment avec leur surface, périmètre, ratios, typologie, centre de coût, empreinte carbone, organisation et toutes les informations relatives aux espaces du bâtiment.

Chaque ligne correspond à un espace du bâtiment. Il n'y a pas de doublon de ligne.

## Rapport des prestations de nettoyage du bâtiment

Le "Rapport des prestations de nettoyage du bâtiment" permet d'établir le nombre d'heures mensuel nécessaire pour la réalisation de la prestation de nettoyage, en fonction de 2 critères :

-   la cadence de nettoyage : définie dans la typologie des espaces, elle précise le nombre de m² qu'on peut nettoyer en une heure dans ce type d'espace.
-   la fréquence de nettoyage : définie dans le calque d'analyse "Fréquence" de chaque espace, elle précise la fréquence à laquelle l'espace doit être nettoyé.

Après activation des modifications, chaque ligne du fichier Excel affiche son "Nombre d'heure mensuel".
Un calcul de somme en fin de colonne permet d'obtenir le nombre d'heure mensuel total pour le nettoyage des parties digitalisées dans Surfy.

Chaque ligne correspond à un espace du bâtiment. Il n'y a pas de doublon de ligne.

## Rapport des calques d'analyse des espaces du bâtiment

Le "Rapport des calques d'analyse des espaces du bâtiment" liste l'ensemble des espaces du bâtiment avec leur surface, périmètre, ratios, typologie, centre de coût, empreinte carbone, organisation et toutes les informations relatives aux espaces du bâtiment, ainsi que toutes les qualifications des espaces aux calques d'analyse ou d'affectation.

Chaque ligne correspond à un espace du bâtiment. Il n'y a pas de doublon de ligne.

## Télécharger en excel le bâtiment à plat

"Télécharger en excel le bâtiment à plat" permet de lister les identifiants et les noms des bâtiments, étages, espaces et postes de travail et permet de créer des tableaux de concordance afin de retrouver les identifiants dans les imports Excel.