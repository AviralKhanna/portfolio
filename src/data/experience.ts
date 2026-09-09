export type Experience = {
  slug: string;
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  current?: boolean;
  brand: string; // company brand color (hex)
  mark: string; // short monogram / logo text (fallback when no logo)
  logo?: string; // key into companyIcons for a real logo
  summary?: string;
  bullets: string[];
  tags?: string[];
  link?: string;
};

export const experience: Experience[] = [
  {
  "slug": "teknikoz",
  "company": "Teknikoz Software Private Limited",
  "role": "Full Stack Developer",
  "start": "Jul 2026",
  "end": "Present",
  "current": true,
  "brand": "#8b5cf6",
  "mark": "T",
  "summary": "Building AI-enabled web applications, full-stack products, backend services and third-party integrations.",
  "bullets": [
    "Develop and enhance full-stack applications and CRM workflows across frontend, backend, REST APIs and integrations.",
    "Build features, resolve bugs and connect AI/LLM capabilities across the software development lifecycle."
  ],
  "tags": [
    "Full-Stack",
    "REST APIs",
    "AI / LLM",
    "Integrations"
  ]
},
  {
  "slug": "razorpay",
  "company": "Razorpay",
  "role": "Intern, Product Support Engineering",
  "location": "Bengaluru, India",
  "start": "Sep 2025",
  "end": "Jun 2026",
  "current": false,
  "brand": "#3395FF",
  "mark": "R",
  "logo": "razorpay",
  "summary": "Built merchant-operation automation, AI triage and monitoring tools alongside PGOS production development: 306 automated fixes, 98 ReKYC resets, and about 93 hours saved.",
  "bullets": [
    "Contributed to PGOS production development and payment-flow reliability; automated workflows across payments, webhooks, refunds, ledger and settlements.",
    "Built six shell scripts with merchant-state API routing, pre-flight checks, dry-run support and 50+ field aliases. Automated 306 data fixes and 98 ReKYC resets, saving approximately 93 hours.",
    "Built skills:merchant-pse, triggered on ticket creation to fetch live merchant state and diagnose onboarding issues. Recorded 231 invocations, with approximately 90-second triage.",
    "Handled 420 tickets with 280 solo resolutions and a 92.1% SLA hit rate in the onboarding report.",
    "Reduced Post Payments volume from 500+ to 40 tickets per month through automation, code optimization and root-cause fixes.",
    "Built Coralogix-integrated AI monitoring processing approximately 10 million logs per day, reducing response latency by about 40%."
  ],
  "tags": [
    "PGOS",
    "API Design",
    "Shell Automation",
    "AI Triage",
    "Coralogix",
    "DevRev"
  ],
  "link": "/razorpay"
},
  {
    slug: "ccs",
    company: "CCS (Cognito Continuum Society)",
    role: "Founder & Technical Head",
    location: "UPES, Dehradun",
    start: "Apr 2023",
    end: "Present",
    current: true,
    brand: "#10b981",
    mark: "C",
    link: "https://cognito-continuum-society.vercel.app/",
    summary:
      "Founded and lead CCS, a student and faculty product lab whose initiatives reached 5,000+ users.",
    bullets: [
      "Founded and lead a team of 140+ students and 20 faculty with ₹1.5L+ in funding and 5,000+ users.",
      "Shipped DASES, an agentic AI answer-sheet evaluation system with two patents drafted built with OCR, LaTeX parsing, rubric logic, and fine-tuned LLMs via LangGraph, tested on more than 1500 students across Law, CS, and Health Sciences.",
      "Built a Resume to JD Matcher (500+ active users), an Internship Evaluator portal, a UPES custom chatbot on graph databases, and LexiBot, a SHODH-funded legal assistant.",
    ],
    tags: ["Agentic AI", "LangGraph", "OCR", "Leadership", "Full-Stack"],
  },
  {
    slug: "vertxai",
    company: "VertxAI Labs",
    role: "AI/ML Software Developer Engineer Intern",
    location: "Remote",
    start: "Apr 2025",
    end: "Sep 2025",
    brand: "#8b5cf6",
    mark: "V",
    summary:
      "Built and deployed agentic AI products across the investor and founder ecosystem, serving 500+ users and earning an extended tenure.",
    bullets: [
      "Developed agentic AI models for investor to founder and multimedia mapping using fine-tuned Gemini, GPT-4, Claude, and Whisper, reaching 96.54% input-understanding accuracy via a full ML/NLP pipeline.",
      "Built and deployed four AI tools, an email automation agent, an investor to founder matcher, an AI pitch-deck generator, and a pitch evaluator, boosting workflow efficiency by 87%.",
      "Served 500+ users and cut monthly database-call costs 20%+ via caching and distributed-systems design, earning an extended tenure and performance incentives.",
    ],
    tags: ["Gemini", "GPT-4", "Whisper", "NLP", "System Design"],
  },
  {
    slug: "ibm",
    company: "IBM",
    role: "Project Development Intern",
    start: "Jun 2025",
    end: "Jul 2025",
    brand: "#0F62FE",
    mark: "IBM",
    summary:
      "Worked in a team on deep-learning models for vehicle automation, pushing object detection and scene understanding to 98%+ accuracy.",
    bullets: [
      "Collaborated in a team of 5 on deep-learning models for vehicle automation, focused on accuracy and system efficiency.",
      "Improved object detection, alerts, and scene understanding with YOLOv11, depth analysis, and custom algorithms, reaching 98.3% accuracy.",
      "Benchmarked CNN, RNN, and Transformer architectures on a custom 15,000-image dataset at 87%+ train-test accuracy.",
    ],
    tags: ["YOLOv11", "Computer Vision", "Deep Learning"],
  },
  {
    slug: "hakencreuz",
    company: "Hakencreuz Innovations",
    role: "Web Development & ML Engineer Intern",
    start: "Jan 2025",
    end: "Mar 2025",
    brand: "#f59e0b",
    mark: "H",
    summary:
      "Optimized ML models and built MERN-stack interfaces, integrating models into production web applications.",
    bullets: [
      "Optimized existing ML models to improve inference speed and reduce resource usage across deployments.",
      "Built intuitive front-end interfaces with the MERN stack and integrated ML models into web applications.",
    ],
    tags: ["MERN", "React", "ML"],
  },
  {
    slug: "research-iiitd-ulster",
    company: "IIIT Delhi · Ulster University",
    role: "ML Research Collaborator (with PhD scholar)",
    start: "Nov 2023",
    end: "Apr 2024",
    brand: "#e11d48",
    mark: "◆",
    summary:
      "Collaborated with PhD scholars on speech-driven mental-health diagnostics, reaching 90%+ accuracy in autism detection.",
    bullets: [
      "Developed deep-learning models with Whisper, LLaMA3, CNNs, RNNs, LSTMs, and Transformers for speech-driven mental-health assessment.",
      "Achieved 90%+ accuracy in autism detection and improved depression detection by 25% through continual learning on diverse datasets.",
      "Extracted MFCCs, spectrograms, and pitch contours, and applied adaptive techniques to handle inter-speaker variability.",
    ],
    tags: ["Research", "Whisper", "Audio ML", "Continual Learning"],
  },
];
