---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà **déployés** sur l’**application Surfy alpha** ([app-alpha.surfy.pro](https://app-alpha.surfy.pro)), avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro)

Lors d’une mise en production, seules les **nouveautés** sont reprises dans la page [Nouveautés](./app.md) ; les sections **Bugs résolus** ne sont **pas** reportées en production (elles servent à la vérification de l’équipe de test pendant le cycle alpha). Cette page est ensuite masquée en la renommant `_app-alpha.md`.


## 14 Septembre 2026 - v3.5.50

- **Réservations sur un plan — parking et postes sur le même étage**
  - Sur les **cartes de réservation** (index des réservations sur un plan, panneau jour du profil sécurité, et **tiroirs Mon planning**), les **places de parking** apparaissent sur le **même étage** que les postes de travail lorsqu’elles sont configurées pour cet étage.
  - Un **étage avec parking seulement** (sans postes) affiche la couche parking, sans couche postes vide.
  - La **recherche** de personnes sur ces cartes prend en compte les réservations de **postes et de parking**.
  - Survol d’une place : **nom de l’espace**, **occupant** si réservé, et **créneau** ; les couleurs distinguent libre / réservé / réservé par vous.
  - L’**icône du type parking** reste visible même lorsque la place a un nom affiché.
  - Dans les tiroirs Mon planning, vous pouvez réserver un **poste** ou une **place parking** sur le même plan d’étage selon la configuration.

- **Rapports — tableaux et graphiques**
  - Tableau **ratio par service** (ex. tableau de bord bâtiment) : colonnes **Service**, **nombre de postes (PdT)** et **m²/PdT**, avec aide au survol des en-têtes.
  - Sur les tableaux de données des rapports : bascules pour **chiffres précis**, **afficher / masquer les m²**, et **recalculer les pourcentages** selon les séries encore visibles.
  - Clic dans la **légende** du graphique pour masquer ou réafficher une série ; le tableau suit la même sélection.
  - Certains rapports trient les libellés de catégories **par ordre alphabétique** pour une lecture plus stable.

- **Plan — modification multiple d’espaces**
  - Le panneau de modification en lot inclut désormais aussi la <P code="room:roomType" /> (en plus de l’organisation, du centre de coût, du type de répartition, du connecteur et des dimensions).

### Bugs résolus (vérification équipe de test alpha)

Ces points sont listés pour l’équipe de test sur [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
Ils ne sont **pas** reportés dans le changelog de production (`app.md`).

- **Upload d’image (Cloudinary)** : si le widget d’upload ne démarre pas (configuration ou chargement), un **message d’erreur explicite** s’affiche à la place d’un échec silencieux.

## 3 Septembre 2026 - v3.5.35

- **Plan — filtres : répartition des surfaces**
  - L’accordéon **« Répartition des surfaces sélectionnées (m²) »** (tableau, graphique circulaire ou en zone polaire) est désormais disponible lorsque vous sélectionnez des nœuds dans les filtres **Organisations**, **Typologies**, **Groupes de typologie** et **Centres de coût — onglet Espaces** du plan d’étage — même comportement que pour les **calques d’analyse**.
  - Les totaux portent sur la **surface qualifiée des espaces** des nœuds sélectionnés, sur le **périmètre d’étage(s) courant** du plan.
  - Pas d’accordéon sur les onglets **Postes de travail** / **Personnes** des centres de coût.
  <CloudinaryAsset publicId="help/changelog/v3.5.46/map-filter-analytics-org-typo-cc-fr" kind="video" asGif width={424} gifFps={8} alt="Répartition des surfaces sélectionnées dans les filtres Organisations du plan" />

## 2 Septembre 2026 - v3.5.34

### Bugs résolus (vérification test alpha)

Ces points sont listés pour l’équipe de test sur [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
Ils ne sont **pas** reportés dans le changelog production (`app.md`).

- **Plan — Ne voir que les pièces à côté :** lorsque l’option est active, la sélection d’un **poste de travail** ou d’un **objet** dans un espace n’appliquait pas le filtre de voisinage (seul un clic sur l’espace fonctionnait) ; le voisinage s’applique désormais comme pour la sélection de l’espace (profondeur 1, 2 ou 3).

## 1 Septembre 2026 - v3.5.33

- **Plan — mode édition — Magnétisme (mise à jour)**
  - Le magnétisme ne compare plus que les postes et objets du **même espace**, dans un **voisinage d’environ 1,50 m** (centre à centre). Pendant le geste, des **lignes pointillées** relient le centre de la forme en cours aux centres de ces voisins. Les accrochages multiples restent possibles dans ce périmètre ; au relâchement, une transition douce vers la pose retenue.
  - Scénario détaillé (comportements et règles) : [Magnétisme de segments sur le plan](/entities/scenarios/workplace-segment-magnetism).

- **Planning et réservations — libération de poste par absence**
  - Option entreprise <P code="company:enableStaticDeskReleaseOnAbsence" /> (désactivée par défaut) et case <P code="workplace:isReleasable" /> sur chaque poste concerné : lorsque **toutes** les personnes affectées déclarent en **journée entière** un congé, hors site ou télétravail, le poste devient **réservable pour la journée** (**poste libéré par absence**) sur la **carte de réservation du bâtiment**. L'affectation fixe n'est pas modifiée ; le poste n'est **pas** passé en flex permanent.
  - Sur la carte, **teinte de vert distincte** des postes flex libres pour les postes libérés par absence (**sans légende**).
  - Tant qu'un collègue a réservé le poste ce jour-là, le titulaire **ne peut pas retirer** sa déclaration d'absence ni déclarer un retour au bureau.
  - Guide : [Libération de poste par absence](/entities/user-guide/booking-system/static-desk-release-on-absence). Scénario guidé : [Libération de poste par absence](/entities/scenarios/static-desk-release-on-absence).
  <CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-fr" kind="video" asGif width={640} gifFps={8} alt="Libération de poste par absence : configuration, absence, réservation et blocage" />

## 18 Août 2026 - v3.5.33

- <OT code="itemType" />
  - Dans l’éditeur de forme du type d’objet, basculez entre **« Points de forme »** et **« Arêtes visuelles »** (un seul calque actif à la fois ; par défaut : Points de forme).
  - Les **Arêtes visuelles** s’affichent sur le plan mais **ne participent pas** au Magnétisme, à la surface au sol ni aux collisions / emprise. Elles sont tracées en **tirets courts**.
  - Lors du dessin d’Arêtes visuelles, vous pouvez réutiliser un Point de forme existant uniquement lorsque les cercles se **superposent largement** et que le point **change de couleur au survol** ; cliquez ensuite pour lier. Sinon, le sommet est libre.
  - Un **sommet d’arête visuelle** lié à un Point de forme **n’est pas déplaçable** ; pour le détacher, **supprimez l’arête**. Si lié, l’arête suit le point lorsqu’il bouge.
  - **Déplacer le plan** dans l’éditeur de type d’objet (et dans l’éditeur de type de poste) : faites glisser le fond de plan ; sans fond de plan, le canevas se déplace quand même.
  - Les formes historiques mélangées ne sont **pas** converties automatiquement.
  - Guide : [Arêtes visuelles (type d’objet)](/entities/user-guide/floor-plan/item-type-visual-edges). Scénario guidé : [Créer des arêtes visuelles](/entities/scenarios/item-type-create-visual-edges).

## 17 Août 2026 - v3.5.32

- **Plan**
  - **Mode vue :** glisser sur une forme — même déjà sélectionnée — **déplace le plan** ; un **clic** (sans glisser) **sélectionne** la forme.
  - **Mode édition :** glisser un poste ou un objet sélectionné **déplace la forme** ; avec **Déplacer l’espace** actif, glisser une pièce **déplace l’espace**.
  - **Zoom du plan :** pendant un glisser (forme ou déplacement du plan), ou juste avant de reprendre le glisser, un changement d’échelle (molette, pinch, boutons zoom / fit) **garde la forme / le plan sous le pointeur** — le déplacement ne part plus ailleurs.
  - Sur les options du plan (boutons d’icône), un **appui long** ouvre l’aide du scénario associé (ex. focus pièce et voisins), avec le même contenu que le scénario guidé.
  - Après une **modification multiple d’espaces** qui change les dimensions, un message confirme la mise à jour.
  - Nouvelle option pour **ne voir que la pièce sélectionnée et ses voisines** (profondeur 1, 2 ou 3) afin de se concentrer sur une zone du plan. Scénario guidé : [Focus pièce et voisins](/entities/scenarios/focus-room-neighbors).
  <CloudinaryAsset publicId="help/changelog/v3.5.21/focus-room-neighbors-fr" kind="video" asGif width={640} gifFps={8} alt="Focus sur une pièce et ses voisines sur le plan" />
  - Vision **Organisations (niveau supérieur)** : le **service** des personnes affectées aux postes s’affiche sur le plan.
  - **Mode édition — Magnétisme** (**désactivée par défaut**, mémorisée sur l’appareil). Une fois activée, lors du **déplacement**, de la **duplication** ou de la **pose** d’un poste ou d’un objet, les **côtés** peuvent s’aimanter sur des formes déjà posées. Lorsque **plusieurs** côtés peuvent s’aligner en même temps (souvent deux axes à 90°, par ex. à gauche **et** en haut), le plan propose **plusieurs accrochages ensemble** — aperçu du jeu complet pendant le geste ; au relâchement, **une** transition douce vers la pose qui respecte tous ces accrochages. Si tout n’est pas compatible, le plan se limite à un sous-ensemble possible (parfois un seul).
  - En **rotation**, les crans à 45° restent pendant le geste ; si le Magnétisme est actif et qu’une cible (ou un jeu d’accrochages) est proche, le **relâchement** finalise l’alignement des côtés (pas le cran 45°). Scénario guidé : [Magnétisme de segments sur le plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-fr" kind="video" asGif width={640} gifFps={8} alt="Plusieurs accrochages simultanés (Magnétisme) sur le plan en mode édition" />
  - **Mode édition** : lorsque plusieurs postes de travail et/ou objets sont sélectionnés, une poignée de rotation sur le cadre de sélection permet de les orienter **ensemble** (postes seuls, objets seuls, ou les deux), en conservant leur disposition relative. Scénario guidé : [Rotation groupée sur le plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes et d’objets en mode édition du plan" />

- **Plan — espaces**
  - En **mode édition**, lorsque **au moins deux espaces** sont sélectionnés, une action sur le cadre de sélection ouvre un panneau pour modifier en lot l'<P code="room:organization" />, le <P code="room:costCenter" />, le <P code="room:distributionCostType" />, le <P code="room:roomConnector" />, la <P code="room:roomType" /> et les dimensions. Scénario guidé : [Modification multiple d’espaces](/entities/scenarios/rooms-bulk-edit).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-fr" kind="video" asGif width={640} gifFps={8} alt="Modification multiple d'espaces sur le plan en mode édition" />

- <OT code="itemType" />
  - Vous pouvez ajouter un **badge** (<P code="itemType:iconBadge" />) à droite **dans** le carré d’icône : texte court, couleur de fond et couleur du texte, pour distinguer des variantes qui partagent le même pictogramme. Scénario guidé : [Badge sur une icône de type d'objet](/entities/scenarios/item-type-icon-badge-create).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/item-type-icon-badge-create-fr" kind="video" asGif width={640} gifFps={8} alt="Création d'un type d'objet avec badge sur l'icône" />

- <LIV code="roomPoint:dq-not-used" />
  - Lors du clonage d’un bâtiment, les points non utilisés sont supprimés automatiquement pour poursuivre la création du scénario.
  - Si des anomalies persistent, le clonage reste bloqué afin de corriger manuellement le rapport de qualité des données.

- <OT code="building" />
  - Nouvelle vue <LSV code="building:building-dxf-importer" /> pour **créer les étages** d’un bâtiment et **importer un plan DXF** (avec son image PNG) pour chaque étage.
  - L’import produit directement la **topologie des espaces** sur l’étage concerné.
  - Possibilité de **réutiliser l’image de fond** déjà enregistrée sur l’étage au lieu de déposer un nouveau PNG.
  - Option pour **créer une échelle de plan dédiée** à chaque étage lors de l’import.
  - **Détection automatique de la barre d’échelle** sur l’image PNG : l’échelle peut être calculée et enregistrée sur l’étage.
  - Messages d’erreur détaillés lorsque le cadre du plan DXF ne correspond pas au PNG ou lorsque le calque de polygones attendu est introuvable.

- <OT code="workplaceType" />
  - Dans la vue d’édition des formes (<LSV code="workplaceType:editor" />), vous pouvez définir et enregistrer la position d’affichage du libellé par défaut (<P code="workplaceType:textAnchor" />) grâce à l’option d’ancrage (raccourci **A**).
  - Lors de l’ajout d’un poste de travail sur le plan, le libellé reprend cette position définie sur le type. Scénario guidé : [Ancrage du texte (type de poste)](/entities/scenarios/workplace-type-text-anchor).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-fr" kind="video" asGif width={640} gifFps={8} alt="Déplacer le point d'ancrage du texte sur un type de poste" />

- <LIV code="personWorkingLocation:booking-security-day" />
  - Nouvelle **vue sécurité réservation** sur les lieux de travail (si la vue est attribuée à votre rôle) : voir où les personnes **avec** un profil de sécurité ont réservé.
  - **Mode planning** : horizon sur plusieurs jours ouvrés, puis détail par étage ou quartier, profil, et cartes personnes.
  - **Mode jour** : date et filtres ; **plan coloré** selon le profil des réservants lorsque **exactement un** étage est sélectionné.
  - Une **carte personne** par bâtiment ; plusieurs emplacements du même bâtiment dans la même carte.
  - Guide : [Vue sécurité réservation](/entities/user-guide/booking-system/booking-security-day-view). Scénario guidé : [Du planning au jour](/entities/scenarios/booking-security-day-view).
  <CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-fr" kind="video" asGif width={640} gifFps={8} alt="Vue sécurité réservation : du planning au jour avec plan coloré" />

- **Surfy SDK (intégrateurs)**
  - Embarquez un plan d’étage **2D** ou un bâtiment **3D** en lecture seule (couleurs, zoom, sélection) dans votre application.
  - Trois façons d’intégrer : **Web Component**, **API JavaScript** (`SurfySdk.mountFloor2d` / `mountBuilding3d`), et **Surfy React Web** (hooks).
  - API **données** client (bâtiments / étages / espaces) dans le même livrable, avec authentification JWT machine via votre backend (pas de secret dans le navigateur).
  - Guide : [Surfy SDK](/entities/sdk/).

### Bugs résolus (vérification test alpha)

Ces points sont listés pour l’équipe de test sur [app-alpha.surfy.pro](https://app-alpha.surfy.pro).
Ils ne sont **pas** reportés dans le changelog production (`app.md`).

- **Icône d’objet sur le plan** : l’icône conservait une mauvaise taille ou un mauvais décalage par rapport à la forme (zoom / échelle) ; le pictogramme et la zone de sélection restent alignés.
- **Déplacement d’un objet** : après avoir déplacé un objet puis relâché, l’icône pouvait **revenir à l’ancienne position** jusqu’à un autre clic ; la position enregistrée s’affiche correctement dès le relâchement.
- **Suppression multiple d’objets ou de postes** : la confirmation de suppression et le plan ne se mettaient pas à jour correctement (il fallait souvent recharger) ; la sélection disparaît du plan après confirmation.
- **Plusieurs postes sélectionnés** : l’interface restait bloquée sur la fiche d’un poste et empêchait de revenir à la liste pour une suppression en lot ; la table de sélection reste utilisable.
- **Segments de type Vide** : en mode édition, les segments « vides » n’étaient plus affichés en pointillés ; le style pointillé est de nouveau visible.
- **Fusion de points d’espace** : après fusion, un segment partagé déjà supprimé pouvait **rester visible** jusqu’au rechargement ; le plan se met à jour immédiatement.
- **Éditeur de type de poste** : les icônes des types d’objets liés au type de poste pouvaient **ne plus s’afficher** ; elles apparaissent à nouveau dans la composition.
- **Aide au survol des options du plan** : le survol de certains boutons (ex. sélection / manipulation) pouvait provoquer une **erreur** et bloquer l’interface ; le survol reste stable et l’aide s’affiche quand un scénario est associé.
