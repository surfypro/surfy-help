# Vue de Qualité des Données

## Vue d'ensemble

La vue de qualité des données (`DataQualityIndex`) fournit un accès centralisé à tous les rapports de qualité des données organisés selon la structure du menu de navigation principal de Surfy. Cette organisation logique et familière permet aux utilisateurs de naviguer facilement entre les différents rapports et d'identifier les problèmes de qualité des données dans le système.

## Accès

La vue est accessible depuis le module Company via l'onglet "Qualité des Données" dans la liste des vues d'index.

## Structure

### Organisation par Menu de Navigation

La vue organise les rapports de qualité des données selon la structure du menu de navigation principal de Surfy, offrant une organisation logique et familière aux utilisateurs :

#### 🏢 **Espaces (Spaces)**
- **Bâtiments (Building)** : Structure et organisation (`dq-structure`)
- **Étages (Floor)** : Validation des données d'étage
- **Salles (Room)** : Cohérence des informations de salle
- **Campus (Campus)** : Organisation des campus
- **Structure (Structure)** : Hiérarchie des structures

#### 👥 **Collaborateurs (Human)**
- **Personnes (Person)** : Détection de doublons (`dq-duplicate`)
- **Typologies (Person Types)** : Validation des types de personnes
- **Relations (Person Relations)** : Cohérence des relations entre personnes

#### 🪑 **Mobiliers (Things)**
- **Postes de travail (Workplace)** : Position et affectation (`dq-position`)
- **Objets (Item)** : Validation des objets d'inventaire
- **Typologies (Things Types)** : Cohérence des types de mobiliers

#### 🔗 **Affectations (Affectations)**
- **Affectations de postes (Workplace Affectation)** : Validation des affectations
- **Affectations de salles (Room Affectation)** : Cohérence des affectations
- **Affectations de personnes (Person to Building)** : Validation des liens

#### 🏢 **Organisations (Organizations)**
- **Entreprises (Company)** : Inventaire des lieux de travail (`dq-fix-inventory`)
- **Types d'entreprises (Company Types)** : Validation des types

#### 📅 **Plannings (Planning)**
- **Localisations de travail (Person Working Location)** : Validation des plannings
- **Réservations (Bookings)** : Cohérence des réservations

#### ⚙️ **Administration (Admin)**
- **Sécurité (Security)** : Validation des rôles et permissions
- **API (API)** : Validation des accès API
- **Authentification (Authentication)** : Validation des règles d'authentification

### Organisation Visuelle

L'interface est organisée de manière intuitive pour faciliter la navigation :

#### **Structure Hiérarchique**
- **Groupes principaux** : Les sections principales (Espaces, Collaborateurs, Mobiliers, etc.) sont clairement identifiées
- **Sous-groupes** : Les catégories spécifiques sont organisées logiquement sous chaque groupe principal
- **Entités** : Chaque type d'entité est présenté de manière distincte et accessible

#### **Éléments de Navigation**
- **Identification visuelle** : Chaque groupe a une représentation visuelle distinctive
- **Compteurs** : Le nombre d'entités dans chaque groupe est affiché clairement
- **Hiérarchie claire** : L'organisation permet de comprendre rapidement la structure
- **Navigation intuitive** : L'interface guide naturellement l'utilisateur vers les informations recherchées

#### **Présentation des Rapports**
Chaque entité présente ses rapports de manière claire :
- **Identification** : Chaque rapport est clairement identifié par son nom et sa description
- **Accès direct** : Les rapports sont directement accessibles depuis la vue principale
- **Informations contextuelles** : Chaque rapport inclut une description de son objectif et de son utilité

## Navigation

### Accès aux Rapports

Chaque rapport dans la liste est directement accessible depuis la vue principale. Vous pouvez :

- **Cliquer directement** sur un rapport pour l'ouvrir immédiatement
- **Ouvrir dans un nouvel onglet** en utilisant le clic droit pour consulter plusieurs rapports simultanément
- **Naviguer facilement** entre les rapports grâce aux liens de retour
- **Partager des rapports** en copiant l'adresse de la page

### Avantages de cette Organisation

- **Navigation intuitive** : Accès direct aux rapports depuis la vue d'ensemble
- **Flexibilité** : Possibilité d'ouvrir plusieurs rapports en parallèle
- **Efficacité** : Retour rapide à la vue principale pour consulter d'autres rapports
- **Accessibilité** : Interface adaptée à tous les utilisateurs

### Retour à la Vue d'Index

Chaque rapport individuel peut inclure un lien de retour vers cette vue d'index pour faciliter la navigation.

## Fonctionnalités

### Adaptation aux Différents Écrans

La vue s'adapte automatiquement à votre appareil pour offrir la meilleure expérience :
- **Ordinateur** : Vue complète avec tous les groupes visibles pour une navigation rapide
- **Tablette** : Interface optimisée pour la navigation tactile avec accès facile aux groupes
- **Mobile** : Organisation compacte permettant de naviguer efficacement même sur petit écran

### Filtrage et Recherche

*Fonctionnalité prévue pour les futures versions*

### Export et Reporting

*Fonctionnalité prévue pour les futures versions*

## Utilisation

### Comment Utiliser la Vue

1. **Accéder à la vue** : Naviguez vers le module Company et sélectionnez l'onglet "Qualité des Données"
2. **Explorer les groupes** : Parcourez les différentes sections organisées selon votre menu de navigation habituel
3. **Développer les sections** : Cliquez sur les sections pour voir les rapports disponibles
4. **Consulter les entités** : Chaque type d'entité présente ses rapports de qualité des données
5. **Accéder aux rapports** : Cliquez sur un rapport pour consulter les détails et effectuer les corrections nécessaires
6. **Navigation** : Utilisez les liens de retour pour revenir facilement à la vue d'ensemble

### Types de Rapports Disponibles

#### Rapports d'Entreprise
- **Inventaire des lieux de travail** : Vérifie la cohérence des données d'inventaire
- **Position des éléments** : Valide la position géographique des espaces de travail

#### Rapports de Personnes
- **Détection de doublons** : Identifie les enregistrements en double dans la base de données

#### Rapports de Bâtiments
- **Structure et organisation** : Vérifie la hiérarchie et l'organisation des bâtiments

#### Rapports d'Espaces de Travail
- **Position et affectation** : Valide la position et les affectations des espaces de travail

## Configuration

Cette vue fonctionne automatiquement sans configuration requise. Elle s'adapte automatiquement à votre organisation et ne vous montre que les rapports auxquels vous avez accès selon vos permissions.

## Relation avec les autres fonctionnalités

Cette vue s'intègre naturellement avec votre utilisation quotidienne de Surfy :

1. **Navigation familière** : Utilise la même organisation que votre menu principal pour une expérience cohérente
2. **Terminologie cohérente** : Utilise les mêmes termes et traductions que le reste de l'application
3. **Sécurité respectée** : Vous ne voyez que les rapports auxquels vous avez accès selon votre rôle dans l'organisation
