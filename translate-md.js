const fs = require('fs');
const path = require('path');

// Dictionnaire de traductions pour les fichiers .md
const translations = {
  // Titres principaux
  '# Documentation': '# Documentation',
  '# A propos des tutoriels': '# About tutorials',
  '# Introduction aux cours': '# Introduction to courses',
  '# Se connecter': '# Connect',
  '# Les Tutoriels': '# Tutorials',
  '# Les Cours': '# Courses',
  '# Les Certifications': '# Certifications',
  
  // Phrases courantes
  'Pour vous accompagner dans la maîtrise de Surfy et répondre à vos objectifs, notre documentation est à votre disposition :': 'To help you master Surfy and meet your objectives, our documentation is at your disposal:',
  'Besoin d\'un petit coup de pouce ? Nos tutoriels vous guideront dans la prise en main des fonctionnalités de Surfy.': 'Need a little help? Our tutorials will guide you through getting started with Surfy\'s features.',
  'Les cours Surfy sont composés de suites logiques de tutoriels permettant de guider l\'utilisateur dans l\'apprentissage d\'un sujet complet en l\'accompagnant au mieux dans les différentes étapes de son projet.': 'Surfy courses are composed of logical sequences of tutorials allowing to guide the user in learning a complete subject by accompanying them as best as possible in the different stages of their project.',
  'D\'autres cours peuvent être disponibles sur demande, [nous contacter](https://www.surfy.pro/contact)': 'Other courses may be available on request, [contact us](https://www.surfy.pro/contact)',
  
  // Liens et descriptions
  'Les aides pour [Se connecter](/docs/access/intro.md) à la plateforme.': 'Help for [Connecting](/en/docs/access/intro.md) to the platform.',
  'Vous désirez accéder à Surfy ? On vous dit tout sur l\'inscription de votre entreprise et la possibilité de vous connecter à sa plateforme.': 'Want to access Surfy? We tell you everything about registering your company and the possibility of connecting to its platform.',
  '[Surfy, pour les fonctions Support](/docs/userprofile/fmsupport.md)': '[Surfy, for Support functions](/en/docs/userprofile/fmsupport.md)',
  'En fonction de votre métier et de votre rôle dans l\'entreprise, accédez directement aux tutoriels adaptés.': 'Depending on your profession and role in the company, access directly to the appropriate tutorials.',
  '[Les Tutoriels](/docs/tutorials/intro.md) pour comprendre et utiliser les fontionnalités.': '[Tutorials](/en/docs/tutorials/intro.md) to understand and use the features.',
  'Vous avez une question sur une fonctionnalité dans Surfy ? Trouvez la réponse dans nos tutoriels !': 'Have a question about a feature in Surfy? Find the answer in our tutorials!',
  '[Les Cours](/docs/courses/intro.md) pour vous former aux concepts de façon structurée.': '[Courses](/en/docs/courses/intro.md) to train you on concepts in a structured way.',
  'Vous désirez maîtriser un processus complet avec Surfy ? Nos cours vous guident dans l\'enchainement des fonctionnalités pour arriver au but !': 'Want to master a complete process with Surfy? Our courses guide you through the sequence of features to achieve your goal!',
  '[Les Certifications](/docs/certifications/list) pour valider officiellement vos acquis.': '[Certifications](/en/docs/certifications/list) to officially validate your skills.',
  'Besoin de valoriser vos acquis Surfy ? Nos certifications vous offrent une ligne supplémentaire sur votre CV !': 'Need to showcase your Surfy skills? Our certifications give you an additional line on your CV!',
  
  // Sections
  'A gauche de l\'écran, l\'arborescence des fonctionnalités': 'On the left side of the screen, the feature tree',
  'A droite de l\'écran, la recherche par mots clés et les chapitres de la page active': 'On the right side of the screen, keyword search and active page chapters',
  '## Les Surfaces dans Surfy': '## Surfaces in Surfy',
  '## Les Personnes dans Surfy': '## People in Surfy',
  '## Le Mobilier dans Surfy': '## Furniture in Surfy',
  '## Surfy Plus +': '## Surfy Plus +',
  
  // Descriptions de sections
  'Pour utiliser Surfy j\'ai besoin de plans statiques en 2D qui serviront de fond de plan à chaque étage pour la construction de mes espaces.': 'To use Surfy I need static 2D plans that will serve as background plans for each floor for building my spaces.',
  'Dans Surfy je crée un bâtiment puis un étage avec son fond de plan et son échelle afin de pouvoir dessiner et qualifier les espaces.': 'In Surfy I create a building then a floor with its background plan and scale so I can draw and qualify spaces.',
  'La liste des occupants avec les renseignements complémentaires peut être intégrée dans Surfy à partir d\'un fichier Excel ou manuellement au fil de l\'arrivée des collaborateurs.': 'The list of occupants with additional information can be integrated into Surfy from an Excel file or manually as collaborators arrive.',
  'Créer et dupliquer du Mobilier dans Surfy, à l\'échelle ou sous forme d\'icônes, à partir de la bibliothèque d\'objets ou en créant ses propres types d\'objets ou types de Postes de travail.': 'Create and duplicate Furniture in Surfy, to scale or as icons, from the object library or by creating your own object types or Workstation types.',
  'Nous avons pensé à vous faciliter la tâche dans la recherche de vos informations dans Surfy:': 'We have thought about making it easier for you to find your information in Surfy:',
  
  // Actions
  'Ajout d\'un nouvel utilisateur de votre plateforme, Filtre des listes, recherche d\'une personne ou d\'une référence, fichiers Excel de vos données, calcul de votre prestation de nettoyage, trouvez rapidement ce que vous cherchez !': 'Adding a new user to your platform, Filtering lists, searching for a person or reference, Excel files of your data, calculating your cleaning service, quickly find what you\'re looking for!'
};

function translateMarkdownFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Traduire les phrases complètes d'abord
    for (const [french, english] of Object.entries(translations)) {
      if (content.includes(french)) {
        content = content.replace(new RegExp(french.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), english);
        modified = true;
        console.log(`Translated: "${french}" -> "${english}"`);
      }
    }
    
    // Traduire les liens /docs/ vers /en/docs/
    const linkRegex = /\]\(\/docs\//g;
    if (linkRegex.test(content)) {
      content = content.replace(linkRegex, '](/en/docs/');
      modified = true;
      console.log(`Updated links in: ${filePath}`);
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

// Traduire tous les fichiers .md dans i18n/en
const i18nPath = path.join(__dirname, 'i18n', 'en');

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      processDirectory(itemPath);
    } else if (item.endsWith('.md')) {
      translateMarkdownFile(itemPath);
    }
  }
}

console.log('Starting translation of Markdown files in i18n/en...');
processDirectory(i18nPath);
console.log('Translation complete!');
