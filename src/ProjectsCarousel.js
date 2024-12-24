import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import masqueraded from "./assets/images/masqueraded.png";
import harmoniac from "./assets/images/harmoniac.png";
import popopinions from "./assets/images/popopinions.png";
import fogofwar from "./assets/images/fow.png";
import synthetic from "./assets/images/synthetic.png";
import hangman from "./assets/images/hangman.png";

const projects = [
  {
    title: "Masqueraded File Checker",
    description: "A tool for detecting hidden and malicious files by analyzing file headers and metadata.",
    tags: ["Python", "Cybersecurity"],
    image: masqueraded,
  },
  {
    title: "Harmonaic",
    description: "An AI-powered music recommendation system designed to match your mood and preferences.",
    tags: ["Python", "TensorFlow", "Music AI"],
    image: harmoniac,
  },
  {
    title: "PopOpinions",
    description: "A sentiment analysis tool that aggregates and visualizes public opinions on trending topics.",
    tags: ["React", "NLP", "Visualization"],
    image: popopinions,
  },
  {
    title: "Fog of War Chess Assistant",
    description: "A strategic assistant leveraging NLP and AI to analyze biases and suggest optimal moves in Fog of War chess.",
    tags: ["Python", "NLP", "AI"],
    image: fogofwar,
  },
  {
    title: "Synthetic Number Generator",
    description: "A program designed to generate synthetic numerical datasets for testing machine learning models.",
    tags: ["Python", "Data Science", "Machine Learning"],
    image: synthetic,
  },
  {
    title: "Smart Hangman",
    description: "A hangman game that uses predictive algorithms to adapt difficulty based on player performance.",
    tags: ["JavaScript", "Game Development", "AI"],
    image: hangman,
  },
];

const ProjectsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // navigation arrows
    centerMode: true, // Ensures items are spaced evenly and centered
    centerPadding: "0", // Remove default center padding if needed
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div
      className="projects-carousel-container"
      style={{
        maxWidth: "100%",
        width: "1200px",
        margin: "0 auto",
        textAlign: "center", // Center-align content in the container
      }}
    >
      <h2
        className="text-4xl font-bold mb-6 text-black"
        style={{
          textAlign: "center", // Center-align the title explicitly
        }}
      >
      </h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="carousel-item" style={{ padding: "0 15px" }}>
            <div>
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "40%", // Ensures the image takes up the container's width
                  aspectRatio: "1 / 1", // Maintains a square aspect ratio
                  objectFit: "cover", // Ensures the image scales proportionally
                  borderRadius: "10px", // Optional: Rounded corners
                  margin: "0 auto",
                }}
              />
              {/* Project Details */}
              <h3
                style={{
                  fontSize: "1.3rem", // Make the title larger
                  fontWeight: "bold", // Make the title bold
                  margin: "10px 0", // Add some spacing above and below
                }}
              >
                {project.title}
              </h3>

              <p>{project.description}</p>
              <div>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: "inline-block",
                      margin: "5px",
                      padding: "4.5px 9px",
                      backgroundColor: "#007bff",
                      color: "white",
                      borderRadius: "5px",
                      fontSize: "0.7rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
