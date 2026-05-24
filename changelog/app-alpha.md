---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; cette page est ensuite masquée en la renommant `_app-alpha.md`.

## 22 Mai 2026 - v3.4.199

- <OT code="companyWorkingLocation" />
  - Nouvelle propriété <P code="companyWorkingLocation:label" /> permettant de définir un **libellé personnalisé** pour chaque emplacement de travail de l’entreprise (au bureau, en télétravail, etc.).
  - Ce libellé remplace le libellé par défaut dans le **planning**, les **réservations** et la **recherche globale** des personnes.
  - Dans le planning, chaque choix d’emplacement de travail (bureau, télétravail, etc.) affiche une **info-bulle** rappelant ce que ce choix implique pour la réservation de poste et de parking sur site.

- Plan
  - Lors de l’affectation ou du retrait d’une personne sur un **espace** ou un **poste de travail**, les affectations et les indicateurs de l’espace concerné (occupation, comptages) se mettent à jour immédiatement sur le plan.

- <OT code="building" />
  - La propriété <P code="building:surface" /> est renommée **Surface déclarée**, avec une description précisant qu’il s’agit d’une valeur saisie manuellement, distincte de la surface qualifiée calculée à partir des espaces modélisés.

- Réservation de parking (planning)
  - Le panneau dépliable « Réserver un parking » n’apparaît que lorsqu’aucune place de parking n’est déjà réservée pour le créneau, ni dans le bâtiment courant ni dans un autre bâtiment.
  - Si une réservation de parking existe déjà dans un autre bâtiment pour le même créneau, un message l’indique et les options de nouvelle réservation dans le bâtiment courant ne sont pas proposées.
  - Lorsqu’une réservation existe déjà dans le bâtiment, les places réservées s’affichent directement, sans panneau dépliable.
