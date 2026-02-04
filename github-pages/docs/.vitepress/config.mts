import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Domain Designer',
  description: 'DDD Modeling Productivity Tool',
  base: '/domain-designer-cli-node/',
  locales: {
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh-CN/' },
          { text: '文档', link: '/zh-CN/guide/introduction/getting-started' },
          { text: '项目地址', link: 'https://github.com/ddd-tool/domain-designer-cli-node' },
        ],
        sidebar: {
          '/zh-CN/guide/': [
            {
              text: '简介',
              items: [
                { text: '设计理念', link: '/zh-CN/guide/introduction/design-concepts' },
                { text: '快速开始', link: '/zh-CN/guide/introduction/getting-started' },
                { text: '更新', link: '/zh-CN/guide/introduction/update' },
                { text: '约定标准', link: '/zh-CN/guide/introduction/agreed-standards' },
                { text: '代码生成', link: '/zh-CN/guide/introduction/code-generation' },
              ],
            },
            {
              text: '编写',
              items: [
                { text: '1. 创建设计器', link: '/zh-CN/guide/writing/create-designer' },
                { text: '2. 创建元素', link: '/zh-CN/guide/writing/create-element' },
                { text: '3. 配置业务流程', link: '/zh-CN/guide/writing/config-business-process' },
              ],
            },
            {
              text: '进阶',
              items: [
                { text: '强类型需求描述', link: '/zh-CN/guide/advanced/strong-typing-requirement' },
                { text: '同模块多聚合', link: '/zh-CN/guide/advanced/multi-agg' },
                { text: 'AI辅助', link: '/zh-CN/guide/advanced/ai-assistance' },
              ],
            },
          ],
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/ddd-tool/domain-designer-cli-node' }],
      },
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en-US/' },
          { text: 'Guide', link: '/en-US/guide/introduction/getting-started' },
          { text: 'GitHub', link: 'https://github.com/ddd-tool/domain-designer-cli-node' },
        ],
        sidebar: {
          '/en-US/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Design Philosophy', link: '/en-US/guide/introduction/design-concepts' },
                { text: 'Getting Started', link: '/en-US/guide/introduction/getting-started' },
                { text: 'Update', link: '/en-US/guide/introduction/update' },
                { text: 'Conventions', link: '/en-US/guide/introduction/agreed-standards' },
                { text: 'Code Generation', link: '/en-US/guide/introduction/code-generation' },
              ],
            },
            {
              text: 'Writing',
              items: [
                { text: '1. Create Designer', link: '/en-US/guide/writing/create-designer' },
                { text: '2. Create Elements', link: '/en-US/guide/writing/create-element' },
                { text: '3. Configure Business Process', link: '/en-US/guide/writing/config-business-process' },
              ],
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Strongly-Typed Requirements', link: '/en-US/guide/advanced/strong-typing-requirement' },
                { text: 'Multiple Aggregates', link: '/en-US/guide/advanced/multi-agg' },
                { text: 'AI Assistance', link: '/en-US/guide/advanced/ai-assistance' },
              ],
            },
          ],
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/ddd-tool/domain-designer-cli-node' }],
      },
    },
  },
  head: [
    [
      'script',
      { type: 'text/javascript' },
      `
      (function() {
        const lang = navigator.language || navigator.userLanguage;
        const path = window.location.pathname;
        const base = '/domain-designer-cli-node/';

        // Only redirect on the home page
        if (path === base || path === base.replace(/\\/$/, '') || path === '/' || path === '') {
          if (lang.startsWith('zh')) {
            window.location.href = base + 'zh-CN/';
          } else {
            window.location.href = base + 'en-US/';
          }
        }
      })();
    `,
    ],
  ],
})
