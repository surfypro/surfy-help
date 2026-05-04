# Journal des nouveautés (Surfy Help)

## Fichiers

| Fichier | Rôle |
|--------|------|
| [app.md](./app.md) | **Production** : nouveautés publiées sur `master` / versions livrées aux utilisateurs en prod. |
| [app-alpha.md](./app-alpha.md) | **Alpha / brouillon** : tout ce qui concerne l’environnement alpha ou la branche courante **avant** fusion sur `master`, avec la liberté d’être plus verbeux. |

Les deux pages sont servies par le site Docusaurus (Surfy Academy) : `/changelog/app` et `/changelog/app-alpha`.

## Déployer Surfy Help (changelog inclus)

Le site vit dans le dépôt **surfy-help** (souvent en sibling de **surfy**). Le changelog est du Markdown statique : **aucun build spécifique** n’est nécessaire pour le texte ; un `pnpm build` du site inclut ces pages.

1. **En local** : depuis `surfy-help`, `pnpm start` ou `pnpm build` puis servir le dossier `build/`.
2. **En production** : suivre le flux habituel du dépôt (par ex. `pnpm deploy` pour GitHub Pages — voir le `README.md` à la racine du dépôt surfy-help, section *Deployment*), ou le pipeline CI/CD de votre hébergement (build Docusaurus + publication des artefacts).

Les scripts du dépôt **surfy** qui alimentent l’aide (`pnpm help:production`, `pnpm apidocs:bundle`) produisent le JS et l’API doc dans `surfy-help/` ; ils ne modifient **pas** `changelog/*.md`.

## Workflow « alpha » → « production »

### 1. Identifier ce qui n’est pas sur `master` (code)

Dans le dépôt **surfy** (application), à la racine du repo :

```bash
git fetch origin master
git log origin/master..HEAD --oneline --no-merges
```

Ou raccourci :

```bash
pnpm help:changelog:since-master
```

Filtrer les `feat:` / `fix:` pertinents pour l’utilisateur (voir la règle Cursor `surfy-help` dans le repo surfy).

### 2. Rédiger dans `app-alpha.md`

- Décrire les changements **pour les utilisateurs** (même ton que `app.md`).
- Vous pouvez être **plus détaillé** : sous-points, notes « à fusionner », plusieurs formulations.
- Pas besoin d’attendre le numéro de version finale ; vous pouvez utiliser un titre du type `## JJ mois AAAA - alpha` ou regrouper par thème.

### 3. À la mise en prod (merge sur `master` + release)

1. Ouvrir `app.md` et ajouter (ou compléter) le bloc `## date - vX.Y.Z` en vous alignant sur le numéro de version (`src/version.json` dans le dépôt surfy) et sur votre processus de release.
2. **Transférer** les puces utiles depuis `app-alpha.md` : les **condenser** ou les **réécrire** pour une lecture « release note » courte.
3. **Nettoyer** `app-alpha.md` : retirer ce qui est désormais en prod, ou laisser une section vide prête pour le prochain cycle.

### 4. Déploiement

Merger **surfy-help** et publier le site : les deux URLs restent valides ; seul le contenu change.

---

*Pour les règles rédactionnelles détaillées (interdictions, balises MDX, intégrations tierces), se reporter à la règle `.cursor/rules/surfy-help.mdc` du dépôt surfy.*
