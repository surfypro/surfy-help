---
sidebar_position: 98
sidebar_label: "MCP Surfy"
search_rank: 1
---

# MCP Surfy

Le **Model Context Protocol (MCP)** permet à un assistant IA dans **Cursor** (ou tout client compatible) d’interroger Surfy en langage naturel : entreprises, bâtiments, surfaces, entités via les query nodes, etc.

Le serveur est exposé sur la même origine HTTPS que l’application :

```http
GET {backend}/api/v1/surfy-mcp/mcp/health
```

Exemple Alpha : `https://app-alpha.surfy.pro/api/v1/surfy-mcp/mcp/health` — la réponse indique la version et `"stateless": true`.

Référence officielle Cursor : [MCP Install Links](https://cursor.com/docs/mcp/install-links).

## Ajouter le serveur MCP dans Cursor

Cliquez sur le bouton correspondant à l’environnement. Cursor ouvre une fenêtre de confirmation avec la configuration pré-remplie ; validez l’installation.

Transport : `streamable_http` — chemin `/api/v1/surfy-mcp/mcp` (pas `/api/v1/mcp/`).

### Alpha — `app-alpha.surfy.pro`

<a href="https://cursor.com/en/install-mcp?name=surfy-alpha&amp;config=eyJ1cmwiOiJodHRwczovL2FwcC1hbHBoYS5zdXJmeS5wcm8vYXBpL3YxL3N1cmZ5LW1jcC9tY3AiLCJ0cmFuc3BvcnQiOnsidHlwZSI6InN0cmVhbWFibGVfaHR0cCIsInVybCI6Imh0dHBzOi8vYXBwLWFscGhhLnN1cmZ5LnByby9hcGkvdjEvc3VyZnktbWNwL21jcCJ9fQ%3D%3D" target="_blank" rel="noopener noreferrer"><img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Ajouter Surfy MCP Alpha dans Cursor" height="32" /></a>

Endpoint : `https://app-alpha.surfy.pro/api/v1/surfy-mcp/mcp`

### Production — `app.surfy.pro`

<a href="https://cursor.com/en/install-mcp?name=surfy-production&amp;config=eyJ1cmwiOiJodHRwczovL2FwcC5zdXJmeS5wcm8vYXBpL3YxL3N1cmZ5LW1jcC9tY3AiLCJ0cmFuc3BvcnQiOnsidHlwZSI6InN0cmVhbWFibGVfaHR0cCIsInVybCI6Imh0dHBzOi8vYXBwLnN1cmZ5LnByby9hcGkvdjEvc3VyZnktbWNwL21jcCJ9fQ%3D%3D" target="_blank" rel="noopener noreferrer"><img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Ajouter Surfy MCP Production dans Cursor" height="32" /></a>

Endpoint : `https://app.surfy.pro/api/v1/surfy-mcp/mcp`

## Prérequis

1. **Cursor** avec support MCP (transport **streamable HTTP**, pas SSE).
2. Un compte Surfy avec les droits nécessaires sur le tenant.
3. Accès HTTPS à l’environnement cible.
4. Serveur MCP **activé** dans Cursor (`Settings → MCP` — voyant vert sur `surfy-alpha` ou `surfy-production`).

:::warning Compte Surfy et connexion Microsoft (obligatoire)

Pour utiliser le MCP Surfy depuis Cursor, vous devez disposer d’un **compte utilisateur Surfy** dont la connexion est assurée par **Microsoft Office 365** (bouton **Office 365** sur la page de connexion Surfy, fournisseur `AzureADv2`).

**À ce jour, c’est le seul flux OAuth implémenté** côté serveur MCP. Les autres modes de connexion Surfy (Google, Auth0, SAML, compte Surfy natif, etc.) **ne permettent pas** de s’authentifier auprès du MCP dans Cursor.

Lors de la première utilisation du serveur MCP, Cursor ouvre la fenêtre de connexion Microsoft ; utilisez l’identifiant professionnel associé à votre compte Surfy.

:::

## Discuter avec Surfy dans Cursor

### Où poser vos questions

- Ouvrez le **chat Agent** de Cursor (pas seulement l’autocomplétion inline).
- Vérifiez que le serveur MCP Surfy est **connecté** (OAuth validé à la première utilisation).
- Formulez vos demandes en **français ou en anglais** : l’assistant choisit les outils MCP adaptés.

### Comment formuler un bon prompt

1. **Nommez le périmètre** : entreprise, bâtiment, étage, typologie d’espace, service, centre de coûts…
2. **Dites ce que vous voulez obtenir** : un total en m², un effectif, une liste, une comparaison…
3. **Demandez explicitement d’utiliser le MCP Surfy** si l’assistant ne l’active pas tout seul, par exemple : *« Utilise le serveur MCP Surfy pour répondre. »*
4. **Pour les requêtes avancées**, demandez de commencer par la documentation : *« Appelle d’abord `read_documentation`, puis interroge les données. »*
5. **Découpez les questions complexes** : d’abord identifier l’entreprise et le bâtiment, puis la surface ou le détail des espaces.
6. **Préférez les noms métier** tels qu’ils apparaissent dans Surfy (bâtiment, étage, typologie) plutôt que des identifiants techniques — l’assistant résout les ids via `list_companies` ou `fetch_entities`.

### Enchaînement typique côté assistant

```
read_documentation  →  list_companies  →  get_area_summary ou fetch_entities
```

Pour plusieurs lookups en une fois : `fetch_entities_batch` (jusqu’à 10 requêtes parallèles).

## Outils MCP

| Outil | Quand l’utiliser | Retour principal |
|-------|------------------|------------------|
| `read_documentation` | **Toujours en premier** sur une nouvelle session ou une requête complexe | Schéma, guide query node, liste des outils, sections thématiques (`surface_queries`, etc.) |
| `list_companies` | Identifier l’`companyId` et le périmètre bâtiment / étage | Entreprises accessibles ; par défaut bâtiments de **référence** et étages (scénarios exclus) |
| `get_area_summary` | Questions de **surface (m²)** ou **nombre d’espaces** sur un bâtiment ou un étage | Totaux + détail optionnel par espace |
| `fetch_entities` | Listes, comptages, détail d’entités via **query node** | Entités filtrées selon vos droits |
| `fetch_entities_batch` | Plusieurs query nodes en **un seul appel** (résolution d’ids, master data) | Jusqu’à **10** requêtes en parallèle |
| `explain_surfy_schema` | Rappel du schéma dans une langue donnée | Documentation schéma |
| `query_node_help` | Syntaxe des query nodes | Guide d’architecture des requêtes |
| `list_master_data_types` | Découverte des types « référentiel » | Liste **indicative** — compléter avec `fetch_entities` si besoin |

### `get_area_summary` — qualificateurs (combinables en ET)

| Famille | Exemples de paramètres |
|---------|------------------------|
| Typologie d’espace | `roomTypeName`, `roomTypeGroupName` |
| Calque d’analyse / affectation | `dimensionName`, `dimensionTypeName`, `dimensionCategory` (`analysis` \| `assignment`) |
| Centre de coûts | `costCenterName`, `costCenterId` |
| Organisation | `organizationName`, `includeChildOrganizations` (défaut : inclure les services enfants) |

**Périmètre obligatoire** : au moins un bâtiment (`buildingId` / `buildingName`) ou un étage (`floorId` / `floorLevel` / `floorName`).

### `fetch_entities` — rappels

- Requiert un `companyId` et un `queryNode` conforme à la [documentation query node](/entities/api-schema-concepts).
- Utilisez la **pagination** (`limit`, `offset`) pour les grandes listes.
- Évitez les graphes trop profonds (nombreuses relations imbriquées) : risque de réponse lourde ou d’erreur mémoire côté serveur.

## Exemples de prompts

Copiez-collez ou adaptez ces formulations dans le chat Cursor.

### Découverte du périmètre

```
Utilise le MCP Surfy : liste les entreprises auxquelles j’ai accès, avec les bâtiments de référence et leurs étages.
```

```
Via MCP Surfy, sur l’entreprise « Acme », quels bâtiments de référence sont disponibles ?
```

### Surfaces et typologies d’espaces

```
Avec get_area_summary sur MCP Surfy : quelle est la surface totale des salles de réunion au R+2 du bâtiment « Siège » pour l’entreprise X ?
```

```
Combien de m² et combien d’espaces de type « Bureau » au bâtiment principal ? Utilise le MCP Surfy.
```

```
Surface des espaces rattachés au centre de coûts « DSI » au 3e étage du bâtiment Y (MCP Surfy).
```

### Organisations et calques

```
Via MCP Surfy, surface des espaces de la direction Finance (inclure les services enfants) dans le bâtiment Z.
```

```
Sur le calque d’affectation « Marketing », quelle surface au bâtiment principal ? MCP Surfy, outil get_area_summary.
```

### Effectifs et listes détaillées

```
Combien de personnes dans l’entreprise « Surfy Demo » ? Utilise fetch_entities via MCP Surfy.
```

```
Liste les espaces du 2e étage avec leur nom, typologie et surface en m². MCP Surfy, entreprise X, bâtiment Y.
```

### Requêtes avancées (query nodes)

```
Appelle read_documentation sur MCP Surfy, puis récupère les postes de travail libres au 4e étage avec fetch_entities.
```

```
MCP Surfy : en un seul fetch_entities_batch, charge les typologies d’espaces et les centres de coûts de l’entreprise X.
```

### Aide sur le schéma

```
Explique-moi comment interroger les organisations dans Surfy. Utilise read_documentation et query_node_help via MCP.
```

## Limitations

| Limitation | Détail |
|------------|--------|
| **Lecture seule** | Aucune création, modification ou suppression de données Surfy via MCP. |
| **Droits utilisateur** | Seules les entreprises et données autorisées par votre compte (tenant, rôles, rôles de contenu) sont accessibles. |
| **Pas d’accès cross-tenant** | Impossible de lire les données d’un autre client en changeant un identifiant. |
| **`get_area_summary`** | Nécessite un bâtiment ou un étage ; **pas** les affectations poste de travail / personne ; qualificateurs combinés en **ET**. |
| **`list_companies`** | Les bâtiments de scénario (clones) sont **exclus** du périmètre de référence. |
| **`fetch_entities_batch`** | Maximum **10** requêtes par appel. |
| **`list_master_data_types`** | Liste **partielle** — ne remplace pas un chargement complet du référentiel via `fetch_entities`. |
| **Volume de données** | Les exports massifs ou analyses très lourdes doivent passer par l’[API REST](/apidocs/) ou des exports métier, pas par le chat. |
| **OAuth MCP** | **Uniquement Microsoft Office 365** (Azure AD) — pas Google, Auth0, SAML ni les autres connexions Surfy pour l’instant. |
| **Compte Surfy requis** | Connexion MCP = compte **utilisateur** Surfy lié à Office 365, pas un simple <OT code="apiUser" /> collé dans le chat. |
| **Client MCP** | Fonctionnalités dépendantes du client (Cursor, version, outils activés). Rechargez les serveurs MCP après mise à jour de la config. |

## Configuration manuelle

Si le bouton ne fonctionne pas, ajoutez le fragment dans les réglages MCP de Cursor (`~/.cursor/mcp.json` ou `.cursor/mcp.json` à la racine d’un projet) :

```json
{
  "mcpServers": {
    "surfy-alpha": {
      "url": "https://app-alpha.surfy.pro/api/v1/surfy-mcp/mcp",
      "transport": {
        "type": "streamable_http",
        "url": "https://app-alpha.surfy.pro/api/v1/surfy-mcp/mcp"
      }
    }
  }
}
```

Remplacez `surfy-alpha` et l’URL par `surfy-production` / `https://app.surfy.pro` pour la production.

En **développement local** (`https://localhost`), ajoutez `"tls": { "rejectUnauthorized": false }` dans le bloc `transport` si le certificat n’est pas reconnu.

## Authentification

Les requêtes MCP utilisent un **JWT Bearer** obtenu après le flux **OAuth Microsoft Office 365** (Azure AD). Cursor déclenche ce flux lors de la première connexion au serveur MCP.

**Important :** seule la connexion **Office 365** est prise en charge pour l’OAuth MCP aujourd’hui. Si votre compte Surfy n’est accessible que via Google, SAML ou un autre fournisseur, le MCP Cursor ne pourra pas s’authentifier tant qu’un accès Office 365 n’est pas configuré pour votre utilisateur.

Pour des tests manuels hors Cursor (curl, Postman), un token peut être obtenu avec un <OT code="apiUser" /> via l’endpoint OpenID documenté dans [l’API Surfy](/apidocs/) — flux distinct de l’OAuth Cursor.

## Dépannage

| Symptôme | Piste |
|----------|--------|
| Le lien ne fait rien | Ouvrir Cursor une fois pour enregistrer le gestionnaire `cursor://`, puis réessayer |
| Outils MCP absents | Recharger les serveurs MCP dans Cursor |
| L’assistant n’utilise pas Surfy | Préciser *« Utilise le MCP Surfy »* ; vérifier que le serveur est vert dans les réglages |
| `Unauthorized` | Reconnecter OAuth ; vérifier que vous vous connectez avec **Office 365** ; vérifier les droits utilisateur sur le tenant |
| Connexion refusée / mauvais compte | Votre compte Surfy doit être rattaché à **Microsoft Office 365** — les autres fournisseurs ne sont pas supportés par le MCP aujourd’hui |
| Erreur SSL en local | `rejectUnauthorized: false` dans le transport TLS |
| `Server not initialized` | Vérifier `GET …/mcp/health` → `"stateless": true` |
| Requête query node invalide | Demander `read_documentation` puis `query_node_help` ; simplifier le query node |

## Voir aussi

- [Concepts API Surfy](/entities/api-schema-concepts)
- [Documentation API REST](/apidocs/)
- [Surfy SDK](/entities/sdk/)
