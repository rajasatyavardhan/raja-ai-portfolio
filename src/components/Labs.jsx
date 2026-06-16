import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { labs } from "../data/projects.js";
import Section from "./Section.jsx";

export default function Labs() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="labs" eyebrow="AI/ML Research & Labs" title="Supporting proof, collapsed until needed." className="bg-white/50">
      <div className="grid gap-4">
        {labs.map((project, index) => {
          const active = open === index;
          return (
            <div key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
              <button
                type="button"
                onClick={() => setOpen(active ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">{project.status}</p>
                </div>
                <ChevronDown className={`flex-none text-slate-500 transition ${active ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="border-t border-slate-100 p-5 pt-4">
                      <p className="text-sm leading-7 text-slate-650">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl bg-blue-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Evidence</p>
                          <p className="mt-2 text-sm leading-6 text-blue-950">{project.evidence?.join(", ")}</p>
                        </div>
                        <div className="rounded-2xl bg-slate-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Role fit</p>
                          <p className="mt-2 text-sm leading-6 text-slate-700">{project.roles?.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
