import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaClipboard } from 'react-icons/fa';

const Contact = () => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage('Copied to clipboard!');
    setTimeout(() => setCopyMessage(''), 1500); // Clear message after 2 seconds
  };

  return (
    <div className="flex flex-col items-center space-y-6 mt-6 pb-30">
      {/* Icons */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://linkedin.com/in/raquelanamb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-4xl hover:text-blue-500 hover:transform hover:-translate-y-1 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/raquelanamb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-4xl hover:text-yellow-400 hover:transform hover:-translate-y-1 transition duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Plain Text Contact Details with Copy Buttons */}
        <div className="flex items-center space-x-2 pt-4">
          <p className="text-lg">
            <strong>Email:</strong> rbush@umassd.edu
          </p>
          <button
            onClick={() => copyToClipboard('rbush@umassd.edu')}
            className="text-gray-500 hover:text-black transition"
            title="Copy"
          >
            <FaClipboard />
          </button>
        </div>
        <div className="text-center space-y-4">
        <div className="flex items-center space-x-2">
          <p className="text-lg">
            <strong>Phone:</strong> +1 (442) 234-2499
          </p>
          <button
            onClick={() => copyToClipboard('+14422342499')}
            className="text-gray-500 hover:text-black transition"
            title="Copy"
          >
            <FaClipboard />
          </button>
        </div>

        {/* Copy Message */}
        {copyMessage && <p className="text-green-500">{copyMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
