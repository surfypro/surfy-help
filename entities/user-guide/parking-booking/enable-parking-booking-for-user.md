# Activation de la réservation de parking pour un utilisateur

Pour qu’un utilisateur puisse réserver une place de parking, trois conditions doivent être réunies.

## 1) Associer la personne au bâtiment

Dans la relation personne-bâtiment, la personne doit être rattachée au bâtiment concerné.

## 2) Autoriser la réservation parking sur ce bâtiment

Dans cette même relation, activer l’option d’autorisation de réservation parking dans le bâtiment.

## 3) Vérifier les véhicules de la personne

La personne doit avoir au moins un véhicule correctement renseigné :

- type de véhicule via <P code="vehicleType:code" />
- type de propulsion via <P code="vehiclePropulsionType:code" />

## 4) Vérifier la compatibilité avec la configuration globale

Même si la personne est bien associée au bâtiment, la réservation parking n’est possible que si ses véhicules correspondent à des lignes de configuration parking valides (voir la configuration globale).
