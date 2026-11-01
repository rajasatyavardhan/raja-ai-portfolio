import React from "react";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
const resumeUrl = `${import.meta.env.BASE_URL}Raja_Resume.pdf`;
export default function Hero() {
  return <section id="top" className="raja-hero">
    <div className="raja-hero-grid">
      <div>
        <p className="raja-eyebrow"><MapPin size={15} aria-hidden="true" /> Hamilton, Canada · Open to healthcare technology roles</p>
        <p className="raja-intro">Hi, I'm Raja.</p>
        <h1>AI &amp; Python.<br /><span>Built for people.</span></h1>
        <p className="raja-fullname">Raja Satya Vardhana Reddy Thippareddy</p>
        <p className="raja-lead">I build practical AI and software projects, with a focus on healthcare, accessibility, and useful everyday systems.</p>
        <div className="raja-actions">
          <a href="#projects" className="raja-button">Explore my projects <ArrowRight size={17} /></a>
          <a href={resumeUrl} className="raja-button secondary"><Download size={17} /> View résumé</a>
        </div>
        <div className="raja-socials"><a href="https://github.com/rajasatyavardhan" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://www.linkedin.com/in/t-raja-satya-vardhan-reddy-05b1b8191" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="#contact">Get in touch ↗</a></div>
      </div>
      <aside className="raja-portrait-card" aria-label="Meet Raja">
        <img src="/raja-portrait.webp" width="340" height="425" alt="Raja smiling in a navy blue suit" fetchPriority="high" />
        <div className="raja-portrait-caption"><span className="raja-eyebrow">Curiosity into useful work</span><strong>Learn deeply.<br />Build thoughtfully.</strong><p>Python · Machine learning · Applied AI</p></div>
      </aside>
    </div>
    <a className="raja-business-bridge" href="https://raja-builds.vercel.app/"><span><small>FOR BUSINESSES &amp; EVERYDAY IDEAS</small><strong>Need a website or practical digital help?</strong></span><span>Meet Raja Builds <ArrowRight size={19} /></span></a>
  </section>;
}
