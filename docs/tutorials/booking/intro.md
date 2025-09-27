---
sidebar_position: 1
---

# Guide de démarrage

## Prérequis pour l'utilisation de la réservation avec Surfy

Surfy propose de digitaliser les plans des bâtiments pour faciliter globalement la gestion de l'environnement de travail.<br />
Pour utiliser les fonctionnalités de réservation de Surfy, l'entreprise doit avoir une plateforme Surfy.<br />

Si l'entreprise n'utilise pas encore Surfy, il est nécessaire de prendre contact avec nos équipes via notre [page de contact](https://www.surfy.pro/contact).<br />
Une plateforme dédiée vous sera attribuée, un bâtiment doit être digitalisé et les personnes créées.<br />

Si les plans de l'entreprise sont déjà digitalisés dans Surfy, les fonctionnalités de réservation sont disponibles dès maintenant, après acceptation par l'entreprise de la licence de réservation auprès de Surfy ([Nous contacter](https://www.surfy.pro/contact)), et après [configuration des quartiers d'affectation](/docs/tutorials/dimensiontypetobuilding/create) et [affectation des collaborateurs aux quartiers d'affectation](/docs/tutorials/affectations/dimensiontoperson/create).



## Fonctionnalités de réservation disponibles

Les fonctionnalités de réservation sont disponibles uniquement en Français.<br />
Chaque collaborateur autorisé peut utiliser les fonctionnalités de réservation de Surfy pour :

-   réserver un poste de travail
-   indiquer que vous êtes en télétravail
-   voir quels collègues ont réservé un poste de travail dans votre quartier
-   rechercher un collègue et obtenir ses réservations sur la période de réservation à venir
-   visualiser toutes les réservations sur un étage un jour donné

## Configuration des paramètres de la réservation

Les paramètres de configuration de la réservation sont accessibles par l'administrateur Surfy.<br />

### Configuration de la fenêtre de réservation

Pour configurer la fenêtre de réservation, depuis le menu de gauche,

-   cliquer sur "Administration" puis "Entreprises" puis "Vue des entreprises en tuiles"
-   cliquer sur l'icône "crayon" en bas de la fiche de l'entreprise pour "modifier l'entreprise XXX"
-   définir le "nombre de jours du planning" permet d'établir le nombre de jours de la fenêtre glissante de réservation

:::tip A CE STADE
Cocher la case "Activer la surcharge des dimensions pour la réservation" permet d'activer la gestion de priorités sur les quartiers de réservation.
Si le quartier de réservation d'un collaborateur est saturé, Surfy peut proposer au collaborateur de réserver sur un autre quartier dont la priorité est inférieure.
:::

-   sauvegarder la modification
-   cliquer sur le logo de l'entreprise en haut à gauche de l'écran, et rafraichir (F5).

### Gérer les priorités des quartiers de réservation

Pour activer la gestion des priorités sur les quartiers d'affectation, il est nécessaire de cocher la case "Activer la surcharge des dimensions pour la réservation" dans la fiche de l'entreprise (Voir ci-dessus).

Chaque quartier de réservation dispose d'un "taux de surcharge pour la réservation" indiquant le taux de remplissage à partir duquel il est considéré comme saturé. Par défaut, ce taux est fixé à 85% (0,85).

Pour modifier le taux de surcharge d'un quartier de réservation, depuis le menu de gauche,

-   cliquer sur "Administration", "Calques d'analyse", "Calques d'analyse" puis "Lister les calques d'analyse"
-   cliquer sur l'icône en début de ligne du calque à modifier pour "Modifier le calque d'analyse XXX".
-   modifier la valeur du "Taux de surcharge pour la réservation" (1=100%)
-   sauvegarder les modifications.

Chaque affectation de collaborateur à un quartier dispose d'un numéro de priorité.<br />
Par défaut, le numéro de priorité est "0" et correspond à la priorité maximale.<br />
Plus le numéro de priorité est grand, plus la priorité au quartier sera basse.

Pour modifier la priorité d'une affectation à un quartier, depuis le menu de gauche,

-   cliquer sur "Affectations", "Affectations aux calques d'affectation" puis "Lister les affectations aux calques d'affectation"
-   cliquer sur l'icône en début de ligne de l'affectation à modifier pour "Modifier l'affectation au calque d'affectation XXX"
-   modifier la valeur de la "Priorité"
-   sauvegarder les modifications.

Si l'affectation d'un collaborateur à un quartier a une priorité à "0", le quartier correspondant sera systématiquement proposé au collaborateur pour la réservation.

Si le taux de surcharge pour la réservation d'un quartier est atteint et qu'un collaborateur affecté à ce quartier est également affecté à un quartier de priorité plus basse sur le même bâtiment, le quartier de priorité plus basse lui est proposé à la réservation.

Plusieurs affectations d'un collaborateur aux quartiers peuvent avoir un numéro de priorité identique. Les quartiers correspondants suivront alors une règle de priorité identique.<br />

:::tip BON A SAVOIR
Un quartier saturé peut indiquer une occupation à plus de 100%. En effet, si des réservations ont été effectuées en demi-journée, le nombre de réservation peut alors dépasser le nombre de postes réservables.
:::


## Accès aux fonctionnalités de réservation

La réservation dans Surfy est accessible aux collaborateurs dans l'application via un navigateur, ou depuis Teams en ajoutant l'application "Surfy".

Pour accéder à Surfy par un navigateur, se rendre sur [app.surfy.pro](https://app.surfy.pro/login) depuis Chrome, Egde, Firefox, Safari,...
puis le collaborateur utilise son compte pour accéder aux fonctionnalités qui lui sont autorisées.

Pour ajouter l'application Surfy dans Teams, le collaborateur clique sur "Applications" et recherche "Surfy" pour l'ajouter à ses applications Teams.
Une fois ajoutée dans Teams, l'application permet au collaborateur d'accéder aux fonctionnalités qui lui sont autorisées.

Les deux accès mènent aux mêmes fonctionnalités.<br />
L'utilisation de Teams offre une expérience plus directe et plus adaptée à une utilisation des fonctionnalités de réservation sur smartphone.

Plus d'informations sur [les fonctionnalités de réservation via l'application Surfy](/docs/tutorials/booking/workplace) et pour [utiliser Teams pour les fonctionnalités de réservation](/docs/tutorials/booking/teams).

# Sécurité de l'application & conformité pour les administrateurs IT

L'application est hébérgée chez Microsoft Azure France. Elle est conforme aux réglementations RGPD.

Retrouvez tous nos engagements sur la [sécurité](https://www.surfy.pro/security)

# Déploiement & adoption pour les administrateurs IT

Afin de pouvoir charger les images des utilisateurs, l'administrateur de l'entreprise doit donner son consentement.
Les consentements demandés sont les suivants :

- profile
- email
- openid
- offline_access
- User.Read

# Comment obtenir du support ?

Notre équipe reste disponible pour vous accompagner, merci de vous reporter à notre [page de contact](https://www.surfy.pro/contact) pour obtenir de l'aide.
