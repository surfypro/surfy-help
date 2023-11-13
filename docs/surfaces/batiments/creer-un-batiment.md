import {PropertyType} from '../../../src/components/MetaModel/PropertyType'

# Gérer les bâtiments

Créer, modifier, supprimer un bâtiment dans Surfy

## Créer un bâtiment

<Youtube code="M26SIN2q0Mk"/>

Pour créer un nouveau bâtiment à partir de la page d'accueil de Surfy,

-   cliquer sur le menu contextuel, puis sur "Créer un bâtiment".
-   indiquer le nom du bâtiment et une <P code="building:color"/> pour son environnement.
-   ces deux informations sont obligatoires. Cliquer sur "valider la création" ou compléter les informations puis "valider la création".
-   ajouter l'adresse du bâtiment permet de placer les bâtiments sur une carte pour une gestion multisite optimisée.
-   le "bâtiment de référence" est le bâtiment derrière lequel le nouveau bâtiment sera caché. Celui çi est alors considéré comme un scénario de son bâtiment de référence. Sans bâtiment de référence, le bâtiment sera en première page (page d'accueil) et sera considéré comme "bâtiment principal".
-   à la création d'un scénario, le "bâtiment de référence" par défaut est le bâtiment à partir duquel le scénario a été créé.
 
:::tip Le bâtiment de référence
Le bâtiment de référence peut aussi être un bâtiment quelconque derrière lequel on positionne le bâtiment en question. Cela permet d'établir un classement sur plusieurs niveaux de vos différents projets. Les bâtiments visibles sur la page d'accueil sont vos "bâtiments principaux" et les recherches peuvent en option ne s'exercer que sur ces seuls bâtiments.
:::

## Modifier un bâtiment

Les informations d'un bâtiment peuvent être modifiées en cliquant sur le crayon de couleur en bas de la fiche du bâtiment, ou sur l'icone en bout de ligne de couleur du bâtiment puis sur "modifier le bâtiment XXX". Les informations peuvent alors être complétées.
On peut ajouter l'image du bâtiment pour une vue simplifiée en mode Lecteur, l'adresse du bâtiment afin de le situer sur la carte, ou simplement changer le nom et la couleur du bâtiment. Cliquer sur "sauvegarder" pour enregistrer les modifications.

 ## Supprimer un bâtiment

Attention: la suppression de bâtiment implique la suppression de tous les étages, espaces, mobilier et de toutes les affectations de personnes dans le bâtiment. Il n'y a pas de retour en arrière (Undo) possible dans Surfy et ces informations seront perdues.

Pour supprimer un bâtiment, depuis la page d'accueil cliquer sur l'icone en bout de ligne de couleur du bâtiment, puis cliquer sur "supprimer le bâtiment XXX". Une double confirmation de suppression est demandée.

La suppression de bâtiment concerve les scénarios qui remontent d'un niveau hiérarchique.


[Lien vers filtrer les tableaux](/docs/navigation/filtres/filtrer-les-tableaux.md)

