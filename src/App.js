// App.js
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import arthur from './arthur.jpg';
import resume from './resume.pdf';
import myPhoto from './myPhoto.jpg';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import python from './assets/images/python.png';
import java from './assets/images/java.png';
import c from './assets/images/c.png';
import cpp from './assets/images/c++.png';
import linux from './assets/images/linux.png';
import git from './assets/images/git.png';
import tensorflow from './assets/images/tensorflow.png';
import numpy from './assets/images/numpy.png';
import pandas from './assets/images/pandas.png';
import scikit from './assets/images/scikit.png';
import keras from './assets/images/keras.png';
import sql from './assets/images/sql.png';
import javascript from './assets/images/javascript.png';
import latex from './assets/images/latex.png';
import docker from './assets/images/docker.png';
import flask from './assets/images/flask.png';
import react from './assets/images/react.png';
import html from './assets/images/html.png';
import tailwind from './assets/images/tailwind.png';


// Section Component
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

// Skills Subsection
const Skills = () => {
  const technologies = [
    { icon: python, name: 'Python' },
    { icon: java, name: 'Java' },
    { icon: c, name: 'C' },
    { icon: cpp, name: 'C++' },
    { icon: linux, name: 'Linux' },
    { icon: git, name: 'Git' },
    { icon: tensorflow, name: 'TensorFlow' },
    { icon: numpy, name: 'NumPy' },
    { icon: pandas, name: 'Pandas' },
    { icon: scikit, name: 'Scikit-Learn' },
    { icon: keras, name: 'Keras' },
    { icon: sql, name: 'MySQL' },
    { icon: javascript, name: 'JavaScript' },
    { icon: latex, name: 'LaTeX' },
    { icon: docker, name: 'Docker' },
    { icon: flask, name: 'Flask' },
    { icon: react, name: 'React' },
    { icon: html, name: 'HTML (5)' },
    { icon: tailwind, name: 'Tailwind CSS (v3.4)' },
  ];

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-white relative group"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }} // Float up and down
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: index * 0.1,
            }}
            whileHover={{ scale: 1.2 }} // Slightly enlarge on hover
          >
            <div
              className="w-24 h-24 p-4 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-lg flex items-center justify-center"
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain" // Adjust size as needed
              />
            </div>
            <span className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};



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
          <a href="#work" className="text-white text-lg hover:text-yellow-400">Experience</a>
          <a href="#education" className="text-white text-lg hover:text-yellow-400">Education</a>
          <a href="#contact" className="text-white text-lg hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      <div data-scroll-container>
        {/* Landing Section */}
        <motion.section
          id="landing"
          className="h-screen flex flex-col items-center px-8 md:px-16 pt-60"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // Re-triggers animation every time it enters view
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            {/* Animated Text Section */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center items-start text-center md:text-left"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1
                className="text-6xl font-bold mb-6 text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.0, type: "spring", stiffness: 100 }}
              >
                Raquel Ana Bush
              </motion.h1>
              <motion.p
                className="text-lg mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Hello! I am a Computer Science BS/MS student at the University of Massachusetts Dartmouth, concentrating in artificial intelligence and minoring in mathematics. I am passionate about tackling complex challenges, designing scalable solutions, and exploring innovative applications of AI in cybersecurity.
              </motion.p>
            </motion.div>

            {/* Animated Photo */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src={myPhoto} // Replace with the correct path to your photo
                alt="Raquel Ana Bush"
                className="rounded-lg shadow-lg w-2/3 md:w-1/2"
              />
            </motion.div>
          </div>

          {/* Resume Button */}
          <motion.div
            className="mt-12 flex justify-center w-full"
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
        </motion.section>

        {/* About Me Section */}
        <Section id="about" title="About Me">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex justify-center">
              <img src={arthur} alt="Raquel's dog, Arthur" className="rounded-lg shadow-md w-4/4" />
            </div>
            <div className="col-span-2 text-center md:text-left">
              <p className="text-lg">
                Beyond my passion for tech, I enjoy spending time with my dog Arthur (isn't he adorable?). I also love to sing and play guitar, and I take pleasure in diving into the world of psychology. I believe that our hobbies and experiences shape who we are, and I am always eager to learn and grow, both as a professional and as an individual.
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
        <Skills />

        {/* Experience Section */}
        <Section id="work" title="Experience">
          <p>Details about your previous roles and achievements go here.</p>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="space-y-6 py-4">
            {[
              {
                school: "University of Massachusetts Dartmouth",
                degree: "Master of Science in Computer Science",
                year: "Expected May 2026",
                details: "Focusing on Artificial Intelligence and Cybersecurity.",
              },
              {
                school: "University of Massachusetts Dartmouth",
                degree: "Bachelor of Science in Computer Science, AI Concentration, Mathematics Minor",
                year: "May 2025",
                details: "NSF Scholarship for Service, Vice President of Big Data Club, Research Assistant.",
              },
              {
                school: "Massasoit Community College",
                degree: "Associate Degrees in Computer Science and Mathematics",
                year: "2022",
                details: "Graduated with Highest Honors and transferred to UMass Dartmouth.",
              },

            ].map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black rounded-xl p-6 shadow-lg flex flex-col text-white max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-lg text-gray-300">{edu.school}</p>
                <p className="text-sm text-gray-500 mt-2">{edu.year}</p>
                <p className="text-sm text-gray-400 mt-4">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Contact Me">
          <div className="flex justify-center space-x-6 mt-4">
            {/* GitHub Icon */}
            <a
              href="https://github.com/raquelanamb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl hover:text-yellow-400 transition"
            >
              <FaGithub />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/raquelanamb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            {/* Phone Icon */}
            <a
              href="tel:+14422342499"
              className="text-white text-4xl hover:text-green-400 transition"
            >
              <FaPhoneAlt />
            </a>

            {/* Email Icon */}
            <a
              href="mailto:rbush@umassd.edu"
              className="text-white text-4xl hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </Section>
      </div>
    </>
  );
}

export default App;
