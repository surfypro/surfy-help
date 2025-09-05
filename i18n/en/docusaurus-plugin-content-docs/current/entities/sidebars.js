/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  entities: [
    {
      type: 'category',
      label: 'People & Organizations',
      items: [
        'things/things-type/person',
        'things/things-type/organization',
      ],
    },
    {
      type: 'category',
      label: 'Spaces & Buildings',
      items: [
        'things/things-type/building',
        'things/things-type/room',
        'things/things-type/room-type',
        'things/things-type/floor',
        'things/things-type/campus',
        'things/things-type/structure',
      ],
    },
    {
      type: 'category',
      label: 'Objects & Furniture',
      items: [
        'things/things-type/item-type',
        'things/things-type/item',
        'things/things-type/workplace',
        'things/things-type/workplace-type',
        'things/things-type/item-type-family',
      ],
    },
    {
      type: 'category',
      label: 'Assignments & Relationships',
      items: [
        'things/things-type/workplace-affectation',
        'things/things-type/room-affectation',
        'things/things-type/dimension-to-person',
        'things/things-type/person-to-building',
      ],
    },
    {
      type: 'category',
      label: 'Management & Analysis',
      items: [
        'things/things-type/cost-center',
        'things/things-type/dimension-type',
        'things/things-type/dimension-type-to-building',
      ],
    },
  ],
};

module.exports = sidebars;
