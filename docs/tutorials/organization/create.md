---
sidebar_position: 1
---
# Créer une Organisation

Les organisations dans Surfy ont deux niveaux hiérarchiques : Les Directions et les Services.

:::warning Important
On ne peut rattacher un espace, une personne ou un poste de travail qu'à un Service.
:::

Utiliser les organisations permet de rattacher les espaces à des Services rapportant eux-mêmes à des Directions.
On peut alors visualiser la qualification des espaces en couleurs sur les plans et obtenir les [données cumulées, par Service ou par Direction](/docs/tutorials/organization/edit.md#visualiser-les-organisations-sur-les-plans).

Les personnes et les postes de travail peuvent également être rattachés à des Services.
On peut ensuite lister les personnes ou les postes de travail par organisation dans les listes filtrées ou dans les rapports de données, ou savoir à quelle organisation une personne est  en recherchant sa fiche avec la loupe.


<Youtube code="bvOEaYs1prg"/>



## Hiérarchie des organisations

-   Un Service est toujours rattaché à une Direction.
-   Une organisation qui n'a pas de Direction est, de fait, elle même une Direction.
-   Une Direction ne doit jamais être rattachée à une Direction.
-   Seuls les Services sont proposés au rattachement des espaces, personnes ou postes de travail.


### Hiérarchiser les organisations dans Surfy :

Un "Service" a une Direction mais pas de Service rattaché                                  
Une "Direction" peut avoir des Services rattachés mais pas de Direction


:::warning Important
Une organisation ne peut pas avoir une "Direction" ET un ou des "Services".                                        
En effet, dans ce cas l'organisation n'est ni une Direction, parce qu'elle a elle-même une Direction, ni un Service parce qu'elle a elle-même des Services. L'organisation n'étant pas clairement définie, cela fausse la base de données dans Surfy ainsi que l'affichage sur les plans.
:::

Pour visualiser la hiérarchie des organisations dans Surfy, depuis le menu de gauche,

-   cliquer sur "organisations", "organisations" puis "voir la hiérarchie des organisations".
-   les Directions sont en tête des blocs obtenus, les Services sont listés dans chaque bloc.
-   cliquer sur l'icône en bout de ligne " voir plus d'options pour l'organisation XXX" puis "voir l'organisation XXX" permet de visualiser les informations de l'organisation concernée.

## Créer une Direction

Une Direction n'a PAS de "Direction" et peut avoir des "Services".

Pour créer une Direction, depuis le menu de gauche,

-   cliquer sur "organisations", "organisations" puis "créer une organisation" (ou cliquer sur le menu contextuel puis "créer une organisation" si déjà sur la page des organisations)
-   renseigner le nom de la Direction et sa <P code="organization:color"/>
-   ne pas renseigner de "Direction", laisser le champ vide.
-   valider la création

L'organisation créée est considérée comme étant une Direction
En affichant la "Hiérarchie des Organisations", cette Direction apparait en tête de bloc et sera suivi des Services rattachés à cette Direction. Si aucun Service n'est encore associé à cette Direction, le bloc n'est pas créé et seule la Direction est affichée.

## Créer un Service

Un Service a obligatoirement une "Direction" et n'a PAS de "Service".

Pour créer un Service, sa Direction doit d'abord avoir été créée dans Surfy. 

Une fois la Direction créée, pour créer un Service, depuis le menu de gauche,

-   cliquer sur "organisations", "organisations" puis "créer une organisation" (ou cliquer sur le menu contextuel puis "créer une organisation" si déjà sur la page des organisations)
-   renseigner le nom du Service et sa couleur
-   renseigner la Direction du Service en cliquant sur le crayon de l'"Organisation Mère" et en sélectionnant une Direction
-   valider la création

L'organisation créée est considérée comme étant un Service (Direction présente)
En affichant la "Hiérarchie des Organisations", ce Service apparait dans le bloc de sa Direction de rattachement.


## Lister les Organisations

Lister les organisations permet notamment de vérifier qu'aucune organisation n'est rattachée en même temps à une "Direction et à une ou plusieurs "Services".
La liste permet également de modifier chaque organisation en cliquant sur l'icône en début de ligne de l'organisation concernée.

Pour lister les organisations, depuis le menu de gauche,

-   cliquer sur "organisations", "organisations" puis "lister les organisations" (ou cliquer sur le menu contextuel puis "lister les organisations" si déjà sur la page des organisations)
-   la liste donne la Direction ou les Services pour chaque organisation


## Rattacher une organisation à une entité

Un espace, un poste de travail ou une personne peuvent être rattachés à un Service qui lui-même se rattache à sa Direction.
La Direction du Service est indiquée entre parenthèses derrière le nom du Service. Cela permet de donner le même nom à deux Services de Directions différentes : Exemple: Service "Comptabilité" à la Direction "Logistique" et Service "Comptabilité" à la Direction "Achats".


:::warning Important
Si une organisation n'apparait pas dans la liste des Services à rattacher, c'est qu'aucune Direction n'est rattachée à cette organisation. Elle est donc considérée elle même comme une Direction. La deuxième cause possible est que cette organisation n'est pas encore créée.
:::

### Rattacher un Service à un espace

Pour rattacher un Service à un espace, depuis le plan de l'étage,

-   cliquer dans l'espace à rattacher
-   dans la fiche de l'espace à gauche du plan, cliquer sur "modifier" l'espace
-   cliquer sur l'icône "crayon" de la ligne "Organisation" pour "changer l'organisation"
-   choisir le Service de rattachement de l'espace. Sa Direction est indiquée entre parenthèses.
-   "sauvegarder" la modification

L'espace est rattaché au Service concerné.

Une fois les espaces rattachés, il est nécessaire de "recharger les données du plan" en cliquant sur l'icône en haut à droite de l'écran, puis de rafraichir (F5).
Depuis le plan de l'étage ou du bâtiment, cliquer sur l'icône verticale "Colorier les espaces sur le plan selon les organisations" pour visualiser les organisations en couleur sur les plans.

Trois onglets sont proposés:
-   SERVICES : affiche les Services en couleur et les informations cumulées des Services
-   DIRECTIONS : affiche les Directions en couleur et les informations cumulées des Directions
-   HIERARCHIE : affiche les Services en couleur et les informations cumulées des Services par Direction

En ouvrant le "papillon" en bout de ligne de chaque organisation, on obtient les informations cumulées pour l'organisation, pour l'étage ou le bâtiment visualisé.

### Rattacher un Service à un quartier

Rattacher un service à un quartier implique de rattacher tous les espaces du quartier à ce service.

Il faut donc tout d'abord sortir de la navigation par quartier afin de pouvoir accéder à chaque espace du quartier :

-   en cliquant sur l'icône triangulaire au bout du bandeau bleu d'information "Vous êtes en navigation par Quartiers, les espaces seront regroupés ensemble lors de la sélection"
-   ou en cliquant sur l'icône verticale "Changer la vision du plan" puis sur la vision "Typologies des espaces".


On peut ensuite "Modifier" chaque espace pour lui rattacher son Service (voir [Rattacher un Service à un espace](/docs/tutorials/organization/create.md#rattacher-un-service-%C3%A0-un-espace)) et ainsi à tous les espaces du quartier concerné.

Pour revenir ensuite à la navigation par quartier,

-   cliquer sur l'icône "Changer la vision du plan"
-   sélectionner la vision "Quartiers"

La navigation par quartier est sélectionnée et les espaces du quartier sont rattachés au Service choisi.

:::tip Bon à savoir
La répartition des Services sur les espaces est indépendante du regroupement des espaces par quartier, même si les deux entités "Service" et "Quartier" englobent souvent des périmètres identiques.
:::


### Rattacher un Service à une personne

Pour rattacher un Service à une personne,

-   rechercher la personne avec la loupe, sous le logo de l'entreprise en haut à gauche de l'écran
-   cliquer sur le nom de la personne
-   cliquer sur le menu contextuel (case grise sous la loupe) puis sur "Modifier la personne XXX"
-   cliquer sur l'icône "crayon" de "L'organisation de la personne"
-   choisir le Service correspondant à la personne
-   "Sauvegarder" les modifications


### Rattacher un Service à un poste de travail

Pour rattacher un Service à un poste de travail,

-   cliquer sur le poste de travail sur le plan
-   sur la fiche du poste de travail à gauche, cliquer sur "Modifier"
-   cliquer sur l'icône "crayon" de la ligne "Organisation"
-   choisir le Service correspondant au poste de travail
-   "Sauvegarder" les modifications

