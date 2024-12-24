// App.js
import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import resume from './resume.pdf';
import myPhoto from './myPhoto.jpg';
import Timeline from './Timeline';
import Education from './Education';
import ProjectsCarousel from './ProjectsCarousel';
import Skills from './Skills'
import About from './About'
import Contact from './Contact';


function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      resetNativeScroll: true, // Ensure manual scrolling works
    });

    const handleAnchorClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          scroll.scrollTo(target, { offset: -100 }); // Adjusted offset for navbar height
        }
      }
    };

    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('nav a').forEach((link) => {
        link.removeEventListener('click', handleAnchorClick);
      });
      scroll.destroy();
    };
  }, []);

  const Section = ({ id, title, children, className = '', style = {} }) => (
    <motion.section
      id={id}
      className={`py-16 px-8 ${className}`} // Use default padding but allow overrides
      style={style} // Allow inline styles if needed
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {title && (
        <h2 className="text-4xl font-bold mb-8 text-center text-black">{title}</h2>
      )}
      <motion.div
        className="text-black max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );

  return (
    <>
      {/* Navbar */}
      <nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-5 backdrop-blur-md shadow-md p-2 flex justify-between space-x-6 z-50 rounded-full w-3/4 max-w-screen-md"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#skills"
    >
      <a href="#landing" className="text-black text-lg font-bold hover:text-gray-700">
        Raquel Ana Bush
      </a>
      <div className="flex space-x-6">
        <a href="#projects" className="text-black text-lg hover:text-gray-700">Projects</a>
        <a href="#skills" className="text-black text-lg hover:text-gray-700">Technologies</a>
        <a href="#experience" className="text-black text-lg hover:text-gray-700">Experience</a>
        <a href="#education" className="text-black text-lg hover:text-gray-700">Education</a>
        <a href="#contact" className="text-black text-lg hover:text-gray-700">Contact</a>
      </div>
    </nav>

      <div data-scroll-container className="bg-white text-gray-800">
        {/* Landing Section */}
        <motion.section
          id="landing"
          className="h-screen flex flex-col justify-center items-center px-8 md:px-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // Re-triggers animation every time it enters view
          transition={{ duration: 1 }}
          data-scroll
        >
          {/* Text and Image Row */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl">
            {/* Animated Text Section */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center items-start text-center md:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1
                className="text-6xl font-bold mb-6 text-black"
                initial={{ x: -500, opacity: 0 }} // Start further off-screen
                animate={{ x: 0, opacity: 1 }} // Slide into place
                transition={{
                  type: "spring", // Adds a bouncy, dramatic effect
                  stiffness: 120, // Controls the intensity of the bounce
                  damping: 12, // Slows down the bounce effect
                  duration: 1.5, // Longer duration for a dramatic feel
                  delay: 0, // No delay for the name animation
                }}
              >
              Raquel Ana Bush
              </motion.h1>

              <motion.p
                className="text-lg mb-4 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <p className="mb-4">Hello! I am a Computer Science BS/MS student at the University of Massachusetts Dartmouth,
                concentrating in artificial intelligence and minoring in mathematics.</p>
                
                <p className="mb-4">I am passionate about tackling complex challenges, designing scalable solutions, and 
                exploring innovative applications of AI in cybersecurity.</p>
              </motion.p>
            </motion.div>

            {/* Animated Photo */}
            <motion.div
              className="md:w-1/2 flex justify-center relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src={myPhoto}
                alt="Raquel Ana Bush"
                className="rounded-lg shadow-lg w-2/3 md:w-3/4 translate-x-16" // Added transform for precise adjustment
              />
            </motion.div>
          </div>

          {/* Resume Button - New Row */}
          <div className="flex justify-center w-full mt-12" data-scroll>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a
                href={resume}
                download
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <Section id="about" title="About Me">
          <About />
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <ProjectsCarousel />
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Technologies">
          <Skills />
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience">
          <Timeline />
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <Education />
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact Me">
          <Contact />
        </Section>
      </div>
    </>
  );
}

export default App;
