import React from 'react';
import arthur from './arthur.jpg';
import cursorArthur from './cursor_arthur.png'; // Import the custom cursor image

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
      <div className="flex justify-center">
        <img 
          src={arthur} 
          alt="Raquel's dog, Arthur" 
          className="rounded-lg shadow-md w-1/4 md:w-1/2 max-w-full" 
          style={{ cursor: `url(${cursorArthur}), auto` }} // Apply the custom cursor
        />
      </div>
      <div className="col-span-2 text-center md:text-left">
        <p className="text-lg">
          <p className="mb-4">
            Beyond my passion for tech, I enjoy spending time with my dog Arthur (isn't he adorable?). 
            I also love to sing and play guitar, and I take pleasure in diving into the world of psychology.
          </p>
          <p className="mb-4">
            I believe that our hobbies and experiences shape who we are, and I am always eager to learn and grow, 
            both as a professional and as an individual.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
