import type { Portfolio } from '../portfolio.types.js';

/**
 * English content, based on Homa Zohdi's résumé. The Persian version is in fa.ts.
 * The frontend picks up changes automatically (within ~60 seconds).
 */
export const en: Portfolio = {
  profile: {
    name: 'Homa Zohdi',
    title: 'Full-Stack Developer',
    tagline: 'Complete web applications, from the database to the browser.',
    summary:
      'I build complete web applications end to end — React and Next.js frontends, Node.js and NestJS backends — including consumer platforms used by tens of thousands of people.',
    location: 'Tehran, Iran',
    email: 'hzhzohdi531@gmail.com',
    phone: '+98 910 160 3927',
    availability: 'Open to new opportunities',
    resumeUrl: '/resume.pdf',
    photo: '/homa-zohdi.jpg',
    socials: [
      { label: 'GitHub', url: 'https://github.com/Homazd', icon: 'github' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/homa-zohdi', icon: 'linkedin' },
      { label: 'Email', url: 'mailto:hzhzohdi531@gmail.com', icon: 'mail' },
    ],
    about: [
      'I have spent 4+ years shipping complete web applications, and I like owning the whole delivery: database and API design with NestJS, Prisma and PostgreSQL, fast server-rendered frontends with Next.js, and Docker-based deployment.',
      'Day to day I work in Agile teams alongside design, backend and product, shipping complete features rather than isolated layers. I care about reusable UI architecture, accessibility (WCAG 2.1) and performance you can measure in Core Web Vitals.',
      'I have also delivered a project entirely on my own for a private client, from gathering requirements and choosing the architecture to design, development and deployment. Before software, I studied electrical engineering, which still shapes how I approach systems.',
    ],
    highlights: [
      { label: 'years shipping web apps', value: '4+' },
      { label: 'faster LCP on a VOD platform', value: '40%' },
      { label: 'higher user retention in a health app', value: '25%' },
      { label: 'patient records managed', value: '10K+' },
    ],
  },

  experience: [
    {
      company: 'WebCasting',
      role: 'Software Engineer',
      location: 'Tehran, on-site',
      start: 'Mar 2024',
      end: 'Present',
      summary:
        'Full-stack work on falaktv.live, a video-on-demand platform, and FalakAI, an AI content creation platform.',
      achievements: [
        'Built the Next.js 15 and TypeScript frontend with SSR/ISR and integrated REST APIs from Node.js/NestJS backend services, delivering a scalable, SEO-friendly experience.',
        'Designed and maintained a reusable component library and optimized SSR/ISR rendering strategies, reducing LCP by 40%.',
        "Reviewed peers' code and helped establish best practices and consistent patterns across the codebase.",
        'Delivered responsive, accessible (WCAG 2.1) features end to end with UX/UI, backend and product teams.',
        'On FalakAI, built features across the frontend and backend, and collaborated on semantic relationships in the knowledge graph, caching, context compaction and workspaces.',
      ],
      stack: ['Next.js 15', 'TypeScript', 'NestJS', 'Node.js', 'SSR / ISR'],
    },
    {
      company: 'Elegant Hoopoe',
      role: 'Frontend Developer',
      location: 'Dubai, remote',
      start: 'Mar 2023',
      end: 'Feb 2024',
      summary: 'A healthcare web app and the CRM panel behind it.',
      achievements: [
        'Developed a healthcare web app with personalized health plans and real-time consultation booking, increasing user retention by 25%.',
        'Built a CRM admin panel that lets operators manage 10K+ patient records efficiently.',
        'Took part in Scrum rituals and code reviews, contributing to stable releases with no critical bugs.',
      ],
      stack: ['Next.js', 'React Query', 'Tailwind CSS', 'Material UI', 'Storybook', 'Orval'],
    },
    {
      company: 'Siz-Tel',
      role: 'Frontend Developer',
      location: 'Tehran, on-site',
      start: 'Jun 2022',
      end: 'Feb 2023',
      summary: 'A customer website redesign and a high-load admin panel.',
      achievements: [
        'Redesigned the customer-facing website, strengthening brand presence and doubling organic traffic.',
        'Engineered a high-throughput admin panel, resolving stability issues under high load.',
      ],
      stack: ['React', 'Mantine', 'Ant Design', 'Tailwind CSS', 'RTK Query', 'Axios'],
    },
    {
      company: 'Hasin Group',
      role: 'Frontend Developer',
      location: 'Tehran, on-site',
      start: 'Jan 2022',
      end: 'May 2022',
      summary: 'Lending tools for customers and operators.',
      achievements: [
        'Built a customer loan dashboard with real-time application tracking, payment schedules and document upload.',
        'Built an admin CRM panel that streamlined operator workflows.',
      ],
      stack: ['React', 'Redux Saga', 'Axios', 'Styled Components'],
    },
  ],

  projects: [
    {
      slug: 'falaktv',
      title: 'FalakTV',
      category: 'Video on demand',
      year: '2024',
      summary:
        'A video-on-demand platform with a fast, SEO-friendly Next.js frontend rendered on the server.',
      description: [
        'FalakTV is a video-on-demand platform built at WebCasting. I built its Next.js 15 frontend in TypeScript, using SSR and ISR so pages load quickly and are easy for search engines to index.',
        'I integrated REST APIs from the Node.js/NestJS backend services and designed a reusable component library that keeps the interface consistent as the product grows.',
      ],
      role: 'Software Engineer at WebCasting: frontend architecture, component library and API integration.',
      outcomes: [
        'Reduced Largest Contentful Paint (LCP) by 40% by reworking SSR/ISR rendering strategies.',
        'Shipped responsive, accessible (WCAG 2.1) features end to end with design, backend and product.',
      ],
      stack: ['Next.js 15', 'TypeScript', 'NestJS', 'Node.js', 'SSR / ISR'],
      featured: true,
      links: { live: 'https://falaklive.com/' },
    },
    {
      slug: 'falakai',
      title: 'FalakAI',
      category: 'AI content creation',
      year: '2026',
      summary:
        'An AI-powered content creation platform that I work on across the frontend and backend.',
      description: [
        'FalakAI is a content creation platform powered by AI, built at WebCasting. I work on both its frontend and its backend.',
        'I collaborated on semantic relationships between content in the knowledge graph (built with Graphiti), caching, context compaction and workspaces.',
      ],
      role: 'Full-stack developer at WebCasting.',
      outcomes: [],
      stack: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Graphiti'],
      featured: true,
      links: { live: 'https://falakai.falaklive.com/' },
    },
    {
      slug: 'vakilzohdi',
      title: 'Legal services website',
      category: 'Freelance, full stack',
      year: '2026',
      summary:
        'A Dockerized website and admin panel for an independent legal practice, built end to end on my own.',
      description: [
        'An independent legal client needed a website where clients can read articles and see when consultations are available. I owned the whole engagement: requirements, architecture, UI/UX decisions, development and deployment, working directly with a non-technical client.',
        'The frontend is built with Next.js and TypeScript; the backend uses NestJS, Prisma and PostgreSQL, and everything runs in Docker.',
      ],
      role: 'Sole full-stack developer, from requirements to deployment.',
      outcomes: [
        'The client publishes articles and manages available consultation hours in real time through the admin panel, without developer help.',
        'Delivered independently, outside primary employment.',
      ],
      stack: ['Next.js', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker'],
      featured: true,
      links: { live: 'https://vakilzohdi.ir' },
    },
    {
      slug: 'healthcare-platform',
      title: 'Healthcare app & CRM',
      category: 'Healthcare',
      year: '2023',
      summary:
        'Personalized health plans and real-time consultation booking, plus a CRM panel for the operations team.',
      description: [
        'At Elegant Hoopoe I developed a healthcare web app where patients follow personalized health plans and book consultations in real time.',
        'Behind it, I built a CRM admin panel with Next.js, React Query, Tailwind CSS and Material UI, with components documented in Storybook and API clients generated with Orval.',
      ],
      role: 'Frontend Developer at Elegant Hoopoe.',
      outcomes: [
        'Increased user retention by 25%.',
        'Operators manage 10K+ patient records efficiently in the CRM panel.',
      ],
      stack: ['Next.js', 'React Query', 'Tailwind CSS', 'Material UI', 'Storybook', 'Orval'],
      featured: false,
      links: { live: 'https://eleganthoopoe.ae/' },
    },
    {
      slug: 'siz-tel',
      title: 'Siz-Tel website & admin panel',
      category: 'Telecom',
      year: '2022',
      summary:
        'A redesigned customer website and an admin panel built to stay stable under heavy load.',
      description: [
        'I redesigned the Siz-Tel customer website with React, Mantine and Ant Design, and engineered a high-throughput admin panel with Tailwind CSS, RTK Query and Axios.',
      ],
      role: 'Frontend Developer at Siz-Tel.',
      outcomes: [
        'Doubled organic traffic to the customer website.',
        'Resolved stability issues under high load.',
      ],
      stack: ['React', 'Mantine', 'Ant Design', 'Tailwind CSS', 'RTK Query'],
      featured: false,
      links: {},
    },
    {
      slug: 'loan-dashboard',
      title: 'Customer loan dashboard',
      category: 'Fintech',
      year: '2022',
      summary:
        'Real-time loan application tracking, payment schedules and document upload for customers.',
      description: [
        'At Hasin Group I built a customer loan dashboard with real-time application tracking, payment schedules and document upload, and an admin CRM panel using React, Axios, Redux Saga and Styled Components.',
      ],
      role: 'Frontend Developer at Hasin Group.',
      outcomes: ['Streamlined operator workflows with a dedicated admin CRM panel.'],
      stack: ['React', 'Redux Saga', 'Axios', 'Styled Components'],
      featured: false,
      links: {},
    },
  ],

  skills: [
    {
      name: 'Frontend',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Next.js 15 (App Router)', 'Redux', 'Zustand', 'React Query', 'RTK Query', 'Axios', 'Orval'],
    },
    {
      name: 'Backend & DevOps',
      skills: ['Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'REST API design', 'Docker', 'Git & GitHub'],
    },
    {
      name: 'UI & design systems',
      skills: ['Component libraries', 'Storybook', 'Tailwind CSS', 'Material UI', 'Sass / SCSS', 'Styled Components', 'Ant Design', 'Mantine', 'shadcn/ui'],
    },
    {
      name: 'Performance & quality',
      skills: ['Core Web Vitals', 'SSR / ISR', 'Code splitting', 'Lazy loading', 'WCAG 2.1', 'Code review', 'Agile / Scrum', 'Jira'],
    },
    {
      name: 'Languages',
      skills: ['Persian (native)', 'English (professional working proficiency)'],
    },
  ],

  education: [
    {
      institution: 'Amirkabir University of Technology',
      degree: 'M.Sc. in Electrical Engineering',
      start: '2017',
      end: '2020',
    },
    {
      institution: 'Shahed University',
      degree: 'B.Sc. in Electrical Engineering',
      start: '2011',
      end: '2015',
    },
  ],

  certifications: [],
};
