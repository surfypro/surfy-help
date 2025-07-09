---
draft: true

---

# Fonctionnalité de surcharge des dimensions pour la réservation

## À quoi sert cette fonctionnalité ?

La fonctionnalité **"Activer la surcharge des dimensions pour la réservation"** permet d'optimiser l'utilisation de vos espaces de travail en guidant intelligemment les réservations de postes de travail.

## Comment ça fonctionne ?

### Principe général

Lorsqu'un collaborateur souhaite réserver un poste de travail, le système analyse l'occupation de chaque zone (dimension) et propose les espaces dans un ordre optimisé pour maximiser l'utilisation de vos locaux.

### Ordre d'affichage des zones

Le système respecte deux règles principales pour l'ordre d'affichage :

1. **Priorité personnalisée** : Chaque collaborateur peut avoir des zones prioritaires définies par l'administrateur. Ces priorités sont respectées en premier.

2. **Gestion de la surcharge** : Si la fonctionnalité est activée, le système affiche d'abord les zones déjà bien occupées, puis une seule zone moins occupée.

### Seuil de surcharge

Chaque zone peut avoir un seuil de surcharge défini (par défaut 85%). Une zone est considérée comme "surchargée" quand elle dépasse ce seuil d'occupation.

## Comportement selon l'activation

### Sans activation (comportement standard)
- Toutes les zones disponibles sont affichées
- L'ordre suit uniquement les priorités personnalisées du collaborateur
- Le collaborateur peut choisir librement parmi toutes les zones

### Avec activation
- Les zones surchargées apparaissent en premier (après les priorités personnalisées)
- Une seule zone non surchargée est proposée
- L'objectif est de concentrer l'activité dans les zones déjà bien utilisées

## Exemple concret

Imaginons un collaborateur avec ces zones prioritaires :
- **Zone Marketing** (priorité 1)
- **Zone Développement** (priorité 2) 
- **Zone Commercial** (priorité 3)

Et ces taux d'occupation actuels :
- Zone Marketing : 90% (surchargée)
- Zone Développement : 70% (non surchargée)
- Zone Commercial : 30% (non surchargée)

**Sans activation** : Le collaborateur verra toutes les zones dans l'ordre de ses priorités.

**Avec activation** : Le collaborateur verra :
1. Zone Marketing (priorité + surchargée)
2. Zone Développement (priorité + première zone non surchargée)

La Zone Commercial ne sera pas affichée car le système s'arrête après la première zone non surchargée.

## Avantages pour votre entreprise

### Optimisation de l'espace
- **Meilleure utilisation** : Les zones existantes sont utilisées au maximum
- **Réduction des coûts** : Moins besoin d'espaces supplémentaires
- **Cohésion d'équipe** : Les équipes se concentrent dans les mêmes zones

### Flexibilité maintenue
- **Priorités respectées** : Chaque collaborateur garde ses zones préférées
- **Choix préservé** : Le collaborateur peut toujours choisir parmi les zones proposées
- **Adaptation automatique** : Le système s'adapte à l'occupation en temps réel

## Quand utiliser cette fonctionnalité ?

### À éviter si vous préférez :
- Laisser le choix total aux collaborateurs
- Éviter toute contrainte sur les réservations
- Maintenir une flexibilité maximale

## Configuration

Cette fonctionnalité se configure au niveau de l'entreprise dans les paramètres de configuration. Une fois activée, elle s'applique automatiquement à tous les collaborateurs lors de leurs réservations.

## Impact sur l'expérience utilisateur

- **Transparent** : Le collaborateur ne voit que les zones qui lui sont proposées
- **Intuitif** : L'ordre d'affichage suit ses priorités personnalisées
- **Efficace** : Moins de zones à parcourir pour faire son choix
- **Optimisé** : Les réservations contribuent à une meilleure utilisation de l'espace

## Terminologie officielle

Selon les traductions françaises de l'application :

- **Label** : "Activer la surcharge des dimensions pour la réservation"
- **Description** : "Permet d'activer la fonctionnalité de surcharge des dimensions pour les réservations, permettant de définir des seuils d'occupation au-delà desquels un espace est considéré comme surchargé et active la priorité sur les affectations des quartiers" 