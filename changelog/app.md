# Nouveautés

<!-- ## x Decembre 2024 - v3.4.4x ##

- La palette des couleurs possède maintenant le blanc et le noir -->

## 14 Decembre 2024 - v3.4.47 ##

- Amélioration du zoom sur les plans sur les écrans tactiles et mobiles
- Mise en place d'une entité "Légende" permettant de créer des légendes personnalisées pour les plans à sortir en image
    - Les légendes doivent être configurées et peuvent être utilisées dans les exports en image
- Les ouvertures de plans lors de la réservation des postes de travail utilisent maintenant la même fenêtre de droite
- Tableaux de bord pour avoir en fonction de la période choisie :
    - Les réservations des postes de travail par jours de la semaine
    - Les réservations des postes de travail par date
- Synchronization mis en place avec le logiciel de gestion RH Lucca
- Le choix de la langue est conservée même après la déconnexion à Surfy
- La fenêtre de sauvegarde en image prend en compte le changement d'étage
- Les plans en 3D peuvent maintenant être sauvegardés en image


## 3 Decembre 2024  - v3.4.44 ## 

- Amélioration globale de la vitesse de déplacement des objets
    - Amélioration du déplacement des points des espaces en mode édition du plan
    - Amélioration du déplacement des points de l'échelle
    - Amélioration du déplacement de la navigation dans le plan en 2D
- Les quartiers sont maintenant affichables sur les zones de texte des espaces sur le plan en 2D et dans leur info-bulle


## 30 Novembre 2024  - v3.4.43 ## 

- Les tailles des icônes de type cercle, triangle et rectangle sont maintenant uniformisées
- La taille des icônes dans les types de poste de travail est maintenant statique et fait 30cm quelque soit la taille des icônes dans l'échelle du plan 
- Les réservations des postes de travail en flex peuvent maintenant être réalisées sur tout un bâtiment, il faut affecter les personnes directement sur le bâtiment et mettre les postes de travail en flex et réservables
- Le nombre de jours réservables dans le planning est maintenant paramètrable depuis les propriétés de l'entreprise


## 20 Novembre 2024  - v3.4.40 ## 

- Une icône avertit de la configuration en mode Quartier (Dans la barre de couleur du bâtiment au dessus du plan, à la suite du nom de la vision en cours). Cliquer sur cette icône sort du mode Quartier.
- Mise en place de la réservation des parkings dans le bâtiment d'affectation, sur la page du planning. Les codes à utiliser sur les types d'espaces sont PARKING-CAR, PARKING-ELECTRIC-CAR et PARKING-PRM.

## 13 Novembre 2024  - v3.4.38 ## 

- Amélioration du moteur 3d cuby.
    - Possibilité d'activer ou non l'affichage des étages fantômes depuis les plans 3d.
    - Le plan 3D du bâtiment sur le plan se centre mieux et possède une meilleure luminosité
    - Les espaces entre les étages prennent en compte maintenant la hauteur sous plafond de l'étage et il est possible d'avoir 0m d'écart à l'affichage entre les étages 
- Les rapports de qualité des données des personnes ont été modifiés
    - Le rapport des personnes sans affectation exclut maintenant les espaces, les postes de travail, les bâtiments et les quartiers
    - Le rapport des personnes sans affectation mais affectées à un bâtiment, exclut maintenant les affectations aux espaces, postes de travail et quartiers

## 5 Novembre 2024  - v3.4.36 ## 

- Affichage en couleurs dans la boite de sélection des typologies d'espaces

## 29 Octobre 2024  - v3.4.32 ## 
- Modification des palettes de choix des couleurs
- Ajout des couleurs dans la page de la "hiérarchie des organisations"
- La vision du plan "Directions" affiche maintenant le nom de la Direction et celui du service sur le plan
- Ajout d'un "nom d'affichage" pour les espaces, utile pour afficher le nom usuel des salles de réunion par exemple
    - Ce nom peut être recherché ou affiché sur la plan
- Mise en place de la page "Salles de réunion" permettant de visualiser toutes les salles de réunions du bâtiment rapidement
    - Les salles de réunions affichées sont les types d'espace regroupés dans un groupe de type d'espace avec le code MEETING
- Lors de la création d'une entité il y a maintenant un mode permettant de "modifier après la création". Le mode "modifier la fiche après la création" est le mode par defaut. Il vient se rajouter aux modes "continuer à créer" ou "ouvrir après la création".
- Mise en place des icones de fontawesome en version 6.6.0

## 3 Octobre 2024  - v3.4.22 ## 
- Les bâtiments peuvent être maintenant recherchés dans la barre de recherche globale
- Mise en place des campus permettant de regrouper plusieurs bâtiments
    - Ajout d'une icône permettant d'avoir la vue groupée des bâtiments dans les raccourcis du haut du menu
- Ajout de la politique de confidentialité dans la page de login
- Dans le mode plan en 2d, les info bulles apparaissent maintenant à gauche des formes pour éviter l'effet de tremblement de l'écran
- Dans l'association automatique à une plateforme via les règles d'authentification, seule le type de connection de la règle permet l'association avec la plateforme 
- Les regroupements de typologies d'espaces ont maintenant, depuis l'onglet du plan, une aide qui rappelle les typologies incluses ou non dans le regroupement.

## 6 Septembre 2024  - v3.4.13 ## 

- Mise en place des icones de fontawesome en version 6.5.2
- Mise en place d'un mode avancé pour la visualisation des types d'objet en 3D afin de les prévisualiser sans les axes et la zone d'occupation au sol
- La page de connexion comporte maintenant un lien d'inscription et un lien vers le site internet de Surfy
- Amélioration des visualisations en 3D pour retirer l'effet de l'écran qui tremble
- Mise a jour des systemes de connexions a Surfy en utilisant openid connect
- La vision centre de coûts ouvre sur les centre de coûts des espaces par default
- Amélioration des imports automatiques en créant des couleurs automatiquement pour les nouvelles entités
- Ajout du nom de la vision en cours sur le texte d'info bulle pour changer les visions sur la vue du plan
- Ajout du nom de la vision en cours en haut de la page du plan entre parenthèses après le nom du l'étage en 2D en 3D et sur le bâtiment en 3D
- Ajout de l'adresse du bâtiment dans la légende de l'image du plan
- Ajout d'une option depuis le téléchargement des images du plan pour prévisualiser la légende avant la sortie en image
- Amélioration de la navigation des étages en 3D


## 5 Juin 2024  - v3.3.233 ## 

- La tuile de l'entreprise possède maintenant un lien vers le tableau de bord de l'entreprise
- Une personne peut réserver des postes de travail en flex dans plusieurs quartiers 
- L'icône de vision des plans est maintenant la première de la liste des icones verticales
- Les portes sont maintenant prises en compte dans les scenarios et exports d'images 2d
- Les cases à cocher pour sélectionner les objets ou dimensions sur le plan sont plus lisibles.

## 30 Avril 2024  - v3.3.232 ## 

- Depuis le plan en édition, le raccourci pour fusionner des sommets est maintenant shift + w
- L'entreprise des personnes se nomme maintenant entreprise prestataire.
    - Il est possible d'associer une entreprise prestataire à un type d'objet et d'y associer un prestation (Par exemple : Extincteurs en gestion par Dubernard)
    - Il est possible d'associer une entreprise prestataire à un type d'espace (par exemple Otis pour l'entretien des ascenseurs)
- Il est possible de créer une intervention sur un objet par un prestataire avec une date et une description
- Les prestataires sont visibles sur le plan sur la fiche des objets et des espaces
- Création d'un rapport de qualité des données sur les objets, permettant de trouver les objets de l'inventaire physique qui ne sont pas dans le même espace que le poste de travail auquel ils sont rattachés
- Création d'un rapport de qualité des données sur les espaces permettant de trouver les espaces qui ont la capacité hors assises égale au nombre de places assises afin de régulariser la situation et remettre la capacité hors assises à 0 et avoir une capacité totale correcte

## 15 Avril 2024  - v3.3.229 ## 

- La propriété sur l'espace Capacité se nomme maintenant Capacité hors assises
- Des nouvelles propriétés calculées sont maintenant disponible
    - La capacité totale qui est la somme des capacités hors assises des espaces et des places assises (attention à bien supprimer les capacités hors assises des espaces qui font doublons avec les places assises pour avoir une capacité totale correcte)
    - Le taux de places assises par postes de travail
- Mise en place des groupes de types d'espace permettant de grouper des types d'espace et donc de grouper les indicateurs par groupe de types d'espace. Le groupement prend en compte une inclusion de type d'espace ou une exclusion. Par exemple :
    - Surface totale hors parking
    - Nombre de places de parking (pmr, vélo, moto, éléctrique, ...)
    - Capacité totale hors restauration
    - Capacité totale des espaces de réunion


## 10 Avril 2024  - v3.3.228 ## 

- Il est maintenant possible de recalculer les données du bâtiment directement depuis la carte de selection d'un calque d'affectation
- Dans la réservation des postes de travail seuls les postes de travail cochés "réservables" sont réservables. Les postes de travail non réservables sont transparents, inertes et n'ont pas texte d'affichage
- Il est possible de réserver des postes de travail en étant présent dans plusieurs quartiers
- Dans la recherche globale, les liens des vues nons disponibles en fonction des rôles ne sont plus cliquables


## 4 Avril 2024  - v3.3.224 ## 

- Il est maintenant possible de rentrer le nombre d'affectations dans un quartier manuellement sans devoir créer et associer des personnes réelles dans Surfy

## 25 Mars 2024  - v3.3.223 ## 

- Double confirmation lors de la suppression des échelles du plan
- Ajout du prix sur les objets en plus des types d'objets
- Ajout du jour courant dans le planning des réservations des espaces pour la réservation des postes de travail en flex
- Voir les affectations aux bâtiments depuis le moteur de recherche quand une personne est recherchée
- Le rapport de qualité des données des personnes "Personnes affectées à un bâtiment sans affectation de poste de travail" exclu maintenant les personnes "non affectables"
- Mise en place d'un rapport de qualité des données sur les espaces permettant de trouver les espaces sans points ou avec 1 ou 2 points uniquement
- Fixes
    - Amélioration des info-bulles avec plusieurs points qui étaient tronqués

## 7 Mars 2024  - v3.3.219 ##

- Ajout d'un lien pour aller sur Surfy Academy depuis le menu du profil

## 27 Février 2024 - v3.3.217 ##

- Mise en place d'une option permettant de changer la qualité de l'export de l'image du plan en 2D.

<!-- 
- Mise en place d'un export des images en PDF
** mise en place du vault pour la gestion des secrets **
-->


## 15 Février 2024 - v3.3.211 ##

- Amélioration de la navigation dans les plans via les appareils tactiles
    - Activation du zoom via les gestes tactiles
    - Amélioration de la sélection des formes
    - Désactivation des infos-bulles 
- Possiblité de voir les icônes de sécurité (Surfy2) dans l'export en PDF de l'inventaire   
- Sur le plan, cliquer sur le texte des espaces, des postes de travail ou des objets n'a pas d'incidence
- Amélioration du menu de gauche
    - Rajout d'icones pour les options du premier niveau
    - Il est maintenant possible de réduire le menu de gauche pour avoir plus d'espace sur le reste de la page
- Amélioration des authentifications
    - La connexion via google ouvre directement la page de connexion google via le popup
    - Amélioration de la gestion de certificats pour la connexion via Microsoft 365
- Harmonisation de l'affichage de la vue photos des bâtiments en fonction du type de bâtiment (vertical, horizontal ou sans images)
- L'icône en haut à gauche pour voir le tableau de bord de l'entreprise n'est plus directement disponible, il faut passer par le menu administration > entreprises pour y accèder


## 13 Janvier 2024 - v3.3.208 ##

- Il n'est plus possible d'affecter une personne sur un poste de travail en flex ou de passage via l'interface du plan
- Il est maintenant possible de zoomer sur le quartier d'affectation sélectionné
- Rajout d'une option "est réservable" sur les postes de travail permettant d'indiquer à un outil de réservation que le poste de travail est réservable


## 2 Decembre 2023 - v3.3.205 ##

- Mise en place d'une option sur l'entreprise permettant d'activer les foncionnalités de recherche de chemin (beta) 
    - Mise place du calcul de temps et de distance entre deux formes 
- La vue 3d par defaut de l'étage est maintenant la vue zénithale
- Mise en place de deux nouveaux types de segment 
    - pour les portes coulissantes
    - pour les cloisons vides

Les nouveautés de novembre 2023 :

<Youtube code="yXREgUBb_vQ"/>

 ## 17 Novembre 2023 - v3.3.204 ##

- Mise en page d'une section permettant en cas d'erreur de rafraichir la page, de se déconnecter ou de nous contacter 
- Activation de la recherche des icônes fontawesome pour les types d'objets en majuscule ou minuscule
- Harmonisation de l'affichage des icônes qui sont representés sur le plan (forme, couleur de fond, couleur de bordure)
     - Dans la sélection des objets pour mettre sur le plan
     - Dans la recherche globale des objets 
     - Lors de l'ajout sur le plan


## 13 Novembre 2023 - v3.3.203 ##

- Les centres de coût possèdent à la fin de leur nom : 
    - une * quand ils sont distribués par bâtiment
    - deux ** quand ils sont distribués par étage
- Mise en place d'une option permettant de rechercher dans les listes les champs sans valeur    
    - par exemple lister les personnes sans matricule, email ou centre de coût
- La liste des nouveautés est maintenant disponible depuis le site https://help.surfy.pro
- En mode édition du plan les segments anciennement en pointillés sont maintenant en trait plein violet pour pouvoir facilement rajouter des points dessus


## 10 Novembre 2023 - v3.3.202 ##

- Amélioration du rapport de dédoublonnage des personnes en rajoutant toutes les propriétés des personnes
- Rajout d'un type de segment afin de pouvoir créer une cloison simple sans épaisseur, utile pour les limites des open spaces par exemple ou le contour du bâtiment
- Changement de l'affichage des types boolean en lecture seule de la forme d'une case à cocher à "Oui" ou "Non"
    - Par exemple dans les comparaisons des imports
- Rajout du nombre de postes de travail par centre de coût dans le rapport de distribution des coûts
- Amélioration du rapport excel des centres de coût ventilés en rajoutant un onglet qui précise les surfaces à ventiler par centre de coût

---

## 6 Novembre 2023 - v3.3.201 ##

- Amélioration des synchronisations avec les applications partenaires
- Mise en place des portes dans les plans 2d et 3d via la qualification du segment de séparation entre 2 espaces
    - Les portes sont maintenant matérialisées dans les cloisons en 3d
    - Possiblité d'afficher la porte des deux côtés du segment pour les portes avec ouverture dans les deux sens
- Amélioration des cloisons dans les plans en 3d
- Les segments appartenant à plusieurs espaces sont coloriés en rouge et sont un peu plus larges dans le mode édition du plan
    - L'objectif est de les repérer visuellement dans les phases de modélisation
- Les rapports de qualité des données possèdent maintenant une pagination

## 27 Octobre 2023 - v3.3.199 ##

<Youtube code="0ES_njXDAec"/>

- Mise en place d'un rapport de qualité des données sur les personnes permettant de trouver les doublons en fonction des emails, des matricules ou du couple prénom et nom

## 20 Octobre 2023 - v3.3.197 ##

- Mise en place de filtres sur les listes par poste de travail, pièce, étage ou bâtiment quand il existe un lien
- Harmonisation des fenêtres d'ouverture des options à droite
- Mise en place d'une propriété "dépôt de garantie" sur le bâtiment
- Mise en place d'une propriété "numéro de cylindre" pour les espaces

<Youtube code="WP2wDykMBiY"/>


## 18 Septembre 2023 - v3.3.194 ##

- Rajout d'une icone sur les types d'objets dans l'option rajouter un objet dans un espace permettant de voir si le type d'objet possède un modèle 3D
- Mise à jour des icônes Fontawesome à la version 6.4.2
- Tri defaut des modèles 3D par nom
- Mise en place d'une aide contextuelle dans les imports
- Les personnes avec la propriété "non affectable" cochée ne peuvent plus être associé à des espaces, postes de travail ou calque d'affectations depuis les options du plan

<Youtube code="wdVhXVFKapU"/>

## 6 Septembre 2023 - v3.3.192 ##

- Amélioration des imports de fichiers

## 4 Septembre 2023 - v3.3.191 ##

- Mise en place de nouveaux rapports de qualité des données sur les échelles du plan
    - Permettant de détécter et de supprimer les échelles du plan non utilisées
    - Permettant de donner des noms uniques aux échelles du plan avec le nom des étages et des bâtiments utilisés par les échelles
- Mise en place de nouveaux rapports de qualité des données sur les espaces permettant de détecter les noms d'espaces vides ou les noms d'espaces identiques dans le même étage

## 25 Août 2023 - v3.3.188 ##

<Youtube code="M34PFhnWlj0"/>

- Mise en place d'une vision dédiée aux calques d'affectation avec une navigation de la sélection par calque
    - Le premier calque disponible est sélectionné par défaut
- Les visions doivent maintentant être incluses dans les rôles des personnes pour être visibles
    - Un bâtiment peut avoir une vision par défaut qui sera utilisée lors de la connexion la première fois à l'ouverture du plan
    - En fonction des rôles de l'utilisateur seules les visions qui lui sont autorisées seront disponibles
        - Cette fonctionnalité est désactivée pour le moment en attendant la configuration des rôles adéquats sur les plateformes et la formation des administrateurs
    - Si la personne n'a aucune vision d'associée via ces rôles; la vision typologie des espaces lui est quand même proposée
- Tri des affectations aux calques d'analyse et aux espaces par ordre alphabétique des noms de famille puis des prénoms
- Mise en place d'une option permettant de créer des étages fantômes quand tous les étages ne sont pas modélisés dans le bâtiment dans les plans 3d sur le plan
- L'étage le plus bas au dessus du RDC est utilisé maintenant pour la structure de référence pour les plans 3d sur le plan  
- Ajout d'une aide pour les opérations de synchronisation avec les autres applications
- La liste de l'inventaire des espaces ou la liste de affectations sur le plan restent accessibles quelque soit la longueur du nom de l'espace
    - Egalement pour les dimensions sélectionnées 
- Ajout des sauts de ligne dans les descriptions des types d'objet dans l'inventaire en PDF
- Ajout du fabricant des types d'objet dans l'inventaire en PDF
- Mise en place d'icônes de type Avertissement et Conditions de sureté de la norme ISO 7010 dans les icônes Surfy
- Mise en place d'icônes triangle
    - Possiblité de configurer la couleur de fond des icônes
    - Possiblité de configurer la couleur de la bordure des icônes
- Les icones de sécurité possèdent maintenant des valeurs de couleur, de couleur de fond, de couleur de bordure et de forme par défaut
- Une seconde confirmation est demandée à la suppression des familles de types d'objet
- Mise en place d'un rapport de qualité des données permettant de trouver les problèmes sur la hiérarchie des organisations associées aux espaces
- Filtres mis en place sur les organisations
    - Depuis le plan, dans l'édition des espaces, seuls les services sont associables à l'espace
    - Depuis la page de l'édition de l'organisation, seules les directions peuvent être associées en tant qu'organisation mère
- Les calques d'affectation doivent maintenant être associés à au moins un bâtiment pour être utilisés entant que calque d'affectation via l'association "calque d'affectation à un bâtiment" depuis la page de l'édition du calque d'affectation
    - Les scenarios seront associés à ce calque si la coche "Associer les calques d'analyses et d'affectations aux espaces" est cochée
    - Il n'est plus possible d'associer des personnes aux calques d'analyse
- Séparation des rapports graphiques des surfaces et des postes de travail dans des onglets distincts pour plus de lisibilité dans la page des rapports du bâtiment et de l'entreprise
- Amélioration des rapports Excel
    - Rajout des calques d'affectation ou d'analyse des espaces pour chaque objet physique ou virtuel dans le rapport de l'inventaire
    - Rajout des organisations et des centres de coût des espaces pour les affectations au postes de travail ou des espaces dans le rapport des personnes du batiment
- Les personnes affectées uniquement à des scenarios sont maintenant correctement affichées dans la barre de recherche globale

## 14 Juin 2023 - v3.3.184 ##

- Proposition de suppression des affectations d'une personne sur les postes de travail ou les espaces lors de l'affection à un espace de la personne
    - Les affectations dans le même bâtiment sont cochées par défaut

## 9 Juin 2023 - v3.3.183 ##

- Possiblité de rafraichir toutes les données d'une entité depuis la page de l'import
    - Pratique par exemple pour rafraichir les noms complets des personnes après un import ce qui va améliorer la recherche des personnes

## 6 Juin 2023 - v3.3.182 ##

- Ajout de la famille des types d'objets, du nombre de places assises et de l'empreinte carbone dans le rapport fusionné de l'inventaire du bâtiment
- Mise en place d'une icône permettant d'optimiser l'espace pour le plan et cachant le menu de navigation du plan
- Mise en place d'une option permettant d'inclure ou non les scenarios dans la recherche globale
- Réutilisation d'un sommet sur plusieurs espaces
    - Mise en place d'une option permettant de séparer un sommet sur plusieurs espaces
    - Mise en place d'une option pemettant de fusionner des sommets sur plusieurs espaces en un sommet unique
- Possibilité de faire tourner les icônes en 2d, la rotation n'est appliquée qu'en 3d et en mode édition du 2d.

## 25 Mai 2023 - v3.3.180 ##

- Ajout d'un graphique sur le bâtiment représentant la surface qualifiée par typologie d'espaces
- Mise en place de cartes de chaleur en 2d. Les cartes de chaleur ne sont pas exportable en image pour le moment. N'hésitez pas à nous contacter si vous souhaitez rajouter d'autres cartes de chaleur. Les cartes suivantes sont disponibles pour le moment :
    - La densité des affectations de poste de travail
    - La densité des places assises
    - La densité des postes de travail
    - La densité de l'empreinte carbone du mobilier
- Possibilité de faire des recherches sur les types entiers et décimaux dans les champs de recherche à droite des listes

## 23 Mai 2023 - v3.3.179 ##

- Rajout du nom de l'entreprise et du nom du bâtiment dans les exports en image

## 16 Mai 2023 - v3.3.177 ##

- Amélioration de l'experience de navigation avec les barres de défilement du navigateur
- Remplacement des icones dans les affichages des données calculés depuis le plan par une liste des propriétés plus lisible
- Au rechargement de la page le mode édition du plan n'est plus sauvegardé et doit être remis via l'option ou le raccourci clavier "e".
    - Les utilisateurs avaient tendance à le laisser activé sans faire de modification sur le plan ce qui réduit les performances de navigation et impact l'experience utilisateur
    - Le mode edition doit être uniquement activé pour faire des modifications sur le plan
- Mise en place de la transparence sur les couleurs des espaces dans l'export en image

## 15 Mai 2023 - v3.3.176 ##

- Rajout d'un champ photo sur un espace
- Rajout des champs direction et service dans le rapport "Lister les personnes n'ayant pas d'affectations de poste de travail"

## 2 Mai 2023 - v3.3.175 ##

- Mise en place d'une option pour voir les couleurs des espaces avec de la transparence

## 28 Avril 2023 - v3.3.174 ##

- Ajout d'un onglet dans le rapport des personnes du bâtiment avec les affectations aux quartiers du bâtiment

## 27 Avril 2023 - v3.3.173 ##

- Ajout du matricule et de l'email comme filtre dans la recherche des personnes pour les affectations
- Ajout d'une option permettant de changer le mode d'affichage des cloisons dans le plan en 3d
- Mise en place du mécanisme permettant d'affecter les personnes aux postes de travail en fonction des jours de la semaine
- Ajout de la gestion de l'empreinte carbone en kilogramme de CO2
    - Empreinte carbone par type d'objet
    - Empreinte carbone par calque d'analyse par mètre carré
- Regroupement des profils de sécurité affectés aux postes de travail ou aux espaces de l'étage dans un onglet unique 
- Harmonisation de la navigation et de la coloration des plans en 2d et en 3d
- Rajout des icônes dans les types de postes de travail
- Introduction des icones rouge de sécurité de la norme ISO 7071
- Possibilité d'avoir des icones carré
- Ajout d'une option permettant de choisir la distance du segment à créer et le point de la souris sera utilisé pour la direction
    - Cette option permet de créer des carrés ou des rectangles
- Ajouter de la famille des types d'objets dans le rapport de l'inventaire du bâtiment
- Mise en place d'un champs de texte libre sur le poste de travail nommé "Commentaire" 
- La coloration des postes de travail sur le plan possède mainteant un onglet dédiée à gauche du plan : Colorier les postes de travail par rapport à leur état
- Suite à une affectation sur le poste de travail ou à un espace, une fenêtre détecte les autres affectations de la personne sur des postes de travail, des espaces ou des bâtiments et propose de les supprimer
    - Par defaut pour la suppression uniquement les affectations dans le même bâtiment sont cochés
    - Si le poste de travail est de passage, la même fenêtre propose de supprimer le type de passage du poste de travail
    - Les affectations dans les scenarios ne sont pas proposés pour la suppression
- Ajout d'une option permettant d'affecter les personnes sur les postes de travail en fonction des jours de présence dans la semaine
    - Possibilité de voir les postes de travail libres en fonction des jours de la semaine
- Ajouter des utilisateurs de l'entreprise nécessite d'utiliser un filtre avec l'email ou le nom exact de la personne afin de le trouver
- Les couleurs des calques d'analyses et des typologies sur le plan sont maintenant les vraies couleurs definies et ne sont plus "adoucis" par Surfy, ce qui permet d'avoir des plans en respectant exactement la charte graphique de l'entreprise

## 30 Mars 2023 - v3.3.168 ##

- Vérification des associations aux entreprises à chaque connexion
- Ajout d'une option permettant d'ouvrir directement une page après une connexion via les comptes Microsoft
- Augmentation de l'espace autour des objets et postes de travail après un zoom

## 26 Mars 2023 - v3.3.167 ##

- Ajout des affectations aux calques d'affectation dans la fiche des personnes
- Ajout des calques d'affectation dans la barre de recherche
    - Pour trouver une personne affectée à un calque
    - Pour trouver un calque d'affectation

## 27 Février 2023 - v3.3.164 ##

- Possibilité de voir depuis le plan les profils de sécurité des personnes affectées aux espaces dans l'onglet des personnes
- Possibilité d'afficher sur le plan les profils de sécurité des personnes affectées aux espaces
    - La configuration est disponible depuis l'onglet de gestion des textes d'affichage des espaces dans l'onglet Personnes
- Possiblité de définir le nombre de personnes à afficher sur le plan par ligne
    - La configuration est disponible depuis l'onglet de gestion des textes d'affichage des espaces dans l'onglet Personnes
- Possiblité de d'afficher sur les plans uniquement les personnes avec des profils de sécurité
    - Option disponible depuis l'onglet des visions
- Mise en place d'une nouvelle vision "Conformité de la sécurité"
    - Permet d'analyser rapidement les personnes affectées aux postes de travail ou aux espaces avec des profils de sécurité.


## 21 Février 2023 - v3.3.163 ##

- La page de l'inventaire du bâtiment, ainsi que l'export de l'inventaire en PDF, présente maintenant l'ensemble des objets de l'inventaire physique et virtuel

## 16 Février 2023 - v3.3.162 ##

- Les étages des scenarios ont maintenant la bonne échelle directement après la création sans besoin de rafraichir la page

## 6 Février 2023 - v3.3.161 ##

- Réorganisation des options en icone du plan en 2d en regroupant les options contextuels à droite de la liste
    - L'option ajouter une pièce n'est disponible que lorsque rien n'est sélectionné sur le plan
- Possiblité de réutiliser un sommet lors de la création d'un espace
    - Option pour fuisonner plusieurs espaces en un seul via les options des sommets
- La couleur par defaut des types d'objets est maintenant blanc
- Remise en place des matrices de transfert

## 25 Janvier 2023 - v3.3.160 ##

- Prise en compte des identifiants complexe dans la synchronisation avec l'application zbre.
- L'email des utilisateurs ne dépasse plus du menu en connexion avec les comptes Surfy

## 12 Janvier 2023 - v3.3.157 ##

- Mise en place du nouveau menu pour tous les utilisateurs
- Possibilité de choisir des couleurs via un mode avancé
- Mise en place d'un certificat pour la connexion avec SAP Success Factors (Amélioration de la sécurité)
- Renommage des places flex et places libres en postes flex et postes libres afin de dissocier les postes de travail et places assises libres
- Erreur sur le calcul des surfaces des organisations de type direction
- Calcul des surfaces dans l'info bulle en 3d

## 9 Janvier 2023 - v3.3.152 ##

- Création d'une vue pour la hiérarchie des organisations
    - Une mise à jour des rôles est nécessaire pour voir cette vue par Surfy
- Affichage sur le plan des centres de coût associés aux personnes affectées aux postes de travail
    - Accessible via l'onglet centre de coût du plan
    - Utilisation de coloration multiple (hachures) du poste de travail en cas d'affectations de personnes avec des centres de coût de couleurs différentes
        - Mise en place des hachures pour les profils de sécurité des personnes
- Les types d'espace avec l'option "ne pas afficher les murs" ont maintenant des polygones en pointillé dans l'image du plan en 2D comme contour.
- Mise en place d'un chargement et d'une blocage de la création de sommet pendant que des sommets sont en cours de création
- Mise en place d'une option permettant de réinitialiser l'angle de rotation des postes de travail et des objets sur le plan en 2d
- Mise en place du nom complet dans la fiche de la personne
    - Le nom complet est calculé après l'enregistrement depuis la fiche de la personne. Il faut recharger les données suite à un import via excel.
    - Il est possible de rechercher le nom complet depuis la barre de recherche
    - Le nom complet peut être utilisé comme clé dans l'import excel

## 1 Décembre 2022 - v3.3.145 ##

- Mise en place des nouveaux plans 3d (étage et bâtiment)
    - Ajustement des rôles nécessaire
- Mise en place du calcul automatique du nombre d'heures mensuel de travail dans le rapport de des prestations de nettoyage
- Utilisation de la bonne image de fond dans les exports de tout le bâtiment en zip

## 28 Novembre 2022 - v3.3.142 ##

- Mise en place du fabricant des types d'objet pour les types d'objets afin d'identifier la marque ou le fabricant
- Possibilié de voir le nombre de places assises sur le plan et en info-bulle

## 24 Novembre 2022 - v3.3.139 ##

- Copie dans le panier
    - Protection des copies de type d'entité par une option dans les rôles
    - Possibilité de copier dans le panier depuis la liste des entités (types d'objets et types de poste de travail)
- Mise en place d'une navigation dédiée sur les icônes du plan pour les calques d'affectations dans le plan en 2d
- Possiblité de rajouter des vidéos dans la liste des nouveautés
- Ajout des places assises disponible par type d'objets
    - Calcul des ratios de places assises pour les dimensions d'analyse
    - Mise à jour possible des places assises par type d'objets depuis la page d'edition du type de poste de travail
    - Affichage du nombre de place assise et du taux de place assise par personne dans l'ensemble des dimensions
- Mise en place des champs 
    - "Créé par l'utilisateur" qui précise le nom de l'utilisateur qui a crée l'entité
    - "Mis à jour par l'utilisateur" qui précise le nom de l'utilisateur qui a modifié l'entité en dernier
- Ajout de la navigation par pagination sur les pages des bâtiments (carte, 3d, ...)
- Limitation intiale de l'affichage des bâtiments en 3d à 10, car impossible d'afficher plus de 16 bâtiments en 3D en même temps
- Introduction d'une fonctionnalité permettant de séparer un espace en 2 espaces en sélectionnant deux sommets
    - Un configuration des rôles est nécessaire pour bénéficier de cette fonctionnalité
<Youtube code="7tGXPZaw3c0"/>
- Mise à jour de l'authentification via Microsoft 365 afin de supporter les connexions via tous les téléphones mobiles et tablettes
    - Extension automatique du token Micorosft 365 à partir de 35 minutes avant la fin.
        - La durée du token reste d'une heure
- Mise en place de la propriété "Utilisateur propriétaire du bâtiment" sur les bâtiments
    - L'utilisateur propriétaire d'un bâtiment voit toujours le bâtiment et les étages du bâtiment même s'il y a des rôles de contenu en place. 
    - Le propriétaire peut être modifié ou retiré sur le bâtiment
    - Lors de la création d'un scénario, l'utilisateur qui fait la création du scénario devient le propriétaire du bâtiment
- Problème de chargement des tableaux de bord


## 7 Novembre 2022 - v3.3.124 ##

- Possibilité de copier un bâtiment dans le panier via la page des scénarios
    - Les échelles des plans doivent avoir des noms uniques dans la plateforme source et cible
    - Les structures des plans doivent avoir des noms uniques dans la plateforme source et cible
    - Les pièces et les postes de travail doivent tous avoir un nom
    - Les types d'objet doivent avoir un nom unique dans la plateforme source et cible
- Rafraîchissement des données des scénarios d'un bâtiment depuis une icône dans la page des scénarios

## 5 Novembre 2022 - v3.3.123 ##

- La navigation entre les étages à droite occupe son propre espace à la place d'être au dessus du plan
- Déplacement des types d'objets et des types de poste de travail à travers plusieurs plateformes via le panier
- L'import des fichiers permet d'importer plusieurs types d'entités 
    - Un par onglet excel
    - Les noms des onglets peuvent être les noms techniques des types d'entités

## 23 Octobre 2022 - v3.3.109 ##

- Gestion des quartiers dans les environnements Flex
    - Sélection groupée via le plan d'un calque d'analyse
    - Affectation directe d'une personne à un calque d'analyse
    - Association d'un calque d'analyse à un bâtiment pour calculer les affectations par calque d'analyse
    - Liste des affectations d'un calque d'analyse
    - Liste de l'inventaire d'un calque d'analyse

## 18 Octobre 2022 - v3.3.108  ##

- Export des images de plusieurs étages en png dans un fichier zip depuis l'onglet d'export des images du plan 2d

## 14 Octobre 2022 - v3.3.106  ##

- Les pièces avec des icônes via l'affichage des icônes sur le plan ont un fond blanc par defaut.
- Ajout du nombre d'objets dans la liste des types d'objets sur le plan
- Ajout de la famille du type d'objet et de la forme dans la carte de l'objet sur le plan
- Ajout d'une icone sur les profils de sécurité des personnes
    - Affichage de l'icone dans la liste des personnes affectées
    - Affichage de l'icone dans l'info-bulle des postes de travail affectés
- Ajout du genre des personnes
    - Nécessite une mise à jour des vues et du contenu
- Proxy des images de fond de plan
- L'option centrer sur le plan ne tient plus compte de l'ancrage des pièces quand afficher la ligne n'est pas coché (aligment cuby)
- Le rapport de qualité des données de types d'objets non utilisés supprime les type d'objets correctement

## 14 Septembre 2022 - v3.3.99  ##

- Ajout d'un onglet de l'inventaire complet (physique et virtuel fusionné) dans le rapport de l'inventaire du bâtiment
- Mise à jour de la présentation des informations sur la gauche du plan
    - Déplacement des icones de navigation sur la gauche
    - Les dimensions et indicateurs sont disponible via l'accordéon sous l'élément
    - Possiblité de les ouvrir ou refermer tous en même temps
- Réajustement des taux et ratios sur les dimensions des bâtiments

## 18 Août 2022 - v3.3.96  ##

- Ajout d'une aide pour les rôles dans Surfy permettant de faire un rappel des rôles et des fonctionnalités associés
- Ajout du rapport des calques d'analyse des espaces par bâtiment
- Ouverture du fichier de sauvegarde global

## 13 Août 2022 - v3.3.92  ##

- Mise à jour de l'interface avec Z#bre permettant la synchronisation de plusieurs bâtiments
- Rajout de nouvelles icônes de sécurité

## 26 Juillet 2022 - v3.3.90  ##

- Ajout des affectations de pièce dans la matrice de transfert dans son onglet dédié et import des affectations de pièces depuis la matrice dans la page d'import de la matrice des transfert des espaces depuis les affectations de pièces

## 25 Juillet 2022 - v3.3.89  ##

- Amélioration de la qualité des rendus de l'option "Copie d'écran sans légende"

## 23 Juillet 2022 - v3.3.88  ##

- Améliorations de la navigation du plan 3D de l'étage et du bâtiment
- Introduction d'un nouveau menu de navigation disponible depuis la photo de l'utilisateur
- Tri des scenarios par ordre de création (dérnier crée en premier dans la liste)
- Ajout d'un filtre sur les noms pour la sélection des postes de travail depuis le dialogue de sélection des postes de travail
- Ajout d'animations dans les zooms du plan 2d
- Quadrillage du plan uniquement disponible en mode edition du plan 2d
- Conservation de la vision du plan dans les plans en 2d.
    - Les modifications effectuées après avoir changer la vision du plan ne sont pas sauvegardées
- Ajout d'une option permettant de déplacer une personne affecté à un poste de travail à la pièce du poste de travail depuis la vue des affectations d'une pièce
    - Nécessite un rafraichissement de la page
- Simplification et agrandissement de l'info-bulle des postes de travail pour lire plus facilement les affectations
- Copie des identifiants des objets identique à la comparaison dans l'import
- Affichage via une icone quand une personne est affecté à un bâtiment sans être comptabilisé dans la fiche de la personne
- Mise à jour de la fiche des postes de travail
    - Ouverture de la fiche des personnes en cliquant sur la photo depuis le plan
    - Zoom sur le poste de travail sur le plan depuis la liste des postes de travail
- Rajout des ratios des postes de travail en flex comme indicateur
- Remise en place du zoom au chargement de l'editeur de type d'objets et de type de postes de travail

## 26 Juin 2022 - v3.3.81  ##

- Création de l'export des données et des images vers Sharingcloud
- Remplacement de l'affichage en 3D de l'étage incluant les formes 3d
- Ajout d'une option permettant de voir les informations d'une personne depuis la barre latérale accessible depuis les options d'une personne
- Recentrage des positions des postes de travail en fonction du centre de l'espace occupé au sol
- Inventaire
    - Ajout d'un onglet contenant l'inventaire virtuel dans le rapport de l'inventaire du bâtiment
    - Tri par ordre des niveaux des étages dans l'inventaire en PDF
- Changement du comportement du zoom in/out dans le plan pour rester centrer sur les formes selectionnées
- Amélioration de la rotation des postes de travail et objets depuis le plan 2d
- Réajustement des taux de foisonnement des dimensions d'analyse, organisations et types de pièces

## 12 Mai 2022 - v3.3.73  ##

- Ajout du service et de la direction dans le rapport de qualité des données des personnes non affecté à un poste de travail mais étant dans un bâtiment

## 05 Mai 2022 - v3.3.70  ##

- Ajout de la structure du bâtiment
- Intégration de la structure du bâtiment dans les plans 3d
- Amélioration de l'ergonomie de la création des pièces et des types d'objets
- Chargement des modèles 3D des types d'objets

## 23 Avril 2022 - v3.3.67 ##

- Ajout de l'entreprise de la personne pour la gestion de l'occupation des prestataires de service

## 19 Avril 2022 - v3.3.63 ##

- Utilisation d'une taille relative pour les textes et cercles dans la création de polygones

## 17 Avril 2022 - v3.3.62 ##

- La mise à jour des calques d'analyse de l'espace depuis le plan nécessite que les données de l'espace soient au préalable sauvegardées.
- Les scénarios ne copient plus les clés externes des bâtiments
- Copier l'url d'une image dans les listes et la vue simple
- Qualité des données
    - Export en excel de la selection des tableaux de qualité des données
    - Rapport de qualité des données des personnes pour les personnes qui ont une date de fin de contrat après aujourd'hui et qui sont affectées à un poste de travail
- Ajout de la suppression dans entités dans le cadre d'import des données RH depuis SAP SF et Talentsoft

## 22 Mars 2022 - v3.3.58 ##

- Ajout de la liste des nouveautés depuis le profil de l'utilisateur

## 22 Mars 2022 - v3.3.57 ##

- Fermeture de la barre de recherche quand on clique en dehors de la zone de recherche
- Mise à jour des textes pour associer des entités
    - Par exemple "Créer et associer une affectation au poste de travail" devient "Créer une affectation au poste de travail"
    - Suppression de l'onglet "Associer une affectation au poste de travail" quand ce n'est pas pertinent
- Fix du comportement de la rotation en 3D (Arrêt et rafraichissement)

## 20 Mars 2022 - v3.3.55 ##

- Rajout d'une options permettant de supprimer les couleurs des objets sur le plan
- Rajout d'une option de filtre permettant de colorier les postes de travail en fonction du profil de sécurité de la personne sur le plan 2d
- Possiblité de rajouter en texte sur le plan :
    - Organisations des personnes
    - Centre de coût des personnes
    - Statut de sécurité des personnes
    - Organisations des postes de travail


## 13 Mars 2022 - v3.3.54 ##

- Mise à jour du comportement de la barre de recherche globale
    - Conserve la recherche, mais ferme la fenêtre des résultats

## 10 Mars 2022 - v3.3.50 ##

- Création de la fiche de la personne, lien via la recherche
- Ajout du nombre d'affectations au batiment dans la somme des affectations du batiment
- Message explicite dans les entity dialog quand aucune entité n'est trouvée
- Remise en place de la légende dans les exports en image

## 5 Mars 2022 - v3.3.43 ##

- Afficher les images via le serveur de Surfy en option par plateforme. Configurable depuis la page de l'entreprise.
- Ajouter une option permettant d'effacer les filtres enregistrés
- Les distances et nombre decimaux peuvent être enregistrés avec des valeurs de décimale contenant des 0 comme 5,0004
- Mise en place de tooltips sur la carte google pour les emplacements avec plusieurs batiments
- Ajout de l'authentification entreprise via OKTA
- Redirection automatique de la page avec la liste des entreprises si il y a seulement une entreprise
- Possibilité de mettre en place des règles pour l'authentification (automatiquement associer des utilisateurs à une plateforme avec des rôles et des rôles de contenu lors de l'inscription)
- Gestion du déplacement des textes dans les options des rôles
- Sauvegarde des filtres sur les entités associées depuis les pages d'édition (par exemple organisations des pièces)
- Export des icones surfy dans les images
- Supprimer ou retirer l'échelle depuis le plan

## 26 Février 2022 - v3.3.38 ##

- Les formats d'import excel acceptent maintenant les noms du schema dans les titre par exemple "person:code" à la place de "Matricule (person)"
- Ajout de l'italien comme langue
- Mise en place d'un menu dédié aux qualités de données et un nouveau rapport de qualité des données pour les personnes affectées uniquement à un bâtiment
- Mise en place de la sélection des propriétés dans les tableaux (pages de type liste)
- Import des personnes à bâtiment dans import sap sf
- Il est maintenant possible de naviguer à plus de 5 entités pour les objets associés depuis une page de visualisation d'entité par défaut

## 13 Février 2022 - v3.3.38 ##

- Mise en place d’un onglet dédié aux qualités de données afin de filtrer :
    - les Personnes affectées uniquement à un bâtiment
    - les Types de postes de travail non utilisés
    - les Types d’objets non utilisés
- Sélection des champs dans les filtres des listes et sorties Excel correspondantes.
- Mémorisation des filtres dans les listes.
- Possibilité d’associer une personne à un bâtiment.
- Ajout d’une 2eme confirmation pour la suppression des bâtiments, étages et pièces.
- La hauteur des objets est maintenant respectée dans la vue 3D Etage.
- Mémorisation de la recherche pour l’ajout de postes de travail ou d’objets.

