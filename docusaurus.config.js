// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laby的博客',
  tagline: '探索现代Web开发的全部领域',
  favicon: 'img/logo.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://masterliu93.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'MasterLiu93', // GitHub org/user name.
  projectName: 'blog-web', // repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@site/blog/authors': './blog/authors',
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MasterLiu93/blog-web/tree/main/',
          routeBasePath: 'docs',
          path: 'docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // 使用默认日期格式
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/MasterLiu93/blog-web/tree/main/',
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '全部博客文章',
          feedOptions: {
            type: ['rss', 'atom'],
            copyright: `Copyright © ${new Date().getFullYear()} Laby的博客`,
          },
          sortPosts: 'descending',
          authorsMapPath: 'authors.yml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Laby的博客',
        logo: {
          alt: 'Laby的博客Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '知识库导航',
            to: '/docs/intro',
          },
          {
            label: '项目',
            to: '/projects',
            position: 'left',
          },
          {
            label: '关于我',
            to: '/about',
            position: 'right',
          },
          {
            href: 'https://github.com/MasterLiu93',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '内容',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '知识库导航',
                to: '/docs/intro',
              },
              {
                label: '项目',
                to: '/projects',
              },
            ],
          },
          {
            title: '社交账号',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MasterLiu93',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'RSS订阅',
                to: '/blog',
              },
              {
                label: '关于我',
                to: '/about',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Laby的博客. 基于 Docusaurus 构建.`,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff', 'json', 'java', 'python', 'csharp', 'jsx', 'typescript', 'tsx'],
      },
      // Add algolia DocSearch if you want
      // algolia: {
      //   // Replace with your own values
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true,
      // },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;
