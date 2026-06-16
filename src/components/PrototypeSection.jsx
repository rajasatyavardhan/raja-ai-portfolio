import React from "react";
import { prototype } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import Section from "./Section.jsx";

export default function PrototypeSection() {
  return (
    <Section id="prototype" eyebrow="In Progress / Applied AI Prototype" title="Product thinking, clearly labeled.">
      <div className="max-w-4xl">
        <ProjectCard project={{ ...prototype, accent: "from-purple-500 to-sky-500" }} />
      </div>
    </Section>
  );
}
