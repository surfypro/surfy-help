---
sidebar_position: 4
sidebar_label: Vue sécurité réservation
---

# Vue sécurité réservation

Sur les lieux de travail, la vue <LIV code="personWorkingLocation:booking-security-day" /> montre **où** les personnes **avec** un <OT code="personSecurityProfile" /> ont réservé — le jour choisi ou sur un horizon de jours ouvrés.

Ce n’est **pas** la conformité basée sur les **affectations**, ni les Plans de réservation.

<CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-fr" kind="video" asGif width={640} gifFps={8} alt="Vue sécurité réservation : du planning au jour avec plan coloré" />

## À quoi sert cette vue ?

- Localiser rapidement les réservations des personnes portant un profil de sécurité.
- Parcourir un **horizon** (mode planning), puis un **jour** précis.
- Lire un **plan coloré** selon le profil des réservants lorsque la règle d’affichage du plan s’applique.

## Qui y a accès ?

L’accès dépend de votre **rôle** : la vue doit être attribuée au(x) rôle(s) concernés (comme les autres vues de liste). Ce n’est pas réservé à un métier figé dans le produit.

## Ouvrir la vue

1. Ouvrez l’index des **lieux de travail**.
2. Choisissez l’onglet / le lien de la vue <LIV code="personWorkingLocation:booking-security-day" /> (libellé du type **Sécurité — profils réservés (jour)**).

La vue n’apparaît pas dans le menu principal en V1, et elle n’est **pas** imbriquée dans les Plans de réservation.

## Mode planning et mode jour

### Mode planning

Sans date forcée, vous voyez un **horizon** de jours ouvrés : quantités par profil, puis drill-down **étage** ou **quartier** → **profil** → **cartes** personnes.

### Mode jour

Choisissez une date (ou cliquez un jour depuis le planning). Les filtres et les listes / cartes portent sur ce jour.

Passer du planning au jour met à jour l’adresse de la page **et** les filtres de gauche, pour rester cohérent.

## Filtres

Vous pouvez filtrer notamment :

- les **dates** ;
- les **bâtiments** (même périmètre que les Plans de réservation : bâtiments avec quartiers d’affectation et postes flex) ;
- les **étages** ;
- les **quartiers** (affectation) ;
- les **profils de sécurité**.

## Listes et cartes personnes

- Seules les personnes **avec** un profil de sécurité apparaissent.
- **Une carte par bâtiment** : la même personne dans deux bâtiments → deux cartes.
- Plusieurs postes ou créneaux **dans le même bâtiment** → **une** carte avec plusieurs emplacements.

## Quand le plan coloré apparaît

| Situation | Affichage |
|-----------|-----------|
| Mode **planning** | Pas de plan (listes / agrégats seulement) |
| Mode **jour** + **exactement un** étage sélectionné | **Plan coloré** selon le profil des **réservants** du jour |
| Mode **jour** + aucun étage, ou **plusieurs** étages | Listes / cartes seulement — un message indique comment afficher le plan |

Il n’y a pas de plans empilés multi-étages, ni de plan 3D dans cette vue.

## Quand il n’y a rien à afficher

Si aucune personne avec profil de sécurité n’a réservé pour les filtres choisis, un **message** l’indique clairement (pas d’écran vide silencieux).

## Ce que ce n’est pas

- L’édition des profils de sécurité (données de référence ailleurs).
- La conformité / colorisation basée sur les **affectations**.
- Les salles de réunion.
- Un mode à l’intérieur des Plans de réservation.

## Voir aussi

- Scénario guidé : [Du planning au jour](/entities/scenarios/booking-security-day-view)
