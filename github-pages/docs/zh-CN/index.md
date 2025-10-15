---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Domain Designer'
  text: 'ddd 建模生产力工具'
  tagline: '通过编写 ts 代码的方式进行领域设计'
  actions:
    - theme: brand
      text: 快速开始
      link: /zh-CN/guide/introduction/getting-started
    - theme: alt
      text: 项目地址
      link: https://github.com/ddd-tool/domain-designer-cli-node

features:
  - title: 领域驱动设计
    details: uml各节点概念全部来源于领域驱动设计
  - title: 事件风暴 + 工作流 + 用户故事
    details: 利用多视角分析业务，引导用户切换焦点，更容易发现已有设计的不足
  - title: 随项目维护
    details: 没什么需要特殊处理的，和普通的代码一样，通过GIT、SVN等工具进行版本控制，适合多人开发
  - title: TypeScript编程语言
    details: 无需专门学习一种其他场景用不上的DSL；充分利用TS的编译，让用户在设计时减少错误。对于“业务上手难度”高的项目，甚至可以做出“强类型需求分析”
  - title: 学习简单、使用方便
    details: 函数风格，不涉及任何class、不涉及任何“类型体操”，保证编写难度是JS入门级别。保证不论前后端开发者都能在短时间内学会
  - title: 开箱即用
    details: 用户所需的功能都集成在一个脚本工具
  - title: 图形化展示
    details: 通过一个指令即可将当前的设计在web端展示出来，在讲述需求的时候照顾到不懂代码的其他人
  - title: 导出SVG
    details: 在做一些其他文档如office文档的时候，可以方便地进行引用
---

::: info 所写即所得
![演示](example1.gif)
:::
