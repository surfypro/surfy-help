# Configuration globale de la plateforme (parking)

Ce guide décrit la configuration de base nécessaire pour que la réservation de parking fonctionne.

## 1) Configurer les types de places de parking

Créer (ou vérifier) les types d’espaces parking avec les codes attendus dans <P code="roomType:code" /> :

- `PARKING-CAR`
- `PARKING-ELECTRIC-CAR`
- `PARKING-PRM`

Les codes doivent être strictement identiques (majuscules, tirets).

## 2) Configurer les correspondances véhicule -> type de place

Dans les configurations de réservation véhicule :

- définir le type de véhicule (<P code="vehicleType:code" />);
- définir le type de propulsion (<P code="vehiclePropulsionType:code" />);
- rattacher les types de place parking autorisés via `BookingVehicleConfigurationToParkingRoomTypeConfiguration`;
- définir les créneaux autorisés (matin / après-midi / journée);
- définir l’option de réservation unique par jour.

### À propos des codes `vehicleType:code` (ex: `CAR`, `CAR-...`)

Contrairement aux codes des types de places parking (`PARKING-CAR`, etc.), les codes de **type de véhicule** ne sont pas une liste “standard” imposée par Surfy : ils proviennent de votre référentiel (master data) et peuvent varier selon les tenants.

Ce que fait Surfy :

- un véhicule est rattaché à un type de véhicule et un type de propulsion (via leurs IDs) ;
- la compatibilité parking se base ensuite sur les **codes** de ces master data (ex : `CAR`, `CAR-COMPANY`, etc.) pour retrouver la configuration de réservation correspondante.

### Convention recommandée pour les codes véhicule

Pour simplifier l'exploitation et éviter les ambiguïtés entre tenants, nous recommandons :

- `vehicleType:code` :
  - `CAR`
  - `CAR-PRM` (véhicule PMR)
  - `MOTORBIKE`
  - `BICYCLE`
- `vehiclePropulsionType:code` :
  - `THERMAL`
  - `ELECTRIC`
  - `HYBRID`

Important :

- cette convention est une **recommandation** (pas une contrainte technique) ;
- les mappings parking fonctionnent tant que les mêmes codes sont utilisés de bout en bout (master data véhicule + configuration de réservation).

Pour vérifier/maintenir ces codes, référez-vous aux pages de référence :

- **Type de véhicule** : `/entities/surfy/global-admin/admin-vehicles/vehicle-type`
- **Type de propulsion de véhicule** : `/entities/surfy/global-admin/admin-vehicles/vehicle-propulsion-type`

## 3) Point bloquant important

Sans lignes `BookingVehicleConfigurationToParkingRoomTypeConfiguration` valides, les places de parking ne sont pas proposées.

En pratique :

- une combinaison véhicule sans correspondance parking est ignorée ;
- si aucune combinaison de l’utilisateur ne correspond à un type de place autorisé, la réservation parking est indisponible.

### Pourquoi c'est bloquant

Le moteur de réservation ne propose pas les places "en général".  
Il cherche d'abord une correspondance stricte entre :

- le type de véhicule de l'utilisateur ;
- le type de propulsion du véhicule ;
- les lignes de mapping parking configurées.

Si aucune ligne ne correspond au véhicule, aucune place n'est affichée.

### Comment configurer (pas à pas)

1. Créer une ligne `BookingVehicleConfiguration` pour chaque couple autorisé :
   - `vehicleTypeId` (ex: voiture) ;
   - `vehiclePropulsionTypeId` (ex: thermique, électrique, hybride).
2. Pour chaque ligne `BookingVehicleConfiguration`, ajouter une ou plusieurs lignes `BookingVehicleConfigurationToParkingRoomTypeConfiguration`.
3. Dans chaque ligne enfant, définir :
   - le type de place parking (`parkingRoomTypeCode`) ;
   - les créneaux autorisés (`allowDaySlotAm`, `allowDaySlotPm`, `allowDaySlotAll`) ;
   - la règle "une réservation max par jour" (`singleBookingPerDay`).
4. Vérifier que les codes de type de place existent réellement dans les types de salle :
   - `PARKING-CAR`, `PARKING-ELECTRIC-CAR`, `PARKING-PRM`.

### A quoi sert chaque champ

Pour `BookingVehicleConfiguration` (niveau parent) :

- `vehicleTypeId` : identifie la famille du véhicule ciblée par la règle.
- `vehiclePropulsionTypeId` : précise la propulsion pour affiner la règle.
- `id` : identifiant technique, utilisé par les lignes enfants.

Pour `BookingVehicleConfigurationToParkingRoomTypeConfiguration` (niveau mapping parking) :

- `bookingVehicleConfigurationId` : rattache la ligne au couple parent type + propulsion.
- `parkingRoomTypeCode` : type de place autorisé pour ce couple véhicule.
- `allowDaySlotAm` : autorise la réservation sur le créneau matin.
- `allowDaySlotPm` : autorise la réservation sur le créneau après-midi.
- `allowDaySlotAll` : autorise la réservation sur la journée complète.
- `singleBookingPerDay` : empêche plusieurs réservations parking le même jour pour les véhicules couverts par cette ligne.

Champs techniques (audit/multi-tenant) :

- `companyId`, `createdAt`, `updatedAt`, `externalId`, `userCompanyCreatedById`, `userCompanyUpdatedById`.
- Ces champs servent à la traçabilité et au contexte société, pas à la logique métier de compatibilité parking.

### Exemple concret

Exemple de règle :

- Parent `BookingVehicleConfiguration` :
  - `vehicleType = CAR`
  - `vehiclePropulsionType = ELECTRIC`
- Enfant `BookingVehicleConfigurationToParkingRoomTypeConfiguration` :
  - `parkingRoomTypeCode = PARKING-ELECTRIC-CAR`
  - `allowDaySlotAm = true`
  - `allowDaySlotPm = true`
  - `allowDaySlotAll = false`
  - `singleBookingPerDay = true`

Résultat :

- un utilisateur avec une voiture électrique peut réserver une place électrique le matin ou l'après-midi ;
- il ne peut pas réserver ce parking en "journée complète" ;
- il ne peut pas faire deux réservations parking le même jour.
