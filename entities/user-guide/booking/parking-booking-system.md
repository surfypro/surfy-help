# Système de réservation de parking

## Vue d'ensemble

Le système de réservation de parking de Surfy permet aux utilisateurs de réserver des places de stationnement dans les bâtiments de leur entreprise. Le système filtre automatiquement les places disponibles en fonction du type de véhicule de l'utilisateur et de son mode de propulsion.

## Types de places de parking

Le système reconnaît trois types de places de parking :

### 1. PARKING-CAR
- **Description** : Place de parking standard pour véhicules à moteur thermique
- **Utilisation** : Destinée aux voitures et autres véhicules à moteur non électrique

### 2. PARKING-ELECTRIC-CAR
- **Description** : Place de parking équipée pour véhicules électriques
- **Utilisation** : Destinée aux voitures électriques nécessitant une borne de recharge

### 3. PARKING-PRM
- **Description** : Place de parking réservée aux personnes à mobilité réduite (PMR)
- **Utilisation** : Accessible aux utilisateurs ayant besoin d'un stationnement adapté

### Configuration des types de places de parking

Pour que le système reconnaisse les places de parking, un administrateur doit configurer les types de salles (RoomType) avec les codes appropriés :

1. **Créer les types de salles de parking** :
   - Accéder à la gestion des types de salles (RoomType)
   - Créer trois types de salles avec les codes suivants :
     - `PARKING-CAR` pour les places de parking standard
     - `PARKING-ELECTRIC-CAR` pour les places de parking électriques
     - `PARKING-PRM` pour les places de parking PMR
   - Renseigner le champ **"Code"** avec exactement ces valeurs (en majuscules, avec tirets)
   - Ajouter un nom et une couleur pour faciliter l'identification

2. **Associer les salles aux types** :
   - Pour chaque place de parking (salle) dans le système
   - Sélectionner le type de salle approprié (celui avec le code `PARKING-CAR`, `PARKING-ELECTRIC-CAR` ou `PARKING-PRM`)
   - Le système utilisera automatiquement le code du type de salle pour filtrer les places disponibles

**Important** : Les codes doivent être écrits exactement comme indiqué (en majuscules, avec tirets) pour que le système les reconnaisse correctement.

## Types de véhicules

Le système prend en charge différents types de véhicules. Chaque véhicule est défini par :

### Type de véhicule
- **CAR** : Voiture
- D'autres types peuvent être ajoutés selon les besoins (moto, vélo, etc.)

### Type de propulsion
Le type de propulsion détermine le mode d'alimentation du véhicule :
- **ELECTRIC** : Propulsion électrique
- **THERMAL** : Propulsion thermique (essence, diesel, etc.)
- **HYBRID** : Propulsion hybride
- **MANUAL** : Propulsion manuelle (vélo, etc.)
- D'autres types peuvent être configurés selon les besoins

## Correspondance entre véhicules et places de parking

Le système associe automatiquement les véhicules aux types de places de parking appropriés :

### Règles de correspondance

1. **Voiture électrique (CAR + ELECTRIC)**
   - Correspond à : **PARKING-ELECTRIC-CAR**
   - Le système propose uniquement les places équipées pour la recharge électrique

2. **Voiture non électrique (CAR + autre propulsion)**
   - Correspond à : **PARKING-CAR**
   - Le système propose les places de parking standard

3. **Personnes à mobilité réduite**
   - Correspond à : **PARKING-PRM**
   - Accessible selon les besoins spécifiques de l'utilisateur

### Comportement du système

- Si un utilisateur possède plusieurs véhicules, le système affiche toutes les places compatibles avec au moins un de ses véhicules
- Si un utilisateur n'a aucun véhicule enregistré, il ne peut pas réserver de place de parking
- Le système filtre automatiquement les places disponibles en fonction des véhicules de l'utilisateur

## Processus de réservation

### Étape 1 : Accès à la réservation
1. L'utilisateur accède à la section de réservation de son lieu de travail
2. Le système charge automatiquement les bâtiments où la réservation de parking est autorisée

### Étape 2 : Sélection du bâtiment
1. L'utilisateur voit la liste des bâtiments avec des places de parking disponibles
2. Pour chaque bâtiment, le système affiche uniquement les places compatibles avec les véhicules de l'utilisateur

### Étape 3 : Sélection de l'étage
1. L'utilisateur choisit un bâtiment
2. Le système affiche les étages contenant des places de parking disponibles
3. Pour chaque étage, l'utilisateur voit :
   - Le nombre total de places
   - Le nombre de places déjà réservées
   - Le nombre de places libres

### Étape 4 : Sélection de la place
1. L'utilisateur clique sur un étage pour voir le plan du parking
2. Le plan affiche :
   - Les places disponibles (en vert ou couleur normale)
   - Les places déjà réservées (en rouge ou couleur différente)
   - Les places compatibles avec les véhicules de l'utilisateur
3. L'utilisateur clique sur une place disponible pour la réserver

### Étape 5 : Confirmation
1. Le système vérifie la disponibilité en temps réel
2. Si la place est toujours disponible, la réservation est confirmée
3. Si la place a été réservée entre-temps, le système affiche un message d'erreur

## Affichage des statistiques

Pour chaque étage, le système affiche :
- **Places totales** : Nombre total de places de parking sur l'étage
- **Places réservées** : Nombre de places déjà réservées pour la période sélectionnée
- **Places libres** : Nombre de places encore disponibles

## Réservation automatique

Le système propose également une fonctionnalité de réservation automatique :
- L'utilisateur peut demander au système de réserver automatiquement une place disponible
- Le système sélectionne la première place compatible avec les véhicules de l'utilisateur
- Cette fonctionnalité est utile lorsque l'utilisateur n'a pas de préférence pour une place spécifique

## Gestion des conflits

Si deux utilisateurs tentent de réserver la même place simultanément :
- Le système détecte le conflit
- La première réservation est confirmée
- La deuxième réservation est refusée avec un message d'information
- L'utilisateur peut alors sélectionner une autre place disponible

## Prérequis pour la réservation

Pour pouvoir réserver une place de parking, l'utilisateur doit :
1. Avoir au moins un véhicule enregistré dans son profil
2. Avoir les permissions nécessaires pour réserver dans le bâtiment concerné
3. Avoir un lieu de travail défini pour la période souhaitée

## Activation de la réservation de parking pour un utilisateur

Pour qu'un utilisateur puisse réserver des places de parking dans un bâtiment, **trois conditions** doivent être remplies :

### Condition 1 : La personne doit être associée au bâtiment
1. Accéder à la fiche de la personne concernée
2. Créer ou modifier l'affectation au bâtiment (relation "Personne au bâtiment")
3. S'assurer que la personne est bien associée au bâtiment où elle doit pouvoir réserver

### Condition 2 : Activer l'option de réservation de parking
1. Dans l'affectation au bâtiment, localiser l'option **"Autoriser la réservation de parking dans le bâtiment"**
2. Cocher cette option pour activer la réservation de parking
3. Enregistrer les modifications

### Condition 3 : La personne doit avoir un véhicule
1. La personne doit avoir au moins un véhicule enregistré dans son profil
2. Le véhicule doit être correctement configuré avec son type (ex: CAR) et son type de propulsion (ex: ELECTRIC, THERMAL, etc.)

### Résultat
Une fois ces trois conditions remplies :
- La personne est associée au bâtiment
- L'option de réservation de parking est activée
- La personne a au moins un véhicule enregistré

L'utilisateur pourra alors voir et réserver des places de parking dans ce bâtiment. Les places proposées seront automatiquement filtrées selon les types de véhicules enregistrés.

### Note importante
Cette configuration doit être effectuée pour chaque bâtiment où l'utilisateur doit pouvoir réserver des places de parking. Si un utilisateur travaille dans plusieurs bâtiments, l'option doit être activée séparément pour chaque bâtiment.

## Notes importantes

- Les places de parking sont réservées pour une période spécifique (généralement une journée)
- Le système vérifie automatiquement la compatibilité entre les véhicules et les types de places
- Les réservations peuvent être consultées dans la section "Mes réservations"
- Les administrateurs peuvent configurer les types de véhicules et de places selon les besoins de l'entreprise
