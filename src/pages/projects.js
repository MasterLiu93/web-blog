import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './projects.module.css';
import Translate, {translate} from '@docusaurus/Translate';

// 导入项目图片
import project1Image from '@site/static/img/projects/project.png';
import project2Image from '@site/static/img/projects/project2.png';
import project3Image from '@site/static/img/projects/project3.png';
import project4Image from '@site/static/img/projects/project4.png';

// 气泡提示组件
function Tooltip({ message, isVisible, position }) {
  if (!isVisible) return null;
  
  return (
    <div className={clsx(styles.tooltip, styles[`tooltip${position}`])}>
      {message}
    </div>
  );
}

// 技术栈标签组件
function TechTag({name}) {
  return <span className={styles.techTag}>{name}</span>;
}

// 项目卡片组件
function ProjectCard({title, description, imageUrl, demoUrl, codeUrl, techStack, featured}) {
  // 提示状态
  const [showTooltip, setShowTooltip] = useState(false);
  
  // 处理源代码按钮点击
  const handleCodeClick = (e) => {
    e.preventDefault();
    setShowTooltip(true);
    
    // 3秒后隐藏提示
    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  return (
    <div className={clsx('col col--6', styles.projectCardWrapper)}>
      <div className={clsx('card', styles.projectCard, featured && styles.featuredCard)}>
        {featured && <div className={styles.featuredBadge}>
          <Translate id="projects.featured">精选项目</Translate>
        </div>}
        <div className={styles.projectImageContainer}>
          <img src={imageUrl} alt={title} className={styles.projectImage} />
        </div>
        <div className="card__body">
          <Heading as="h3" className={styles.projectTitle}>
            {title}
          </Heading>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.techStackContainer}>
            {techStack.map((tech, index) => (
              <TechTag key={index} name={tech} />
            ))}
          </div>
        </div>
        <div className={clsx('card__footer', styles.projectFooter)}>
          {demoUrl && (
            <Link to={demoUrl} className="button button--primary button--sm" target="_blank" rel="noopener noreferrer">
              <Translate id="projects.viewDemo">查看演示</Translate>
            </Link>
          )}
          {codeUrl && (
            <div className={styles.tooltipContainer}>
              <Link
                to={codeUrl}
                className="button button--outline button--sm"
                onClick={handleCodeClick}
              >
                <Translate id="projects.sourceCode">源代码</Translate>
              </Link>
              <Tooltip 
                message={translate({id: "projects.openSource.tooltip", message: "项目开源中, 请持续关注。"})} 
                isVisible={showTooltip}
                position="Top"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 项目页面主组件
export default function Projects() {
  // 项目数据
  const projects = [
    {
      title: translate({id: "project1.title", message: '智慧城市安全监控系统'}),
      description: translate({
        id: "project1.description",
        message: '基于微服务架构的城市安全监控系统，实现了视频监控、报警处理和AI识别分析等功能。'
      }),
      imageUrl: project1Image,
      demoUrl: 'http://120.48.86.168/screen/city',
      codeUrl: '#',
      techStack: ['React', 'Node.js', translate({id: "tech.microservices", message: '微服务'}), 'AI' + translate({id: "tech.vision", message: '视觉分析'}), 'MongoDB'],
      featured: true,
    },
    {
      title: translate({id: "project2.title", message: '智慧仓储大屏'}),
      description: translate({
        id: "project2.description",
        message: '实时监控仓储状态的数据可视化系统，包含人员调度、车辆管理和任务分配功能。'
      }),
      imageUrl: project2Image,
      demoUrl: 'http://120.48.86.168/screen/city2',
      codeUrl: '#',
      techStack: ['Vue.js', 'ECharts', 'WebSocket', 'Express', 'PostgreSQL'],
      featured: true,
    },
    {
      title: translate({id: "project3.title", message: '光纤线路安防预警监测平台'}),
      description: translate({
        id: "project3.description",
        message: '对光纤线路进行实时监测和预警，支持区域管理和异常情况快速响应。'
      }),
      imageUrl: project3Image,
      demoUrl: 'http://120.48.86.168/screen/city3',
      codeUrl: '#',
      techStack: ['React', 'Redux', 'GIS' + translate({id: "tech.map", message: '地图'}), 'Python', 'Redis'],
      featured: false,
    },
    {
      title: translate({id: "project4.title", message: '智慧营地管理系统'}),
      description: translate({
        id: "project4.description",
        message: '营地人员、设备和资源的智能管理平台，提供实时状态监控和数据统计。'
      }),
      imageUrl: project4Image,
      demoUrl: 'http://120.48.86.168/big-screen',
      codeUrl: '#',
      techStack: ['Angular', 'D3.js', 'Flask', 'MySQL', translate({id: "tech.facial", message: '人脸识别'})],
      featured: false,
    }
  ];

  // 分离精选项目和普通项目
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <Layout 
      title={translate({id: "projects.meta.title", message: "项目作品"})} 
      description={translate({
        id: "projects.meta.description",
        message: "全栈开发工程师的项目作品展示，包括Web应用、移动应用和DevOps工具等"
      })}>
      <header className={styles.projectsHeader}>
        <div className="container">
          <Heading as="h1" className={styles.projectsTitle}>
            <Translate id="projects.title">项目作品</Translate>
          </Heading>
          <p className={styles.projectsSubtitle}>
            <Translate id="projects.subtitle">
              这里展示了我作为全栈开发工程师的一些代表性项目。每个项目都融合了前端、后端和数据可视化的技术栈。
            </Translate>
          </p>
        </div>
      </header>

      <main>
        {/* 精选项目区域 */}
        <section className={styles.featuredProjects}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="projects.featuredProjects">精选项目</Translate>
            </Heading>
            <div className="row">
              {featuredProjects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* 其他项目区域 */}
        <section className={styles.regularProjects}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="projects.moreProjects">更多项目</Translate>
            </Heading>
            <div className="row">
              {regularProjects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* 联系区域 */}
        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactCard}>
              <Heading as="h2" className={styles.contactTitle}>
                <Translate id="projects.haveIdea">有项目想法？</Translate>
              </Heading>
              <p className={styles.contactText}>
                <Translate id="projects.contactText">
                  我对新的项目合作和机会持开放态度。如果您有项目想法或技术问题需要帮助，请随时联系我。
                </Translate>
              </p>
              <Link to="/about" className="button button--primary button--lg">
                <Translate id="projects.contactMe">联系我</Translate>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 