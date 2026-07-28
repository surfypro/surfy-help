---
sidebar_position: 8
sidebar_label: Vue sécurité réservation — du planning au jour
---

# Vue sécurité réservation — du planning au jour

Sur la vue <LIV code="personWorkingLocation:booking-security-day" />, partez du **mode planning**, ouvrez un **jour**, et affichez le **plan coloré** lorsque **un seul** étage est filtré.

<CloudinaryAsset publicId="help/changelog/v3.5.25/booking-security-day-view-fr" kind="video" asGif width={640} gifFps={8} alt="Vue sécurité réservation : du planning au jour avec plan coloré" />

## Prérequis

- La vue <LIV code="personWorkingLocation:booking-security-day" /> est attribuée à votre rôle.
- Des personnes **avec** profil de sécurité ont réservé sur l’horizon / le jour concernés.
- Pour le plan : filtrez **exactement un** étage.

## Étapes

1. **Ouvrez la vue sécurité réservation**  
   Point de départ : lieux de travail → <LIV code="personWorkingLocation:booking-security-day" /> en **mode planning** (horizon multi-jours), avec les filtres utiles (bâtiment, un étage, profil).

2. **Cliquez sur Voir le détail du jour**  
   Passe en **mode jour** : la date et les filtres restent alignés avec l’adresse de la page.

3. **Lisez le plan coloré**  
   Avec **un** étage sélectionné, le plan s’affiche et se colore selon le profil de sécurité des **réservants** du jour.

## Gestes sans narration

- Parcourez les blocs du planning (étage / quartier → profil → cartes) avant d’ouvrir un jour.
- Si aucun étage ou plusieurs étages sont sélectionnés en mode jour, les **listes / cartes** restent seules ; un message indique comment afficher le plan.

## Limites

- Personnes **sans** profil de sécurité : hors de cette vue.
- Pas de plan en mode planning ; pas de plans empilés ; pas de 3D.
- Ce n’est pas la conformité **affectation**, ni les Plans de réservation.

## Voir aussi

- Guide : [Vue sécurité réservation](/entities/user-guide/booking-system/booking-security-day-view)
