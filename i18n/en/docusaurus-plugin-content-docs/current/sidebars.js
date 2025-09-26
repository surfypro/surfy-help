/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorial: [
    {
      type: 'doc',
      id: 'intro',
      label: 'About tutorials',
    },
    {
      type: 'category',
      label: 'People',
      link: {
        type: 'doc',
        id: 'person/intro',
      },
      items: [
        'person/create',
        'person/edit',
        'person/delete',
      ],
    },
    {
      type: 'category',
      label: 'Organizations',
      link: {
        type: 'doc',
        id: 'organization/intro',
      },
      items: [
        'organization/create',
        'organization/edit',
        'organization/delete',
      ],
    },
    {
      type: 'category',
      label: 'Surfaces',
      items: [
        {
          type: 'category',
          label: 'Buildings',
          items: [
            'surfaces/building/create',
            'surfaces/building/edit',
            'surfaces/building/delete',
          ],
        },
        {
          type: 'category',
          label: 'Floors',
          items: [
            'surfaces/floor/create',
            'surfaces/floor/edit',
            'surfaces/floor/delete',
          ],
        },
        {
          type: 'category',
          label: 'Rooms',
          items: [
            'surfaces/room/create',
            'surfaces/room/edit',
            'surfaces/room/delete',
            'surfaces/room/roomtype',
          ],
        },
        {
          type: 'category',
          label: 'Campuses',
          items: [
            'surfaces/campus/create',
            'surfaces/campus/edit',
            'surfaces/campus/delete',
          ],
        },
        {
          type: 'category',
          label: 'Structures',
          items: [
            'surfaces/structure/create',
            'surfaces/structure/edit',
            'surfaces/structure/delete',
          ],
        },
        {
          type: 'category',
          label: 'Map Scales',
          items: [
            'surfaces/mapscale/create',
            'surfaces/mapscale/edit',
            'surfaces/mapscale/delete',
          ],
        },
        'surfaces/doors/create',
        'surfaces/background/create',
      ],
    },
    {
      type: 'category',
      label: 'Objects & Furniture',
      items: [
        {
          type: 'category',
          label: 'Object Types',
          items: [
            'objects/itemtype/intro',
            {
              type: 'category',
              label: 'Scaled Object Types',
              items: [
                'objects/itemtype/types-d-objet-a-l-echelle/create',
                'objects/itemtype/types-d-objet-a-l-echelle/edit',
                'objects/itemtype/types-d-objet-a-l-echelle/delete',
              ],
            },
            {
              type: 'category',
              label: 'Icon Object Types',
              items: [
                'objects/itemtype/types-d-objet-icone/create',
                'objects/itemtype/types-d-objet-icone/edit',
                'objects/itemtype/types-d-objet-icone/delete',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Object Families',
          items: [
            'objects/family/create',
            'objects/family/edit',
            'objects/family/delete',
          ],
        },
        {
          type: 'category',
          label: 'Objects',
          items: [
            'objects/item/create',
            'objects/item/edit',
            'objects/item/delete',
          ],
        },
        {
          type: 'category',
          label: 'Workplaces',
          items: [
            'objects/workplace/create',
            'objects/workplace/edit',
            'objects/workplace/delete',
          ],
        },
        {
          type: 'category',
          label: 'Workplace Types',
          items: [
            'objects/workplacetype/create',
            'objects/workplacetype/edit',
            'objects/workplacetype/delete',
          ],
        },
        'objects/inventory/inventory',
      ],
    },
    {
      type: 'category',
      label: 'Assignments',
      items: [
        {
          type: 'category',
          label: 'Workplace Assignments',
          items: [
            'affectations/workplaceaffectation/create',
            'affectations/workplaceaffectation/edit',
            'affectations/workplaceaffectation/delete',
          ],
        },
        {
          type: 'category',
          label: 'Room Assignments',
          items: [
            'affectations/roomaffectation/create',
            'affectations/roomaffectation/edit',
            'affectations/roomaffectation/delete',
          ],
        },
        {
          type: 'category',
          label: 'Dimension to Person',
          items: [
            'affectations/dimensionToPerson/create',
            'affectations/dimensionToPerson/edit',
            'affectations/dimensionToPerson/delete',
          ],
        },
        {
          type: 'category',
          label: 'Person to Building',
          items: [
            'affectations/persontobuilding/create',
            'affectations/persontobuilding/edit',
            'affectations/persontobuilding/delete',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Booking',
      items: [
        'booking/workplace',
        'booking/teams',
      ],
    },
    {
      type: 'category',
      label: 'Building Data',
      items: [
        'BuildingData/Buildingdashboard/Buildingreporting',
        'BuildingData/Buildingdashboard/Buildinggraph',
      ],
    },
    {
      type: 'category',
      label: 'Cost Centers',
      items: [
        'costcenter/create',
        'costcenter/edit',
        'costcenter/delete',
      ],
    },
    {
      type: 'category',
      label: 'Analysis Layers',
      items: [
        'cost-distribution-by-cost-center/create',
        'cost-distribution-by-cost-center/edit',
      ],
    },
    {
      type: 'category',
      label: 'Dimension Types',
      items: [
        'dimensionType/create',
        'dimensionType/edit',
        'dimensionType/delete',
        'dimensionTypeToBuilding/create',
        'dimensionTypeToBuilding/edit',
        'dimensionTypeToBuilding/delete',
      ],
    },
  ],
};

module.exports = sidebars;
