import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';

// Import SVG icons
const icons = {
  frontend: 'M20 4v16l-16-8zM4 4v16h16',
  backend: 'M12 2L2 7l10 5l10-5zm-10 15l10 5l10-5M12 12v10',
  database: 'M4 5h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z',
  mobile: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
  devops: 'M19 9l-7 4-7-4V5l7 4 7-4zm-7 4v8',
  code: 'M10 20l4-16M4 8l8 4-8 4M20 8l-8 4 8 4',
};

// SVG Icon component
function Icon({icon, className}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d={icons[icon]} />
    </svg>
  );
}

// Tech Badge component
function TechBadge({name}) {
  return <span className="tech-badge">{name}</span>;
}

// Hero section with animated gradient
function HeroHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('row', styles.heroRow)}>
          <div className={clsx('col col--7', styles.heroContent)}>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <Heading as="h1" className="hero__title">
                <Translate id="hero.title">Laby的博客</Translate>
              </Heading>
              <p className="hero__subtitle">
                <Translate id="hero.tagline">探索现代Web开发的全部领域</Translate>
              </p>
              <div className={styles.heroBadges}>
                <TechBadge name={translate({id: "hero.badge.frontend", message: '前端'})} />
                <TechBadge name={translate({id: "hero.badge.backend", message: '后端'})} />
                <TechBadge name="DevOps" />
                <TechBadge name={translate({id: "hero.badge.architecture", message: '架构'})} />
                <TechBadge name={translate({id: "hero.badge.mobile", message: '移动开发'})} />
              </div>
              <div className={styles.buttons}>
                <Link
                  className={clsx('button button--primary button--lg', styles.heroButton)}
                  to="/blog">
                  <Translate id="hero.button.readBlog">阅读博客</Translate>
                </Link>
                <Link
                  className={clsx('button button--outline button--lg', styles.heroButton)}
                  to="/projects">
                  <Translate id="hero.button.viewProjects">查看项目</Translate>
                </Link>
              </div>
            </div>
          </div>
          <div className={clsx('col col--5', styles.heroVisual)}>
            <div className={styles.codeSnippet}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
                <span className={styles.codeDot}></span>
                <span className={styles.codeTitle}>HelloWorld.js</span>
              </div>
              <pre className={styles.codeBlock}>
                <code>
                  <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = {'{'}
                  <br />
                  {'  '}<span className={styles.property}>name</span>: <span className={styles.string}>'<Translate id="code.developer.name">全栈开发者</Translate>'</span>,
                  <br />
                  {'  '}<span className={styles.property}>skills</span>: [<span className={styles.string}>'React'</span>, <span className={styles.string}>'Node.js'</span>, <span className={styles.string}>'DevOps'</span>],
                  <br />
                  {'  '}<span className={styles.method}>code</span>(){' {'}<br />
                  {'    '}<span className={styles.keyword}>return</span> <span className={styles.string}>'<Translate id="code.developer.return">构建出色的Web体验</Translate>'</span>;
                  <br />
                  {'  }'}<br />
                  {'};'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Feature cards
function FeatureCard({icon, title, description, link}) {
  return (
    <Link to={link || '#'} className={styles.cardLink}>
      <div className={clsx('card', styles.card)}>
        <div className={styles.cardIcon}>
          <Icon icon={icon} className={styles.featureIcon} />
        </div>
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

// Blog preview section
function BlogPreview() {
  // This would typically fetch the actual blog posts
  const blogPosts = [
    {
      title: translate({
        id: "blog.post1.title",
        message: '构建现代Web应用'
      }),
      date: translate({
        id: "blog.post1.date",
        message: '2023年8月25日'
      }),
      excerpt: translate({
        id: "blog.post1.excerpt",
        message: '探索使用React创建高性能Web应用的最新技术和最佳实践。'
      }),
      url: '/blog/modern-react-patterns',
    },
    {
      title: translate({
        id: "blog.post2.title",
        message: '可扩展的后端架构'
      }),
      date: translate({
        id: "blog.post2.date",
        message: '2023年7月12日'
      }),
      excerpt: translate({
        id: "blog.post2.excerpt",
        message: '如何使用微服务设计能够高效处理增长和扩展的后端系统。'
      }),
      url: '/blog/long-blog-post',
    },
  ];

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="section.latestArticles">最新文章</Translate>
          </Heading>
          <Link to="/blog" className={styles.sectionLink}>
            <Translate id="section.viewAll">查看全部</Translate>
          </Link>
        </div>
        <div className="row">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="col col--6">
              <div className={styles.blogCard}>
                <Heading as="h3" className={styles.blogTitle}>
                  <Link to={post.url}>{post.title}</Link>
                </Heading>
                <p className={styles.blogDate}>{post.date}</p>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <Link to={post.url} className={styles.blogReadMore}>
                  <Translate id="blog.readMore">阅读更多</Translate> →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main features section
function Features() {
  const features = [
    {
      title: translate({id: "feature.frontend.title", message: '前端开发'}),
      icon: 'frontend',
      description: translate({
        id: "feature.frontend.desc",
        message: '使用现代框架和库构建响应式、交互式的用户界面。'
      }),
      link: '/docs/frontend/frontend-intro',
    },
    {
      title: translate({id: "feature.backend.title", message: '后端解决方案'}),
      icon: 'backend',
      description: translate({
        id: "feature.backend.desc",
        message: '创建健壮的服务器端应用程序、API和微服务，满足可扩展应用需求。'
      }),
      link: '/docs/backend/backend-intro',
    },
    {
      title: translate({id: "feature.database.title", message: '数据库设计'}),
      icon: 'database',
      description: translate({
        id: "feature.database.desc",
        message: '设计高效的数据库架构和查询优化，提升应用性能。'
      }),
      link: '/docs/backend/database-orm',
    },
    {
      title: translate({id: "feature.mobile.title", message: '移动应用开发'}),
      icon: 'mobile',
      description: translate({
        id: "feature.mobile.desc",
        message: '开发跨平台移动应用，在iOS和Android上无缝运行。'
      }),
      link: '/docs/frontend/mobile-dev/mobile-intro',
    },
    {
      title: translate({id: "feature.devops.title", message: 'DevOps实践'}),
      icon: 'devops',
      description: translate({
        id: "feature.devops.desc",
        message: '实现CI/CD流程、容器化和基础设施即代码，实现平滑部署。'
      }),
      link: '/docs/backend/system-design/devops-intro',
    },
    {
      title: translate({id: "feature.code.title", message: '代码质量'}),
      icon: 'code',
      description: translate({
        id: "feature.code.desc",
        message: '编写可维护、可测试的代码，遵循最佳实践和现代设计模式。'
      }),
      link: '/docs/backend/design-patterns/code-quality-intro',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="section.myExpertise">我的专长</Translate>
          </Heading>
        </div>
        <div className="row" style={{margin: '0 -20px'}}>
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4" style={{padding: '0 20px', marginBottom: '40px'}}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Newsletter section
function NewsletterSection() {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsletterInner}>
          <div className="row">
            <div className="col col--6">
              <Heading as="h2" className={styles.newsletterTitle}>
                <Translate id="newsletter.title">保持联系</Translate>
              </Heading>
              <p className={styles.newsletterDescription}>
                <Translate id="newsletter.description">
                  订阅我的通讯，获取最新文章、教程和技术见解。
                </Translate>
              </p>
            </div>
            <div className="col col--6">
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  className={styles.newsletterInput}
                  placeholder={translate({
                    id: "newsletter.email.placeholder",
                    message: '您的邮箱地址'
                  })}
                />
                <button type="submit" className={styles.newsletterButton}>
                  <Translate id="newsletter.subscribe">订阅</Translate>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main homepage component
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate(
        {id: "meta.title", message: '欢迎来到{siteName}'},
        {siteName: translate({id: "site.name", message: 'Laby的博客'})}
      )}
      description={translate({
        id: "meta.description",
        message: '全栈开发工程师的博客，分享Web开发见解、教程和最佳实践'
      })}>
      <HeroHeader />
      <main>
        <Features />
        <BlogPreview />
        <NewsletterSection />
      </main>
    </Layout>
  );
}
