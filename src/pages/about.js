import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './about.module.css';
import Translate, {translate} from '@docusaurus/Translate';
// 导入react-icons图标
import { FaReact, FaServer, FaDatabase, FaMobile, FaTools, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaJava } from 'react-icons/fa';
import { SiSpringboot, SiDocker, SiKubernetes, SiJavascript, SiTypescript, SiRedis, SiMysql, SiMongodb } from 'react-icons/si';
import { MdOutlineRocketLaunch, MdWork, MdSchool, MdEmail, MdLocationOn } from 'react-icons/md';
import { BsLightningChargeFill, BsCheckCircleFill, BsCalendarDate, BsBuilding, BsPerson, BsWechat } from 'react-icons/bs';
import { IoSpeedometerOutline, IoLogoVue, IoCodeSlash } from 'react-icons/io5';
import { GrNode, GrReactjs } from 'react-icons/gr';
import { AiOutlineCloudServer, AiOutlineProject, AiOutlineTeam } from 'react-icons/ai';

// 职业经历组件
function Experience({period, company, position, description, technologies}) {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experiencePeriod}>
        <BsCalendarDate className={styles.periodIcon} />
        {period}
      </div>
      <div className={styles.experienceContent}>
        <h3 className={styles.experiencePosition}>
          <MdWork className={styles.positionIcon} />
          {position}
        </h3>
        <div className={styles.experienceCompany}>
          <BsBuilding className={styles.companyIcon} />
          {company}
        </div>
        <p className={styles.experienceDescription}>{description}</p>
        {technologies && (
          <div className={styles.experienceTech}>
            <span className={styles.techLabel}>
              <IoCodeSlash className={styles.techIcon} />
              <Translate id="about.technologies">技术栈：</Translate>
            </span>
            {technologies}
          </div>
        )}
      </div>
    </div>
  );
}

// 项目组件
function ProjectItem({title, description}) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectHeader}>
        <AiOutlineProject className={styles.projectIcon} />
        <h3 className={styles.projectTitle}>{title}</h3>
      </div>
      <p className={styles.projectDescription}>{description}</p>
    </div>
  );
}

// 技能组件
function SkillCategory({title, skills, icon}) {
  return (
    <div className={styles.skillCategory}>
      <div className={styles.skillCategoryHeader}>
        {icon}
        <h3 className={styles.skillCategoryTitle}>{title}</h3>
      </div>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillBadge}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

// 教育组件
function EducationItem({period, degree, school, major}) {
  return (
    <div className={styles.educationItem}>
      <div className={styles.educationPeriod}>{period}</div>
      <div className={styles.educationContent}>
        <MdSchool className={styles.educationIcon} />
        <h3 className={styles.educationDegree}>{degree}</h3>
        <div className={styles.educationSchool}>{school}</div>
        <div className={styles.educationMajor}>{major}</div>
      </div>
    </div>
  );
}

// 联系方式组件
function ContactItem({label, value, link, icon}) {
  return (
    <div className={styles.contactItem}>
      <span className={styles.contactLabel}>
        {icon}
        {label}:
      </span>
        {link ? (
        <a href={link} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
            {value}
        </a>
        ) : (
        <span className={styles.contactValue}>
          {value}
        </span>
        )}
    </div>
  );
}

export default function About() {
  return (
    <Layout
      title={translate({id: "about.meta.title", message: '关于我'})} 
      description={translate({id: "about.meta.description", message: '全栈开发工程师的个人简介、技能、经历和联系方式'})}
    >
      <div className="container margin-top--lg margin-bottom--lg">
        <div className={styles.aboutHeader}>
          <div className={styles.aboutIntro}>
            <h1 className={styles.aboutTitle}><Translate id="about.title">关于我</Translate></h1>
            <p className={styles.aboutSubtitle}><Translate id="about.fullstackDeveloper">全栈开发工程师</Translate></p>
            <p className={styles.aboutDescription}>
              <Translate id="about.description">
                9年工作经验，专注于企业级应用开发与架构设计。擅长全栈开发，热衷于学习新技术，有丰富的项目管理经验。
              </Translate>
            </p>
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>9+</div>
                <div className={styles.statLabel}><Translate id="about.stats.experience">年经验</Translate></div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}><Translate id="about.stats.projects">项目</Translate></div>
            </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}><Translate id="about.stats.skills">技能</Translate></div>
              </div>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <img src="/img/head.jpg" alt={translate({id: "about.avatar", message: '个人头像'})} />
          </div>
        </div>
        
        <div className={clsx('row', styles.aboutSection)}>
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>
              <FaBriefcase className={styles.sectionIcon} />
              <Translate id="about.experience">工作经历</Translate>
            </h2>
            
            <div className={styles.experienceList}>
              <Experience 
                period={translate({id: "about.experience.period1", message: '2025.01 - 至今'})}
                company={translate({id: "about.experience.company1", message: '中联智航（北京）科技有限公司'})}
                position={translate({id: "about.experience.position1", message: '全栈工程师'})}
                description={translate({id: "about.experience.description1", message: '负责智慧营地/智慧仓储和智慧完工项目的开发维护。独立完成若依架构项目改造，实现多租户、多营地、引入Redis分布式锁、统一编码及ID生成规则。统一国际化和前端页面样式，提高代码可读性和可扩展性。'})}
                technologies={translate({id: "about.experience.tech1", message: '若依3.8.9、Redission、Vue3、Element-UI Plus、Echarts、DeepSeek'})}
              />
              
              <Experience 
                period={translate({id: "about.experience.period2", message: '2023.07 - 2024.12'})}
                company={translate({id: "about.experience.company2", message: '北京君周科技有限公司'})}
                position={translate({id: "about.experience.position2", message: '工业大数据平台 软件开发工程师'})}
                description={translate({id: "about.experience.description2", message: '负责需求分析与设计，数据库表结构设计，开发服务端代码，对接内外部系统。为新老系统提供解决方案和技术支持，跟进项目进度，进行风险评估，组织评审和验收会议。'})}
                technologies={translate({id: "about.experience.tech2", message: 'SpringCloud、SpringBoot、MyBatis-Plus、MySQL、Swagger、Maven、Vue、ElementUI、ECharts'})}
              />
              
              <Experience 
                period={translate({id: "about.experience.period3", message: '2021.09 - 2023.06'})}
                company={translate({id: "about.experience.company3", message: '北京奇木科技有限公司'})}
                position={translate({id: "about.experience.position3", message: '国网四级安全接入网关 全栈开发工程师'})}
                description={translate({id: "about.experience.description3", message: '负责技术选型、整体架构、仪表盘页面开发和数据集成。独立完成项目架构、仪表盘页面开发设计、ETL数据集成、数据可视化，以及与安全设备的对接和数据采集。'})}
                technologies={translate({id: "about.experience.tech3", message: 'Spring Boot、MyBatis、MySQL、Redis、Vue2、ElementUI、ECharts、Prometheus、Loki、Grafana'})}
              />
                  
              <Experience 
                period={translate({id: "about.experience.period4", message: '2019.09 - 2021.08'})}
                company={translate({id: "about.experience.company4", message: '北京博思廷科技有限公司'})}
                position={translate({id: "about.experience.position4", message: '服务供应链(SSC)-LVR门户 高级开发工程师'})}
                description={translate({id: "about.experience.description4", message: '为LVR提供独立服务，包括菜单管理、角色管理、人员管理、订单生成、订单查询、订单跟进、订单维护、反馈、邮件提醒、物流同步、订单延期、费用结算等功能，满足国际业务需求。'})}
                technologies={translate({id: "about.experience.tech4", message: 'Spring Boot、MyBatis、MySQL、Redis、Vue2、ElementUI、ECharts、Quartz'})}
              />
            </div>
                </div>
              </div>

        <div className={clsx('row', styles.aboutSection)}>
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>
              <AiOutlineProject className={styles.sectionIcon} />
              <Translate id="about.projects">项目经验</Translate>
            </h2>
            <div className={styles.projectList}>
              <ProjectItem 
                title={translate({id: "about.project1.title", message: '智慧仓储系统'})}
                description={translate({id: "about.project1.description", message: '以物联网三维建模与AI决策为核心的企业级解决方案，系统集成核心业务包括仓库管理、库位管理、物料分类、物料管理、供应商管理、客户管理、入库管理、出库管理、库存管理。通过RFID自动识别（准确率99.6%）与数字孪生技术，实现入库效率提升50%、库存周转周期缩短22%的精细化运营。'})}
              />
              <ProjectItem 
                title={translate({id: "about.project2.title", message: '智慧营地系统'})}
                description={translate({id: "about.project2.description", message: '为大型企业提供营地管理解决方案，包括营地人员管理、房间管理、车辆管理、访客管理、考勤管理、餐饮管理等功能。系统通过多租户架构设计，支持多营地并行管理，实现营地资源利用率提升35%，管理效率提升60%。'})}
              />
              <ProjectItem 
                title={translate({id: "about.project3.title", message: '国网四级安全接入网关'})}
                description={translate({id: "about.project3.description", message: '为国家电网提供安全接入网关解决方案，包括设备管理、安全策略管理、日志审计、报表统计等功能。系统通过集中管理和策略下发，实现对网络边界安全的精细化管控，提升安全事件响应速度80%，降低安全风险90%。'})}
              />
              <ProjectItem 
                title={translate({id: "about.project4.title", message: '服务供应链(SSC)-LVR门户'})}
                description={translate({id: "about.project4.description", message: '为LVR提供独立服务，包括菜单管理、角色管理、人员管理、订单生成、订单查询、订单跟进、订单维护、反馈、邮件提醒、物流同步、订单延期、费用结算等功能，满足国际业务需求。'})}
              />
            </div>
                </div>
              </div>
              
        <div className={clsx('row', styles.aboutSection)}>
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>
              <FaCode className={styles.sectionIcon} />
              <Translate id="about.skills">技能专长</Translate>
            </h2>
            <div className={styles.skillsContainer}>
              <SkillCategory
                title={<Translate id="about.frontendDevelopment">前端开发</Translate>}
                icon={<FaReact className={styles.skillCategoryIcon} />}
                skills={['Vue3', 'React', 'Angular', 'ElementUI', 'AntDesign', 'ECharts', 'DataV', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Webpack', 'Vite']}
              />
              <SkillCategory
                title={<Translate id="about.backendDevelopment">后端开发</Translate>}
                icon={<FaJava className={styles.skillCategoryIcon} />}
                skills={['Spring', 'SpringBoot', 'SpringCloud', 'MyBatis-Plus', 'JPA', 'Redis', 'MySQL', 'MongoDB', 'RabbitMQ', 'Kafka', 'Netty', 'Java', 'Node.js']}
              />
              <SkillCategory
                title={<Translate id="about.devOps">DevOps</Translate>}
                icon={<SiDocker className={styles.skillCategoryIcon} />}
                skills={['Jenkins', 'Docker', 'Kubernetes', 'Nginx', 'xxl-job', 'Maven', 'Gradle', 'Git', 'CI/CD', 'Linux', 'Shell']}
              />
              <SkillCategory
                title={<Translate id="about.aiTools">AI工具</Translate>}
                icon={<MdOutlineRocketLaunch className={styles.skillCategoryIcon} />}
                skills={['DeepSeek', 'Dify', 'Ollama', 'Coze', 'Cursor', 'LangChain', 'RAG', '知识库', '智能体']}
              />
              <SkillCategory
                title={<Translate id="about.databases">数据库</Translate>}
                icon={<FaDatabase className={styles.skillCategoryIcon} />}
                skills={['MySQL', 'Redis', 'MongoDB', 'PostgreSQL', 'ElasticSearch', 'Oracle', 'SQL Server', 'Hana']}
              />
              <SkillCategory
                title={<Translate id="about.architecture">架构设计</Translate>}
                icon={<AiOutlineCloudServer className={styles.skillCategoryIcon} />}
                skills={['微服务', '分布式系统', 'DDD', '高并发', '高可用', '负载均衡', '服务网格', 'API网关', '多租户']}
              />
            </div>
                </div>
              </div>
              
        <div className={clsx('row', styles.aboutSection)}>
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>
              <FaGraduationCap className={styles.sectionIcon} />
              <Translate id="about.education">教育背景</Translate>
            </h2>
            <div className={styles.educationItem}>
              <div className={styles.educationPeriod}>2015 - 2017</div>
              <div className={styles.educationContent}>
                <MdSchool className={styles.educationIcon} />
                <h3 className={styles.educationDegree}><Translate id="about.education.degree">本科</Translate></h3>
                <div className={styles.educationSchool}><Translate id="about.education.school">天津工业大学</Translate></div>
                <div className={styles.educationMajor}><Translate id="about.education.major">软件工程</Translate></div>
              </div>
            </div>
            </div>
          </div>

        <div className={clsx('row', styles.aboutSection)}>
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>
              <FaEnvelope className={styles.sectionIcon} />
              <Translate id="about.contact">联系方式</Translate>
            </h2>
            <div className={styles.contactList}>
                    <ContactItem 
                icon={<MdEmail className={styles.contactIcon} />}
                label={translate({id: "about.contact.email", message: '邮箱'})}
                      value="1521170425@qq.com" 
                      link="mailto:1521170425@qq.com"
                    />
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>
                  <BsWechat className={styles.contactIcon} />
                  <Translate id="about.contact.wechat">微信</Translate>
                </span>
                <div className={styles.wechatContainer}>
                  <p><Translate id="about.contact.wechatScan">扫描下方二维码添加</Translate></p>
                  <img src="/img/weChat.jpg" alt={translate({id: "about.contact.wechatQR", message: '微信二维码'})} className={styles.wechatQR} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 