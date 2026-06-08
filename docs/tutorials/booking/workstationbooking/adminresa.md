---
sidebar_position: 2
---

# Administrer la réservation dans Surfy

Cette page résume les actions à mener par l'administrateur de la réservation de poste de travail pour garantir une expérience fluide aux utilisateurs.

:::tip VOCABULAIRE
- **Collaborateur** : personne entrée dans la base de données de Surfy (nom et prénom au minimum, adresse mail fortement conseillée).
- **Utilisateur** : personne se connectant à Surfy via son compte Office 365, ou autre pour utiliser l'outil de réservation.
- **Quartier de réservation** : territoire matérialisé par un calque d'affectation.
:::

## Administrer les accès à la réservation

### Prérequis à la réservation

Pour pouvoir réserver, l'utilisateur de la réservation doit :

**Être un collaborateur présent dans la base de données de Surfy, avec son adresse mail.**

-   Si le collaborateur était déjà créé avec son adresse mail avant sa connexion, il est reconnu lors de sa connexion et rapproché de l'utilisateur.
-   Si le collaborateur n'existe pas dans la base de données ou n'a pas d'adresse mail renseignée dans Surfy, il sera créé avec son adresse mail lors de la connexion de l'utilisateur à la plateforme Surfy.
-   L'adresse mail est le point de rapprochement entre utilisateur et collaborateur. Aucune réservation ne peut se faire sans l'adresse mail de la personne.

**Être un collaborateur affecté à un ou plusieurs quartiers de réservation ou à un bâtiment.**

-   L'affectation d'un collaborateur à un quartier de réservation ou à un bâtiment est attribuée dans Surfy par l'administrateur, manuellement ou par import en masse.
-   L'affectation à un quartier ou bâtiment peut être créée avant la connexion de l'utilisateur pour une expérience fluide et directe. Pour cela, le collaborateur doit être déjà créé avec son adresse mail avant sa connexion en tant qu'utilisateur.

**Avoir les rôles d'utilisateur adéquats :**

-   Le rôle "Lecteur" permet de visualiser les plans en lecture.
-   Le rôle "Planning Utilisateur" permet d'utiliser les outils de réservation.
-   Le rôle "Lecteur salles de réunion" permet d'accéder à la recherche et à la localisation des salles de réunion.

**Avoir un rôle de contenu compatible avec le quartier d'affectation :**

-   Il doit pouvoir visualiser le bâtiment où il est affecté.
-   Si aucun rôle de contenu ne lui est attribué, l'utilisateur aura accès à tous les bâtiments de la plateforme Surfy de l'entreprise.

L'utilisateur de la réservation ainsi créé pourra alors réserver suivant le [mode d'emploi de la réservation avec Teams](/docs/tutorials/booking/workstationbooking/teams).

### Actions de l'administrateur de la réservation

Tous les collaborateurs disposant d'une adresse mail du domaine de l'entreprise sont des utilisateurs potentiels de la réservation et peuvent se connecter automatiquement à Surfy via leur compte Office 365 et l'authentification automatique.

Plusieurs cas nécessitent l'intervention de l'administrateur :

#### Collaborateurs non entrés dans la base de données Surfy

À la connexion de l'utilisateur, un collaborateur est créé avec son adresse mail issue de son compte Office 365.<br />
Ce collaborateur nouvellement créé n'a pas d'affectation pour la réservation.<br />
Il est nécessaire de détecter ces collaborateurs et de les affecter à un quartier ou bâtiment pour qu'ils puissent réserver (en général, demande remontée par la personne ou le service).

#### Collaborateurs entrés dans Surfy avec affectation mais sans adresse mail

Certains collaborateurs peuvent être entrés dans Surfy sans leur adresse mail (issus de la création de badge, par exemple).<br />
À la connexion de l'utilisateur, un nouveau collaborateur de même nom est créé avec son adresse mail issue de son compte Office 365.<br />
Il est nécessaire de résoudre le doublon de collaborateurs afin de rapprocher les deux personnes de même nom ainsi que les affectations éventuelles du collaborateur précédemment entré, afin de créer un collaborateur unique complet qui puisse réserver.

#### Collaborateurs entrés dans Surfy avec adresse mail mais sans affectation

À la connexion de l'utilisateur, celui-ci sera reconnu mais ne pourra pas réserver tant que le collaborateur associé n'est pas affecté à un quartier.<br />
Il est nécessaire d'affecter le collaborateur à un quartier ou bâtiment.

#### Collaborateurs entrés dans Surfy mais sans adresse mail et sans affectation

À la connexion de l'utilisateur, un nouveau collaborateur est créé avec son adresse mail issue de son compte Office 365.<br />
Il est nécessaire de résoudre le doublon de collaborateurs afin de rapprocher les deux personnes de même nom pour obtenir un collaborateur unique.<br />
Il est nécessaire d'affecter le collaborateur à un quartier ou bâtiment afin que l'utilisateur puisse réserver.

#### Collaborateurs entrés dans Surfy avec adresse mail et affectation

À la connexion de l'utilisateur, celui-ci aura directement accès à la réservation dans son quartier de plus haute priorité désigné et non saturé, ou à l'ensemble de son bâtiment. Aucune intervention de l'administrateur n'est nécessaire.

#### Gérer la priorité de réservation sur les quartiers

Selon la configuration, quand le taux de saturation de leur quartier est atteint, les utilisateurs peuvent réserver sur les quartiers de priorité inférieure ou dans n'importe quel étage du bâtiment, sauf dans les quartiers exclus (voir [Gérer la priorité aux affectations dans les quartiers](#gérer-la-priorité-aux-affectations-dans-les-quartiers)).

## Méthodes d'action de l'administrateur de réservation

### Vérifier et résoudre les doublons

Certains collaborateurs peuvent être entrés dans Surfy et éventuellement affectés à des quartiers, sans que leur adresse mail ne soit renseignée.<br />
Or renseigner son adresse mail est indispensable pour rapprocher le collaborateur de l'utilisateur et afin que l'utilisateur puisse réserver.<br />
Lors de l'accès de cet utilisateur à la plateforme via son compte Office 365, un nouveau collaborateur du même nom est créé avec son adresse mail renseignée, générant un doublon de collaborateur.<br />
Il s'agit alors de regrouper les informations des deux fiches sur un collaborateur unique. Pour cela, il est conseillé d'utiliser la gestion des doublons :

-   depuis le menu de gauche, cliquer sur "Collaborateurs", "Personnes", "Les rapports et les actions pour la qualité de données pour les personnes", puis "Personnes en doublon".
-   certains doublons peuvent être dus à des collaborateurs de noms et prénoms identiques sur la plateforme, mais avec des adresses mail différentes. Ces collaborateurs ne sont pas à dédoublonner.
-   pour les collaborateurs à dédoublonner, ouvrir le doublon et sélectionner une des deux fiches, puis cliquer sur les informations manquantes présentes sur l'autre fiche afin de les ajouter à la fusion.
-   fusionner le doublon pour ne garder que la somme des bonnes informations sur un seul collaborateur (mail, affectations, réservations, ...).

La gestion des doublons peut également être utile dans le cas d'erreurs sur l'orthographe ou la casse des noms ou prénoms, sur le matricule ou sur l'adresse mail.

### Utilisateurs sans affectation

Les utilisateurs se connectant à Surfy ont un collaborateur associé qui n'est pas forcément affecté à un quartier.<br />
Dans ce cas, l'utilisateur ne pourra pas réserver de poste de travail.

#### Vérifier l'affectation du collaborateur

-   pour vérifier si un collaborateur est bien affecté à un quartier ou un bâtiment de réservation, taper son nom dans la loupe de recherche.
-   les affectations du collaborateur apparaissent sous son nom.
-   si aucune affectation n'est effective ni connue, se renseigner afin d'obtenir l'information du quartier ou bâtiment d'affectation du collaborateur afin que l'utilisateur puisse réserver.

#### Affecter un collaborateur à un quartier ou un bâtiment de réservation connu

-   taper le nom du collaborateur dans la loupe de recherche.
-   les affectations du collaborateur apparaissent sous son nom.
-   si l'affectation est connue mais pas indiquée, cliquer sur le nom du collaborateur pour ouvrir sa fiche.
-   cliquer sur le menu contextuel (case grise sous la loupe de recherche) pour "modifier la personne XXX".

**Affectation au quartier :**

-   en bas de page, sous les informations du collaborateur, cliquer sur "Affectations aux calques d'affectation" puis "Créer une affectation au calque d'affectation".
-   cliquer sur l'icône "Crayon" de "Calque d'analyse" pour choisir le quartier d'affectation.
-   définir le degré de "Priorité", "0" étant la priorité la plus haute.
-   cocher/décocher l'option de comptabilisation de l'affectation selon le cas.
-   valider la création.
-   le quartier d'affectation est ajouté à la liste des éventuels quartiers déjà affectés au collaborateur.

**Affectation au bâtiment :**

-   en bas de page, sous les informations du collaborateur, cliquer sur "Affectations au bâtiment" puis "Créer une affectation au bâtiment".
-   cliquer sur l'icône "Crayon" de "Bâtiment" pour choisir le bâtiment d'affectation.
-   cocher/décocher l'option de comptabilisation.
-   cocher "Autoriser la réservation de poste de travail dans le bâtiment via les étages".
-   cocher "Autoriser la réservation de parking dans le bâtiment" si la réservation de parking dans Surfy est opérationnelle.
-   valider la création.
-   le bâtiment d'affectation est ajouté à la liste des éventuels bâtiments déjà affectés au collaborateur.

### Gérer la priorité aux affectations dans les quartiers

Les accès aux quartiers pour la réservation peuvent être gérés par priorité pour chaque affectation de collaborateur au quartier.<br />
Pour une bonne gestion des priorités de quartier de réservation, il est conseillé d'affecter les collaborateurs à leur quartier originel en priorité 0 (priorité la plus haute).<br />
Les quartiers de priorité inférieure seront placés en priorité 1, puis 2, ...<br />
Si tous le(s) quartier(s) du collaborateur est (sont) saturé(s), les réservations à l'ensemble du bâtiment peuvent être ouvertes, avec un choix par étage. Seuls les quartiers exclus en cas de saturation sont inaccessibles à la réservation.

-   définir la priorité de l'affectation. Par défaut, la priorité 0 valide l'accès de l'utilisateur à la réservation sur le quartier correspondant. Une priorité de nombre supérieur ne validera l'accès de l'utilisateur au quartier correspondant que si ses quartiers de réservation de nombre inférieur sur le bâtiment sont tous saturés.
-   valider la création. Le quartier validé apparaît dans la liste sous la fenêtre de création.
-   si plusieurs quartiers sont à affecter à un collaborateur, cliquer de nouveau sur l'icône "crayon" du "calque d'analyse", choisir le quartier et la priorité et valider la création. Le quartier s'ajoute à la liste sous la fenêtre de création.
-   vérifier les affectations en tapant le nom du collaborateur dans la loupe de recherche. Ses affectations de priorité la plus haute apparaissent sous son nom.

### Authentification automatique des utilisateurs du domaine de l'entreprise

Tous les utilisateurs disposant d'une adresse mail du domaine de l'entreprise ou d'un domaine spécifique et qui utilisent leur compte Office 365 par Teams ou par navigateur web peuvent avoir accès à la plateforme, par exemple en mode "Lecteur" + "Planning utilisateur" + "Lecteur salles de réunion" pour les bâtiments ouverts à la réservation via la procédure d'authentification automatique. Les règles d'authentification automatique sont configurables.<br />
Les utilisateurs disposant d'une adresse mail du domaine de l'entreprise sont donc directement configurés pour la réservation, à condition que leur collaborateur associé soit affecté à au moins un quartier ou bâtiment de réservation.

Les utilisateurs disposant d'une adresse mail du domaine de l'entreprise et dont les adresses mail et les quartiers de réservation ont été renseignés dans Surfy peuvent réserver directement dès leur connexion à Surfy, sans intervention de l'administrateur.

### Activer les accès des utilisateurs hors domaine de l'entreprise

Les utilisateurs ne disposant pas d'une adresse mail du domaine de l'entreprise ou d'un domaine précis ne bénéficient pas de l'authentification automatique.<br />
Pour pouvoir se connecter à Surfy, ils doivent demander leur accès en suivant la [procédure de première connexion Office 365](/docs/access/office365), puis envoyer le formulaire au point 5) de la procédure ou prévenir l'administrateur Surfy interne de leur demande d'accès en attente.

À réception de la demande, l'administrateur Surfy doit :

-   depuis le menu de gauche, cliquer sur "Administration", "Sécurité", "Utilisateurs de l'entreprise" puis "Créer un utilisateur de l'entreprise".
-   cliquer sur l'icône "crayon" de l'"Utilisateur".
-   taper dans la recherche l'adresse mail complète de l'utilisateur à ajouter et sélectionner le nom du futur utilisateur. Si son nom n'apparaît pas, la demande de l'utilisateur a été mal faite et doit être répétée.
-   valider la création.
-   une fois validée, la fiche propose "les associations de sécurité pour l'utilisateur de l'entreprise".

Pour que l'utilisateur puisse accéder à Surfy, il est nécessaire de lui donner un rôle d'utilisateur, par exemple "Lecteur", "Planning Utilisateur" et "Lecteur salles de réunion".<br />
On peut donner un rôle de contenu à l'utilisateur, lui limitant l'accès aux seuls bâtiments inclus dans le rôle de contenu.<br />
Si aucun rôle de contenu n'est donné, l'utilisateur verra tous les bâtiments de la plateforme, y compris les scénarios éventuels.

Voir le chapitre [Attribuer un rôle d'utilisateur](/docs/access/intro#attribuer-un-rôle-dutilisateur) pour attribuer les rôles.

**Pour attribuer un rôle à l'utilisateur :**

-   cliquer sur "Rôles de l'utilisateur de l'entreprise" puis sur "Créer un rôle de l'utilisateur de l'entreprise".
-   cliquer sur l'icône "crayon" du "Rôle" pour choisir le rôle souhaité (en l'occurrence "Lecteur" et "Planning Utilisateur", ajouter "Administrateur de planning" pour l'administrateur Surfy interne ou "Réservation pour un tiers" pour les assistantes). Les rôles d'utilisateur sont préprogrammés et ne peuvent être modifiés que par l'équipe Surfy.
-   valider la création, le rôle validé apparaît dans la liste sous la fenêtre de création.
-   si plusieurs rôles sont à attribuer, cliquer de nouveau sur l'icône "crayon" du "Rôle" et choisir le nouveau rôle puis valider la création. Les rôles s'ajoutent à la liste sous la fenêtre de création.

**Pour donner un rôle de contenu :**

-   cliquer sur "Rôles de contenu de l'utilisateur de l'entreprise" puis sur "Créer un rôle de contenu de l'utilisateur de l'entreprise".
-   cliquer sur l'icône "crayon" du "rôle de contenu".
-   sélectionner le rôle de contenu adapté. Les rôles de contenu sont préprogrammés et peuvent être modifiés ou ajoutés par l'administrateur Surfy interne.
-   valider la création, le rôle de contenu validé apparaît dans la liste sous la fenêtre de création.

Pour vérifier les rôles de chacun, depuis le menu de gauche, cliquer sur "Administration", "Sécurité", "Utilisateurs de l'entreprise" puis "Lister les utilisateurs de l'entreprise".<br />
On peut alors filtrer la liste pour rechercher un utilisateur et vérifier ses droits.

Comme tout utilisateur, afin que l'utilisateur ne disposant pas d'une adresse mail du domaine de l'entreprise puisse réserver, il est nécessaire d'affecter le collaborateur à un quartier (voir [Affecter un collaborateur à un quartier ou un bâtiment de réservation connu](#affecter-un-collaborateur-à-un-quartier-ou-un-bâtiment-de-réservation-connu)) et de vérifier que son adresse mail de collaborateur est la même que l'adresse mail de l'utilisateur.

## Pour information

### Modifier le taux de saturation d'un quartier

Le taux de saturation de chaque quartier permet de définir à quel taux de remplissage du quartier concerné les quartiers de priorité inférieure ou le bâtiment s'ouvrent à la réservation.

Pour modifier ce taux, depuis le menu de gauche,

-   cliquer sur "Administration", "Calques d'analyse", "Calques d'analyse" puis "Lister les calques d'analyse".
-   cliquer sur l'icône en début de ligne du calque à modifier pour "modifier le calque d'analyse XXX".
-   changer le "taux de surcharge pour la réservation" (entre 0,1 soit 10 % et 1 soit 100 %, voire 1,2 soit 120 % si la saturation du quartier ne doit pas engendrer d'accès à d'autres quartiers).
-   sauvegarder la modification.

### Exclusion d'un quartier en cas de saturation

Un quartier peut être exclu de l'ouverture à la réservation en cas de saturation d'un autre quartier. Cela permet au quartier exclu de n'avoir à la réservation que les collaborateurs affectés au quartier, sans réservation supplémentaire due à la saturation d'un autre quartier du bâtiment.

Pour désigner un quartier comme "exclu à la réservation en cas de saturation", depuis le menu de gauche,

-   cliquer sur "Administration", "Calques d'analyse", "Calques d'analyse" puis "Lister les calques d'analyse".
-   cliquer sur l'icône en début de ligne du calque (quartier) à exclure pour "Modifier le calque d'analyse XXX".
-   cocher la case "Postes réservables uniquement via la dimension".
-   sauvegarder la modification.

### Le rôle d'utilisateur « Administrateur de planning »

Ce rôle permet d'avoir accès aux statistiques et listes de réservation effectuées par les utilisateurs.

Voir le chapitre [L'Administrateur de planning](/docs/tutorials/booking/workstationbooking/admin).
