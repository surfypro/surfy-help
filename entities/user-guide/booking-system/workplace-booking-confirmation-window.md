# Confirmation des réservations de poste et de parking

## À quoi sert cette fonctionnalité ?

Lorsque l’entreprise active une plage de confirmation, Surfy demande de confirmer la présence pour les réservations **du jour** (poste de travail et place de parking), afin de libérer les ressources non utilisées et de garder un planning fiable.

Objectifs :

- libérer les postes et places de parking réservés mais non confirmés ;
- prévenir l’utilisateur avant annulation ;
- confirmer d’un coup poste et parking lorsqu’ils sont tous deux à confirmer.

## Comment ça fonctionne ?

### 1) Plage de confirmation (poste et parking)

L’entreprise configure une seule plage <P code="company:workplaceBookingConfirmationRange" /> avec un fuseau horaire IANA (par exemple `06:00-10:00@Europe/Paris`).

Cette plage s’applique aux réservations **du jour** en créneau **journée** ou **matin** :

- réservation de **poste** ;
- réservation de **parking**.

Les créneaux **après-midi seuls** ne sont pas soumis à cette confirmation.

### 2) Confirmation automatique le jour même

Si vous créez une réservation **le jour où vous l’utilisez** (poste ou parking), elle est **confirmée automatiquement** à la création. Aucun bouton de confirmation n’apparaît pour cette réservation.

Si vous réservez **à l’avance** (veille ou avant), la confirmation manuelle reste nécessaire le jour J pendant la plage.

### 3) Boutons dans Mon planning

Pendant la plage de confirmation, <LIV code="personWorkingLocation:my-planning" /> propose :

- un bouton pour confirmer le **poste** s’il n’est pas encore confirmé ;
- un bouton pour confirmer le **parking** s’il n’est pas encore confirmé ;
- un bouton **commun** (poste + parking) si les deux restent à confirmer pour le même créneau — un clic confirme les deux.

Dès qu’un seul élément reste à confirmer, seul le bouton dédié correspondant est affiché.

### 4) E-mail de rappel avant la fin de plage

Environ 15 minutes avant la fin de la plage, un e-mail de rappel est envoyé si une réservation du jour n’est pas encore confirmée.

Si poste **et** parking sont concernés le même jour pour la même personne, **un seul e-mail** regroupe les deux informations (sections séparées).

Le message contient un lien direct vers **Mon planning** :

`https://app.surfy.pro/{NomDuTenant}/views/i/personWorkingLocation/my-planning`

### 5) Annulation après la fin de plage

Si la réservation n’est toujours pas confirmée après la fin de la plage, elle est annulée automatiquement et un e-mail d’information est envoyé.

Là encore, poste et parking du même jour pour la même personne donnent **un seul e-mail** d’annulation lorsqu’ils sont tous deux concernés.

## Comportement selon la confirmation

### Réservation confirmée (manuellement ou automatiquement)

- la réservation est conservée ;
- aucun e-mail d’annulation n’est envoyé pour cette réservation.

### Réservation non confirmée après la plage

- la réservation est annulée automatiquement ;
- l’utilisateur reçoit un e-mail indiquant l’annulation.

## Ce que voit l’utilisateur

- des boutons de confirmation (poste, parking, ou les deux) dans **Mon planning** pendant la plage ;
- aucun bouton lorsque la réservation du jour a été créée le jour même (confirmation automatique) ;
- un e-mail de rappel avant la fin de la plage si besoin ;
- un e-mail d’annulation si la confirmation n’a pas été faite à temps.

## Bonnes pratiques

- définir une plage adaptée aux horaires d’arrivée habituels ;
- informer les équipes que la confirmation dans **Mon planning** est nécessaire pour conserver une réservation faite à l’avance ;
- vérifier régulièrement que les adresses e-mail utilisateur sont valides pour recevoir les rappels.

## Voir aussi

- [Parcours de réservation de parking](../parking-booking/user-parking-booking-process) — réserver une place côté utilisateur.
- [Libération de poste par absence](./static-desk-release-on-absence) — autre règle sur Mon planning (partage temporaire d'un poste fixe).
