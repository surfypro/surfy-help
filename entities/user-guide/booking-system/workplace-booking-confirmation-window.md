# Confirmation des reservations de poste de travail

## A quoi sert cette fonctionnalite ?

Cette fonctionnalite permet de confirmer la presence pour une reservation de poste de travail du jour, dans une plage horaire definie par l'entreprise.

Objectif :

- liberer les postes reserves mais non confirmes,
- prevenir l'utilisateur avant annulation,
- maintenir un planning fiable pour l'equipe.

## Comment ca fonctionne ?

### 1) Plage de confirmation

L'entreprise configure une plage de confirmation (par exemple `06:00-10:00`).

Pour les reservations du jour, l'utilisateur doit confirmer sa presence dans cette plage depuis **Mon planning**.

### 2) Email de rappel avant la fin de plage

Environ 15 minutes avant la fin de la plage, un email de rappel est envoye aux utilisateurs qui ont une reservation non confirmee du jour.

Le message contient un lien direct vers **Mon planning** pour confirmer rapidement la reservation :

`https://app.surfy.pro/{NomDuTenant}/views/i/personWorkingLocation/my-planning`

### 3) Annulation apres la fin de plage

Si la reservation n'est toujours pas confirmee apres la fin de la plage, la reservation est annulee automatiquement et un email d'information est envoye.

## Comportement selon la confirmation

### Reservation confirmee dans la plage

- la reservation est conservee,
- aucun email d'annulation n'est envoye.

### Reservation non confirmee apres la plage

- la reservation est annulee automatiquement,
- l'utilisateur recoit un email indiquant l'annulation.

## Ce que voit l'utilisateur

- un bouton de confirmation pour les reservations du jour,
- un email de rappel avant la fin de la plage si la reservation n'est pas encore confirmee,
- un email d'annulation si la confirmation n'a pas ete faite a temps.

## Bonnes pratiques

- definir une plage adaptee aux horaires d'arrivee habituels,
- informer les equipes que la confirmation dans **Mon planning** est necessaire pour conserver la reservation,
- verifier regulierement que les adresses email utilisateur sont valides pour recevoir les rappels.
