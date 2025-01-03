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
import spotify_network from "./assets/images/spotify_network.png";


const projects = [
  {
    title: "Masqueraded File Checker",
    description: "A tool for detecting hidden and malicious files by analyzing file headers and metadata.",
    tags: ["Python", "Digital Forensics", "Cybersecurity"],
    image: masqueraded,
    link: "https://github.com/raquelanamb/masqueraded-file-checker",
  },
  {
    title: "Harmonaic",
    description: "An AI-powered music recommendation system designed to match your mood and preferences.",
    tags: ["Python", "Data Mining", "Recommendation Systems", "Content-based Filtering", "K-means clustering"],
    image: harmoniac,
    link: "https://github.com/raquelanamb/harmonaic",
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
  {
    title: "Analysis of a Spotify Collaboration Network for Small-World Properties",
    description: "...",
    tags: ["Research", "Big Data", "Small-World Networks", "Applied Mathematics", "Graph Theory"],
    image: spotify_network,
    //link: ,
  },
];

const ProjectsCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: "0",
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
          textAlign: "center",
        }}
      >
        <h2
          className="text-4xl font-bold mb-6 text-black"
          style={{
            textAlign: "center",
          }}
        >
        </h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="carousel-item" style={{ padding: "0 15px" }}>
              <div>
                {/* Image */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "40%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      borderRadius: "10px",
                      margin: "0 auto",
                    }}
                  />
                </a>
                {/* Project Title */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      margin: "10px 0",
                    }}
                  >
                    {project.title}
                  </h3>
                </a>
                <p>{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center items-center">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="skill-badge bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
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