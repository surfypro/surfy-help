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
| **`@surfy/surfy-sdk` `index.d.ts`** | Contrat TypeScript publié | Compilateur / IDE |
| **`surfy-sdk-demos`** | Exemples exécutables + E2E | Intégrateurs + CI |

La doc **surfy-help** doit rester alignée sur l'API **réellement publiée** dans le package npm, pas sur la roadmap interne seule.

## Correspondance démo ↔ documentation

Chaque onglet de **surfy-sdk-demos** (`apps/react-web`) doit avoir sa section dans surfy-help :

| Onglet démo (`demoSections.ts`) | Tag | Page(s) surfy-help |
|---------------------------------|-----|-------------------|
| Étage 2D | `surfy-floor-layout-2d` | [layout-elements.md](./layout-elements.md#surfy-floor-layout-2d), [room-colors](./room-colors.md), [layout-and-sizing](./layout-and-sizing.md) |
| Bâtiment 3D | `surfy-building-layout-3d` | [layout-elements.md](./layout-elements.md#surfy-building-layout-3d), [options-3d](./options-3d.md) |
| Étage 3D | `surfy-floor-layout-3d` | [layout-elements.md](./layout-elements.md#surfy-floor-layout-3d) (statut « à venir » tant que le tag n'est pas enregistré) |

Fonctionnalités transverses : [theme.md](./theme.md) (switcher démo), [authentication.md](./authentication.md), [react-integration.md](./react-integration.md).

## Quand mettre à jour

Mettez à jour `entities/sdk/` à chaque changement qui affecte les intégrateurs :

- Nouvel attribut HTML (`fill-parent`, `locale`, …)
- Nouvelle méthode ou signature (`setRoomColors`, `setTheme`, `setOptions`, …)
- Nouveau type exporté (`SurfyThemeOptions`, `SurfyLayout3dOptions`, …)
- Nouvel événement ou champ `detail`
- Nouveau code d'erreur `SurfySdkErrorCode`
- Changement d'URL HTTP ou de corps de requête
- Changement de comportement documenté (remplacement vs merge des couleurs, merge des options 3D, sizing, auth)
- **Enregistrement** ou **retrait** d'un custom element (`registerSurfyLayoutElements`)

## Checklist de cohérence (PR SDK)

Avant de merger une évolution du SDK :

1. [ ] **`src/surfy-sdk/types/public.ts`** — types et JSDoc à jour
2. [ ] **`docs/surfy-sdk/layout-elements-api.md`** — spec interne
3. [ ] **`surfy-help/entities/sdk/`** — pages correspondantes (voir tableau ci-dessous)
4. [ ] **`surfy-sdk-demos`** — onglets, snippets (`demoApiSnippets.ts`), E2E
5. [ ] **Semver** — bump `SURFY_SDK_VERSION` si breaking change API
6. [ ] **Changelog** — entrée dans `surfy-help/changelog/app-alpha.md` si visible intégrateurs

## Pages à synchroniser

| Sujet SDK | Fichier surfy-help | Spec interne |
|-----------|-------------------|--------------|
| Vue d'ensemble | `index.md` | `docs/surfy-sdk/README.md` |
| Auth | `authentication.md` | `cartography-auth-and-data.md` |
| API élément | `layout-elements.md` | `layout-elements-api.md` |
| Thème MUI | `theme.md` | `layout-elements-api.md` (section Theme) |
| Options 3D | `options-3d.md` | `layout-elements-api.md` (section 3D options) |
| updateRoom | `update-room.md` | `layout-elements-api.md` |
| Couleurs | `room-colors.md` | `layout-elements-api.md` |
| Taille | `layout-and-sizing.md` | `layout-elements-api.md` |
| React | `react-integration.md` | `distribution-and-demo-project.md` |

## Rédaction

- Langue : **français** (locale par défaut de surfy-help) ; traduction EN à la fin du cycle SDK.
- Public : **développeurs** — exemples de code complets, pas de jargon métier Surfy inutile.
- Diagrammes : préférer **Mermaid** dans les blocs ` ```mermaid `.
- Ne pas documenter ici les entités du modèle Surfy (voir onglet Références / `entities/spaces/...`).
- Distinguer clairement **disponible**, **alpha**, et **spécifié / à venir** (ex. `surfy-floor-layout-3d`).

## Vérification locale

```bash
# Depuis surfy-help
pnpm start
# Ouvrir http://localhost:3000/entities/sdk/
```

Vérifiez les liens internes, les blocs de code (Prism) et le rendu des diagrammes Mermaid.

## Génération automatique

Contrairement aux pages `entities/<objectType>/` générées par `pnpm schema`, la doc SDK est **maintenue à la main** dans `entities/sdk/`. Toute automatisation future (extraction depuis `public.ts`) doit être explicitée ici avant d'être activée.
