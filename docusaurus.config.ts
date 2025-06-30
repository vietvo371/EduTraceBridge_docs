import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EduTraceBridge',
  tagline: 'Blockchain-based Education Verification Platform',
  favicon: 'img/favicon.ico',
  url: 'https://vietvo371.github.io',
  baseUrl: '/EduTraceBridge_docs/',
  organizationName: 'vietvo371',
  projectName: 'EduTraceBridge_docs',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  }, 
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/vietvo371/EduTraceBridge_docs/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [{name: 'keywords', content: 'blockchain, education, verification'}],
    image: 'img/EduTraceBridge.png',
    navbar: {
      title: 'EduTraceBridge',
      logo: {
        alt: 'EduTraceBridge Logo',
        src: 'img/EduTraceBridge.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/vietvo371/EduTraceBridge_docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/intro',
            },
            {
              label: 'Architecture',
              to: '/Architecture',
            },
            {
              label: 'Installation',
              to: '/Installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vietvo371/EduTraceBridge_docs',
            },
            {
              label: 'Issues',
              href: 'https://github.com/vietvo371/EduTraceBridge_docs/issues',
            },
          ],
        },
        {
          title: 'Team',
          items: [
            {
              label: 'Nguyễn Quốc Long',
              href: 'mailto:quoclongdng@gmail.com',
            },
            {
              label: 'Lê Thanh Trường',
              href: 'mailto:thanhtruong23111999@gmail.com',
            },
            {
              label: 'Võ Văn Việt',
              href: 'mailto:vietvo371@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EduTraceBridge. Built with ❤️ by DTU-DZ Team.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
