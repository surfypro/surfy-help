import { default as default_2 } from 'react';
import { ReactNode } from 'react';

declare type ApiUserPropertyNames = 'id' | 'clientSecret' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'apiUserToJupRoles' | 'apiUserToContentRoles' | 'companyId' | 'company';

declare type ApiUserPropertyTypeRecord = Record<ApiUserPropertyNames, IPropertyTypeDefinition>;

declare type ApiUserToContentRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'apiUser' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ApiUserToContentRolePropertyTypeRecord = Record<ApiUserToContentRolePropertyNames, IPropertyTypeDefinition>;

declare type ApiUserToJupRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'apiUser' | 'jupRoleId' | 'jupRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type ApiUserToJupRolePropertyTypeRecord = Record<ApiUserToJupRolePropertyNames, IPropertyTypeDefinition>;

export declare const appVersion: string;

declare type AuthentificationConnectionPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRules';

declare type AuthentificationConnectionPropertyTypeRecord = Record<AuthentificationConnectionPropertyNames, IPropertyTypeDefinition>;

declare type BuildingPropertyNames = 'id' | 'name' | 'color' | 'surface' | 'leaseStartDate' | 'leaseEndDate' | 'purchaseDate' | 'documents' | 'picture' | 'regulatoryCapacity' | 'parkingSpaceCount' | 'constructionYear' | 'yearlyCondominiumFees' | 'yearlyRent' | 'yearlyParkingRent' | 'yearlyTaxFees' | 'yearlyExploitationFees' | 'rentReferenceIndex' | 'securityDeposit' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'dimensionPeopleCount' | 'address' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'company' | 'buildingTypeId' | 'buildingType' | 'userCompanyOwnerId' | 'userCompanyOwner' | 'jupUiLayoutId' | 'jupUiLayout' | 'campusId' | 'campus' | 'buildingId' | 'building' | 'buildings' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'floors' | 'roomTypeGroupBuildings' | 'costCenterBuildings' | 'dimensionBuildings' | 'facts' | 'organizationBuildings' | 'roomTypeBuildings' | 'personToBuildings' | 'dimensionTypeToBuildings' | 'contentRoleToBuildings';

declare type BuildingPropertyTypeRecord = Record<BuildingPropertyNames, IPropertyTypeDefinition>;

declare type BuildingTypePropertyNames = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'company' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'buildings';

declare type BuildingTypePropertyTypeRecord = Record<BuildingTypePropertyNames, IPropertyTypeDefinition>;

export declare type CamelizedObjectTypeNames = Surfy.CamelizedObjectTypes;

declare type CampusPropertyNames = 'id' | 'name' | 'color' | 'address' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'buildings' | 'companyId' | 'company';

declare type CampusPropertyTypeRecord = Record<CampusPropertyNames, IPropertyTypeDefinition>;

declare type CompanyPropertyNames = 'id' | 'name' | 'logoPath' | 'iconPath' | 'proxyImages' | 'workingDaysCount' | 'enablePathfinding' | 'planningNumberOfDays' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyTypeId' | 'companyType' | 'userCompanies' | 'buildingTypes' | 'buildings' | 'companyWorkingLocations';

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

declare type DimensionBuildingPropertyNames = 'id' | 'dimensionPeopleCount' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'dimensionTypeId' | 'dimensionType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionBuildingPropertyTypeRecord = Record<DimensionBuildingPropertyNames, IPropertyTypeDefinition>;

declare type DimensionFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'totalCapacityCount' | 'totalCapacityWorkplaceCountRatio' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'dimensionTypeId' | 'dimensionType' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionFloorPropertyTypeRecord = Record<DimensionFloorPropertyNames, IPropertyTypeDefinition>;

declare type DimensionPropertyNames = 'id' | 'name' | 'color' | 'value' | 'peopleCount' | 'totalPeopleCount' | 'manualPeopleCount' | 'carbonFootprintPerMeter' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'dimensionType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'dimensionRooms' | 'dimensionFloors' | 'dimensionBuildings' | 'dimensionToPeople' | 'personToDimensionBookings' | 'companyId' | 'company';

declare type DimensionPropertyTypeRecord = Record<DimensionPropertyNames, IPropertyTypeDefinition>;

declare type DimensionRoomPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'roomId' | 'room' | 'dimensionTypeId' | 'dimensionType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type DimensionRoomPropertyTypeRecord = Record<DimensionRoomPropertyNames, IPropertyTypeDefinition>;

declare type DimensionToPersonPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'personId' | 'person' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

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

export declare function getObjectTypeDefinitionByName(objetTypeName: Surfy.CamelizedObjectTypes): IObjectTypeDefinition<OccupancyStatusPropertyTypeRecord> | IObjectTypeDefinition<UserPropertyTypeRecord> | IObjectTypeDefinition<UserRefreshTokenPropertyTypeRecord> | IObjectTypeDefinition<CompanyTypePropertyTypeRecord> | IObjectTypeDefinition<CompanyPropertyTypeRecord> | IObjectTypeDefinition<CampusPropertyTypeRecord> | IObjectTypeDefinition<RoomConnectorTypePropertyTypeRecord> | IObjectTypeDefinition<RoomConnectorPropertyTypeRecord> | IObjectTypeDefinition<UserCompanyPropertyTypeRecord> | IObjectTypeDefinition<PersonGenderPropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyPropertyTypeRecord> | IObjectTypeDefinition<JupUiLayoutPropertyTypeRecord> | IObjectTypeDefinition<BuildingTypePropertyTypeRecord> | IObjectTypeDefinition<OrganizationPropertyTypeRecord> | IObjectTypeDefinition<ItemTypeFamilyPropertyTypeRecord> | IObjectTypeDefinition<ManufacturerPropertyTypeRecord> | IObjectTypeDefinition<Object3dModelPropertyTypeRecord> | IObjectTypeDefinition<ItemTypePropertyTypeRecord> | IObjectTypeDefinition<BuildingPropertyTypeRecord> | IObjectTypeDefinition<MapScalePropertyTypeRecord> | IObjectTypeDefinition<StructurePropertyTypeRecord> | IObjectTypeDefinition<StructurePointPropertyTypeRecord> | IObjectTypeDefinition<FloorPropertyTypeRecord> | IObjectTypeDefinition<DistributionCostTypePropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupPropertyTypeRecord> | IObjectTypeDefinition<RoomTypePropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupToRoomTypePropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupFloorPropertyTypeRecord> | IObjectTypeDefinition<RoomTypeGroupBuildingPropertyTypeRecord> | IObjectTypeDefinition<CostCenterPropertyTypeRecord> | IObjectTypeDefinition<CostCenterBuildingPropertyTypeRecord> | IObjectTypeDefinition<CostCenterFloorPropertyTypeRecord> | IObjectTypeDefinition<RoomPropertyTypeRecord> | IObjectTypeDefinition<RoomPointPropertyTypeRecord> | IObjectTypeDefinition<RoomPointRoomPropertyTypeRecord> | IObjectTypeDefinition<RoomPointSegmentTypePropertyTypeRecord> | IObjectTypeDefinition<RoomPointSegmentPropertyTypeRecord> | IObjectTypeDefinition<ItemTypePointPropertyTypeRecord> | IObjectTypeDefinition<DimensionTypePropertyTypeRecord> | IObjectTypeDefinition<DimensionPropertyTypeRecord> | IObjectTypeDefinition<DimensionRoomPropertyTypeRecord> | IObjectTypeDefinition<DimensionFloorPropertyTypeRecord> | IObjectTypeDefinition<DimensionBuildingPropertyTypeRecord> | IObjectTypeDefinition<FactTypePropertyTypeRecord> | IObjectTypeDefinition<FactPropertyTypeRecord> | IObjectTypeDefinition<PersonStatePropertyTypeRecord> | IObjectTypeDefinition<PersonSecurityProfilePropertyTypeRecord> | IObjectTypeDefinition<PersonPropertyTypeRecord> | IObjectTypeDefinition<PersonToPersonTypePropertyTypeRecord> | IObjectTypeDefinition<PersonToPersonPropertyTypeRecord> | IObjectTypeDefinition<RoomAffectationPropertyTypeRecord> | IObjectTypeDefinition<WorkplaceTypePropertyTypeRecord> | IObjectTypeDefinition<WorkplaceTypeItemTypePropertyTypeRecord> | IObjectTypeDefinition<WorkplacePropertyTypeRecord> | IObjectTypeDefinition<ItemPropertyTypeRecord> | IObjectTypeDefinition<WorkplaceAffectationPropertyTypeRecord> | IObjectTypeDefinition<OrganizationFloorPropertyTypeRecord> | IObjectTypeDefinition<OrganizationBuildingPropertyTypeRecord> | IObjectTypeDefinition<RoomTypeFloorPropertyTypeRecord> | IObjectTypeDefinition<RoomTypeBuildingPropertyTypeRecord> | IObjectTypeDefinition<ItemToPersonPropertyTypeRecord> | IObjectTypeDefinition<PersonToBuildingPropertyTypeRecord> | IObjectTypeDefinition<DimensionToPersonPropertyTypeRecord> | IObjectTypeDefinition<DimensionTypeToBuildingPropertyTypeRecord> | IObjectTypeDefinition<WorkingLocationPropertyTypeRecord> | IObjectTypeDefinition<PersonWorkingLocationPropertyTypeRecord> | IObjectTypeDefinition<PersonToWorkplaceBookingPropertyTypeRecord> | IObjectTypeDefinition<PersonToRoomBookingPropertyTypeRecord> | IObjectTypeDefinition<PersonToDimensionBookingPropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyMissionPropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyToItemTypePropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyToRoomTypePropertyTypeRecord> | IObjectTypeDefinition<PersonCompanyToItemPropertyTypeRecord> | IObjectTypeDefinition<LegendPropertyTypeRecord> | IObjectTypeDefinition<OpenerPostMessageHostPropertyTypeRecord> | IObjectTypeDefinition<CompanyWorkingLocationPropertyTypeRecord> | IObjectTypeDefinition<JupObjectTypePropertyTypeRecord> | IObjectTypeDefinition<JupUiViewPropertyTypeRecord> | IObjectTypeDefinition<JupRolePropertyTypeRecord> | IObjectTypeDefinition<JupUiOptionPropertyTypeRecord> | IObjectTypeDefinition<JupUiOperationPropertyTypeRecord> | IObjectTypeDefinition<ContentRolePropertyTypeRecord> | IObjectTypeDefinition<JupUserCompanyToJupRolePropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiViewPropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupObjectTypePropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiOptionPropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiOperationPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToBuildingPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToUserCompanyPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToFloorPropertyTypeRecord> | IObjectTypeDefinition<PartnerApiCredentialPropertyTypeRecord> | IObjectTypeDefinition<ApiUserPropertyTypeRecord> | IObjectTypeDefinition<ApiUserToJupRolePropertyTypeRecord> | IObjectTypeDefinition<ApiUserToContentRolePropertyTypeRecord> | IObjectTypeDefinition<JupUiTenantOperationPropertyTypeRecord> | IObjectTypeDefinition<ContentRoleToJupUiTenantOperationPropertyTypeRecord> | IObjectTypeDefinition<AuthentificationConnectionPropertyTypeRecord> | IObjectTypeDefinition<UserRegistrationTenantRulePropertyTypeRecord> | IObjectTypeDefinition<UserRegistrationTenantRuleToJupRolePropertyTypeRecord> | IObjectTypeDefinition<UserRegistrationTenantRuleToContentRolePropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingConfigurationPropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingPropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingToRoomTypePropertyTypeRecord> | IObjectTypeDefinition<PartnerExportMappingConfigurationToFloorPropertyTypeRecord> | IObjectTypeDefinition<JupRoleToJupUiLayoutPropertyTypeRecord> | IObjectTypeDefinition<ItemFactPropertyTypeRecord> | IObjectTypeDefinition<FeatureFamilyPropertyTypeRecord> | IObjectTypeDefinition<FeatureGroupPropertyTypeRecord> | IObjectTypeDefinition<FeaturePropertyTypeRecord>;

export declare function getPropertyTypeByCode(code: PropertyTypeCodes): IPropertyTypeDefinition;

export declare function getPropertyTypeByName<T extends string>(objectTypeName: Surfy.CamelizedObjectTypes, propertyTypeName: T): IPropertyTypeDefinition;

declare type GridNodeType = 'edge' | 'edge-merged' | 'grid' | 'merged';

declare interface I18NContextProps {
    defaultLanguage?: JupLanguageCode;
    children: React.ReactNode;
}

export declare function I18NHelpContext(props: I18NContextProps): ReactNode;

declare type IconShapeType = 'circle' | 'rectangle' | 'triangle';

declare type IconStyle = 'solid' | 'regular' | 'light' | 'thin' | 'duotone' | 'brands';

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
    name: Surfy.CamelizedObjectTypes;
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
        hasMany: Surfy.CamelizedObjectTypes[];
        belongsTo: Surfy.CamelizedObjectTypes[];
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
    singular: Surfy.CamelizedObjectTypes;
    plural: string;
    id: string;
}

declare interface IObjectTypeCapitalizedNames {
    singular: Surfy.ObjectTypes;
    plural: string;
    id: string;
}

declare interface IObjectTypeDefinition<PropertiesByName extends Record<string, IPropertyTypeDefinition>> extends IGenericObjectTypeDefinition {
    propertiesByName: PropertiesByName;
}

declare interface IPaginationList<T> {
    totalCount?: number;
    entities?: T[];
}

declare interface IPoint2d {
    x: number;
    y: number;
}

declare interface IPoint3d extends IPoint2d {
    z: number;
}

declare interface IPropertyTypeAssociation {
    targetModelName: Surfy.CamelizedObjectTypes;
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
    objectTypeName: Surfy.CamelizedObjectTypes;
}

declare interface IPropertyTypeDefinitionOptions {
    mandatory: boolean;
    readOnly: boolean;
    defaultValue?: PropertyTypeJupValues | null;
    calculated: boolean;
    technical: boolean;
    unit?: IPropertyTypeUnitDefinition;
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

declare interface ISize {
    width: number;
    height: number;
}

export declare function isTenantObjectType(objecTypeName: Surfy.CamelizedObjectTypes): boolean;

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

declare interface ITextAnchor {
    textPosition: IPoint3d;
    anchorPosition: IPoint3d;
    displayLine: boolean;
}

declare interface IViewCore {
    name: string;
    isDefaultView?: boolean;
}

declare type JupIconSet = 'fontawesome' | 'material-ui' | 'surfy' | 'icomoon';

declare type JupIconSyle = FontAwesomeIconsStyle | 'surfyicon' | 'icomoon';

export declare type JupLanguageCode = 'fr' | 'en' | 'es' | 'it' | 'nl' | 'de';

declare type JupObjectTypePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViews' | 'jupRoleToJupObjectTypes';

declare type JupObjectTypePropertyTypeRecord = Record<JupObjectTypePropertyNames, IPropertyTypeDefinition>;

declare type JupRolePropertyNames = 'id' | 'code' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUserCompanyToJupRoles' | 'jupRoleToJupUiViews' | 'jupRoleToJupObjectTypes' | 'jupRoleToJupUiOptions' | 'jupRoleToJupUiOperations' | 'apiUserToJupRoles' | 'userRegistrationTenantRuleToJupRoles' | 'jupRoleToJupUiLayouts';

declare type JupRolePropertyTypeRecord = Record<JupRolePropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupObjectTypePropertyNames = 'id' | 'arCreate' | 'arRead' | 'arUpdate' | 'arDelete' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId' | 'jupObjectType' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupObjectTypePropertyTypeRecord = Record<JupRoleToJupObjectTypePropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiLayoutPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiLayoutId' | 'jupUiLayout' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiLayoutPropertyTypeRecord = Record<JupRoleToJupUiLayoutPropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiOperationPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOperationId' | 'jupUiOperation' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiOperationPropertyTypeRecord = Record<JupRoleToJupUiOperationPropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiOptionPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOptionId' | 'jupUiOption' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiOptionPropertyTypeRecord = Record<JupRoleToJupUiOptionPropertyNames, IPropertyTypeDefinition>;

declare type JupRoleToJupUiViewPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViewId' | 'jupUiView' | 'jupRoleId' | 'jupRole';

declare type JupRoleToJupUiViewPropertyTypeRecord = Record<JupRoleToJupUiViewPropertyNames, IPropertyTypeDefinition>;

declare type JupUiLayoutPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'buildings' | 'jupRoleToJupUiLayouts';

declare type JupUiLayoutPropertyTypeRecord = Record<JupUiLayoutPropertyNames, IPropertyTypeDefinition>;

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

export declare function ObjectTypeIndexViewHelp(props: {
    objectTypeName: Surfy.CamelizedObjectTypes;
    view: IViewCore;
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

declare type PersonPropertyNames = 'id' | 'firstname' | 'lastname' | 'fullname' | 'email' | 'picture' | 'title' | 'monitorReference' | 'computerReference' | 'telephone' | 'cellphone' | 'code' | 'badgeNumber' | 'badgeRestaurant' | 'boxNumber' | 'registrationNumber' | 'startDate' | 'endDate' | 'info' | 'notAffectable' | 'notAffectableEndDate' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanies' | 'organizationId' | 'organization' | 'personStateId' | 'personState' | 'personSecurityProfileId' | 'personSecurityProfile' | 'costCenterId' | 'costCenter' | 'personCompanyId' | 'personCompany' | 'personGenderId' | 'personGender' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToPersonSources' | 'personToPersonTargets' | 'roomAffectations' | 'workplaceAffectations' | 'itemToPeople' | 'personToBuildings' | 'dimensionToPeople' | 'personWorkingLocations' | 'personToWorkplaceBookings' | 'personToRoomBookings' | 'personToDimensionBookings' | 'companyId' | 'company';

declare type PersonPropertyTypeRecord = Record<PersonPropertyNames, IPropertyTypeDefinition>;

declare type PersonSecurityProfilePropertyNames = 'id' | 'name' | 'color' | 'icon' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'companyId' | 'company';

declare type PersonSecurityProfilePropertyTypeRecord = Record<PersonSecurityProfilePropertyNames, IPropertyTypeDefinition>;

declare type PersonStatePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'companyId' | 'company';

declare type PersonStatePropertyTypeRecord = Record<PersonStatePropertyNames, IPropertyTypeDefinition>;

declare type PersonToBuildingPropertyNames = 'id' | 'addToPeopleCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToBuildingPropertyTypeRecord = Record<PersonToBuildingPropertyNames, IPropertyTypeDefinition>;

declare type PersonToDimensionBookingPropertyNames = 'id' | 'startDatetime' | 'endDatetime' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'dimensionId' | 'dimension' | 'personWorkingLocationId' | 'personWorkingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToDimensionBookingPropertyTypeRecord = Record<PersonToDimensionBookingPropertyNames, IPropertyTypeDefinition>;

declare type PersonToPersonPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personToPersonTypeId' | 'personToPersonType' | 'personSourceId' | 'personSource' | 'personTargetId' | 'personTarget' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToPersonPropertyTypeRecord = Record<PersonToPersonPropertyNames, IPropertyTypeDefinition>;

declare type PersonToPersonTypePropertyNames = 'id' | 'labelForward' | 'labelBackward' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToPeople' | 'companyId' | 'company';

declare type PersonToPersonTypePropertyTypeRecord = Record<PersonToPersonTypePropertyNames, IPropertyTypeDefinition>;

declare type PersonToRoomBookingPropertyNames = 'id' | 'startDatetime' | 'endDatetime' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'roomId' | 'room' | 'personWorkingLocationId' | 'personWorkingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToRoomBookingPropertyTypeRecord = Record<PersonToRoomBookingPropertyNames, IPropertyTypeDefinition>;

declare type PersonToWorkplaceBookingPropertyNames = 'id' | 'startDatetime' | 'endDatetime' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'workplaceId' | 'workplace' | 'personWorkingLocationId' | 'personWorkingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type PersonToWorkplaceBookingPropertyTypeRecord = Record<PersonToWorkplaceBookingPropertyNames, IPropertyTypeDefinition>;

declare type PersonWorkingLocationPropertyNames = 'id' | 'date' | 'daySlotType' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'workingLocationId' | 'workingLocation' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToWorkplaceBookings' | 'personToRoomBookings' | 'personToDimensionBookings' | 'companyId' | 'company';

declare type PersonWorkingLocationPropertyTypeRecord = Record<PersonWorkingLocationPropertyNames, IPropertyTypeDefinition>;

export declare type PropertyTypeCodes = "occupancyStatus:id" | "occupancyStatus:name" | "occupancyStatus:code" | "occupancyStatus:color" | "occupancyStatus:createdAt";

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

export declare function SetupRecoilContext(props: IProps): default_2.JSX.Element;

declare type StructurePointPropertyNames = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'structureId' | 'structure' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type StructurePointPropertyTypeRecord = Record<StructurePointPropertyNames, IPropertyTypeDefinition>;

declare type StructurePropertyNames = 'id' | 'name' | 'transform' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'structurePoints' | 'floors' | 'companyId' | 'company';

declare type StructurePropertyTypeRecord = Record<StructurePropertyNames, IPropertyTypeDefinition>;

declare namespace Surfy {
    interface OccupancyStatus extends IEntity {
        id: number;
        name: string;
        code: string;
        color: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        rooms?: IPaginationList<Room>;
    }
    interface User extends IEntity {
        id: number;
        email: string;
        firstname?: string;
        lastname?: string;
        picture?: IJupImage;
        sub: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userRefreshTokens?: IPaginationList<UserRefreshToken>;
        userCompanies?: IPaginationList<UserCompany>;
    }
    interface UserRefreshToken extends IEntity {
        id: number;
        refreshToken?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userId: number;
        user?: User;
    }
    interface CompanyType extends IEntity {
        id: number;
        name: string;
        billable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companies?: IPaginationList<Company>;
    }
    interface Company extends IEntity {
        id: number;
        name: string;
        logoPath?: IJupImage;
        iconPath?: IJupImage;
        proxyImages?: boolean;
        workingDaysCount?: number;
        enablePathfinding?: boolean;
        planningNumberOfDays?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyTypeId?: number | null;
        companyType?: CompanyType;
        userCompanies?: IPaginationList<UserCompany>;
        buildingTypes?: IPaginationList<BuildingType>;
        buildings?: IPaginationList<Building>;
        companyWorkingLocations?: IPaginationList<CompanyWorkingLocation>;
    }
    interface Campus extends IEntity {
        id: number;
        name: string;
        color: string;
        address?: IJupAddress;
        roomsArea?: number;
        roomsCount?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        seatsCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        flexRatio?: number;
        seatsPeopleRatio?: number;
        totalPeopleCount?: number;
        carbonFootprint?: number;
        totalCapacityCount?: number;
        totalCapacityWorkplaceCountRatio?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        buildings?: IPaginationList<Building>;
    }
    interface RoomConnectorType extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomConnectors?: IPaginationList<RoomConnector>;
    }
    interface RoomConnector extends IEntity {
        id: number;
        name: string;
        waitTime?: number;
        timePerFloor?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomConnectorTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomConnectorType?: RoomConnectorType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        rooms?: IPaginationList<Room>;
    }
    interface UserCompany extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userId: number;
        companyId: number;
        personId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        user?: User;
        company?: Company;
        person?: Person;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        campusCreatedBies?: IPaginationList<Campus>;
        campusUpdatedBies?: IPaginationList<Campus>;
        roomConnectorCreatedBies?: IPaginationList<RoomConnector>;
        roomConnectorUpdatedBies?: IPaginationList<RoomConnector>;
        userCompanyCreatedBies?: IPaginationList<UserCompany>;
        userCompanyUpdatedBies?: IPaginationList<UserCompany>;
        personCompanyCreatedBies?: IPaginationList<PersonCompany>;
        personCompanyUpdatedBies?: IPaginationList<PersonCompany>;
        buildingTypeCreatedBies?: IPaginationList<BuildingType>;
        buildingTypeUpdatedBies?: IPaginationList<BuildingType>;
        organizationCreatedBies?: IPaginationList<Organization>;
        organizationUpdatedBies?: IPaginationList<Organization>;
        itemTypeFamilyCreatedBies?: IPaginationList<ItemTypeFamily>;
        itemTypeFamilyUpdatedBies?: IPaginationList<ItemTypeFamily>;
        manufacturerCreatedBies?: IPaginationList<Manufacturer>;
        manufacturerUpdatedBies?: IPaginationList<Manufacturer>;
        itemTypeCreatedBies?: IPaginationList<ItemType>;
        itemTypeUpdatedBies?: IPaginationList<ItemType>;
        buildingOwners?: IPaginationList<Building>;
        buildingCreatedBies?: IPaginationList<Building>;
        buildingUpdatedBies?: IPaginationList<Building>;
        mapScaleCreatedBies?: IPaginationList<MapScale>;
        mapScaleUpdatedBies?: IPaginationList<MapScale>;
        structureCreatedBies?: IPaginationList<Structure>;
        structureUpdatedBies?: IPaginationList<Structure>;
        structurePointCreatedBies?: IPaginationList<StructurePoint>;
        structurePointUpdatedBies?: IPaginationList<StructurePoint>;
        floorCreatedBies?: IPaginationList<Floor>;
        floorUpdatedBies?: IPaginationList<Floor>;
        distributionCostTypeCreatedBies?: IPaginationList<DistributionCostType>;
        distributionCostTypeUpdatedBies?: IPaginationList<DistributionCostType>;
        roomTypeCreatedBies?: IPaginationList<RoomType>;
        roomTypeUpdatedBies?: IPaginationList<RoomType>;
        roomTypeGroupToRoomTypeCreatedBies?: IPaginationList<RoomTypeGroupToRoomType>;
        roomTypeGroupToRoomTypeUpdatedBies?: IPaginationList<RoomTypeGroupToRoomType>;
        roomTypeGroupFloorCreatedBies?: IPaginationList<RoomTypeGroupFloor>;
        roomTypeGroupFloorUpdatedBies?: IPaginationList<RoomTypeGroupFloor>;
        roomTypeGroupBuildingCreatedBies?: IPaginationList<RoomTypeGroupBuilding>;
        roomTypeGroupBuildingUpdatedBies?: IPaginationList<RoomTypeGroupBuilding>;
        costCenterCreatedBies?: IPaginationList<CostCenter>;
        costCenterUpdatedBies?: IPaginationList<CostCenter>;
        costCenterBuildingCreatedBies?: IPaginationList<CostCenterBuilding>;
        costCenterBuildingUpdatedBies?: IPaginationList<CostCenterBuilding>;
        costCenterFloorCreatedBies?: IPaginationList<CostCenterFloor>;
        costCenterFloorUpdatedBies?: IPaginationList<CostCenterFloor>;
        roomCreatedBies?: IPaginationList<Room>;
        roomUpdatedBies?: IPaginationList<Room>;
        roomPointCreatedBies?: IPaginationList<RoomPoint>;
        roomPointUpdatedBies?: IPaginationList<RoomPoint>;
        roomPointRoomCreatedBies?: IPaginationList<RoomPointRoom>;
        roomPointRoomUpdatedBies?: IPaginationList<RoomPointRoom>;
        roomPointSegmentCreatedBies?: IPaginationList<RoomPointSegment>;
        roomPointSegmentUpdatedBies?: IPaginationList<RoomPointSegment>;
        itemTypePointCreatedBies?: IPaginationList<ItemTypePoint>;
        itemTypePointUpdatedBies?: IPaginationList<ItemTypePoint>;
        dimensionTypeCreatedBies?: IPaginationList<DimensionType>;
        dimensionTypeUpdatedBies?: IPaginationList<DimensionType>;
        dimensionCreatedBies?: IPaginationList<Dimension>;
        dimensionUpdatedBies?: IPaginationList<Dimension>;
        dimensionRoomCreatedBies?: IPaginationList<DimensionRoom>;
        dimensionRoomUpdatedBies?: IPaginationList<DimensionRoom>;
        dimensionFloorCreatedBies?: IPaginationList<DimensionFloor>;
        dimensionFloorUpdatedBies?: IPaginationList<DimensionFloor>;
        dimensionBuildingCreatedBies?: IPaginationList<DimensionBuilding>;
        dimensionBuildingUpdatedBies?: IPaginationList<DimensionBuilding>;
        factTypeCreatedBies?: IPaginationList<FactType>;
        factTypeUpdatedBies?: IPaginationList<FactType>;
        factCreatedBies?: IPaginationList<Fact>;
        factUpdatedBies?: IPaginationList<Fact>;
        personStateCreatedBies?: IPaginationList<PersonState>;
        personStateUpdatedBies?: IPaginationList<PersonState>;
        personSecurityProfileCreatedBies?: IPaginationList<PersonSecurityProfile>;
        personSecurityProfileUpdatedBies?: IPaginationList<PersonSecurityProfile>;
        personCreatedBies?: IPaginationList<Person>;
        personUpdatedBies?: IPaginationList<Person>;
        personToPersonTypeCreatedBies?: IPaginationList<PersonToPersonType>;
        personToPersonTypeUpdatedBies?: IPaginationList<PersonToPersonType>;
        personToPersonCreatedBies?: IPaginationList<PersonToPerson>;
        personToPersonUpdatedBies?: IPaginationList<PersonToPerson>;
        roomAffectationCreatedBies?: IPaginationList<RoomAffectation>;
        roomAffectationUpdatedBies?: IPaginationList<RoomAffectation>;
        workplaceTypeCreatedBies?: IPaginationList<WorkplaceType>;
        workplaceTypeUpdatedBies?: IPaginationList<WorkplaceType>;
        workplaceTypeItemTypeCreatedBies?: IPaginationList<WorkplaceTypeItemType>;
        workplaceTypeItemTypeUpdatedBies?: IPaginationList<WorkplaceTypeItemType>;
        workplaceCreatedBies?: IPaginationList<Workplace>;
        workplaceUpdatedBies?: IPaginationList<Workplace>;
        itemCreatedBies?: IPaginationList<Item>;
        itemUpdatedBies?: IPaginationList<Item>;
        workplaceAffectationCreatedBies?: IPaginationList<WorkplaceAffectation>;
        workplaceAffectationUpdatedBies?: IPaginationList<WorkplaceAffectation>;
        organizationFloorCreatedBies?: IPaginationList<OrganizationFloor>;
        organizationFloorUpdatedBies?: IPaginationList<OrganizationFloor>;
        organizationBuildingCreatedBies?: IPaginationList<OrganizationBuilding>;
        organizationBuildingUpdatedBies?: IPaginationList<OrganizationBuilding>;
        roomTypeFloorCreatedBies?: IPaginationList<RoomTypeFloor>;
        roomTypeFloorUpdatedBies?: IPaginationList<RoomTypeFloor>;
        roomTypeBuildingCreatedBies?: IPaginationList<RoomTypeBuilding>;
        roomTypeBuildingUpdatedBies?: IPaginationList<RoomTypeBuilding>;
        itemToPersonCreatedBies?: IPaginationList<ItemToPerson>;
        itemToPersonUpdatedBies?: IPaginationList<ItemToPerson>;
        personToBuildingCreatedBies?: IPaginationList<PersonToBuilding>;
        personToBuildingUpdatedBies?: IPaginationList<PersonToBuilding>;
        dimensionToPersonCreatedBies?: IPaginationList<DimensionToPerson>;
        dimensionToPersonUpdatedBies?: IPaginationList<DimensionToPerson>;
        dimensionTypeToBuildingCreatedBies?: IPaginationList<DimensionTypeToBuilding>;
        dimensionTypeToBuildingUpdatedBies?: IPaginationList<DimensionTypeToBuilding>;
        personWorkingLocationCreatedBies?: IPaginationList<PersonWorkingLocation>;
        personWorkingLocationUpdatedBies?: IPaginationList<PersonWorkingLocation>;
        personToWorkplaceBookingCreatedBies?: IPaginationList<PersonToWorkplaceBooking>;
        personToWorkplaceBookingUpdatedBies?: IPaginationList<PersonToWorkplaceBooking>;
        personToRoomBookingCreatedBies?: IPaginationList<PersonToRoomBooking>;
        personToRoomBookingUpdatedBies?: IPaginationList<PersonToRoomBooking>;
        personToDimensionBookingCreatedBies?: IPaginationList<PersonToDimensionBooking>;
        personToDimensionBookingUpdatedBies?: IPaginationList<PersonToDimensionBooking>;
        personCompanyToItemTypeCreatedBies?: IPaginationList<PersonCompanyToItemType>;
        personCompanyToItemTypeUpdatedBies?: IPaginationList<PersonCompanyToItemType>;
        personCompanyToRoomTypeCreatedBies?: IPaginationList<PersonCompanyToRoomType>;
        personCompanyToRoomTypeUpdatedBies?: IPaginationList<PersonCompanyToRoomType>;
        personCompanyToItemCreatedBies?: IPaginationList<PersonCompanyToItem>;
        personCompanyToItemUpdatedBies?: IPaginationList<PersonCompanyToItem>;
        legendCreatedBies?: IPaginationList<Legend>;
        legendUpdatedBies?: IPaginationList<Legend>;
        openerPostMessageHostCreatedBies?: IPaginationList<OpenerPostMessageHost>;
        openerPostMessageHostUpdatedBies?: IPaginationList<OpenerPostMessageHost>;
        companyWorkingLocationCreatedBies?: IPaginationList<CompanyWorkingLocation>;
        companyWorkingLocationUpdatedBies?: IPaginationList<CompanyWorkingLocation>;
        contentRoleCreatedBies?: IPaginationList<ContentRole>;
        contentRoleUpdatedBies?: IPaginationList<ContentRole>;
        jupUserCompanyToJupRoles?: IPaginationList<JupUserCompanyToJupRole>;
        jupUserCompanyToJupRoleCreatedBies?: IPaginationList<JupUserCompanyToJupRole>;
        jupUserCompanyToJupRoleUpdatedBies?: IPaginationList<JupUserCompanyToJupRole>;
        contentRoleToBuildingCreatedBies?: IPaginationList<ContentRoleToBuilding>;
        contentRoleToBuildingUpdatedBies?: IPaginationList<ContentRoleToBuilding>;
        contentRoleToUserCompanies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToUserCompanyCreatedBies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToUserCompanyUpdatedBies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToFloorCreatedBies?: IPaginationList<ContentRoleToFloor>;
        contentRoleToFloorUpdatedBies?: IPaginationList<ContentRoleToFloor>;
        partnerApiCredentialCreatedBies?: IPaginationList<PartnerApiCredential>;
        partnerApiCredentialUpdatedBies?: IPaginationList<PartnerApiCredential>;
        apiUserCreatedBies?: IPaginationList<ApiUser>;
        apiUserUpdatedBies?: IPaginationList<ApiUser>;
        apiUserToJupRoleCreatedBies?: IPaginationList<ApiUserToJupRole>;
        apiUserToJupRoleUpdatedBies?: IPaginationList<ApiUserToJupRole>;
        apiUserToContentRoleCreatedBies?: IPaginationList<ApiUserToContentRole>;
        apiUserToContentRoleUpdatedBies?: IPaginationList<ApiUserToContentRole>;
        jupUiTenantOperationCreatedBies?: IPaginationList<JupUiTenantOperation>;
        jupUiTenantOperationUpdatedBies?: IPaginationList<JupUiTenantOperation>;
        contentRoleToJupUiTenantOperationCreatedBies?: IPaginationList<ContentRoleToJupUiTenantOperation>;
        contentRoleToJupUiTenantOperationUpdatedBies?: IPaginationList<ContentRoleToJupUiTenantOperation>;
        userRegistrationTenantRuleCreatedBies?: IPaginationList<UserRegistrationTenantRule>;
        userRegistrationTenantRuleUpdatedBies?: IPaginationList<UserRegistrationTenantRule>;
        userRegistrationTenantRuleToJupRoleCreatedBies?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        userRegistrationTenantRuleToJupRoleUpdatedBies?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        userRegistrationTenantRuleToContentRoleCreatedBies?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
        userRegistrationTenantRuleToContentRoleUpdatedBies?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
        partnerExportMappingConfigurationCreatedBies?: IPaginationList<PartnerExportMappingConfiguration>;
        partnerExportMappingConfigurationUpdatedBies?: IPaginationList<PartnerExportMappingConfiguration>;
        partnerExportMappingCreatedBies?: IPaginationList<PartnerExportMapping>;
        partnerExportMappingUpdatedBies?: IPaginationList<PartnerExportMapping>;
        partnerExportMappingToRoomTypeCreatedBies?: IPaginationList<PartnerExportMappingToRoomType>;
        partnerExportMappingToRoomTypeUpdatedBies?: IPaginationList<PartnerExportMappingToRoomType>;
        partnerExportMappingConfigurationToFloorCreatedBies?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
        partnerExportMappingConfigurationToFloorUpdatedBies?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
        itemFactCreatedBies?: IPaginationList<ItemFact>;
        itemFactUpdatedBies?: IPaginationList<ItemFact>;
        featureFamilyCreatedBies?: IPaginationList<FeatureFamily>;
        featureFamilyUpdatedBies?: IPaginationList<FeatureFamily>;
        featureGroupCreatedBies?: IPaginationList<FeatureGroup>;
        featureGroupUpdatedBies?: IPaginationList<FeatureGroup>;
        featureCreatedBies?: IPaginationList<Feature>;
        featureUpdatedBies?: IPaginationList<Feature>;
    }
    interface PersonGender extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        people?: IPaginationList<Person>;
    }
    interface PersonCompany extends IEntity {
        id: number;
        name: string;
        comment?: string;
        contact?: string;
        documents?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        people?: IPaginationList<Person>;
        personCompanyToItemTypes?: IPaginationList<PersonCompanyToItemType>;
        personCompanyToRoomTypes?: IPaginationList<PersonCompanyToRoomType>;
        personCompanyToItems?: IPaginationList<PersonCompanyToItem>;
    }
    interface JupUiLayout extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        buildings?: IPaginationList<Building>;
        jupRoleToJupUiLayouts?: IPaginationList<JupRoleToJupUiLayout>;
    }
    interface BuildingType extends IEntity {
        id: number;
        name: string;
        code?: string;
        color?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        company?: Company;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        buildings?: IPaginationList<Building>;
    }
    interface Organization extends IEntity {
        id: number;
        name: string;
        code?: string;
        color?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        organizations?: IPaginationList<Organization>;
        rooms?: IPaginationList<Room>;
        people?: IPaginationList<Person>;
        workplaces?: IPaginationList<Workplace>;
        organizationFloors?: IPaginationList<OrganizationFloor>;
        organizationBuildings?: IPaginationList<OrganizationBuilding>;
    }
    interface ItemTypeFamily extends IEntity {
        id: number;
        name: string;
        code?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemTypes?: IPaginationList<ItemType>;
    }
    interface Manufacturer extends IEntity {
        id: number;
        name: string;
        website?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemTypes?: IPaginationList<ItemType>;
    }
    interface Object3dModel extends IEntity {
        id: number;
        name: string;
        type: string;
        rotation: number;
        origin: string;
        model: IModel3d;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypes?: IPaginationList<ItemType>;
    }
    interface ItemType extends IEntity {
        id: number;
        name: string;
        picture?: IJupImage;
        displayItemReferenceInMap?: boolean;
        code?: string;
        icon?: IJupIcon;
        color?: string;
        height?: number;
        zIndex: number;
        description?: string;
        price?: number;
        seatsCount?: number;
        carbonFootprint?: number;
        iconShape?: IconShapeType;
        iconBackgroundColor?: string;
        iconBorderColor?: string;
        isAffectable?: boolean;
        excludeFromPathfinding?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypeFamilyId: number;
        manufacturerId?: number | null;
        object3dModelId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        itemTypeFamily?: ItemTypeFamily;
        manufacturer?: Manufacturer;
        object3dModel?: Object3dModel;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemTypePoints?: IPaginationList<ItemTypePoint>;
        workplaceTypeItemTypes?: IPaginationList<WorkplaceTypeItemType>;
        items?: IPaginationList<Item>;
        personCompanyToItemTypes?: IPaginationList<PersonCompanyToItemType>;
    }
    interface Building extends IEntity {
        id: number;
        name: string;
        color: string;
        surface?: number;
        leaseStartDate?: string;
        leaseEndDate?: string;
        purchaseDate?: string;
        documents?: string;
        picture?: IJupImage;
        regulatoryCapacity?: number;
        parkingSpaceCount?: number;
        constructionYear?: number;
        yearlyCondominiumFees?: number;
        yearlyRent?: number;
        yearlyParkingRent?: number;
        yearlyTaxFees?: number;
        yearlyExploitationFees?: number;
        rentReferenceIndex?: number;
        securityDeposit?: number;
        roomsArea?: number;
        roomsCount?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        seatsCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        flexRatio?: number;
        seatsPeopleRatio?: number;
        totalPeopleCount?: number;
        carbonFootprint?: number;
        totalCapacityCount?: number;
        totalCapacityWorkplaceCountRatio?: number;
        dimensionPeopleCount?: number;
        address?: IJupAddress;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId: number;
        buildingTypeId?: number | null;
        userCompanyOwnerId?: number | null;
        jupUiLayoutId?: number | null;
        campusId?: number | null;
        buildingId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        company?: Company;
        buildingType?: BuildingType;
        userCompanyOwner?: UserCompany;
        jupUiLayout?: JupUiLayout;
        campus?: Campus;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        buildings?: IPaginationList<Building>;
        floors?: IPaginationList<Floor>;
        roomTypeGroupBuildings?: IPaginationList<RoomTypeGroupBuilding>;
        costCenterBuildings?: IPaginationList<CostCenterBuilding>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
        facts?: IPaginationList<Fact>;
        organizationBuildings?: IPaginationList<OrganizationBuilding>;
        roomTypeBuildings?: IPaginationList<RoomTypeBuilding>;
        personToBuildings?: IPaginationList<PersonToBuilding>;
        dimensionTypeToBuildings?: IPaginationList<DimensionTypeToBuilding>;
        contentRoleToBuildings?: IPaginationList<ContentRoleToBuilding>;
    }
    interface MapScale extends IEntity {
        id: number;
        name?: string;
        p1: IPoint2d;
        p2: IPoint2d;
        length?: number;
        ratio?: number;
        strokeWidth?: number;
        roomTextSize?: number;
        workplaceTextSize?: number;
        segmentDistanceTextSize?: number;
        itemTypeIconSize?: number;
        roomIconSize?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        floors?: IPaginationList<Floor>;
    }
    interface Structure extends IEntity {
        id: number;
        name: string;
        transform?: IJupTransform;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        structurePoints?: IPaginationList<StructurePoint>;
        floors?: IPaginationList<Floor>;
    }
    interface StructurePoint extends IEntity {
        id: number;
        x: number;
        y: number;
        sortIndex: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        structureId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        structure?: Structure;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface Floor extends IEntity {
        id: number;
        name: string;
        level: number;
        height?: number;
        regulatoryCapacity?: number;
        roomsArea?: number;
        roomsCount?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        seatsCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        flexRatio?: number;
        seatsPeopleRatio?: number;
        totalPeopleCount?: number;
        carbonFootprint?: number;
        totalCapacityCount?: number;
        totalCapacityWorkplaceCountRatio?: number;
        backgroundLayout?: IJupImage;
        backgroundLayoutOpacity?: number;
        pathfindingGraph?: IFloorPathfindingGraph;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        buildingId: number;
        mapScaleId?: number | null;
        structureId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        building?: Building;
        mapScale?: MapScale;
        structure?: Structure;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomTypeGroupFloors?: IPaginationList<RoomTypeGroupFloor>;
        costCenterFloors?: IPaginationList<CostCenterFloor>;
        rooms?: IPaginationList<Room>;
        roomPoints?: IPaginationList<RoomPoint>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        organizationFloors?: IPaginationList<OrganizationFloor>;
        roomTypeFloors?: IPaginationList<RoomTypeFloor>;
        contentRoleToFloors?: IPaginationList<ContentRoleToFloor>;
        partnerExportMappingConfigurationToFloors?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
    }
    interface DistributionCostType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomTypes?: IPaginationList<RoomType>;
        rooms?: IPaginationList<Room>;
    }
    interface RoomTypeGroup extends IEntity {
        id: number;
        name: string;
        code?: string;
        color?: string;
        exclude?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeGroupToRoomTypes?: IPaginationList<RoomTypeGroupToRoomType>;
        roomTypeGroupFloors?: IPaginationList<RoomTypeGroupFloor>;
        roomTypeGroupBuildings?: IPaginationList<RoomTypeGroupBuilding>;
    }
    interface RoomType extends IEntity {
        id: number;
        name: string;
        color?: string;
        icon?: IJupIcon;
        color3d?: string;
        code?: string;
        displayWallsOn3d?: boolean;
        cadence?: number;
        isBookable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        distributionCostTypeId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        distributionCostType?: DistributionCostType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomTypeGroupToRoomTypes?: IPaginationList<RoomTypeGroupToRoomType>;
        rooms?: IPaginationList<Room>;
        roomTypeFloors?: IPaginationList<RoomTypeFloor>;
        roomTypeBuildings?: IPaginationList<RoomTypeBuilding>;
        personCompanyToRoomTypes?: IPaginationList<PersonCompanyToRoomType>;
        partnerExportMappingToRoomTypes?: IPaginationList<PartnerExportMappingToRoomType>;
    }
    interface RoomTypeGroupToRoomType extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeGroupId: number;
        roomTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomTypeGroup?: RoomTypeGroup;
        roomType?: RoomType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface RoomTypeGroupFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeGroupId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomTypeGroup?: RoomTypeGroup;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface RoomTypeGroupBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeGroupId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomTypeGroup?: RoomTypeGroup;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface CostCenter extends IEntity {
        id: number;
        name: string;
        color?: string;
        info?: string;
        distributeByFloor?: boolean;
        distributeByBuilding?: boolean;
        code?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        costCenterBuildings?: IPaginationList<CostCenterBuilding>;
        costCenterFloors?: IPaginationList<CostCenterFloor>;
        rooms?: IPaginationList<Room>;
        people?: IPaginationList<Person>;
        workplaces?: IPaginationList<Workplace>;
    }
    interface CostCenterBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        costCenterId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        costCenter?: CostCenter;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface CostCenterFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        costCenterId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        costCenter?: CostCenter;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface Room extends IEntity {
        id: number;
        name?: string;
        prettyName?: string;
        area?: number;
        perimeter?: number;
        textAnchor?: ITextAnchor;
        capacity?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        seatsCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        flexRatio?: number;
        seatsPeopleRatio?: number;
        totalPeopleCount?: number;
        carbonFootprint?: number;
        totalCapacityCount?: number;
        totalCapacityWorkplaceCountRatio?: number;
        info?: string;
        bookingEmail?: string;
        externalId2?: string;
        picture?: IJupImage;
        keyCylinderCode?: string;
        livePeopleCount?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        floorId: number;
        occupancyStatusId?: number | null;
        roomTypeId?: number | null;
        organizationId?: number | null;
        costCenterId?: number | null;
        distributionCostTypeId?: number | null;
        roomConnectorId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        floor?: Floor;
        occupancyStatus?: OccupancyStatus;
        roomType?: RoomType;
        organization?: Organization;
        costCenter?: CostCenter;
        distributionCostType?: DistributionCostType;
        roomConnector?: RoomConnector;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomPointRooms?: IPaginationList<RoomPointRoom>;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        roomAffectations?: IPaginationList<RoomAffectation>;
        workplaces?: IPaginationList<Workplace>;
        items?: IPaginationList<Item>;
        personToRoomBookings?: IPaginationList<PersonToRoomBooking>;
    }
    interface RoomPoint extends IEntity {
        id: number;
        x: number;
        y: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomPointRooms?: IPaginationList<RoomPointRoom>;
        roomPointSegmentStarts?: IPaginationList<RoomPointSegment>;
        roomPointSegmentEnds?: IPaginationList<RoomPointSegment>;
    }
    interface RoomPointRoom extends IEntity {
        id: number;
        sortIndex: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomId: number;
        roomPointId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        room?: Room;
        roomPoint?: RoomPoint;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface RoomPointSegmentType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomPointSegments?: IPaginationList<RoomPointSegment>;
    }
    interface RoomPointSegment extends IEntity {
        id: number;
        reversePoints?: boolean;
        displayBothSides?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomPointSegmentTypeId: number;
        roomPointStartId: number;
        roomPointEndId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomPointSegmentType?: RoomPointSegmentType;
        roomPointStart?: RoomPoint;
        roomPointEnd?: RoomPoint;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface ItemTypePoint extends IEntity {
        id: number;
        x: number;
        y: number;
        sortIndex: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        itemType?: ItemType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface DimensionType extends IEntity {
        id: number;
        name: string;
        code?: string;
        order?: number;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        dimensions?: IPaginationList<Dimension>;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
        dimensionTypeToBuildings?: IPaginationList<DimensionTypeToBuilding>;
    }
    interface Dimension extends IEntity {
        id: number;
        name: string;
        color?: string;
        value?: number;
        peopleCount?: number;
        totalPeopleCount?: number;
        manualPeopleCount?: number;
        carbonFootprintPerMeter?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimensionType?: DimensionType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
        dimensionToPeople?: IPaginationList<DimensionToPerson>;
        personToDimensionBookings?: IPaginationList<PersonToDimensionBooking>;
    }
    interface DimensionRoom extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId: number;
        roomId: number;
        dimensionTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        room?: Room;
        dimensionType?: DimensionType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface DimensionFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId?: number | null;
        dimensionTypeId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        dimensionType?: DimensionType;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface DimensionBuilding extends IEntity {
        id: number;
        dimensionPeopleCount: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId?: number | null;
        dimensionTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        dimensionType?: DimensionType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface FactType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        facts?: IPaginationList<Fact>;
    }
    interface Fact extends IEntity {
        id: number;
        value: number;
        date: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        factTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        factType?: FactType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PersonState extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        people?: IPaginationList<Person>;
    }
    interface PersonSecurityProfile extends IEntity {
        id: number;
        name: string;
        color?: string;
        icon?: IJupIcon;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        people?: IPaginationList<Person>;
    }
    interface Person extends IEntity {
        id: number;
        firstname: string;
        lastname: string;
        fullname?: string;
        email?: string;
        picture?: IJupImage;
        title?: string;
        monitorReference?: string;
        computerReference?: string;
        telephone?: string;
        cellphone?: string;
        code?: string;
        badgeNumber?: string;
        badgeRestaurant?: string;
        boxNumber?: string;
        registrationNumber?: string;
        startDate?: string;
        endDate?: string;
        info?: string;
        notAffectable?: boolean;
        notAffectableEndDate?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId?: number | null;
        personStateId?: number | null;
        personSecurityProfileId?: number | null;
        costCenterId?: number | null;
        personCompanyId?: number | null;
        personGenderId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        personState?: PersonState;
        personSecurityProfile?: PersonSecurityProfile;
        costCenter?: CostCenter;
        personCompany?: PersonCompany;
        personGender?: PersonGender;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        userCompanies?: IPaginationList<UserCompany>;
        personToPersonSources?: IPaginationList<PersonToPerson>;
        personToPersonTargets?: IPaginationList<PersonToPerson>;
        roomAffectations?: IPaginationList<RoomAffectation>;
        workplaceAffectations?: IPaginationList<WorkplaceAffectation>;
        itemToPeople?: IPaginationList<ItemToPerson>;
        personToBuildings?: IPaginationList<PersonToBuilding>;
        dimensionToPeople?: IPaginationList<DimensionToPerson>;
        personWorkingLocations?: IPaginationList<PersonWorkingLocation>;
        personToWorkplaceBookings?: IPaginationList<PersonToWorkplaceBooking>;
        personToRoomBookings?: IPaginationList<PersonToRoomBooking>;
        personToDimensionBookings?: IPaginationList<PersonToDimensionBooking>;
    }
    interface PersonToPersonType extends IEntity {
        id: number;
        labelForward: string;
        labelBackward: string;
        code?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        personToPeople?: IPaginationList<PersonToPerson>;
    }
    interface PersonToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personToPersonTypeId?: number | null;
        personSourceId: number;
        personTargetId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        personToPersonType?: PersonToPersonType;
        personSource?: Person;
        personTarget?: Person;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface RoomAffectation extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        roomId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        room?: Room;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface WorkplaceType extends IEntity {
        id: number;
        name: string;
        zIndex: number;
        color?: string;
        center?: IPoint3d;
        size?: ISize;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        workplaceTypeItemTypes?: IPaginationList<WorkplaceTypeItemType>;
        workplaces?: IPaginationList<Workplace>;
    }
    interface WorkplaceTypeItemType extends IEntity {
        id: number;
        position: IPoint3d;
        physicalInventory?: boolean;
        rotation: number;
        zIndex: number;
        seatsCount?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        workplaceTypeId: number;
        itemTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        workplaceType?: WorkplaceType;
        itemType?: ItemType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface Workplace extends IEntity {
        id: number;
        position: IPoint3d;
        rotation: number;
        isFlex?: boolean;
        isTransit?: boolean;
        isShared?: boolean;
        textAnchor?: ITextAnchor;
        name?: string;
        workplaceAffectationsCalculatedRateSum?: number;
        workplaceAffectationsCount?: number;
        comment?: string;
        isBookable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        workplaceTypeId: number;
        roomId: number;
        organizationId?: number | null;
        costCenterId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        workplaceType?: WorkplaceType;
        room?: Room;
        organization?: Organization;
        costCenter?: CostCenter;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        items?: IPaginationList<Item>;
        workplaceAffectations?: IPaginationList<WorkplaceAffectation>;
        personToWorkplaceBookings?: IPaginationList<PersonToWorkplaceBooking>;
    }
    interface Item extends IEntity {
        id: number;
        code?: string;
        reference?: string;
        purchaseDate?: string;
        position: IPoint3d;
        rotation: number;
        textAnchor?: ITextAnchor;
        price?: number;
        itemAffectationsCount?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypeId: number;
        roomId: number;
        workplaceId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        itemType?: ItemType;
        room?: Room;
        workplace?: Workplace;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemToPeople?: IPaginationList<ItemToPerson>;
        personCompanyToItems?: IPaginationList<PersonCompanyToItem>;
        itemFacts?: IPaginationList<ItemFact>;
    }
    interface WorkplaceAffectation extends IEntity {
        id: number;
        rate?: number;
        calculatedRate?: number;
        mondayRate?: number;
        tuesdayRate?: number;
        wednesdayRate?: number;
        thursdayRate?: number;
        fridayRate?: number;
        saturdayRate?: number;
        sundayRate?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        workplaceId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        workplace?: Workplace;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface OrganizationFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface OrganizationBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface RoomTypeFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomType?: RoomType;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface RoomTypeBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        totalCapacityCount: number;
        totalCapacityWorkplaceCountRatio: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomType?: RoomType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface ItemToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        itemId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        item?: Item;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PersonToBuilding extends IEntity {
        id: number;
        addToPeopleCount?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface DimensionToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId: number;
        personId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        person?: Person;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface DimensionTypeToBuilding extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimensionType?: DimensionType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface WorkingLocation extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personWorkingLocations?: IPaginationList<PersonWorkingLocation>;
        companyWorkingLocations?: IPaginationList<CompanyWorkingLocation>;
    }
    interface PersonWorkingLocation extends IEntity {
        id: number;
        date: string;
        daySlotType: DaySlotType;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        workingLocationId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        workingLocation?: WorkingLocation;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        personToWorkplaceBookings?: IPaginationList<PersonToWorkplaceBooking>;
        personToRoomBookings?: IPaginationList<PersonToRoomBooking>;
        personToDimensionBookings?: IPaginationList<PersonToDimensionBooking>;
    }
    interface PersonToWorkplaceBooking extends IEntity {
        id: number;
        startDatetime: string;
        endDatetime: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        workplaceId: number;
        personWorkingLocationId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        workplace?: Workplace;
        personWorkingLocation?: PersonWorkingLocation;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PersonToRoomBooking extends IEntity {
        id: number;
        startDatetime: string;
        endDatetime: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        roomId: number;
        personWorkingLocationId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        room?: Room;
        personWorkingLocation?: PersonWorkingLocation;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PersonToDimensionBooking extends IEntity {
        id: number;
        startDatetime: string;
        endDatetime: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        dimensionId: number;
        personWorkingLocationId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        dimension?: Dimension;
        personWorkingLocation?: PersonWorkingLocation;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PersonCompanyMission extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personCompanyToItemTypes?: IPaginationList<PersonCompanyToItemType>;
        personCompanyToRoomTypes?: IPaginationList<PersonCompanyToRoomType>;
    }
    interface PersonCompanyToItemType extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personCompanyId: number;
        itemTypeId: number;
        personCompanyMissionId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        personCompany?: PersonCompany;
        itemType?: ItemType;
        personCompanyMission?: PersonCompanyMission;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PersonCompanyToRoomType extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personCompanyId: number;
        roomTypeId: number;
        personCompanyMissionId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        personCompany?: PersonCompany;
        roomType?: RoomType;
        personCompanyMission?: PersonCompanyMission;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PersonCompanyToItem extends IEntity {
        id: number;
        datetime?: string;
        comment?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personCompanyId: number;
        itemId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        personCompany?: PersonCompany;
        item?: Item;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface Legend extends IEntity {
        id: number;
        name: string;
        configuration?: IJupLegendConfiguration;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface OpenerPostMessageHost extends IEntity {
        id: number;
        host: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface CompanyWorkingLocation extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId: number;
        workingLocationId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        company?: Company;
        workingLocation?: WorkingLocation;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
    }
    interface JupObjectType extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiViews?: IPaginationList<JupUiView>;
        jupRoleToJupObjectTypes?: IPaginationList<JupRoleToJupObjectType>;
    }
    interface JupUiView extends IEntity {
        id: number;
        name: string;
        isDefaultView?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupObjectTypeId: number;
        jupObjectType?: JupObjectType;
        jupRoleToJupUiViews?: IPaginationList<JupRoleToJupUiView>;
    }
    interface JupRole extends IEntity {
        id: number;
        code: string;
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUserCompanyToJupRoles?: IPaginationList<JupUserCompanyToJupRole>;
        jupRoleToJupUiViews?: IPaginationList<JupRoleToJupUiView>;
        jupRoleToJupObjectTypes?: IPaginationList<JupRoleToJupObjectType>;
        jupRoleToJupUiOptions?: IPaginationList<JupRoleToJupUiOption>;
        jupRoleToJupUiOperations?: IPaginationList<JupRoleToJupUiOperation>;
        apiUserToJupRoles?: IPaginationList<ApiUserToJupRole>;
        userRegistrationTenantRuleToJupRoles?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        jupRoleToJupUiLayouts?: IPaginationList<JupRoleToJupUiLayout>;
    }
    interface JupUiOption extends IEntity {
        id: number;
        name: string;
        scope?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupRoleToJupUiOptions?: IPaginationList<JupRoleToJupUiOption>;
    }
    interface JupUiOperation extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupRoleToJupUiOperations?: IPaginationList<JupRoleToJupUiOperation>;
    }
    interface ContentRole extends IEntity {
        id: number;
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        contentRoleToBuildings?: IPaginationList<ContentRoleToBuilding>;
        contentRoleToUserCompanies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToFloors?: IPaginationList<ContentRoleToFloor>;
        apiUserToContentRoles?: IPaginationList<ApiUserToContentRole>;
        contentRoleToJupUiTenantOperations?: IPaginationList<ContentRoleToJupUiTenantOperation>;
        userRegistrationTenantRuleToContentRoles?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
    }
    interface JupUserCompanyToJupRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyId: number;
        jupRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompany?: UserCompany;
        jupRole?: JupRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface JupRoleToJupUiView extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiViewId: number;
        jupRoleId: number;
        jupUiView?: JupUiView;
        jupRole?: JupRole;
    }
    interface JupRoleToJupObjectType extends IEntity {
        id: number;
        arCreate?: boolean;
        arRead?: boolean;
        arUpdate?: boolean;
        arDelete?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupObjectTypeId: number;
        jupRoleId: number;
        jupObjectType?: JupObjectType;
        jupRole?: JupRole;
    }
    interface JupRoleToJupUiOption extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiOptionId: number;
        jupRoleId: number;
        jupUiOption?: JupUiOption;
        jupRole?: JupRole;
    }
    interface JupRoleToJupUiOperation extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiOperationId: number;
        jupRoleId: number;
        jupUiOperation?: JupUiOperation;
        jupRole?: JupRole;
    }
    interface ContentRoleToBuilding extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        contentRoleId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        contentRole?: ContentRole;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface ContentRoleToUserCompany extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompany?: UserCompany;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface ContentRoleToFloor extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        contentRoleId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        contentRole?: ContentRole;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PartnerApiCredential extends IEntity {
        id: number;
        label: string;
        code: string;
        host: string;
        clientId: string;
        clientSecret: string;
        enable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface ApiUser extends IEntity {
        id: number;
        clientSecret: string;
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        apiUserToJupRoles?: IPaginationList<ApiUserToJupRole>;
        apiUserToContentRoles?: IPaginationList<ApiUserToContentRole>;
    }
    interface ApiUserToJupRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        apiUserId: number;
        jupRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        apiUser?: ApiUser;
        jupRole?: JupRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface ApiUserToContentRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        apiUserId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        apiUser?: ApiUser;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface JupUiTenantOperation extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        contentRoleToJupUiTenantOperations?: IPaginationList<ContentRoleToJupUiTenantOperation>;
    }
    interface ContentRoleToJupUiTenantOperation extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiTenantOperationId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        jupUiTenantOperation?: JupUiTenantOperation;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface AuthentificationConnection extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userRegistrationTenantRules?: IPaginationList<UserRegistrationTenantRule>;
    }
    interface UserRegistrationTenantRule extends IEntity {
        id: number;
        name?: string;
        domains?: string;
        automaticUserToRoleMapping?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        authentificationConnectionId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        authentificationConnection?: AuthentificationConnection;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        userRegistrationTenantRuleToJupRoles?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        userRegistrationTenantRuleToContentRoles?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
    }
    interface UserRegistrationTenantRuleToJupRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userRegistrationTenantRuleId: number;
        jupRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userRegistrationTenantRule?: UserRegistrationTenantRule;
        jupRole?: JupRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface UserRegistrationTenantRuleToContentRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userRegistrationTenantRuleId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userRegistrationTenantRule?: UserRegistrationTenantRule;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PartnerExportMappingConfiguration extends IEntity {
        id: number;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        partnerExportMappings?: IPaginationList<PartnerExportMapping>;
        partnerExportMappingConfigurationToFloors?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
    }
    interface PartnerExportMapping extends IEntity {
        id: number;
        partnerCode: string;
        label?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        partnerExportMappingConfigurationId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        partnerExportMappingConfiguration?: PartnerExportMappingConfiguration;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        partnerExportMappingToRoomTypes?: IPaginationList<PartnerExportMappingToRoomType>;
    }
    interface PartnerExportMappingToRoomType extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        partnerExportMappingId: number;
        roomTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        partnerExportMapping?: PartnerExportMapping;
        roomType?: RoomType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface PartnerExportMappingConfigurationToFloor extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        partnerExportMappingConfigurationId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        partnerExportMappingConfiguration?: PartnerExportMappingConfiguration;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface JupRoleToJupUiLayout extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiLayoutId: number;
        jupRoleId: number;
        jupUiLayout?: JupUiLayout;
        jupRole?: JupRole;
    }
    interface ItemFact extends IEntity {
        id: number;
        measure?: string;
        value: number;
        voltage?: number;
        time?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        item?: Item;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    interface FeatureFamily extends IEntity {
        id: number;
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        featureGroups?: IPaginationList<FeatureGroup>;
    }
    interface FeatureGroup extends IEntity {
        id: number;
        name?: string;
        sortOrder?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        featureFamilyId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        featureFamily?: FeatureFamily;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        features?: IPaginationList<Feature>;
    }
    interface Feature extends IEntity {
        id: number;
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        featureGroupId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        featureGroup?: FeatureGroup;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    type ObjectTypes = "OccupancyStatus" | "User" | "UserRefreshToken" | "CompanyType" | "Company" | "Campus" | "RoomConnectorType" | "RoomConnector" | "UserCompany" | "PersonGender" | "PersonCompany" | "JupUiLayout" | "BuildingType" | "Organization" | "ItemTypeFamily" | "Manufacturer" | "Object3dModel" | "ItemType" | "Building" | "MapScale" | "Structure" | "StructurePoint" | "Floor" | "DistributionCostType" | "RoomTypeGroup" | "RoomType" | "RoomTypeGroupToRoomType" | "RoomTypeGroupFloor" | "RoomTypeGroupBuilding" | "CostCenter" | "CostCenterBuilding" | "CostCenterFloor" | "Room" | "RoomPoint" | "RoomPointRoom" | "RoomPointSegmentType" | "RoomPointSegment" | "ItemTypePoint" | "DimensionType" | "Dimension" | "DimensionRoom" | "DimensionFloor" | "DimensionBuilding" | "FactType" | "Fact" | "PersonState" | "PersonSecurityProfile" | "Person" | "PersonToPersonType" | "PersonToPerson" | "RoomAffectation" | "WorkplaceType" | "WorkplaceTypeItemType" | "Workplace" | "Item" | "WorkplaceAffectation" | "OrganizationFloor" | "OrganizationBuilding" | "RoomTypeFloor" | "RoomTypeBuilding" | "ItemToPerson" | "PersonToBuilding" | "DimensionToPerson" | "DimensionTypeToBuilding" | "WorkingLocation" | "PersonWorkingLocation" | "PersonToWorkplaceBooking" | "PersonToRoomBooking" | "PersonToDimensionBooking" | "PersonCompanyMission" | "PersonCompanyToItemType" | "PersonCompanyToRoomType" | "PersonCompanyToItem" | "Legend" | "OpenerPostMessageHost" | "CompanyWorkingLocation" | "JupObjectType" | "JupUiView" | "JupRole" | "JupUiOption" | "JupUiOperation" | "ContentRole" | "JupUserCompanyToJupRole" | "JupRoleToJupUiView" | "JupRoleToJupObjectType" | "JupRoleToJupUiOption" | "JupRoleToJupUiOperation" | "ContentRoleToBuilding" | "ContentRoleToUserCompany" | "ContentRoleToFloor" | "PartnerApiCredential" | "ApiUser" | "ApiUserToJupRole" | "ApiUserToContentRole" | "JupUiTenantOperation" | "ContentRoleToJupUiTenantOperation" | "AuthentificationConnection" | "UserRegistrationTenantRule" | "UserRegistrationTenantRuleToJupRole" | "UserRegistrationTenantRuleToContentRole" | "PartnerExportMappingConfiguration" | "PartnerExportMapping" | "PartnerExportMappingToRoomType" | "PartnerExportMappingConfigurationToFloor" | "JupRoleToJupUiLayout" | "ItemFact" | "FeatureFamily" | "FeatureGroup" | "Feature";
    type CamelizedObjectTypes = "occupancyStatus" | "user" | "userRefreshToken" | "companyType" | "company" | "campus" | "roomConnectorType" | "roomConnector" | "userCompany" | "personGender" | "personCompany" | "jupUiLayout" | "buildingType" | "organization" | "itemTypeFamily" | "manufacturer" | "object3dModel" | "itemType" | "building" | "mapScale" | "structure" | "structurePoint" | "floor" | "distributionCostType" | "roomTypeGroup" | "roomType" | "roomTypeGroupToRoomType" | "roomTypeGroupFloor" | "roomTypeGroupBuilding" | "costCenter" | "costCenterBuilding" | "costCenterFloor" | "room" | "roomPoint" | "roomPointRoom" | "roomPointSegmentType" | "roomPointSegment" | "itemTypePoint" | "dimensionType" | "dimension" | "dimensionRoom" | "dimensionFloor" | "dimensionBuilding" | "factType" | "fact" | "personState" | "personSecurityProfile" | "person" | "personToPersonType" | "personToPerson" | "roomAffectation" | "workplaceType" | "workplaceTypeItemType" | "workplace" | "item" | "workplaceAffectation" | "organizationFloor" | "organizationBuilding" | "roomTypeFloor" | "roomTypeBuilding" | "itemToPerson" | "personToBuilding" | "dimensionToPerson" | "dimensionTypeToBuilding" | "workingLocation" | "personWorkingLocation" | "personToWorkplaceBooking" | "personToRoomBooking" | "personToDimensionBooking" | "personCompanyMission" | "personCompanyToItemType" | "personCompanyToRoomType" | "personCompanyToItem" | "legend" | "openerPostMessageHost" | "companyWorkingLocation" | "jupObjectType" | "jupUiView" | "jupRole" | "jupUiOption" | "jupUiOperation" | "contentRole" | "jupUserCompanyToJupRole" | "jupRoleToJupUiView" | "jupRoleToJupObjectType" | "jupRoleToJupUiOption" | "jupRoleToJupUiOperation" | "contentRoleToBuilding" | "contentRoleToUserCompany" | "contentRoleToFloor" | "partnerApiCredential" | "apiUser" | "apiUserToJupRole" | "apiUserToContentRole" | "jupUiTenantOperation" | "contentRoleToJupUiTenantOperation" | "authentificationConnection" | "userRegistrationTenantRule" | "userRegistrationTenantRuleToJupRole" | "userRegistrationTenantRuleToContentRole" | "partnerExportMappingConfiguration" | "partnerExportMapping" | "partnerExportMappingToRoomType" | "partnerExportMappingConfigurationToFloor" | "jupRoleToJupUiLayout" | "itemFact" | "featureFamily" | "featureGroup" | "feature";
    type Types = Surfy.OccupancyStatus | Surfy.User | Surfy.UserRefreshToken | Surfy.CompanyType | Surfy.Company | Surfy.Campus | Surfy.RoomConnectorType | Surfy.RoomConnector | Surfy.UserCompany | Surfy.PersonGender | Surfy.PersonCompany | Surfy.JupUiLayout | Surfy.BuildingType | Surfy.Organization | Surfy.ItemTypeFamily | Surfy.Manufacturer | Surfy.Object3dModel | Surfy.ItemType | Surfy.Building | Surfy.MapScale | Surfy.Structure | Surfy.StructurePoint | Surfy.Floor | Surfy.DistributionCostType | Surfy.RoomTypeGroup | Surfy.RoomType | Surfy.RoomTypeGroupToRoomType | Surfy.RoomTypeGroupFloor | Surfy.RoomTypeGroupBuilding | Surfy.CostCenter | Surfy.CostCenterBuilding | Surfy.CostCenterFloor | Surfy.Room | Surfy.RoomPoint | Surfy.RoomPointRoom | Surfy.RoomPointSegmentType | Surfy.RoomPointSegment | Surfy.ItemTypePoint | Surfy.DimensionType | Surfy.Dimension | Surfy.DimensionRoom | Surfy.DimensionFloor | Surfy.DimensionBuilding | Surfy.FactType | Surfy.Fact | Surfy.PersonState | Surfy.PersonSecurityProfile | Surfy.Person | Surfy.PersonToPersonType | Surfy.PersonToPerson | Surfy.RoomAffectation | Surfy.WorkplaceType | Surfy.WorkplaceTypeItemType | Surfy.Workplace | Surfy.Item | Surfy.WorkplaceAffectation | Surfy.OrganizationFloor | Surfy.OrganizationBuilding | Surfy.RoomTypeFloor | Surfy.RoomTypeBuilding | Surfy.ItemToPerson | Surfy.PersonToBuilding | Surfy.DimensionToPerson | Surfy.DimensionTypeToBuilding | Surfy.WorkingLocation | Surfy.PersonWorkingLocation | Surfy.PersonToWorkplaceBooking | Surfy.PersonToRoomBooking | Surfy.PersonToDimensionBooking | Surfy.PersonCompanyMission | Surfy.PersonCompanyToItemType | Surfy.PersonCompanyToRoomType | Surfy.PersonCompanyToItem | Surfy.Legend | Surfy.OpenerPostMessageHost | Surfy.CompanyWorkingLocation | Surfy.JupObjectType | Surfy.JupUiView | Surfy.JupRole | Surfy.JupUiOption | Surfy.JupUiOperation | Surfy.ContentRole | Surfy.JupUserCompanyToJupRole | Surfy.JupRoleToJupUiView | Surfy.JupRoleToJupObjectType | Surfy.JupRoleToJupUiOption | Surfy.JupRoleToJupUiOperation | Surfy.ContentRoleToBuilding | Surfy.ContentRoleToUserCompany | Surfy.ContentRoleToFloor | Surfy.PartnerApiCredential | Surfy.ApiUser | Surfy.ApiUserToJupRole | Surfy.ApiUserToContentRole | Surfy.JupUiTenantOperation | Surfy.ContentRoleToJupUiTenantOperation | Surfy.AuthentificationConnection | Surfy.UserRegistrationTenantRule | Surfy.UserRegistrationTenantRuleToJupRole | Surfy.UserRegistrationTenantRuleToContentRole | Surfy.PartnerExportMappingConfiguration | Surfy.PartnerExportMapping | Surfy.PartnerExportMappingToRoomType | Surfy.PartnerExportMappingConfigurationToFloor | Surfy.JupRoleToJupUiLayout | Surfy.ItemFact | Surfy.FeatureFamily | Surfy.FeatureGroup | Surfy.Feature;
}

declare type TranslationMethodDataType = Record<string, string | undefined | null | number | ReactNode>;

declare type TranslationMethodType = (key: string, data?: TranslationMethodDataType) => string;

export declare function useFlattenDeterminants(objectTypeName: Surfy.CamelizedObjectTypes): {
    'determinant.defined': string;
    'determinant.undefined': string;
    'determinants.defined': string;
    'determinants.undefined': string;
};

declare type UserCompanyPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'campusCreatedBies' | 'campusUpdatedBies' | 'roomConnectorCreatedBies' | 'roomConnectorUpdatedBies' | 'userId' | 'user' | 'companyId' | 'company' | 'personId' | 'person' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyCreatedBies' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'userCompanyUpdatedBies' | 'personCompanyCreatedBies' | 'personCompanyUpdatedBies' | 'buildingTypeCreatedBies' | 'buildingTypeUpdatedBies' | 'organizationCreatedBies' | 'organizationUpdatedBies' | 'itemTypeFamilyCreatedBies' | 'itemTypeFamilyUpdatedBies' | 'manufacturerCreatedBies' | 'manufacturerUpdatedBies' | 'itemTypeCreatedBies' | 'itemTypeUpdatedBies' | 'buildingOwners' | 'buildingCreatedBies' | 'buildingUpdatedBies' | 'mapScaleCreatedBies' | 'mapScaleUpdatedBies' | 'structureCreatedBies' | 'structureUpdatedBies' | 'structurePointCreatedBies' | 'structurePointUpdatedBies' | 'floorCreatedBies' | 'floorUpdatedBies' | 'distributionCostTypeCreatedBies' | 'distributionCostTypeUpdatedBies' | 'roomTypeCreatedBies' | 'roomTypeUpdatedBies' | 'roomTypeGroupToRoomTypeCreatedBies' | 'roomTypeGroupToRoomTypeUpdatedBies' | 'roomTypeGroupFloorCreatedBies' | 'roomTypeGroupFloorUpdatedBies' | 'roomTypeGroupBuildingCreatedBies' | 'roomTypeGroupBuildingUpdatedBies' | 'costCenterCreatedBies' | 'costCenterUpdatedBies' | 'costCenterBuildingCreatedBies' | 'costCenterBuildingUpdatedBies' | 'costCenterFloorCreatedBies' | 'costCenterFloorUpdatedBies' | 'roomCreatedBies' | 'roomUpdatedBies' | 'roomPointCreatedBies' | 'roomPointUpdatedBies' | 'roomPointRoomCreatedBies' | 'roomPointRoomUpdatedBies' | 'roomPointSegmentCreatedBies' | 'roomPointSegmentUpdatedBies' | 'itemTypePointCreatedBies' | 'itemTypePointUpdatedBies' | 'dimensionTypeCreatedBies' | 'dimensionTypeUpdatedBies' | 'dimensionCreatedBies' | 'dimensionUpdatedBies' | 'dimensionRoomCreatedBies' | 'dimensionRoomUpdatedBies' | 'dimensionFloorCreatedBies' | 'dimensionFloorUpdatedBies' | 'dimensionBuildingCreatedBies' | 'dimensionBuildingUpdatedBies' | 'factTypeCreatedBies' | 'factTypeUpdatedBies' | 'factCreatedBies' | 'factUpdatedBies' | 'personStateCreatedBies' | 'personStateUpdatedBies' | 'personSecurityProfileCreatedBies' | 'personSecurityProfileUpdatedBies' | 'personCreatedBies' | 'personUpdatedBies' | 'personToPersonTypeCreatedBies' | 'personToPersonTypeUpdatedBies' | 'personToPersonCreatedBies' | 'personToPersonUpdatedBies' | 'roomAffectationCreatedBies' | 'roomAffectationUpdatedBies' | 'workplaceTypeCreatedBies' | 'workplaceTypeUpdatedBies' | 'workplaceTypeItemTypeCreatedBies' | 'workplaceTypeItemTypeUpdatedBies' | 'workplaceCreatedBies' | 'workplaceUpdatedBies' | 'itemCreatedBies' | 'itemUpdatedBies' | 'workplaceAffectationCreatedBies' | 'workplaceAffectationUpdatedBies' | 'organizationFloorCreatedBies' | 'organizationFloorUpdatedBies' | 'organizationBuildingCreatedBies' | 'organizationBuildingUpdatedBies' | 'roomTypeFloorCreatedBies' | 'roomTypeFloorUpdatedBies' | 'roomTypeBuildingCreatedBies' | 'roomTypeBuildingUpdatedBies' | 'itemToPersonCreatedBies' | 'itemToPersonUpdatedBies' | 'personToBuildingCreatedBies' | 'personToBuildingUpdatedBies' | 'dimensionToPersonCreatedBies' | 'dimensionToPersonUpdatedBies' | 'dimensionTypeToBuildingCreatedBies' | 'dimensionTypeToBuildingUpdatedBies' | 'personWorkingLocationCreatedBies' | 'personWorkingLocationUpdatedBies' | 'personToWorkplaceBookingCreatedBies' | 'personToWorkplaceBookingUpdatedBies' | 'personToRoomBookingCreatedBies' | 'personToRoomBookingUpdatedBies' | 'personToDimensionBookingCreatedBies' | 'personToDimensionBookingUpdatedBies' | 'personCompanyToItemTypeCreatedBies' | 'personCompanyToItemTypeUpdatedBies' | 'personCompanyToRoomTypeCreatedBies' | 'personCompanyToRoomTypeUpdatedBies' | 'personCompanyToItemCreatedBies' | 'personCompanyToItemUpdatedBies' | 'legendCreatedBies' | 'legendUpdatedBies' | 'openerPostMessageHostCreatedBies' | 'openerPostMessageHostUpdatedBies' | 'companyWorkingLocationCreatedBies' | 'companyWorkingLocationUpdatedBies' | 'contentRoleCreatedBies' | 'contentRoleUpdatedBies' | 'jupUserCompanyToJupRoles' | 'jupUserCompanyToJupRoleCreatedBies' | 'jupUserCompanyToJupRoleUpdatedBies' | 'contentRoleToBuildingCreatedBies' | 'contentRoleToBuildingUpdatedBies' | 'contentRoleToUserCompanies' | 'contentRoleToUserCompanyCreatedBies' | 'contentRoleToUserCompanyUpdatedBies' | 'contentRoleToFloorCreatedBies' | 'contentRoleToFloorUpdatedBies' | 'partnerApiCredentialCreatedBies' | 'partnerApiCredentialUpdatedBies' | 'apiUserCreatedBies' | 'apiUserUpdatedBies' | 'apiUserToJupRoleCreatedBies' | 'apiUserToJupRoleUpdatedBies' | 'apiUserToContentRoleCreatedBies' | 'apiUserToContentRoleUpdatedBies' | 'jupUiTenantOperationCreatedBies' | 'jupUiTenantOperationUpdatedBies' | 'contentRoleToJupUiTenantOperationCreatedBies' | 'contentRoleToJupUiTenantOperationUpdatedBies' | 'userRegistrationTenantRuleCreatedBies' | 'userRegistrationTenantRuleUpdatedBies' | 'userRegistrationTenantRuleToJupRoleCreatedBies' | 'userRegistrationTenantRuleToJupRoleUpdatedBies' | 'userRegistrationTenantRuleToContentRoleCreatedBies' | 'userRegistrationTenantRuleToContentRoleUpdatedBies' | 'partnerExportMappingConfigurationCreatedBies' | 'partnerExportMappingConfigurationUpdatedBies' | 'partnerExportMappingCreatedBies' | 'partnerExportMappingUpdatedBies' | 'partnerExportMappingToRoomTypeCreatedBies' | 'partnerExportMappingToRoomTypeUpdatedBies' | 'partnerExportMappingConfigurationToFloorCreatedBies' | 'partnerExportMappingConfigurationToFloorUpdatedBies' | 'itemFactCreatedBies' | 'itemFactUpdatedBies' | 'featureFamilyCreatedBies' | 'featureFamilyUpdatedBies' | 'featureGroupCreatedBies' | 'featureGroupUpdatedBies' | 'featureCreatedBies' | 'featureUpdatedBies';

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

export declare const versionCookieKeyName = "x-version";

export declare type VisibleCamelizedObjectTypeNames = "occupancyStatus" | "user" | "companyType" | "company" | "campus" | "roomConnectorType" | "roomConnector" | "userCompany" | "personGender" | "personCompany" | "jupUiLayout" | "buildingType" | "organization" | "itemTypeFamily" | "manufacturer" | "object3dModel" | "itemType" | "building" | "mapScale" | "structure" | "structurePoint" | "floor" | "distributionCostType" | "roomTypeGroup" | "roomType" | "roomTypeGroupToRoomType" | "roomTypeGroupFloor" | "roomTypeGroupBuilding" | "costCenter" | "costCenterBuilding" | "costCenterFloor" | "room" | "roomPoint" | "roomPointRoom" | "roomPointSegmentType" | "roomPointSegment" | "itemTypePoint" | "dimensionType" | "dimension" | "dimensionRoom" | "dimensionFloor" | "dimensionBuilding" | "factType" | "fact" | "personState" | "personSecurityProfile" | "person" | "personToPersonType" | "personToPerson" | "roomAffectation" | "workplaceType" | "workplaceTypeItemType" | "workplace" | "item" | "workplaceAffectation" | "organizationFloor" | "organizationBuilding" | "roomTypeFloor" | "roomTypeBuilding" | "itemToPerson" | "personToBuilding" | "dimensionToPerson" | "dimensionTypeToBuilding" | "workingLocation" | "personWorkingLocation" | "personToWorkplaceBooking" | "personToRoomBooking" | "personToDimensionBooking" | "personCompanyMission" | "personCompanyToItemType" | "personCompanyToRoomType" | "personCompanyToItem" | "legend" | "openerPostMessageHost" | "companyWorkingLocation" | "jupObjectType" | "jupUiView" | "jupRole" | "jupUiOption" | "jupUiOperation" | "contentRole" | "jupUserCompanyToJupRole" | "jupRoleToJupUiView" | "jupRoleToJupObjectType" | "jupRoleToJupUiOption" | "jupRoleToJupUiOperation" | "contentRoleToBuilding" | "contentRoleToUserCompany" | "contentRoleToFloor" | "partnerApiCredential" | "apiUser" | "apiUserToJupRole" | "apiUserToContentRole" | "jupUiTenantOperation" | "contentRoleToJupUiTenantOperation" | "authentificationConnection" | "userRegistrationTenantRule" | "userRegistrationTenantRuleToJupRole" | "userRegistrationTenantRuleToContentRole" | "partnerExportMappingConfiguration" | "partnerExportMapping" | "partnerExportMappingToRoomType" | "partnerExportMappingConfigurationToFloor" | "jupRoleToJupUiLayout" | "itemFact" | "featureFamily" | "featureGroup" | "feature";

declare type WorkingLocationPropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'personWorkingLocations' | 'companyWorkingLocations';

declare type WorkingLocationPropertyTypeRecord = Record<WorkingLocationPropertyNames, IPropertyTypeDefinition>;

declare type WorkplaceAffectationPropertyNames = 'id' | 'rate' | 'calculatedRate' | 'mondayRate' | 'tuesdayRate' | 'wednesdayRate' | 'thursdayRate' | 'fridayRate' | 'saturdayRate' | 'sundayRate' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'workplaceId' | 'workplace' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type WorkplaceAffectationPropertyTypeRecord = Record<WorkplaceAffectationPropertyNames, IPropertyTypeDefinition>;

declare type WorkplacePropertyNames = 'id' | 'position' | 'rotation' | 'isFlex' | 'isTransit' | 'isShared' | 'textAnchor' | 'name' | 'workplaceAffectationsCalculatedRateSum' | 'workplaceAffectationsCount' | 'comment' | 'isBookable' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'workplaceType' | 'roomId' | 'room' | 'organizationId' | 'organization' | 'costCenterId' | 'costCenter' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'items' | 'workplaceAffectations' | 'personToWorkplaceBookings' | 'companyId' | 'company';

declare type WorkplacePropertyTypeRecord = Record<WorkplacePropertyNames, IPropertyTypeDefinition>;

declare type WorkplaceTypeItemTypePropertyNames = 'id' | 'position' | 'physicalInventory' | 'rotation' | 'zIndex' | 'seatsCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'workplaceType' | 'itemTypeId' | 'itemType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company';

declare type WorkplaceTypeItemTypePropertyTypeRecord = Record<WorkplaceTypeItemTypePropertyNames, IPropertyTypeDefinition>;

declare type WorkplaceTypePropertyNames = 'id' | 'name' | 'zIndex' | 'color' | 'center' | 'size' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'workplaceTypeItemTypes' | 'workplaces' | 'companyId' | 'company';

declare type WorkplaceTypePropertyTypeRecord = Record<WorkplaceTypePropertyNames, IPropertyTypeDefinition>;

export { }
