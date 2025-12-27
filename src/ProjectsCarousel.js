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
import website from "./assets/images/website.png"


const projects = [
  {
    title: "Masqueraded File Checker",
    description: "A program that analyzes files within a user-provided folder to identify potential mismatches between their extensions and hex file signatures. Designed to detect masqueraded files, it leverages a robust dictionary of common and rare file types to verify integrity while accounting for extensions without signatures. This tool offers an efficient way to flag inconsistencies and unrecognized file formats, providing valuable insights into file authenticity.",
    tags: ["Python", "Cybersecurity", "Digital Forensics", "File Validation", "Hexadecimal Analysis", "Tkinter"],
    image: masqueraded,
    link: "https://github.com/raquelanamb/masqueraded-file-checker",
  },
  {
    title: "Harmonaic",
    description: "Designed and developed a scalable music recommendation system leveraging audio features such as tempo, energy, and danceability to generate personalized suggestions. Utilized K-means clustering for grouping similar tracks and Principal Component Analysis (PCA) for dimensionality reduction. Applied t-distributed stochastic neighbor embedding (t-SNE) for visualizing high-dimensional feature relationships and validating clustering outcomes. Analyzed a dataset of 89,000 Spotify tracks to uncover patterns in audio features and address the \"cold-start\" problem without requiring user interaction data. Demonstrated proficiency in data analysis, knowledge discovery, and recommendation system development",
    tags: ["Python", "K-means", "PCA", "t-SNE", "Recommendation System", "AI", "Data Mining", "NumPy", "Pandas", "Scikit-learn", "Tkinter"],
    image: harmoniac,
    link: "https://github.com/raquelanamb/harmonaic",
  },
  {
    title: "PopOpinions",
    description: "Developed a Tkinter-based application that enabled users to search for specific terms on Twitter and analyze the sentiment of retrieved tweets using natural language processing techniques. Leveraged the Afinn sentiment analysis library and Twitter API (via Tweepy) to assign scores and sentiment categories to tweets. Integrated a dynamic user interface that presented real-time feedback on the sentiment associated with user-defined terms. While no longer functional due to changes in the Twitter API, the project demonstrated proficiency in API integration and natural language processing. This project showcased an innovative approach to analyzing public sentiment trends in social media contexts.",
    tags: ["Python", "NLP", "API Integration", "Sentiment Analysis", "Real-Time Data Processing", "Social Media Analytics", "Tkinter"],
    image: popopinions,
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed an interactive personal website, raquelbush.com, using React and Tailwind CSS to showcase professional projects, skills, and achievements. Features an intuitive, visually appealing design that balances professionalism with personality. Includes dynamic elements like a project carousel, interactive education and experience sections, and responsive design for seamless use across devices. Demonstrated expertise in front-end development, modern web frameworks, and user experience design.",
    tags: ["React", "JavaScript", "Tailwind CSS", "HTML5", "Canva"],
    image: website,
    link: "https://raquelbush.com",
  },
  {
    title: "Fog of War Chess Assistant",
    description: "Leading the development of a Fog of War Chess Assistant, a senior capstone project leveraging artificial intelligence and an LLM to process natural language input and provide strategic move suggestions in the Fog of War chess variant. The system translates user commands into structured instructions for the chess engine and delivers move suggestions to the advantaged user via the LLM. The project also explores the integration of a Generative Adversarial Network (GAN) to enhance move prediction capabilities. Built using Python, Chess-Python libraries, and SQLite for robust data management. Demonstrates expertise in AI/ML, natural language processing, and database integration within a strategic gaming context.",
    tags: ["Python", "SQL", "NLP", "AI", "LLMs", "ML", "Tkinter"],
    image: fogofwar,
    //link: ,
  },
  {
    title: "Synthetic Number Generator",
    description: "Designed and implemented a Generative Adversarial Network (GAN) to generate synthetic numbers, showcasing expertise in deep learning and generative modeling. Designed and trained the GAN using a standard architecture consisting of a generator and discriminator, where the generator produced synthetic numbers and the discriminator evaluated their authenticity against real data. Optimized model performance through iterative adversarial training, hyperparameter tuning, and loss function analysis. This project demonstrated proficiency in deep learning, neural network design, and practical applications of generative modeling for synthetic data generation.",
    tags: ["Google Colab", "Python", "GANs", "ML", "Neural Network Architecture Design", "Deep Learning", "Synthetic Data Generation", "Adversarial Training"],
    image: synthetic,
  },
  {
    title: "Smart Hangman",
    description: "Designed and implemented an advanced Hangman game with a \"clever\" twist, featuring dynamic wordlist optimization to challenge players based on their guesses. The game includes multiple difficulty levels, debug mode for enhanced user control, and real-time feedback on guessed letters. Utilized algorithms to dynamically refine potential word lists and improve game interactivity. Demonstrated expertise in Python programming, algorithm design, and user experience enhancement in game development.",
    tags: ["Python", "Game Development", "Algorithm Design", "Dynamic Data Structures"],
    image: hangman,
  },
  {
    title: "Analysis of a Spotify Collaboration Network for Small-World Properties",
    description: "Conducted a comprehensive network analysis of Spotify artist collaborations to explore small-world properties such as clustering and diameter. Analyzed a dataset of over 156,000 artists and 300,000 collaborative connections. Applied the Louvain method for community detection and examined genre- and region-specific subgraphs, identifying distinct collaboration patterns across global music industries. Findings revealed a scale-free network structure, significant clustering, and the central role of hubs in maintaining connectivity. This work demonstrates expertise in network analysis, graph theory, and the application of computational tools to large-scale datasets. Currently preparing it for publication.",
    tags: ["Python", "NetworkX", "Cytoscape", "Research", "Big Data", "Graph Theory", "Small-World Networks", "Applied Mathematics", "Collaboration Networks", "Matplotlib", "SciPy", "Scikit-learn"],
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
        className="projects-carousel-container font-tomorrow"
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
                      className="skill-badge bg-gray-200 text-gray-800 text-xs font-tomorrow px-2 py-1 rounded-full"
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