# Laby's Blog - 现代化技术博客与知识库系统

![GitHub stars](https://img.shields.io/github/stars/MasterLiu93/blog-web?style=social)
![GitHub forks](https://img.shields.io/github/forks/MasterLiu93/blog-web?style=social)
![GitHub issues](https://img.shields.io/github/issues/MasterLiu93/blog-web?style=social)
![GitHub license](https://img.shields.io/github/license/MasterLiu93/blog-web?style=social)

一个基于 [Docusaurus 3](https://docusaurus.io/) 构建的现代化技术博客与知识库系统，集成了博客、文档、项目展示和个人简介等功能。支持多语言国际化、深色模式、全文搜索，并拥有美观的UI设计和丰富的动画效果。

## ✨ 功能特点

- 📝 **博客系统**：支持Markdown和MDX格式，轻松创建和管理博客文章
- 📚 **知识库**：结构化的文档系统，适合构建个人/团队知识库
- 🌐 **国际化**：内置中文和英文支持，可轻松扩展其他语言
- 🔍 **全文搜索**：集成本地搜索功能，无需依赖外部服务
- 🎨 **现代UI**：精美的界面设计，丰富的动画效果和交互体验
- 🌙 **深色模式**：自动和手动切换的深色模式支持
- 📱 **响应式设计**：完美适配桌面和移动设备
- 🖼️ **项目展示**：展示个人或团队项目的专用页面
- 👤 **个人简介**：个性化的"关于我"页面
- ⚡ **高性能**：静态站点生成，快速加载和SEO友好

## 🛠️ 技术栈

- **[Docusaurus 3](https://docusaurus.io/)**: React驱动的静态网站生成器
- **[React](https://reactjs.org/)**: 用户界面库
- **[MDX](https://mdxjs.com/)**: JSX增强的Markdown
- **[React-Icons](https://react-icons.github.io/react-icons/)**: 丰富的图标库
- **[Prism](https://prismjs.com/)**: 代码语法高亮
- **CSS Modules**: 组件级样式隔离

## 🚀 快速开始

### 安装

```bash
# 克隆仓库
git clone https://github.com/YourUsername/blog-web.git
cd blog-web

# 安装依赖
yarn
```

### 本地开发

```bash
# 启动开发服务器
yarn start
```

这将启动本地开发服务器并在浏览器中打开窗口。大多数更改无需重启服务器即可实时生效。

### 构建

```bash
# 构建静态网站
yarn build
```

这将在 `build` 目录中生成静态内容，可以使用任何静态内容托管服务进行部署。

### 预览构建结果

```bash
# 预览构建后的网站
yarn serve
```

## 📁 项目结构

```
blog-web/
├── blog/                 # 博客文章 (.md/.mdx)
├── docs/                 # 文档和知识库内容
│   ├── backend/          # 后端开发文档
│   └── frontend/         # 前端开发文档
├── i18n/                 # 国际化翻译文件
│   └── en/               # 英文翻译
├── src/
│   ├── components/       # React组件
│   ├── css/              # 全局CSS样式
│   └── pages/            # 自定义页面
│       ├── index.js      # 首页
│       ├── about.js      # 关于我页面
│       └── projects.js   # 项目展示页面
├── static/
│   └── img/              # 图片资源
├── docusaurus.config.js  # Docusaurus配置
├── sidebars.js           # 文档侧边栏配置
└── package.json          # 项目依赖和脚本
```

## 🌍 国际化支持

本项目支持多语言切换，默认提供中文和英文支持。

### 添加新语言

1. 修改 `docusaurus.config.js` 文件中的 `i18n` 配置：

```js
i18n: {
  defaultLocale: 'zh-Hans',
  locales: ['zh-Hans', 'en', 'your-locale'],
  localeConfigs: {
    'your-locale': {
      label: 'Your Language',
      direction: 'ltr',
      htmlLang: 'your-locale',
    },
  },
},
```

2. 生成翻译文件：

```bash
yarn docusaurus write-translations --locale your-locale
```

3. 编辑生成的翻译文件，位于 `i18n/your-locale/` 目录下。

## ⚙️ 自定义配置

### 修改网站信息

编辑 `docusaurus.config.js` 文件中的以下部分：

```js
const config = {
  title: '你的网站标题',
  tagline: '你的网站标语',
  favicon: 'img/your-favicon.ico',
  url: 'https://your-domain.com',
  // ...其他配置
};
```

### 自定义主题

在 `src/css/custom.css` 文件中修改颜色变量：

```css
:root {
  --ifm-color-primary: #4a6cf7;
  --ifm-color-primary-dark: #3d5ef5;
  /* ...其他颜色变量 */
}
```

### 添加新页面

在 `src/pages/` 目录下创建新的 React 组件：

```jsx
import React from 'react';
import Layout from '@theme/Layout';

export default function MyPage() {
  return (
    <Layout title="页面标题" description="页面描述">
      <main className="container margin-top--lg">
        <h1>我的新页面</h1>
        <p>页面内容...</p>
      </main>
    </Layout>
  );
}
```

## 📝 添加内容

### 添加博客文章

在 `blog/` 目录下创建新的 Markdown 或 MDX 文件：

```md
---
slug: my-blog-post
title: 我的博客文章
authors: [your-author-id]
tags: [tag1, tag2]
---

这是一篇博客文章的内容...
```

### 添加文档

在 `docs/` 目录下创建新的 Markdown 或 MDX 文件，并更新 `sidebars.js` 文件以包含新文档。

## 🔧 常见问题

### 如何添加自定义组件？

在 `src/components/` 目录下创建新的 React 组件，然后在页面或 MDX 文件中导入使用。

### 如何修改导航栏？

编辑 `docusaurus.config.js` 文件中的 `themeConfig.navbar` 部分。

### 如何部署到GitHub Pages？

```bash
# 使用SSH
USE_SSH=true yarn deploy

# 不使用SSH
GIT_USER=<Your GitHub username> yarn deploy
```

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出改进建议！请遵循以下步骤：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 项目仓库：[GitHub Issues](https://github.com/YourUsername/blog-web/issues)
- 邮箱：your-email@example.com

---

使用 ❤️ 和 [Docusaurus](https://docusaurus.io/) 构建
