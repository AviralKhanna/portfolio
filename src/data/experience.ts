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
    slug: "razorpay",
    company: "Razorpay",
    role: "Software Intern, AI & Automation",
    location: "Bengaluru, India",
    start: "Sep 2025",
    end: "Present",
    current: true,
    brand: "#3395FF",
    mark: "R",
    logo: "razorpay",
    summary:
      "On Razorpay's AI & Automation core team, building agentic tooling and log-detection systems for one of India's largest payment platforms.",
    bullets: [
      "Designed and deployed an internal log-detection alert automation system processing 10 crore+ logs/day, delivering real-time insights and cutting incident-response latency by ~40% in live scenarios.",
      "Built a fully automated agentic AI workflow using Pidata (agno), Coralogix, DevRev, and Slack integrations to orchestrate multi-step AI decision flows, improving efficiency by 60%.",
      "Diagnosed and fixed production bugs across critical payment products, including core payments, routing, terminals, orders, webhooks, refunds, ledger, and settlements, keeping the systems reliable.",
    ],
    tags: ["Agentic AI", "Automation", "Coralogix", "DevRev", "Python"],
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
      "Founded and lead CCS, a student and faculty product lab that ships real AI products used by more than 1500 people across the university.",
    bullets: [
      "Founded and lead a team of 34 students and 14 faculty with ₹1.5L+ in funding and 1500+ users.",
      "Shipped DASES, a patented agentic AI answer-sheet evaluation system built with OCR, LaTeX parsing, rubric logic, and fine-tuned LLMs via LangGraph, tested on more than 1500 students across Law, CS, and Health Sciences.",
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
