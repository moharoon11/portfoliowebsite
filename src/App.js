import './App.css';

const skills = [
  {
    title: 'Backend',
    items: ['C#', 'ASP.NET Core', '.NET 8', 'Web API', 'REST APIs'],
  },
  {
    title: 'Architecture',
    items: ['Middleware', 'Dependency Injection', 'EF Core', 'Dapper', 'LINQ'],
  },
  {
    title: 'Security',
    items: ['JWT', 'AuthN/AuthZ', 'Input validation', 'Hangfire'],
  },
  {
    title: 'Data and Cloud',
    items: ['MySQL', 'PostgreSQL', 'AWS S3', 'DynamoDB'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Swagger', 'Visual Studio', 'VS Code'],
  },
];

const highlights = [
  '1+ year building healthcare backend systems',
  '300+ LeetCode problems solved',
  'RESTful APIs, authentication, and database optimization',
  'AWS S3 and DynamoDB audit logging integrations',
];

const projects = [
  {
    title: 'Database Synchronization ETL Service',
    meta: 'MySQL to PostgreSQL reporting pipeline',
    details:
      'Maintained and enhanced a synchronization service that moves healthcare application data into reporting databases every 3 minutes.',
    tags: ['ETL', 'Batch jobs', 'MySQL', 'PostgreSQL', 'Performance'],
  },
  {
    title: 'Case Assignment API',
    meta: 'Workflow assignment and tracking',
    details:
      'Developed APIs for manual and scheduled auto-assignment of healthcare cases across workflow stages with audit history.',
    tags: ['ASP.NET Core', 'JWT', 'Workflow', 'Audit logs'],
  },
  {
    title: 'PHP to .NET 8 Modernization',
    meta: 'Legacy platform migration',
    details:
      'Migrated PHP modules into .NET 8 APIs while preserving workflows for admin, radiology, imaging center, and patient dashboards.',
    tags: ['.NET 8', 'Migration', 'AWS S3', 'DynamoDB'],
  },
  {
    title: 'DocPanel Platform Workspace API',
    meta: 'Workspace settings and account APIs',
    details:
      'Built and maintained APIs for scheduling preferences, reporting templates, profile management, and notification settings.',
    tags: ['Dapper', 'MySQL', 'Validations', 'Account APIs'],
  },
];

const stats = [
  ['300+', 'DSA problems'],
  ['3 min', 'sync interval'],
  ['.NET 8', 'modern API stack'],
  ['AWS', 'S3 + DynamoDB'],
];

function App() {
  return (
    <main className="portfolio-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#home" aria-label="Mohamed Haroon home">
          <span>MH</span>
        </a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">.NET Backend Developer</p>
          <h1>Mohamed Haroon S</h1>
          <p className="hero-text">
            I build reliable backend APIs, healthcare workflow systems, and data
            synchronization services using ASP.NET Core, C#, Dapper, MySQL,
            PostgreSQL, and AWS.
          </p>
          <div className="hero-actions" aria-label="Contact links">
            <a className="primary-action" href="mailto:moharoon11107@gmail.com">
              Email me
            </a>
            <a className="secondary-action" href="tel:+919360984799">
              Call +91 93609 84799
            </a>
          </div>
          <div className="location-line">
            Madurai, Tamil Nadu - open to relocation
          </div>
        </div>

        <div className="hero-visual" aria-label="Animated backend system visual">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="profile-node">
            <span>MH</span>
            <small>API</small>
          </div>
          <div className="data-card card-one">
            <span className="status-dot" />
            REST APIs
          </div>
          <div className="data-card card-two">
            <span className="status-dot" />
            .NET C#
          </div>
          <div className="data-card card-three">
            <span className="status-dot" />
            SQL Sync
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Career highlights">
        {stats.map(([value, label]) => (
          <div className="stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Professional summary</p>
          <h2>Backend engineer focused on resilient application behavior.</h2>
        </div>
        <div className="summary-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item}>
              <span className="line-icon" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band muted-band" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Technical skills</p>
          <h2>Tools I use to ship APIs, integrations, and data workflows.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Work experience</p>
          <h2>Innovave Healthcare</h2>
        </div>
        <article className="timeline-card">
          <div className="timeline-marker" />
          <div>
            <div className="timeline-topline">
              <h3>.NET Backend Developer</h3>
              <span>Apr 2025 - Present</span>
            </div>
            <p>
              Developed and maintained ASP.NET Core APIs for healthcare
              workflow applications, covering secure authentication,
              transactional database operations, scheduling, reporting
              templates, profile management, notifications, and audit logging.
            </p>
            <p>
              Collaborated with frontend and QA teams to deliver enhancements,
              address UAT feedback, resolve defects, and support releases.
            </p>
          </div>
        </article>
      </section>

      <section className="content-band muted-band" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <h2>Healthcare backend projects with practical production impact.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p>{project.details}</p>
              <div className="chip-list compact">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div>
          <p className="eyebrow">Education</p>
          <h2>Bachelor of Science in Information Technology</h2>
          <p>NMSSVN College, 2020 - 2023</p>
        </div>
        <div className="certification-card">
          <p className="eyebrow">Certification</p>
          <h3>Enterprise Java with Spring Boot</h3>
          <p>
            iNeuron certification covering enterprise applications, REST APIs,
            and microservices architecture.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build reliable backend systems together.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:moharoon11107@gmail.com">moharoon11107@gmail.com</a>
          <a href="tel:+919360984799">+91 93609 84799</a>
        </div>
      </section>
    </main>
  );
}

export default App;
