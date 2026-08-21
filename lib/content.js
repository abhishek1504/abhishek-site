// Central content model for the site. Editing copy, jobs, projects, or
// certifications only ever needs to happen here.

export const site = {
  name: "Abhishek Sharma",
  title: "Forward Deployed Engineer, Full-Stack Engineer & Engineering Manager",
  shortTitle: "Forward Deployed Engineer · Full-Stack Engineer · Engineering Manager",
  location: "Hyderabad, India",
  url: "https://abhisheksharma.dev",
  email: "abhisheksharma.dsc@gmail.com",
  phone: "+91 98112 83725",
  linkedin: "https://www.linkedin.com/in/abhishekmca",
  github: "https://github.com/abhishek1504",
  description:
    "Abhishek Sharma is a Hyderabad-based engineering leader with 17+ years shipping production software for KFC, Kohl's, Tractor Supply, and Gajigesa (Kredivo Group). Forward deployed engineer, full-stack developer, and AVP of Engineering specializing in fintech, mobile, and applied AI.",
  keywords: [
    "Abhishek Sharma",
    "Forward Deployed Engineer",
    "Full-Stack Engineer",
    "Engineering Manager",
    "AVP Engineering",
    "Software Engineering Leader",
    "Fintech Engineering",
    "React Native Developer",
    "Node.js Engineer",
    "Applied AI Engineer",
    "Generative AI Engineer",
    "Agentic AI Engineer",
    "Hyderabad Software Engineer",
    "Kredivo Group",
    "Gajigesa Engineering",
    "Engineering Manager India",
    "Client-Embedded Engineer",
    "Technical Delivery Lead",
  ],
};

export const stats = [
  { num: "17+", label: "Years building & shipping software" },
  { num: "8", label: "Enterprise brands shipped to production" },
  { num: "25K", label: "Monthly active users on my current platform" },
  { num: "99.5%", label: "Crash-free sessions, sustained" },
];

export const pillars = [
  {
    tag: "Forward Deployed Engineer",
    title: "I embed with the client, not just the codebase.",
    desc: "Most of my career has been spent inside client organizations — Cognizant engagements with KFC, Kohl's, Tractor Supply Co., and Wallenius Wilhelmsen — writing code, unblocking stakeholders on-site, and owning delivery against the client's timeline, not a vendor's.",
  },
  {
    tag: "Full-Stack Engineer",
    title: "I ship the interface and the system behind it.",
    desc: "React, React Native, Node.js, Kotlin, AWS, Delphi, Ruby on Rails — whatever the product needed, across seven distinct technology stacks since 2008. I'm equally comfortable in a component tree and a database schema.",
  },
  {
    tag: "Engineering Manager",
    title: "I own outcomes, not just tickets.",
    desc: "As AVP Engineering at Gajigesa (Kredivo Group), I run the full product lifecycle — roadmap, delivery, UX, and performance — for a consumer fintech platform serving 25,000+ monthly active users, reporting directly to the Head of Engineering.",
  },
];

export const evolution = [
  { year: "2008", tech: "Delphi & Firebird" },
  { year: "2011", tech: "iOS · Delphi Prism" },
  { year: "2013", tech: "Objective-C → Titanium" },
  { year: "2016", tech: "Kotlin · Native Android" },
  { year: "2018", tech: "React · React Native" },
  { year: "2022", tech: "Node.js · AWS · CI/CD" },
  { year: "2025", tech: "Generative & Agentic AI" },
];

export const brands = [
  {
    letter: "G",
    color: "#2F5233",
    name: "Gajigesa (Kredivo Group)",
    category: "Fintech · Earned Wage Access",
    role: "AVP – Engineering",
    desc: "Consumer fintech platform serving 25,000+ monthly active users. I own product development, UX design, and performance — React/React Native front end, Node.js backend, AWS infrastructure.",
    highlights: ["99.5% crash-free users", "Apdex 0.9", "25K+ MAU"],
    tech: ["React Native", "React", "Node.js", "AWS", "GitHub Actions", "MongoDB", "Firebase"],
  },
  {
    letter: "KFC",
    color: "#B5502E",
    name: "KFC Multi-Tenant App",
    category: "QSR · Consumer",
    role: "Senior Associate, Cognizant",
    desc: "Multi-tenant web and mobile application for multiple countries (India, Australia) — React web app, React Native mobile app, shared business logic via internal NPM libraries.",
    highlights: ["Multi-country tenancy", "Shared codebase"],
    tech: ["React", "React Native", "NPM Libraries"],
  },
  {
    letter: "K",
    color: "#3B4A8F",
    name: "Kohl's Inventory App",
    category: "Retail · Enterprise",
    role: "Senior Associate, Cognizant",
    desc: "Native Android inventory management app for Zebra OEM enterprise devices, used by store employees to scan and manage inbound inventory.",
    highlights: ["Zebra OEM devices", "In-store operations"],
    tech: ["Kotlin", "Native Android"],
  },
  {
    letter: "TSC",
    color: "#20609C",
    name: "Tractor Supply Co.",
    category: "Retail · E-commerce",
    role: "Senior Associate, Cognizant",
    desc: "Consumer shopping app for one of America's largest rural lifestyle retailers, maintained and enhanced in collaboration with Infosys.",
    highlights: ["Large-scale retail", "Partner delivery"],
    tech: ["React Native"],
  },
  {
    letter: "WWL",
    color: "#1E3A66",
    name: "Wallenius Wilhelmsen",
    category: "Logistics · Shipping",
    role: "Senior Associate, Cognizant",
    desc: "Driver-facing delivery app for a global automotive logistics leader — VIN scanning, proof-of-delivery, digital signature capture. Feature development drove an 80% increase in app engagement.",
    highlights: ["80% engagement lift", "Solo delivery"],
    tech: ["Appcelerator Titanium"],
  },
  {
    letter: "P21",
    color: "#7A5C1E",
    name: "Payroll21",
    category: "HR Tech · Payroll",
    role: "Software Engineer, Ma Foi",
    desc: "Payroll processing product single-handedly managed across 80 units of Hindustan Unilever — engineering through client resolution, month on month.",
    highlights: ["80 business units", "End-to-end ownership"],
    tech: ["Delphi", "Firebird DB"],
  },
];

export const jobs = [
  {
    role: "Assistant Vice President – Engineering",
    company: "Gajigesa (acquired by Kredivo Group)",
    dates: "Oct 2022 – Present",
    current: true,
    bullets: [
      "Own the end-to-end product lifecycle — engineering delivery, UX design, and performance optimization — for a consumer fintech platform, reporting to the Head of Engineering.",
      "Achieved and sustained 99.5% crash-free users and an Apdex score of 0.9 through performance optimization, monitoring, and release quality initiatives.",
      "Drive delivery across a React / React Native front end and Node.js backend on AWS, with CI/CD pipelines on GitHub Actions.",
      "Translate product strategy into technical roadmaps; align stakeholders across product, design, and engineering.",
    ],
    tags: ["React Native", "React", "Node.js", "AWS", "GitHub Actions", "Engineering Management", "Fintech"],
  },
  {
    role: "Head of Mobility",
    company: "Integrum Solutions",
    dates: "May 2022 – Sep 2022",
    bullets: [
      "Spearheaded the mobile development practice; delivered 2 production React Native apps in 4 months.",
      "Managed vendor resourcing and external engineering partners for on-time, on-quality delivery.",
    ],
    tags: ["React Native", "Vendor Management", "Leadership"],
  },
  {
    role: "Manager – Web Engineering",
    company: "Capgemini",
    dates: "Sep 2021 – May 2022",
    bullets: [
      "Designed and built a reusable React.js component library, standardizing UI development and accelerating build time across client web projects.",
    ],
    tags: ["React", "Component Library", "Enterprise"],
  },
  {
    role: "Senior Associate – Projects",
    company: "Cognizant Technology Solutions",
    dates: "Feb 2016 – Aug 2021",
    bullets: [
      "KFC: multi-tenant web + mobile app for India and Australia — React, React Native, shared NPM libraries.",
      "Kohl's: Kotlin native Android inventory app for Zebra OEM enterprise devices.",
      "Tractor Supply Co.: React Native consumer shopping app, in collaboration with Infosys.",
      "Wallenius Wilhelmsen: single-handedly built a driver delivery app — VIN scanning, proof-of-delivery, e-signatures.",
    ],
    tags: ["React Native", "Kotlin", "React", "Retail", "Logistics", "QSR"],
  },
  {
    role: "Senior Software Engineer",
    company: "Accrete Solutions LLC · Gurugram",
    dates: "2013 – 2016",
    bullets: [
      "Migrated an enterprise field-service iPad app from Objective-C to Appcelerator Titanium for a cross-platform codebase.",
      "Built B2B customer-data synchronization services with third-party platforms using Ruby on Rails.",
    ],
    tags: ["Objective-C", "Titanium", "Ruby on Rails"],
  },
  {
    role: "Senior Software Engineer",
    company: "OTS Solutions · Gurugram",
    dates: "2011 – 2012",
    bullets: [
      "Developed iPhone apps on Delphi Prism and laid the foundation of the company's mobility team.",
      "Led a team of engineers to adopt Appcelerator Titanium with ASP.NET backends.",
    ],
    tags: ["iOS", "Titanium", "ASP.NET", "Team Building"],
  },
  {
    role: "Software Engineer – Delivery",
    company: "Ma Foi Consulting",
    dates: "2010 – 2011",
    bullets: [
      "Owned Payroll21 from engineering through client delivery; single-handedly managed 80 units of Hindustan Unilever.",
    ],
    tags: ["Payroll21", "Client Delivery"],
  },
  {
    role: "Software Programmer",
    company: "Topsys Solutions · Bengaluru",
    dates: "2008 – 2010",
    bullets: [
      "Developed and maintained the core salary-processing engine of a desktop payroll product (Delphi 5.0, Firebird DB) used by ING Vysya Bank, Kamat Yatri Nivas, and other enterprise clients.",
    ],
    tags: ["Delphi", "Firebird DB"],
  },
];

export const education = [
  { degree: "PGCP, Generative AI & Agentic AI", school: "IIT Roorkee · with Futurense", year: "2025 – 2026" },
  { degree: "Master of Computer Applications", school: "H.N.B. Garhwal University · IMS Dehradun", year: "2005 – 2008" },
  { degree: "B.Sc. (Hons) Mathematics", school: "University of Delhi", year: "2002 – 2005" },
];

export const featuredProject = {
  eyebrow: "Applied AI · Automation · Live in production",
  name: "AI-powered content automation pipeline",
  desc: "A zero-touch publishing system: raw game data goes in, finished YouTube videos come out — every day, with no manual steps. Built to prove one thing: agentic automation is most valuable when it runs unattended.",
  link: "https://github.com/abhishek1504/chess-pipeline",
  steps: [
    { step: "Fetch", desc: "Pulls the day's game data from a public REST API via scheduled automation. A quality-scoring engine (0–100) filters out low-quality entries — only results scoring ≥ 70 continue." },
    { step: "Render", desc: "Generates two video formats from one run — 1280×720 landscape (full sequence) and 1080×1920 vertical for Shorts — frame-by-frame with Pillow/imageio, encoded via FFmpeg with event-synced audio." },
    { step: "Generate", desc: "Calls the Anthropic Claude API to write titles, descriptions, and hashtags from the structured game data — publish-ready metadata with zero manual editing." },
    { step: "Publish", desc: "Uploads both formats through the YouTube Data API (OAuth 2.0), assigns playlists, cross-links versions, and records everything in a persistent log for idempotent, duplicate-free publishing." },
  ],
  decisions: [
    { decision: "GitHub Actions as the only infrastructure", why: "No servers, no VPS, no cost. Scheduled workflows run the full pipeline daily; the pipeline is stateless — fetch, process, publish, exit." },
    { decision: "Quality score as a publishing gate", why: "Not every result deserves an audience. A 0–100 scoring engine acts as an automated editorial filter, so output stays high quality with zero human review." },
    { decision: "LLM where it earns its place", why: "Claude generates the creative metadata — titles, descriptions, hashtags — where language quality matters. Deterministic code handles everything else." },
    { decision: "Idempotency by design", why: "A committed upload log plus sync tooling means re-runs never duplicate content, and the pipeline can rebuild its state from YouTube itself if the log drifts." },
  ],
  stack: ["Python", "Anthropic Claude API", "YouTube Data API v3", "OAuth 2.0", "FFmpeg", "imageio", "Pillow", "GitHub Actions", "REST APIs", "Cron Scheduling"],
};

export const otherProjects = [
  {
    name: "LangChain & LangGraph Demos",
    desc: "Hands-on demos prototyping core agentic AI patterns — prompt-chained LLM calls with LangChain, and stateful, graph-based orchestration with LangGraph. Models a multi-step recruiting workflow as a LangGraph StateGraph: nodes categorize candidate experience and assess skill match, with conditional edges routing to interview, escalation, or rejection based on graph state.",
    tags: ["LangChain", "LangGraph", "OpenAI", "Python", "Agentic AI", "State Graphs"],
    link: "https://github.com/abhishek1504/langchain_langraph_demo",
  },
];

export const certifications = [
  { name: "Claude Code in Action", issuer: "Anthropic", date: "Jul 2026", id: "j3bvpme8thxb", featured: true },
  { name: "Claude Platform 101", issuer: "Anthropic", date: "Jun 2026", id: "x8d8xb9w6gfj", featured: true },
  { name: "Claude Code 101", issuer: "Anthropic", date: "Jun 2026", id: "2ama2ayudmnr", featured: true },
  { name: "Claude 101", issuer: "Anthropic", date: "Jun 2026", id: "pbew7eofxepx", featured: true },
  { name: "AI & ML", issuer: "IIT Hyderabad Tinkerers' Lab", date: "Mar 2025", id: "5GXW6K24XPWWKBU" },
  { name: "UX Design with AI", issuer: "IIT Hyderabad Tinkerers' Lab", date: "Mar 2025", id: "B69RYEL86h4yl2j" },
  { name: "Kony Certified Developer", issuer: "Kony", date: "Jul 2016", id: "KCD04271671692" },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
