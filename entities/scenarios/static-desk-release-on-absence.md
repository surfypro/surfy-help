---
sidebar_position: 9
sidebar_label: Libération de poste par absence
---

# Libération de poste par absence

Partage temporaire d'un poste à affectation fixe : configuration entreprise + poste, absence journée entière du titulaire, réservation collègue sur la carte du bâtiment, puis blocage si le titulaire veut retirer son absence.

<CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-fr" kind="video" asGif width={640} gifFps={8} alt="Libération de poste par absence : configuration, absence, réservation et blocage" />

## Prérequis

- Droits d'édition **entreprise** et **postes de travail** pour la configuration.
- <P code="company:enableStaticDeskReleaseOnAbsence" /> activé.
- <P code="workplace:isReleasable" /> coché sur au moins un poste à affectation fixe (non flex).
- Titulaire(s) avec affectation sur ce poste ; collègue avec droit de réservation dans le bâtiment.

## Étapes

### 1) Activer la libération (entreprise + poste)

1. Ouvrez les propriétés de l'**entreprise** et activez <P code="company:enableStaticDeskReleaseOnAbsence" />.
2. Éditez le **poste de travail** concerné et cochez <P code="workplace:isReleasable" />.

Les deux réglages sont obligatoires.

### 2) Déclarer une absence journée entière (titulaire)

1. Ouvrez <LIV code="personWorkingLocation:my-planning" />.
2. Sur le jour voulu, passez en **journée entière**.
3. Choisissez un **emplacement de travail** d'absence : **codes** **OOO** (congé), **OFF** (hors site) ou **REMOTE** (télétravail).

Si toutes les personnes affectées au poste sont absentes toute la journée, le poste devient **libéré par absence**. Un message liste les postes concernés.

### 3) Réserver un poste libéré (collègue)

1. Le collègue ouvre <LIV code="personWorkingLocation:my-planning" /> pour le même jour.
2. Dans le bâtiment, il choisit **Réserver un poste de travail** puis un **étage**.
3. Sur la carte, il repère les postes **libérés par absence** : **teinte de vert différente** des postes flex libres (sans légende sur la carte).
4. Il réserve le poste pour la journée.

### 4) Blocage du retrait d'absence (titulaire)

1. Tant que le collègue n'a pas annulé sa réservation, le titulaire rouvre <LIV code="personWorkingLocation:my-planning" />.
2. S'il tente de retirer sa déclaration d'absence (codes d'**emplacement de travail** **OOO**, **OFF** ou **REMOTE**) ou de déclarer un retour au bureau, Surfy **refuse** et affiche un message (réservation en cours).
3. Le titulaire voit **qui** a réservé son poste.

## Gestes sans narration

- Poste partagé par **plusieurs affectations** : libération seulement si **tous** les titulaires sont absents la journée entière.
- Carte du bâtiment : postes **libérés par absence** vs flex libres — **couleurs distinctes** sur le plan (pas de légende).

## Limites

- Pas de demi-journée ; pas de conversion flex permanente ; pas de relocalisation auto du collègue.
- Ne pas confondre avec la [Vue sécurité réservation](/entities/user-guide/booking-system/booking-security-day-view).

## Voir aussi

- Guide : [Libération de poste par absence](/entities/user-guide/booking-system/static-desk-release-on-absence)
