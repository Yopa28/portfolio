// Site Configuration
export const SITE = {
  title: "Sandy Yopa Boangmanalu - Fullstack Engineer",
  description:
    "Fullstack Engineer with experience shipping end-to-end production platforms, securing REST APIs with JWT/RBAC, and integrating real-time payment systems.",
  author: "SANDY YOPA BOANGMANALU ",
  name: "Sandy Yopa Boangmanalu",
  role: "FULLSTACK ENGINEER",
  email: "sandyboangmanalu@gmail.com",
  url: "https://sandyopa.com",
};

// Social Media Links
export const SOCIAL_LINKS = {
  github: "https://github.com/Yopa28",
  linkedin: "https://www.linkedin.com/in/sandyyopa/",
  website: "https://sandyopa.com",
  email: "mailto:sandyboangmanalu@gmail.com",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Projects", targetId: "projects" },
  { name: "Contact", targetId: "contact" },
  { name: "About", href: "/about" },
];

// Hero Section
export const HERO = {
  subtitle: "Hello, I'm",
  title: "Fullstack Engineer",
  description: SITE.description,
  cta: {
    primary: { text: "View My Work", targetId: "projects" },
    secondary: { text: "Get in Touch", targetId: "contact" },
  },
};

// Stats
export const STATS = [
  { number: "2+", label: "Production Platforms" },
  { number: "50+", label: "Secured REST APIs" },
  { number: "3.75", label: "GPA / Telkom University" },
  { number: "100", suffix: "%", label: "Commitment & Precision" },
];

// Projects
export const PROJECTS = {
  sectionLabel: "Selected Work",
  sectionTitle: ["Featured", "Projects"],
  sectionDescription:
    "A selection of end-to-end engineering projects representing my fullstack & mobile development expertise.",
  items: [
    {
      id: 1,
      slug: "kedai-sepijak",
      title: "Kedai Sepijak",
      category: "Fullstack Platform",
      tagline:
        "Full-stack cafe management system with live analytics and automated reporting.",
      description:
        "Shipped a full-stack cafe management platform featuring digital menus, live customer polling, feedback capture, and an admin analytics dashboard.",
      image: "/projects/sepijak.png",
      tags: ["Vue.js 3", "Express.js", "MySQL", "Tailwind CSS"],
      link: "https://sandyopa.com",
      github: "https://github.com/Yopa28",
      overview: {
        purpose:
          "To streamline cafe operations, digitize menus, capture real-time customer feedback, and automate sales reporting.",
        role: "Fullstack Developer (Freelance)",
        status: "Production",
      },
      problemStatement:
        "The client lacked access control and relied on manual spreadsheet reporting for daily cafe operations and sales analytics.",
      solution:
        "Developed 38 REST API endpoints with JWT authentication and bcrypt hashing to close security gaps, integrated Chart.js for real-time sales analytics, and implemented jsPDF for automated one-click report generation.",
      architecture: {
        frontend: "Vue.js 3 Composition API, Tailwind CSS, Chart.js",
        backend: "Express.js REST API",
        database: "MySQL",
        deployment: "Production Server",
        reasons:
          "Vue 3 Composition API provided a responsive UI for analytics, while Express.js with MySQL handled 38 REST API endpoints reliably.",
      },
      features: [
        "Digital menu and live customer polling/feedback capture",
        "Interactive admin analytics dashboard with Chart.js integration",
        "JWT Authentication and bcrypt hashing across 6 modules",
        "Automated one-click PDF report generation via jsPDF",
      ],
      challenges: [
        {
          challenge:
            "Eliminating manual spreadsheet reporting while establishing non-existent access control.",
          solution:
            "Built an automated jsPDF report exporter and introduced JWT auth + bcrypt hashing to secure access across all endpoints.",
        },
      ],
      impact:
        "Successfully enabled the client's commercial launch and eliminated manual spreadsheet reporting.",
    },
    {
      id: 2,
      slug: "cashwave",
      title: "Cashwave POS",
      category: "Web & Admin Dashboard",
      tagline:
        "Point of Sale system admin dashboard with RBAC and relational reporting.",
      description:
        "Admin web dashboard for retail vendors to manage daily transactions, roles, and automated financial reconciliations.",
      image: "/projects/dashboard.png",
      tags: ["Laravel", "Blade", "Bootstrap", "MySQL", "Sanctum"],
      link: "https://sandyopa.com",
      github: "https://github.com/Yopa28",
      overview: {
        purpose:
          "To provide retail vendors with an administrative core for inventory management, transaction monitoring, and role management.",
        role: "Fullstack Developer (Intern - Diskominfo Dairi)",
        status: "Production",
      },
      problemStatement:
        "Retail vendors faced challenges with manual reconciliation at end-of-day closing and required fine-grained access control across different operational roles.",
      solution:
        "Built a Laravel POS admin dashboard backed by 16 REST API endpoints secured with Laravel Sanctum and RBAC, enforcing least-privilege access across admin, cashier, and vendor roles.",
      architecture: {
        frontend: "Laravel Blade, Bootstrap",
        backend: "Laravel, REST APIs (Laravel Sanctum)",
        database: "MySQL",
        deployment: "Local Government / Cloud Server",
        reasons:
          "Laravel provided a robust foundation for rapid RBAC security enforcement and structured relational database operations.",
      },
      features: [
        "Role-Based Access Control (RBAC) enforcing least-privilege policies",
        "Secured 16 REST API endpoints using Laravel Sanctum",
        "Automated end-of-day closing and revenue tracking dashboards",
        "Comprehensive relational reporting for vendor transactions",
      ],
      challenges: [
        {
          challenge:
            "Preventing unauthorized administrative access across various vendor roles.",
          solution:
            "Designed a clean schema with strict RBAC policies using Laravel Sanctum to segregate cashier, vendor, and admin capabilities.",
        },
      ],
      impact:
        "Removed manual daily reconciliation steps for retail vendors and streamlined access control.",
    },
    {
      id: 3,
      slug: "cashwave-mobile",
      title: "Cashwave Mobile",
      category: "Mobile Application",
      tagline: "Offline-first POS companion app with QRIS payment integration.",
      description:
        "Mobile POS application built with Flutter BLOC architecture featuring local caching and real-time Midtrans QRIS payment integration.",
      image: "/projects/CashWave.jpg",
      tags: ["Flutter", "Dart", "BLOC", "Midtrans API"],
      link: "https://sandyopa.com",
      github: "https://github.com/Yopa28",
      overview: {
        purpose:
          "To empower cashiers and vendors with a mobile POS system capable of operating seamlessly during network interruptions.",
        role: "Mobile Developer (Intern - Diskominfo Dairi)",
        status: "Production",
      },
      problemStatement:
        "Transaction drops and poor internet connectivity at vendor locations frequently interrupted order processing and payments.",
      solution:
        "Engineered an offline-first mobile client using Flutter BLOC (13+ states) with local caching and integrated Midtrans API for automated QRIS payments.",
      architecture: {
        frontend: "Flutter, Dart (BLOC State Management)",
        backend: "Laravel REST APIs, Midtrans Payment Gateway",
        database: "Local Caching (SQLite/Hive)",
        deployment: "Android / Production Mobile",
        reasons:
          "Flutter BLOC provided predictable state management across 13+ app states, essential for offline transaction syncing.",
      },
      features: [
        "Offline-first architecture enabling reliable order sync when offline",
        "Integrated Midtrans API for seamless QRIS digital payments",
        "Predictable state management handling 13+ distinct app states",
        "Real-time daily revenue tracking for cashiers",
      ],
      challenges: [
        {
          challenge:
            "Handling network drops mid-transaction without losing order data.",
          solution:
            "Implemented an offline-first local caching mechanism that queues vendor orders and automatically syncs them when connectivity resumes.",
        },
      ],
      impact:
        "Ensured uninterrupted point-of-sale processing for retail vendors regardless of network stability.",
    },
  ],
};

// Contact
export const CONTACT = {
  sectionLabel: "Get in Touch",
  sectionTitle: ["Let's Work", "Together"],
  description: "Open to Remote opportunities and Relocation.",
  methods: [
    {
      icon: "email",
      label: "Email",
      value: SITE.email,
      link: `mailto:${SITE.email}`,
    },
    {
      icon: "github",
      label: "GitHub",
      value: "github.com/Yopa28",
      link: SOCIAL_LINKS.github,
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/sandyyopa",
      link: SOCIAL_LINKS.linkedin,
    },
    {
      icon: "website",
      label: "Website",
      value: "sandyopa.com",
      link: SOCIAL_LINKS.website,
    },
  ],
};

// About Page
export const ABOUT = {
  pageLabel: "About",
  pageTitle: ["Fullstack", "Engineer"],
  intro: `Hi, I'm ${SITE.name}, a Fullstack Engineer who has shipped 2 production platforms end-to-end—from database schema design to deployed UI. Graduated with a Bachelor's degree in Informatics Engineering from Telkom University (GPA: 3.75/4.00), specializing in securing REST APIs and engineering offline-first mobile applications.`,
  paragraphs: [
    "Over my journey, I have designed and deployed full-stack systems using Laravel, Express.js, Vue.js, and Flutter. I focus heavily on security (JWT, RBAC, bcrypt), payment gateway integration (Midtrans), and smooth user experience.",
    "From building cafe management systems to delivering Point of Sale solutions for local government initiatives (Dinas Komunikasi dan Informatika), I bridge complex backend logic with responsive frontend implementations.",
    "I hold a Junior Cyber Security certification from BNSP and actively apply secure coding principles, regression testing, and AI-assisted development techniques to my workflow.",
  ],
  stats: [
    { number: "2+", label: "Production Platforms" },
    { number: "50+", label: "Secured REST APIs" },
    { number: "3.75", label: "GPA / Telkom University" },
  ],
  skills: {
    sectionLabel: "Expertise",
    sectionTitle: "Skills",
    categories: [
      {
        title: "Languages & Frameworks",
        items: [
          "JavaScript / TypeScript",
          "PHP / Laravel",
          "Vue.js 3 / Vuex",
          "Node.js / Express.js",
          "Dart / Flutter (BLOC)",
          "Python / Go",
        ],
      },
      {
        title: "Databases & Architecture",
        items: [
          "MySQL / Schema Design",
          "MongoDB",
          "RESTful API Development",
          "JWT / RBAC / Sanctum Security",
          "Offline-first Architecture",
        ],
      },
      {
        title: "Tools & Testing",
        items: [
          "Git / GitHub / Postman",
          "Docker",
          "Midtrans API Integration",
          "Figma UI/UX Design",
          "Regression & Manual Testing",
        ],
      },
      {
        title: "Certifications & Soft Skills",
        items: [
          "BNSP Junior Cyber Security",
          "AI-Assisted Development / Prompting",
          "Problem Solving & Debugging",
          "Team Collaboration & Leadership",
        ],
      },
    ],
  },
  experience: {
    sectionLabel: "Journey",
    sectionTitle: "Experience",
    timeline: [
      {
        date: "Sept 2025 - Jan 2026",
        title: "Fullstack Developer (Freelance)",
        company: "Kedai Sepijak",
        description:
          "Shipped a full-stack cafe management platform featuring digital menus, live analytics, and automated PDF report generation using Vue.js 3, Express.js, and MySQL. Secured 38 REST API endpoints with JWT + bcrypt.",
      },
      {
        date: "Jul 2025 - Aug 2025",
        title: "Fullstack Developer (Intern)",
        company: "Dinas Komunikasi dan Informatika, Dairi",
        description:
          "Built a Point of Sale system with a Laravel admin dashboard and Flutter mobile app. Secured 16 REST APIs with Sanctum/RBAC, built offline-first mobile architecture (BLOC), and integrated Midtrans QRIS payments.",
      },
      {
        date: "Jan 2025 - Dec 2025",
        title: "Coordinator of E-Football Division",
        company: "Telkom University Esports",
        description:
          "Coordinated tournament activities, member registration, and operational planning while collaborating across organizational divisions.",
      },
    ],
  },
  cta: {
    title: "Let's Work Together",
    description: "Open to remote opportunities and relocation worldwide.",
    buttonText: "Get in Touch",
    buttonLink: "/#contact",
  },
};
