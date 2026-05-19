---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; les entrées correspondantes sont retirées ou raccourcies ici.

## Mai 2026 — en test sur l’alpha

- Statistiques dans les filtres du plan (répartition par dimension)
  - Affichage possible sous forme de **tableau** ou de **graphique**, avec un choix explicite entre les deux.
  - Graphiques circulaire et en zone polaire plus lisibles, avec des libellés plus cohérents sur le plan.
- Recherche globale des personnes
  - Une icône indique désormais, dans les résultats, si la personne peut réserver un poste de travail dans un bâtiment grâce à <P code="personToBuilding:allowWorkplaceBookingInTheBuilding" />.
- <OT code="person" />
  - Nouvelle propriété <P code="person:workflow" /> sur la fiche personne, utilisable pour suivre des étapes d’intégration ou de traitement selon votre paramétrage.
- Import des personnes, organisations et centres de coût depuis Workday
  - Import des **organisations** et de leur **hiérarchie** en complément des personnes et des centres de coût.
  - Avant synchronisation, affichage du **périmètre** : bâtiments reconnus, personnes incluses et locations Workday sans bâtiment Surfy correspondant.
  - Rapprochement des personnes avec les bâtiments Surfy via la **clé externe** du bâtiment et la location Workday (y compris lorsque plusieurs locations sont listées dans une même clé, séparées par des virgules).
  - Étape dédiée aux **affectations aux bâtiments** du périmètre, avec activation de la réservation de poste et de parking dans le bâtiment lorsque la liaison est créée ou corrigée.
  - Affectation automatique aux **quartiers** à partir du centre de coût Workday, lorsque les quartiers du bâtiment sont correctement configurés ; l’import signale les bâtiments pour lesquels plusieurs types de quartier sont associés et bloque l’étape tant que la configuration n’est pas corrigée.
  - Gestion affinée des **véhicules** et du champ <P code="person:workflow" /> pour enchaîner les étapes d’affectation sans repasser inutilement sur des personnes déjà traitées.
- Connexion aux services tiers (plateforme)
  - Lorsqu’un seul jeu d’identifiants est disponible pour un connecteur, il est **sélectionné automatiquement**.

<!-- À la prochaine release : fusionner dans app.md puis alléger ou vider cette section. Les liens <LIV /> vers l’alpha utilisent environment="alpha" ; les retirer quand le contenu est en production. -->
