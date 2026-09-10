---
sidebar_position: 5
sidebar_label: Libération de poste par absence
---

# Libération de poste d'affectation statique par absence

Lorsque **toutes** les personnes affectées à un poste fixe sont absentes pour **la journée entière** (congé, hors site ou télétravail), et que l'entreprise et le poste sont configurés pour cela, le poste devient **réservable pour cette journée** par les collègues — sans modifier l'affectation fixe ni passer le poste en flex permanent.

Ce mécanisme s'appelle un **poste libéré par absence**.

## À quoi sert cette fonctionnalité ?

- Optimiser l'occupation des postes fixe lorsque les titulaires sont absents toute la journée.
- Laisser les collègues réserver ce poste **uniquement pour le jour concerné**.
- Conserver l'affectation statique : le lendemain, le poste redevient celui du titulaire.

Ce n'est **pas** :

- un poste flex permanent ;
- la **Forme statique** du plan (magnétisme à la pose) ;
- la [Vue sécurité réservation](./booking-security-day-view) (autre carte, autre objectif).

<CloudinaryAsset publicId="help/changelog/v3.5.33/static-desk-release-on-absence-fr" kind="video" asGif width={640} gifFps={8} alt="Libération de poste par absence : réservation sur la carte du bâtiment" />

## Prérequis (administration)

**Les deux conditions** suivantes doivent être remplies. Si l'une manque, rien ne se passe.

### 1) Option entreprise

Activez <P code="company:enableStaticDeskReleaseOnAbsence" /> dans les propriétés de l'entreprise.

Voir aussi la fiche [Entreprise](/entities/admin/company#enable-static-desk-release-on-absence).

### 2) Poste libérable

Sur chaque poste concerné, cochez <P code="workplace:isReleasable" /> lors de l'édition du poste.

Voir aussi la fiche [Poste de travail](/entities/things/workplace#is-releasable).

## Pour le ou les titulaire(s) — déclarer une absence

1. Ouvrez <LIV code="personWorkingLocation:my-planning" />.
2. Pour le jour concerné, choisissez **journée entière** (pas une demi-journée).
3. Déclarez un **emplacement de travail** d'absence : **codes** **OOO** (congé), **OFF** (hors site) ou **REMOTE** (télétravail).

Le poste devient **poste libéré par absence** lorsque **toutes** les personnes affectées à ce poste sont absentes sur **toute** la journée avec l'un de ces **codes d'emplacement de travail**.

Si plusieurs personnes partagent le même poste fixe, **toutes** doivent être absentes ce jour-là pour que le poste soit libéré.

Une fois la libération effective, un message indique quels postes sont disponibles à la réservation pour vos collègues ce jour-là.

## Pour le collègue — réserver un poste libéré

1. Ouvrez <LIV code="personWorkingLocation:my-planning" /> pour le jour où vous souhaitez venir au bureau.
2. Dans le bâtiment où vous avez le droit de réserver, choisissez **Réserver un poste de travail** puis l'**étage** souhaité.
3. Sur la **carte de réservation du bâtiment**, repérez les postes **libérés par absence** : ils s'affichent dans une **teinte de vert différente** des postes flex libres. Il n'y a **pas de légende** sur la carte — repérez-les à la couleur du poste.
4. Cliquez sur le poste libéré et confirmez la réservation.

Vous devez disposer du droit de réservation dans le bâtiment concerné.

## Si un collègue a déjà réservé votre poste

Tant qu'une **autre personne** a réservé le poste libéré pour cette journée :

- vous **ne pouvez pas retirer** votre déclaration d'absence (codes d'**emplacement de travail** **OOO**, **OFF** ou **REMOTE**) ;
- vous **ne pouvez pas** déclarer un retour au bureau ce jour-là ;
- un message vous indique qui a réservé le poste et que la réservation doit d'abord être annulée.

La réservation du collègue est conservée : le titulaire ne peut pas « reprendre » le poste en annulant son absence tant que la réservation existe.

## Limites (version actuelle)

- **Journée entière uniquement** : pas de libération sur une demi-journée.
- **Pas de relocalisation automatique** du collègue qui a réservé si le titulaire revient.
- **Poste flex** : si un poste est à la fois flex et libérable, le comportement flex prime.
- **Poste sans affectation** : déjà libre en permanence — hors périmètre de cette fonctionnalité.
- L'affectation fixe **n'est pas supprimée** : seule la réservation du jour est ouverte aux collègues.

## Voir aussi

- [Confirmation des réservations de poste de travail](./workplace-booking-confirmation-window) — autre règle sur Mon planning (fenêtre de confirmation).
- Scénario guidé : [Libération de poste par absence](/entities/scenarios/static-desk-release-on-absence).
- Fiches propriétés : [Entreprise](/entities/admin/company#enable-static-desk-release-on-absence) · [Poste de travail](/entities/things/workplace#is-releasable).
