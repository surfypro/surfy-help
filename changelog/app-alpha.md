---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; cette page est ensuite masquée en la renommant `_app-alpha.md`.

## 21 Mai 2026 - v3.4.199

- <OT code="person" />
  - Nouvelle propriété <P code="person:mainLocation" /> (établissement de référence) sur la fiche personne.

- Import des personnes, organisations et centres de coût depuis Workday
  - L’import renseigne désormais <P code="person:mainLocation" /> à partir de la location Workday de la personne.

- Affectation d’une personne sur le plan (dialogue de liste de contrôle)
  - Lorsque vous affectez une personne à un **espace** ou à un **poste de travail**, le dialogue qui propose de retirer ses autres affectations existantes a été enrichi pour la section **bâtiments**.
  - Chaque autre bâtiment listé affiche des pictogrammes : la personne est-elle **comptabilisée** dans le bâtiment (<P code="personToBuilding:addToPeopleCount" />), peut-elle **réserver un poste** (<P code="personToBuilding:allowWorkplaceBookingInTheBuilding" />) ou **réserver un parking** (<P code="personToBuilding:allowParkingBookingInTheBuilding" />) dans ce bâtiment.
  - Par défaut, seules les affectations aux bâtiments où la personne est encore comptabilisée restent **cochées** ; les liaisons déjà exclues du comptage ne le sont plus automatiquement.
  - Si vous confirmez le retrait d’une affectation à un bâtiment où la réservation de poste ou de parking est déjà autorisée, Surfy **ne supprime plus** la liaison : la personne n’est plus comptabilisée dans ce bâtiment, mais les options de réservation associées sont conservées.
  - Les mêmes pictogrammes sont visibles dans la **fiche personne** (panneau des affectations aux bâtiments) et dans les **résultats de la recherche globale** des personnes.

- Réservation de parking (planning)
  - Les options de réservation de parking sont regroupées dans un panneau dépliable « Réserver un parking ».

- <OT code="userRegistrationTenantRule" />
  - Textes d’aide affinés pour les options liées aux claims OpenID et à l’association au tenant.

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
