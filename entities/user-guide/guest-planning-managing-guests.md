# Gérer les invités : rôle du « Person Type »

La gestion des invités dans Surfy s’appuie sur un **type de personne** (dans les données de référence) pour identifier qui est considéré comme un invité.

## Pré-requis : un type de personne « invité »

Pour que les fonctionnalités de **planning des invités** fonctionnent, vous devez disposer d’un <OT code="personType" /> dont le <P code="personType:code" /> vaut :

- **`GUEST`**

Le code est comparé **sans tenir compte des majuscules/minuscules** (par exemple `guest` fonctionne aussi), mais il est recommandé d’utiliser `GUEST` pour rester cohérent.

### Recommandation

- Ne créez **qu’un seul** type de personne avec le code `GUEST` (évitez les doublons).

## Comportement par défaut (ce que Surfy fait automatiquement)

Quand le type `GUEST` existe :

- La vue <LIV code="personWorkingLocation:guest-planning" /> liste les invités en se basant sur ce type.
- Lors de la création d’un invité depuis le planning, Surfy associe automatiquement la personne au type `GUEST`.

Si le type `GUEST` n’existe pas :

- Un message d’avertissement s’affiche dans le panneau de création.
- La création d’un invité est **désactivée** tant qu’aucun type `GUEST` n’est disponible.

## Dépannage

- **Je ne vois aucun invité dans le planning** : vérifiez que les personnes concernées ont bien un type correspondant à `GUEST`.
- **Le bouton de création est grisé** : créez (ou corrigez) le <OT code="personType" /> avec le code `GUEST`.

