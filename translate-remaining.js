const fs = require('fs');

// Traductions spécifiques pour les termes restants
const translations = {
    'Les Etages': 'Floors',
    'Les Espaces': 'Spaces',
    'Les Structures': 'Structures',
    'Les Portes et Passages': 'Doors and Passages',
    'Les Espaces de réunion': 'Meeting Rooms',
    'Les Familles de mobilier': 'Furniture Families',
    'Les Types d\'objet': 'Object Types',
    'Les Types d\'objet à l\'échelle': 'Scale Object Types',
    'Les Types d\'objet Icône': 'Icon Object Types',
    'Les Types de poste de travail': 'Workstation Types',
    'Les Objets': 'Objects',
    'Les Postes de travail': 'Workstations',
    'Les Personnes': 'People',
    'Les personnes dans Surfy': 'People in Surfy',
    'Les Relations': 'Relationships',
    'Les relations aux personnes dans Surfy': 'Relationships with people in Surfy',
    'Les Profils Sécurité': 'Security Profiles',
    'Les profils Sécurité dans Surfy': 'Security profiles in Surfy',
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
    'Les Cours': 'Courses',
    'Tout sur les plans': 'Everything about plans',
    'Le mode Lecteur': 'Reader mode',
    'Rechercher dans Surfy': 'Search in Surfy',
    'Digitaliser les espaces': 'Digitize spaces',
    'L\'occupation des locaux': 'Space occupancy',
    'La gestion des coûts': 'Cost management',
    'L\'environnement et la sécurité': 'Environment and security',

    // Descriptions
    'Tout comprendre sur les étages': 'Everything about floors',
    'Tout comprendre sur les espaces dans Surfy': 'Everything about spaces in Surfy',
    'Tout savoir sur la structure de l\'étage': 'Everything about floor structure',
    'Tout comprendre sur les portes et les passages dans Surfy': 'Everything about doors and passages in Surfy',
    'Gérer et visualiser les Espaces de réunion': 'Manage and visualize Meeting Rooms',
    'Tout comprendre sur l\'itinéraire point à point': 'Everything about point-to-point routing',
    'Tout savoir sur les familles de type d\'objet': 'Everything about object type families',
    'Tout savoir sur les types d\'objet': 'Everything about object types',
    'Tout savoir sur le type d\'objet à l\'échelle': 'Everything about scale object types',
    'Tout savoir sur le type d\'objet Icône': 'Everything about icon object types',
    'Tout savoir sur le Type de poste de travail': 'Everything about workstation types',
    'Tout savoir sur la gestion des objets': 'Everything about object management',
    'Tout savoir sur la gestion des postes de travail': 'Everything about workstation management',
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
    'Gérer la responsabilité sociale et environnementale de l\'entreprise': 'Manage corporate social and environmental responsibility'
};

function translateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        for (const [french, english] of Object.entries(translations)) {
            const regex = new RegExp(`"message": "${french.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
            if (content.includes(`"message": "${french}"`)) {
                content = content.replace(regex, `"message": "${english}"`);
                modified = true;
                console.log(`Translated: "${french}" -> "${english}"`);
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated file: ${filePath}`);
        } else {
            console.log(`No translations needed for: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Traduire le fichier principal
const mainFile = 'i18n/en/docusaurus-plugin-content-docs/current.json';
console.log('Translating main JSON file...');
translateFile(mainFile);

console.log('Translation complete!');
