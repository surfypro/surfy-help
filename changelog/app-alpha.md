---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro)

Lors d’une mise en production, seules les **nouveautés** sont reprises dans la page [Nouveautés](./app.md) ; les sections **Bugs résolus** ne sont **pas** reportées en production (elles servent à la vérification de l’équipe de test pendant le cycle alpha). Cette page est ensuite masquée en la renommant `_app-alpha.md`.


## 7 Août 2026 - v3.5.29

- **Plan**
  - En **mode vue**, glisser sur une forme — même déjà sélectionnée — **déplace le plan** ; un **clic** (sans glisser) **sélectionne** la forme.
  - En **mode édition**, glisser un poste ou un objet sélectionné **déplace la forme** ; avec l’option **Déplacer l’espace** active, glisser une pièce sélectionnée **déplace l’espace**.

## 28 Juillet 2026 - v3.5.25

- <LIV code="personWorkingLocation:booking-security-day" />
  - Nouvelle **vue sécurité réservation** sur les lieux de travail (si la vue est attribuée à votre rôle) : voir où les personnes **avec** un profil de sécurité ont réservé.
  - **Mode planning** : horizon sur plusieurs jours ouvrés, puis détail par étage ou quartier, profil, et cartes personnes.
  - **Mode jour** : date et filtres ; **plan coloré** selon le profil des réservants lorsque **exactement un** étage est sélectionné.
  - Une **carte personne** par bâtiment ; plusieurs emplacements du même bâtiment dans la même carte.
  - Guide : [Vue sécurité réservation](/entities/user-guide/booking-system/booking-security-day-view). Scénario guidé : [Du planning au jour](/entities/scenarios/booking-security-day-view).
  <CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-fr" kind="video" asGif width={640} gifFps={8} alt="Vue sécurité réservation : du planning au jour avec plan coloré" />

## 26 Juillet 2026 - v3.5.24

- **Surfy SDK (intégrateurs)**
  - Embarquez un plan d’étage **2D** ou un bâtiment **3D** en lecture seule (couleurs, zoom, sélection) dans votre application.
  - Trois façons d’intégrer : **Web Component**, **API JavaScript** (`SurfySdk.mountFloor2d` / `mountBuilding3d`), et **Surfy React Web** (hooks).
  - API **données** client (bâtiments / étages / espaces) dans le même livrable, avec authentification JWT machine via votre backend (pas de secret dans le navigateur).
  - Guide : [Surfy SDK](/entities/sdk/).


- **Plan — mode édition**
  - Nouvelle option **Magnétisme** (**désactivée par défaut**, mémorisée sur l’appareil). Une fois activée, lors du **déplacement**, de la **duplication** ou de la **pose** d’un poste ou d’un objet, les **côtés** peuvent s’aimanter sur des formes déjà posées. Lorsque **plusieurs** côtés peuvent s’aligner en même temps (souvent deux axes à 90°, par ex. à gauche **et** en haut), le plan propose **plusieurs accrochages ensemble** — aperçu du jeu complet pendant le geste ; au relâchement, **une** transition douce vers la pose qui respecte tous ces accrochages. Si tout n’est pas compatible, le plan se limite à un sous-ensemble possible (parfois un seul).
  - En **rotation**, les crans à 45° restent pendant le geste ; si le Magnétisme est actif et qu’une cible (ou un jeu d’accrochages) est proche, le **relâchement** finalise l’alignement des côtés (pas le cran 45°). Scénario guidé : [Magnétisme de segments sur le plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-fr" kind="video" asGif width={640} gifFps={8} alt="Plusieurs accrochages simultanés (Magnétisme) sur le plan en mode édition" />

## 25 Juillet 2026 - v3.5.23

- **Plan — mode édition**
  - Lorsque plusieurs postes de travail et/ou objets sont sélectionnés, une poignée de rotation sur le cadre de sélection permet de les orienter **ensemble** (postes seuls, objets seuls, ou les deux), en conservant leur disposition relative. Scénario guidé : [Rotation groupée sur le plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes et d’objets en mode édition du plan" />

## 24 Juillet 2026 - v3.5.23

- **Plan**
  - Sur les options du plan (boutons d’icône), un **appui long** ouvre l’aide du scénario associé (ex. focus pièce et voisins), avec le même contenu que le scénario guidé.
  - Après une **modification multiple d’espaces** qui change les dimensions, un message confirme la mise à jour.

- **Clonage de bâtiment**
  - Après un clonage réussi, les bâtiments nouvellement accessibles apparaissent dans l’application **sans devoir se reconnecter**.

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

## 22 Juillet 2026 - v3.5.23

- <OT code="itemType" />
  - Vous pouvez ajouter un **badge** (<P code="itemType:iconBadge" />) à droite **dans** le carré d’icône : texte court, couleur de fond et couleur du texte, pour distinguer des variantes qui partagent le même pictogramme. Scénario guidé : [Badge sur une icône de type d'objet](/entities/scenarios/item-type-icon-badge-create).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/item-type-icon-badge-create-fr" kind="video" asGif width={640} gifFps={8} alt="Création d'un type d'objet avec badge sur l'icône" />

## 20 Juillet 2026 - v3.5.21

- **Plan**
  - Nouvelle option pour **ne voir que la pièce sélectionnée et ses voisines** (profondeur 1, 2 ou 3) afin de se concentrer sur une zone du plan. Scénario guidé : [Focus pièce et voisins](/entities/scenarios/focus-room-neighbors).
  <CloudinaryAsset publicId="help/changelog/v3.5.21/focus-room-neighbors-fr" kind="video" asGif width={640} gifFps={8} alt="Focus sur une pièce et ses voisines sur le plan" />

- <LIV code="roomPoint:dq-not-used" />
  - Lors du clonage d’un bâtiment, les points non utilisés sont supprimés automatiquement pour poursuivre la création du scénario.
  - Si des anomalies persistent, le clonage reste bloqué afin de corriger manuellement le rapport de qualité des données.

## 6 Juillet 2026 - v3.5.15

- <OT code="building" />
  - Nouvelle vue <LSV code="building:building-dxf-importer" /> pour **créer les étages** d’un bâtiment et **importer un plan DXF** (avec son image PNG) pour chaque étage.
  - L’import produit directement la **topologie des espaces** sur l’étage concerné.
  - Possibilité de **réutiliser l’image de fond** déjà enregistrée sur l’étage au lieu de déposer un nouveau PNG.
  - Option pour **créer une échelle de plan dédiée** à chaque étage lors de l’import.
  - **Détection automatique de la barre d’échelle** sur l’image PNG : l’échelle peut être calculée et enregistrée sur l’étage.
  - Messages d’erreur détaillés lorsque le cadre du plan DXF ne correspond pas au PNG ou lorsque le calque de polygones attendu est introuvable.

- **Plan**
  - Vision **Organisations (niveau supérieur)** : le **service** des personnes affectées aux postes s’affiche sur le plan.
  - **Mode édition** : lorsque plusieurs postes de travail sont sélectionnés, une poignée de rotation sur le cadre de sélection permet de les orienter **ensemble**, en conservant leur disposition relative. Scénario guidé : [Rotation groupée des postes](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes de travail en mode édition du plan" />

- <OT code="workplaceType" />
  - Dans la vue d’édition des formes (<LSV code="workplaceType:editor" />), vous pouvez définir et enregistrer la position d’affichage du libellé par défaut (<P code="workplaceType:textAnchor" />) grâce à l’option d’ancrage (raccourci **A**).
  - Lors de l’ajout d’un poste de travail sur le plan, le libellé reprend cette position définie sur le type. Scénario guidé : [Ancrage du texte (type de poste)](/entities/scenarios/workplace-type-text-anchor).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-fr" kind="video" asGif width={640} gifFps={8} alt="Déplacer le point d'ancrage du texte sur un type de poste" />

- **Plan — espaces**
  - En **mode édition**, lorsque **au moins deux espaces** sont sélectionnés, une action sur le cadre de sélection ouvre un panneau pour modifier en lot l'<P code="room:organization" />, le <P code="room:costCenter" />, le <P code="room:distributionCostType" />, le <P code="room:roomConnector" /> et les dimensions. Scénario guidé : [Modification multiple d’espaces](/entities/scenarios/rooms-bulk-edit).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/rooms-bulk-edit-fr" kind="video" asGif width={640} gifFps={8} alt="Modification multiple d'espaces sur le plan en mode édition" />
