import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Moloko-Blog',
  tagline: 'Blog personal',
  favicon: 'img/moloko-logo-min.png',

  // Set the production url of your site here
  url: 'https://berlot83.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/molokotech-blog/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  projectName: 'molokotech-blog',
  organizationName: 'berlot83',
  trailingSlash: false,
  deploymentBranch: "pages",
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Molokotech',
      logo: {
        alt: 'Molokotech Blog',
        src: 'img/moloko-logo-min.png',
      },
      items: [
      /*  {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        }, */
        {
          to: '/blog',
          label: 'Java-Basics-Blog',
          position: 'left'
        },
        {
          to: '/opinions-blog',
          label: 'Opinions-Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/berlot83',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/axelberlot/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/berlot83',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Molokotech Blog sólo un blog de tecnología para mis tiempos libres.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java']
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'opinions-blog',
        routeBasePath: 'opinions-blog',
        path: './opinions-blog',
      },
    ],
  ],



};

export default config;
