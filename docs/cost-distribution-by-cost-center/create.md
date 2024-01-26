---
sidebar_position: 1
---

# Refacturer les espaces par centre de coût

Surfy propose un calcul automatique des clés de répartition et surfaces cumulées par centre de coût sur un ou plusieurs bâtiments afin de répartir et refacturer les charges du ou des bâtiments au prorata des surfaces d'occupation ou des personnes affectées à ces espaces.


Pour refacturer les espaces par centres de coût dans Surfy, tous les espaces à facturer doivent être renseignés sur leur centre de coût et leur type de distribution des coûts.

Pour refacturer un espace entièrement à son centre de coût, le type de distribution des coûts de l'espace doit être "centre de coût par espace".

Pour refacturer les postes de travail d'un espace à leur centre de coût, tous les postes de travail à facturer doivent être renseignés sur leur centre de coût et le type de distribution des coûts de leur espace d'appartenance doit être "centre de coût par poste de travail".


On peut choisir le type de distribution des coûts pour chaque espace, et panacher ainsi des espaces refacturés par espace et des ratios d'espace facturés par poste de travail

Pour plus d'information sur les types de distribution des coûts, voir le chapitre [Type de distribution des coûts](https://help.surfy.pro/docs/costcenter/create#type-de-distribution-des-co%C3%BBts).

## Clés de répartition et surfaces qualifiées par centre de coût

Une fois ces informations entrées, à partir de la page d’accueil, cliquer sur l’icône au bout de la ligne de couleur du bâtiment pour demander les « Clés de répartition et surfaces qualifiées par Centre de Coût pour le bâtiment XXX » 

On obtient, par Centre de Coût, les surfaces cumulées et les clés de répartition financières. 

Les centres de coût à ventiler ne sont pas ventilés dans ce tableau. Ils sont présents dans la liste comme tout autre centre de coût. 

En ouvrant le papillon à gauche de chaque centre de coût, on obtient la liste détaillée de chaque espace et des postes de travail de chaque espace, rattachés au centre de coût, avec la surface à refacturer et la clé de répartition interne au centre de coût pour l'espace ou les postes de travail de l'espace. 

Le centre de coût nommé "-" liste les erreurs sur les espaces et les postes de travail qui ont un "type de distribution des coûts" mais pas de "centre de coût". On peut facilement compléter le centre de coût en cliquant sur le nom de chacun des espaces ou postes de travail listés dans cet onglet jusqu’à tout renseigner et retirer de la liste. 

Les espaces et postes de travail sans "type de distribution des coûts" n’apparaissent nulle part et leur surface n’est comptabilisée nulle part. 

 :::tip Bon à savoir
 Cliquer sur n'importe quel nom d'espace à la gauche des listes renvoit dans l'environnement de l'espace concerné, sur les plans. On peut alors modifier directement l'information, puis après rafraichissement(F5) revenir sur les clés de répartitions mises à jour.
 :::


## Exports en Fichier Excel 

Les données sont disponibles en fichiers Excel, avec ou sans ventilation, par étage ou pour l’ensemble du bâtiment :


### Le fichier Excel, par Etage avec ventilation

-   colonne A : Nom de l'étage  
-   colonne B : Centre de coût (Nom du Centre de Coût)
-   colonne C : Surface des espaces incluant les ventilations de l'étage (Surface à refacturer, par étage et CdC)
-   colonne D : Surface des espaces avant ventilation (Surface attribuée à chaque CdC, par étage)
-   colonne E : Clés de répartition de l'étage avec ventilation (la somme des clés par étage donne 1)
-   colonne F : Surface des espaces à ventiler sur l'étage (prorata de surface ventilée sur le CdC)
-   colonne G : Surface totale de l'étage incluant les surfaces à ventiler (Somme de toutes les surfaces ayant un CdC)
-   colonne H : Surface totale à ventiler sur l'étage (Somme de toutes les surfaces à ventiler sur l’étage)
-   colonne I : Surface de l'étage à ventiler sur le bâtiment (Somme des surfaces à ventiler sur le bâtiment)


 ### Le fichier Excel, par Bâtiment avec ventilation

-   colonne A : Centre de coût (Nom du Centre de Coût) 
-   colonne B : Surface des espaces incluant les ventilations (Surface à refacturer, par CdC) 
-   colonne C : Clés de répartition du bâtiment avec ventilation (La somme des clés sur le bâtiment donne 1) 
-   colonne D : Surface des espaces à ventiler (prorata de surface ventilée sur le CdC) 
-   colonne E : Surface des espaces avant ventilation (Surface attribuée à chaque CdC) 
-   colonne F : Surface totale à ventiler dans le bâtiment (Somme de toutes les surfaces à ventiler sur le bâtiment) 
-   colonne G : Surface totale du bâtiment non ventilée (Somme de toutes les surfaces non ventilées sur le bâtiment) 
-   colonne H : Surface totale du bâtiment incluant les surfaces à ventiler (Somme de toutes les surfaces ayant un CdC) 


### Le fichier Excel, sans ventilation

-   colonne A : Centre de coût (Nom du Centre de Coût) 
-   colonne B : Surface (Surface à refacturer, par CdC) 
-   colonne C : Clés de répartition (la somme des clés sur le bâtiment donne 1) 


### Le fichier Excel, détails sans ventilation

-   colonne A : Centre de coût (Nom du Centre de Coût) 
-   colonne B : Type (entité à refacturer, espace ou poste de travail) 
-   colonne C : Espace (espace concernée) 
-   colonne D : Étage (Etage concerné) 
-   colonne E : Bâtiment (Bâtiment concerné) 
-   colonne F : Surface (Surface à refacturer) 
-   colonne G : Clé de répartition pour le bâtiment (La somme des clés sur le bâtiment donne 1) 
-   colonne H : Nombre de postes de travail (nombre de postes de travail du CdC) 
-   colonne I : Nombre total des postes de travail (nombre de postes de travail total de l’espace) 
-   colonne J : Clé de répartition pour le centre de coût (La somme des clés sur le CdC donne 1) 

