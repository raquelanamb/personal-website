import React from 'react';
import Section from './Section'; // Adjust path based on your file structure
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
      <div className="flex justify-center space-x-6 mt-4">
        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/raquelanamb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-4xl hover:text-blue-500 hover:transform hover:-translate-y-1 transition duration-300"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/raquelanamb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-4xl hover:text-yellow-400 hover:transform hover:-translate-y-1 transition duration-300"
        >
          <FaGithub />
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+14422342499"
          className="text-black text-4xl hover:text-green-400 hover:transform hover:-translate-y-1 transition duration-300"
        >
          <FaPhoneAlt />
        </a>

        {/* Email Icon */}
        <a
          href="mailto:rbush@umassd.edu"
          className="text-black text-4xl hover:text-purple-400 hover:transform hover:-translate-y-1 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
  );
};

export default Contact;
