import React, { useState, useEffect } from "react";
import Background from "./background";
import Navbar from "./Navbar";
import Section from "./Section";
import Landing from "./Landing";
import About from "./About";
import ProjectsCarousel from "./ProjectsCarousel";
import Skills from "./Skills";
import Timeline from "./Timeline";
import Education from "./Education";
import Contact from "./Contact";
import ProjectParticles from "./ProjectParticles"; // New Particles component

const App = () => {
  const [currentSection, setCurrentSection] = useState("landing");

  // Detect scroll and update current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let foundSection = "landing";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          foundSection = section.id;
        }
      });

      setCurrentSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Conditionally Render Background */}
      {currentSection !== "landing" && currentSection !== "about" && <Background />}

      {/* Navbar */}
      <Navbar />

      {/* Scrollable Content */}
      <div data-scroll-container className="relative text-gray-800">
        
        {/* Landing Section */}
        <Landing />

        {/* Other Sections */}
        <Section id="about" title="About Me" backgroundImage="assets/images/flux_guitar_light.png">
          <About />
        </Section>

        {/* Projects Section with Particles Overlay */}
        <Section id="projects" title="Projects" backgroundImage="assets/images/gradient.png">
          <div className="relative">
            <ProjectParticles />  {/* Particles inside the Projects section */}
            <ProjectsCarousel />
          </div>
        </Section>

        <Section id="skills" title="Technologies">
          <Skills />
        </Section>

        <Section id="experience" title="Experience">
          <Timeline />
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>
        
        <Section id="contact" title="Contact Me" backgroundVideo="/assets/videos/contact_background_new.mp4" playbackSpeed={0.5}>
          <ProjectParticles />  {/* Particles inside the Projects section */}
          <Contact />
        </Section>
      </div>
    </>
  );
};

export default App;
