# Serveur MCP Surfy - Guide de Démarrage Rapide

Connectez votre espace de travail Surfy à Cursor IDE avec notre serveur Model Context Protocol (MCP) pour accéder aux données des personnes, informations d'entreprise et plus directement dans votre chat IA.

## 🚀 Ajouter à Cursor

<div >
  <a href="cursor://anysphere.cursor-deeplink/mcp/install?name=surfy&config=eyJ1cmwiOiJodHRwczovL2FwcC5zdXJmeS5wcm8vYXBpL3YxL21jcCJ9" >
    + Ajouter Surfy MCP à Cursor
  </a>
</div>

## Ce que vous obtiendrez

Une fois connecté, vous pouvez demander à Cursor :

- **"Montre-moi toutes les entreprises dans Surfy"** - Liste les entreprises disponibles et leurs configurations
- **"Récupère les personnes de [nom-entreprise]"** - Récupère les données des employés pour des entreprises spécifiques  
- **"Quelles ressources sont disponibles ?"** - Affiche toutes les sources de données accessibles
- **"Initialise la connexion MCP"** - Teste la connexion à Surfy

## Prérequis

Avant d'ajouter le serveur MCP, assurez-vous :

1. **Vous avez accès à Surfy** - Le serveur MCP se connecte à l'instance de production Surfy
2. **Authentification valide** - Vous aurez besoin d'identifiants appropriés pour accéder aux données d'entreprise et de personnes

## Configuration Manuelle (Alternative)

Si le bouton "Ajouter à Cursor" ne fonctionne pas, vous pouvez configurer manuellement le serveur MCP :

1. Ouvrez les paramètres Cursor
2. Ajoutez cette configuration à vos serveurs MCP :

```json
{
  "mcpServers": {
    "surfy": {
      "transport": {
        "type": "streamable_http",
        "url": "https://app.surfy.pro/api/v1/mcp"
      }
    }
  }
}
```

## Outils Disponibles

### `list_companies`
Liste toutes les entreprises disponibles dans Surfy avec leurs configurations.

### `list_people` 
Récupère les données des personnes d'une entreprise/locataire spécifique.

## Exemples d'Utilisation

Une fois connecté, essayez ces commandes dans le chat Cursor :

```
@surfy Quelles entreprises sont disponibles dans Surfy ?
@surfy Montre-moi les personnes dans acme-corp
@surfy Liste toutes les ressources disponibles
```

## Dépannage

**Problèmes de connexion ?**
- Assurez-vous d'avoir un accès internet pour atteindre `https://app.surfy.pro`
- Vérifiez que vous avez des identifiants Surfy valides
- Redémarrez Cursor IDE après avoir ajouté la configuration

**Erreurs d'authentification ?**
- Assurez-vous d'avoir un accès approprié à l'instance Surfy
- Vérifiez que vos identifiants sont valides pour les données d'entreprise que vous essayez d'accéder

## Besoin d'Aide ?

Pour des instructions de configuration détaillées et une configuration avancée, consultez :
- [Guide de Configuration MCP Cursor](./mcp-cursor-setup.md)
- [Documentation d'Intégration MCP](./mcp-cursor-integration.md)

---

*Ce serveur MCP fournit un accès sécurisé aux données des personnes et entreprises de Surfy via l'interface de chat IA de Cursor.*
