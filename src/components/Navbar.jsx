import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Pitch", "pitch"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white shadow-card">
            RT
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-ink">Raja Thippareddy</span>
            <span className="text-xs text-slate-500">AI/ML Developer | Ottawa</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm md:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink">
              {label}
            </a>
          ))}
        </div>

        <a href="/Raja_Resume.pdf" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-navy md:inline-flex">
          Resume
        </a>

        <button
          type="button"
          className="rounded-full border border-slate-200 bg-white p-2 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
