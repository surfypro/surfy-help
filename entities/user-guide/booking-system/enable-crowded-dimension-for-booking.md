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


## Configuration

Cette fonctionnalité se configure au niveau de l'entreprise dans les paramètres de configuration. Une fois activée, elle s'applique automatiquement à tous les collaborateurs lors de leurs réservations.

## Relation avec les autres fonctionnalités

Cette fonctionnalité fonctionne en complément de :

1. **"Activer la réservation par bâtiment quand toutes les dimensions sont surchargées"** : Offre une solution de secours quand toutes les zones sont surchargées
2. **Système de priorités** : Respecte les zones prioritaires des collaborateurs
3. **Réservation par étage** : Utilise le système existant de réservation par bâtiment et étage 