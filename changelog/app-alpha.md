---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; cette page est ensuite masquée en la renommant `_app-alpha.md`.

## 20 Mai 2026 - v3.4.198

- <OT code="building" />
  - Nouvelle propriété <P code="building:code" /> sur la fiche bâtiment.
  - La <P code="building:surface" /> est également visible sur la carte du bâtiment lorsqu’elle est renseignée.

- Import des personnes, organisations et centres de coût depuis Workday
  - Lors de l’étape d’affectations aux bâtiments, les options <P code="personToBuilding:allowWorkplaceBookingInTheBuilding" /> et <P code="personToBuilding:allowParkingBookingInTheBuilding" /> sont définies en fonction du <P code="building:code" /> du bâtiment concerné.
  - L’étape d’affectation au véhicule thermique générique est bloquée avec un message explicite si le véhicule attendu (clé externe `GENERIC-THERMIC`) n’existe pas encore dans Surfy.

- Propriétés de type couleur
  - Saisie des couleurs plus fiable lors de la modification d’une propriété couleur sur une fiche.

- Réservation de poste de travail sur un calque d’affectation
  - Libellés du bouton de réservation clarifiés lorsqu’un étage précis est concerné pour le créneau choisi.
