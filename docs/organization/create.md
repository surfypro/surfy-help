---
sidebar_position: 1
---
# Créer une Organisation

Les organisations dans Surfy ont deux niveaux hiérarchiques : Les Directions et les Services.

Utiliser les organisations permet de rattacher les espaces à des Services qui rapportent eux-mêmes à des Directions, permettant la qualification des espaces en couleurs sur les plans et les données cumulées, par Service ou par Direction.

Les personnes et les postes de travail peuvent également être rattachés à des Services.
On peut alors lister les personnes ou les postes de travail par organisation dans les listes filtrées ou dans les rapports de données, ou savoir simplement, par la fiche de la personne, à quelle organisation une personne appartient.


<Youtube code="bvOEaYs1prg"/>



## Hiérarchie des organisations



-   Un Service est toujours rattaché à une Direction.
-   Si ce n'est pas le cas, l'organisation est considérée comme une Direction et non comme un Service.
-   Un espace, une personne ou un poste de travail se rattachent toujours à un Service.
-   Seuls les Services sont proposés au rattachement des espaces, personnes ou postes de travail.


### Qualification de la hiérarchie de l'organisation dans Surfy :

Pour gérer la hiérachie des organisations, Surfy utilise deux termes:

-   L'organisation Mère : C'est la Direction du Service
-   L'organisation Fille : C'est le Service de la Direction

Un Service a une Direction (une organisation Mère) mais pas de Service rattaché (pas d'organisation Fille)                                  
Une Direction peut avoir des Services rattachés (organisations Filles éventuelles) mais pas de Direction (pas d'organisation Mère) 

Une organisation ne peut pas avoir une "organisation Mère" ET une ou des "organisations Filles".                                        
En effet, dans ce cas l'organisation n'est ni une Direction, parce qu'elle a elle-même une Direction, ni un Service parce qu'elle a elle-même des Services. L'organisation n'étant pas clairement définie, cela fausse la base de données dans Surfy ainsi que l'affichage sur les plans.

Pour visualiser la hiérarchie des organisations dans Surfy, depuis le menu de gauche :

-   cliquer sur "organisations", "organisations" puis "voir la hiérarchie des organisations".
-   les Directions sont en tête des blocs obtenus, les Services sont listés dans chaque bloc.
-   cliquer sur l'icône en bout de ligne " voir plus d'options pour l'organisation XXX" puis "voir l'organisation XXX" permet de visualiser les informations de l'organisation concernée.

## Créer une Direction

Pour créer une Direction, depuis le menu de gauche :

-   cliquer sur "organisations", "organisations" puis "créer une organisation" (ou cliquer sur le menu contextuel puis "créer une organisation" si déjà sur la page des organisations)
-   renseigner le nom de la Direction et sa couleur
-   ne pas renseigner d'"organisation Mère", laisser le champ vide.
-   valider la création

L'organisation créée est considérée comme étant une Direction (pas d'organisation Mère)
En affichant la "Hiérarchie des Organisations", cette Direction apparait en tête de bloc et sera suivi des Services rattachés à cette Direction. Si aucun Service n'est encore associé à cette Direction, le bloc n'est pas créé et seule la Direction est affichée.

## Créer un Service

Pour créer un Service, sa Direction doit d'abord avoir été créée dans Surfy. 

Une fois la Direction créée, depuis le menu de gauche,

-   cliquer sur "organisations", "organisations" puis "créer une organisation" (ou cliquer sur le menu contextuel puis "créer une organisation" si déjà sur la page des organisations)
-   renseigner le nom du Service et sa couleur
-   renseigner la Direction du Service en cliquant sur le crayon de l'"Organisation Mère" et en sélectionnant une Direction
-   valider la création

L'organisation créée est considérée comme étant un Service (Organisation Mère présente)
En affichant la "Hiérarchie des Organisations", ce Service apparait dans le bloc de sa Direction de rattachement.


## Lister les Organisations

Lister les organisations permet notamment de vérifier qu'aucune organisation n'est rattachée en même temps à une "Organisation Mère" et à une ou plusieurs "organisations Filles".
La liste permet également de modifier chaque organisation en cliquant sur l'icône en début de ligne de l'organisation concernée.

Pour lister les organisations, depuis le menu de gauche,

-   cliquer sur "organisations", "organisations" puis "lister les organisations" (ou cliquer sur le menu contextuel puis "lister les organisations" si déjà sur la page des organisations)
-   la liste donne les organisations Mère et Filles pour chaque organisation
-   renseigner la Direction du Service en cliquant sur l'icône "crayon" de l'"Organisation Mère"
-   valider la création

## Rattacher un Service

Dans Surfy on rattache un espace, un poste de travail ou une personne à un Service qui lui-même se rattache à sa Direction.
La Direction du Service est indiquée entre parenthèses derrière le nom du Service. Cela permet de donner le même nom à deux Services de Directions différentes : Exemple: Service "Comptabilité" à la Direction "Logistique" et Service "Comptabilité" à la Direction "Achats".


### Rattacher un espace à un Service

Pour rattacher un espace à un Service, depuis le plan de l'étage,

-   cliquer dans l'espace à rattacher
-   dans la fiche de l'espace à gauche du plan, cliquer sur "modifier" l'espace
-   cliquer sur l'icône "crayon" de la ligne "Organisation" pour "changer l'organisation"
-   choisir le Service de rattachement de l'espace. Sa Direction est indiquée entre parenthèses.
-   "sauvegarder" la modification

L'espace est rattaché au Service concerné.
Une fois les espaces rattachés, il est nécessaire de "recharger les données du plan" en cliquant sur l'icône en haut à droite de l'écran, puis de rafraichir (F5).
Depuis le plan de l'étage ou du bâtiment, cliquer sur l'icône verticale "Colorier les espaces sur le plan selon les organisations" permet alors de visualiser les organisations en couleur sur les plans.

Trois onglets sont disponibles:
-   Services : affiche les Services en couleur et les informations cumulées des Services
-   Directions : affiche les Directions en couleur et les informations cumulées des Directions
-   Hiérarchie : affiche les Services en couleur et les informations cumulées des Services par Direction

En ouvrant le "papillon" en bout de ligne de chaque organisation, on obtient les informations cumulées pour l'organisation.

### Rattacher un quartier à un Service

Pour rattacher un quartier à un Service, il faut rattacher tous les espaces du quartier au Service concerné.

### Rattacher une personne à un Service

Pour rattacher une personne à un Service,

-   recherche la personne à rattacher
-   modifier la personne
-   

### Rattacher un poste de travail un Service



