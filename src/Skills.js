// Skills.js
import React from 'react';
import { motion } from 'framer-motion';
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
import sql from './assets/images/sql.png';
import javascript from './assets/images/javascript.png';
import react from './assets/images/react.png';
import html from './assets/images/html.png';
import tailwind from './assets/images/tailwind.png';
import flask from './assets/images/flask.png';
import docker from './assets/images/docker.png';
//import latex from './assets/images/latex.png';
//import css_ from './assets/images/css_.png';
import wireshark from './assets/images/wireshark.png'


const Skills = () => {
  const technologies = [
    { icon: python, name: 'Python' },
    { icon: java, name: 'Java' },
    { icon: c, name: 'C' },
    { icon: cpp, name: 'C++' },
    { icon: linux, name: 'Linux' },
    { icon: git, name: 'Git' },
    { icon: wireshark, name: 'Wireshark' },
    { icon: tensorflow, name: 'TensorFlow' },
    { icon: numpy, name: 'NumPy' },
    { icon: pandas, name: 'Pandas' },
    { icon: scikit, name: 'Scikit-Learn' },
    { icon: sql, name: 'MySQL' },
    { icon: javascript, name: 'JavaScript' },
    { icon: html, name: 'HTML' },
    //{ icon: css_, name: 'CSS' },
    { icon: react, name: 'React' },
    { icon: tailwind, name: 'Tailwind CSS' },
    { icon: flask, name: 'Flask' },
    { icon: docker, name: 'Docker' },
    //{ icon: latex, name: 'LaTeX' },

  ];

  return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-black relative group"
            variants={{
              floating: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 3, delay: index * 0.1 } },
              enlarged: { scale: 1.1, y: 0 }, // stops floating and enlarges
            }}
            animate="floating"
            whileHover="enlarged"
          >
            <div
              className="w-20 h-20 p-3 bg-gradient-to-br from-white to-gray-200 rounded-lg shadow-md flex items-center justify-center"
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="mt-2 text-xs text-black opacity-0 group-hover:opacity-0 transition-opacity duration-300">
            </span>
          </motion.div>
        ))}
      </div>
  );
};

export default Skills;
