---
sidebar_position: 6
sidebar_label: Commentaire de dimension
---

# Commentaire de dimension — note à la réservation

## À quoi sert cette fonctionnalité ?

Sur chaque <OT code="dimension" /> (quartier / zone), vous pouvez renseigner un **commentaire**.  
Lorsque ce champ n’est pas vide, une **note informative** s’affiche sous le bouton de réservation de poste de cette dimension, pour guider les personnes qui réservent (événement, fermeture temporaire, consigne d’organisation, etc.).

La note est un message d’**information complémentaire** : elle n’empêche pas la réservation et n’apparaît pas comme une alerte d’erreur.

## Comment renseigner le commentaire ?

1. Ouvrez la fiche de la <OT code="dimension" /> concernée (avec les droits habituels d’édition).
2. Renseignez le champ <P code="dimension:comment" />.
3. Enregistrez.

Le texte est libre ; il n’est pas traduit automatiquement par Surfy (une seule langue, celle que vous saisissez).

## Où la note apparaît-elle ?

Dès que le commentaire est renseigné, la note s’affiche **sous le bouton** permettant de réserver un poste dans cette dimension, notamment :

- dans <LIV code="personWorkingLocation:my-planning" /> ;
- lorsque vous réservez un poste **pour une autre personne** ;
- dans le **planning des invités**.

Si le commentaire est vide, **aucune note** n’apparaît sous le bouton.

## Retirer la note

Pour masquer la note :

1. Rouvrez la fiche de la <OT code="dimension" />.
2. **Videz** le champ <P code="dimension:comment" /> (ou laissez uniquement des espaces).
3. Enregistrez.

La note disparaît alors sous le bouton de réservation.

## Ce que cette fonctionnalité ne fait pas

- Elle ne concerne **pas** la réservation de parking.
- Elle n’ajoute pas de message ailleurs que sous le bouton de réservation de poste partagé (pas de bannière globale, pas d’alerte rouge).

## Voir aussi

- Fiche <OT code="dimension" /> : propriété [Commentaire](/entities/admin/dimensions/dimension#comment).
- [Confirmation des réservations de poste et de parking](./workplace-booking-confirmation-window) — autre règle liée à Mon planning.
