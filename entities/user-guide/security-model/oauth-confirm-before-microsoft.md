---
sidebar_label: Confirmation avant Microsoft
---

# Page de confirmation avant Microsoft

Quand vous **Authentifiez** un accès Surfy depuis un outil connecté (par exemple pour autoriser Surfy à répondre dans un assistant), Surfy affiche d’abord une **page de confirmation** sur le site Surfy, **avant** la page Microsoft.

## Pourquoi cette page ?

Cette étape **améliore la sécurité contre le phishing**. Vous voyez clairement que la demande de connexion vient de **Surfy** (logo, adresse Surfy, message) avant de saisir vos identifiants chez Microsoft. Si une page Microsoft s’ouvrait seule, sans ce contexte, il serait plus difficile de vérifier l’origine de la demande.

## Ce que vous voyez

- Une page Surfy publique (pas besoin d’être déjà connecté à Surfy).
- Une **raison d’authentification** : un court texte qui explique pourquoi la connexion est demandée (par exemple pour authentifier Surfy depuis un outil connecté). Si la raison n’est pas connue, un message générique de connexion Surfy s’affiche.
- Un bouton pour **continuer vers Microsoft**.

## Ensuite

1. Vous continuez vers Microsoft et vous vous authentifiez comme d’habitude.
2. Microsoft vous renvoie sur **la même page Surfy**.
3. Selon le cas :
   - soit Surfy vous **renvoie** vers l’outil qui a demandé la connexion ;
   - soit un message de **merci** s’affiche et la fenêtre se **ferme automatiquement** après quelques secondes.

## Limites

- Cette page concerne l’**authentification Surfy depuis un outil connecté** (pont d’autorisation), pas la connexion quotidienne à l’application Surfy dans le navigateur.
- Ne saisissez jamais vos identifiants Microsoft sur une page qui **n’affiche pas** d’abord le contexte Surfy décrit ci-dessus.

## Voir aussi

- [Authentification avec claims](./authentication-with-claims)
- [Authentification sans claims](./authentication-without-claims)
