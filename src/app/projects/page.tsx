import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container, PageHeader } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="Projects"
        title="Things I've designed, built, and shipped."
        intro="From patented agentic-AI systems and geospatial ML to full-stack products used by hundreds of people. Click any card for the full write-up."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  );
}
