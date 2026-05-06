---
sidebar_position: 1
---

# Guide de démarrage

Deux pré-requis sont nécessaires pour pouvoir utiliser la consultation/réservation des espaces de réunion :

-   La configuration du "groupe de typologies d'espace" des espaces proposés à la consultation/réservation,
-   L'attribution de l'adresse email des espaces réservables pour la réservation des espaces de réunion.

## Configuration des espaces consultables



### Groupe de typologies d'espace

Les typologies d'espaces correspondants aux espaces consultables doivent être regroupées dans le groupe de typologie d'espace "Espaces de réunion". <br />
Le code MEETING doit être associé au groupe de typologie d'espace "Espaces de réunion".

Depuis le menu de gauche,

-   cliquer sur "Administration", "Typologies", "Typologies d'espaces", puis "Groupes de typologies d'espace" afin de "Lister les groupes de typologies d'espace"
-   cliquer sur l'icone en début de ligne du groupe de typologies d'espace "Espaces de réunion" pour "Modifier le groupe de typologies d'espace Espaces de réunion"
-   renseigner le "Code" par "MEETING".

### Association de typologie d'espace à groupe de typologies d'espace

Une fois le groupe de typologie des espaces consultables renseigné avec le code MEETING, chaque typologie consultable doit être associée à ce groupe.
Par exemple : "salles de réunion", "Box de réunion", "phone box" peuvent être les typologies associées au groupe de typologies d'espace "Espaces de réunion".

Pour associer une typologie d'espace à un groupe de typologies, voir le chapitre [associer une typologie d'espace à un groupe de typologies d'espaces](/docs/tutorials/surfaces/room/roomtype#les-groupes-de-typologies-despace).

Les espaces inclus dans le groupe de typologies d'espace "Espaces de réunion" sont consultables en cliquant sur l'icône "Voir et naviguer dans les salles de réunion", en haut à gauche de l'écran sous le logo de l'entreprise.

### Configuration des équipements des espaces consultables

On peut afficher les équipements de chaque espace de réunion via la famille d'objets contenant les objets à afficher (Audiovisuel, Equipements de service,...)

Pour configurer les équipements consultables, depuis le menu de gauche,

-   cliquer sur "Mobiliers", "Typologies", "Famille de types d'objet" pour "Lister les familles de types d'objet"
-   cliquer sur l'icône "3 points" en début de ligne de la famille des équipements consultables pour "Voir plus d'option pour la famille de types d'objet XXX", puis "Modifier la famille de types d'objet XXX"
-   dans la case "Code", renseigner "SERVICES"
-   sauvegarder les modifications
-   rafraichir la page (F5)

Les équipements de la famille configurée et présents dans l'espace sont visibles pour chaque espace lors de la consultation des espaces de réunion.

## Configuration des espaces réservables

Une fois la configuration des espaces consultables correctement effectuée, chacun des espaces consultable peut être déclaré "réservable".

Chaque espace réservable doit être associé à un email de réservation caractérisant l'espace.
Cet email est habituellement attribué par la DSI et doit être reporté dans la fiche de l'espace concerné.

Depuis le plan où se trouve l'espace,

-   cliquer sur l'espace pour le sélectionner
-   cliquer sur l'icône "3 points" en bas de la fiche de l'espace pour "Voir plus d'option pour l'espace XXX", puis sur "Modifier l'espace XXX"
-   renseigner l'adresse email de réservation de l'espace dans "Email utilisé pour la réservation de cet espace"
-   sauvegarder les modifications

L'espace est alors consultable/réservable en cliquant sur l'icône "Voir et naviguer dans les salles de réunion", sous le logo de l'entreprise.

