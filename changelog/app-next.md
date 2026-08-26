---
sidebar_position: 3
draft: true
---

# Nouveautés (version next)

Cette page n’est visible qu’en **local** (`pnpm start` dans surfy-help). Elle n’est **pas** publiée sur help.surfy.pro.

Cette page décrit les **changements visibles** mergés sur le train de release **`next`**, **pas encore** disponibles sur l’application alpha.

**Train next** : branche d’intégration parallèle à **`alpha`**. Les features y arrivent via des PR ciblant `next` (`--base next`). Lorsqu’elles sont **promues sur alpha** et déployées sur [app-alpha.surfy.pro](https://app-alpha.surfy.pro), déplacer leurs bullets vers **Nouveautés (alpha)** (`_app-alpha.md`) et les retirer d’ici.

L’application alpha (testable par l’équipe QA) reste sur [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro). L’application de production reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, seules les **nouveautés** remontent dans [Nouveautés](./app.md) depuis la page alpha ; les sections **Bugs résolus** ne sont **pas** reportées en production.


## 7 Août 2026 - v3.5.32

- **Plan — mode édition**
  - Nouvelle option **Magnétisme** (**désactivée par défaut**, mémorisée sur l’appareil). Une fois activée, lors du **déplacement**, de la **duplication** ou de la **pose** d’un poste ou d’un objet, les **côtés** peuvent s’aimanter sur des formes déjà posées. Lorsque **plusieurs** côtés peuvent s’aligner en même temps (souvent deux axes à 90°, par ex. à gauche **et** en haut), le plan propose **plusieurs accrochages ensemble** — aperçu du jeu complet pendant le geste ; au relâchement, **une** transition douce vers la pose qui respecte tous ces accrochages. Si tout n’est pas compatible, le plan se limite à un sous-ensemble possible (parfois un seul).
  - En **rotation**, les crans à 45° restent pendant le geste ; si le Magnétisme est actif et qu’une cible (ou un jeu d’accrochages) est proche, le **relâchement** finalise l’alignement des côtés (pas le cran 45°). Scénario guidé : [Magnétisme de segments sur le plan](/entities/scenarios/workplace-segment-magnetism).
  <CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-fr" kind="video" asGif width={640} gifFps={8} alt="Plusieurs accrochages simultanés (Magnétisme) sur le plan en mode édition" />
  - Lorsque plusieurs postes de travail et/ou objets sont sélectionnés, une poignée de rotation sur le cadre de sélection permet de les orienter **ensemble** (postes seuls, objets seuls, ou les deux), en conservant leur disposition relative. Scénario guidé : [Rotation groupée sur le plan](/entities/scenarios/workplace-group-rotation).
  <CloudinaryAsset publicId="help/changelog/v3.5.23/mixed-group-rotation-fr" kind="video" asGif width={640} gifFps={8} alt="Rotation groupée de postes et d’objets en mode édition du plan" />

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
