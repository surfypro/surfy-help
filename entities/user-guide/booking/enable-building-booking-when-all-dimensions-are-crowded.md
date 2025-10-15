# Fonctionnalité de réservation par bâtiment quand toutes les dimensions sont surchargées

## À quoi sert cette fonctionnalité ?

La fonctionnalité **"Activer la réservation par bâtiment quand toutes les dimensions sont surchargées"** offre une solution de secours intelligente lorsque toutes les zones (dimensions) de votre entreprise atteignent leur seuil de surcharge. Elle permet aux collaborateurs de réserver directement un poste de travail en choisissant un étage spécifique dans le bâtiment.

## Comment ça fonctionne ?

### Principe général

Cette fonctionnalité fonctionne en complément de la fonctionnalité "Activer la surcharge des dimensions pour la réservation". Elle s'active automatiquement lorsque :

1. **Toutes les dimensions sont surchargées** : Chaque zone dépasse son seuil de surcharge défini (par défaut 85%)
2. **Aucune zone n'est disponible** : Le système ne peut plus proposer de zones avec des postes libres
3. **La fonctionnalité est activée** : L'administrateur a activé cette option dans les paramètres de l'entreprise

### Système de fallback (solution de secours)

Lorsque toutes les dimensions sont surchargées, le système :

1. **Affiche un message informatif** : "Toutes les zones sont surchargées. Vous pouvez réserver directement dans le bâtiment en choisissant un étage."

2. **Propose la réservation par étage** : Pour chaque bâtiment disponible, le collaborateur peut :
   - Voir tous les étages du bâtiment
   - Consulter le nombre de postes disponibles par étage
   - Choisir directement l'étage souhaité
   - Accéder à une carte interactive pour sélectionner un poste spécifique

3. **Affiche les statistiques** : Le système montre le nombre de postes réservés et disponibles pour chaque étage

## Comportement selon l'activation

### Sans activation (comportement standard)
- Si toutes les dimensions sont surchargées, Le collaborateur ne peut pas réserver en dehors de ses zones surchargées
- Aucune alternative n'est proposée
- Le collaborateur doit attendre qu'une zone se libère

### Avec activation
- Si toutes les dimensions sont surchargées, le système propose automatiquement la réservation par bâtiment
- Le collaborateur peut choisir un étage et un poste spécifique
- La réservation reste possible même en cas de surcharge totale des zones

## Exemple concret

Imaginons un collaborateur avec ces zones prioritaires :
- **Zone Marketing** (priorité 1) - 95% d'occupation (surchargée)
- **Zone Développement** (priorité 2) - 90% d'occupation (surchargée)  
- **Zone Commercial** (priorité 3) - 88% d'occupation (surchargée)

**Sans activation** : Le collaborateur ne peut pas réserver car toutes les zones sont surchargées.

**Avec activation** : Le système affiche :
1. **Message informatif** : "Toutes les zones sont surchargées. Vous pouvez réserver directement dans le bâtiment en choisissant un étage."

2. **Options de réservation par bâtiment** :
   - **Bâtiment A** :
     - Étage 1 : 12 postes disponibles sur 20
     - Étage 2 : 8 postes disponibles sur 15
     - Étage 3 : 5 postes disponibles sur 10
   - **Bâtiment B** :
     - Étage 1 : 6 postes disponibles sur 12
     - Étage 2 : 3 postes disponibles sur 8

3. **Interface de sélection** : Le collaborateur clique sur "Réserver un poste de travail au [Nom de l'étage]" et accède à une carte interactive pour choisir son poste.


## Configuration

Cette fonctionnalité se configure au niveau de l'entreprise dans les paramètres de configuration. Elle fonctionne en complément de la fonctionnalité "Activer la surcharge des dimensions pour la réservation".

### Prérequis
- La fonctionnalité "Activer la surcharge des dimensions pour la réservation" doit être activée
- Les bâtiments et étages doivent être configurés dans le système
- Les postes de travail doivent être associés aux étages


## Relation avec les autres fonctionnalités

Cette fonctionnalité fonctionne en complément de :

1. **"Activer la surcharge des dimensions pour la réservation"** : Détermine quand les zones sont considérées comme surchargées
2. **Système de priorités** : Respecte les zones prioritaires des collaborateurs quand elles sont disponibles
3. **Réservation par étage** : Utilise le système existant de réservation par bâtiment et étage

L'activation de cette fonctionnalité garantit que vos collaborateurs peuvent toujours réserver un poste de travail, même dans les situations de forte affluence, tout en optimisant l'utilisation de vos espaces de travail.
