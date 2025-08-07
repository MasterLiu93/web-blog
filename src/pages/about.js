import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './about.module.css';

// 技能组件
function SkillBar({name, level}) {
  return (
    <div className={styles.skillBar}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillProgress}>
        <div 
          className={styles.skillProgressBar} 
          style={{width: `${level}%`}}
        ></div>
      </div>
    </div>
  );
}

// 经历组件
function ExperienceItem({period, title, company, description}) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experiencePeriod}>{period}</div>
      <div className={styles.experienceContent}>
        <h3 className={styles.experienceTitle}>
          {title} <span className={styles.experienceCompany}>@ {company}</span>
        </h3>
        <p className={styles.experienceDescription}>{description}</p>
      </div>
    </div>
  );
}

// 联系方式组件
function ContactItem({icon, label, value, link}) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactIcon}>{icon}</div>
      <div>
        <div className={styles.contactLabel}>{label}</div>
        {link ? (
          <Link className={styles.contactValue} href={link} target="_blank" rel="noopener noreferrer">
            {value}
          </Link>
        ) : (
          <div className={styles.contactValue}>{value}</div>
        )}
      </div>
    </div>
  );
}

// 主组件
export default function About() {
  // 技能数据
  const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 92 },
    { name: 'Vue.js', level: 85 },
    { name: 'TypeScript', level: 80 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 88 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 82 },
    { name: 'SQL/NoSQL', level: 85 },
    { name: 'GraphQL', level: 78 },
  ];
  
  const devopsSkills = [
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 75 },
    { name: 'CI/CD', level: 80 },
    { name: 'AWS/Cloud', level: 78 },
    { name: 'Linux', level: 85 },
  ];

  // 工作经历
  const experiences = [
    {
      period: '2020 - 至今',
      title: '高级全栈开发工程师',
      company: 'TechForward 科技',
      description: '负责公司核心产品的前后端开发，包括微服务架构设计、前端UI/UX优化和DevOps流程建设，主导了多个关键项目的技术选型与实施。'
    },
    {
      period: '2017 - 2020',
      title: '全栈开发工程师',
      company: 'DataInnovate 数据创新',
      description: '参与大数据分析平台的开发，使用React和Node.js构建前端界面，开发RESTful API，同时负责数据可视化模块和自动化部署流程。'
    },
    {
      period: '2015 - 2017',
      title: '前端开发工程师',
      company: 'WebPioneer 网络科技',
      description: '负责企业网站和电子商务平台的前端开发，优化用户体验，提高网站性能，参与了多个移动端适配项目。'
    }
  ];

  return (
    <Layout
      title="关于我"
      description="全栈开发工程师的个人简介、技能、经历和联系方式">
      <header className={styles.aboutHeader}>
        <div className="container">
          <div className={styles.aboutHeaderContent}>
            <div className={styles.avatarContainer}>
              <img 
                src="/img/avatar.jpg" 
                alt="个人头像" 
                className={styles.avatar}
              />
            </div>
            <div className={styles.introContainer}>
              <Heading as="h1" className={styles.aboutTitle}>
                全栈开发工程师
              </Heading>
              <p className={styles.aboutSubtitle}>
                热衷于创造高质量、用户友好的数字体验
              </p>
              <div className={styles.aboutSocial}>
                <Link to="https://github.com/yourusername" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
                <Link to="https://linkedin.com/in/yourprofile" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link to="https://twitter.com/yourhandle" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* 简介部分 */}
        <section className={styles.aboutSection}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <Heading as="h2" className={styles.sectionTitle}>
                  关于我
                </Heading>
                <div className={styles.aboutText}>
                  <p>我是一名拥有8年经验的全栈开发工程师，专注于构建高质量的Web应用和解决复杂的技术挑战。我具备从前端到后端，再到DevOps的全面技能，热衷于学习新技术和最佳实践。</p>
                  
                  <p>在我的职业生涯中，我参与开发了各种类型的项目，包括企业应用、电子商务平台、数据分析工具和实时通信系统。我特别擅长构建响应式用户界面、设计可扩展的后端架构，以及优化开发和部署流程。</p>
                  
                  <p>我相信技术不仅是工具，更是解决问题的途径。我喜欢从用户和业务需求出发，提供优雅而实用的技术解决方案。在这个博客上，我将分享我的技术见解、项目经验和学习心得。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技能部分 */}
        <section className={clsx(styles.aboutSection, styles.skillsSection)}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              专业技能
            </Heading>
            
            <div className="row">
              <div className="col col--4">
                <div className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle}>前端开发</h3>
                  {frontendSkills.map((skill, idx) => (
                    <SkillBar key={idx} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
              
              <div className="col col--4">
                <div className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle}>后端开发</h3>
                  {backendSkills.map((skill, idx) => (
                    <SkillBar key={idx} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
              
              <div className="col col--4">
                <div className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle}>DevOps</h3>
                  {devopsSkills.map((skill, idx) => (
                    <SkillBar key={idx} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 工作经历部分 */}
        <section className={styles.aboutSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              工作经历
            </Heading>
            
            <div className={styles.experienceContainer}>
              {experiences.map((exp, idx) => (
                <ExperienceItem 
                  key={idx} 
                  period={exp.period} 
                  title={exp.title} 
                  company={exp.company} 
                  description={exp.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 联系方式部分 */}
        <section className={clsx(styles.aboutSection, styles.contactSection)}>
          <div className="container">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <div className={styles.contactCard}>
                  <Heading as="h2" className={styles.contactTitle}>
                    联系我
                  </Heading>
                  <p className={styles.contactIntro}>
                    如果您有项目合作、技术交流或其他问题，欢迎通过以下方式联系我：
                  </p>
                  
                  <div className={styles.contactGrid}>
                    <ContactItem 
                      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>} 
                      label="邮箱" 
                      value="your.email@example.com" 
                      link="mailto:your.email@example.com"
                    />
                    
                    <ContactItem 
                      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17h-2.203v-6.609h2.203v6.609zm-1.101-7.5c-.771 0-1.286-.514-1.286-1.155s.514-1.155 1.317-1.155c.771 0 1.254.514 1.27 1.155-.016.641-.499 1.155-1.301 1.155zm8.822 7.5h-2.187v-3.797c0-.954-.446-1.564-1.349-1.564-.781 0-1.254.469-1.46.922-.74.211-.92.507-.92.811v3.628h-2.187v-6.609h2.187v.955c.499-.673 1.254-1.487 3.018-1.487 2.203 0 3.85 1.439 3.85 4.528v3.613z"></path></svg>} 
                      label="LinkedIn" 
                      value="linkedin.com/in/yourprofile" 
                      link="https://linkedin.com/in/yourprofile"
                    />
                    
                    <ContactItem 
                      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>} 
                      label="GitHub" 
                      value="github.com/yourusername" 
                      link="https://github.com/yourusername"
                    />
                    
                    <ContactItem 
                      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>} 
                      label="Twitter" 
                      value="@yourhandle" 
                      link="https://twitter.com/yourhandle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 