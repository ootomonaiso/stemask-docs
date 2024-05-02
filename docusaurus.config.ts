import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'STEMASK Docs',
  tagline: 'STEM部員のためのドキュメントサイト',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ask-stem-official.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/stemask-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ASK-STEM-official', // Usually your GitHub org/user name.
  projectName: 'stemask-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  noIndex: true,

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ASK-STEM-official/stemask-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: { // https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'unity-docs',
        path: 'unity-docs',
        routeBasePath: 'unity-docs',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'STEMASK Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: "/docs/intro",
          position: 'left',
          label: 'How to Edit',
        },
        {
          to: "/unity-docs/intro",
          position: 'left',
          label: 'Unity',
        },
        // {to: '/blog', label: '作品集', position: 'left'},
        {
          href: 'https://github.com/ASK-STEM-official/stemask-unity-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'How to Edit',
        },
        {
          title: 'Unity Docs',
          items: [
            {
              label: 'はじめに',
              to: '/unity-docs/intro',
            },
            {
              label: '環境構築',
              to: '/unity-docs/category/環境構築',
            },
          ],
        },
        {
          title: '関連リンク',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ASK-STEM-official/stemask-unity-docs',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} STEMASK Research Club.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
