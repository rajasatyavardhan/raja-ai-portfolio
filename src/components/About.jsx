import React from "react";
import Section from "./Section.jsx";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="My story, kept useful.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
          <p className="text-lg leading-8 text-slate-700">
            My background starts in Information Technology, where I built the foundation for software, databases, systems, and problem solving. I then moved deeper into connected systems through IoT with Machine Learning, and continued into Artificial Intelligence with Machine Learning to focus on practical AI development.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Today, I build projects that connect models with real workflows: healthcare simulations, multimodal assistants, big-data prediction, NLP, computer vision, and client-facing business automation. I care about making the work understandable, testable, and honest.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Problem first", "I start with the decision, workflow, or user pain before picking tools."],
            ["Proof second", "Metrics, demos, screenshots, reports, and repos matter more than buzzwords."],
            ["Buzzwords last", "AI is useful when it improves a real process. Otherwise, it is just expensive autocomplete."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm">
              <h3 className="font-semibold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
