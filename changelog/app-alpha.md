---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; cette page est ensuite masquée en la renommant `_app-alpha.md`.

## 27 Mai 2026 - v3.4.201

- Réservations de postes non confirmées
  - Un premier e-mail d’avertissement est envoyé avant annulation de la réservation, puis la réservation est annulée automatiquement si elle n’est toujours pas confirmée.
  - Les e-mails liés à ce processus intègrent un lien direct vers le planning personnel, avec une URL corrigée.
  - Sur la réservation au poste, <P code="personToWorkplaceBooking:emailConfirmationWarningNotificationSentAt" /> indique si l’e-mail de rappel avant annulation a déjà été envoyé.
  - Documentation avancée : [Confirmation des réservations et plages horaires](/entities/user-guide/booking-system/workplace-booking-confirmation-window).

- E-mails de la plateforme
  - Les e-mails envoyés par Surfy peuvent intégrer un branding enrichi (logo et paramètres d’expéditeur).

- Réservation de parking
  - Nouveau type de place **moto** disponible dans les types de places de parking.
