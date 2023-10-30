// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Surfy University',
  tagline: 'Nous digitalisons les espaces en donnant accès aux plans et aux données',
  favicon: 'img/surfy-square.png',

  // Set the production url of your site here
  url: 'https://help.surfy.pro',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Surfy', // Usually your GitHub org/user name.
  projectName: 'surfy-help', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/surfypro/surfy-help/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/surfypro/surfy-help/tree/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/surfy-social-card.png',
      navbar: {
        title: 'Surfy University',
        logo: {
          alt: 'Surfy Logo',
          // src: 'img/logo-surfy.svg',
          src: 'img/surfy-square.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutoriels',
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/surfypro/surfy-help',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      // algolia: {
      //   appId: '17D63GBKEP',
      //   apiKey: '670c561b07906d6fa9cc55606b6701f2',
      //   indexName: 'netlify_abcec12e-a9a4-450d-a722-405693c6e32e_main_all',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      //   siteId: 'abcec12e-a9a4-450d-a722-405693c6e32e',
      //   branch: 'main',
      //   selector: 'div#search',
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Tutoriels',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Communautés',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@surfyfr',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/surfypro/',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'App',
                href: 'https://app.surfy.pro',
              },
              {
                label: 'API',
                href: 'https://app.surfy.pro/apidocs/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/surfypro/surfy-help',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Surfy`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // scripts: [
  //   { src: 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js' }
  // ]
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

};

module.exports = config;
