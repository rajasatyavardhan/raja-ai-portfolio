import React from "react";
import Section from "./Section.jsx";

export default function CareerPitch() {
  return (
    <Section id="pitch" eyebrow="Career Fair Pitch" title="The 30-second version.">
      <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-violet-50 p-7 shadow-soft">
        <p className="max-w-4xl text-xl leading-9 text-slate-800">
          "I'm Raja, an AI/ML and Python-focused developer in Ottawa. My strongest work includes MERLIN, a healthcare emergency dispatch simulation; a multimodal AR glasses AI assistant; and big-data flight delay prediction using Spark and cloud analytics. I also build practical business systems, including a live website and lead workflow for a local Ottawa dance studio."
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="quote-chip">Proof over buzzwords.</span>
          <span className="quote-chip">Clear before clever.</span>
          <span className="quote-chip">Useful systems win.</span>
        </div>
      </div>
    </Section>
  );
}
