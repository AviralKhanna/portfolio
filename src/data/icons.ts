import {
  siRazorpay,
  siLeetcode,
  siGithub,
  siMedium,
  siPython,
  siTypescript,
  siJavascript,
  siReact,
  siNodedotjs,
  siNextdotjs,
  siMongodb,
  siDocker,
  siGit,
  siJupyter,
  siGooglecolab,
  siTailwindcss,
  siGooglegemini,
  siAngular,
  siPostman,
  siPytorch,
  siOpenjdk,
} from "simple-icons";

export type SiIcon = { title: string; hex: string; path: string };

type RawIcon = { title: string; hex: string; path: string };
const mk = (i: RawIcon): SiIcon => ({
  title: i.title,
  hex: `#${i.hex}`,
  path: i.path,
});

/** Company logos (keyed by our own slug). */
export const companyIcons: Record<string, SiIcon> = {
  razorpay: mk(siRazorpay),
};

/** Platform logos. */
export const platformIcons: Record<string, SiIcon> = {
  leetcode: mk(siLeetcode),
  github: mk(siGithub),
  medium: mk(siMedium),
};

/** Tech / tool logos. */
export const techIcons: Record<string, SiIcon> = {
  python: mk(siPython),
  java: mk(siOpenjdk),
  typescript: mk(siTypescript),
  javascript: mk(siJavascript),
  react: mk(siReact),
  node: mk(siNodedotjs),
  next: mk(siNextdotjs),
  mongodb: mk(siMongodb),
  tailwind: mk(siTailwindcss),
  angular: mk(siAngular),
  docker: mk(siDocker),
  git: mk(siGit),
  jupyter: mk(siJupyter),
  colab: mk(siGooglecolab),
  gemini: mk(siGooglegemini),
  postman: mk(siPostman),
  pytorch: mk(siPytorch),
};
