# Rapport des modifications Cursor sur les tutoriels

Ce fichier liste les tutoriels modifiés pour appliquer la règle Cursor (balises <P code="entité:propriété" /> pour chaque propriété d'entité).

## Format du rapport
- **Fichier** : chemin du fichier modifié
- **Propriétés balisées** : liste des propriétés remplacées par des balises
- **Résumé** : description succincte des changements

---

### Extrait des premiers fichiers modifiés

#### docs/tutorials/person/create.md
- **Propriétés balisées** : lastname, firstname, email, picture, title, monitorReference, computerReference, telephone, cellphone, code, startDate, endDate, info, notAffectable, organization, personState, personSecurityProfile, costCenter, company
- **Résumé** : Toutes les propriétés citées dans la création d'une personne sont balisées avec la syntaxe Cursor.

#### docs/tutorials/organization/create.md
- **Propriétés balisées** : name, color, organization (organisation mère), code
- **Résumé** : Les propriétés principales de l'organisation (nom, couleur, organisation mère, code) sont balisées dans les sections création de Direction et Service.

#### docs/tutorials/objects/family/create.md
- **Propriétés balisées** : itemTypeFamily:name
- **Résumé** : Le nom de la famille de types d'objet est balisé lors de la création.

#### docs/tutorials/objects/item/create.md
- **Propriétés balisées** : reference, code, purchaseDate
- **Résumé** : Les propriétés principales de l'objet (mobilier) sont balisées lors de la création.

#### docs/tutorials/objects/item/edit.md
- **Propriétés balisées** : reference, code, purchaseDate
- **Résumé** : Les propriétés éditables de l'objet sont balisées lors de la modification.

// Rapport à compléter au fil du traitement de tous les tutoriels... 