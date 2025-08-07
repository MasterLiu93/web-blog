// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // 自定义侧边栏配置，使用中文显示但对应英文URL路径
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '前端开发',
      link: {
        type: 'generated-index',
        description: '前端开发相关的技术文档、框架使用和最佳实践',
        slug: 'frontend' // 使用slug属性指定英文路径
      },
      items: [
        'frontend/frontend-intro',
        {
          type: 'category',
          label: 'HTML和CSS',
          items: ['frontend/html-css/html-basics', 'frontend/html-css/css-basics', 'frontend/html-css/modern-layouts']
        },
        {
          type: 'category',
          label: 'JavaScript',
          items: ['frontend/javascript/js-basics', 'frontend/javascript/es6-plus', 'frontend/javascript/async-js']
        },
        {
          type: 'category',
          label: 'React',
          items: ['frontend/react/react-basics', 'frontend/react/hooks', 'frontend/react/state-management']
        },
        {
          type: 'category',
          label: '移动应用开发',
          items: ['frontend/mobile-dev/mobile-intro', 'frontend/mobile-dev/react-native', 'frontend/mobile-dev/flutter', 'frontend/mobile-dev/pwa']
        }
      ]
    },
    {
      type: 'category',
      label: '后端开发',
      link: {
        type: 'generated-index',
        description: 'Java 后端开发完全指南，包括Java基础、集合框架、并发编程、JVM、Spring框架等',
        slug: 'backend' // 使用slug属性指定英文路径
      },
      items: [
        'backend/backend-intro',
        {
          type: 'category',
          label: 'Java基础',
          items: [
            'backend/java-basics/data-types',
            'backend/java-basics/oop',
            'backend/java-basics/string',
            'backend/java-basics/exceptions',
            'backend/java-basics/generics',
            'backend/java-basics/reflection',
            'backend/java-basics/annotations',
            'backend/java-basics/lambda',
            'backend/java-basics/stream-api',
          ]
        },
        {
          type: 'category',
          label: '数据库与ORM',
          items: [
            'backend/database-orm/database-intro',
            'backend/database-orm/mysql',
            'backend/database-orm/mybatis',
            'backend/database-orm/redis',
          ]
        },
        {
          type: 'category',
          label: '设计模式',
          items: [
            'backend/design-patterns/code-quality-intro',
            'backend/design-patterns/creational-patterns',
            'backend/design-patterns/structural-patterns',
            'backend/design-patterns/behavioral-patterns',
          ]
        },
        {
          type: 'category',
          label: '系统设计',
          items: [
            'backend/system-design/devops-intro',
            'backend/system-design/high-availability',
            'backend/system-design/high-performance',
            'backend/system-design/high-concurrency',
            'backend/system-design/circuit-breaking',
            'backend/system-design/fallback',
            'backend/system-design/rate-limiting',
          ]
        }
      ]
    }
  ]
};

export default sidebars;
