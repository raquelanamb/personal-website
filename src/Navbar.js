import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToLanding = (e) => {
    e.preventDefault(); // prevent default anchor behavior
    const target = document.querySelector("#landing");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // smoothly scroll to target
    }
    setIsOpen(false); // close menu
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false); // close menu when expanding to large screen
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount:
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-5 backdrop-blur-md ${
          isOpen ? "shadow-none rounded-t-xl rounded-b-none" : "shadow-md rounded-xl"
        } p-2 flex items-center justify-between z-50 w-10/12 max-w-4xl`}
        data-scroll
        style={{
          overflow: "hidden",
          pointerEvents: "auto", // ensure navbar can be interacted w/
        }}
      >

        {/* Name (Always on the Left) */}
        <a
          href="#landing"
          onClick={scrollToLanding}
          className="text-black text-xl font-black font-major whitespace-nowrap pr-5 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-orange-200 hover:to-orange-300 hover:bg-clip-text hover:text-transparent"
          style={{
            fontWeight: 900, // specify hollow weight
          }}
        >
          Raquel Ana Bush
        </a>

        {/* Hamburger Icon (Small Screens) */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none focus:ring-2 focus:ring-white p-1 lg:hidden"
        >
          {isOpen ? (
            // X icon
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Navbar Links for Large Screens */}
        <div className="hidden lg:flex space-x-4 lg:space-x-6 truncate max-w-full">
          <a href="#about" className="text-black text-lg font-tomorrow hover:text-gray-700">
            About
          </a>
          <a href="#projects" className="text-black text-lg font-tomorrow hover:text-gray-700">
            Projects
          </a>
          <a href="#skills" className="text-black text-lg font-tomorrow hover:text-gray-700">
            Technologies
          </a>
          <a href="#experience" className="text-black text-lg font-tomorrow hover:text-gray-700">
            Experience
          </a>
          <a href="#education" className="text-black text-lg font-tomorrow hover:text-gray-700">
            Education
          </a>
          <a href="#contact" className="text-black text-lg font-tomorrow hover:text-gray-700">
            Contact
          </a>
        </div>
      </nav>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div
          className="fixed top-[68px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-5 backdrop-blur-md shadow-md rounded-b-xl flex flex-col items-start p-4 z-40 w-10/12 max-w-screen-lg -mt-2"
          data-scroll
        >
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-black text-lg font-tomorrow hover:text-gray-700 py-1 w-full"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-black text-lg font-tomorrow hover:text-gray-700 py-1 w-full"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="text-black text-lg font-tomorrow hover:text-gray-700 py-1 w-full"
          >
            Technologies
          </a>
          <a
            href="#experience"
            onClick={toggleMenu}
            className="text-black text-lg font-tomorrow hover:text-gray-700 py-1 w-full"
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={toggleMenu}
            className="text-black text-lg font-tomorrow hover:text-gray-700 py-1 w-full"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-black text-lg font-tomorrow hover:text-gray-700 py-1 w-full"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
