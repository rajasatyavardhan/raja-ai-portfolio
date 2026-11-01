import React, { useEffect, useRef } from "react";
export default function MotionDetails() {
  const progress = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        if (progress.current) progress.current.style.transform = "scaleX(" + (total > 0 ? window.scrollY / total : 0) + ")";
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    let observer;
    const nodes = Array.from(document.querySelectorAll("main section:not(#top)"));
    if (!preference.matches && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      }), { threshold: 0.04 });
      nodes.forEach(node => { node.classList.add("reveal-section"); observer.observe(node); });
    }
    const restore = () => { if (preference.matches) nodes.forEach(node => node.classList.add("is-visible")); };
    preference.addEventListener("change", restore);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      preference.removeEventListener("change", restore);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      nodes.forEach(node => node.classList.remove("reveal-section", "is-visible"));
    };
  }, []);
  return <div ref={progress} className="reading-progress" aria-hidden="true" />;
}
