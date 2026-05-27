# Confirmation des réservations de poste de travail

## À quoi sert cette fonctionnalité ?

Cette fonctionnalité permet de confirmer la présence pour une réservation de poste de travail du jour, dans une plage horaire définie par l’entreprise.

Objectifs :

- libérer les postes réservés mais non confirmés ;
- prévenir l’utilisateur avant annulation ;
- maintenir un planning fiable pour l’équipe.

## Comment ça fonctionne ?

### 1) Plage de confirmation

L’entreprise configure une plage de confirmation (par exemple `06:00-10:00`).

Pour les réservations du jour, l’utilisateur doit confirmer sa présence dans cette plage depuis **Mon planning**.

### 2) E-mail de rappel avant la fin de plage

Environ 15 minutes avant la fin de la plage, un e-mail de rappel est envoyé aux utilisateurs qui ont une réservation non confirmée du jour.

Le message contient un lien direct vers **Mon planning** pour confirmer rapidement la réservation :

`https://app.surfy.pro/{NomDuTenant}/views/i/personWorkingLocation/my-planning`

### 3) Annulation après la fin de plage

Si la réservation n’est toujours pas confirmée après la fin de la plage, la réservation est annulée automatiquement et un e-mail d’information est envoyé.

## Comportement selon la confirmation

### Réservation confirmée dans la plage

- la réservation est conservée ;
- aucun e-mail d’annulation n’est envoyé.

### Réservation non confirmée après la plage

- la réservation est annulée automatiquement ;
- l’utilisateur reçoit un e-mail indiquant l’annulation.

## Ce que voit l’utilisateur

- un bouton de confirmation pour les réservations du jour ;
- un e-mail de rappel avant la fin de la plage si la réservation n’est pas encore confirmée ;
- un e-mail d’annulation si la confirmation n’a pas été faite à temps.

## Bonnes pratiques

- définir une plage adaptée aux horaires d’arrivée habituels ;
- informer les équipes que la confirmation dans **Mon planning** est nécessaire pour conserver la réservation ;
- vérifier régulièrement que les adresses e-mail utilisateur sont valides pour recevoir les rappels.
