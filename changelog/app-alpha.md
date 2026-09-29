---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà **déployés** sur l’**application Surfy alpha** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro)

Lors d’une mise en production, seules les **nouveautés** sont reprises dans la page [Nouveautés](./app.md) ; les sections **Bugs résolus** ne sont **pas** reportées en production (elles servent à la vérification de l’équipe de test pendant le cycle alpha). Cette page est ensuite masquée en la renommant `_app-alpha.md`.

## 28 Septembre 2026

- Aperçu 3D d'un espace depuis le plan
  - Sur le plan d'un étage (<LIV code="floor:map" />), sélectionnez un <OT code="room" /> : en bas de sa carte, l'icône **Aperçu 3D de l'espace** ouvre un panneau à droite.
  - Vous voyez **cet espace seul** en 3D (forme + postes et objets à l'intérieur), **sans** les espaces voisins. Faites tourner la vue à la souris. **Lecture seule** : rien n'est modifié sur le plan.
  - Guide : [Aperçu 3D d'un espace](/entities/user-guide/floor-plan/room-3d-preview).
  <CloudinaryAsset publicId="help/changelog/v3.5.55/room-3d-preview-fr" kind="video" asGif width={640} gifFps={8} alt="Aperçu 3D d'un espace depuis le plan : icône bas de carte, panneau à droite, espace seul" />

## 17 Septembre 2026 - v3.5.54

- Stocker les nouvelles images sur Azure (France)
  - Nouvelle option entreprise <P code="company:storeNewImagesOnAzureFrance" /> (fiche Entreprise). Si elle est activée, les **nouveaux** dépôts d’images produit sont hébergés en **France**. L’affichage (tailles / aperçus) reste comme aujourd’hui. Les images déjà en ligne **ne sont pas** migrées.
  - Ne pas confondre avec l’option <P code="company:proxyImages" />. Les formats acceptés à l’ajout d’une image restent **inchangés** par parcours.
  - Guide : [Stocker les nouvelles images sur Azure (France)](/entities/user-guide/company-store-new-images-on-azure-france).
- Confirmation des réservations (poste et parking)
  - La plage <P code="company:workplaceBookingConfirmationRange" /> s’applique désormais aux réservations de **poste** et de **parking** du jour (créneaux journée ou matin).
  - Une réservation créée **le jour même** (poste ou parking) est **confirmée automatiquement** : aucun bouton n’apparaît pour cette réservation.
  - Dans <LIV code="personWorkingLocation:my-planning" />, vous pouvez confirmer le **poste**, la **place de parking**, ou les **deux en un clic** lorsqu’ils restent à confirmer pour le même créneau.
  - Les e-mails de rappel et d’annulation regroupent poste et parking dans **un seul message** lorsqu’ils concernent la même personne le même jour.
  - Guide : [Confirmation des réservations de poste et de parking](/entities/user-guide/booking-system/workplace-booking-confirmation-window).
