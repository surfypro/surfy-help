---
sidebar_position: 1
---
# Créer un centre de coût

Les centres de coût permettent la refacturation des espaces, des personnes et des ratios surfaciques par poste de travail aux différentes entités.
Surfy propose un calcul automatique des clés de répartition et surfaces cumulées par centre de coût sur un ou plusieurs bâtiments afin de répartir et refacturer les charges du ou des bâtiments au prorata des surfaces d'occupation ou des personnes affectées à ces espaces.

Pour plus d'informations sur le calcul de la refacturation dans Surfy, voir le chapitre [Refacturer les espaces dans Surfy](/docs/tutorials/cost-distribution-by-cost-center/create.md).

## Créer un centre de coût

 Pour créer un centre de coût, depuis le menu de gauche,

 -  cliquer sur "Administration", "Typologies", "centres de coût" puis "Créer un centre de coût"
 -  renseigner le <P code="costCenter:name" /> du centre de coût et sa <P code="costCenter:color" /> de représentation sur les plans
 -  pour les centres de coût à ventiler (par exemple les parties communes), indiquer si la ventilation est distribuée par étage ou par bâtiment
 -  valider la création


## Attribuer un centre de coût

Le centre de coût peut être attribué à un espace, une personne ou un poste de travail.
Pour rattacher une entité à un centre de coût, celui ci doit d'abord être créé.

On définit le "type de distribution des coûts" pour définir si un espace est refacturé entièrement à son centre de coût, ou aux centres de coût des postes de travail de l'espace au prorata de chacun.

### Type de distribution des coûts

Le type de distribution des coûts permet de refacturer la surface entière de l'espace à son centre de coût (centre de coût par espace) ou de refacturer le ratio de surface de chaque poste de travail au centre de coût du poste de travail (centre de coût par poste de travail). 

Le "type de distribution des coûts" de l'espace ou des postes de travail est indispensable pour calculer la refacturation de l'espace ou du poste de travail. S’il n’est pas présent ou pas adapté, la répartition sera nulle ou mauvaise. 

:::tip Bon à savoir
On peut panacher les types de distribution des coûts et choisir pour chaque espace le meilleur calcul de refacturation.
:::

Si on désire ne pas facturer un espace ou un poste de travail, il suffit de laisser le champ "type de distribution des coûts" vide. Cela peut être le cas des parties communes à la charge du propriétaire qu’on ne veut pas compter dans la refacturation, par exemple. 

En revanche, si on attribue un "type de distribution des coûts" mais pas de centre de coût, Surfy pointe le manque d’information et vous permet d’y remédier rapidement. 

On utilise un "centre de coût par espace" pour tous les espaces qui n’ont pas de poste de travail (salles de réunion, sanitaires, circulations, Reprographie, etc).

On peut utiliser un "centre de coût par poste de travail" dans les espaces qui possèdent des postes de travail (bureaux fermés ou espaces ouverts) dont le centre de coût est différent de celui de l'espace (par exemple, un poste de travail facturé à l'IT dans un espace facturé à la comptabilité).

Les postes de travail auront alors leur ratio de surface refacturé à leur centre de coût et non à celui de l'espace.
Le centre de coût des postes de travail concernés doivent être renseignés sous peine de ne pas être facturés.

Si tous les postes de travail d'un même espace sont au centre de coût de l'espace, on peut utiliser indifféremment le centre de coût par espace ou par poste de travail, le résultat est le même. 

Si on ne refacture que les surfaces entières des espaces, toutes les pièces doivent être configurées en "centre de coût par espace".


On peut importer ces informations en masse, par fichier Excel. Le type de distribution peut facilement être attribué en fonction de la typologie des espaces. 


### Attribuer un centre de coût et un type de distribution des coûts à un espace

-   cliquer dans l'espace concerné
-   cliquer sur "modifier" pour modifier les informations de l'espace
-   cliquer sur l'icône "crayon" du "centre de coût" de l'espace
-   sélectionner le centre de coût à attribuer à l'espace
-   cliquer sur l'icône "crayon" du "type de distribution des coûts"
-   sélectionner le type de distribution des coûts à attribuer à l'espace
-   sauvegarder les modifications

Une fois les espaces modifiés, il est nécessaire de "recharger les données du plan" en cliquant sur l'icône en haut à droite de l'écran, puis de rafraichir (F5). Les données cumulées sont alors mises à jour.

On peut importer en masse les centres de coût et les types de distribution des coûts à partir d'un fichier Excel. 

### Attribuer un centre de coût à une personne

Pour attribuer un centre de coût à une personne, il faut "modifier la personne":

-   rechercher la personne par la loupe de recherche, sous le logo de l'entreprise en haut à gauche de l'écran
-   cliquer sur le résultat de la recherche pour afficher la fiche de la personne
-   cliquer sur le menu contextuel (case grise sous la recherche) puis sur "Modifier la personne XXX"
-   cliquer sur l'icône "crayon" du "Centre de coût et sélectionner le centre de coût dans la liste
-   "sauvegarder" les modifications

### Attribuer un centre de coût à un poste de travail

Pour attribuer un centre de coût à un poste de travail depuis le plan,

-   cliquer sur le poste de travail à rattacher
-   dans la fiche du poste de travail à gauche du plan, cliquer sur "Modifier"
-   cliquer sur l'icône "crayon" du "Centre de coût" et sélectionner le centre de coût dans la liste
-   "sauvegarder" les modifications

