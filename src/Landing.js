import React, { useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "./assets/images/myPhoto.jpg";

const Landing = () => {
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0); // reset scroll position
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <motion.section
      id="landing"
      className="relative flex flex-col justify-center items-center min-h-screen px-4 md:px-8 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/landing_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl gap-y-8 md:gap-y-0 md:gap-x-12">
        {/* Text Section */}
        <div className="flex flex-col w-full md:w-3/5 text-center md:text-left">
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-jersey text-white mb-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Raquel Ana Bush
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-jersey bg-gradient-to-r from-orange-200 via-orange-300 to-red-300 bg-clip-text text-transparent mb-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Software Engineer
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white font-tomorrow font-medium mb-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello! I am a Computer Science BS/MS student at the University of
            Massachusetts Dartmouth, concentrating in artificial intelligence
            and minoring in mathematics. As an NSF CyberCorps Scholarship for
            Service recipient, I am passionate about tackling complex
            challenges and exploring innovative applications of AI in 
            cybersecurity.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={myPhoto}
            alt="Raquel Ana Bush"
            className="rounded-lg shadow-lg object-cover w-64 sm:w-80 md:w-96 lg:w-112 xl:w-128"
          />
        </motion.div>
      </div>

      {/* Resume Button */}
      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="/Raquel_Bush_resume.pdf"
          download="Raquel_Bush_resume.pdf"
          className="resume-button bg-gradient-to-r from-orange-300 to-orange-400 px-6 py-3 rounded-full font-tomorrow font-semibold transition-transform transform hover:translate-y-1 hover:shadow-lg active:scale-95"
          data-state="default"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Landing;
