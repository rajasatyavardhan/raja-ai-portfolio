import React from "react";
import Section from "./Section.jsx";

const skills = [
  ["Programming", ["Python", "JavaScript", "TypeScript", "SQL", "Git/GitHub"]],
  ["ML / AI", ["scikit-learn", "TensorFlow/Keras", "PyTorch", "Hugging Face", "NLP", "Computer Vision"]],
  ["Data / Analytics", ["pandas", "NumPy", "Matplotlib", "Seaborn", "Dashboards", "Model evaluation"]],
  ["Big Data / Cloud", ["PySpark", "HDFS", "GCP VM", "Elasticsearch", "Kibana", "Logstash"]],
  ["Web / Automation", ["React", "Vite", "Tailwind CSS", "Vercel", "Forms", "WhatsApp workflows", "SEO basics"]],
  ["Workflow", ["Colab", "Kaggle", "Jupyter", "VS Code", "Reports", "Presentations"]],
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
