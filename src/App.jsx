import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectExplorer from "./components/ProjectExplorer.jsx";
import ProfileTabs from "./components/ProfileTabs.jsx";
import CareerPitch from "./components/CareerPitch.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-mist text-ink">
      <Navbar />
      <main>
        <Hero />
        <ProjectExplorer />
        <ProfileTabs />
        <CareerPitch />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
