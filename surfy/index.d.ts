import { default as default_2 } from 'react';
import { ReactNode } from 'react';

declare type ApiUserPropertyNames = 'id' | 'clientSecret' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'apiUserToJupRoles' | 'apiUserToContentRoles' | 'companyId' | 'company';

declare type ApiUserPropertyTypeRecord = Record<ApiUserPropertyNames, IPropertyTypeDefinition>;

declare type ApiUserToContentRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'apiUser' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ApiUserToContentRolePropertyTypeRecord = Record<ApiUserToContentRolePropertyNames, IPropertyTypeDefinition>;

declare type ApiUserToJupRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'apiUser' | 'jupRoleId' | 'jupRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ApiUserToJupRolePropertyTypeRecord = Record<ApiUserToJupRolePropertyNames, IPropertyTypeDefinition>;

export declare const appVersion: string;

declare type AuthentificationConnectionPropertyNames = 'id' | 'name' | 'publicIdpCertificate' | 'domaines' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRules';

declare type AuthentificationConnectionPropertyTypeRecord = Record<AuthentificationConnectionPropertyNames, IPropertyTypeDefinition>;

declare type BuildingPropertyNames = 'id' | 'name' | 'color' | 'surface' | 'leaseStartDate' | 'leaseEndDate' | 'purchaseDate' | 'documents' | 'picture' | 'regulatoryCapacity' | 'parkingSpaceCount' | 'constructionYear' | 'yearlyCondominiumFees' | 'yearlyRent' | 'yearlyParkingRent' | 'yearlyTaxFees' | 'yearlyExploitationFees' | 'rentReferenceIndex' | 'securityDeposit' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'dimensionPeopleCount' | 'address' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'company' | 'buildingTypeId' | 'buildingType' | 'userCompanyOwnerId' | 'userCompanyOwner' | 'jupUiLayoutId' | 'jupUiLayout' | 'campusId' | 'campus' | 'buildingId' | 'building' | 'buildings' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'floors' | 'roomTypeGroupBuildings' | 'costCenterBuildings' | 'dimensionBuildings' | 'facts' | 'organizationBuildings' | 'roomTypeBuildings' | 'personToBuildings' | 'dimensionTypeToBuildings' | 'contentRoleToBuildings';

declare type BuildingPropertyTypeRecord = Record<BuildingPropertyNames, IPropertyTypeDefinition>;

declare type BuildingTypePropertyNames = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'company' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'buildings';

declare type BuildingTypePropertyTypeRecord = Record<BuildingTypePropertyNames, IPropertyTypeDefinition>;

export declare type CamelizedObjectTypeNames = CamelizedSingularObjectTypes;

declare type CamelizedPluralObjectTypes = "occupancyStatuses" | "users" | "userRefreshTokens" | "companyTypes" | "companies" | "campuses" | "roomConnectorTypes" | "roomConnectors" | "userCompanies" | "personGenders" | "personCompanies" | "jupUiLayouts" | "buildingTypes" | "organizations" | "itemTypeFamilies" | "manufacturers" | "object3dModels" | "itemTypes" | "buildings" | "mapScales" | "structures" | "structurePoints" | "floors" | "distributionCostTypes" | "roomTypeGroups" | "roomTypes" | "roomTypeGroupToRoomTypes" | "roomTypeGroupFloors" | "roomTypeGroupBuildings" | "costCenters" | "costCenterBuildings" | "costCenterFloors" | "rooms" | "roomPoints" | "roomPointRooms" | "roomPointSegmentTypes" | "roomPointSegments" | "itemTypePoints" | "dimensionTypes" | "dimensions" | "dimensionRooms" | "dimensionFloors" | "dimensionBuildings" | "factTypes" | "facts" | "personStates" | "personSecurityProfiles" | "people" | "personToPersonTypes" | "personToPeople" | "vehicleTypes" | "vehiclePropulsionTypes" | "vehicles" | "personToVehicles" | "roomAffectations" | "workplaceTypes" | "workplaceUsageTypes" | "workplaceTypeItemTypes" | "workplaces" | "items" | "workplaceAffectations" | "organizationFloors" | "organizationBuildings" | "roomTypeFloors" | "roomTypeBuildings" | "itemToPeople" | "personToBuildings" | "dimensionToPeople" | "dimensionTypeToBuildings" | "workingLocations" | "personWorkingLocations" | "personToWorkplaceBookings" | "personToRoomBookings" | "personToDimensionBookings" | "personCompanyMissions" | "personCompanyToItemTypes" | "personCompanyToRoomTypes" | "personCompanyToItems" | "legends" | "openerPostMessageHosts" | "companyWorkingLocations" | "jupObjectTypes" | "jupUiViews" | "jupRoles" | "jupUiOptions" | "jupUiOperations" | "contentRoles" | "jupUserCompanyToJupRoles" | "jupRoleToJupUiViews" | "jupRoleToJupObjectTypes" | "jupRoleToJupUiOptions" | "jupRoleToJupUiOperations" | "contentRoleToBuildings" | "contentRoleToUserCompanies" | "contentRoleToFloors" | "partnerApiCredentials" | "apiUsers" | "apiUserToJupRoles" | "apiUserToContentRoles" | "jupUiTenantOperations" | "contentRoleToJupUiTenantOperations" | "authentificationConnections" | "userRegistrationTenantRules" | "userRegistrationTenantRuleToJupRoles" | "userRegistrationTenantRuleToContentRoles" | "partnerExportMappingConfigurations" | "partnerExportMappings" | "partnerExportMappingToRoomTypes" | "partnerExportMappingConfigurationToFloors" | "jupRoleToJupUiLayouts" | "jupUiLayoutTabs" | "jupRoleToJupUiLayoutTabs" | "itemFacts" | "featureFamilies" | "featureGroups" | "features";

declare type CamelizedSingularObjectTypes = "occupancyStatus" | "user" | "userRefreshToken" | "companyType" | "company" | "campus" | "roomConnectorType" | "roomConnector" | "userCompany" | "personGender" | "personCompany" | "jupUiLayout" | "buildingType" | "organization" | "itemTypeFamily" | "manufacturer" | "object3dModel" | "itemType" | "building" | "mapScale" | "structure" | "structurePoint" | "floor" | "distributionCostType" | "roomTypeGroup" | "roomType" | "roomTypeGroupToRoomType" | "roomTypeGroupFloor" | "roomTypeGroupBuilding" | "costCenter" | "costCenterBuilding" | "costCenterFloor" | "room" | "roomPoint" | "roomPointRoom" | "roomPointSegmentType" | "roomPointSegment" | "itemTypePoint" | "dimensionType" | "dimension" | "dimensionRoom" | "dimensionFloor" | "dimensionBuilding" | "factType" | "fact" | "personState" | "personSecurityProfile" | "person" | "personToPersonType" | "personToPerson" | "vehicleType" | "vehiclePropulsionType" | "vehicle" | "personToVehicle" | "roomAffectation" | "workplaceType" | "workplaceUsageType" | "workplaceTypeItemType" | "workplace" | "item" | "workplaceAffectation" | "organizationFloor" | "organizationBuilding" | "roomTypeFloor" | "roomTypeBuilding" | "itemToPerson" | "personToBuilding" | "dimensionToPerson" | "dimensionTypeToBuilding" | "workingLocation" | "personWorkingLocation" | "personToWorkplaceBooking" | "personToRoomBooking" | "personToDimensionBooking" | "personCompanyMission" | "personCompanyToItemType" | "personCompanyToRoomType" | "personCompanyToItem" | "legend" | "openerPostMessageHost" | "companyWorkingLocation" | "jupObjectType" | "jupUiView" | "jupRole" | "jupUiOption" | "jupUiOperation" | "contentRole" | "jupUserCompanyToJupRole" | "jupRoleToJupUiView" | "jupRoleToJupObjectType" | "jupRoleToJupUiOption" | "jupRoleToJupUiOperation" | "contentRoleToBuilding" | "contentRoleToUserCompany" | "contentRoleToFloor" | "partnerApiCredential" | "apiUser" | "apiUserToJupRole" | "apiUserToContentRole" | "jupUiTenantOperation" | "contentRoleToJupUiTenantOperation" | "authentificationConnection" | "userRegistrationTenantRule" | "userRegistrationTenantRuleToJupRole" | "userRegistrationTenantRuleToContentRole" | "partnerExportMappingConfiguration" | "partnerExportMapping" | "partnerExportMappingToRoomType" | "partnerExportMappingConfigurationToFloor" | "jupRoleToJupUiLayout" | "jupUiLayoutTab" | "jupRoleToJupUiLayoutTab" | "itemFact" | "featureFamily" | "featureGroup" | "feature";

declare type CampusPropertyNames = 'id' | 'name' | 'color' | 'address' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'buildings' | 'companyId' | 'company';

declare type CampusPropertyTypeRecord = Record<CampusPropertyNames, IPropertyTypeDefinition>;

declare type CapitalizedPluralObjectTypes = "OccupancyStatuses" | "Users" | "UserRefreshTokens" | "CompanyTypes" | "Companies" | "Campuses" | "RoomConnectorTypes" | "RoomConnectors" | "UserCompanies" | "PersonGenders" | "PersonCompanies" | "JupUiLayouts" | "BuildingTypes" | "Organizations" | "ItemTypeFamilies" | "Manufacturers" | "Object3dModels" | "ItemTypes" | "Buildings" | "MapScales" | "Structures" | "StructurePoints" | "Floors" | "DistributionCostTypes" | "RoomTypeGroups" | "RoomTypes" | "RoomTypeGroupToRoomTypes" | "RoomTypeGroupFloors" | "RoomTypeGroupBuildings" | "CostCenters" | "CostCenterBuildings" | "CostCenterFloors" | "Rooms" | "RoomPoints" | "RoomPointRooms" | "RoomPointSegmentTypes" | "RoomPointSegments" | "ItemTypePoints" | "DimensionTypes" | "Dimensions" | "DimensionRooms" | "DimensionFloors" | "DimensionBuildings" | "FactTypes" | "Facts" | "PersonStates" | "PersonSecurityProfiles" | "People" | "PersonToPersonTypes" | "PersonToPeople" | "VehicleTypes" | "VehiclePropulsionTypes" | "Vehicles" | "PersonToVehicles" | "RoomAffectations" | "WorkplaceTypes" | "WorkplaceUsageTypes" | "WorkplaceTypeItemTypes" | "Workplaces" | "Items" | "WorkplaceAffectations" | "OrganizationFloors" | "OrganizationBuildings" | "RoomTypeFloors" | "RoomTypeBuildings" | "ItemToPeople" | "PersonToBuildings" | "DimensionToPeople" | "DimensionTypeToBuildings" | "WorkingLocations" | "PersonWorkingLocations" | "PersonToWorkplaceBookings" | "PersonToRoomBookings" | "PersonToDimensionBookings" | "PersonCompanyMissions" | "PersonCompanyToItemTypes" | "PersonCompanyToRoomTypes" | "PersonCompanyToItems" | "Legends" | "OpenerPostMessageHosts" | "CompanyWorkingLocations" | "JupObjectTypes" | "JupUiViews" | "JupRoles" | "JupUiOptions" | "JupUiOperations" | "ContentRoles" | "JupUserCompanyToJupRoles" | "JupRoleToJupUiViews" | "JupRoleToJupObjectTypes" | "JupRoleToJupUiOptions" | "JupRoleToJupUiOperations" | "ContentRoleToBuildings" | "ContentRoleToUserCompanies" | "ContentRoleToFloors" | "PartnerApiCredentials" | "ApiUsers" | "ApiUserToJupRoles" | "ApiUserToContentRoles" | "JupUiTenantOperations" | "ContentRoleToJupUiTenantOperations" | "AuthentificationConnections" | "UserRegistrationTenantRules" | "UserRegistrationTenantRuleToJupRoles" | "UserRegistrationTenantRuleToContentRoles" | "PartnerExportMappingConfigurations" | "PartnerExportMappings" | "PartnerExportMappingToRoomTypes" | "PartnerExportMappingConfigurationToFloors" | "JupRoleToJupUiLayouts" | "JupUiLayoutTabs" | "JupRoleToJupUiLayoutTabs" | "ItemFacts" | "FeatureFamilies" | "FeatureGroups" | "Features";

declare type CapitalizedSingularObjectTypes = "OccupancyStatus" | "User" | "UserRefreshToken" | "CompanyType" | "Company" | "Campus" | "RoomConnectorType" | "RoomConnector" | "UserCompany" | "PersonGender" | "PersonCompany" | "JupUiLayout" | "BuildingType" | "Organization" | "ItemTypeFamily" | "Manufacturer" | "Object3dModel" | "ItemType" | "Building" | "MapScale" | "Structure" | "StructurePoint" | "Floor" | "DistributionCostType" | "RoomTypeGroup" | "RoomType" | "RoomTypeGroupToRoomType" | "RoomTypeGroupFloor" | "RoomTypeGroupBuilding" | "CostCenter" | "CostCenterBuilding" | "CostCenterFloor" | "Room" | "RoomPoint" | "RoomPointRoom" | "RoomPointSegmentType" | "RoomPointSegment" | "ItemTypePoint" | "DimensionType" | "Dimension" | "DimensionRoom" | "DimensionFloor" | "DimensionBuilding" | "FactType" | "Fact" | "PersonState" | "PersonSecurityProfile" | "Person" | "PersonToPersonType" | "PersonToPerson" | "VehicleType" | "VehiclePropulsionType" | "Vehicle" | "PersonToVehicle" | "RoomAffectation" | "WorkplaceType" | "WorkplaceUsageType" | "WorkplaceTypeItemType" | "Workplace" | "Item" | "WorkplaceAffectation" | "OrganizationFloor" | "OrganizationBuilding" | "RoomTypeFloor" | "RoomTypeBuilding" | "ItemToPerson" | "PersonToBuilding" | "DimensionToPerson" | "DimensionTypeToBuilding" | "WorkingLocation" | "PersonWorkingLocation" | "PersonToWorkplaceBooking" | "PersonToRoomBooking" | "PersonToDimensionBooking" | "PersonCompanyMission" | "PersonCompanyToItemType" | "PersonCompanyToRoomType" | "PersonCompanyToItem" | "Legend" | "OpenerPostMessageHost" | "CompanyWorkingLocation" | "JupObjectType" | "JupUiView" | "JupRole" | "JupUiOption" | "JupUiOperation" | "ContentRole" | "JupUserCompanyToJupRole" | "JupRoleToJupUiView" | "JupRoleToJupObjectType" | "JupRoleToJupUiOption" | "JupRoleToJupUiOperation" | "ContentRoleToBuilding" | "ContentRoleToUserCompany" | "ContentRoleToFloor" | "PartnerApiCredential" | "ApiUser" | "ApiUserToJupRole" | "ApiUserToContentRole" | "JupUiTenantOperation" | "ContentRoleToJupUiTenantOperation" | "AuthentificationConnection" | "UserRegistrationTenantRule" | "UserRegistrationTenantRuleToJupRole" | "UserRegistrationTenantRuleToContentRole" | "PartnerExportMappingConfiguration" | "PartnerExportMapping" | "PartnerExportMappingToRoomType" | "PartnerExportMappingConfigurationToFloor" | "JupRoleToJupUiLayout" | "JupUiLayoutTab" | "JupRoleToJupUiLayoutTab" | "ItemFact" | "FeatureFamily" | "FeatureGroup" | "Feature";

declare type CompanyPropertyNames = 'id' | 'name' | 'logoPath' | 'iconPath' | 'proxyImages' | 'workingDaysCount' | 'enablePathfinding' | 'planningNumberOfDays' | 'enableCrowdedDimensionForBooking' | 'enableBuildingBookingWhenAllDimensionsAreCrowded' | 'workplaceBookingConfirmationRange' | 'trackUserActivity' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyTypeId' | 'companyType' | 'userCompanies' | 'buildingTypes' | 'buildings' | 'companyWorkingLocations';

declare type CompanyPropertyTypeRecord = Record<CompanyPropertyNames, IPropertyTypeDefinition>;

declare type CompanyTypePropertyNames = 'id' | 'name' | 'billable' | 'createdAt' | 'updatedAt' | 'externalId' | 'companies';

declare type CompanyTypePropertyTypeRecord = Record<CompanyTypePropertyNames, IPropertyTypeDefinition>;

declare type CompanyWorkingLocationPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'company' | 'workingLocationId' | 'workingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy';

declare type CompanyWorkingLocationPropertyTypeRecord = Record<CompanyWorkingLocationPropertyNames, IPropertyTypeDefinition>;

declare type ContentRolePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'contentRoleToBuildings' | 'contentRoleToUserCompanies' | 'contentRoleToFloors' | 'apiUserToContentRoles' | 'contentRoleToJupUiTenantOperations' | 'userRegistrationTenantRuleToContentRoles' | 'companyId' | 'company';

declare type ContentRolePropertyTypeRecord = Record<ContentRolePropertyNames, IPropertyTypeDefinition>;

declare type ContentRoleToBuildingPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'contentRole' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ContentRoleToBuildingPropertyTypeRecord = Record<ContentRoleToBuildingPropertyNames, IPropertyTypeDefinition>;

declare type ContentRoleToFloorPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'contentRole' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ContentRoleToFloorPropertyTypeRecord = Record<ContentRoleToFloorPropertyNames, IPropertyTypeDefinition>;

declare type ContentRoleToJupUiTenantOperationPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiTenantOperationId' | 'jupUiTenantOperation' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ContentRoleToJupUiTenantOperationPropertyTypeRecord = Record<ContentRoleToJupUiTenantOperationPropertyNames, IPropertyTypeDefinition>;

declare type ContentRoleToUserCompanyPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'userCompany' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ContentRoleToUserCompanyPropertyTypeRecord = Record<ContentRoleToUserCompanyPropertyNames, IPropertyTypeDefinition>;

declare type CostCenterBuildingPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'costCenter' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type CostCenterBuildingPropertyTypeRecord = Record<CostCenterBuildingPropertyNames, IPropertyTypeDefinition>;

declare type CostCenterFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'costCenter' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type CostCenterFloorPropertyTypeRecord = Record<CostCenterFloorPropertyNames, IPropertyTypeDefinition>;

declare type CostCenterPropertyNames = 'id' | 'name' | 'color' | 'info' | 'distributeByFloor' | 'distributeByBuilding' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'costCenterBuildings' | 'costCenterFloors' | 'rooms' | 'people' | 'workplaces' | 'companyId' | 'company';

declare type CostCenterPropertyTypeRecord = Record<CostCenterPropertyNames, IPropertyTypeDefinition>;

declare type DaySlotType = 'am' | 'pm' | 'all' | 'custom';

declare type DimensionBuildingPropertyNames = 'id' | 'dimensionPeopleCount' | 'bookableWorkplacesCount' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'dimensionTypeId' | 'dimensionType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionBuildingPropertyTypeRecord = Record<DimensionBuildingPropertyNames, IPropertyTypeDefinition>;

declare type DimensionFloorPropertyNames = 'id' | 'bookableWorkplacesCount' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'dimensionTypeId' | 'dimensionType' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionFloorPropertyTypeRecord = Record<DimensionFloorPropertyNames, IPropertyTypeDefinition>;

declare type DimensionPropertyNames = 'id' | 'name' | 'color' | 'value' | 'peopleCount' | 'totalPeopleCount' | 'manualPeopleCount' | 'carbonFootprintPerMeter' | 'crowdedForBookingRate' | 'workplacesBookableOnlyViaDimension' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'dimensionType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'dimensionRooms' | 'dimensionFloors' | 'dimensionBuildings' | 'dimensionToPeople' | 'personToDimensionBookings' | 'companyId' | 'company';

declare type DimensionPropertyTypeRecord = Record<DimensionPropertyNames, IPropertyTypeDefinition>;

declare type DimensionRoomPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'roomId' | 'room' | 'dimensionTypeId' | 'dimensionType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionRoomPropertyTypeRecord = Record<DimensionRoomPropertyNames, IPropertyTypeDefinition>;

declare type DimensionToPersonPropertyNames = 'id' | 'priority' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'personId' | 'person' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionToPersonPropertyTypeRecord = Record<DimensionToPersonPropertyNames, IPropertyTypeDefinition>;

declare type DimensionTypePropertyNames = 'id' | 'name' | 'code' | 'order' | 'description' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'dimensions' | 'dimensionRooms' | 'dimensionFloors' | 'dimensionBuildings' | 'dimensionTypeToBuildings' | 'companyId' | 'company';

declare type DimensionTypePropertyTypeRecord = Record<DimensionTypePropertyNames, IPropertyTypeDefinition>;

declare type DimensionTypeToBuildingPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'dimensionType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionTypeToBuildingPropertyTypeRecord = Record<DimensionTypeToBuildingPropertyNames, IPropertyTypeDefinition>;

declare type DistributionCostTypePropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomTypes' | 'rooms' | 'companyId' | 'company';

declare type DistributionCostTypePropertyTypeRecord = Record<DistributionCostTypePropertyNames, IPropertyTypeDefinition>;

declare type FactPropertyNames = 'id' | 'value' | 'date' | 'createdAt' | 'updatedAt' | 'externalId' | 'factTypeId' | 'factType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type FactPropertyTypeRecord = Record<FactPropertyNames, IPropertyTypeDefinition>;

declare type FactTypePropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'facts' | 'companyId' | 'company';

declare type FactTypePropertyTypeRecord = Record<FactTypePropertyNames, IPropertyTypeDefinition>;

declare type FeatureFamilyPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'featureGroups' | 'companyId' | 'company';

declare type FeatureFamilyPropertyTypeRecord = Record<FeatureFamilyPropertyNames, IPropertyTypeDefinition>;

declare type FeatureGroupPropertyNames = 'id' | 'name' | 'sortOrder' | 'createdAt' | 'updatedAt' | 'externalId' | 'featureFamilyId' | 'featureFamily' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'features' | 'companyId' | 'company';

declare type FeatureGroupPropertyTypeRecord = Record<FeatureGroupPropertyNames, IPropertyTypeDefinition>;

declare type FeaturePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'featureGroupId' | 'featureGroup' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type FeaturePropertyTypeRecord = Record<FeaturePropertyNames, IPropertyTypeDefinition>;

declare type FloorPropertyNames = 'id' | 'name' | 'level' | 'height' | 'regulatoryCapacity' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'backgroundLayout' | 'backgroundLayoutOpacity' | 'pathfindingGraph' | 'createdAt' | 'updatedAt' | 'externalId' | 'buildingId' | 'building' | 'mapScaleId' | 'mapScale' | 'structureId' | 'structure' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomTypeGroupFloors' | 'costCenterFloors' | 'rooms' | 'roomPoints' | 'dimensionFloors' | 'organizationFloors' | 'roomTypeFloors' | 'contentRoleToFloors' | 'partnerExportMappingConfigurationToFloors' | 'companyId' | 'company';

declare type FloorPropertyTypeRecord = Record<FloorPropertyNames, IPropertyTypeDefinition>;

declare type FontAwesomeIconsStyle = IconStyle;

export declare function getObjectTypeDefinitionByName(objetTypeName: CamelizedSingularObjectTypes): IObjectTypeDefinition<OccupancyStatusPropertyTypeRecord> | IObjectTypeDefinition<UserPropertyTypeRecord> | IObjectTypeDefinition<UserRefreshTokenPropertyTypeRecord> | IObjectTypeDefinition<CompanyTypePropertyTypeRecord> | IObjectTypeDefinition<CompanyPropertyTypeRecord> | IObjectTypeDefinition<CampusPropertyTypeRecord> | IObjectTypeDefinition<RoomConnectorTypePropertyTypeRecord> | IObjectTypeDefinition<RoomConnectorPropertyTypeRecord> | IObjectTypeDefinition<UserCompanyPropertyTypeRecord> | IObjectTypeDefinition<PersonGenderPropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyPropertyTypeRecord> | IObjectTypeDefinition<JupUiLayoutPropertyTypeRecord> | IObjectTypeDefinition<BuildingTypePropertyTypeRecord> | IObjectTypeDefinition<OrganizationPropertyTypeRecord> | IObjectTypeDefinition<ItemTypeFamilyPropertyTypeRecord> | IObjectTypeDefinition<ManufacturerPropertyTypeRecord> | IObjectTypeDefinition<Object3dModelPropertyTypeRecord> | IObjectTypeDefinition<ItemTypePropertyTypeRecord> | IObjectTypeDefinition<BuildingPropertyTypeRecord> | IObjectTypeDefinition<MapScalePropertyTypeRecord> | IObjectTypeDefinition<StructurePropertyTypeRecord> | IObjectTypeDefinition<StructurePointPropertyTypeRecord> | IObjectTypeDefinition<FloorPropertyTypeRecord> | IObjectTypeDefinition<DistributionCostTypePropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupPropertyTypeRecord> | IObjectTypeDefinition<RoomTypePropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupToRoomTypePropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupFloorPropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupBuildingPropertyTypeRecord> | IObjectTypeDefinition<CostCenterPropertyTypeRecord> | IObjectTypeDefinition<CostCenterBuildingPropertyTypeRecord> | IObjectTypeDefinition<CostCenterFloorPropertyTypeRecord> | IObjectTypeDefinition<RoomPropertyTypeRecord> | IObjectTypeDefinition<RoomPointPropertyTypeRecord> | IObjectTypeDefinition<RoomPointRoomPropertyTypeRecord> | IObjectTypeDefinition<RoomPointSegmentTypePropertyTypeRecord> | IObjectTypeDefinition<RoomPointSegmentPropertyTypeRecord> | IObjectTypeDefinition<ItemTypePointPropertyTypeRecord> | IObjectTypeDefinition<DimensionTypePropertyTypeRecord> | IObjectTypeDefinition<DimensionPropertyTypeRecord> | IObjectTypeDefinition<DimensionRoomPropertyTypeRecord> | IObjectTypeDefinition<DimensionFloorPropertyTypeRecord> | IObjectTypeDefinition<DimensionBuildingPropertyTypeRecord> | IObjectTypeDefinition<FactTypePropertyTypeRecord> | IObjectTypeDefinition<FactPropertyTypeRecord> | IObjectTypeDefinition<PersonStatePropertyTypeRecord> | IObjectTypeDefinition<PersonSecurityProfilePropertyTypeRecord> | IObjectTypeDefinition<PersonPropertyTypeRecord> | IObjectTypeDefinition<PersonToPersonTypePropertyTypeRecord> | IObjectTypeDefinition<PersonToPersonPropertyTypeRecord> | IObjectTypeDefinition<VehicleTypePropertyTypeRecord> | IObjectTypeDefinition<VehiclePropulsionTypePropertyTypeRecord> | IObjectTypeDefinition<VehiclePropertyTypeRecord> | IObjectTypeDefinition<PersonToVehiclePropertyTypeRecord> | IObjectTypeDefinition<RoomAffectationPropertyTypeRecord> | IObjectTypeDefinition<WorkplaceTypePropertyTypeRecord> | IObjectTypeDefinition<WorkplaceUsageTypePropertyTypeRecord> | IObjectTypeDefinition<WorkplaceTypeItemTypePropertyTypeRecord> | IObjectTypeDefinition<WorkplacePropertyTypeRecord> | IObjectTypeDefinition<ItemPropertyTypeRecord> | IObjectTypeDefinition<WorkplaceAffectationPropertyTypeRecord> | IObjectTypeDefinition<OrganizationFloorPropertyTypeRecord> | IObjectTypeDefinition<OrganizationBuildingPropertyTypeRecord> | IObjectTypeDefinition<RoomTypeFloorPropertyTypeRecord> | IObjectTypeDefinition<RoomTypeBuildingPropertyTypeRecord> | IObjectTypeDefinition<ItemToPersonPropertyTypeRecord> | IObjectTypeDefinition<PersonToBuildingPropertyTypeRecord> | IObjectTypeDefinition<DimensionToPersonPropertyTypeRecord> | IObjectTypeDefinition<DimensionTypeToBuildingPropertyTypeRecord> | IObjectTypeDefinition<WorkingLocationPropertyTypeRecord> | IObjectTypeDefinition<PersonWorkingLocationPropertyTypeRecord> | IObjectTypeDefinition<PersonToWorkplaceBookingPropertyTypeRecord> | IObjectTypeDefinition<PersonToRoomBookingPropertyTypeRecord> | IObjectTypeDefinition<PersonToDimensionBookingPropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyMissionPropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyToItemTypePropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyToRoomTypePropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyToItemPropertyTypeRecord> | IObjectTypeDefinition<LegendPropertyTypeRecord> | IObjectTypeDefinition<OpenerPostMessageHostPropertyTypeRecord> | IObjectTypeDefinition<CompanyWorkingLocationPropertyTypeRecord> | IObjectTypeDefinition<JupObjectTypePropertyTypeRecord> | IObjectTypeDefinition<JupUiViewPropertyTypeRecord> | IObjectTypeDefinition<JupRolePropertyTypeRecord> | IObjectTypeDefinition<JupUiOptionPropertyTypeRecord> | IObjectTypeDefinition<JupUiOperationPropertyTypeRecord> | IObjectTypeDefinition<ContentRolePropertyTypeRecord> | IObjectTypeDefinition<JupUserCompanyToJupRolePropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiViewPropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupObjectTypePropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiOptionPropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiOperationPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToBuildingPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToUserCompanyPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToFloorPropertyTypeRecord> | IObjectTypeDefinition<PartnerApiCredentialPropertyTypeRecord> | IObjectTypeDefinition<ApiUserPropertyTypeRecord> | IObjectTypeDefinition<ApiUserToJupRolePropertyTypeRecord> | IObjectTypeDefinition<ApiUserToContentRolePropertyTypeRecord> | IObjectTypeDefinition<JupUiTenantOperationPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToJupUiTenantOperationPropertyTypeRecord> | IObjectTypeDefinition<AuthentificationConnectionPropertyTypeRecord> | IObjectTypeDefinition<UserRegistrationTenantRulePropertyTypeRecord> | IObjectTypeDefinition<UserRegistrationTenantRuleToJupRolePropertyTypeRecord> | IObjectTypeDefinition<UserRegistrationTenantRuleToContentRolePropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingConfigurationPropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingPropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingToRoomTypePropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingConfigurationToFloorPropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiLayoutPropertyTypeRecord> | IObjectTypeDefinition<JupUiLayoutTabPropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiLayoutTabPropertyTypeRecord> | IObjectTypeDefinition<ItemFactPropertyTypeRecord> | IObjectTypeDefinition<FeatureFamilyPropertyTypeRecord> | IObjectTypeDefinition<FeatureGroupPropertyTypeRecord> | IObjectTypeDefinition<FeaturePropertyTypeRecord>;

export declare function getPropertyTypeByCode(code: PropertyTypeCodes): IPropertyTypeDefinition;

export declare function getPropertyTypeByName<T extends string>(objectTypeName: CamelizedSingularObjectTypes, propertyTypeName: T): IPropertyTypeDefinition;

declare type GridNodeType = 'edge' | 'edge-merged' | 'grid' | 'merged';

declare interface I18NContextProps {
    defaultLanguage?: JupLanguageCode;
    children: React.ReactNode;
}

export declare function I18NHelpContext(props: I18NContextProps): ReactNode;

declare type IconShapeType = 'circle' | 'rectangle' | 'triangle';

declare type IconStyle = 'solid' | 'regular' | 'light' | 'thin' | 'duotone' | 'brands';

declare interface IContentSecurityStore {
    buildingIds: number[];
    floorIds: number[];
    roomIds: number[];
    jupTenantOperationNames: string[];
}

declare interface ICustomIcon extends ICustomIconProperties {
    name: string;
    unicode: string;
}

declare interface ICustomIconProperties {
    defaultBorderColor?: string;
    defaultBackgroundColor?: string;
    defaultColor?: string;
    defaultShape?: IconShapeType;
}

export declare interface IDatePickerLocalization {
    components: {
        MuiLocalizationProvider: {
            defaultProps: {
                localeText: Record<string, unknown>;
            };
        };
    };
}

declare interface IEntity {
    id: number;
}

declare interface IFloorPathfindingGraph {
    mergedNodes: IGridNode[];
}

declare interface IGenericObjectTypeDefinition {
    name: CamelizedSingularObjectTypes;
    type: MetaModelObjectTypeDefinitionType;
    scope: MetaModelObjectTypeTenantScopeType;
    propertiesByName: Record<string, IPropertyTypeDefinition>;
    plural: string;
    camelized: IObjectTypeCamelizedNames;
    capitalized: IObjectTypeCapitalizedNames;
    isMasterData: boolean;
    isReportingData: boolean;
    isSecurityData: boolean;
    hidden: boolean;
    context: {
        hasMany: CamelizedSingularObjectTypes[];
        belongsTo: CamelizedSingularObjectTypes[];
    };
}

declare interface IGridNode {
    point: IPoint2d;
    id: string;
    nexts: IGridNodeLink[];
    previous: IGridNodeLink[];
    type: GridNodeType;
    roomIds: number[];
    options: IGridNodeOptions;
    floorId: number;
}

declare interface IGridNodeLink {
    difficulty: number;
    nodeId: string;
}

declare interface IGridNodeOptions {
    groupSize?: number;
}

declare interface IJupAddress {
    address: string;
    lat: number;
    lng: number;
    structured?: IJupAddressStructured;
}

/**
 * Structured address with detailed components
 * Matches Microsoft Places API address format
 */
declare interface IJupAddressStructured {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    countryOrRegion?: string;
    countryOrRegionIsoCode?: string;
}

declare interface IJupIcon extends ICustomIcon {
    style: JupIconSyle;
    set: JupIconSet;
}

declare interface IJupImage {
    url: string;
    phash: string | null;
    size: ISize;
}

declare interface IJupLegendConfiguration {
    properties: string[];
}

declare interface IJupTransform {
    translate: IPoint2d;
    rotate: number;
    scale: number;
}

declare interface IModel3d {
    url: string;
}

declare interface IObjectTypeCamelizedNames {
    singular: CamelizedSingularObjectTypes;
    plural: CamelizedPluralObjectTypes;
    id: string;
}

declare interface IObjectTypeCapitalizedNames {
    singular: CapitalizedSingularObjectTypes;
    plural: CapitalizedPluralObjectTypes;
    id: string;
}

declare interface IObjectTypeDefinition<PropertiesByName extends Record<string, IPropertyTypeDefinition>> extends IGenericObjectTypeDefinition {
    propertiesByName: PropertiesByName;
}

declare interface IPoint2d {
    x: number;
    y: number;
}

declare interface IPoint3d extends IPoint2d {
    z: number;
}

declare interface IPropertyTypeAssociation {
    targetModelName: CamelizedSingularObjectTypes;
    propertyTypeName: string;
    foreignKey: string;
    options: {
        readOnly: boolean;
    };
}

declare interface IPropertyTypeDefinition {
    name: string;
    type: PropertyTypeJupType;
    options: IPropertyTypeDefinitionOptions;
    association?: IPropertyTypeAssociation;
    objectTypeName: CamelizedSingularObjectTypes;
}

declare interface IPropertyTypeDefinitionOptions {
    mandatory: boolean;
    readOnly: boolean;
    defaultValue?: PropertyTypeJupValues | null;
    calculated: boolean;
    technical: boolean;
    unit?: IPropertyTypeUnitDefinition;
    regex?: string;
}

declare interface IPropertyTypeLabelProps {
    propertyType: IPropertyTypeDefinition;
    displayUnit?: boolean;
    style?: default_2.CSSProperties;
}

declare interface IPropertyTypeUnitDefinition {
    value: PropertyTypeJupUnits;
    type: PropertyTypeJupUnitType;
}

declare interface IProps {
    defaultLanguage?: JupLanguageCode;
    children: default_2.ReactNode;
    I18nContext: default_2.FunctionComponent<I18NContextProps>;
}

declare interface ISecurityObjectTypeCrud {
    create: boolean;
    update: boolean;
    read: boolean;
    delete: boolean;
}

declare interface ISecurityStore {
    views: SecurityStoreViews;
    objectTypes: SecurityStoreObjectTypes;
    layouts: Record<string, boolean>;
    layoutTabs: SecurityStoreLayoutTabs;
    options: Record<string, boolean>;
    operations: Record<string, boolean>;
    content: IContentSecurityStore;
}

declare interface ISize {
    width: number;
    height: number;
}

export declare function isTenantObjectType(objecTypeName: CamelizedSingularObjectTypes): boolean;

declare type ItemFactPropertyNames = 'id' | 'measure' | 'value' | 'voltage' | 'time' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemId' | 'item' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ItemFactPropertyTypeRecord = Record<ItemFactPropertyNames, IPropertyTypeDefinition>;

declare type ItemPropertyNames = 'id' | 'code' | 'reference' | 'purchaseDate' | 'position' | 'rotation' | 'textAnchor' | 'price' | 'itemAffectationsCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'itemType' | 'roomId' | 'room' | 'workplaceId' | 'workplace' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemToPeople' | 'personCompanyToItems' | 'itemFacts' | 'companyId' | 'company';

declare type ItemPropertyTypeRecord = Record<ItemPropertyNames, IPropertyTypeDefinition>;

declare type ItemToPersonPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'itemId' | 'item' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ItemToPersonPropertyTypeRecord = Record<ItemToPersonPropertyNames, IPropertyTypeDefinition>;

declare type ItemTypeFamilyPropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemTypes' | 'companyId' | 'company';

declare type ItemTypeFamilyPropertyTypeRecord = Record<ItemTypeFamilyPropertyNames, IPropertyTypeDefinition>;

declare type ItemTypePointPropertyNames = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'itemType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ItemTypePointPropertyTypeRecord = Record<ItemTypePointPropertyNames, IPropertyTypeDefinition>;

declare type ItemTypePropertyNames = 'id' | 'name' | 'picture' | 'displayItemReferenceInMap' | 'code' | 'icon' | 'color' | 'height' | 'zIndex' | 'description' | 'price' | 'seatsCount' | 'carbonFootprint' | 'iconShape' | 'iconBackgroundColor' | 'iconBorderColor' | 'isAffectable' | 'excludeFromPathfinding' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeFamilyId' | 'itemTypeFamily' | 'manufacturerId' | 'manufacturer' | 'object3dModelId' | 'object3dModel' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemTypePoints' | 'workplaceTypeItemTypes' | 'items' | 'personCompanyToItemTypes' | 'companyId' | 'company';

declare type ItemTypePropertyTypeRecord = Record<ItemTypePropertyNames, IPropertyTypeDefinition>;

/**
 * Core interface for view metadata
 * Contains minimal information about a view (name, default status, visibility)
 */
declare interface IViewCore {
    name: string;
    isDefaultView?: boolean;
    isStandalone?: boolean;
    hidden?: boolean;
    shouldDisplay?: (securityStore: ISecurityStore, objectTypeName: CamelizedSingularObjectTypes, view: IViewCore) => boolean;
}

declare type JupIconSet = 'fontawesome' | 'material-ui' | 'surfy' | 'icomoon';

declare type JupIconSyle = FontAwesomeIconsStyle | 'surfyicon' | 'icomoon';

export declare type JupLanguageCode = 'fr' | 'en' | 'es' | 'it' | 'nl' | 'de';

declare type JupObjectTypePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViews' | 'jupRoleToJupObjectTypes';

declare type JupObjectTypePropertyTypeRecord = Record<JupObjectTypePropertyNames, IPropertyTypeDefinition>;

declare type JupRolePropertyNames = 'id' | 'code' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUserCompanyToJupRoles' | 'jupRoleToJupUiViews' | 'jupRoleToJupObjectTypes' | 'jupRoleToJupUiOptions' | 'jupRoleToJupUiOperations' | 'apiUserToJupRoles' | 'userRegistrationTenantRuleToJupRoles' | 'jupRoleToJupUiLayouts' | 'jupRoleToJupUiLayoutTabs';

declare type JupRolePropertyTypeRecord = Record<JupRolePropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupObjectTypePropertyNames = 'id' | 'arCreate' | 'arRead' | 'arUpdate' | 'arDelete' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId' | 'jupObjectType' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupObjectTypePropertyTypeRecord = Record<JupRoleToJupObjectTypePropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiLayoutPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiLayoutId' | 'jupUiLayout' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiLayoutPropertyTypeRecord = Record<JupRoleToJupUiLayoutPropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiLayoutTabPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiLayoutTabId' | 'jupUiLayoutTab' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiLayoutTabPropertyTypeRecord = Record<JupRoleToJupUiLayoutTabPropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiOperationPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOperationId' | 'jupUiOperation' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiOperationPropertyTypeRecord = Record<JupRoleToJupUiOperationPropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiOptionPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOptionId' | 'jupUiOption' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiOptionPropertyTypeRecord = Record<JupRoleToJupUiOptionPropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiViewPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViewId' | 'jupUiView' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiViewPropertyTypeRecord = Record<JupRoleToJupUiViewPropertyNames, IPropertyTypeDefinition>;

declare type JupUiLayoutPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'buildings' | 'jupRoleToJupUiLayouts';

declare type JupUiLayoutPropertyTypeRecord = Record<JupUiLayoutPropertyNames, IPropertyTypeDefinition>;

declare type JupUiLayoutTabPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupRoleToJupUiLayoutTabs';

declare type JupUiLayoutTabPropertyTypeRecord = Record<JupUiLayoutTabPropertyNames, IPropertyTypeDefinition>;

declare type JupUiOperationPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupRoleToJupUiOperations';

declare type JupUiOperationPropertyTypeRecord = Record<JupUiOperationPropertyNames, IPropertyTypeDefinition>;

declare type JupUiOptionPropertyNames = 'id' | 'name' | 'scope' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupRoleToJupUiOptions';

declare type JupUiOptionPropertyTypeRecord = Record<JupUiOptionPropertyNames, IPropertyTypeDefinition>;

declare type JupUiTenantOperationPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'contentRoleToJupUiTenantOperations' | 'companyId' | 'company';

declare type JupUiTenantOperationPropertyTypeRecord = Record<JupUiTenantOperationPropertyNames, IPropertyTypeDefinition>;

declare type JupUiViewPropertyNames = 'id' | 'name' | 'isDefaultView' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId' | 'jupObjectType' | 'jupRoleToJupUiViews';

declare type JupUiViewPropertyTypeRecord = Record<JupUiViewPropertyNames, IPropertyTypeDefinition>;

declare type JupUserCompanyToJupRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'userCompany' | 'jupRoleId' | 'jupRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type JupUserCompanyToJupRolePropertyTypeRecord = Record<JupUserCompanyToJupRolePropertyNames, IPropertyTypeDefinition>;

declare type LayoutFiltersRoomTabsValue = 'costCenters' | 'roomTypes' | 'analyticsDimensionTypes' | 'organizations' | 'layout' | 'users' | 'peopleDimensionTypes' | 'pathFinding' | 'roomTypeGroups';

declare type LayoutFiltersTabsValue = LayoutFiltersRoomTabsValue | 'heatmap' | 'selection' | 'floor' | 'itemTypes' | 'workplaceTypes' | 'workplaceUsageTypes' | 'options' | 'workplaceUsage' | 'building' | 'toggle-layout-menu';

declare type LegendPropertyNames = 'id' | 'name' | 'configuration' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type LegendPropertyTypeRecord = Record<LegendPropertyNames, IPropertyTypeDefinition>;

declare type ManufacturerPropertyNames = 'id' | 'name' | 'website' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemTypes' | 'companyId' | 'company';

declare type ManufacturerPropertyTypeRecord = Record<ManufacturerPropertyNames, IPropertyTypeDefinition>;

declare type MapScalePropertyNames = 'id' | 'name' | 'p1' | 'p2' | 'length' | 'ratio' | 'strokeWidth' | 'roomTextSize' | 'workplaceTextSize' | 'segmentDistanceTextSize' | 'itemTypeIconSize' | 'roomIconSize' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'floors' | 'companyId' | 'company';

declare type MapScalePropertyTypeRecord = Record<MapScalePropertyNames, IPropertyTypeDefinition>;

declare type MetaModelObjectTypeDefinitionType = 'many-to-many' | 'table';

declare type MetaModelObjectTypeTenantScopeType = 'public' | 'private';

export declare type MomentLocalCode = 'fr' | 'en-gb' | 'es' | 'it' | 'nl' | 'de';

declare type Object3dModelPropertyNames = 'id' | 'name' | 'type' | 'rotation' | 'origin' | 'model' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypes';

declare type Object3dModelPropertyTypeRecord = Record<Object3dModelPropertyNames, IPropertyTypeDefinition>;

export declare type ObjectTypeIndexViewCodes = "occupancyStatus:list" | "occupancyStatus:create" | "occupancyStatus:import" | "occupancyStatus:dataquality" | "user:list" | "user:create" | "user:import" | "user:dataquality" | "companyType:list" | "companyType:create" | "companyType:import" | "companyType:dataquality" | "company:cards" | "company:people-info" | "company:usage" | "company:dataquality-index" | "company:list" | "company:create" | "company:import" | "company:dataquality" | "campus:cards" | "campus:list" | "campus:create" | "campus:import" | "campus:dataquality" | "roomConnectorType:list" | "roomConnectorType:create" | "roomConnectorType:import" | "roomConnectorType:dataquality" | "roomConnector:list" | "roomConnector:create" | "roomConnector:import" | "roomConnector:dataquality" | "userCompany:list" | "userCompany:create" | "userCompany:import" | "userCompany:dataquality" | "personGender:list" | "personGender:create" | "personGender:import" | "personGender:dataquality" | "personCompany:list" | "personCompany:create" | "personCompany:import" | "personCompany:dataquality" | "jupUiLayout:list" | "jupUiLayout:create" | "jupUiLayout:import" | "jupUiLayout:dataquality" | "buildingType:list" | "buildingType:create" | "buildingType:import" | "buildingType:dataquality" | "organization:hierarchy" | "organization:list" | "organization:create" | "organization:import" | "organization:dataquality" | "itemTypeFamily:list" | "itemTypeFamily:create" | "itemTypeFamily:import" | "itemTypeFamily:dataquality" | "manufacturer:list" | "manufacturer:create" | "manufacturer:import" | "manufacturer:dataquality" | "object3dModel:list" | "object3dModel:create" | "object3dModel:import" | "object3dModel:dataquality" | "itemType:list" | "itemType:create" | "itemType:import" | "itemType:dataquality" | "building:cards" | "building:pictures" | "building:3d-cards" | "building:gmap" | "building:assets" | "building:list" | "building:create" | "building:import" | "building:dataquality" | "mapScale:list" | "mapScale:create" | "mapScale:import" | "mapScale:dataquality" | "structure:list" | "structure:create" | "structure:import" | "structure:dataquality" | "structurePoint:list" | "structurePoint:create" | "structurePoint:import" | "structurePoint:dataquality" | "floor:list" | "floor:create" | "floor:import" | "floor:dataquality" | "distributionCostType:list" | "distributionCostType:create" | "distributionCostType:import" | "distributionCostType:dataquality" | "roomTypeGroup:list" | "roomTypeGroup:create" | "roomTypeGroup:import" | "roomTypeGroup:dataquality" | "roomType:list" | "roomType:create" | "roomType:import" | "roomType:dataquality" | "roomTypeGroupToRoomType:list" | "roomTypeGroupToRoomType:create" | "roomTypeGroupToRoomType:import" | "roomTypeGroupToRoomType:dataquality" | "roomTypeGroupFloor:list" | "roomTypeGroupFloor:create" | "roomTypeGroupFloor:import" | "roomTypeGroupFloor:dataquality" | "roomTypeGroupBuilding:list" | "roomTypeGroupBuilding:create" | "roomTypeGroupBuilding:import" | "roomTypeGroupBuilding:dataquality" | "costCenter:list" | "costCenter:create" | "costCenter:import" | "costCenter:dataquality" | "costCenterBuilding:list" | "costCenterBuilding:create" | "costCenterBuilding:import" | "costCenterBuilding:dataquality" | "costCenterFloor:list" | "costCenterFloor:create" | "costCenterFloor:import" | "costCenterFloor:dataquality" | "room:meeting-rooms" | "room:list" | "room:create" | "room:import" | "room:dataquality" | "roomPoint:list" | "roomPoint:create" | "roomPoint:import" | "roomPoint:dataquality" | "roomPointRoom:list" | "roomPointRoom:create" | "roomPointRoom:import" | "roomPointRoom:dataquality" | "roomPointSegmentType:list" | "roomPointSegmentType:create" | "roomPointSegmentType:import" | "roomPointSegmentType:dataquality" | "roomPointSegment:list" | "roomPointSegment:create" | "roomPointSegment:import" | "roomPointSegment:dataquality" | "itemTypePoint:list" | "itemTypePoint:create" | "itemTypePoint:import" | "itemTypePoint:dataquality" | "dimensionType:list" | "dimensionType:create" | "dimensionType:import" | "dimensionType:dataquality" | "dimension:list" | "dimension:create" | "dimension:import" | "dimension:dataquality" | "dimensionRoom:list" | "dimensionRoom:create" | "dimensionRoom:import" | "dimensionRoom:dataquality" | "dimensionFloor:list" | "dimensionFloor:create" | "dimensionFloor:import" | "dimensionFloor:dataquality" | "dimensionBuilding:list" | "dimensionBuilding:create" | "dimensionBuilding:import" | "dimensionBuilding:dataquality" | "factType:list" | "factType:create" | "factType:import" | "factType:dataquality" | "fact:list" | "fact:create" | "fact:import" | "fact:dataquality" | "personState:list" | "personState:create" | "personState:import" | "personState:dataquality" | "personSecurityProfile:list" | "personSecurityProfile:create" | "personSecurityProfile:import" | "personSecurityProfile:dataquality" | "person:list" | "person:create" | "person:import" | "person:dataquality" | "personToPersonType:list" | "personToPersonType:create" | "personToPersonType:import" | "personToPersonType:dataquality" | "personToPerson:list" | "personToPerson:create" | "personToPerson:import" | "personToPerson:dataquality" | "vehicleType:list" | "vehicleType:create" | "vehicleType:import" | "vehicleType:dataquality" | "vehiclePropulsionType:list" | "vehiclePropulsionType:create" | "vehiclePropulsionType:import" | "vehiclePropulsionType:dataquality" | "vehicle:list" | "vehicle:create" | "vehicle:import" | "vehicle:dataquality" | "personToVehicle:list" | "personToVehicle:create" | "personToVehicle:import" | "personToVehicle:dataquality" | "roomAffectation:room-mouvement-matrix-import" | "roomAffectation:list" | "roomAffectation:create" | "roomAffectation:import" | "roomAffectation:dataquality" | "workplaceType:list" | "workplaceType:create" | "workplaceType:import" | "workplaceType:dataquality" | "workplaceUsageType:list" | "workplaceUsageType:create" | "workplaceUsageType:import" | "workplaceUsageType:dataquality" | "workplaceTypeItemType:list" | "workplaceTypeItemType:create" | "workplaceTypeItemType:import" | "workplaceTypeItemType:dataquality" | "workplace:list" | "workplace:create" | "workplace:import" | "workplace:dataquality" | "item:list" | "item:create" | "item:import" | "item:dataquality" | "workplaceAffectation:workplace-mouvement-matrix-import" | "workplaceAffectation:list" | "workplaceAffectation:create" | "workplaceAffectation:import" | "workplaceAffectation:dataquality" | "organizationFloor:list" | "organizationFloor:create" | "organizationFloor:import" | "organizationFloor:dataquality" | "organizationBuilding:list" | "organizationBuilding:create" | "organizationBuilding:import" | "organizationBuilding:dataquality" | "roomTypeFloor:list" | "roomTypeFloor:create" | "roomTypeFloor:import" | "roomTypeFloor:dataquality" | "roomTypeBuilding:list" | "roomTypeBuilding:create" | "roomTypeBuilding:import" | "roomTypeBuilding:dataquality" | "itemToPerson:list" | "itemToPerson:create" | "itemToPerson:import" | "itemToPerson:dataquality" | "personToBuilding:list" | "personToBuilding:create" | "personToBuilding:import" | "personToBuilding:dataquality" | "dimensionToPerson:list" | "dimensionToPerson:create" | "dimensionToPerson:import" | "dimensionToPerson:dataquality" | "dimensionTypeToBuilding:list" | "dimensionTypeToBuilding:create" | "dimensionTypeToBuilding:import" | "dimensionTypeToBuilding:dataquality" | "workingLocation:list" | "workingLocation:create" | "workingLocation:import" | "workingLocation:dataquality" | "personWorkingLocation:my-planning" | "personWorkingLocation:obo-planning" | "personWorkingLocation:booking-maps" | "personWorkingLocation:pwl-dimension" | "personWorkingLocation:list" | "personWorkingLocation:create" | "personWorkingLocation:import" | "personWorkingLocation:dataquality" | "personToWorkplaceBooking:dashboard-index" | "personToWorkplaceBooking:list" | "personToWorkplaceBooking:create" | "personToWorkplaceBooking:import" | "personToWorkplaceBooking:dataquality" | "personToRoomBooking:list" | "personToRoomBooking:create" | "personToRoomBooking:import" | "personToRoomBooking:dataquality" | "personToDimensionBooking:list" | "personToDimensionBooking:create" | "personToDimensionBooking:import" | "personToDimensionBooking:dataquality" | "personCompanyMission:list" | "personCompanyMission:create" | "personCompanyMission:import" | "personCompanyMission:dataquality" | "personCompanyToItemType:list" | "personCompanyToItemType:create" | "personCompanyToItemType:import" | "personCompanyToItemType:dataquality" | "personCompanyToRoomType:list" | "personCompanyToRoomType:create" | "personCompanyToRoomType:import" | "personCompanyToRoomType:dataquality" | "personCompanyToItem:list" | "personCompanyToItem:create" | "personCompanyToItem:import" | "personCompanyToItem:dataquality" | "legend:list" | "legend:create" | "legend:import" | "legend:dataquality" | "openerPostMessageHost:list" | "openerPostMessageHost:create" | "openerPostMessageHost:import" | "openerPostMessageHost:dataquality" | "companyWorkingLocation:list" | "companyWorkingLocation:create" | "companyWorkingLocation:import" | "companyWorkingLocation:dataquality" | "jupObjectType:list" | "jupObjectType:create" | "jupObjectType:import" | "jupObjectType:dataquality" | "jupUiView:list" | "jupUiView:create" | "jupUiView:import" | "jupUiView:dataquality" | "jupRole:help" | "jupRole:list" | "jupRole:create" | "jupRole:import" | "jupRole:dataquality" | "jupUiOption:list" | "jupUiOption:create" | "jupUiOption:import" | "jupUiOption:dataquality" | "jupUiOperation:list" | "jupUiOperation:create" | "jupUiOperation:import" | "jupUiOperation:dataquality" | "contentRole:list" | "contentRole:create" | "contentRole:import" | "contentRole:dataquality" | "jupUserCompanyToJupRole:list" | "jupUserCompanyToJupRole:create" | "jupUserCompanyToJupRole:import" | "jupUserCompanyToJupRole:dataquality" | "jupRoleToJupUiView:list" | "jupRoleToJupUiView:create" | "jupRoleToJupUiView:import" | "jupRoleToJupUiView:dataquality" | "jupRoleToJupObjectType:list" | "jupRoleToJupObjectType:create" | "jupRoleToJupObjectType:import" | "jupRoleToJupObjectType:dataquality" | "jupRoleToJupUiOption:list" | "jupRoleToJupUiOption:create" | "jupRoleToJupUiOption:import" | "jupRoleToJupUiOption:dataquality" | "jupRoleToJupUiOperation:list" | "jupRoleToJupUiOperation:create" | "jupRoleToJupUiOperation:import" | "jupRoleToJupUiOperation:dataquality" | "contentRoleToBuilding:list" | "contentRoleToBuilding:create" | "contentRoleToBuilding:import" | "contentRoleToBuilding:dataquality" | "contentRoleToUserCompany:list" | "contentRoleToUserCompany:create" | "contentRoleToUserCompany:import" | "contentRoleToUserCompany:dataquality" | "contentRoleToFloor:list" | "contentRoleToFloor:create" | "contentRoleToFloor:import" | "contentRoleToFloor:dataquality" | "partnerApiCredential:list" | "partnerApiCredential:create" | "partnerApiCredential:import" | "partnerApiCredential:dataquality" | "apiUser:list" | "apiUser:create" | "apiUser:import" | "apiUser:dataquality" | "apiUserToJupRole:list" | "apiUserToJupRole:create" | "apiUserToJupRole:import" | "apiUserToJupRole:dataquality" | "apiUserToContentRole:list" | "apiUserToContentRole:create" | "apiUserToContentRole:import" | "apiUserToContentRole:dataquality" | "jupUiTenantOperation:list" | "jupUiTenantOperation:create" | "jupUiTenantOperation:import" | "jupUiTenantOperation:dataquality" | "contentRoleToJupUiTenantOperation:list" | "contentRoleToJupUiTenantOperation:create" | "contentRoleToJupUiTenantOperation:import" | "contentRoleToJupUiTenantOperation:dataquality" | "authentificationConnection:list" | "authentificationConnection:create" | "authentificationConnection:import" | "authentificationConnection:dataquality" | "userRegistrationTenantRule:list" | "userRegistrationTenantRule:create" | "userRegistrationTenantRule:import" | "userRegistrationTenantRule:dataquality" | "userRegistrationTenantRuleToJupRole:list" | "userRegistrationTenantRuleToJupRole:create" | "userRegistrationTenantRuleToJupRole:import" | "userRegistrationTenantRuleToJupRole:dataquality" | "userRegistrationTenantRuleToContentRole:list" | "userRegistrationTenantRuleToContentRole:create" | "userRegistrationTenantRuleToContentRole:import" | "userRegistrationTenantRuleToContentRole:dataquality" | "partnerExportMappingConfiguration:list" | "partnerExportMappingConfiguration:create" | "partnerExportMappingConfiguration:import" | "partnerExportMappingConfiguration:dataquality" | "partnerExportMapping:list" | "partnerExportMapping:create" | "partnerExportMapping:import" | "partnerExportMapping:dataquality" | "partnerExportMappingToRoomType:list" | "partnerExportMappingToRoomType:create" | "partnerExportMappingToRoomType:import" | "partnerExportMappingToRoomType:dataquality" | "partnerExportMappingConfigurationToFloor:list" | "partnerExportMappingConfigurationToFloor:create" | "partnerExportMappingConfigurationToFloor:import" | "partnerExportMappingConfigurationToFloor:dataquality" | "jupRoleToJupUiLayout:list" | "jupRoleToJupUiLayout:create" | "jupRoleToJupUiLayout:import" | "jupRoleToJupUiLayout:dataquality" | "jupUiLayoutTab:list" | "jupUiLayoutTab:create" | "jupUiLayoutTab:import" | "jupUiLayoutTab:dataquality" | "jupRoleToJupUiLayoutTab:list" | "jupRoleToJupUiLayoutTab:create" | "jupRoleToJupUiLayoutTab:import" | "jupRoleToJupUiLayoutTab:dataquality" | "itemFact:list" | "itemFact:create" | "itemFact:import" | "itemFact:dataquality" | "featureFamily:list" | "featureFamily:create" | "featureFamily:import" | "featureFamily:dataquality" | "featureGroup:list" | "featureGroup:create" | "featureGroup:import" | "featureGroup:dataquality" | "feature:list" | "feature:create" | "feature:import" | "feature:dataquality";

export declare function ObjectTypeIndexViewHelp(props: {
    objectTypeName: CamelizedSingularObjectTypes;
    view: IViewCore;
}): default_2.JSX.Element;

export declare function ObjectTypeSingularCapitalizedLabel(props: {
    objectTypeName: CamelizedSingularObjectTypes;
}): default_2.JSX.Element;

declare type OccupancyStatusPropertyNames = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'rooms';

declare type OccupancyStatusPropertyTypeRecord = Record<OccupancyStatusPropertyNames, IPropertyTypeDefinition>;

declare type OpenerPostMessageHostPropertyNames = 'id' | 'host' | 'description' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type OpenerPostMessageHostPropertyTypeRecord = Record<OpenerPostMessageHostPropertyNames, IPropertyTypeDefinition>;

declare type OrganizationBuildingPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'organization' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type OrganizationBuildingPropertyTypeRecord = Record<OrganizationBuildingPropertyNames, IPropertyTypeDefinition>;

declare type OrganizationFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'organization' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type OrganizationFloorPropertyTypeRecord = Record<OrganizationFloorPropertyNames, IPropertyTypeDefinition>;

declare type OrganizationPropertyNames = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'organization' | 'organizations' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'rooms' | 'people' | 'workplaces' | 'organizationFloors' | 'organizationBuildings' | 'companyId' | 'company';

declare type OrganizationPropertyTypeRecord = Record<OrganizationPropertyNames, IPropertyTypeDefinition>;

declare type PartnerApiCredentialPropertyNames = 'id' | 'label' | 'code' | 'host' | 'clientId' | 'clientSecret' | 'enable' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PartnerApiCredentialPropertyTypeRecord = Record<PartnerApiCredentialPropertyNames, IPropertyTypeDefinition>;

declare type PartnerExportMappingConfigurationPropertyNames = 'id' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'partnerExportMappings' | 'partnerExportMappingConfigurationToFloors' | 'companyId' | 'company';

declare type PartnerExportMappingConfigurationPropertyTypeRecord = Record<PartnerExportMappingConfigurationPropertyNames, IPropertyTypeDefinition>;

declare type PartnerExportMappingConfigurationToFloorPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingConfigurationId' | 'partnerExportMappingConfiguration' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PartnerExportMappingConfigurationToFloorPropertyTypeRecord = Record<PartnerExportMappingConfigurationToFloorPropertyNames, IPropertyTypeDefinition>;

declare type PartnerExportMappingPropertyNames = 'id' | 'partnerCode' | 'label' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingConfigurationId' | 'partnerExportMappingConfiguration' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'partnerExportMappingToRoomTypes' | 'companyId' | 'company';

declare type PartnerExportMappingPropertyTypeRecord = Record<PartnerExportMappingPropertyNames, IPropertyTypeDefinition>;

declare type PartnerExportMappingToRoomTypePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingId' | 'partnerExportMapping' | 'roomTypeId' | 'roomType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PartnerExportMappingToRoomTypePropertyTypeRecord = Record<PartnerExportMappingToRoomTypePropertyNames, IPropertyTypeDefinition>;

declare type PersonCompanyMissionPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'personCompanyToItemTypes' | 'personCompanyToRoomTypes';

declare type PersonCompanyMissionPropertyTypeRecord = Record<PersonCompanyMissionPropertyNames, IPropertyTypeDefinition>;

declare type PersonCompanyPropertyNames = 'id' | 'name' | 'comment' | 'contact' | 'documents' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'personCompanyToItemTypes' | 'personCompanyToRoomTypes' | 'personCompanyToItems' | 'companyId' | 'company';

declare type PersonCompanyPropertyTypeRecord = Record<PersonCompanyPropertyNames, IPropertyTypeDefinition>;

declare type PersonCompanyToItemPropertyNames = 'id' | 'datetime' | 'comment' | 'createdAt' | 'updatedAt' | 'externalId' | 'personCompanyId' | 'personCompany' | 'itemId' | 'item' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonCompanyToItemPropertyTypeRecord = Record<PersonCompanyToItemPropertyNames, IPropertyTypeDefinition>;

declare type PersonCompanyToItemTypePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personCompanyId' | 'personCompany' | 'itemTypeId' | 'itemType' | 'personCompanyMissionId' | 'personCompanyMission' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonCompanyToItemTypePropertyTypeRecord = Record<PersonCompanyToItemTypePropertyNames, IPropertyTypeDefinition>;

declare type PersonCompanyToRoomTypePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personCompanyId' | 'personCompany' | 'roomTypeId' | 'roomType' | 'personCompanyMissionId' | 'personCompanyMission' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonCompanyToRoomTypePropertyTypeRecord = Record<PersonCompanyToRoomTypePropertyNames, IPropertyTypeDefinition>;

declare type PersonGenderPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'people';

declare type PersonGenderPropertyTypeRecord = Record<PersonGenderPropertyNames, IPropertyTypeDefinition>;

declare type PersonPropertyNames = 'id' | 'firstname' | 'lastname' | 'fullname' | 'email' | 'picture' | 'title' | 'monitorReference' | 'computerReference' | 'telephone' | 'cellphone' | 'code' | 'badgeNumber' | 'badgeRestaurant' | 'boxNumber' | 'registrationNumber' | 'startDate' | 'endDate' | 'info' | 'notAffectable' | 'notAffectableEndDate' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanies' | 'organizationId' | 'organization' | 'personStateId' | 'personState' | 'personSecurityProfileId' | 'personSecurityProfile' | 'costCenterId' | 'costCenter' | 'personCompanyId' | 'personCompany' | 'personGenderId' | 'personGender' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToPersonSources' | 'personToPersonTargets' | 'personToVehicles' | 'roomAffectations' | 'workplaceAffectations' | 'itemToPeople' | 'personToBuildings' | 'dimensionToPeople' | 'personWorkingLocations' | 'personToWorkplaceBookings' | 'personToRoomBookings' | 'personToDimensionBookings' | 'companyId' | 'company';

declare type PersonPropertyTypeRecord = Record<PersonPropertyNames, IPropertyTypeDefinition>;

declare type PersonSecurityProfilePropertyNames = 'id' | 'name' | 'color' | 'icon' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'companyId' | 'company';

declare type PersonSecurityProfilePropertyTypeRecord = Record<PersonSecurityProfilePropertyNames, IPropertyTypeDefinition>;

declare type PersonStatePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'companyId' | 'company';

declare type PersonStatePropertyTypeRecord = Record<PersonStatePropertyNames, IPropertyTypeDefinition>;

declare type PersonToBuildingPropertyNames = 'id' | 'addToPeopleCount' | 'allowWorkplaceBookingInTheBuilding' | 'allowParkingBookingInTheBuilding' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToBuildingPropertyTypeRecord = Record<PersonToBuildingPropertyNames, IPropertyTypeDefinition>;

declare type PersonToDimensionBookingPropertyNames = 'id' | 'startDatetime' | 'endDatetime' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'dimensionId' | 'dimension' | 'personWorkingLocationId' | 'personWorkingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToDimensionBookingPropertyTypeRecord = Record<PersonToDimensionBookingPropertyNames, IPropertyTypeDefinition>;

declare type PersonToPersonPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personToPersonTypeId' | 'personToPersonType' | 'personSourceId' | 'personSource' | 'personTargetId' | 'personTarget' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToPersonPropertyTypeRecord = Record<PersonToPersonPropertyNames, IPropertyTypeDefinition>;

declare type PersonToPersonTypePropertyNames = 'id' | 'labelForward' | 'labelBackward' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToPeople' | 'companyId' | 'company';

declare type PersonToPersonTypePropertyTypeRecord = Record<PersonToPersonTypePropertyNames, IPropertyTypeDefinition>;

declare type PersonToRoomBookingPropertyNames = 'id' | 'startDatetime' | 'endDatetime' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'roomId' | 'room' | 'personWorkingLocationId' | 'personWorkingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToRoomBookingPropertyTypeRecord = Record<PersonToRoomBookingPropertyNames, IPropertyTypeDefinition>;

declare type PersonToVehiclePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'vehicleId' | 'vehicle' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToVehiclePropertyTypeRecord = Record<PersonToVehiclePropertyNames, IPropertyTypeDefinition>;

declare type PersonToWorkplaceBookingPropertyNames = 'id' | 'startDatetime' | 'endDatetime' | 'workspaceHasBeenConfirmedAt' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'workplaceId' | 'workplace' | 'personWorkingLocationId' | 'personWorkingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToWorkplaceBookingPropertyTypeRecord = Record<PersonToWorkplaceBookingPropertyNames, IPropertyTypeDefinition>;

declare type PersonWorkingLocationPropertyNames = 'id' | 'date' | 'daySlotType' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'workingLocationId' | 'workingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToWorkplaceBookings' | 'personToRoomBookings' | 'personToDimensionBookings' | 'companyId' | 'company';

declare type PersonWorkingLocationPropertyTypeRecord = Record<PersonWorkingLocationPropertyNames, IPropertyTypeDefinition>;

export declare type PropertyTypeCodes = "occupancyStatus:id" | "occupancyStatus:name" | "occupancyStatus:code" | "occupancyStatus:color" | "occupancyStatus:createdAt";

export declare function PropertyTypeDescription(props: {
    propertyType: IPropertyTypeDefinition;
}): string | default_2.JSX.Element | null;

declare type PropertyTypeJupDistanceUnits = 'centimeter' | 'meter';

declare type PropertyTypeJupType = 'string' | 'float' | 'square-image' | 'timestamp' | 'image' | 'address' | 'integer' | 'primary-key' | 'icon' | 'color' | 'date' | 'foreign-key' | 'belongs-to' | 'has-many' | 'has-many-paginated' | 'boolean' | 'surface' | 'distance' | 'point2d' | 'text' | 'text-md' | 'currency' | 'percentage' | 'point3d' | 'surface-by-people' | 'surface-by-workplace' | 'boolean' | 'textAnchor' | 'integer-count' | 'percentage0-1' | 'url' | 'password' | 'year' | 'model3d' | 'size' | 'transform' | 'weight' | 'icon-shape' | 'datetime' | 'day-slot' | 'legend-configuration' | 'floor-navigation-graph';

declare type PropertyTypeJupUnits = PropertyTypeJupDistanceUnits | PropertyTypeJupWeightUnits;

declare type PropertyTypeJupUnitType = 'distance' | 'weight';

declare type PropertyTypeJupValues = string | string[] | number | number[] | boolean | null | IPoint3d | IPoint2d | IEntity | IEntity[] | IJupImage | IModel3d | IJupIcon | IJupAddress | IJupTransform | IconShapeType | DaySlotType | IJupLegendConfiguration | IFloorPathfindingGraph;

declare type PropertyTypeJupWeightUnits = 'kilogram' | 'gram';

export declare const PropertyTypeLabel: default_2.ForwardRefExoticComponent<IPropertyTypeLabelProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare function PropertyTypeMandatoryLabel(props: {
    propertyType: IPropertyTypeDefinition;
}): default_2.JSX.Element;

declare type RoomAffectationPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'roomId' | 'room' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomAffectationPropertyTypeRecord = Record<RoomAffectationPropertyNames, IPropertyTypeDefinition>;

declare type RoomConnectorPropertyNames = 'id' | 'name' | 'waitTime' | 'timePerFloor' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomConnectorTypeId' | 'roomConnectorType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'rooms' | 'companyId' | 'company';

declare type RoomConnectorPropertyTypeRecord = Record<RoomConnectorPropertyNames, IPropertyTypeDefinition>;

declare type RoomConnectorTypePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomConnectors';

declare type RoomConnectorTypePropertyTypeRecord = Record<RoomConnectorTypePropertyNames, IPropertyTypeDefinition>;

declare type RoomPointPropertyNames = 'id' | 'x' | 'y' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomPointRooms' | 'roomPointSegmentStarts' | 'roomPointSegmentEnds' | 'companyId' | 'company';

declare type RoomPointPropertyTypeRecord = Record<RoomPointPropertyNames, IPropertyTypeDefinition>;

declare type RoomPointRoomPropertyNames = 'id' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomId' | 'room' | 'roomPointId' | 'roomPoint' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomPointRoomPropertyTypeRecord = Record<RoomPointRoomPropertyNames, IPropertyTypeDefinition>;

declare type RoomPointSegmentPropertyNames = 'id' | 'reversePoints' | 'displayBothSides' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomPointSegmentTypeId' | 'roomPointSegmentType' | 'roomPointStartId' | 'roomPointStart' | 'roomPointEndId' | 'roomPointEnd' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomPointSegmentPropertyTypeRecord = Record<RoomPointSegmentPropertyNames, IPropertyTypeDefinition>;

declare type RoomPointSegmentTypePropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomPointSegments';

declare type RoomPointSegmentTypePropertyTypeRecord = Record<RoomPointSegmentTypePropertyNames, IPropertyTypeDefinition>;

declare type RoomPropertyNames = 'id' | 'name' | 'prettyName' | 'area' | 'perimeter' | 'textAnchor' | 'capacity' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'info' | 'bookingEmail' | 'externalId2' | 'picture' | 'keyCylinderCode' | 'livePeopleCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'floor' | 'occupancyStatusId' | 'occupancyStatus' | 'roomTypeId' | 'roomType' | 'organizationId' | 'organization' | 'costCenterId' | 'costCenter' | 'distributionCostTypeId' | 'distributionCostType' | 'roomConnectorId' | 'roomConnector' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomPointRooms' | 'dimensionRooms' | 'roomAffectations' | 'workplaces' | 'items' | 'personToRoomBookings' | 'companyId' | 'company';

declare type RoomPropertyTypeRecord = Record<RoomPropertyNames, IPropertyTypeDefinition>;

declare type RoomTypeBuildingPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'roomType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomTypeBuildingPropertyTypeRecord = Record<RoomTypeBuildingPropertyNames, IPropertyTypeDefinition>;

declare type RoomTypeFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'roomType' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomTypeFloorPropertyTypeRecord = Record<RoomTypeFloorPropertyNames, IPropertyTypeDefinition>;

declare type RoomTypeGroupBuildingPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeGroupId' | 'roomTypeGroup' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomTypeGroupBuildingPropertyTypeRecord = Record<RoomTypeGroupBuildingPropertyNames, IPropertyTypeDefinition>;

declare type RoomTypeGroupFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeGroupId' | 'roomTypeGroup' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomTypeGroupFloorPropertyTypeRecord = Record<RoomTypeGroupFloorPropertyNames, IPropertyTypeDefinition>;

declare type RoomTypeGroupPropertyNames = 'id' | 'name' | 'code' | 'color' | 'exclude' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeGroupToRoomTypes' | 'roomTypeGroupFloors' | 'roomTypeGroupBuildings';

declare type RoomTypeGroupPropertyTypeRecord = Record<RoomTypeGroupPropertyNames, IPropertyTypeDefinition>;

declare type RoomTypeGroupToRoomTypePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeGroupId' | 'roomTypeGroup' | 'roomTypeId' | 'roomType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type RoomTypeGroupToRoomTypePropertyTypeRecord = Record<RoomTypeGroupToRoomTypePropertyNames, IPropertyTypeDefinition>;

declare type RoomTypePropertyNames = 'id' | 'name' | 'color' | 'icon' | 'color3d' | 'code' | 'displayWallsOn3d' | 'cadence' | 'isBookable' | 'createdAt' | 'updatedAt' | 'externalId' | 'distributionCostTypeId' | 'distributionCostType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomTypeGroupToRoomTypes' | 'rooms' | 'roomTypeFloors' | 'roomTypeBuildings' | 'personCompanyToRoomTypes' | 'partnerExportMappingToRoomTypes' | 'companyId' | 'company';

declare type RoomTypePropertyTypeRecord = Record<RoomTypePropertyNames, IPropertyTypeDefinition>;

declare type SecurityStoreLayoutTabs = Record<LayoutFiltersTabsValue, boolean>;

declare type SecurityStoreObjectTypes = Record<CamelizedSingularObjectTypes, ISecurityObjectTypeCrud>;

declare type SecurityStoreViews = Record<CamelizedSingularObjectTypes, Record<string, boolean>>;

export declare function SetupRecoilContext(props: IProps): default_2.JSX.Element;

declare type StructurePointPropertyNames = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'structureId' | 'structure' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type StructurePointPropertyTypeRecord = Record<StructurePointPropertyNames, IPropertyTypeDefinition>;

declare type StructurePropertyNames = 'id' | 'name' | 'transform' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'structurePoints' | 'floors' | 'companyId' | 'company';

declare type StructurePropertyTypeRecord = Record<StructurePropertyNames, IPropertyTypeDefinition>;

export declare function SurfyHelpLinkToIndexView(props: {
    code: ObjectTypeIndexViewCodes;
}): default_2.JSX.Element;

declare type TranslationMethodDataType = Record<string, string | undefined | null | number | ReactNode>;

declare type TranslationMethodType = (key: string, data?: TranslationMethodDataType) => string;

export declare function useFlattenDeterminants(objectTypeName: CamelizedSingularObjectTypes): {
    'determinant.defined': string;
    'determinant.undefined': string;
    'determinants.defined': string;
    'determinants.undefined': string;
};

declare type UserCompanyPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'campusCreatedBies' | 'campusUpdatedBies' | 'roomConnectorCreatedBies' | 'roomConnectorUpdatedBies' | 'userId' | 'user' | 'companyId' | 'company' | 'personId' | 'person' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyCreatedBies' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'userCompanyUpdatedBies' | 'personCompanyCreatedBies' | 'personCompanyUpdatedBies' | 'buildingTypeCreatedBies' | 'buildingTypeUpdatedBies' | 'organizationCreatedBies' | 'organizationUpdatedBies' | 'itemTypeFamilyCreatedBies' | 'itemTypeFamilyUpdatedBies' | 'manufacturerCreatedBies' | 'manufacturerUpdatedBies' | 'itemTypeCreatedBies' | 'itemTypeUpdatedBies' | 'buildingOwners' | 'buildingCreatedBies' | 'buildingUpdatedBies' | 'mapScaleCreatedBies' | 'mapScaleUpdatedBies' | 'structureCreatedBies' | 'structureUpdatedBies' | 'structurePointCreatedBies' | 'structurePointUpdatedBies' | 'floorCreatedBies' | 'floorUpdatedBies' | 'distributionCostTypeCreatedBies' | 'distributionCostTypeUpdatedBies' | 'roomTypeCreatedBies' | 'roomTypeUpdatedBies' | 'roomTypeGroupToRoomTypeCreatedBies' | 'roomTypeGroupToRoomTypeUpdatedBies' | 'roomTypeGroupFloorCreatedBies' | 'roomTypeGroupFloorUpdatedBies' | 'roomTypeGroupBuildingCreatedBies' | 'roomTypeGroupBuildingUpdatedBies' | 'costCenterCreatedBies' | 'costCenterUpdatedBies' | 'costCenterBuildingCreatedBies' | 'costCenterBuildingUpdatedBies' | 'costCenterFloorCreatedBies' | 'costCenterFloorUpdatedBies' | 'roomCreatedBies' | 'roomUpdatedBies' | 'roomPointCreatedBies' | 'roomPointUpdatedBies' | 'roomPointRoomCreatedBies' | 'roomPointRoomUpdatedBies' | 'roomPointSegmentCreatedBies' | 'roomPointSegmentUpdatedBies' | 'itemTypePointCreatedBies' | 'itemTypePointUpdatedBies' | 'dimensionTypeCreatedBies' | 'dimensionTypeUpdatedBies' | 'dimensionCreatedBies' | 'dimensionUpdatedBies' | 'dimensionRoomCreatedBies' | 'dimensionRoomUpdatedBies' | 'dimensionFloorCreatedBies' | 'dimensionFloorUpdatedBies' | 'dimensionBuildingCreatedBies' | 'dimensionBuildingUpdatedBies' | 'factTypeCreatedBies' | 'factTypeUpdatedBies' | 'factCreatedBies' | 'factUpdatedBies' | 'personStateCreatedBies' | 'personStateUpdatedBies' | 'personSecurityProfileCreatedBies' | 'personSecurityProfileUpdatedBies' | 'personCreatedBies' | 'personUpdatedBies' | 'personToPersonTypeCreatedBies' | 'personToPersonTypeUpdatedBies' | 'personToPersonCreatedBies' | 'personToPersonUpdatedBies' | 'vehicleCreatedBies' | 'vehicleUpdatedBies' | 'personToVehicleCreatedBies' | 'personToVehicleUpdatedBies' | 'roomAffectationCreatedBies' | 'roomAffectationUpdatedBies' | 'workplaceTypeCreatedBies' | 'workplaceTypeUpdatedBies' | 'workplaceUsageTypeCreatedBies' | 'workplaceUsageTypeUpdatedBies' | 'workplaceTypeItemTypeCreatedBies' | 'workplaceTypeItemTypeUpdatedBies' | 'workplaceCreatedBies' | 'workplaceUpdatedBies' | 'itemCreatedBies' | 'itemUpdatedBies' | 'workplaceAffectationCreatedBies' | 'workplaceAffectationUpdatedBies' | 'organizationFloorCreatedBies' | 'organizationFloorUpdatedBies' | 'organizationBuildingCreatedBies' | 'organizationBuildingUpdatedBies' | 'roomTypeFloorCreatedBies' | 'roomTypeFloorUpdatedBies' | 'roomTypeBuildingCreatedBies' | 'roomTypeBuildingUpdatedBies' | 'itemToPersonCreatedBies' | 'itemToPersonUpdatedBies' | 'personToBuildingCreatedBies' | 'personToBuildingUpdatedBies' | 'dimensionToPersonCreatedBies' | 'dimensionToPersonUpdatedBies' | 'dimensionTypeToBuildingCreatedBies' | 'dimensionTypeToBuildingUpdatedBies' | 'personWorkingLocationCreatedBies' | 'personWorkingLocationUpdatedBies' | 'personToWorkplaceBookingCreatedBies' | 'personToWorkplaceBookingUpdatedBies' | 'personToRoomBookingCreatedBies' | 'personToRoomBookingUpdatedBies' | 'personToDimensionBookingCreatedBies' | 'personToDimensionBookingUpdatedBies' | 'personCompanyToItemTypeCreatedBies' | 'personCompanyToItemTypeUpdatedBies' | 'personCompanyToRoomTypeCreatedBies' | 'personCompanyToRoomTypeUpdatedBies' | 'personCompanyToItemCreatedBies' | 'personCompanyToItemUpdatedBies' | 'legendCreatedBies' | 'legendUpdatedBies' | 'openerPostMessageHostCreatedBies' | 'openerPostMessageHostUpdatedBies' | 'companyWorkingLocationCreatedBies' | 'companyWorkingLocationUpdatedBies' | 'contentRoleCreatedBies' | 'contentRoleUpdatedBies' | 'jupUserCompanyToJupRoles' | 'jupUserCompanyToJupRoleCreatedBies' | 'jupUserCompanyToJupRoleUpdatedBies' | 'contentRoleToBuildingCreatedBies' | 'contentRoleToBuildingUpdatedBies' | 'contentRoleToUserCompanies' | 'contentRoleToUserCompanyCreatedBies' | 'contentRoleToUserCompanyUpdatedBies' | 'contentRoleToFloorCreatedBies' | 'contentRoleToFloorUpdatedBies' | 'partnerApiCredentialCreatedBies' | 'partnerApiCredentialUpdatedBies' | 'apiUserCreatedBies' | 'apiUserUpdatedBies' | 'apiUserToJupRoleCreatedBies' | 'apiUserToJupRoleUpdatedBies' | 'apiUserToContentRoleCreatedBies' | 'apiUserToContentRoleUpdatedBies' | 'jupUiTenantOperationCreatedBies' | 'jupUiTenantOperationUpdatedBies' | 'contentRoleToJupUiTenantOperationCreatedBies' | 'contentRoleToJupUiTenantOperationUpdatedBies' | 'userRegistrationTenantRuleCreatedBies' | 'userRegistrationTenantRuleUpdatedBies' | 'userRegistrationTenantRuleToJupRoleCreatedBies' | 'userRegistrationTenantRuleToJupRoleUpdatedBies' | 'userRegistrationTenantRuleToContentRoleCreatedBies' | 'userRegistrationTenantRuleToContentRoleUpdatedBies' | 'partnerExportMappingConfigurationCreatedBies' | 'partnerExportMappingConfigurationUpdatedBies' | 'partnerExportMappingCreatedBies' | 'partnerExportMappingUpdatedBies' | 'partnerExportMappingToRoomTypeCreatedBies' | 'partnerExportMappingToRoomTypeUpdatedBies' | 'partnerExportMappingConfigurationToFloorCreatedBies' | 'partnerExportMappingConfigurationToFloorUpdatedBies' | 'itemFactCreatedBies' | 'itemFactUpdatedBies' | 'featureFamilyCreatedBies' | 'featureFamilyUpdatedBies' | 'featureGroupCreatedBies' | 'featureGroupUpdatedBies' | 'featureCreatedBies' | 'featureUpdatedBies';

declare type UserCompanyPropertyTypeRecord = Record<UserCompanyPropertyNames, IPropertyTypeDefinition>;

declare type UserPropertyNames = 'id' | 'email' | 'firstname' | 'lastname' | 'picture' | 'sub' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanies';

declare type UserPropertyTypeRecord = Record<UserPropertyNames, IPropertyTypeDefinition>;

declare type UserRefreshTokenPropertyNames = 'id' | 'refreshToken' | 'createdAt' | 'updatedAt' | 'externalId' | 'userId' | 'user';

declare type UserRefreshTokenPropertyTypeRecord = Record<UserRefreshTokenPropertyNames, IPropertyTypeDefinition>;

declare type UserRegistrationTenantRulePropertyNames = 'id' | 'name' | 'domains' | 'automaticUserToRoleMapping' | 'createdAt' | 'updatedAt' | 'externalId' | 'authentificationConnectionId' | 'authentificationConnection' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'userRegistrationTenantRuleToJupRoles' | 'userRegistrationTenantRuleToContentRoles' | 'companyId' | 'company';

declare type UserRegistrationTenantRulePropertyTypeRecord = Record<UserRegistrationTenantRulePropertyNames, IPropertyTypeDefinition>;

declare type UserRegistrationTenantRuleToContentRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRuleId' | 'userRegistrationTenantRule' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type UserRegistrationTenantRuleToContentRolePropertyTypeRecord = Record<UserRegistrationTenantRuleToContentRolePropertyNames, IPropertyTypeDefinition>;

declare type UserRegistrationTenantRuleToJupRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRuleId' | 'userRegistrationTenantRule' | 'jupRoleId' | 'jupRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type UserRegistrationTenantRuleToJupRolePropertyTypeRecord = Record<UserRegistrationTenantRuleToJupRolePropertyNames, IPropertyTypeDefinition>;

export declare function useTranslation(componentKey?: string): TranslationMethodType;

declare type VehiclePropertyNames = 'id' | 'belongsToTheCompany' | 'vehicleRegistration' | 'createdAt' | 'updatedAt' | 'externalId' | 'vehicleTypeId' | 'vehicleType' | 'vehiclePropulsionTypeId' | 'vehiclePropulsionType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToVehicles' | 'companyId' | 'company';

declare type VehiclePropertyTypeRecord = Record<VehiclePropertyNames, IPropertyTypeDefinition>;

declare type VehiclePropulsionTypePropertyNames = 'id' | 'name' | 'color' | 'code' | 'icon' | 'createdAt' | 'updatedAt' | 'externalId' | 'vehicles';

declare type VehiclePropulsionTypePropertyTypeRecord = Record<VehiclePropulsionTypePropertyNames, IPropertyTypeDefinition>;

declare type VehicleTypePropertyNames = 'id' | 'name' | 'color' | 'code' | 'icon' | 'createdAt' | 'updatedAt' | 'externalId' | 'vehicles';

declare type VehicleTypePropertyTypeRecord = Record<VehicleTypePropertyNames, IPropertyTypeDefinition>;

export declare const versionCookieKeyName = "x-version";

export declare type VisibleCamelizedObjectTypeNames = "occupancyStatus" | "user" | "companyType" | "company" | "campus" | "roomConnectorType" | "roomConnector" | "userCompany" | "personGender" | "personCompany" | "jupUiLayout" | "buildingType" | "organization" | "itemTypeFamily" | "manufacturer" | "object3dModel" | "itemType" | "building" | "mapScale" | "structure" | "structurePoint" | "floor" | "distributionCostType" | "roomTypeGroup" | "roomType" | "roomTypeGroupToRoomType" | "roomTypeGroupFloor" | "roomTypeGroupBuilding" | "costCenter" | "costCenterBuilding" | "costCenterFloor" | "room" | "roomPoint" | "roomPointRoom" | "roomPointSegmentType" | "roomPointSegment" | "itemTypePoint" | "dimensionType" | "dimension" | "dimensionRoom" | "dimensionFloor" | "dimensionBuilding" | "factType" | "fact" | "personState" | "personSecurityProfile" | "person" | "personToPersonType" | "personToPerson" | "vehicleType" | "vehiclePropulsionType" | "vehicle" | "personToVehicle" | "roomAffectation" | "workplaceType" | "workplaceUsageType" | "workplaceTypeItemType" | "workplace" | "item" | "workplaceAffectation" | "organizationFloor" | "organizationBuilding" | "roomTypeFloor" | "roomTypeBuilding" | "itemToPerson" | "personToBuilding" | "dimensionToPerson" | "dimensionTypeToBuilding" | "workingLocation" | "personWorkingLocation" | "personToWorkplaceBooking" | "personToRoomBooking" | "personToDimensionBooking" | "personCompanyMission" | "personCompanyToItemType" | "personCompanyToRoomType" | "personCompanyToItem" | "legend" | "openerPostMessageHost" | "companyWorkingLocation" | "jupObjectType" | "jupUiView" | "jupRole" | "jupUiOption" | "jupUiOperation" | "contentRole" | "jupUserCompanyToJupRole" | "jupRoleToJupUiView" | "jupRoleToJupObjectType" | "jupRoleToJupUiOption" | "jupRoleToJupUiOperation" | "contentRoleToBuilding" | "contentRoleToUserCompany" | "contentRoleToFloor" | "partnerApiCredential" | "apiUser" | "apiUserToJupRole" | "apiUserToContentRole" | "jupUiTenantOperation" | "contentRoleToJupUiTenantOperation" | "authentificationConnection" | "userRegistrationTenantRule" | "userRegistrationTenantRuleToJupRole" | "userRegistrationTenantRuleToContentRole" | "partnerExportMappingConfiguration" | "partnerExportMapping" | "partnerExportMappingToRoomType" | "partnerExportMappingConfigurationToFloor" | "jupRoleToJupUiLayout" | "jupUiLayoutTab" | "jupRoleToJupUiLayoutTab" | "itemFact" | "featureFamily" | "featureGroup" | "feature";

declare type WorkingLocationPropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'personWorkingLocations' | 'companyWorkingLocations';

declare type WorkingLocationPropertyTypeRecord = Record<WorkingLocationPropertyNames, IPropertyTypeDefinition>;

declare type WorkplaceAffectationPropertyNames = 'id' | 'rate' | 'calculatedRate' | 'mondayRate' | 'tuesdayRate' | 'wednesdayRate' | 'thursdayRate' | 'fridayRate' | 'saturdayRate' | 'sundayRate' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'workplaceId' | 'workplace' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type WorkplaceAffectationPropertyTypeRecord = Record<WorkplaceAffectationPropertyNames, IPropertyTypeDefinition>;

declare type WorkplacePropertyNames = 'id' | 'position' | 'rotation' | 'isFlex' | 'isTransit' | 'isShared' | 'textAnchor' | 'name' | 'workplaceAffectationsCalculatedRateSum' | 'workplaceAffectationsCount' | 'comment' | 'isBookable' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'workplaceType' | 'roomId' | 'room' | 'organizationId' | 'organization' | 'costCenterId' | 'costCenter' | 'workplaceUsageTypeId' | 'workplaceUsageType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'items' | 'workplaceAffectations' | 'personToWorkplaceBookings' | 'companyId' | 'company';

declare type WorkplacePropertyTypeRecord = Record<WorkplacePropertyNames, IPropertyTypeDefinition>;

declare type WorkplaceTypeItemTypePropertyNames = 'id' | 'position' | 'physicalInventory' | 'rotation' | 'zIndex' | 'seatsCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'workplaceType' | 'itemTypeId' | 'itemType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type WorkplaceTypeItemTypePropertyTypeRecord = Record<WorkplaceTypeItemTypePropertyNames, IPropertyTypeDefinition>;

declare type WorkplaceTypePropertyNames = 'id' | 'name' | 'zIndex' | 'color' | 'center' | 'size' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'workplaceTypeItemTypes' | 'workplaces' | 'companyId' | 'company';

declare type WorkplaceTypePropertyTypeRecord = Record<WorkplaceTypePropertyNames, IPropertyTypeDefinition>;

declare type WorkplaceUsageTypePropertyNames = 'id' | 'name' | 'color' | 'description' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'workplaces' | 'companyId' | 'company';

declare type WorkplaceUsageTypePropertyTypeRecord = Record<WorkplaceUsageTypePropertyNames, IPropertyTypeDefinition>;

export { }


declare module 'notistack' {
    interface VariantOverrides {
        'custom-snackbar-alert': {
            data: Record<string, unknown>;
            handler: IJupErrorCodeMetadataWithComponent<Record<string, unknown>>;
        };
    }
}
