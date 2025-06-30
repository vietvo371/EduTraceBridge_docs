import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🚀 Giới thiệu',
    },
    {
      type: 'doc',
      id: 'GettingStarted',
      label: '📝 Tổng quan',
    },
    {
      type: 'doc',
      id: 'Architecture',
      label: '🏗️ Kiến trúc hệ thống',
    },
    {
      type: 'doc',
      id: 'Installation',
      label: '🔧 Hướng dẫn cài đặt',
    },
    {
      type: 'doc',
      id: 'SmartContracts',
      label: '📝 Smart Contracts',
    },
    {
      type: 'category',
      label: '📚 Hướng dẫn sử dụng',
      items: [
        'Guides/student-guide',
        'Guides/teacher-guide',
        'Guides/school-guide',
        'Guides/employer-guide',
      ],
    },
    {
      type: 'doc',
      id: 'License',
      label: '📜 License',
    },
  ],
};

export default sidebars;
