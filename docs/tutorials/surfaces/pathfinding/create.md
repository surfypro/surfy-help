---
sidebar_position: 1
---

# Créer un itinéraire

Un itinéraire point à point permet d'obtenir le cheminement d'un point d'origine vers un point d'arrivée dans Surfy.

Le point d'origine est un espace.
Le point d'arrivée peut être un espace ou un objet. On peut ainsi guider le déplacement de l'utilisateur vers un objet (défibrillateur, extincteur, objet quelconque) ou un espace à atteindre (espace d'affectation d'une personne, espace quelconque).

L'itinéraire est traçé sur les plans Surfy.
Les informations de distance, temps en marchant, temps en footing sont affichées dans l'info bulle.
L'itinéraire emprunte les portes et passages existants en évitant les objets trouvés sur sa route.
Il utilise les connecteurs d'espace pour changer d'étage ou de bâtiment et assurer une continuité de l'itinéraire en intégrant l'utilisation d'escaliers, ascenseurs ou tout autre moyen de déplacement d'un site à un autre (navette, taxi, téléphérique,...)

Pour créer un itinéraire point à point, il faut :

-   définir l'espace d'origine
-   générer le graph d'orientation, si celui ci n'est plus correct depuis la dernière génération de graph (déplacement de mobilier, modifications de cloisons ou de portes)
-   "Activer le tracé du chemin depuis l'espace source" afin de faire apparaitre le traçé depuis le point d'origine vers le positionnement de la souris (point d'arrivée de l'étage). Si le point d'arrivée comporte un connecteur d'espace, l'itinéraire peut l'emprunter pour changer de niveau ou de lieu.

## Configurer l'itinéraire point à point

Pour obtenir un itinéraire point à point dans Surfy, la fonctionnalité "Pathfinding" doit être validée.
Une fois cette fonctionnalité validée, une icône verticale "serpentin" permettant de "Trouver son chemin dans les espaces" est disponible en fin de liste des icônes verticales.

Pour valider la fonctionnalité "Pathfinding", depuis le menu de gauche,

-   cliquer sur "Administration" puis "Entreprises" et "Vue des entreprises en tuile"
-   cliquer sur l'icône en bout de ligne de l'entreprise pour "Voir plus d'option pour l'entreprise XXX"
-   cliquer sur "Modifier l'entreprise XXX"
-   cocher la case "Enable Pathfinding"
-   sauvegarder les modifications.

Cliquer sur le logo de l'entreprise pour revenir sur la page d'accueil.
Après rafraichissement, l'icône verticale "serpentin" apparait, permettant de "Trouver son chemin dans les espaces".

La fonctionnalité "Pathfinding" est opérationnelle.

### Définir le point d'origine de l'itinéraire

Cliquer sur l'icône verticale "serpentin" ouvre la fenêtre d'itinéraire.

On peut d'abord sélectionner l'espace d'origine en cliquant dans l'espace concerné, puis sur l'icône verticale "serpentin" pour "trouver son chemin dans les espaces". Cliquer ensuite sur "Sélectionner l'espace d'origine" sélectionne l'espace concerné en espace d'origine.

On peut également choisir son espace d'origine en cliquant dans la case pour choisir l'espace d'origine dans la liste des espaces de l'étage.

### Générer le graph d'orientation

Afin d'obtenir un itinéraire cohérent, il peut être nécessaire de "générer le graph d'orientation".
Cliquer sur cette case permet de générer une toile d'araignée et un ensemble de noeuds utilisables par l'itinéraire, en évitant les objets présents et en empruntant les portes et passages.

## Trouver son itinéraire vers le point d'arrivée

Une fois le graph généré, déplacer la souris sur le plan permet d'afficher l'itinéraire depuis le point d'origine vers l'emplacement de la souris (point d'arrivée). La distance et le temps nécessaire sont indiqués dans l'info bulle.

### Changer de niveau dans l'itinéraire point à point

Le changement de niveau au cours d'un itinéraire est en cours de développement.