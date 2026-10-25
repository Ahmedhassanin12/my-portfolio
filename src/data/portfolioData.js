// Local portfolio content and asset imports.
// Replaces external Sanity CMS dependency with zero-latency bundled local hosting.

import complexUiImg from "../assets/about/complex-ui.png";
import reactNextImg from "../assets/about/react-nextjs.png";
import designSystemsImg from "../assets/about/design-systems.png";

import chatAppImg from "../assets/projects/chat-app.png";
import quranPlayerImg from "../assets/projects/quran-player.png";
import xciteStoreImg from "../assets/projects/xcite-store.png";
import musicPlayerImg from "../assets/projects/music-player.png";
import recipeAppImg from "../assets/projects/recipe-app.png";

export const profileData = {
  name: "Ahmed Ibrahim",
  roles: ["Frontend Developer", "React & Next.js Specialist"],
  location: "Alexandria, Egypt",
  email: "ahmedhassanin1891@gmail.com",
  phone: "+201025629429",
  lead: "Frontend Developer with 3+ years building scalable React and Next.js applications. Specialized in complex UI systems including real-time features, drag-and-drop interfaces, and performance optimization.",
  heroStack: ["Next.js", "React", "TypeScript", "TanStack Query", "Tailwind"],
  socialLinks: [
    { id: "github", label: "GitHub", href: "https://github.com/Ahmedhassanin12" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedhassanin12/" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ahmed_ibrahim72/" },
  ],
};

export const aboutData = [
  {
    id: "about-complex-ui",
    title: "Complex UI & Real-Time Systems",
    description:
      "Specialized in interactive frontend systems including Slack-style real-time messaging, Jira-style drag-and-drop Kanban modules using dnd-kit, and optimistic state synchronization.",
    image: complexUiImg,
  },
  {
    id: "about-react-next",
    title: "React & Next.js Architecture",
    description:
      "Engineering scalable web applications using Next.js, TypeScript, TanStack Query for server state caching, Redux Toolkit / Zustand for global data flows, and strict schema validation.",
    image: reactNextImg,
  },
  {
    id: "about-design-systems",
    title: "Design Systems & Web Platforms",
    description:
      "Delivering production-grade component libraries (Tailwind, MUI, Shadcn, SASS), Google Maps API integrations, and robust multi-device responsive platforms across e-commerce and real-estate.",
    image: designSystemsImg,
  },
];

export const projectsData = [
  {
    id: "work-quran-player",
    title: "Quran-player",
    description:
      "Responsive Quran audio player with modern React architecture, asynchronous data fetching, and global state management via Redux Toolkit. Built with a clean Tailwind CSS UI.",
    tags: ["React", "Web App"],
    image: quranPlayerImg,
    projectLink: "https://quranplayer.vercel.app/",
    codeLink: "https://github.com/Ahmedhassanin12/Quran-player",
    isArchitecturePreview: false,
  },
  {
    id: "work-chat-app",
    title: "Real-Time Chat Application",
    description:
      "Real-time communication platform with user authentication, live messaging channels, and direct messaging built using Firebase services and responsive SASS architecture.",
    tags: ["React",  "Web App"],
    image: chatAppImg,
    projectLink: "https://ahmedchat-app.netlify.app/",
    codeLink: "https://github.com/Ahmedhassanin12/Chat-App",
    isArchitecturePreview: false,
  },
  
  {
    id: "work-xcite-store",
    title: "X-cite Clone (E-Commerce)",
    description:
      "Full-featured e-commerce frontend integrated with Firebase. Features product catalog browsing, search, persistent shopping cart, favorites via localStorage, and dynamic UI interactions.",
    tags: ["React", "Redux",],
    image: xciteStoreImg,
    projectLink: "https://droobas.github.io/X-Cite-User/",
    codeLink: "https://github.com/Ahmedhassanin12/X-Cite-User",
    isArchitecturePreview: false,
  },
  {
    id: "work-music-player",
    title: "LYRIKS Music Player",
    description:
      "High-performance music streaming application built with React and Redux Toolkit, featuring audio playback controls, lyric synchronization, and Shazam Core API discovery.",
    tags: ["React", "Redux", "Web App"],
    image: musicPlayerImg,
    projectLink: "https://ahmed-lyriks.netlify.app/",
    codeLink: "https://github.com/Ahmedhassanin12/music-player",
    isArchitecturePreview: false,
  },
  {
    id: "work-recipe-app",
    title: "Recipe Cooking Assistant",
    description:
      "Interactive recipe discovery platform featuring dynamic ingredient and serving size recalculation, custom recipe bookmarking, and local storage persistence.",
    tags: ["JavaScript", "REST API"],
    image: recipeAppImg,
    projectLink: "https://recipe-ahmedibrahim.netlify.app/",
    codeLink: "https://github.com/Ahmedhassanin12/recipe-app",
    isArchitecturePreview: false,
  },
];

export const skillsData = [
  { name: "React", category: "Core" },
  { name: "TypeScript", category: "Core" },
  { name: "Next.js", category: "Core" },
  { name: "JavaScript", category: "Core" },
  { name: "Redux Toolkit", category: "State & Data" },
  { name: "TanStack Query", category: "State & Data" },
  { name: "Zod", category: "State & Data" },
  { name: "Zustand", category: "State & Data" },
  { name: "Tailwind CSS", category: "UI & Styling" },
  { name: "Shadcn UI", category: "UI & Styling" },
  { name: "Material UI", category: "UI & Styling" },
  { name: "Sass", category: "UI & Styling" },
  { name: "dnd-kit", category: "Interactive UI" },
  { name: "React Native", category: "Mobile" },
  { name: "Firebase", category: "Backend / Real-Time" },
  { name: "REST API", category: "Architecture" },
  { name: "Git", category: "Tooling" },
];

export const experiencesData = [
  {
    year: "2023 – Present",
    works: [
      {
        id: "nweave",
        name: "Frontend Developer",
        company: "Nweave Software Development",
        location: "Alexandria, Egypt",
        period: "03/2023 – Present",
        desc: "Architecting real-time collaboration tools, Jira-style task boards, and enterprise real estate platforms.",
        highlights: [
          "Built a Slack-style internal communication system with real-time channels and direct messages, enabling team collaboration.",
          "Developed a Jira-style task management module with kanban boards, drag-and-drop cards (dnd-kit), assignment, and status tracking.",
          "Architected and delivered the frontend of a real estate platform connecting buyers, sellers, and agents across web and mobile viewports.",
          "Integrated Google Maps API to display property locations and nearby amenities, increasing listing engagement with rich geographic context.",
          "Built an advanced search and filtering system with 10+ criteria, enabling targeted property discovery.",
          "Collaborated with backend developers to integrate RESTful APIs for real-time listings, optimistic UI updates, and seamless data sync.",
          "Ensured full cross-device responsiveness across mobile, tablet, and desktop viewports.",
        ],
      },
    ],
  },
  {
    year: "2022 – 2023",
    works: [
      {
        id: "startup-defenders",
        name: "Frontend Developer (React & Next)",
        company: "Startup Defenders",
        location: "Cairo, Egypt",
        period: "10/2022 – 03/2023",
        desc: "Shipped core production features and standardized reusable UI component libraries for fast-paced startup products.",
        highlights: [
          "Delivered multiple production features in a fast-paced startup environment using React, Next.js, and TypeScript.",
          "Built reusable UI component libraries, reducing feature development time by standardizing design patterns.",
          "Participated in the full development lifecycle — from design handoff to testing and deployment — shipping features on tight deadlines.",
        ],
      },
    ],
  },
  {
    year: "2022",
    works: [
      {
        id: "iti-internship",
        name: "Frontend Developer (Internship)",
        company: "Information Technology Institute (ITI)",
        location: "Alexandria, Egypt",
        period: "04/2022 – 07/2022",
        desc: "Completed an intensive engineering track focusing on modern JavaScript, React ecosystem, and cross-platform mobile development.",
        highlights: [
          "Frontend and cross-platform mobile developer building modern web and mobile applications.",
          "Specialized in modern ES6+, React component architecture, and state management patterns.",
        ],
      },
    ],
  },
];

export const educationData = [
  {
    degree: "B.A.",
    institution: "Alexandria University, Egypt",
    period: "2014 – 2018",
  },
];

export const certificatesData = [
  {
    title: "Professional Front-End Web Development Nanodegree Program",
    issuer: "Udacity",
  },
  {
    title: "The Complete JavaScript Course 2022: From Zero to Expert!",
    issuer: "Udemy",
  },
  {
    title: "Angular Development Cross Skilling",
    issuer: "ITI",
  },
];
