# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ pnpm i
```

### Local Development

```
$ pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true pnpm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Règle Cursor : gestion des propriétés dans la documentation help

- Toujours utiliser la balise spéciale pour chaque propriété d'entité :
  ```
  <P code="entité:nomTechniquePropriété" />
  ```
  Exemple : `<P code="person:lastname" />`, `<P code="item:reference" />`
- Utiliser le nom technique exact de la propriété (voir les pages markdown générées sous `entities/` dans ce dépôt, ou les clés i18n `models.<Type>.properties.<nom>.label` dans le dépôt **surfy** `src/translations/i18n-ln/`).
- Ne jamais écrire la description d'une propriété en dur dans le texte : laisser la balise afficher dynamiquement l'aide et la traduction.
- Pour les listes de propriétés, remplacer chaque nom par la balise spéciale correspondante.
- Appliquer la même règle pour les propriétés de type relation (ex : `<P code="person:organization" />`).
- En cas d'erreur de rendu, vérifier et corriger le nom technique utilisé.

**But :** garantir la cohérence, la maintenabilité et la traduction automatique des aides sur les propriétés dans toute la documentation utilisateur.
