# Restreindre la visibilité des scénarios par rôle

Ce guide explique comment fonctionne la propriété <P code="jupRole:excludeScenarios" />.

## Ce que fait ce réglage

Quand la restriction est active pour un utilisateur, Surfy limite sa visibilité aux bâtiments principaux (sans scénarios), ainsi qu’aux étages de ces bâtiments.

## Conditions d’activation du comportement

Le filtrage des scénarios s’applique uniquement si les 2 conditions suivantes sont réunies :

- l’utilisateur n’a **aucun rôle de contenu** qui lui attribue des bâtiments ou des étages ;
- tous les rôles de l’utilisateur ont <P code="jupRole:excludeScenarios" /> activé.

## Point important de configuration

Dans l’implémentation actuelle, le filtrage n’est déclenché que si **tous** les rôles de l’utilisateur ont <P code="jupRole:excludeScenarios" /> activé, à condition qu’aucun rôle de contenu ne donne déjà un périmètre bâtiments/étages.

## Recommandation pratique

Pour un profil qui ne doit jamais voir les scénarios :

- activez <P code="jupRole:excludeScenarios" /> sur tous les rôles attribués à ce profil ;
- évitez d’attribuer des rôles de contenu donnant un périmètre bâtiments/étages à ce profil.
