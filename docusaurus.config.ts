import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
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
  organizationName: 'surfy', // Usually your GitHub org/user name.
  projectName: 'surfy-help', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          admonitions: {
            keywords: ['p'],
            extendDefaults: true
          },
          sidebarPath: './sidebars.ts',
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
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/surfy-social-card.png',
    navbar: {
      title: 'Surfy University',
      logo: {
        alt: 'Surfy Logo',
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
    algolia: {
      appId: 'X4BNSJG6KM',
      apiKey: 'f26cb9c3ca2be7964014e7228bce31a2',
      indexName: 'help-surfy',
      contextualSearch: true,
      searchPagePath: 'search',
    },
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
