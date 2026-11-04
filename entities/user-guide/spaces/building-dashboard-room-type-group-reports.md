---
sidebar_position: 1
sidebar_label: Dashboard bâtiment — rapports Groupes de typologie
---

# Dashboard bâtiment — rapports Groupes de typologie

Sur le **Dashboard bâtiment** d’un <OT code="building" />, l’onglet **Groupes de typologie** regroupe des rapports qui croisent les **groupes de typologie d’espaces** et les **services** (organisations de niveau 1). Vous pouvez y affiner la lecture avec un **filtre rapport session** : masquer des lignes ou des colonnes pour la durée de votre session, sans modifier les données du bâtiment.

## Prérequis

- Accès au **Dashboard bâtiment** (mêmes droits qu’aujourd’hui pour consulter ces rapports).

## Ouvrir les rapports

1. Ouvrez la fiche du <OT code="building" /> concerné.
2. Ouvrez la vue <LSV code="building:dashboard" /> (**Tableau de bord**).
3. Sélectionnez l’onglet **Groupes de typologie**.
4. Dépliez le rapport voulu :
   - **Types de surface par service**
   - **Répartition des types de surface par service**
   - **Ratio m²/PdT par service**

Le rapport **Types de surface par niveau** (autre onglet du même thème) n’est **pas** concerné par le masquage de colonnes **Service** décrit ci-dessous.

## Filtre rapport session

Les masquages décrits sur cette page :

- s’appliquent **uniquement à votre session** (rechargement de la page ou nouvelle visite : tout est réaffiché) ;
- ne modifient **pas** les données enregistrées dans Surfy ;
- synchronisent le **graphique** et le **tableau de données du rapport** lorsque les deux sont affichés.

Vous pouvez combiner **barrer une série** (ligne) et **barrer un service** (colonne ou **clic graphique**) sur les rapports concernés.

## Barrer une série (ligne rapport)

Pour retirer un **groupe de typologie** du graphique :

- cliquez l’entrée correspondante dans la **légende** du graphique, **ou**
- cliquez la **ligne** de ce groupe dans le **tableau de données du rapport**.

La ligne apparaît **barrée** dans le tableau ; la série disparaît du graphique. Recliquez pour la réafficher.

Le tableau peut aussi proposer des bascules (**chiffres précis**, **afficher / masquer les m²**, **recalculer les pourcentages** selon les séries encore visibles), comme sur les autres rapports du Dashboard bâtiment déjà décrits dans les [Nouveautés](/changelog/app).

## Barrer un service (colonne rapport)

Sur **Types de surface par service**, **Répartition des types de surface par service** et **Ratio m²/PdT par service** :

1. Repérez le **tableau de données du rapport** sous le graphique (colonnes **Service**, y compris **Non affecté**).
2. Cliquez l’**en-tête** de la colonne du service à masquer.
3. La colonne est **barrée et atténuée** ; ce service **n’apparaît plus** dans le graphique.
4. Recliquez l’en-tête pour **restaurer** le service.

Si vous masquez **tous** les services, le graphique peut apparaître **vide** : c’est normal.

## Clic graphique pour barrer un service

Sur les mêmes trois rapports, vous pouvez aussi **barrer un service** en cliquant le **libellé de service** sous le graphique (axe des abscisses, sous les barres).

1. Au-dessus du **tableau de données du rapport**, repérez la barre d’outils du tableau (à côté des autres bascules).
2. L’option **Activer le clic sur le graphique pour masquer un service** est **activée par défaut** : un clic sur un **libellé Service** sous le graphique **masque** ce service (colonne barrée dans le tableau, service retiré du graphique).
3. Désactivez l’option (**Désactiver le clic sur le graphique pour masquer un service**) si vous ne voulez plus masquer de service depuis le graphique ; les clics sur ces libellés n’ont alors plus cet effet.
4. Pour **réafficher** un service masqué depuis le graphique, recliquez l’**en-tête** de colonne **Service** dans le tableau (un clic sur le libellé sous le graphique **ne restaure pas** un service déjà masqué).

Le **filtre rapport session** et la **synchronisation graphique / tableau** restent les mêmes que pour le masquage par colonne.

## Limites

- Aucune **persistance** : vos choix ne sont pas enregistrés pour les prochaines visites.
- Pas de masquage de colonne **Service** sur **Types de surface par niveau**.
- Pas d’export Excel depuis cet onglet.

## Voir aussi

- [Nouveautés (version alpha)](/changelog/app-alpha) — dernières évolutions du Dashboard bâtiment.
- [Groupe de typologie d'espace](/entities/surfy/global-admin/room-type-group) — définition des groupes utilisés dans ces rapports.
