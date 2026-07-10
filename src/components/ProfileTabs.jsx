import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Section from "./Section.jsx";

const skillGroups = [
  ["Programming", ["Python", "SQL", "JavaScript", "HTML/CSS", "Git/GitHub"]],
  ["ML / AI", ["scikit-learn", "TensorFlow/Keras", "PyTorch basics", "NLP", "Computer Vision", "LLM evaluation"]],
  ["Data / Analytics", ["pandas", "NumPy", "Matplotlib", "Seaborn", "Model evaluation", "Dashboards"]],
  ["Applied Systems", ["PySpark", "ESP32", "Blynk IoT", "OpenCV", "Ollama/local LLMs", "API workflows"]],
  ["Web / Business Automation", ["Responsive websites", "Forms", "WhatsApp handoff", "Vercel deployment", "SEO basics"]],
  ["Workflow", ["Jupyter", "Colab", "Kaggle", "VS Code", "Reports", "Presentations"]],
];

const experience = [
  [
    "AI Annotator / LLM Evaluator - Outlier AI",
    "Freelance contract - LLM evaluation and response-quality analysis - Nov 2025 to Present",
    "Evaluated model outputs for reasoning quality, factual accuracy, hallucinations, safety, tone, clarity, and instruction-following using structured rubrics across text and multimodal tasks.",
  ],
  [
    "Solo Builder - The Dansvilla Studio Website",
    "Live client-style project - Ottawa - Built in ~15 focused hours across 15 days",
    "Designed and shipped a live business website and lead workflow with schedules, pricing, registration logic, studio rentals, social proof, contact paths, and WhatsApp handoff.",
  ],
  [
    "Crew Trainer - Tim Hortons",
    "Ottawa, Ontario - Jan 2024 to Aug 2025",
    "Trained team members, maintained quality and service standards, handled high-volume customer workflows, and built reliable communication, prioritization, and pressure-management habits.",
  ],
  [
    "Customer Service Representative / Operations Support - Biryaniwalla Ottawa",
    "Nepean, Ontario - Jan 2026 to Present",
    "Support daily restaurant operations including order coordination, customer communication, quality checks, and fast service while using the workflow experience to shape practical automation ideas.",
  ],
  [
    "AI/ML Project Developer - Academic + Portfolio Systems",
    "Humber, Sheridan, VIT, and personal projects",
    "Built project work across NLP, computer vision, healthcare simulation, big-data prediction, IoT automation, and generative AI research with reports, demos, notebooks, and repositories as evidence.",
  ],
];

const education = [
  ["Graduate Certificate in Artificial Intelligence with Machine Learning", "Humber Polytechnic"],
  ["Graduate Certificate in IoT with Machine Learning", "Sheridan College"],
  ["B.Tech Information Technology", "VIT"],
];

export default function ProfileTabs() {
  const [tab, setTab] = useState("skills");
  const tabs = [
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["education", "Education"],
  ];

  return (
    <Section id="profile" eyebrow="Professional Profile" title="Skills, experience, and education in one focused view.">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-card">
        <div className="mb-5 flex flex-wrap gap-2 rounded-2xl bg-slate-100 p-1">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                tab === id ? "bg-white text-blue-800 shadow-sm" : "text-slate-600 hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "skills" && (
            <motion.div key="skills" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map(([group, items]) => (
                <div key={group} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <h3 className="font-semibold text-ink">{group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {tab === "experience" && (
            <motion.div key="experience" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="grid gap-4">
              {experience.map(([title, meta, body]) => (
                <div key={title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{meta}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-650">{body}</p>
                </div>
              ))}
            </motion.div>
          )}

          {tab === "education" && (
            <motion.div key="education" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="grid gap-4 md:grid-cols-3">
              {education.map(([degree, school]) => (
                <div key={degree} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-blue-700">{school}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">{degree}</h3>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
