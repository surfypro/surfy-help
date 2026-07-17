---
sidebar_position: 98
sidebar_label: "Surfy MCP"
search_rank: 1
---

# Surfy MCP

The **Model Context Protocol (MCP)** lets an AI assistant in **Cursor** (or any compatible client) query Surfy in natural language: companies, buildings, areas, entities via query nodes, and more.

The server is exposed on the same HTTPS origin as the app:

```http
GET {backend}/api/v1/surfy-mcp/mcp/health
```

Alpha example: `https://app-alpha.surfy.pro/api/v1/surfy-mcp/mcp/health` — the response includes the version and `"stateless": true`.

Official Cursor reference: [MCP Install Links](https://cursor.com/docs/mcp/install-links).

## Add the MCP server in Cursor

Click the button for your environment. Cursor opens a confirmation dialog with the pre-filled configuration; approve the install.

Transport: `streamable_http` — path `/api/v1/surfy-mcp/mcp` (not `/api/v1/mcp/`).

### Alpha — `app-alpha.surfy.pro`

<a href="https://cursor.com/en/install-mcp?name=surfy-alpha&amp;config=eyJ1cmwiOiJodHRwczovL2FwcC1hbHBoYS5zdXJmeS5wcm8vYXBpL3YxL3N1cmZ5LW1jcC9tY3AiLCJ0cmFuc3BvcnQiOnsidHlwZSI6InN0cmVhbWFibGVfaHR0cCIsInVybCI6Imh0dHBzOi8vYXBwLWFscGhhLnN1cmZ5LnByby9hcGkvdjEvc3VyZnktbWNwL21jcCJ9fQ%3D%3D" target="_blank" rel="noopener noreferrer"><img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Add Surfy MCP Alpha to Cursor" height="32" /></a>

Endpoint: `https://app-alpha.surfy.pro/api/v1/surfy-mcp/mcp`

### Production — `app.surfy.pro`

<a href="https://cursor.com/en/install-mcp?name=surfy-production&amp;config=eyJ1cmwiOiJodHRwczovL2FwcC5zdXJmeS5wcm8vYXBpL3YxL3N1cmZ5LW1jcC9tY3AiLCJ0cmFuc3BvcnQiOnsidHlwZSI6InN0cmVhbWFibGVfaHR0cCIsInVybCI6Imh0dHBzOi8vYXBwLnN1cmZ5LnByby9hcGkvdjEvc3VyZnktbWNwL21jcCJ9fQ%3D%3D" target="_blank" rel="noopener noreferrer"><img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Add Surfy MCP Production to Cursor" height="32" /></a>

Endpoint: `https://app.surfy.pro/api/v1/surfy-mcp/mcp`

## Prerequisites

1. **Cursor** with MCP support (**streamable HTTP** transport, not SSE).
2. A Surfy account with the required rights on the tenant.
3. HTTPS access to the target environment.
4. MCP server **enabled** in Cursor (`Settings → MCP` — green status on `surfy-alpha` or `surfy-production`).

:::warning Surfy account and Microsoft sign-in (required)

To use Surfy MCP from Cursor, you need a **Surfy user account** whose sign-in is **Microsoft Office 365** (the **Office 365** button on the Surfy login page, `AzureADv2` provider).

**Today this is the only OAuth flow implemented** on the MCP server. Other Surfy login methods (Google, Auth0, SAML, native Surfy account, etc.) **cannot** authenticate to MCP in Cursor.

On first use, Cursor opens the Microsoft login window — use the work account linked to your Surfy user.

:::

## Chatting with Surfy in Cursor

### Where to ask

- Use Cursor’s **Agent chat** (not inline completion only).
- Ensure the Surfy MCP server is **connected** (OAuth on first use).
- Ask in **French or English** — the assistant picks the right MCP tools.

### How to write a good prompt

1. **Name the scope**: company, building, floor, room type, organization, cost center…
2. **State the outcome**: total m², headcount, list, comparison…
3. **Ask explicitly for Surfy MCP** if the assistant does not use it: *“Use the Surfy MCP server to answer.”*
4. **For advanced queries**, ask to start with docs: *“Call `read_documentation` first, then query the data.”*
5. **Split complex questions**: identify company and building first, then area or room detail.
6. **Prefer business names** as shown in Surfy — the assistant resolves ids via `list_companies` or `fetch_entities`.

### Typical assistant flow

```
read_documentation  →  list_companies  →  get_area_summary or fetch_entities
```

For multiple lookups in one round-trip: `fetch_entities_batch` (up to 10 parallel queries).

## MCP tools

| Tool | When to use | Main output |
|------|-------------|-------------|
| `read_documentation` | **Always first** on a new session or complex query | Schema, query node guide, tool list, thematic sections (`surface_queries`, etc.) |
| `list_companies` | Resolve `companyId` and building / floor scope | Accessible companies; by default **reference** buildings and floors (scenarios excluded) |
| `get_area_summary` | **Area (m²)** or **room count** on a building or floor | Totals + optional per-room breakdown |
| `fetch_entities` | Lists, counts, entity detail via **query node** | Entities filtered by your permissions |
| `fetch_entities_batch` | Several query nodes in **one call** (id resolution, master data) | Up to **10** parallel queries |
| `explain_surfy_schema` | Schema recap in a given language | Schema documentation |
| `query_node_help` | Query node syntax | Query architecture guide |
| `list_master_data_types` | Discover “reference” object types | **Partial** list — use `fetch_entities` for full master data |

### `get_area_summary` — qualifiers (AND-combinable)

| Family | Example parameters |
|--------|-------------------|
| Room type | `roomTypeName`, `roomTypeGroupName` |
| Analysis / assignment dimension | `dimensionName`, `dimensionTypeName`, `dimensionCategory` (`analysis` \| `assignment`) |
| Cost center | `costCenterName`, `costCenterId` |
| Organization | `organizationName`, `includeChildOrganizations` (default: include child services) |

**Required scope**: at least one building (`buildingId` / `buildingName`) or floor (`floorId` / `floorLevel` / `floorName`).

### `fetch_entities` — reminders

- Requires `companyId` and a `queryNode` matching [query node concepts](/entities/api-schema-concepts).
- Use **pagination** (`limit`, `offset`) for large lists.
- Avoid very deep relation graphs — heavy responses or server memory errors.

## Example prompts

Copy or adapt these in Cursor chat.

### Discover scope

```
Use Surfy MCP: list the companies I can access, with reference buildings and their floors.
```

```
Via Surfy MCP, on company “Acme”, which reference buildings are available?
```

### Areas and room types

```
With get_area_summary on Surfy MCP: what is the total meeting-room area on floor R+2 in building “HQ” for company X?
```

```
How many m² and how many “Office” rooms in the main building? Use Surfy MCP.
```

```
Area of rooms linked to cost center “IT” on floor 3 of building Y (Surfy MCP).
```

### Organizations and dimensions

```
Via Surfy MCP, area of Finance directorate rooms (include child services) in building Z.
```

```
On assignment dimension “Marketing”, what area in the main building? Surfy MCP, get_area_summary.
```

### Headcount and detailed lists

```
How many people in company “Surfy Demo”? Use fetch_entities via Surfy MCP.
```

```
List rooms on floor 2 with name, type and area in m². Surfy MCP, company X, building Y.
```

### Advanced (query nodes)

```
Call read_documentation on Surfy MCP, then fetch free workplaces on floor 4 with fetch_entities.
```

```
Surfy MCP: in one fetch_entities_batch, load room types and cost centers for company X.
```

### Schema help

```
Explain how to query organizations in Surfy. Use read_documentation and query_node_help via MCP.
```

## Limitations

| Limitation | Detail |
|------------|--------|
| **Read-only** | No create, update or delete of Surfy data via MCP. |
| **User permissions** | Only companies and data allowed by your account (tenant, roles, content roles). |
| **No cross-tenant access** | Cannot read another customer’s data by changing an id. |
| **`get_area_summary`** | Requires building or floor; **no** workplace/person assignments; qualifiers combined with **AND**. |
| **`list_companies`** | Scenario (clone) buildings are **excluded** from reference scope. |
| **`fetch_entities_batch`** | Maximum **10** queries per call. |
| **`list_master_data_types`** | **Partial** list — does not replace full reference load via `fetch_entities`. |
| **Data volume** | Large exports or heavy analytics should use the [REST API](/apidocs/) or business exports, not chat. |
| **MCP OAuth** | **Microsoft Office 365 only** (Azure AD) — not Google, Auth0, SAML or other Surfy login methods for now. |
| **Surfy account required** | MCP login = **user** account linked to Office 365, not a raw <OT code="apiUser" /> pasted in chat. |
| **MCP client** | Behaviour depends on the client (Cursor version, enabled tools). Reload MCP servers after config changes. |

## Manual configuration

If the button does not work, add the fragment in Cursor MCP settings (`~/.cursor/mcp.json` or `.cursor/mcp.json` at the project root):

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

Replace `surfy-alpha` and the URL with `surfy-production` / `https://app.surfy.pro` for production.

For **local development** (`https://localhost`), add `"tls": { "rejectUnauthorized": false }` inside `transport` if the certificate is not trusted.

## Authentication

MCP requests use a **JWT Bearer** token obtained after **Microsoft Office 365** OAuth (Azure AD). Cursor starts this flow on first connection to the MCP server.

**Important:** only **Office 365** sign-in is supported for MCP OAuth today. If your Surfy account is only reachable via Google, SAML or another provider, Cursor MCP cannot authenticate until Office 365 access is set up for your user.

For manual tests outside Cursor (curl, Postman), a token can be obtained with an <OT code="apiUser" /> via the OpenID endpoint in the [Surfy API](/apidocs/) — a separate flow from Cursor OAuth.

## Troubleshooting

| Symptom | Hint |
|---------|------|
| Link does nothing | Open Cursor once to register the `cursor://` handler, then retry |
| MCP tools missing | Reload MCP servers in Cursor |
| Assistant ignores Surfy | Say *“Use Surfy MCP”*; check server is green in settings |
| `Unauthorized` | Reconnect OAuth; sign in with **Office 365**; check user rights on the tenant |
| Login rejected / wrong account | Your Surfy account must use **Microsoft Office 365** — other providers are not supported by MCP today |
| SSL error locally | `rejectUnauthorized: false` in TLS transport |
| `Server not initialized` | Check `GET …/mcp/health` → `"stateless": true` |
| Invalid query node | Ask for `read_documentation` then `query_node_help`; simplify the query node |

## See also

- [Surfy API concepts](/entities/api-schema-concepts)
- [REST API documentation](/apidocs/)
- [Surfy SDK](/entities/sdk/)
