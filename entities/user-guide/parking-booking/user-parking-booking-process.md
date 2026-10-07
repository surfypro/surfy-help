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

## Étape 5 - Confirmation de disponibilité

Le système vérifie la disponibilité en temps réel :

- si la place est libre, la réservation est enregistrée ;
- sinon, l’utilisateur doit choisir une autre place.

## Confirmation de présence (jour J)

Si l’entreprise a activé une plage de confirmation, une réservation de parking **faite à l’avance** doit être confirmée le jour J dans **Mon planning** (bouton parking, ou bouton commun avec le poste). Une réservation créée **le jour même** est confirmée automatiquement.

Guide détaillé : [Confirmation des réservations de poste et de parking](../booking-system/workplace-booking-confirmation-window).
