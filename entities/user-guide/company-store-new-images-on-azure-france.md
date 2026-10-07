---
sidebar_position: 8
sidebar_label: Images sur Azure (France)
---

# Stocker les nouvelles images sur Azure (France)

Lorsque l’entreprise active <P code="company:storeNewImagesOnAzureFrance" />, les **nouveaux** dépôts d’images produit sont hébergés en **France**. L’affichage (tailles et aperçus) reste comme aujourd’hui. Les images déjà en ligne **ne sont pas** déplacées.

## À quoi sert cette fonctionnalité ?

- Héberger les **nouvelles** images de l’entreprise en France.
- Continuer à voir les images avec les mêmes tailles et aperçus qu’auparavant.
- Laisser coexister les images déjà en ligne et les nouvelles, **sans migration**.

Ce n’est **pas** :

- l’option <P code="company:proxyImages" /> (autre réglage, autre objectif) ;
- un déplacement automatique des images déjà présentes.

## Prérequis

Vous devez disposer des droits d’**édition** de la fiche **Entreprise**.

## Activer l’option

1. Ouvrez la fiche [Entreprise](/entities/admin/company).
2. Cochez <P code="company:storeNewImagesOnAzureFrance" />.
3. Enregistrez.

Les **prochains** ajouts d’images produit (logos, photos, fonds de plan, etc.) utilisent alors le stockage en France. Le geste d’ajout d’une image pour l’utilisateur reste le même.

## Effet

| Situation | Comportement |
|-----------|--------------|
| Option **désactivée** | Comportement habituel d’ajout d’images. |
| Option **activée** | Seuls les **nouveaux** dépôts sont concernés. |
| Images déjà en ligne | Restent où elles sont ; **pas** de migration. |
| Affichage | Inchangé pour le lecteur. |

Les formats acceptés à l’ajout d’une image restent **inchangés** selon le parcours (comme avant cette option).

## Limites

- **Pas de migration** des images déjà hébergées.
- **Parc mixte** : anciennes et nouvelles images coexistent.
- **≠ Images proxy** : <P code="company:proxyImages" /> n’active pas le stockage en France, et réciproquement.

## Voir aussi

- Fiche [Entreprise](/entities/admin/company) — propriétés de l’entreprise, dont <P code="company:proxyImages" /> ([Images proxy](/entities/admin/company#proxy-images)).
- Changelog alpha : [Nouveautés (version alpha)](/changelog/app-alpha).
