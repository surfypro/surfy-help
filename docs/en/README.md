# Surfy Help - English Version

This directory contains the complete English version of the Surfy Help documentation, built with Docusaurus.

## 🏗️ Structure

```
docs-en/
├── docusaurus.config.js    # Docusaurus configuration
├── sidebars.js             # Tutorial navigation structure
├── entities/
│   ├── sidebars.js         # Entity documentation navigation
│   └── things/things-type/ # Entity type definitions
├── tutorials/              # Tutorial documentation
│   ├── intro.en.md
│   ├── person/
│   ├── organization/
│   ├── surfaces/
│   ├── objects/
│   ├── affectations/
│   └── ...
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
cd docs-en
npm install
```

### Development Server
```bash
npm start
```
The site will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📚 Content Organization

### Tutorials
- **People Management** - Creating, editing, and managing people
- **Organizations** - Managing organizational structures
- **Surfaces** - Building, floor, and room management
- **Objects & Furniture** - Managing furniture and equipment
- **Assignments** - Assigning people to spaces and objects
- **Booking** - Managing reservations and schedules
- **Building Data** - Analytics and reporting
- **Cost Centers** - Financial management
- **Analysis Layers** - Data visualization and analysis
- **Dimension Types** - Custom categorization and analysis

### Entities
- **People & Organizations** - Person and organization definitions
- **Spaces & Buildings** - Building, room, and space definitions
- **Objects & Furniture** - Furniture and equipment definitions
- **Assignments & Relationships** - Assignment and relationship definitions
- **Management & Analysis** - Management and analysis entities

## 🌐 Features

- **Complete English Translation** - All content translated from French
- **Entity Documentation** - Comprehensive entity property documentation
- **Interactive Navigation** - Organized sidebar navigation
- **Search Functionality** - Full-text search across all content
- **Responsive Design** - Mobile-friendly interface
- **Dark/Light Theme** - User preference support

## 🔗 Integration

This English site is designed to work alongside the French version:
- **Base URL**: `/en/` (vs `/` for French)
- **Shared Assets** - Images, logos, and styling
- **Consistent Navigation** - Same structure, different language
- **Entity Tags** - All Cursor entity tags preserved

## 📝 Translation Guidelines

### Preserved Elements
- All Cursor entity tags (`<P code="entity:property" />`)
- YouTube video codes (`<Youtube code="..."/>`)
- Internal links and navigation
- Markdown structure and formatting
- Frontmatter metadata

### Translation Conventions
- **Person** → **Person** (not "People" for entity)
- **Organisation** → **Organization**
- **Espace** → **Space**
- **Bâtiment** → **Building**
- **Étage** → **Floor**
- **Mobilier** → **Furniture** or **Objects**
- **Poste de travail** → **Workstation**
- **Affectation** → **Assignment**
- **Typologie** → **Typology**

## 🚀 Deployment

The site can be deployed to:
- **GitHub Pages** - Using the `npm run deploy` command
- **Netlify** - By connecting the repository
- **Vercel** - For automatic deployments
- **Any static hosting** - Using the build output

## 🔧 Customization

### Adding New Content
1. Create new `.en.md` files in appropriate directories
2. Update `sidebars.js` to include new content
3. Ensure all entity tags are properly formatted
4. Test navigation and search functionality

### Modifying Styling
- Edit `src/css/custom.css` for custom styles
- Modify `docusaurus.config.js` for theme changes
- Use Docusaurus swizzling for component customization

## 📞 Support

For questions or issues with the English documentation:
- Check the [Docusaurus documentation](https://docusaurus.io/)
- Review the French version for reference
- Ensure all entity tags are properly formatted
- Verify navigation structure in sidebars

## 📄 License

This documentation follows the same license as the main Surfy Help project.
