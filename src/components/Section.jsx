import React from "react";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="mb-9 max-w-3xl">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
