// App.js
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import arthur from './arthur.jpg';
import resume from './resume.pdf';


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

  const Section = ({ id, title, children }) => (
    <motion.section
      id={id}
      className="h-screen flex flex-col justify-center items-center px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-white">{title}</h2>
      <motion.div
        className="text-white text-center max-w-2xl"
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
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg p-2 flex justify-between space-x-6 z-50 backdrop-blur-lg opacity-90 rounded-full w-3/4 max-w-screen-md">
        <a href="#landing" className="text-white text-lg font-bold hover:text-yellow-400">Raquel Ana Bush</a>
        <div className="flex space-x-6">
          <a href="#portfolio" className="text-white text-lg hover:text-yellow-400">Projects</a>
          <a href="#skills" className="text-white text-lg hover:text-yellow-400">Skills</a>
          <a href="#work" className="text-white text-lg hover:text-yellow-400">Work Experience</a>
          <a href="#education" className="text-white text-lg hover:text-yellow-400">Education</a>
          <a href="#contact" className="text-white text-lg hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      <div data-scroll-container>
        {/* Landing Section */}
        <Section id="landing" title="Raquel Ana Bush">
          <p className="text-lg mb-4">
            Hello! I am <span className="font-extrabold"></span> a Computer Science student at the University of Massachusetts Dartmouth, specializing in artificial intelligence and cybersecurity. I am passionate about tackling complex challenges, designing scalable solutions, and exploring innovative applications of AI in cybersecurity.
          </p>
          <a
            href={resume}
            download
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-all"
          >
            Download Resume
          </a>
        </Section>

        {/* About Me Section */}
        <Section id="about" title="About Me">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex justify-center">
              <img src={arthur} alt="Raquel's dog, Arthur" className="rounded-lg shadow-md w-3/4" />
            </div>
            <div className="col-span-2 text-center md:text-left">
              <p className="text-lg">
                Beyond my passion for tech, I enjoy spending time with my mom and dog Arthur. I also love to sing and play guitar, and I take pleasure in diving into the world of psychology. I believe that our hobbies and experiences shape who we are, and I am always eager to learn and grow, both as a professional and as an individual.
              </p>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="portfolio" title="Projects">
          <ul className="space-y-4">
            <li>Fog of War Chess Assistant</li>
            <li>Data Mining Recommendation System</li>
            <li>iFixit Technical Writing Project</li>
          </ul>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills">
          <p>AI, Machine Learning, Cybersecurity, Python, React, SQL, and more.</p>
        </Section>

        {/* Work Experience Section */}
        <Section id="work" title="Work Experience">
          <p>Details about your previous roles and achievements go here.</p>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <p>Bachelor’s and Master’s in Computer Science, with a focus on AI and Cybersecurity.</p>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact Me">
          <p>
            Email: <a href="mailto:raquel@example.com" className="text-blue-400">raquel@example.com</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/raquelanamb" className="text-blue-400">raquelanamb</a>
          </p>
        </Section>
      </div>
    </>
  );
}

export default App;
