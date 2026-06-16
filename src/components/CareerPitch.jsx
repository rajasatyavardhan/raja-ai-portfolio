import React from "react";
import Section from "./Section.jsx";

export default function CareerPitch() {
  return (
    <Section id="snapshot" eyebrow="Profile Snapshot" title="The professional version.">
      <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-violet-50 p-7 shadow-soft">
        <p className="max-w-4xl text-xl leading-9 text-slate-800">
          "I'm Raja, an AI/ML and Python-focused developer in Ottawa with hands-on work across LLM evaluation, healthcare AI simulation, multimodal assistants, big-data analytics, computer vision, IoT systems, and business automation. I like building systems that can be explained, tested, demonstrated, and improved."
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="quote-chip">Proof over buzzwords.</span>
          <span className="quote-chip">Clear systems win.</span>
          <span className="quote-chip">Useful before flashy.</span>
        </div>
      </div>
    </Section>
  );
}
