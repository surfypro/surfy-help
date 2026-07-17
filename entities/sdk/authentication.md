---
sidebar_position: 3
sidebar_label: "Authentification"
---

# Authentification

Le SDK appelle l'API Surfy avec un **JWT Bearer**. Le secret client (`clientSecret`) ne doit **jamais** être exposé dans le navigateur.

## Modèle recommandé

```mermaid
flowchart LR
  Browser["Navigateur"]
  Backend["Backend intégrateur"]
  Surfy["API Surfy"]

  Browser -->|"GET /api/surfy-token"| Backend
  Backend -->|"clientId + clientSecret"| Surfy
  Surfy -->|"JWT"| Backend
  Backend -->|"JWT"| Browser
  Browser -->|"Bearer + x-tenant"| Surfy
```

1. Votre **backend** échange `clientId` + `clientSecret` contre un JWT (`POST /api/v1/authentication/token` — voir [API Surfy](/apidocs/)).
2. Votre **frontend** appelle votre endpoint (ex. `/api/surfy-token`) et passe le token au SDK via `setAccessTokenProvider`.

## Côté SDK

```ts
const el = document.querySelector('surfy-floor-layout-2d')!;

el.setAccessTokenProvider(async () => {
  const response = await fetch('/api/surfy-token');
  if (!response.ok) {
    throw new Error(`Token request failed (${response.status})`);
  }
  const { token } = await response.json();
  return token;
});
```

:::warning Obligatoire
Appelez `setAccessTokenProvider()` **avant** le premier chargement réussi du plan (idéalement avant d'attacher l'élément au DOM ou dès sa création).
:::

## En-têtes envoyés par le SDK

| En-tête | Valeur |
|---------|--------|
| `Authorization` | `Bearer <token>` |
| `x-tenant` | Attribut `tenant` du composant |
| `accept-language` | Attribut `locale` (défaut `en`) |
| `Content-Type` | `application/json` |
| `X-Surfy-Sdk-Version` | Version du SDK |

## Exemple backend (Node / Express)

```ts
// POST https://<base-url>/api/v1/authentication/token
// Body: { "clientId": "...", "clientSecret": "..." }

app.get('/api/surfy-token', async (_req, res) => {
  const response = await fetch(`${SURFY_BASE_URL}/api/v1/authentication/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clientId: process.env.SURFY_CLIENT_ID,
      clientSecret: process.env.SURFY_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: 'Auth failed' });
  }

  const data = await response.json();
  return res.json({ token: data.token });
});
```

## Erreurs d'authentification

Écoutez `surfy:error` sur l'élément :

```ts
el.addEventListener('surfy:error', (event) => {
  const { code, message } = event.detail;
  // AUTH_EXPIRED, AUTH_FORBIDDEN, SDK_CONFIG, ...
  console.error(code, message);
});
```

| Code | Signification |
|------|----------------|
| `AUTH_EXPIRED` | JWT expiré ou invalide (HTTP 401) |
| `AUTH_FORBIDDEN` | Accès refusé à l'étage (HTTP 403) |
| `SDK_CONFIG` | `setAccessTokenProvider` ou attribut requis manquant |

Renouvelez le token dans votre provider : il est rappelé à chaque chargement de layout.
