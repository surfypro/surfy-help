---
sidebar_position: 8
sidebar_label: Créer des arêtes visuelles (type d'objet)
---

# Créer des arêtes visuelles sur un type d'objet

Vous avez déjà une **forme utile** sur un <OT code="itemType" /> et vous voulez ajouter un trait décoratif (par ex. une diagonale) **sans** modifier l'emprise ni le magnétisme. Ce scénario montre le geste complet : calque exclusif, liaison optionnelle à un Point de forme, tirets courts et résultat sur le plan.

Guide détaillé : [Arêtes visuelles (type d'objet)](/entities/user-guide/floor-plan/item-type-visual-edges).

## Prérequis

- Droits de modification sur les types d'objets.
- Un type avec une forme déjà définie (Points de forme).

## Étapes

1. **Ouvrez l'éditeur de forme du type d'objet**  
   Point de départ : vue d'édition des formes (<LSV code="itemType:editor" />). Le calque actif est **Points de forme**.

2. **Basculez sur « Arêtes visuelles »**  
   Le contrôle exclusif **« Points de forme »** / **« Arêtes visuelles »** active le calque de dessin décoratif.

3. **Activez « Ajouter une arête visuelle »**  
   *Dessiner une arête décorative (2 clics) sur le calque visual edges.*

4. **Placez le premier sommet d'arête visuelle**  
   Zoomez si besoin. Pour réutiliser un Point de forme : superposez largement les cercles jusqu'au **changement de couleur au survol**, puis cliquez. Sinon, cliquez en dehors pour un point libre.

5. **Placez le second sommet et validez l'arête**  
   Même règle pour l'autre extrémité. L'arête s'affiche en **tirets courts**. Un sommet lié à un Point de forme **reste fixe** et suit ce point.

6. **(Optionnel) Déplacez le plan**  
   Faites glisser le fond de plan ou le plan de travail vide pour atteindre la zone de dessin.

## Gestes sans narration

- **Supprimez une arête** pour détacher un sommet lié à un Point de forme — un sommet lié ne se déplace pas au glisser.
- Sur le plan d'étage, l'objet du type affiche **forme + décor** ; le magnétisme et la surface lisent **la forme seule**.

## Limites

- Pas d'arêtes visuelles sur les types de poste de travail dans ce lot.
- Ce n'est pas un segment d'espace ni le Magnétisme du plan.
- Les anciennes formes mélangées ne sont pas séparées automatiquement.

## Voir aussi

- [Arêtes visuelles (type d'objet)](/entities/user-guide/floor-plan/item-type-visual-edges)
- [Magnétisme de segments sur le plan](./workplace-segment-magnetism)
