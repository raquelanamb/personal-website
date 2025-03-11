import React from 'react';
import arthur from './arthur.jpg';
import cursorArthur from './cursor_arthur.png';
import shell from './shell.jpg';
import cursorBeach from './cursor_heart.png';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 text-black">
      {/* Images Section */}
      <div className="flex flex-row md:flex-col items-center justify-center gap-6 flex-shrink-0">
        <img
          src={arthur}
          alt="Raquel's dog, Arthur"
          className="rounded-lg shadow-md"
          style={{
            width: '200px',
            height: '250px',
            objectFit: 'cover',
            cursor: `url(${cursorArthur}), auto`,
          }}
        />
        <img
          src={shell}
          alt="Raquel holding a shell at Gooseberry Island beach"
          className="rounded-lg shadow-md"
          style={{
            width: '200px',
            height: '250px',
            objectFit: 'cover',
            cursor: `url(${cursorBeach}), auto`,
          }}
        />
      </div>

      {/* Text Section */}
      <div className="flex-grow text-center md:text-left md:max-w-lg lg:max-w-custom xl:max-w-custom p-4">
        <p className="text-lg font-tomorrow mb-4">
          Beyond my passion for tech, I enjoy spending time with my dog Arthur (isn't he adorable?) and my mom, 
          who has always been a source of wisdom and support in my life. 
        </p>
        <p className="text-lg font-tomorrow mb-4">
          Singing and playing guitar are two of my favorite ways to unwind and express myself, and I love exploring 
          new songs and experimenting with different styles. Music has always been a big part of my life, whether 
          I'm performing, listening to my favorite artists, or enjoying the thrill of a live concert.
        </p>
        <p className="text-lg font-tomorrow mb-4">
          Psychology fascinates me as well—I enjoy delving into the complexities of human behavior and understanding 
          what motivates and connects us. It’s a field that continually sparks my curiosity and helps me see the world 
          through different perspectives.
        </p>
        <p className="text-lg font-tomorrow mb-4">
          In the summer months, you can often find me by the beach. There's something magical about the ocean breeze 
          and the sound of waves that inspires creativity and offers a peaceful escape. I love swimming in the ocean, 
          collecting unique shells, soaking up the sun, and watching the tides roll in. These moments by the sea keep 
          me grounded and rejuvenated.
        </p>
        <p className="text-lg font-tomorrow mb-4">
          I aim to balance a driven and curious mindset with an appreciation for life's simple joys. I believe this harmony not only enriches my personal life but also fosters a fresh and creative perspective in my professional endeavors.
        </p>
      </div>
    </div>
  );
};

export default About;
