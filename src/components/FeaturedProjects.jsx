import React from "react";
import { featuredProjects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Section from "./Section.jsx";

export default function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Built for real problems, not just clean notebooks.">
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </div>
    </Section>
  );
}
