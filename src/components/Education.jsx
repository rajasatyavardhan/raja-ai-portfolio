import React from "react";
import Section from "./Section.jsx";

const schools = [
  ["B.Tech Information Technology", "VIT"],
  ["Graduate Certificate in IoT with Machine Learning", "Sheridan College"],
  ["Graduate Certificate in Artificial Intelligence with Machine Learning", "Humber Polytechnic"],
];

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation across IT, IoT, and AI/ML.">
      <div className="grid gap-5 md:grid-cols-3">
        {schools.map(([degree, school]) => (
          <div key={degree} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <p className="text-sm font-semibold text-blue-700">{school}</p>
            <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{degree}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
