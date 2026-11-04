---
sidebar_position: 4
---

# Sauvegarde des plans en Image

On peut exporter différents types de plans en fichiers PNG depuis Surfy :
-   les plans 2D de l'étage
-   les plans 2D des étages du bâtiment, partiel ou complet
-   les plans 3D de l'étage
-   les plans 3D du bâtiment, partiel ou complet

Tous les plans sont exportés au format PNG.

## Exporter les plans 2D en Image

### Exporter le plan 2D d'un étage

Pour exporter le plan d'un étage en Image,

-   aller sur l'étage concerné
-   afficher sur le plan le calque et les informations nécessaires à la sortie en Image : mobilier, affichage des textes, taille des polices, taille des icones, ...

Pour plus d'informations sur la configuration d'affichage des plans, voir le chapitre [Affichage des plans en 2D](/docs/courses/views/2Dviews.md).

-   une fois le plan configuré, cliquer sur l'icône "nuage" au dessus du plan afin de "sauvegarder en Image" le plan de l'étage.

-   choisir l'option de téléchargement en cliquant sur :

    -   Tout le plan avec légende : pour obtenir l'ensemble du plan de l'étage tel qu'il est dans Surfy, avec les légendes des calques et le cumul des informations par calque
    -   Tout le plan sans légende : pour obtenir l'ensemble du plan de l'étage tel qu'il est dans Surfy, sans les légendes
    -   Copie d'écran sans légende : pour obtenir la partie du plan affichée sur l'écran, sans les légendes

Le fichier PNG est disponible dans les téléchargements.

### Configurer la légende du plan 2D à exporter

Lors de la sortie en image du plan d'un étage avec légende, la "légende par défaut" est composée :

-   du logo de l'entreprise
-   du nom du bâtiment et de son adresse (si renseignée)
-   du nom de l'étage
-   des informations de l'étage, identiques aux informations de la fiche de l'étage à gauche du plan
-   de la légende du calque affiché, avec le cumul des informations par calque.

On peut créer des légendes personnalisées, et afficher la légende de son choix sur les sorties en image.

Pour créer une légende, depuis le menu de gauche,

-   cliquer sur "Administration" puis "Légende" pour "Créer une légende"
-   donner un nom à la légende à créer
-   dans "Sélection des propriétés de la structure", cocher les propriétés et informations à afficher pour les "bâtiments" et les "étages"
-   dans "Sélection par filtre", cocher les informations à afficher (nombre d'espaces, capacité totale, taux d'occupation,...) pour les Directions, Services, typologies, groupes de typologies, centres de coût,... et calques d'analyse présents sur la plateforme.
-   dans "Sélection des propriétés par entité", cocher les informations à afficher (nombre d'espace ou capacité totale) individuellement pour chaque typologie et pour chaque groupe de typologies.
-   dans "Trier l'ordre d'affichage des propriétés", faire remonter ou descendre chaque propriété afin de configurer l'ordre des informations dans la légende.
-   "Ajouter un séparateur" permet d'isoler un groupe d'informations des informations suivantes ou précédentes.
-   "valider la création" de la légende

Lors de la sortie en image du plan d'un étage avec légende, "sélectionner la légende" à droite de l'écran permet de retrouver les différentes légendes enregistrées afin d'afficher la légende sélectionnée.

L'aperçu de la légende est visualisable en cliquant sur l'icône "Prévisualiser la légende" en bas de la fiche "sauvegarder en image" à droite de l'écran.



:::tip BON A SAVOIR
Il peut être nécessaire de recharger la légende modifiée en sélectionnant une autre légende, puis en sélectionnant de nouveau la légende à utiliser pour la valider.
:::

### Exporter les plans 2D de plusieurs étages

On peut exporter les plans de plusieurs étages simultanément,
-   cliquer sur "Exporter les images de tout le bâtiment"
-   sélectionner les étages à exporter
-   cliquer sur "télécharger le ZIP"

Le fichier compressé est disponible dans les téléchargements.

:::tip Bon à savoir
Tous les plans des étages reprennent la configuration du plan à partir duquel l'export est fait : pas besoin de charger le bon calque, la bonne légende ni de choisir la bonne taille de police pour chaque étage, une fois suffit !
:::

## Exporter les plans 3D en Image

Les plans en 3D sont disponibles pour l'étage ou pour le bâtiment.
Ils sont dynamiques et interactifs.

Chaque modification sur le plan 2D est reportée immédiatement sur le plan 3D.

### Exporter le plan 3D d'un bâtiment

Pour obtenir le plan en 3D d'un bâtiment, depuis la page d'accueil,

-   cliquer sur l'icône en bout de ligne de couleur du bâtiment concerné
-   sélectionner "le plan en 3D interactif du bâtiment XXX"
-   cliquer sur l'icône verticale "engrenage" afin de "voir les options du plan"
-   sélectionner les étages à afficher dans le bâtiment
-   choisir le type de représentation des cloisons (avec cloisons, sans cloison ou cloisons à mi-hauteur)
-   la représentation "Cuby" remplace chaque espace par un cube reprenant la couleur du calque de l'espace

On peut régler l'"espace entre chaque étage" en actionnant le curseur à gauche du plan 3D.

La molette de la souris permet d'ajuster la taille du plan 3D.
Le clic1 de la souris permet d'incliner et d'orienter le plan dans l'espace
Le clic2 de la souris permet le déplacement du plan 3D dans la fenêtre de l'écran.

On peut incliner le plan 3D avec un angle constant, en cliquant sur "Centre le plan en vue Isometric"

Une fois le plan 3D correctement configuré,

-   cliquer sur l'icône verticale "engrenage" afin de "voir les options du plan" (si ce n'est pas déjà le cas)
-   cliquer sur "Télécharger l'image"

L'export donne l'image du bâtiment 3D tel qu'il est sur l'écran.
Le plan 3D du bâtiment est disponible dans les téléchargements.


### Exporter le plan 3D d'un étage

Pour obtenir le plan en 3D d'un étage, à partir du plan de l'étage,

-   cliquer dans le menu contextuel (case grise en dessous de la loupe de recherche)
-   choisir "Le plan de l'étage XXX en 3D"

Le plan de l'étage apparait en 3D en vue zénithale

-   cliquer sur l'icône verticale "engrenage" afin de "voir les options du plan"
-   choisir le type de représentation des cloisons (avec cloisons, sans cloison ou cloisons à mi-hauteur)
-   la représentation "Cuby" remplace chaque espace par un cube reprenant la couleur du calque de l'espace

La molette de la souris permet d'ajuster la taille du plan 3D.
Le clic1 de la souris permet le déplacement du plan 3D dans la fenêtre de l'écran
Le clic2 de la souris permet d'incliner et d'orienter le plan dans l'espace.

:::tip Bon à savoir
Cliquer sur "Centre le plan en vue Zénithale" ou "Centre le plan en vue Isometric" permet d'afficher une image aux dimensions calibrées en vue zénithale ou Isométric, et donc interchangeable dans la mise à jour de solution tierce.
:::


Cliquer sur "Télécharger l'image" génère le fichier PNG dans les téléchargements.
L'image de l'étage en 3D est tel qu'il est sur l'écran.
