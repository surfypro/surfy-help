const fs = require('fs');
const path = require('path');

// Dictionnaire de traductions
const translations = {
    // Catégories principales
    'Les Tutoriels': 'Tutorials',
    'Les Cours': 'Courses',
    'Les Certifications': 'Certifications',
    'Les Surfaces': 'Surfaces',
    'Les Campus': 'Campuses',
    'Les Bâtiments': 'Buildings',
    'Les Etages': 'Floors',
    'Les Espaces': 'Spaces',
    'Le Fond de plan': 'Background',
    'L\'Echelle': 'Scale',
    'Les Structures': 'Structures',
    'Les Portes et Passages': 'Doors and Passages',
    'Les Espaces de réunion': 'Meeting Rooms',
    'L\'Itinéraire point à point': 'Point-to-Point Route',
    'Le Mobilier': 'Furniture',
    'Les Familles de mobilier': 'Furniture Families',
    'Les Types d\'objet': 'Object Types',
    'Les Types d\'objet à l\'échelle': 'Scale Object Types',
    'Les Types d\'objet Icône': 'Icon Object Types',
    'Les Types de poste de travail': 'Workstation Types',
    'Les Objets': 'Objects',
    'Les Postes de travail': 'Workstations',
    'Les Personnes': 'People',
    'Les Relations': 'Relationships',
    'Les Profils Sécurité': 'Security Profiles',
    'Les Organisations': 'Organizations',
    'Les Affectations': 'Assignments',
    'Affectations aux postes de travail': 'Workstation Assignments',
    'Affectations aux espaces': 'Space Assignments',
    'Affectations aux quartiers': 'District Assignments',
    'Affectations aux bâtiments': 'Building Assignments',
    'Les Calques d\'analyse': 'Analysis Layers',
    'Les Calques d\'affectation': 'Assignment Layers',
    'Les Centres de coût': 'Cost Centers',
    'La Refacturation des espaces': 'Space Billing',
    'Les Données du bâtiment': 'Building Data',
    'Le tableau de bord du bâtiment': 'Building Dashboard',
    'La Réservation': 'Booking',
    'Surfy avec Teams': 'Surfy with Teams',

    // Descriptions
    'Les tutoriels accompagnent l\'utilisateur dans l\'apprentissage d\'une fonctionnalité.': 'Tutorials guide users through learning a feature.',
    'Les Surfaces dans Surfy': 'Surfaces in Surfy',
    '5 minutes pour comprendre les Campus': '5 minutes to understand Campuses',
    '5 minutes pour comprendre les bâtiments': '5 minutes to understand buildings',
    'Tout comprendre sur les étages': 'Everything about floors',
    'Tout comprendre sur les espaces dans Surfy': 'Everything about spaces in Surfy',
    'Tout savoir sur le fond de plan': 'Everything about the background',
    'Tout comprendre sur l\'échelle des plans': 'Everything about plan scale',
    'Tout savoir sur la structure de l\'étage': 'Everything about floor structure',
    'Tout comprendre sur les portes et les passages dans Surfy': 'Everything about doors and passages in Surfy',
    'Gérer et visualiser les Espaces de réunion': 'Manage and visualize Meeting Rooms',
    'Tout comprendre sur l\'itinéraire point à point': 'Everything about point-to-point routing',
    'Tout savoir sur le mobilier': 'Everything about furniture',
    'Tout savoir sur les familles de type d\'objet': 'Everything about object type families',
    'Tout savoir sur les types d\'objet': 'Everything about object types',
    'Tout savoir sur le type d\'objet à l\'échelle': 'Everything about scale object types',
    'Tout savoir sur le type d\'objet Icône': 'Everything about icon object types',
    'Tout savoir sur le Type de poste de travail': 'Everything about workstation types',
    'Tout savoir sur la gestion des objets': 'Everything about object management',
    'Tout savoir sur la gestion des postes de travail': 'Everything about workstation management',
    'Les personnes dans Surfy': 'People in Surfy',
    'Les relations aux personnes dans Surfy': 'Relationships with people in Surfy',
    'Les profils Sécurité dans Surfy': 'Security profiles in Surfy',
    'Les organisations dans Surfy': 'Organizations in Surfy',
    'Tout savoir sur les affectations': 'Everything about assignments',
    'Les affectations aux postes de travail': 'Workstation assignments',
    'Les affectations aux espaces': 'Space assignments',
    'Les affectations aux quartiers': 'District assignments',
    'Les affectations aux bâtiments': 'Building assignments',
    'Tout savoir sur les calques d\'analyse': 'Everything about analysis layers',
    'Tout savoir sur les calques d\'affectation': 'Everything about assignment layers',
    'Les centres de coût dans Surfy': 'Cost centers in Surfy',
    'La refacturation par centre de coût dans Surfy': 'Billing by cost center in Surfy',
    'Les données du bâtiment dans Surfy': 'Building data in Surfy',
    'Tout savoir sur le tableau de bord du bâtiment': 'Everything about the building dashboard',
    'Tout savoir sur le planning de réservation de Surfy': 'Everything about Surfy booking planning',
    'Tout savoir sur l\'application Teams de Surfy': 'Everything about Surfy Teams application',
    'Nos cours sont composés de suites de tutoriels': 'Our courses are composed of tutorial sequences',
    'Tout savoir sur la visualisation des plans en 2D et 3D': 'Everything about 2D and 3D plan visualization',
    'Les fonctionnalités du mode Lecteur': 'Reader mode features',
    'Tout savoir sur la recherche d\'éléments dans Surfy': 'Everything about searching elements in Surfy',
    'Tout savoir sur la digitalisation d\'un bâtiment': 'Everything about building digitization',
    'Les étapes pour gérer l\'occupation d\'un bâtiment': 'Steps to manage building occupancy',
    'Les étapes pour gérer les coûts': 'Steps to manage costs',
    'Gérer la responsabilité sociale et environnementale de l\'entreprise': 'Manage corporate social and environmental responsibility',

    // Autres termes
    'Comment se connecter à Surfy avec Google, Microsoft ou Surfy': 'How to connect to Surfy with Google, Microsoft or Surfy',
    'Se connecter': 'Connect'
};

function translateJsonFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);

        let modified = false;

        function translateObject(obj) {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    translateObject(obj[key]);
                } else if (typeof obj[key] === 'string' && obj[key].message) {
                    const originalMessage = obj[key].message;
                    if (translations[originalMessage]) {
                        obj[key].message = translations[originalMessage];
                        modified = true;
                        console.log(`Translated: "${originalMessage}" -> "${translations[originalMessage]}"`);
                    }
                }
            }
        }

        translateObject(data);

        if (modified) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
            console.log(`Updated file: ${filePath}`);
        } else {
            console.log(`No translations needed for: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Traduire tous les fichiers JSON dans i18n/en
const i18nPath = path.join(__dirname, 'i18n', 'en');

function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            processDirectory(itemPath);
        } else if (item.endsWith('.json')) {
            translateJsonFile(itemPath);
        }
    }
}

console.log('Starting translation of JSON files in i18n/en...');
processDirectory(i18nPath);
console.log('Translation complete!');
