---
sidebar_position: 7
sidebar_label: Magnétisme de segments sur le plan
---

# Magnétisme de segments sur le plan

Sur le plan d’un étage (<LIV code="floor:map" />), activez le **Magnétisme** pour coller les **côtés** des postes et des objets entre eux lors du **déplacement**, de la **duplication** ou de la **pose**. Le plan ne compare que les formes du **même espace** et **proches** (environ **1,50 m**, centre à centre). Lorsque plusieurs voisins sont éligibles, le plan peut proposer **plusieurs accrochages en même temps** (souvent deux axes à 90°, par ex. à gauche **et** en haut).

<CloudinaryAsset publicId="help/changelog/v3.5.24/workplace-segment-magnetism-fr" kind="video" asGif width={640} gifFps={8} alt="Plusieurs accrochages simultanés (Magnétisme) sur le plan en mode édition" />

## Prérequis

- Droits d’édition sur le plan de l’étage.
- Plan ouvert sur l’étage concerné.

## Étapes

1. **Ouvrez le plan de l’étage**  
   Point de départ du scénario : vue <LIV code="floor:map" />.

2. **Cliquez sur le bouton Activer le mode édition du plan**  
   Passe le plan en mode édition pour déplacer et orienter les postes et les objets (raccourci **e**).

3. **Cliquez sur le bouton Activer le Magnétisme**  
   *Aimante les côtés des postes et objets lors du déplacement, de la duplication ou de la pose. Mémorisé sur cet appareil.*

4. **Sélectionnez un poste**  
   La forme devient la sélection active.

## Gestes sans narration

- **Faites glisser** le poste vers **plusieurs** voisins déjà posés dans le **même espace** (ex. un à gauche et un en haut) : plusieurs zones / arêtes d’aperçu peuvent apparaître **ensemble** lorsque les côtés peuvent s’aimanter.
- **Relâchez** : la forme rejoint **en une seule** transition douce la pose qui respecte tous ces accrochages. Si tout n’est pas compatible, le plan se limite à un sous-ensemble possible (parfois un seul).
- **Faites pivoter** près d’une cible : les crans à **45°** restent pendant le geste ; au **relâchement**, si un jeu d’accrochages est proche, l’angle final suit l’alignement des côtés.

## Comment ça fonctionne

### Option Magnétisme

- **Désactivée par défaut.** Une fois activée, le choix reste mémorisé sur **cet appareil** (navigateur / poste).
- Sans l’option, aucun accrochage de côtés, aucun aperçu magnétique, et la rotation garde uniquement les crans à 45°.

### Gestes concernés

| Geste | Comportement |
|-------|----------------|
| **Déplacer** une forme sélectionnée | Magnétisme actif si l’option est ON et que la forme appartient à un espace connu. |
| **Dupliquer** une forme | Même logique que le déplacement : la copie en cours de pose peut s’aimanter sur les voisins du même espace. |
| **Poser** depuis la fiche d’un espace | Lorsque vous ajoutez un poste ou un objet **dans un espace** (l’espace est connu), le magnétisme s’applique comme au déplacement. |
| **Poser sans espace connu** | Pas de magnétisme (le plan ne sait pas dans quel espace filtrer les voisins). |
| **Rotation** (une forme ou un groupe) | Les crans à 45° guident le geste ; au **relâchement**, si le Magnétisme est ON et qu’un accrochage de côtés est proche, l’angle final privilégie l’alignement des côtés plutôt que le cran 45°. |

### Périmètre des voisins

Le plan ne cherche des accrochages **que** parmi les postes et objets qui remplissent **les deux** conditions suivantes :

1. **Même espace** — la forme en cours et le voisin appartiennent au même espace (pas d’aimantation à travers un mur vers un autre espace).
2. **Voisinage proche** — les centres des deux formes sont à environ **1,50 m** ou moins l’un de l’autre sur le plan.

Les **murs** et le contour des **espaces** ne sont pas des cibles d’accrochage.

### Ce que vous voyez pendant le geste

Pendant que vous maintenez la forme (déplacement, duplication, pose ou rotation avant relâchement), le plan peut afficher plusieurs types d’indices :

| Indice | Signification |
|--------|----------------|
| **Lignes pointillées** (centre → centre) | Relient le centre de la forme en cours au centre de **chaque voisin éligible** (même espace, ≤ ~1,50 m). Elles montrent le **périmètre de comparaison** : les formes dont les côtés seront testés. |
| **Zones colorées** entre deux côtés | Aire où un accrochage est envisagé si vous relâchez à cet endroit. |
| **Arêtes mises en évidence** | Côtés des formes concernées par un accrochage retenu (forme déjà posée et forme en cours). |
| **Plusieurs zones / arêtes à la fois** | Plusieurs accrochages **simultanés** sont possibles (souvent sur deux axes perpendiculaires). Le plan ne propose que des combinaisons **compatibles entre elles**. |

Si plusieurs accrochages ne peuvent pas coexister, le plan **réduit** honnêtement le jeu proposé (parfois un seul accrochage, parfois aucun).

### Règles d’accrochage des côtés

Pour qu’un côté s’aimante sur un autre :

- Les deux côtés doivent être **à peu près parallèles** (presque alignés, pas en biais).
- Chaque côté doit mesurer au moins environ **30 cm** sur le plan.
- Les côtés doivent être **suffisamment proches** (fenêtre d’environ **5 cm**) pour « coller » au relâchement.
- À distance comparable, le plan favorise des côtés de **longueur proche**.

### Au relâchement

Lorsque vous lâchez la souris (ou validez la pose) :

- La forme se place en **une transition douce** vers la pose qui respecte **tous** les accrochages retenus du jeu proposé.
- Si le jeu affiché n’était pas entièrement réalisable, seul un **sous-ensemble faisable** est appliqué.

## Astuce

- Pour **coller plusieurs formes entre elles**, rapprochez-les dans le **même espace** : au-delà d’environ 1,50 m entre les centres, elles ne participent plus au magnétisme.
- Pour **orienter un groupe** sans magnétisme, voir [Rotation groupée sur le plan](./workplace-group-rotation).

## Limites

- La vue **3D** du bâtiment n’est pas concernée.
- Pas d’accrochage sur les murs ni sur le polygone des espaces.
- Pas de magnétisme entre espaces différents, ni au-delà du voisinage (~1,50 m).
- Hors Magnétisme (ou sans cible proche), la rotation garde le comportement habituel des crans à 45°.

## Voir aussi

- [Rotation groupée sur le plan](./workplace-group-rotation)
- [Ancrage du texte (type de poste)](./workplace-type-text-anchor)
