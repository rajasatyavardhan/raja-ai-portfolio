import React from "react";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Section from "./Section.jsx";

const linkedinUrl = "https://www.linkedin.com/in/t-raja-satya-vardhan-reddy-05b1b8191";
const resumeUrl = `${import.meta.env.BASE_URL}Raja_Resume.pdf`;

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk about AI, Python, or useful systems.">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
          <p className="text-lg leading-8 text-slate-700">
            I am open to AI Developer, Machine Learning Developer, Python Developer, Data/AI Analyst, Software Developer, Applied AI Developer, and LLM Evaluation roles.
          </p>
          <p className="mt-4 text-slate-600">Based in Ottawa with an Open Work Permit and available for full-time roles across Canada.</p>
        </div>
        <div className="grid gap-3">
          <a className="contact-link" href="mailto:rajasatyavardhan@gmail.com">
            <Mail size={18} /> rajasatyavardhan@gmail.com
          </a>
          <a className="contact-link" href="https://github.com/rajasatyavardhan" target="_blank" rel="noreferrer">
            <Github size={18} /> github.com/rajasatyavardhan
          </a>
          <a className="contact-link" href={linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn profile
          </a>
          <a className="contact-link" href={resumeUrl}>
            <Download size={18} /> Download resume
          </a>
          <div className="contact-link">
            <MapPin size={18} /> Ottawa, Canada
          </div>
        </div>
      </div>
    </Section>
  );
}
