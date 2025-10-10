# Guide du Schéma Surfy pour Développeurs API

Ce document explique les concepts fondamentaux du schéma de données Surfy pour les développeurs utilisant les APIs de la plateforme.

> 📚 **Référence complète des propriétés** : Pour consulter le détail de toutes les propriétés de chaque objet, référez-vous à la [documentation des entités Surfy](https://help.surfy.pro/entities/intro).

## Table des matières

1. [Introduction au Schéma Surfy](#introduction-au-schéma-surfy)
2. [Architecture du Système](#architecture-du-système)
3. [Les Objets Principaux](#les-objets-principaux)
4. [Relations entre Objets](#relations-entre-objets)
5. [Concepts Avancés](#concepts-avancés)
6. [Principes d'Utilisation](#principes-dutilisation)

## Introduction au Schéma Surfy

Surfy utilise un **système de méta-modèle** qui définit automatiquement les types TypeScript, les schémas de base de données et les APIs REST à partir de définitions centralisées. Cette approche garantit la cohérence et la sécurité des types dans l'ensemble de la plateforme.

### Principes Fondamentaux

- **Source Unique de Vérité** : Toutes les définitions d'objets sont centralisées dans le schéma
- **Génération Automatique** : Les types TypeScript, modèles de base de données et APIs sont générés automatiquement
- **Type Safety** : TypeScript assure la sécurité des types à tous les niveaux
- **Multi-langage** : Support intégré pour les traductions (français, anglais, allemand, espagnol, italien, néerlandais)

## Architecture du Système

### Types d'Objets (Object Types)

Un **Object Type** représente une entité métier dans Surfy. Chaque Object Type possède :

- **Nom unique** : Identifiant camelCase (ex: `building`, `floor`, `room`)
- **Propriétés** : Attributs et champs de données
- **Associations** : Relations avec d'autres objets
- **Métadonnées** : Indicateurs (Master Data, Reporting Data, Security Data)
- **Scope** : Public ou privé

### Types de Propriétés (Property Types)

Les propriétés définissent les attributs d'un Object Type :

- **Types primitifs** : `string`, `integer`, `float`, `boolean`, `date`, `datetime`
- **Types métier** : `surface`, `distance`, `currency`, `percentage`, `color`, `image`, `url`
- **Types géométriques** : `point2d`, `point3d`, `address`
- **Clés étrangères** : Relations belongsTo avec d'autres objets
- **Propriétés calculées** : Valeurs dérivées automatiquement

### Types d'Associations

Surfy supporte plusieurs types de relations :

- **mandatoryBelongsTo** : Relation obligatoire (ex: un étage appartient à un bâtiment)
- **optionalBelongsTo** : Relation optionnelle (ex: une pièce peut avoir un type)
- **Many-to-Many** : Relations multiples (ex: personnes ↔ pièces via `roomAffectation`)

## Les Objets Principaux

> 💡 **Pour les détails complets** : Consultez la [documentation des entités](https://help.surfy.pro/entities/intro) pour voir toutes les propriétés disponibles de chaque objet.

### 1. Bâtiment (Building)

Le **Building** est l'objet de plus haut niveau dans la hiérarchie spatiale de Surfy. Il représente un bâtiment physique avec ses caractéristiques.

**Catégories de propriétés** :
- **Identification** : Nom, couleur, adresse
- **Métriques spatiales** : Surface, capacité réglementaire, nombre de places de parking
- **Informations financières** : Loyers, charges, taxes, dates de bail
- **Métadonnées** : Année de construction, images, documents
- **Propriétés calculées** : Nombre de pièces, postes de travail, personnes, surfaces totales

**Relations principales** :
- Appartient à une **Company** (entreprise) - obligatoire
- Peut avoir un **BuildingType** (type de bâtiment) - optionnel
- Peut appartenir à un **Campus** - optionnel
- Contient plusieurs **Floors** (étages) - collection

### 2. Étage (Floor)

Le **Floor** représente un niveau dans un bâtiment. Le niveau peut être négatif (sous-sols), zéro (rez-de-chaussée) ou positif (étages).

**Catégories de propriétés** :
- **Identification** : Nom, niveau numérique
- **Caractéristiques physiques** : Hauteur sous plafond, capacité réglementaire
- **Affichage cartographique** : Image de fond, opacité, échelle, graphe de navigation
- **Propriétés calculées** : Nombre de pièces, postes de travail, personnes, surfaces totales

**Relations principales** :
- Appartient à un **Building** - obligatoire
- Peut avoir une **MapScale** (échelle cartographique) - optionnel
- Peut avoir une **Structure** (structure 3D) - optionnel
- Contient plusieurs **Rooms** (pièces) - collection

### 3. Pièce / Espace (Room)

Le **Room** représente un espace physique dans un étage : bureau, salle de réunion, couloir, zone de circulation, etc.

**Catégories de propriétés** :
- **Identification** : Nom, nom formaté
- **Géométrie** : Surface, périmètre, point d'ancrage (tous calculés automatiquement)
- **Caractéristiques** : Capacité d'accueil, informations descriptives, photo
- **Réservation** : Email de booking, statut d'occupation
- **Données temps réel** : Comptage de personnes présentes
- **Propriétés calculées** : Nombre de postes de travail, équipements, personnes affectées

**Relations principales** :
- Appartient à un **Floor** - obligatoire
- Peut avoir un **RoomType** (type de pièce) - optionnel
- Peut avoir une **Organization** (organisation) - optionnel
- Peut avoir un **CostCenter** (centre de coût) - optionnel
- Contient plusieurs **Workplaces** (postes de travail) - collection
- Contient plusieurs **Items** (équipements) - collection
- A une géométrie définie par des **RoomPoints** - collection

### 4. Géométrie des Pièces

La forme géométrique d'une pièce est définie par un **contour polygonal** composé de points ordonnés.

**RoomPoint** : Représente un point en coordonnées 2D (x, y) appartenant à un étage.

**RoomPointRoom** : Association entre une pièce et un point, avec un index de tri (`sortIndex`) qui détermine l'ordre des points dans le contour.

Le système calcule automatiquement :
- La **surface** de la pièce à partir du polygone
- Le **périmètre** total
- Le **point d'ancrage** central pour l'affichage du texte

## Relations entre Objets

### Hiérarchie Spatiale

```
Company (Entreprise)
  └── Building (Bâtiment)
        ├── Floor 1 (Étage 1)
        │     ├── Room 1.1 (Pièce 1.1)
        │     │     ├── Workplace 1.1.1 (Poste de travail)
        │     │     └── Item 1.1.1 (Équipement)
        │     └── Room 1.2 (Pièce 1.2)
        └── Floor 2 (Étage 2)
              └── Room 2.1 (Pièce 2.1)
```

### Relations Clés

1. **Building → Floor** : Un bâtiment contient plusieurs étages (relation 1-N)
2. **Floor → Room** : Un étage contient plusieurs pièces (relation 1-N)
3. **Room → Workplace** : Une pièce contient plusieurs postes de travail (relation 1-N)
4. **Room → Item** : Une pièce contient plusieurs équipements (relation 1-N)
5. **Room ↔ Person** : Relation many-to-many via `roomAffectation`

### Relations Optionnelles

- **Building → BuildingType** : Catégorisation des bâtiments
- **Room → RoomType** : Catégorisation des pièces (bureau, salle de réunion, etc.)
- **Building → Campus** : Regroupement de bâtiments
- **Room/Floor/Building → Organization** : Affectation organisationnelle
- **Room/Floor/Building → CostCenter** : Affectation comptable


## Concepts Avancés

### 1. Propriétés Calculées

Certaines propriétés sont **calculées automatiquement** par le système et ne peuvent pas être modifiées directement :

**Exemples de calculs automatiques** :
- **Nombres d'objets** : `roomsCount`, `workplacesCount`, `peopleCount` (comptages agrégés)
- **Surfaces** : `totalSurface` (somme des surfaces enfants), `area` d'une pièce (calculée depuis sa géométrie)
- **Géométrie** : `perimeter` (périmètre), `textAnchor` (centre géométrique pour affichage)

Ces propriétés sont marquées comme **calculées** `[c]` et **en lecture seule** `[ro]` dans les définitions du schéma.

### 2. Données Maîtres (Master Data)

Les objets marqués comme **Master Data** sont des données de référence partagées et configurables :

**Master Data = true** (données de configuration) :
- **Objets spatiaux** : `building`, `floor`
- **Types et catégories** : `buildingType`, `roomType`, `itemType`, `workplaceType`
- **Organisations** : `organization`, `costCenter`
- **Dimensions métier** : `dimension`, `dimensionType`

**Master Data = false** (données opérationnelles) :
- **Instances spatiales** : `room` (espaces spécifiques)
- **Postes et équipements** : `workplace`, `item`
- **Affectations** : `roomAffectation`, `workplaceAffectation`

### 3. Données de Reporting

Les objets de reporting sont des **agrégations précalculées** pour faciliter l'analyse et le reporting :

**Format** : Croisement de deux dimensions (ex: `dimension × building`)

**Objets de reporting disponibles** :
- `dimensionBuilding`, `dimensionFloor`, `dimensionRoom`
- `organizationBuilding`, `organizationFloor`
- `roomTypeBuilding`, `roomTypeFloor`
- `costCenterBuilding`, `costCenterFloor`

Ces objets contiennent des propriétés calculées agrégées (surfaces, comptages, etc.) pour chaque combinaison.

### 4. Relations Many-to-Many

Les relations **many-to-many** (plusieurs-à-plusieurs) utilisent des **objets intermédiaires** qui peuvent porter des propriétés additionnelles :

**Exemples de relations** :
- **Personne ↔ Pièce** : `roomAffectation`
- **Personne ↔ Poste de travail** : `workplaceAffectation` (avec taux d'occupation, taux par jour)
- **Personne ↔ Dimension** : `dimensionToPerson` (avec priorité)
- **Personne ↔ Bâtiment** : `personToBuilding`
- **Type de pièce ↔ Groupe** : `roomTypeGroupToRoomType`

Ces objets intermédiaires permettent d'ajouter des métadonnées sur la relation elle-même.

### 5. Authentification et Sécurité

⚠️ **Important** : Toutes les opérations de récupération d'entités nécessitent une **authentification**.

**Filtrage automatique des données** :
- **Scope entreprise** : Les utilisateurs ne voient que les données de leur entreprise
- **Permissions de sécurité** : Filtrage selon les profils de sécurité
- **Rôles et profils** : Accès différencié selon les rôles

Le système applique automatiquement ces filtres lors de chaque requête API.

### 6. Unités de Mesure

Surfy supporte nativement différentes unités avec gestion automatique :

**Types d'unités disponibles** :
- **Distance** : mètres, centimètres, etc.
- **Surface** : mètres carrés (par défaut)
- **Poids** : kilogrammes (pour empreinte carbone)
- **Devise** : selon la configuration de l'entreprise
- **Pourcentage** : 0-1 ou 0-100 selon le type
- **Dates** : date simple ou datetime avec timezone

Les conversions sont gérées automatiquement par le système selon les préférences utilisateur.

### 7. Options de Propriété

Les propriétés dans le schéma peuvent avoir plusieurs **modificateurs** :

**Modificateurs disponibles** :
- `[*]` = **mandatory** (obligatoire) : La propriété doit avoir une valeur
- `[ro]` = **readOnly** (lecture seule) : Ne peut pas être modifiée directement
- `[c]` = **calculated** (calculée) : Valeur dérivée automatiquement
- `[tech]` = **technical** (technique) : Propriété système (id, timestamps)

**Combinaisons courantes** :
- `[*,ro]` : Obligatoire et lecture seule (ex: clés primaires)
- `[c,ro]` : Calculée et lecture seule (ex: propriétés agrégées)
- `[*]` : Obligatoire à la création (ex: nom, couleur)

## Principes d'Utilisation

### 1. Query Nodes : Récupération Optimisée

Les APIs Surfy utilisent le concept de **Query Nodes** pour spécifier exactement quelles données récupérer.

**Principe de base** : Ne récupérer que les propriétés nécessaires.

**Avantages** :
- **Performance** : Pas de sur-fetching (over-fetching)
- **Type safety** : TypeScript assure la cohérence des types
- **Navigation relationnelle** : Récupération des objets liés en une seule requête
- **Filtrage** : Application de filtres de sélection

**Structure d'un Query Node** :
- `name` : Nom de l'objet à récupérer
- `_` : Liste des propriétés à inclure
- `filters` : Conditions de filtrage (optionnel)

### 2. Navigation dans les Relations

**Principe** : Éviter les requêtes multiples en cascade (problème N+1).

**Bonne pratique** : Utiliser la **récupération imbriquée** (nested queries) pour obtenir les objets liés en une seule requête API.

**Exemple de hiérarchie** :
- Récupérer un bâtiment avec ses étages
- Récupérer un étage avec ses pièces
- Récupérer une pièce avec ses points de contour
- Récupérer plusieurs niveaux en une seule requête

### 3. Filtrage des Données

Les Query Nodes supportent le **filtrage** pour limiter les résultats :

**Types de filtres disponibles** :
- Égalité (`eq`)
- Inégalité (`ne`)
- Appartenance à une liste (`in`)
- Comparaisons (`gt`, `gte`, `lt`, `lte`)
- Patterns de texte (`like`)

**Combinaisons** : Plusieurs filtres peuvent être combinés (AND logique).

### 4. Type Safety avec TypeScript

**Principe fondamental** : Surfy génère automatiquement tous les types TypeScript depuis le schéma.

**Avantages** :
- **Autocomplétion** : L'IDE suggère les propriétés disponibles
- **Vérification à la compilation** : Erreurs détectées avant l'exécution
- **Documentation inline** : Types documentés directement dans le code
- **Refactoring sûr** : Les modifications de schéma se propagent automatiquement

**Types générés** :
- Entités : `Surfy.Building`, `Surfy.Floor`, `Surfy.Room`, etc.
- Query Nodes : `BuildingQueryNode`, `FloorQueryNode`, etc.
- Propriétés : `BuildingScalarProperties`, `FloorScalarProperties`, etc.

### 5. Gestion des Erreurs

**Bonnes pratiques** :
- Toujours vérifier si une entité existe après récupération
- Gérer les cas où les données ne sont pas trouvées
- Implémenter des try/catch pour les opérations API
- Fournir des messages d'erreur explicites

**Points de vigilance** :
- Les droits d'accès peuvent limiter les données visibles
- Les filtres de sécurité sont appliqués automatiquement
- Une requête peut retourner zéro résultat même si les données existent (droits insuffisants)

## Ressources Supplémentaires

### Documentation Utilisateur

- **📚 Référence des Entités** : [Documentation complète des propriétés](https://help.surfy.pro/entities/intro) - Détails de toutes les propriétés de chaque objet
- **Guide Utilisateur** : [Documentation Surfy](https://help.surfy.pro/) - Documentation complète de la plateforme

### Documentation Technique (Développeurs)

Pour les développeurs travaillant sur le projet Surfy, la documentation technique interne est disponible dans le dépôt du projet et couvre :

- Guide du système de génération
- Documentation du schéma (multi-langue)
- Règles de développement
- Guide de traduction
- Définitions du schéma et types générés

## Conclusion

Le schéma de Surfy offre une architecture robuste et type-safe pour manipuler les données spatiales et organisationnelles.

### Concepts Clés

La **hiérarchie spatiale** est le concept fondamental :
- **Company** (Entreprise)
  - **Building** (Bâtiment)
    - **Floor** (Étage)
      - **Room** (Pièce/Espace)
        - **Workplace** (Poste de travail)
        - **Item** (Équipement)

### Principes Fondamentaux

1. **Source unique de vérité** : Le schéma centralisé génère tout automatiquement
2. **Type safety** : TypeScript garantit la cohérence à tous les niveaux
3. **Query Nodes optimisés** : Récupérer uniquement les données nécessaires
4. **Relations imbriquées** : Éviter les requêtes multiples (problème N+1)
5. **Authentification obligatoire** : Toutes les opérations sont sécurisées
6. **Propriétés calculées** : De nombreuses valeurs sont dérivées automatiquement
7. **Multi-langue** : Support natif des traductions

### Pour Aller Plus Loin

- Consultez la [documentation des entités](https://help.surfy.pro/entities/intro) pour le détail de toutes les propriétés
- Explorez les types générés automatiquement pour voir les structures disponibles
- Référez-vous aux guides techniques pour les aspects avancés

---

**Note** : Ce document présente les concepts généraux. Pour les détails d'implémentation et les listes complètes de propriétés, consultez la [documentation en ligne](https://help.surfy.pro/entities/intro).

