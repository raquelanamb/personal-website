import React from "react";
import { motion } from "framer-motion";
import myPhoto from "./assets/images/myPhoto.jpg";

const Landing = () => {
  return (
    <motion.section
      id="landing"
      className="h-screen flex flex-col justify-center items-center md:px-8 pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center w-4/5 max-w-6xl gap-y-8 md:gap-y-0 md:gap-x-12">
        {/* Left Side: Text */}
        <div className="flex flex-col w-full md:w-3/5 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Raquel Ana Bush
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-black mb-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello! I am a Computer Science BS/MS student at the University of Massachusetts Dartmouth, concentrating in artificial intelligence and minoring in mathematics. As an NSF CyberCorps Scholarship for Service recipient, I am passionate about tackling complex challenges, designing scalable solutions, and exploring innovative applications of AI in cybersecurity.
          </motion.p>
        </div>

        {/* Right Side: Photo */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={myPhoto}
            alt="Raquel Ana Bush"
            className="rounded-lg shadow-lg object-cover m-w-64 w-64 sm:w-80 md:w-96 lg:w-112 xl:w-128"
          />
        </motion.div>
      </div>

      {/* Resume Button */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="/RaquelBush_resume.pdf"
          download="RaquelBush_resume.pdf"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Landing;
