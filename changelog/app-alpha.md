---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro)

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; cette page est ensuite masquée en la renommant `_app-alpha.md`.

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
