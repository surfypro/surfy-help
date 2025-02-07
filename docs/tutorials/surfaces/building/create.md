---
sidebar_position: 1
---

# Créer un bâtiment

<Youtube code="M26SIN2q0Mk"/>

Pour créer un nouveau bâtiment à partir de la page d'accueil de Surfy,

<Properties objectTypeName="building" mandatory={true} />

- cliquer sur le menu contextuel, puis sur "Créer un bâtiment".
- indiquer les propriétés <P code="building:name" /> et <P code="building:color" /> pour son environnement. Ces deux propriétés sont obligatoires.
- cliquer sur "valider la création" ou compléter les informations puis "valider la création".
- ajouter la propriété <P code="building:address" /> du bâtiment permet de placer les bâtiments sur une carte pour une gestion multisite optimisée.
- le "bâtiment de référence" est le bâtiment derrière lequel le nouveau bâtiment sera caché. Celui-ci sera considéré comme un scénario de son bâtiment de référence. Sans bâtiment de référence, le bâtiment sera en première page (page d'accueil) et sera considéré comme "bâtiment principal".
- à la création d'un scénario, le "bâtiment de référence" par défaut est le bâtiment à partir duquel le scénario a été créé.

:::tip Le bâtiment de référence
Le bâtiment de référence peut aussi être un bâtiment quelconque derrière lequel on positionne le bâtiment en question. Cela permet d'établir un classement sur plusieurs niveaux des différents projets. Les bâtiments visibles sur la page d'accueil sont les "bâtiments principaux" et les recherches peuvent en option sous la loupe ne s'exercer que sur ces seuls bâtiments.
:::

## Créer un scénario {#create-scenario}

Créer un scénario dans Surfy c'est faire une copie partielle ou totale d'un bâtiment en vue d'un réaménagement, ou simplement pour effectuer une copie de sauvegarde.

<Youtube code="6o7F-9XlyqM"/>

Pour créer un nouveau scénario, depuis la page d'accueil,

- cliquer sur l'icône en bas à droite de la fiche du bâtiment pour obtenir "les scénarios et projets du bâtiment XXX"
- les fiches des scénarios existants apparaissent
- cliquer sur "créer un nouveau scénario"
- renseigner le nom du scénario à créer (exemple : projet 1, proposition réaménagement Compta, ...)
- donner une couleur différente de celle du bâtiment d'origine afin d'éviter des erreurs de bâtiment lors des modifications
- on peut dupliquer ou non : - les postes de travail - les affectations - les objets - les organisations des espaces - les calques d'analyse des espaces
- sélectionner les étages à dupliquer
- cliquer sur "Créer un scénario"

Après copie du bâtiment, le nouveau scénario apparait sur la page des scénarios de son bâtiment d'origine.
L'icône en bas à droite du bâtiment d'origine s'incrémente d'un scénario supplémentaire.

## Déplacer le scénario

On peut remonter le scénario sur la page d'accueil,

- cliquer sur l'icône "crayon" en bas de la fiche du bâtiment pour "modifier le bâtiment XXX"
- sur la ligne "Bâtiment d'origine", cliquer sur la croix pour "retirer le bâtiment"
- sauvegarder la modification

Le bâtiment scénario n'ayant plus de bâtiment d'origine, il se retrouve sur la page d'accueil, en "Bâtiment principal".

On peut placer n'importe quel bâtiment A derrière n'importe quel autre bâtiment B, depuis la fiche du bâtiment A,

- cliquer sur l'icône "crayon" en bas de la fiche du bâtiment A pour "modifier le bâtiment A"
- sur la ligne "Bâtiment d'origine", cliquer sur l'icône "crayon" pour "changer le bâtiment"
- choisir le "Bâtiment B"
- sauvegarder la modification

Le bâtiment A est maintenant placé "derrière" le bâtiment B.
Le bâtiment B incrémente le nombre de ses scénarios sur l'icône "les scénarios et projets du bâtiment B" en bas à droite de sa fiche.

On peut donc créer une arborescence des bâtiments en organisant ces bâtiments sur plusieurs niveaux.

:::tip BON A SAVOIR
Si le scénario a été créé depuis un bâtiment possédant un calque d'affectation, ce scénario n'intervient pas dans la possibilité de réserver un poste de travail tant qu'il reste en scénario derrière un bâtiment principal. Seuls les "bâtiments principaux" peuvent être accessibles à la réservation de poste de travail via un calque d'affectation.
A l'inverse, déplacer sur la page d'accueil un scénario contenant un calque d'affectation issu de son bâtiment d'origine donne la possibilité de réserver sur les quartiers de ce bâtiment et risque de créer des confusions.
Il faut dans ce cas retirer l'association de ce bâtiment au calque d'affectation correspondant afin qu'il n'intervienne pas dans la réservation sur le bâtiment principal.
:::
