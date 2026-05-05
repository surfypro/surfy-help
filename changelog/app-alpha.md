---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; les entrées correspondantes sont retirées ou raccourcies ici.

## Mai 2026 — en test sur l’alpha

- <LIV code="personWorkingLocation:guest-planning" environment="alpha" />
  - Nouvelle vue de **planning pour invités** : création et suivi d’invités, choix d’un invité puis accès au planning des postes comme pour une personne habituelle.
  - Panneaux d’invitation et de liste d’invités enrichis pour guider la saisie.
- Mise en place de l’<OT code="personType" /> dans les données de référence et le menu : les personnes peuvent être associées à un type (par exemple invité), visible dans les fiches et les écrans de réservation concernés.
- Pour les **rôles**, possibilité de **restreindre les scénarios** auxquels un profil a accès, avec textes d’aide mis à jour sur les bâtiments et la gestion des invités.
- **Réservations véhicules et parkings** : évolution de la configuration (liaisons types de véhicules / types d’espaces de parking, règles associées) et de l’administration du planning véhicules pour mieux refléter les règles métier sur le terrain.
- **Import des personnes et des centres de coût depuis Workday** : parcours et synchronisation affinés pour plus de clarté et de fiabilité lors des imports répétés.
- **Parcours dans l’interface** : fil de navigation (fil d’Ariane) rendu plus lisible sur les écrans concernés.

<!-- À la prochaine release : fusionner dans app.md puis alléger ou vider cette section. Les liens <LIV /> vers l’alpha utilisent environment="alpha" ; les retirer quand le contenu est en production. -->
