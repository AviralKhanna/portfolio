export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  blurb: string;
  description: string;
  tags: string[];
  year: string;
  category: "AI/ML" | "Full-Stack" | "Research" | "Systems";
  github?: string;
  live?: string;
  demo?: string; // e.g. a live sample / report link
  featured?: boolean;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "dases",
    title: "DASES",
    subtitle: "Descriptive Answer Sheet Evaluation System",
    blurb:
      "A patented agentic AI system that grades handwritten answer sheets from start to finish.",
    description:
      "An agentic AI pipeline for evaluating handwritten exam answers using OCR, LaTeX parsing, rubric-based logic, and fine-tuned LLMs orchestrated via LangGraph. Ships rubric management, stepwise logical grading, natural-language feedback, secure report storage, and admin dashboards. Approved by the university and tested on 1000–1500 students across Law, CS, Health Sciences, and Commerce.",
    tags: ["Agentic AI", "LangGraph", "OCR", "LLMs", "Full-Stack"],
    year: "2024",
    category: "AI/ML",
    featured: true,
    live: "https://www.dasesai.com",
    demo: "https://student.dasesai.com/report/133532d0-8c60-44a6-89ee-9464e8978b2f",
    metrics: [
      { label: "Students tested", value: "1500+" },
      { label: "Patents drafted", value: "2" },
      { label: "Disciplines", value: "4" },
    ],
  },
  {
    slug: "mock-investor-pitch",
    title: "AI-Powered Mock Investor Pitching Platform",
    blurb:
      "A real-time platform to practice pitches against AI investors. Acquired by VertxAI.",
    description:
      "A scalable backend that lets founders practice pitches against simulated investors. Handles real-time audio with OpenAI Whisper for transcription, Google Gemini for investor responses, and ElevenLabs/Google TTS for natural speech, with session management and multi-persona investor simulation. Acquired by VertxAI for internal use.",
    tags: ["Whisper", "Gemini", "ElevenLabs", "WebSockets", "Python"],
    year: "2025",
    category: "AI/ML",
    github: "https://github.com/AviralKhanna/Agentic-AI--Mock-Pitch-Model",
    featured: true,
    metrics: [
      { label: "Outcome", value: "Acquired" },
      { label: "Personas", value: "Multi" },
    ],
  },
  {
    slug: "lexibot",
    title: "LexiBot",
    subtitle: "AI Legal Assistant",
    blurb:
      "SHODH-funded AI assistant for consumer, traffic, and harassment cases.",
    description:
      "An AI-powered legal assistant that provides guidance for consumer, traffic, and women-harassment cases. Built under CCS and awarded the ₹49,000 SHODH Grant for 2025–26.",
    tags: ["LLMs", "NLP", "RAG", "Full-Stack"],
    year: "2025",
    category: "AI/ML",
    featured: true,
    live: "https://lexibot-ai.vercel.app/",
    metrics: [{ label: "Grant", value: "₹49K SHODH" }],
  },
  {
    slug: "bhume",
    title: "BhuMe",
    subtitle: "Cadastral Boundary Correction",
    blurb:
      "Auto-corrects century-old land-boundary maps drifting metres from reality.",
    description:
      "Maharashtra's official cadastral plot outlines, digitised from century-old paper surveys, drift metres from the real fields they describe. BhuMe corrects those boundaries automatically and wraps the algorithm in an interactive web app. It lifts median IoU from 0.61 to 0.88 with 3.35 m centroid error.",
    tags: ["Geospatial ML", "Python", "Optimization"],
    year: "2026",
    category: "AI/ML",
    github: "https://github.com/AviralKhanna/BhuMe",
    metrics: [
      { label: "Median IoU", value: "0.61 → 0.88" },
      { label: "Centroid err", value: "3.35 m" },
    ],
  },
  {
    slug: "audio-mental-health",
    title: "Speech-Driven Autism & Depression Detection",
    blurb:
      "Research on audio-based mental-health diagnostics with PhD scholars.",
    description:
      "Deep-learning systems for audio-based mental-health diagnostics built with Whisper, LLaMA3, CNNs, RNNs, LSTMs, and Transformers. Achieved 90%+ accuracy in autism detection and a 25% improvement in depression detection using continual learning across diverse datasets. Collaboration with PhD scholars at IIIT Delhi and Ulster University.",
    tags: ["Audio ML", "Whisper", "Continual Learning", "Research"],
    year: "2024",
    category: "Research",
    github: "https://github.com/AviralKhanna/Machine-Learning-Models",
    metrics: [
      { label: "Autism acc.", value: "90%+" },
      { label: "Depression", value: "+25%" },
    ],
  },
  {
    slug: "sharpview",
    title: "SharpView",
    subtitle: "Low-Light Image Enhancement",
    blurb:
      "Lightweight image-enhancement tool built from scratch, no OpenCV.",
    description:
      "A standalone low-light image enhancement tool that implements gamma correction, grey-world colour balance, and Gaussian smoothing from scratch, without OpenCV, so it runs on low-end devices. It is wrapped in a Flask backend with a responsive web frontend for real-time enhancement.",
    tags: ["C++/Java", "Flask", "Image Processing"],
    year: "2024",
    category: "Systems",
    github: "https://github.com/AviralKhanna/SharpView",
    metrics: [{ label: "Accuracy", value: "87%" }],
  },
  {
    slug: "sharerider",
    title: "ShareRider",
    subtitle: "Campus Ride Pooling",
    blurb: "Ride-pooling web app for college students, front to back.",
    description:
      "A ride-pooling platform for college students: a React + Vite frontend paired with a Node.js/Express + MongoDB backend handling users, rides, bookings, and notifications.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    year: "2025",
    category: "Full-Stack",
    github: "https://github.com/AviralKhanna/ShareRider-Website",
  },
  {
    slug: "resume-jd-matcher",
    title: "Resume to JD Matcher",
    blurb:
      "An OCR and NLP pipeline that scores how well a resume fits a job description, used by 500+ students.",
    description:
      "An OCR-based ML and NLP pipeline that evaluates how well a resume matches a job description, returning detailed feedback and match scores. Live under CCS and actively used by 500+ students to improve placement readiness.",
    tags: ["NLP", "OCR", "ML"],
    year: "2024",
    category: "AI/ML",
    live: "https://jobfit-analysis-ai.vercel.app/upload",
    github: "https://github.com/AviralKhanna/NLP-Project",
    metrics: [{ label: "Active users", value: "500+" }],
  },
  {
    slug: "internship-evaluator",
    title: "Internship Evaluator",
    subtitle: "UPES Dashboard Prototype",
    blurb:
      "A dashboard that streamlines internship evaluation across the university, scheduled to reach 7000+ users.",
    description:
      "A full-stack dashboard prototype for evaluating and tracking student internships at UPES, built under CCS. It handles submissions, reviews, and reporting, and is scheduled to roll out to 7000+ users.",
    tags: ["React", "Node.js", "Full-Stack"],
    year: "2025",
    category: "Full-Stack",
    live: "https://upes-samarth-internship.vercel.app/login",
    metrics: [{ label: "Scheduled uses", value: "7000+" }],
  },
  {
    slug: "investor-founder-mapping",
    title: "Investor to Founder Mapping",
    subtitle: "VertxAI Matching Engine",
    blurb:
      "An AI system that maps investors to the founders they are most likely to back.",
    description:
      "A matching engine built at VertxAI Labs that maps investors to suitable founders using an ML and NLP pipeline over pitch decks and profile data.",
    tags: ["ML", "NLP", "Matching"],
    year: "2025",
    category: "AI/ML",
    github: "https://github.com/AviralKhanna/founder_to_investor_model",
  },
];
