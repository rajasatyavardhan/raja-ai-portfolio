import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Ambulance,
  BrainCircuit,
  ChevronRight,
  DoorOpen,
  ExternalLink,
  Glasses,
  MessageSquareText,
  PhoneCall,
  Plane,
  ScanFace,
  Sparkles,
  X,
} from "lucide-react";
import { featuredProjects, labs, prototype } from "../data/projects.js";
import Section from "./Section.jsx";

const visualIcon = {
  merlin: Ambulance,
  flight: Plane,
  ar: Glasses,
  nlp: MessageSquareText,
  vision: ScanFace,
  dansvilla: Sparkles,
  smartdoor: DoorOpen,
  frontmate: PhoneCall,
  default: BrainCircuit,
};

function normalizeProject(project, tier, index) {
  const lower = project.title.toLowerCase();
  let visualType = project.visualType || "default";

  if (lower.includes("smart door") || lower.includes("visitor monitoring")) visualType = "smartdoor";
  if (lower.includes("sign language")) visualType = "vision";
  if (lower.includes("hate speech") || lower.includes("sentiment")) visualType = "nlp";
  if (lower.includes("chest")) visualType = "vision";
  if (lower.includes("food") || lower.includes("wine")) visualType = "default";

  return {
    ...project,
    tier,
    visualType,
    portalId: `${tier}-${index}-${project.title}`,
  };
}

function ProjectWorld({ type = "default", compact = false }) {
  const Icon = visualIcon[type] || visualIcon.default;

  return (
    <div className={`portal-world portal-world-${type} ${compact ? "portal-world-compact" : ""}`}>
      <div className="world-grid" />
      <div className="world-orbit world-orbit-one" />
      <div className="world-orbit world-orbit-two" />
      <Icon className="world-icon" size={compact ? 38 : 74} />
      {type === "merlin" && (
        <>
          <div className="world-route" />
          <div className="world-ambulance"><Ambulance size={compact ? 24 : 34} /></div>
        </>
      )}
      {type === "flight" && <Plane className="world-plane" size={compact ? 30 : 48} />}
      {type === "ar" && (
        <>
          <div className="world-hud-line world-hud-one" />
          <div className="world-hud-line world-hud-two" />
          <div className="world-hud-dot" />
        </>
      )}
      {type === "nlp" && (
        <>
          <span className="world-token token-one">positive</span>
          <span className="world-token token-two">neutral</span>
          <span className="world-token token-three">negative</span>
        </>
      )}
      {type === "vision" && <div className="world-scan-line" />}
      {type === "dansvilla" && (
        <>
          <div className="world-spotlight left" />
          <div className="world-spotlight right" />
        </>
      )}
      {type === "smartdoor" && <div className="world-door"><span /></div>}
      {type === "frontmate" && (
        <>
          <div className="world-call-wave wave-one" />
          <div className="world-call-wave wave-two" />
        </>
      )}
    </div>
  );
}

function PortalCard({ project, active, launching, onOpen, index }) {
  const Icon = visualIcon[project.visualType] || visualIcon.default;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className={`portal-card ${active || launching ? "portal-card-active" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.035, duration: 0.35 }}
    >
      <div className="portal-card-glow" />
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-white/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-600">
          {project.tier}
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white shadow-sm">
          <Icon size={18} />
        </span>
      </div>
      <ProjectWorld type={project.visualType} compact />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
      {project.subtitle && <p className="mt-1 text-sm font-medium text-slate-500">{project.subtitle}</p>}
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{project.why || project.description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
        Open project world <ChevronRight size={14} />
      </div>
    </motion.button>
  );
}

function TagGroup({ title, items, tone = "default" }) {
  const cls =
    tone === "evidence"
      ? "bg-blue-50 text-blue-800"
      : tone === "role"
        ? "bg-slate-100 text-slate-700"
        : "border border-slate-200 bg-white text-slate-700";

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(items || []).map((item) => (
          <span key={item} className={`rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const pipeline = [
    ["Problem", project.why || "Real-world workflow or technical challenge"],
    ["Build", project.tech?.slice(0, 5).join(" + ") || "Practical implementation"],
    ["Proof", project.evidence?.slice(0, 4).join(" + ") || "Reports, demos, or screenshots"],
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 grid bg-slate-950/55 p-3 backdrop-blur-sm sm:p-5 lg:place-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.article
        className="max-h-[94vh] w-full max-w-7xl overflow-y-auto rounded-[2rem] border border-white/60 bg-white shadow-soft"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <div className={`portal-modal-top portal-modal-${project.visualType}`}>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/90 text-slate-700 shadow-sm transition hover:text-blue-700"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
          <div className="relative z-[1] grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <ProjectWorld type={project.visualType} />
              {project.proofImages?.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {project.proofImages.slice(0, 3).map((src) => (
                    <div key={src} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
                      <img src={src} alt={`${project.title} proof`} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-card backdrop-blur sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{project.tier} project world</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h3>
              {project.subtitle && <p className="mt-2 font-medium text-slate-500">{project.subtitle}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">{project.status}</span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">{project.category}</span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-700">{project.description}</p>

              <div className="mt-6 grid gap-3">
                {pipeline.map(([label, value]) => (
                  <div key={label} className="pipeline-row">
                    <span>{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>

              {project.links?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy">
                      {link.label} <ExternalLink size={15} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <TagGroup title="Tech stack" items={project.tech} />
            <div className="mt-6 grid gap-3">
              {(project.highlights || []).map((item) => (
                <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <TagGroup title="Evidence" items={project.evidence} tone="evidence" />
            <TagGroup title="Role fit" items={project.roles} tone="role" />
            {project.note && <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">{project.note}</p>}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function ProjectExplorer() {
  const [filter, setFilter] = useState("Featured");
  const [selected, setSelected] = useState(null);
  const [launching, setLaunching] = useState(null);

  const projects = useMemo(() => {
    return [
      ...featuredProjects.map((project, index) => normalizeProject(project, "Featured", index)),
      ...labs.map((project, index) => normalizeProject(project, "Research", index)),
      normalizeProject(prototype, "Prototype", 0),
    ];
  }, []);

  const filters = ["Featured", "Research", "Prototype", "All"];
  const visible = filter === "All" ? projects : projects.filter((project) => project.tier === filter);

  function openProject(project) {
    setLaunching(project.portalId);
    window.setTimeout(() => {
      setSelected(project);
      setLaunching(null);
    }, 520);
  }

  return (
    <Section id="projects" eyebrow="Project Portal" title="Open the systems. See the proof.">
      <div className="portal-shell">
        <div className="portal-hero">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">AI/ML developer command center</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Built for real problems, not just clean notebooks.</h2>
          </div>
          <div className="portal-python-panel">
            <span>Python core</span>
            <code>data -&gt; model -&gt; decision -&gt; proof</code>
            <p>Most portfolio systems connect Python, ML logic, dashboards, notebooks, reports, or deployment evidence.</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === item ? "bg-white text-slate-950 shadow-sm" : "bg-white/10 text-blue-100 hover:bg-white/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, index) => (
          <PortalCard
            key={project.portalId}
            project={project}
            index={index}
            active={selected?.portalId === project.portalId}
            launching={launching === project.portalId}
            onOpen={() => openProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Section>
  );
}
