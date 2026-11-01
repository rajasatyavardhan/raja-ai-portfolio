import React from "react";
export default function Footer() {
  return <footer className="raja-footer"><div className="raja-footer-top"><div><strong>Raja Thippareddy</strong><p>AI, Python, and thoughtful digital work.</p></div><nav aria-label="Footer navigation"><a href="#projects">Projects</a><a href="#profile">Profile</a><a href="https://raja-builds.vercel.app/">Raja Builds ↗</a></nav></div><div className="raja-footer-bottom"><p>© {new Date().getFullYear()} Raja Thippareddy</p><a href="#profile" className="creator-seal"><span className="creator-monogram" aria-hidden="true">TRSVR</span><span className="creator-caption"><strong>Created &amp; crafted with <span aria-label="love">❤️</span> by</strong><small>T. Raja Satya Vardhana Reddy</small></span></a></div></footer>;
}
