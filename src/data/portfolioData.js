import lexisNexisImage from '../assets/projects/lexis-nexis.png'
import mcclatchyImage from '../assets/projects/mcclatchy.png'
import wanderlustImage from '../assets/projects/wanderlust.png'

export const personalInfo = {
  name: 'Sumit Raut',
  title: 'Full Stack Software Engineer',
  location: 'Pune, India',
  email: 'sumitraut75147@gmail.com',
  phone: '+91 87882 25037',
  experienceYears: '3+ years',
  resumeHref: '/sumit-raut-resume.pdf',
}

export const heroHighlights = [
  { value: '3+', label: 'Years building enterprise applications' },
  { value: '3 roles', label: 'Career progression at Infosys' },
  { value: '400+', label: 'LeetCode problems solved' },
]

export const skillGroups = [
  {
    title: 'Backend Engineering',
    description: 'API design, service architecture, persistence, and secure application logic.',
    icon: '01',
    skills: [
      'Java',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'Hibernate / JPA',
      'JUnit',
      'Authentication',
      'Authorization',
    ],
  },
  {
    title: 'Frontend Delivery',
    description: 'Reliable interfaces built with reusable components and integration-first thinking.',
    icon: '02',
    skills: [
      'React.js',
      'Redux Toolkit',
      'Axios',
      'Hooks',
      'HTML',
      'CSS',
      'Component Architecture',
      'API Integration',
    ],
  },
  {
    title: 'Cloud, DevOps, Ops',
    description: 'Deployment workflows, production support, and issue resolution in live systems.',
    icon: '03',
    skills: [
      'AWS EC2',
      'AWS S3',
      'Kubernetes',
      'Docker',
      'Bitbucket Pipelines',
      'CI/CD',
      'Kibana',
      'Production Support',
      'Incident Handling',
    ],
  },
  {
    title: 'Tooling & Collaboration',
    description: 'The systems and routines that keep delivery aligned, observable, and maintainable.',
    icon: '04',
    skills: [
      'Git',
      'Postman',
      'Jira',
      'Confluence',
      'Braze',
      'GitHub Copilot',
      'Agile / Scrum',
      'Cross-functional Delivery',
    ],
  },
]

export const experienceTimeline = [
  {
    role: 'Digital Specialist Engineer',
    company: 'Infosys',
    location: 'Pune, India',
    period: 'Sep 2025 - Present',
    focus: 'Scale & Reliability',
    points: [
      'Design and maintain Java and Spring Boot microservices for global digital media platforms with a focus on stability, scalability, and clean service contracts.',
      'Engineer subscription and newsletter renewal workflows that support engagement-driven product experiences across interconnected systems.',
      'Improve REST API performance and service reliability while supporting deployment workflows with Docker and AWS.',
      'Troubleshoot production issues using Kibana and structured log analysis, helping teams restore confidence quickly during live incidents.',
      'Contribute to automated build and release processes through Bitbucket-based CI/CD pipelines and close collaboration with QA and DevOps.',
    ],
  },
  {
    role: 'Senior Systems Engineer',
    company: 'Infosys',
    location: 'Pune, India',
    period: 'Dec 2024 - Aug 2025',
    focus: 'Automation & Operations',
    points: [
      'Developed and maintained secure APIs for customer engagement platforms, ensuring dependable communication between dependent services and campaign tools.',
      'Automated campaign workflows with Braze to reduce manual coordination and improve execution speed for engagement initiatives.',
      'Restructured reusable content management components to improve maintainability and make feature delivery more predictable.',
      'Handled high-priority P1 and P2 production incidents with a calm operational mindset, balancing rapid recovery with root-cause awareness.',
      'Partnered with stakeholders and engineering teams to deliver features without losing sight of reliability and supportability.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Infosys',
    location: 'Pune, India',
    period: 'Jan 2023 - Nov 2024',
    focus: 'Modernization',
    points: [
      'Worked on modernization initiatives that moved legacy Java systems toward modern Java and Spring Boot architecture.',
      'Designed secure backend services with authentication and authorization layers aligned to enterprise application needs.',
      'Built REST APIs that connected backend workflows with frontend experiences and supported smoother integration across teams.',
      'Optimized database queries and service logic to improve application responsiveness and reduce avoidable bottlenecks.',
      'Resolved defects found during testing and UAT while contributing to peer reviews and shared engineering standards.',
    ],
  },
]

export const projects = [
  {
    title: 'Digital Media & Subscription Platform',
    kicker: 'McClatchy',
    description:
      'A large-scale media ecosystem centered on subscription growth, newsletter engagement, and dependable backend-to-frontend communication. My work focused on services and UI flows that helped content and campaign experiences stay fast, integrated, and production-safe.',
    points: [
      'Built backend services for subscription and campaign workflows that had to coordinate cleanly across multiple business-critical systems.',
      'Designed API layers that simplified integration between React applications and backend services, reducing friction for feature teams.',
      'Delivered reusable UI modules and optimized data flow for newsletter-driven engagement journeys.',
      'Supported proactive production monitoring and issue resolution with Kibana while using GitHub Copilot to accelerate well-reviewed implementation work.',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'REST APIs', 'Axios', 'AWS', 'Docker', 'SQL'],
    image: {
      src: mcclatchyImage,
      width: 1680,
      height: 945,
    },
  },
  {
    title: 'Checkpoint Legal Resource Management Portal',
    kicker: 'LexisNexis',
    description:
      'A secure legal resource platform where content access, modular UI composition, and dependable API behavior were essential. The project emphasized maintainable frontend patterns and a service layer that could support role-aware workflows without becoming brittle.',
    points: [
      'Developed secure APIs with role-based access control for sensitive legal content workflows.',
      'Built modular frontend components that improved consistency and made backend integrations easier to scale.',
      'Implemented centralized Axios interceptors for request and error handling to create a cleaner, more resilient client-side architecture.',
      'Contributed to a system design approach that balanced security, usability, and long-term maintainability.',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'Axios', 'RBAC', 'AWS', 'Git', 'SQL'],
    image: {
      src: lexisNexisImage,
      width: 1680,
      height: 945,
    },
  },
  {
    title: 'Wanderlust Travel Management Platform',
    kicker: 'Capstone Product Build',
    description:
      'A full stack travel booking platform designed to bring together browsing, authentication, and reservation workflows in one cohesive product experience. It served as a strong demonstration of end-to-end engineering, from state management to backend integration.',
    points: [
      'Built the application with React and Spring Boot to support booking flows and user account journeys.',
      'Used Redux Toolkit to organize state management for a scalable, easier-to-debug frontend architecture.',
      'Implemented secure authentication and booking modules backed by RESTful service integrations.',
      'Focused on delivering a smooth end-to-end product flow rather than isolated screens or disconnected APIs.',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'Redux Toolkit', 'Hooks', 'MySQL', 'REST APIs'],
    image: {
      src: wanderlustImage,
      width: 1680,
      height: 945,
    },
  },
]

export const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'sumit-raut-3621b0233',
    href: 'https://linkedin.com/in/sumit-raut-3621b0233',
  },
  {
    label: 'LeetCode',
    value: 'sumitraut75147',
    href: 'https://leetcode.com/u/sumitraut75147/',
  },
]
