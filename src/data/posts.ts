export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  tags: string[];
  href: string; // external Medium link
  featured?: boolean;
  views?: number; // from Medium stats
  reads?: number; // from Medium stats
};

/** Posts from medium.com/@projectcsework (views/reads from Medium stats) */
export const posts: Post[] = [
  {
    slug: "andres-freund",
    title: "Andres Freund: The Man Who Saved the Internet",
    excerpt:
      "The engineer who noticed a 0.5-second delay and uncovered the xz backdoor that nearly compromised the entire internet.",
    date: "2024-10-23",
    readingMinutes: 6,
    tags: ["Security", "Open Source", "Tech Story"],
    href: "https://medium.com/@projectcsework/andres-freund-the-man-who-saved-internet-b9de192c63e9",
    featured: true,
    views: 3600,
    reads: 1700,
  },
  {
    slug: "poets-journey-chatgpt",
    title: "A Poet's Journey in the Era of ChatGPT",
    excerpt:
      "A deep dive into how ChatGPT is reshaping literature, poetry, and creativity.",
    date: "2023-11-25",
    readingMinutes: 25,
    tags: ["Literature", "ChatGPT", "Creativity"],
    href: "https://medium.com/@projectcsework/a-poets-journey-in-the-era-of-chatgpt-50dd60481097",
    views: 218,
    reads: 104,
  },
  {
    slug: "wordpress-vs-wpengine",
    title: "Open Source and the WordPress vs WP Engine Controversy",
    excerpt:
      "Unpacking the WordPress and WP Engine fight, and what it really means for open source, contributions, and licensing.",
    date: "2024-09-28",
    readingMinutes: 12,
    tags: ["Open Source", "WordPress", "Technology"],
    href: "https://medium.com/@projectcsework/open-source-and-contributions-the-wordpress-vs-wp-engine-controversy-503fa602f7d5",
    views: 242,
    reads: 28,
  },
  {
    slug: "human-stallions",
    title: "Human Stallions: Racing Tirelessly for Perfection",
    excerpt:
      "A reflection on human curiosity, our relentless drive for perfection, and what it means in the age of AI.",
    date: "2024-02-14",
    readingMinutes: 13,
    tags: ["AI", "Human Curiosity", "Future of AI"],
    href: "https://medium.com/@projectcsework/human-stallions-racing-tirelessly-for-perfection-ca3fd737b8fc",
    views: 43,
    reads: 8,
  },
  {
    slug: "mfcc-deep-learning",
    title: "Extracting MFCC Features Using Deep Learning",
    excerpt:
      "A practical guide to extracting MFCC features for audio and speech-emotion models with deep learning.",
    date: "2024-09-14",
    readingMinutes: 3,
    tags: ["Audio ML", "Deep Learning", "Guide"],
    href: "https://medium.com/@projectcsework/extracting-mfcc-features-using-deep-learning-a-comprehensive-guide-ce5e6dae10b5",
    views: 35,
    reads: 11,
  },
  {
    slug: "necessity-invention-mistakes",
    title: "Necessity, Invention, and the Gift of Mistakes",
    excerpt:
      "How mistakes, not just necessity, drive our greatest discoveries, seen through the lens of AI and chatbots.",
    date: "2024-10-03",
    readingMinutes: 4,
    tags: ["AI", "Psychology", "ChatGPT"],
    href: "https://medium.com/@projectcsework/necessity-invention-and-the-gift-of-mistakes-1c5c4ed2adc5",
    views: 10,
    reads: 3,
  },
  {
    slug: "devops-journey",
    title: "My Journey into DevOps as an AIML Student",
    excerpt:
      "Winning the INT Israel DevOps bootcamp as an AI/ML student, and what containers, CI/CD, and the cloud taught me along the way.",
    date: "2026-07-15",
    readingMinutes: 6,
    tags: ["DevOps", "Docker", "CI/CD"],
    href: "https://medium.com/@projectcsework/my-journey-into-devops-as-an-aiml-student-4a61229e499e",
  },
];
