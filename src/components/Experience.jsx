import React from "react";
import Section from "./Section.jsx";

const items = [
  {
    title: "Solo Builder · The Dansvilla Studio Website",
    meta: "Live client-style project · Ottawa · Built in ~15 focused hours across 15 days",
    body:
      "Designed and shipped a live business website and lead workflow with schedules, pricing, registration logic, studio rentals, social proof, contact paths, and WhatsApp handoff.",
  },
  {
    title: "Open Work Permit · Ottawa, Canada",
    meta: "Available for AI/ML, Python, data, and software roles",
    body:
      "Targeting roles where I can build practical AI systems, production-minded Python workflows, analytics tools, automation, and user-facing software.",
  },
  {
    title: "AI/ML Project Developer · Academic + Portfolio Systems",
    meta: "Humber, Sheridan, personal projects",
    body:
      "Built project work across NLP, computer vision, healthcare simulation, big-data prediction, and generative AI research, with reports, demos, notebooks, and repositories as evidence.",
  },
  {
    title: "Capstone Collaborator · Multimodal AR Assistant",
    meta: "Humber Polytechnic capstone",
    body:
      "Contributed to an AI assistant concept for AR glasses using voice, vision, LLM response generation, backend routing concepts, and capstone presentation assets.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Project experience with shipped work and clear proof.">
      <div className="grid gap-5">
        {items.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{item.meta}</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-650">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
