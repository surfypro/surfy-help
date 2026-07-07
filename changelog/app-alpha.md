---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro)

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; cette page est ensuite masquée en la renommant `_app-alpha.md`.

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
  - **Mode édition** : lorsque plusieurs postes de travail sont sélectionnés, une poignée de rotation sur le cadre de sélection permet de les orienter **ensemble**, en conservant leur disposition relative. Guide détaillé : [Rotation groupée des postes sur le plan](/entities/user-guide/floor-plan/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes de travail en mode édition du plan" />

- <OT code="workplaceType" />
  - Dans la vue d’édition des formes (<LSV code="workplaceType:editor" />), vous pouvez définir et enregistrer la position d’affichage du libellé par défaut (<P code="workplaceType:textAnchor" />) grâce à l’option d’ancrage (raccourci **A**).
  - Lors de l’ajout d’un poste de travail sur le plan, le libellé reprend cette position définie sur le type.
  <CloudinaryAsset publicId="help/changelog/v3.5.15/workplace-type-text-anchor-fr" kind="video" asGif width={640} gifFps={8} alt="Déplacer le point d'ancrage du texte sur un type de poste" />
