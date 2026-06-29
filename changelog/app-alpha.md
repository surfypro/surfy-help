---
sidebar_position: 2
---

# Nouveautés (version alpha)

Cette page décrit les **changements visibles** déjà disponibles sur l’**application Surfy alpha**, avant leur diffusion sur l’application habituelle en production.

**Pour essayer ces évolutions** : [https://app-alpha.surfy.pro](https://app-alpha.surfy.pro)

L’application utilisée au quotidien par la plupart des organisations reste sur [https://app.surfy.pro](https://app.surfy.pro).

Lors d’une mise en production, le contenu utile est repris dans la page [Nouveautés](./app.md) ; cette page est ensuite masquée en la renommant `_app-alpha.md`.

## 29 Juin 2026 - v3.5.2

- **Vue 3D du bâtiment**
  - Affichage des postes de travail et des objets plus fiable au chargement et lors des changements de vision.
  - Les espaces sont colorés selon la **vision du plan** active (typologies, quartiers, refacturation, etc.).
  - Vision **Cloisons** : les types d’objets ne restent plus sélectionnés par erreur après un changement de vision.

- <LIV code="person:dq-no-affectations" />
  - Case à cocher **Exclure les bâtiments scénarios** pour retirer ces bâtiments du tableau des personnes sans affectation.

- <OT code="personToRoomBooking" /> et <OT code="personToWorkplaceBooking" />
  - Fil d’Ariane et libellés plus explicites lors de la consultation d’une réservation (personne, salle ou poste concerné).

## 27 Juin 2026 - v3.5.1

Synthèse des évolutions testées sur l’alpha depuis la production (`master`), incluant les travaux des branches `meetingrooms` et `react19`.

### Authentification et accès

- <OT code="userRegistrationTenantRule" />
  - Association automatique d’un utilisateur à un tenant lorsque son jeton de connexion contient un claim personnalisé correspondant au code défini sur l’entreprise.
  - <P code="userRegistrationTenantRule:jwtTokenTenantMappingPropertyName" /> : nom du claim à lire dans le jeton.
  - <P code="company:jwtClaimCode" /> : valeur attendue dans ce claim.
  - Le mode existant via `Surfy.Tenant.{NomExactDuTenant}` dans les rôles du jeton reste disponible si le claim personnalisé n’est pas renseigné.
  - Guide : [Associer un utilisateur à un tenant via un claim JWT personnalisé](/entities/user-guide/security-model/tenant-association-via-jwt-claim).

- Connexion
  - Après authentification, la redirection peut cibler une URL précise transmise dans le lien (par exemple depuis un **QR code d’affectation de poste**).
  - Message de recherche sur l’écran de sélection de plateforme reformulé (« Aucune plateforme trouvée »).

### <OT code="company" />

- Nouvelle propriété <P code="company:prettyName" /> : **nom d’affichage** de l'entreprise, en complément de l’identifiant technique.
  - Visible sur les cartes de sélection de tenant, dans la barre de recherche (filtre sur le nom d’affichage) et dans le menu de changement de tenant.
  - Les listes de plateformes sont triées par nom d’affichage.

- <OT code="building" />
  - <P code="building:regulatoryCapacity" /> est recalculée automatiquement à partir des étages du bâtiment.

### Planning et réservations

- Réservation de **parking** (Mon planning)
  - Bouton par **étage** du bâtiment avec le nombre de places disponibles.
  - Info-bulle détaillant les réservations en cours et la disponibilité par type de place.

- Réservation de **poste de travail**
  - Bouton **Libérer cette réservation** sur les postes déjà réservés dans le planning.
  - Confirmation des réservations du jour : seules les réservations **créées avant la fin** de la plage <P code="company:workplaceBookingConfirmationRange" /> peuvent recevoir un rappel ou être annulées automatiquement.
  - Une réservation prise après cette heure (ex. sur un poste libéré en cours de journée) n’est plus concernée par ce processus.

- Réservation de **salles de réunion**
  - Messages d’erreur plus explicites lors d’un échec de création de rendez-vous via le calendrier Microsoft.

### Plan et vues 3D

- **Plan**
  - Image de fond affichée plus nettement en mode consultation, fluide en mode édition.
  - **Échelle du plan** : création et liaison à l’étage plus fluides ; couleurs des segments clarifiées pendant le tracé.
  - **Fusionner les sommets** : option pour réutiliser le même sommet entre espaces adjacents.
  - **Affectation d’une personne** sur un espace ou un poste : fonctionne même si la personne n’est pas encore chargée sur le plan.
  - **Liste des étages** (bandeau à droite du plan) : affichage en colonne.
  - Ouverture du plan depuis un **lien avec sélection** (poste, espace, etc.) : mise en surbrillance plus fiable.
  - Suppression d’un **espace** : les points de segment devenus orphelins sont retirés du plan et de la base.

- **Vue 3D du bâtiment**
  - Chargement et affichage optimisés (stabilité et fluidité).

### Import, export et rapports

- **Import Excel**
  - Gabarits téléchargeables et liste des colonnes à copier : en-têtes alignés avec l’importeur (apostrophes retirées des libellés français).

- <OT code="building" />
  - Rapport **Espaces** : export enrichi avec les identifiants des espaces, étages, bâtiments, centres de coût, organisations, types de coûts de distribution et types d’espaces.

- **Opérations du tenant**
  - Import de **personnes et d’organisations** depuis un fichier RH au format CSV (lorsque l’opération est activée sur le tenant).
  - Les lignes du fichier RH peuvent être filtrées selon le **lieu de travail autorisé** configuré pour l’import.

### Interface générale

- **Fiches entités** : chargement plus fluide à l’ouverture d’une fiche en édition ou consultation.

- **Listes d’entités** : message explicite lorsque la pagination dépasse le nombre d’éléments disponibles.
- **Menu latéral** : correction de l’affichage des entrées imbriquées.
- **Messages d’erreur** : les messages proposant une action (création de compte, correction de données, adresse manquante, etc.) s’affichent de manière plus fiable.
