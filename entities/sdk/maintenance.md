---
sidebar_position: 99
sidebar_label: "Maintenir la documentation"
---

# Maintenir la documentation SDK

Cette section est destinée aux **développeurs Surfy** qui font évoluer le SDK et la doc publique.

## Où vit la documentation

| Emplacement | Rôle | Audience |
|-------------|------|----------|
| **`surfy-help/entities/sdk/`** (ce dossier) | Doc publique intégrateurs | Développeurs tiers |
| **`surfy/docs/surfy-sdk/`** (monolithe) | Specs techniques, stratégie, ADO | Équipe Surfy |
| **`@surfy/surfy-sdk` `*.d.ts`** | Contrat TypeScript publié | Compilateur / IDE |
| **`surfy-sdk-demos`** | Exemples exécutables + E2E | Intégrateurs + CI |

La doc **surfy-help** doit rester alignée sur l'API **réellement exportée** (`mountFloor2d` / `mountBuilding3d`, `@surfy/surfy-sdk/react`, `@surfy/surfy-sdk/client`), pas sur une ancienne formulation « WC only ».

## Correspondance démo ↔ documentation

| Surface / démo | Page(s) surfy-help |
|----------------|-------------------|
| API JS `mount*` | [layout-elements.md](./layout-elements.md), [installation](./installation.md) |
| Web Components | [layout-elements.md](./layout-elements.md#web-component) |
| Surfy React Web | [surfy-react-web.md](./surfy-react-web.md) |
| Client data | [client-data-api.md](./client-data-api.md) |
| Couleurs / thème / 3D / sizing | pages dédiées |

## Quand mettre à jour

Mettez à jour `entities/sdk/` à chaque changement qui affecte les intégrateurs :

- Nouvelle surface ou entrée de package (`./react`, `./client`)
- Nouvelle méthode `SurfySdk.*` ou signature de handle
- Nouvel attribut HTML, événement, code d'erreur
- Nouveaux hooks React publics
- Changement d'URL HTTP ou de corps de requête

## Checklist de cohérence (PR SDK)

1. [ ] **`src/surfy-sdk/types/public.ts`** + entrées `index` / `react` / `client`
2. [ ] **`docs/surfy-sdk/`** — specs internes alignées AGREED
3. [ ] **`surfy-help/entities/sdk/`** — pages ci-dessous
4. [ ] **`surfy-sdk-demos`** + E2E
5. [ ] **Semver** — bump `SURFY_SDK_VERSION` si breaking
6. [ ] **Changelog** alpha si visible intégrateurs

## Pages à synchroniser

| Sujet SDK | Fichier surfy-help | Spec interne |
|-----------|-------------------|--------------|
| Vue d'ensemble | `index.md` | `docs/surfy-sdk/README.md` |
| Auth | `authentication.md` | `cartography-auth-and-data.md` |
| Layout mount / WC | `layout-elements.md` | `layout-elements-api.md` |
| Surfy React Web | `surfy-react-web.md` | (code `src/surfy-sdk/react`) |
| Client data | `client-data-api.md` | `client-data-api.md` |
| Thème MUI | `theme.md` | `layout-elements-api.md` |
| Options 3D | `options-3d.md` | `layout-elements-api.md` |
| updateRoom | `update-room.md` | `layout-elements-api.md` |
| Couleurs | `room-colors.md` | `layout-elements-api.md` |
| Taille | `layout-and-sizing.md` | `layout-elements-api.md` |
| React (choix) | `react-integration.md` | — |

## Rédaction

- Langue : **français** (locale par défaut) ; EN changelog via i18n.
- Public : **intégrateurs** — exemples de code, pas de jargon store/Component interne.
- Hooks / noms d'API **publics** OK.
- Distinguer **disponible**, **alpha**, **hors périmètre** (RN mobile, SSO).

## Vérification locale

```bash
# Depuis surfy-help
pnpm start
# Ouvrir http://localhost:3000/entities/sdk/
```

## Génération automatique

Contrairement aux pages `entities/<objectType>/` générées par `pnpm schema`, la doc SDK est **maintenue à la main** dans `entities/sdk/`.
