import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Domain Designer',
  description: 'A VitePress Site',
  base: '/domain-designer-cli-node/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
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
  },
})
