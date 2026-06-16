import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate px-5 pb-16 pt-32 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,#ffffff,#f8fafc)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-800 shadow-sm">
            <MapPin size={16} />
            Ottawa, Canada - Open Work Permit
          </div>

          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Raja Satya Vardhana Reddy Thippareddy
          </h1>

          <p className="mt-5 max-w-4xl text-base font-semibold text-blue-900 sm:text-lg">
            AI Developer | Machine Learning Developer | Python Developer | Data/AI Analyst | Software Developer | Applied AI Developer
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-650 sm:text-xl">
            AI/ML and Python-focused developer building practical systems across healthcare AI, emergency response, multimodal assistants, big-data prediction, NLP, computer vision, and real business automation.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="quote-chip">Proof over buzzwords.</span>
            <span className="quote-chip">Built for real problems, not just clean notebooks.</span>
            <span className="quote-chip">Problem first, proof second, buzzwords last.</span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/Raja_Resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-blue-800">
              <Download size={17} /> Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy">
              View Projects <ArrowRight size={17} />
            </a>
            <a href="https://github.com/rajasatyavardhan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300">
              <Github size={17} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/t-raja-satya-vardhan-reddy-05b1b8191" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300">
              <Mail size={17} /> Contact
            </a>
          </div>
        </div>

        <div className="relative animate-float rounded-[2rem] border border-white bg-white/70 p-5 shadow-soft backdrop-blur">
          <div className="rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-6 text-white">
            <div className="mb-8 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                <Sparkles size={14} /> Career fair signal
              </span>
              <span className="text-xs text-blue-100">Vercel-ready</span>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-200">I build</p>
            <div className="mt-4 grid gap-3">
              {[
                "Healthcare AI simulations",
                "Multimodal assistant workflows",
                "Big-data prediction pipelines",
                "NLP and computer vision prototypes",
                "Business websites that capture leads",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-blue-50">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-blue-100">
              A little AI, a little systems thinking, and a lot of debugging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
