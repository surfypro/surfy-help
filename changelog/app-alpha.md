---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà **déployés** sur l’**application Surfy alpha** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro)

Lors d’une mise en production, seules les **nouveautés** sont reprises dans la page [Nouveautés](./app.md) ; les sections **Bugs résolus** ne sont **pas** reportées en production (elles servent à la vérification de l’équipe de test pendant le cycle alpha). Cette page est ensuite masquée en la renommant `_app-alpha.md`.


## 14 Septembre 2026 - v3.5.50

- <LIV code="personWorkingLocation:booking-maps" />
  - Les **places de parking** apparaissent sur le **même étage** que les postes de travail lorsqu’elles sont configurées pour cet étage (également dans le panneau jour de <LIV code="personWorkingLocation:booking-security-day" /> et les tiroirs de <LIV code="personWorkingLocation:my-planning" />).
  - Un **étage avec parking seulement** (sans postes) affiche la couche parking, sans couche postes vide.
  - La **recherche** de personnes prend en compte les réservations de **postes et de parking**.
  - Survol d’une place : **nom de l’espace**, **occupant** si réservé, et **créneau** ; les couleurs distinguent libre / réservé / réservé par vous.
  - L’**icône du type parking** reste visible même lorsque la place a un nom affiché.
  - Depuis <LIV code="personWorkingLocation:my-planning" />, vous pouvez réserver un **poste** ou une **place parking** sur le même plan d’étage selon la configuration.

- <LIV code="personWorkingLocation:booking-security-day" />
  - Nouvelle vue pour voir où les personnes **avec** un profil de sécurité ont réservé (si la vue est attribuée à votre rôle).
  - **Mode planning** : horizon sur plusieurs jours ouvrés, puis détail par étage ou quartier, profil, et cartes personnes.
  - **Mode jour** : date et filtres ; **plan coloré** selon le profil des réservants lorsque **exactement un** étage est sélectionné.
  - Une **carte personne** par bâtiment ; plusieurs emplacements du même bâtiment dans la même carte.
  - Guide : [Vue sécurité réservation](/entities/user-guide/booking-system/booking-security-day-view). Scénario guidé : [Du planning au jour](/entities/scenarios/booking-security-day-view).
  <CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-fr" kind="video" asGif width={640} gifFps={8} alt="Vue sécurité réservation : du planning au jour avec plan coloré" />

- **Planning et réservations — libération de poste par absence**
  - Option entreprise <P code="company:enableStaticDeskReleaseOnAbsence" /> (désactivée par défaut) et case <P code="workplace:isReleasable" /> sur chaque poste concerné : lorsque **toutes** les personnes affectées déclarent en **journée entière** un congé, hors site ou télétravail, le poste devient **réservable pour la journée** (**poste libéré par absence**) sur la carte de <LIV code="personWorkingLocation:booking-maps" />. L'affectation fixe n'est pas modifiée ; le poste n'est **pas** passé en flex permanent.
  - Sur la carte, **teinte de vert distincte** des postes flex libres pour les postes libérés par absence (**sans légende**).
  - Tant qu'un collègue a réservé le poste ce jour-là, le titulaire **ne peut pas retirer** sa déclaration d'absence ni déclarer un retour au bureau.
  - Guide : [Libération de poste par absence](/entities/user-guide/booking-system/static-desk-release-on-absence). Scénario guidé : [Libération de poste par absence](/entities/scenarios/static-desk-release-on-absence).
  <CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-fr" kind="video" asGif width={640} gifFps={8} alt="Libération de poste par absence : configuration, absence, réservation et blocage" />

- <LIV code="floor:map" />
  - **Magnétisme** (**désactivée par défaut**, mémorisée sur l’appareil) : lors du **déplacement**, de la **duplication** ou de la **pose** d’un poste ou d’un objet, les **côtés** peuvent s’aimanter sur des formes déjà posées. Plusieurs accrochages simultanés possibles ; au relâchement, une transition douce vers la pose retenue.
  - Le magnétisme ne compare que les postes et objets du **même espace**, dans un **voisinage d’environ 1,50 m** (centre à centre), avec des **lignes pointillées** vers les voisins pendant le geste.
  - En **rotation**, les crans à 45° restent pendant le geste ; si le Magnétisme est actif et qu’une cible est proche, le **relâchement** finalise l’alignement des côtés. Scénario : [Magnétisme de segments sur le plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-fr" kind="video" asGif width={640} gifFps={8} alt="Plusieurs accrochages simultanés (Magnétisme) sur le plan en mode édition" />
  - Rotation groupée de **postes et/ou objets** sélectionnés (et non plus les postes seuls), en conservant leur disposition relative. Scénario : [Rotation groupée sur le plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes et d’objets en mode édition du plan" />
  - Accordion **« Répartition des surfaces sélectionnées (m²) »** également dans les filtres **Organisations**, **Typologies**, **Groupes de typologie** et **Centres de coût — onglet Espaces** (comme pour les calques d’analyse) ; pas sur les onglets **Postes** / **Personnes** des centres de coût.
  <CloudinaryAsset publicId="help/changelog/v3.5.46/map-filter-analytics-org-typo-cc-fr" kind="video" asGif width={424} gifFps={8} alt="Répartition des surfaces sélectionnées dans les filtres Organisations du plan" />
  - Modification multiple d’espaces : le panneau inclut désormais aussi la <P code="room:roomType" />. Scénario : [Modification multiple d’espaces](/entities/scenarios/rooms-bulk-edit).

- <LSV code="itemType:shape-editor" />
  - Basculez entre **« Points de forme »** et **« Arêtes visuelles »** (un seul calque actif ; par défaut : Points de forme).
  - Les **Arêtes visuelles** s’affichent sur le plan mais **ne participent pas** au Magnétisme, à la surface au sol ni aux collisions / emprise (tracées en **tirets courts**).
  - Liaison à un Point de forme uniquement lorsque les cercles se **superposent largement** et que le point **change de couleur au survol**.
  - Un sommet d’arête visuelle lié **n’est pas déplaçable** ; pour le détacher, **supprimez l’arête**.
  - **Déplacer le plan** dans cet éditeur (et dans <LSV code="workplaceType:editor" />) : glisser le fond de plan ; sans fond, le canevas se déplace quand même.
  - Guide : [Arêtes visuelles (type d’objet)](/entities/user-guide/floor-plan/item-type-visual-edges). Scénario : [Créer des arêtes visuelles](/entities/scenarios/item-type-create-visual-edges).

- <LSV code="building:dashboard" />
  - Tableau **ratio par service** : colonnes **Service**, **nombre de postes (PdT)** et **m²/PdT**, avec aide au survol des en-têtes.
  - Sur les tableaux de données des rapports : bascules **chiffres précis**, **afficher / masquer les m²**, et **recalculer les pourcentages** selon les séries encore visibles.
  - Clic dans la **légende** du graphique pour masquer ou réafficher une série ; le tableau suit la même sélection.
  - Certains rapports trient les libellés de catégories **par ordre alphabétique**.

- **Surfy SDK (intégrateurs)**
  - Embarquez un plan d’étage **2D** ou un bâtiment **3D** en lecture seule (couleurs, zoom, sélection) dans votre application.
  - Trois façons d’intégrer : **Web Component**, **API JavaScript** (`SurfySdk.mountFloor2d` / `mountBuilding3d`), et **Surfy React Web** (hooks).
  - API **données** client (bâtiments / étages / espaces) dans le même livrable, avec authentification JWT machine via votre backend (pas de secret dans le navigateur).
  - Guide : [Surfy SDK](/entities/sdk/).

### Bugs résolus (vérification test alpha)

Ces points sont listés pour l’équipe de test sur [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
Ils ne sont **pas** reportés dans le changelog production (`app.md`).

- <LIV code="floor:map" /> — **Ne voir que les pièces à côté** : lorsque l’option est active, la sélection d’un **poste de travail** ou d’un **objet** dans un espace n’appliquait pas le filtre de voisinage (seul un clic sur l’espace fonctionnait) ; le voisinage s’applique désormais comme pour la sélection de l’espace (profondeur 1, 2 ou 3).
