import React from "react";
import Section from "./Section.jsx";

const skills = [
  ["Programming", ["Python", "SQL", "JavaScript", "HTML/CSS", "Git/GitHub"]],
  ["ML / AI", ["scikit-learn", "TensorFlow/Keras", "PyTorch basics", "NLP", "Computer Vision", "LLM evaluation"]],
  ["Data / Analytics", ["pandas", "NumPy", "Matplotlib", "Seaborn", "Model evaluation", "Dashboards"]],
  ["Applied Systems", ["PySpark", "ESP32", "Blynk IoT", "OpenCV", "Ollama/local LLMs", "API workflows"]],
  ["Web / Business Automation", ["Responsive websites", "Forms", "WhatsApp handoff", "Vercel deployment", "SEO basics"]],
  ["Workflow", ["Jupyter", "Colab", "Kaggle", "VS Code", "Reports", "Presentations"]],
];

export default function SkillsMatrix() {
  return (
    <Section id="skills" eyebrow="Skills Matrix" title="A practical toolkit for AI systems and useful software.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(([group, items]) => (
          <div key={group} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="text-lg font-semibold text-ink">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
