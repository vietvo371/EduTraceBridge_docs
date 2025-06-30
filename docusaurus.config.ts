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
  trailingSlash: false,
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
          editUrl: 'https://gitlab.com/ThanhTruong2311/blockchain_dtudz/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/EduTraceBridge.png',
    navbar: {
      title: 'EduTraceBridge',
      logo: {
        alt: 'EduTraceBridge Logo',
        src: 'img/EduTraceBridge.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://gitlab.com/ThanhTruong2311/blockchain_dtudz',
          position: 'right',
          className: 'header-gitlab-link',
          'aria-label': 'GitLab repository',
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
              to: '/docs/intro',
            },
            {
              label: 'Architecture',
              to: '/docs/Architecture',
            },
            {
              label: 'Installation',
              to: '/docs/Installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitLab',
              href: 'https://gitlab.com/ThanhTruong2311/blockchain_dtudz',
            },
            {
              label: 'Issues',
              href: 'https://gitlab.com/ThanhTruong2311/blockchain_dtudz/-/issues',
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
