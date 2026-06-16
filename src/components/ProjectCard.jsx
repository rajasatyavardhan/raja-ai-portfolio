import React from "react";
import { ExternalLink, ImagePlus } from "lucide-react";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${featured ? "lg:col-span-2" : ""}`}>
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accent || "from-blue-500 to-violet-500"}`} />
      <div className="mb-6 grid min-h-44 place-items-center rounded-3xl border border-dashed border-blue-200 bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 p-6 text-center">
        <div>
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm">
            <ImagePlus size={22} />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-700">Screenshot / demo placeholder</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">{project.imageLabel || "Add a project screenshot or demo image later."}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
          {project.subtitle && <p className="mt-1 text-sm font-medium text-slate-500">{project.subtitle}</p>}
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
          {project.status}
        </span>
      </div>

      {project.why && (
        <div className="mt-5 rounded-2xl bg-blue-50/80 p-4 text-sm leading-6 text-blue-950">
          <span className="font-semibold">Why it matters: </span>
          {project.why}
        </div>
      )}

      <p className="mt-5 text-sm leading-7 text-slate-650">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-3">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {project.note && <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">{project.note}</p>}

      {project.evidence?.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Evidence</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.evidence.map((item) => (
              <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.roles?.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Role fit</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.roles.map((item) => (
              <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.links?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy">
              {link.label} <ExternalLink size={15} />
            </a>
          ))}
        </div>
      )}

      {!project.links?.length && (
        <p className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-medium text-slate-500">
          Links coming soon. Evidence is available as local reports, notebooks, screenshots, or demo assets.
        </p>
      )}
    </article>
  );
}
