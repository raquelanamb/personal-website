import React from "react";
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

const App = () => {
  return (
    <>
      {/* Background Component */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Scrollable Content */}
      <div data-scroll-container className="relative text-gray-800">
        
        {/* Landing Section */}
        <Landing />

        {/* Other Sections */}
        <Section id="about" title="About Me">
          <About />
        </Section>
        <Section id="projects" title="Projects">
          <ProjectsCarousel />
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
        <Section id="contact" title="Contact Me">
          <Contact />
        </Section>
      </div>
    </>
  );
};

export default App;
