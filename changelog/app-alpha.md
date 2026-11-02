---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà **déployés** sur l’**application Surfy alpha** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro)

Lors d’une mise en production, seules les **nouveautés** sont reprises dans la page [Nouveautés](./app.md) ; les sections **Bugs résolus** ne sont **pas** reportées en production (elles servent à la vérification de l’équipe de test pendant le cycle alpha). Cette page est ensuite masquée en la renommant `_app-alpha.md`.

## 2 Novembre 2026

- Commentaire de dimension — note à la réservation
  - Sur une <OT code="dimension" />, le champ <P code="dimension:comment" /> permet d’afficher une **note informative** sous le bouton de réservation de poste (Mon planning, réservation pour une autre personne, planning des invités).
  - Vider le commentaire retire la note.
  - Guide : [Commentaire de dimension — note à la réservation](/entities/user-guide/booking-system/dimension-comment-booking-note).

## 30 Octobre 2026 - v3.5.67


- Synchronisation scénario → bâtiment de référence
  - Nouvelle vue <LSV code="building:scenarioSync" /> : depuis le **bâtiment de référence**, choisissez un **scénario** lié pour lister les **écarts** (créations, suppressions, modifications, géométrie différente) sur les espaces, postes et objets.
  - Reportez ensuite les valeurs du scénario vers la référence **étape par étape** : pour les espaces correspondants, <P code="room:roomType" />, <P code="room:costCenter" /> puis <P code="room:organization" /> ; pour les postes et objets, d’abord la **position / orientation**, puis les **propriétés** (ex. type).
  - Chaque étape s’applique à **tous** les éléments concernés d’un coup. Les créations et suppressions restent visibles dans l’inventaire ; la **forme des espaces** est listée mais **non** reportée dans cette version.

- Aide des groupes de typologie (filtre carte)
  - Sur le filtre carte **Groupes de typologie**, l’aide (`?`) d’un groupe affiche un **tableau** (typologie, surface m², part %, postes) et un **camembert** de répartition des surfaces sur le périmètre courant (bâtiment ou étage).

- Vue plan **Groupes de typologies**
  - Nouveau mode d’affichage du plan d’étage pour voir les espaces selon leur **groupe de typologie**.

- Qualité des données
  - Nouvelle vue <LIV code="room:dq-room-floor-points-consistency" /> : espaces dont l’étage ne correspond pas à celui de leurs points, avec une action pour réaffecter l’étage des points.
  - Sur <LIV code="person:dq-only-associated-to-building" /> (personnes liées à un bâtiment sans autre affectation), vous pouvez **filtrer la liste par un ou plusieurs bâtiments**.

- Rapports bâtiment
  - Nouveau rapport **Objets exceptionnels** : types d’objet présents en **1 à 4** exemplaires sur les bâtiments sélectionnés, avec localisations et photo du type.
  - Le rapport d’**inventaire** inclut désormais les **noms d’affichage** des espaces.

- Sélecteur de propriétés
  - Lors du choix des colonnes d’un tableau, vous pouvez **filtrer les propriétés par nom**.

- Légendes personnalisées (export plan)
  - Une légende d’export peut commencer par un **bloc totaux étage**, puis un **bloc filtres** : choisissez une **famille** (organisations, typologies, groupes de typologie, centres de coût, ou dimension / quartier) et les **propriétés** à afficher (ex. nombre de postes, surface).
  - Pour la famille choisie, la légende liste **automatiquement** les éléments **présents sur l’étage** (sans les cocher un par un).
  - Vous pouvez ajouter des **séparateurs** et **réordonner** librement les éléments de la légende.
  - Cours : [Exporter un plan avec légende](/docs/courses/views/planexport).

- Pathfinding — Mode édition et focus
  - Sur la vue <LSV code="building:building-pathfinding" />, activez le **Mode édition** pour rattacher un **connecteur d’espaces** en cliquant sur un espace (tiroir dédié). Le connecteur n’est plus édité depuis la carte d’espace du plan 2D.
  - En mode étage courant (hors Mode édition), un clic sur un espace **centre la vue** sur cet espace.
  - Guide : [Pathfinding — navigation dans un bâtiment](/entities/user-guide/floor-plan/pathfinding-campus#mode-edition).

### Bugs résolus (vérification test alpha)

Ces points sont listés pour l’équipe de test sur [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
Ils ne sont **pas** reportés dans le changelog production (`app.md`).

- **Export image de plan** : les **noms d’organisations** de la légende s’affichent correctement sur l’image exportée (plus d’indicateur de chargement à la place du nom).

## 23 Octobre 2026

- Carte 3D MapLibre — feedback de chargement du détail
  - Sur la vue <LIV code="building:3d-maplibre" />, le premier passage en **Mode bâtiment** affiche un **indicateur de chargement** sur le pin / nom du bâtiment, avec un **détail des étapes** dans le chargement global lorsque le détail n’est pas encore prêt.
  - En **s’approchant** d’un bâtiment, le détail peut commencer à se préparer **avant** le clic, pour un passage plus fluide.
  - Guide : [Carte 3D MapLibre](/entities/user-guide/floor-plan/carte-3d-maplibre#chargement-du-detail).

## 22 Octobre 2026

- Carte 3D MapLibre — Mode structure et Mode bâtiment
  - Sur la vue <LIV code="building:3d-maplibre" />, explorez d’abord les **volumes** des bâtiments (**Mode structure**), avec la **liste des noms** à gauche.
  - Un clic (ou un zoom sur un bâtiment) passe en **Mode bâtiment** : détail 3D **lecture seule**, avec les **mêmes contrôles d’étage** que sur la vue Pathfinding (sans créer d’itinéraire).
  - Un seul bâtiment à la fois en Mode bâtiment ; un **dézoom** suffit pour revenir au Mode structure.
  - Guide : [Carte 3D MapLibre](/entities/user-guide/floor-plan/carte-3d-maplibre).

## 5 Octobre 2026

- Mode connecteurs (Pathfinding bâtiment)
  - Sur la vue <LSV code="building:building-pathfinding" />, activez **Mode connecteurs** (désactivé par défaut) pour mettre en évidence les espaces et liaisons liés aux connecteurs, avec des **traits verticaux** entre étages.
  - Les couleurs suivent le type de connecteur (<OT code="roomConnectorType" /> et <OT code="segmentConnectorType" />) ; sans couleur définie → **gris**. Édition via les fiches types.
  - Guide : [Pathfinding — Mode connecteurs](/entities/user-guide/floor-plan/pathfinding-campus#mode-connecteurs).

## 30 Septembre 2026

- Pathfinding dans un bâtiment
  - Nouvelle vue <LSV code="building:building-pathfinding" /> : depuis la fiche d’un <OT code="building" />, choisissez une **origine** et une **destination** (espaces du bâtiment), puis suivez le **chemin en 3D** sur la carte du bâtiment.
  - Disponible lorsque <P code="company:enablePathfinding" /> est activé pour l’entreprise.
  - **Admin** : vous pouvez **actualiser la navigation** du bâtiment pour prendre en compte les **connecteurs d’espaces** entre étages ; Surfy reste utilisable pendant le calcul.
  - Guide : [Pathfinding — navigation dans un bâtiment](/entities/user-guide/floor-plan/pathfinding-campus).

## 28 Septembre 2026

- Aperçu 3D d'un espace depuis le plan
  - Sur le plan d'un étage (<LIV code="floor:map" />), sélectionnez un <OT code="room" /> : en bas de sa carte, l'icône **Aperçu 3D de l'espace** ouvre un panneau à droite.
  - Vous voyez **cet espace seul** en 3D (forme + postes et objets à l'intérieur), **sans** les espaces voisins. Faites tourner la vue à la souris. **Lecture seule** : rien n'est modifié sur le plan.
  - Guide : [Aperçu 3D d'un espace](/entities/user-guide/floor-plan/room-3d-preview).
  <CloudinaryAsset publicId="help/changelog/v3.5.55/room-3d-preview-fr" kind="video" asGif width={640} gifFps={8} alt="Aperçu 3D d'un espace depuis le plan : icône bas de carte, panneau à droite, espace seul" />

## 17 Septembre 2026 - v3.5.54

- Stocker les nouvelles images sur Azure (France)
  - Nouvelle option entreprise <P code="company:storeNewImagesOnAzureBlobStorage" /> (fiche Entreprise). Si elle est activée, les **nouveaux** dépôts d’images produit sont hébergés en **France**. L’affichage (tailles / aperçus) reste comme aujourd’hui. Les images déjà en ligne **ne sont pas** migrées.
  - Ne pas confondre avec l’option <P code="company:proxyImages" />. Les formats acceptés à l’ajout d’une image restent **inchangés** par parcours.
  - Guide : [Stocker les nouvelles images sur Azure (France)](/entities/user-guide/company-store-new-images-on-azure-france).
- Confirmation des réservations (poste et parking)
  - La plage <P code="company:workplaceBookingConfirmationRange" /> s’applique désormais aux réservations de **poste** et de **parking** du jour (créneaux journée ou matin).
  - Une réservation créée **le jour même** (poste ou parking) est **confirmée automatiquement** : aucun bouton n’apparaît pour cette réservation.
  - Dans <LIV code="personWorkingLocation:my-planning" />, vous pouvez confirmer le **poste**, la **place de parking**, ou les **deux en un clic** lorsqu’ils restent à confirmer pour le même créneau.
  - Les e-mails de rappel et d’annulation regroupent poste et parking dans **un seul message** lorsqu’ils concernent la même personne le même jour.
  - Guide : [Confirmation des réservations de poste et de parking](/entities/user-guide/booking-system/workplace-booking-confirmation-window).
