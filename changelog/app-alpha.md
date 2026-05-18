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
  - Graphiques circulaire et en zone polaire plus lisibles et libellés plus cohérents sur le plan.
- <OT code="person" />
  - Nouvelle propriété <P code="person:workflow" /> pour préciser le parcours ou le traitement attendu sur la fiche personne, selon votre paramétrage.
- Import des personnes et des centres de coût depuis Workday
  - Prise en charge de l’import des **organisations** en complément des personnes et des centres de coût.
  - Enchaînement de synchronisation affiné pour les affectations aux **bâtiments** et aux **véhicules** des personnes, en lien avec le champ <P code="person:workflow" /> lorsque vous l’utilisez.
- Connexion aux services tiers (plateforme)
  - Lorsqu’un seul jeu d’identifiants est disponible pour un connecteur, il est **sélectionné automatiquement** sans étape inutile.
- Règles d’authentification et rôles sans claims
  - Lorsque <P code="userRegistrationTenantRule:automaticUserToRoleMapping" /> est activé **sans** <P code="userRegistrationTenantRule:useOpenIdTokenRoleMapping" />, les rôles et rôles de contenu définis dans la règle ne sont ajoutés automatiquement **que pour la toute première création du compte** dans Surfy, et non à chaque nouvelle association à un tenant pour un utilisateur déjà connu.

<!-- À la prochaine release : fusionner dans app.md puis alléger ou vider cette section. Les liens <LIV /> vers l’alpha utilisent environment="alpha" ; les retirer quand le contenu est en production. -->
