---
sidebar_position: 1
---

# Les rôles utilisateur dans Surfy

Un rôle utilisateur permet de donner les droits adequats à chaque utilisateur en fonction du profil désiré.

Les rôles utilisateur peuvent s'additionner pour attribuer les droits nécessaires à chaque utilisateur.

Plus d'informations sur [l'attribution d'un rôle d'utilisateur](/docs/access/intro.md#attribuer-un-rôle-dutilisateur).

## Les rôles utilisateur de base

Les rôles utilisateur de base peuvent être attribués à un utilisateur sans autre rôle utilisateur complémentaire.<br />
Ces rôles suffisent à eux même mais peuvent être complétés par tout rôle utilisateur additionnel.

C'est le cas des rôles utilisateur suivants :

-   Administrateur d'entreprise (`ADMIN-TENANT`)
-   Lecteur (`READ`)
-   Lecteur simplifié (`READLIGHT`)
-   Planning Utilisateur (`PLANNING-USER`)

Le rôle utilisateur de base Planning Utilisateur (`PLANNING-USER`) peut être additionné à un autre rôle utilisateur de base pour accéder aux fonctionnalités de réservation.

### Administrateur d'entreprise (`ADMIN-TENANT`)

C’est le rôle utilisateur de base le plus complet.<br />
Il permet de gérer toute la base de données de Surfy : personnes, mobilier, affectations, espaces, bâtiments, organisations, centres de coût, etc...<br />
Seuls les accès aux fonctionnalités de réservation et certaines fonctionnalités techniques (calibrateur, panier Copier Coller, connexions, ...) ne sont pas inclus dans le rôle Administrateur d'entreprise (`ADMIN-TENANT`), et restent accessibles via l'ajout de rôles additionnels.

Avec ce rôle, la page d'accueil de l'utilisateur comporte la vue des bâtiments principaux en tuiles avec les informations cumulées du bâtiment.<br />
L'utilisateur peut créer, consulter, modifier ou supprimer l'ensemble de la base de données et des plans.<br />


### Lecteur (`READ`)

Le rôle Lecteur permet de consulter sans modifier toute la base de données de Surfy, uniquement sur les bâtiments principaux (hors scénarios).

Avec ce rôle, la page d'accueil de l'utilisateur comporte la vue des bâtiments principaux (hors scénarios) avec photos.<br />
Le Lecteur peut rechercher et consulter les personnes, les espaces (étages, bâtiments, campus), les affectations, les organisations, les calques d'analyse.  
Il peut également utiliser les options d’affichage sur les plans (affichage de textes, export en image,...).

La création, modification ou suppression de données ou de plans n'est pas autorisée.

Ce rôle utilisateur sert de base pour l'ajout de rôles additionnels permettant de compléter les fonctionnalités accessibles à l'utilisateur.

Plus d'informations sur le [mode Lecteur](/docs/courses/read/readcourse/)

### Lecteur simplifié (`READLIGHT`)

Avec ce rôle, la page d'accueil de l'utilisateur comporte la vue des bâtiments principaux (hors scénarios) avec photos.<br />
Le rôle Lecteur simplifié permet de consulter les plans des bâtiments principaux (hors scénarios), d'effectuer des recherches de personnes, d'espaces, de mobilier ou d'affectations mais ne dispose pas des fiches de données quantitatives des espaces ou du mobilier, ni des visualisations des calques d'analyse et icônes verticales.
La vision par défaut des plans est la typologie d'espaces.

### Planning Utilisateur (`PLANNING-USER`)

Le rôle Planning utilisateur est un rôle utilisateur de base, mais peut être ajouté à l'un des trois autres rôles utilisateur de base afin d'ouvrir la réservation à l'utilisateur.

 Utilisé sans autre rôle utilisateur de base, il permet d’accéder uniquement à la fonctionnalité de réservation de poste de travail ou de place de parking, ainsi qu'à la consultation de l'emplacement de réservation des collaborateurs sur les plans.<br />
La page d'accueil comporte alors la vue du planning des réservations.<br />
Seuls les plans relatifs aux réservations et à la géolocalisation des collaborateurs ayant réservé sont visibles.<br />
Aucune donnée autre n'est accessible à l'utilisateur.

Utilisé en addition à un autre rôle utilisateur de base, il complète ce rôle par la possibilité d'accéder aux fonctionnalités de réservation.

Ce rôle est effectif uniquement sur les plateformes ayant souscrit à l'option de réservation dans Surfy.<br />
Il n'est pas inclu par défaut dans le rôle de base Administrateur d'entreprise (`ADMIN-TENANT`).

Plus d'informations sur [la réservation d'un poste de travail](/docs/tutorials/booking/workstationbooking/workplace.md) et sur [la réservation de parking](/docs/tutorials/booking/parkingbooking/parkingresa.md).


## Les rôles utilisateur additionnels

Il est nécessaire d'attribuer un rôle de base Lecteur (`READ`) à l'utilisateur avant de compléter son accès par un rôle utilisateur additionnel.<br />
On peut ajouter plusieurs rôles utilisateur additionnels au rôle Lecteur (`READ`) d'un utilisateur.


Par exemple, on peut donner le rôle Lecteur (`READ`) à un utilisateur ainsi que le rôle Affectation de personnes (`AFFECTATIONS`) permettant de gérer les personnes et leurs affectations, sans pouvoir modifier les autres données (mobilier, espaces, ...) qui ne seront qu'en lecture seule.

On peut également ajouter au rôle utilisateur de base Administrateur d'entreprise (`ADMIN-TENANT`) certains rôles utilisateur qui ne sont pas inclus dans ce rôle : Planning Utilisateur (`PLANNING-USER`), Lecture Salles de Réunions (`READ-MEETING-ROOM`),Administrateur de Planning (`ADMIN-PLANNING`), ou des rôles utilisateur techniques par exemple.

### Rôles pour les personnes et leurs affectations

Ces rôles sont inclus par défaut dans le rôle utilisateur de base Administrateur d'entreprise (`ADMIN-TENANT`)

#### Affectation de personnes (`AFFECTATIONS`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet de créer des personnes, de visualiser la liste des personnes entrées dans Surfy, d'affecter ces personnes ou de supprimer leur affectation aux postes de travail, aux quartiers d'affectation ou aux espaces.<br />
Il permet de créer une matrice de transfert mais ne permet pas de l'importer dans Surfy pour exécuter le transfert d'affectations.

Ce rôle ne permet pas de supprimer des personnes de la base de données.

La page d'accueil comporte la vue des bâtiments principaux (hors scénarios) avec photos. La vue des bâtiments principaux en tuiles est accessible.<br />

Plus d'informations sur [les affectations des personnes](/docs/tutorials/affectations/intro.md).

#### Suppression de Personnes (`SUPPERS`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet de supprimer des personnes de la base de données de Surfy. 

#### Visualisation Liste Personnes (`VISU-PERS`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet de lister, filtrer et exporter en fichier Excel les personnes présentes dans la base de données de Surfy, sans pouvoir les modifier ni les supprimer.

#### Matrice de transfert (`MOVE-MATRIX`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`) ainsi qu'au rôle Affectation de personnes (`AFFECTATIONS`), permet d'importer les matrices de transfert afin de déménager un ensemble de personnes de postes de travail à postes de travail, ou d'espaces à espaces.

Plus d'informations sur [l'utilisation de la matrice de transfert](/docs/tutorials/affectations/workplaceaffectation/edit.md#utiliser-la-matrice-de-transfert).

### Rôles pour les espaces et les plans

Ces rôles sont inclus par défaut dans le rôle utilisateur de base Administrateur d'entreprise (`ADMIN-TENANT`)

#### Gestion des plans (`GESTPLANS`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet l'activation du mode "Edition du plan", la modification des espaces, du mobilier, de la taille des polices, du placement du texte et des informations des espaces, des postes de travail et des objets.

La suppression d'espaces, d'objets ou de postes de travail ainsi que les mouvements d'affectation de personnes ne sont pas autorisés dans ce rôle.

Plus d'informations sur [la modification d'un espace](/docs/tutorials/surfaces/room/edit.md).

#### Scénarios Lecteur (`SCEN`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet d'accéder à la vue des bâtiments en tuiles avec les informations cumulées du bâtiment ainsi qu'aux scénarios des différents bâtiments, en mode Lecteur.

Plus d'informations sur [la création d'un scénario](/docs/tutorials/surfaces/building/create.md#create-scenario).

#### Lecture Salles de Réunions (`READ-MEETING-ROOM`)

Ce rôle, ajouté à un rôle d'utilisateur de base, permet de consulter et de géolocaliser les espaces de réunion avec leurs équipements, par bâtiment, étage, type d'espace et capacité.

Plus d'informations sur [la consultation des salles de réunion](/docs/tutorials/surfaces/meetingroom/read.md).

#### Affichage des Infos (`VISU-INFOS`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet d'afficher les bâtiments en tuiles sur la page d'accueil de la plateforme.

Plus d'informations sur [la fiche d'information du bâtiment](/docs/tutorials/BuildingData/Infocard.md).

#### Liste Bâtiments (`LISTBAT`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`) ou Lecteur simplifié (`READLIGHT`), permet de lister, filtrer et exporter en fichier Excel l'ensemble des bâtiments accessibles à l'utilisateur et d'exporter les rapports de données en fichier Excel de tout ou partie des bâtiments.

Si aucun rôle de contenu n'est attribué à l'utilisateur, tous les bâtiments, y compris les scénarios, sont listés et leurs rapports de données sont exportables en fichiers Excel.

Plus d'informations sur [la recherche dans les listes](/docs/courses/find/listfindcourse.md) et sur [le rôle de contenu](/docs/access/intro.md#le-rôle-de-contenu).

#### Liste des espaces (`LISTESPACE`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`) ou Lecteur simplifié (`READLIGHT`), permet de lister, filtrer et exporter en fichier Excel l'ensemble des espaces des bâtiments accessibles à l'utilisateur.

Si aucun rôle de contenu n'est attribué à l'utilisateur, les espaces de tous les bâtiments accessibles à l'utilisateur sont listés.

Plus d'informations sur [la recherche dans les listes](/docs/courses/find/listfindcourse.md) et sur [le rôle de contenu](/docs/access/intro.md#le-rôle-de-contenu).

#### Modification Bâtiments (`BUILDMODIF`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`) ou Lecteur simplifié (`READLIGHT`), permet de modifier les informations des bâtiments accessibles à l'utilisateur et de proposer par défaut la vue en tuiles des bâtiments et la vue des actifs immobiliers.

#### Qualification de Pièce (`QUAL-PIECE`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet de modifier les informations des espaces (Typologie, organisation, centre de coût, calques d'analyses, ...) par espace ou par groupe d'espaces.

Plus d'informations sur [la qualification d'un espace](/docs/tutorials/surfaces/room/edit.md#qualifier-un-espace-ou-modifier-les-informations-dun-espace).


### Rôles pour le mobilier

Ces rôles sont inclus par défaut dans le rôle utilisateur de base Administrateur d'entreprise (`ADMIN-TENANT`)

#### Création de Mobilier (`CREAMOB`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet d'ajouter des objets et des postes de travail sur les plans, de modifier leurs informations, de les déplacer et de les supprimer.

Ce rôle ne permet pas de modifier ou supprimer des espaces, ni de créer ou supprimer des affectations de personnes.

Plus d'informations sur [la création d'un poste de travail](/docs/tutorials/objects/workplace/create.md) et sur [la création d'un objet](/docs/tutorials/objects/item/create.md).

#### Modif infos sur PdT (`INFOS-PdT`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur (`READ`), permet de modifier les informations des postes de travail (type de poste de travail, organisation, centre de coût, qualifications du poste).
Le déplacement, la modification d'affectation ou la suppression du poste de travail ne sont pas autorisés dans ce rôle.

Plus d'informations sur [la modification d'un poste de travail](/docs/tutorials/objects/workplace/edit.md).

### Rôles pour la réservation

Ces rôles ne sont pas inclus par défaut dans le rôle utilisateur de base Administrateur d'entreprise (`ADMIN-TENANT`)

#### Planning Utilisateur (`PLANNING-USER`)

Le rôle Planning utilisateur est un rôle utilisateur de base, mais peut être ajouté à l'un des trois autres rôles utilisateur de base afin d'ouvrir la réservation à l'utilisateur.

 Utilisé sans autre rôle utilisateur de base, il permet d’accéder uniquement à la fonctionnalité de réservation de poste de travail ou de place de parking, ainsi qu'à la consultation de l'emplacement de réservation des collaborateurs sur les plans.<br />
La page d'accueil comporte alors la vue du planning des réservations.<br />
Seuls les plans relatifs aux réservations et à la géolocalisation des collaborateurs ayant réservé sont visibles.<br />
Aucune donnée autre n'est accessible à l'utilisateur.

Utilisé en addition à un autre rôle utilisateur de base, il complète ce rôle par la possibilité d'accéder aux fonctionnalités de réservation.

Ce rôle est effectif uniquement sur les plateformes ayant souscrit à l'option de réservation dans Surfy.<br />

Plus d'informations sur [la réservation d'un poste de travail](/docs/tutorials/booking/workstationbooking/workplace.md) et sur [la réservation de parking](/docs/tutorials/booking/parkingbooking/parkingresa.md).

#### Réservation pour un tiers (`RESTIERS`)

Ce rôle, ajouté au rôle utilisateur de base Planning Utilisateur (`PLANNING-USER`), permet de réserver à la place d'un collaborateur, présent dans la base ou à créer par l'utilisateur du rôle.<br />
Ce rôle est effectif uniquement sur les plateformes ayant souscrit à l'option de réservation dans Surfy.

Plus d'informations sur [la réservation pour un tiers](/docs/tutorials/booking/workstationbooking/thirdpartbooking.md).

#### Réservation invités externes (`RESINVIT`)

Ce rôle, ajouté au rôle utilisateur de base Planning Utilisateur (`PLANNING-USER`), permet de réserver pour un invité externe à l'entreprise, créé temporairement dans la base de données.<br />
Les invités sont listésc et peuvent être supprimés.<br />
Ce rôle est effectif uniquement sur les plateformes ayant souscrit à l'option de réservation dans Surfy.

Plus d'informations sur [la réservation pour un invité externe](/docs/tutorials/booking/workstationbooking/thirdpartbooking/#réserver-pour-un-invité-externe).

#### Planning Profils Sécurité (`PLANSECU`)

Ce rôle, ajouté à n'importe quel rôle utilisateur de base, permet de localiser sur les plans les équipiers de Sécurité ayant réservé un poste de travail, en fonction de la date de réservation, du bâtiment, du quartier de réservation, du type de profil Sécurité et de l'étage.<br />
Ce rôle est effectif uniquement sur les plateformes ayant souscrit à l'option de réservation dans Surfy.

Plus d'informations sur [les profils Sécurité](/docs/tutorials/person/personSecurityProfile/create.md) et sur [l'affichage des profils Sécurité sur le plan](/docs/courses/views/2Dviews.md#afficher-les-profils-sécurité-sur-le-plan).

#### Administrateur de Planning (`ADMIN-PLANNING`)

Ce rôle, ajouté à n'importe quel rôle utilisateur de base, permet de lister les réservations aux postes de travail des personnes et d'accéder au tableau de bord des réservations au poste de travail des personnes pour obtenir des graphiques liés à l'utilisation des fonctionnalités de réservation.

Ce rôle permet également de visualiser la saturation mensuelle des quartiers par bâtiment et d'identifier les jours de dépassement de seuil.<br />
Ce rôle est effectif uniquement sur les plateformes ayant souscrit à l'option de réservation dans Surfy.

Plus d'informations sur [l'administrateur de Planning](/docs/tutorials/booking/workstationbooking/admin.md).

### Rôles de visions et d'exports

Ces rôles sont inclus par défaut dans le rôle utilisateur de base Administrateur d'entreprise (`ADMIN-TENANT`)

#### Vision Facturation (`VISIOFAC`)

Ce rôle, ajouté au rôle utilisateur de base Lecteur simplifié (`READLIGHT`), permet d'accéder directement et par défaut à la vision "Refacturation" affichant les centres de coût en couleurs et en texte sur les plans.

Il est complémentaire du rôle Clés de répartition (`CLE-REPART`) qui permet la répartition financière des coûts sur le bâtiment.

Plus d'informations sur [la vision "Refacturation"](/docs/courses/views/planviews.md#vision-refacturation).

#### Clés de répartition (`CLE-REPART`)

Ce rôle permet d'accéder à la clé de répartition et surfaces qualifiées par centre de coût pour les bâtiments.<br />
Il permet la sortie en fichiers Excel, avec ou sans ventilation des parties communes.<br />
Ce rôle permet également de visualiser la fiche détaillée de chaque bâtiment accessible, comprenant les informations immobilières du bâtiment.<br />
Il inclut la vue des bâtiments en tuiles.

Plus d'informations sur [la refacturation des espaces](/docs/tutorials/cost-distribution-by-cost-center/create.md).

#### RAPPORTS Excel (`RAPP`)

Ce rôle permet d'accéder au tableau de bord et à l'inventaire des bâtiments accessibles.<br />
Il inclut la vue des bâtiments en tuiles.

Plus d'informations sur [les rapports de données](/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting.md) et sur [le rapport de l'inventaire du bâtiment](/docs/tutorials/BuildingData/Buildingdashboard/Buildingreporting.md#rapport-de-linventaire-du-bâtiment).


### Les rôles utilisateur techniques

Ces rôles ne sont pas inclus par défaut dans le rôle utilisateur de base Administrateur d'entreprise (`ADMIN-TENANT`)

#### Structures (`STRUCTURE`)

Ce rôle permet de créer les dimensions périphériques d'un étage afin de définir son périmètre pour une meilleure visualisation de la vue 3D de l'étage ou du bâtiment.
La structure dessinée donne une base pleine pour recevoir les espaces digitalisés dans un périmètre défini.

#### Calibrateur (`CALIB`)

Ce rôle permet de redimensionner l'ensemble des espaces digitalisés d'un étage au nouveau fond de plan n'ayant pas les dimensions du fond de plan d'origine.

La recalibration des espaces nécessite une réinitialisation de l'échelle pour adapter celle ci aux nouvelles dimensions du fond de plan.

Plus d'informations sur [la création de l'échelle](/docs/tutorials/surfaces/mapscale/create.md).

#### Panier Copier Coller (`PAN`)

Ce rôle permet de copier-coller des types d'objet avec leur forme d'une plateforme à une autre.
Sur demande, la plateforme Catalogue peut être mise à disposition en complément de ce rôle afin d'importer des nouveaux types d'objet dans la plateforme de l'utilisateur.


#### SOC (`SOC`)



#### API (`API`)



#### IMPORT-PICTURE-MS (`Import Photo Microsoft`)



#### Intégration Z#bre (`ZBRE`)



#### Talentsoft (`TALENTSOFT`)



#### Lecteur Quartiers API (`API-READ-TERRITORY`)






