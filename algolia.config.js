module.exports = {
  // Configuration du ranking Algolia
  ranking: [
    'typo',
    'geo', 
    'words',
    'filters',
    'proximity',
    'attribute',
    'exact',
    'custom'
  ],
  
  // Attributs personnalisés pour le ranking
  customRanking: [
    'desc(search_rank)',
    'desc(popularity)', 
    'desc(date)',
    'desc(click_count)'
  ],
  
  // Règles de ranking personnalisées
  rules: [
    {
      objectID: 'rule_1',
      description: 'Réduire la priorité des pages avec peu de trafic',
      conditions: [
        {
          pattern: '{search_rank} < 0.5',
          anchoring: 'is'
        }
      ],
      consequence: {
        params: {
          ranking: [
            'typo',
            'geo',
            'words', 
            'filters',
            'proximity',
            'attribute',
            'exact',
            'custom'
          ]
        }
      }
    }
  ],
  
  // Configuration des facettes pour le filtrage
  attributesForFaceting: [
    'searchable(search_rank)',
    'searchable(popularity)',
    'searchable(category)',
    'searchable(tags)'
  ]
};
