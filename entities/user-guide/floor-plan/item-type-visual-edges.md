---
sidebar_position: 1
sidebar_label: Arêtes visuelles (type d'objet)
---

# Arêtes visuelles sur un type d'objet

Dans l'éditeur de forme d'un <OT code="itemType" />, vous pouvez séparer la **forme utile** (**Points de forme**) du **décor d'affichage** (**Arêtes visuelles**). Les arêtes visuelles apparaissent sur le plan mais **ne modifient pas** l'emprise, la surface au sol, les collisions ni le [Magnétisme de segments sur le plan](/entities/scenarios/workplace-segment-magnetism).

## À quoi ça sert ?

- Tracer une croix, un trait ou tout autre détail **sans alourdir** la forme métier.
- Garder une forme simple pour le magnétisme et les calculs de surface.
- Afficher quand même le décor sur le plan pour les utilisateurs.

Ce n'est **pas** :

- le [Magnétisme](/entities/scenarios/workplace-segment-magnetism) lui-même ;
- un segment d'espace (pièce) ;
- une arête visuelle sur un type de poste de travail ;
- un « arrêt visuel » — on parle de **sommet d'arête visuelle**.

## Deux calques exclusifs

L'éditeur propose un contrôle unique **« Points de forme »** / **« Arêtes visuelles »** : vous travaillez sur **l'un ou l'autre**, jamais les deux en même temps. Au départ, le calque actif est **Points de forme**.

## Déplacer le plan

Dans l'éditeur de type d'objet (et dans l'éditeur de type de poste), **Déplacer le plan** se fait en faisant glisser le **fond de plan** ou une zone vide du plan de travail. Même sans fond de plan, le plan de travail se déplace pour atteindre la zone à dessiner.

## Créer des arêtes visuelles

1. Ouvrez l'éditeur de forme du type d'objet (<LSV code="itemType:editor" />).
2. Basculez le contrôle sur **« Arêtes visuelles »**.
3. Activez **Ajouter une arête visuelle** (*Dessiner une arête décorative (2 clics) sur le calque visual edges*).
4. Cliquez pour placer chaque **sommet d'arête visuelle** :
   - **Point libre** : cliquez en dehors d'un Point de forme.
   - **Réutiliser un Point de forme** : superposez largement les cercles du pointeur et du point existant, attendez le **changement de couleur au survol**, puis cliquez.
5. Les arêtes validées s'affichent en **tirets courts** sur le plan.
6. Un **sommet d'arête visuelle** lié à un Point de forme **ne se déplace pas** : il suit ce point. Pour le détacher, **supprimez l'arête** (**Supprimer les arêtes visuelles**).

Scénario guidé pas à pas : [Créer des arêtes visuelles sur un type d'objet](/entities/scenarios/item-type-create-visual-edges).

## Ce que le plan affiche

- **Forme seule** : emprise, magnétisme, surface et collisions.
- **Forme + arêtes visuelles** : le décor s'ajoute à l'affichage sans changer la géométrie métier.

## Données existantes

Les polygones historiques qui mélangeaient forme et décor **ne sont pas convertis automatiquement**. Ouvrez le type et séparez manuellement si besoin.

## Voir aussi

- [Créer des arêtes visuelles](/entities/scenarios/item-type-create-visual-edges)
- [Magnétisme de segments sur le plan](/entities/scenarios/workplace-segment-magnetism)
