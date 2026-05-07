# Parcours de réservation de parking côté utilisateur

Ce guide décrit ce que voit et fait un utilisateur une fois la configuration en place.

## Étape 1 - Accès au module de réservation

L’utilisateur ouvre son planning/réservation. Le système charge les bâtiments où le parking est autorisé pour cet utilisateur.

## Étape 2 - Contrôles de compatibilité

Avant de proposer les places, le système vérifie :

- qu’un véhicule est présent ;
- que le véhicule est compatible avec des types de places parking configurés ;
- que le créneau (matin / après-midi / journée) est autorisé ;
- que la règle “réservation unique par jour” n’est pas violée.

Si une condition échoue, un message explicite est affiché et la réservation est bloquée.

## Étape 3 - Choix du bâtiment puis de l’étage

L’utilisateur choisit un bâtiment puis un étage.

Le système affiche les statistiques de disponibilité (places totales, réservées, libres).

## Étape 4 - Choix de la place

L’utilisateur sélectionne une place compatible (ou utilise la réservation automatique si proposée).

## Étape 5 - Confirmation

Le système vérifie la disponibilité en temps réel :

- si la place est libre, la réservation est confirmée ;
- sinon, l’utilisateur doit choisir une autre place.
