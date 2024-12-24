import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const EducationSection = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (index) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const educationData = [
    {
      school: "University of Massachusetts Dartmouth",
      degree: "Master of Science in Computer Science",
      year: "Expected May 2026",
      details: "Focusing in artificial intelligence and its applications to cybersecurity.",
      courses: "Intrusion Detection and Digital Defense, Theoretical Computer Science.",
    },
    {
      school: "University of Massachusetts Dartmouth",
      degree: "Bachelor of Science in Computer Science, AI Concentration, Mathematics Minor",
      year: "September 2023 - May 2025",
      details: "NSF CyberCorps SFS, Big Data Club VP, Research Assistant.",
      gpa: "4.0",
      courses: "Artificial Intelligence, Data Mining and Knowledge Discovery, Machine Learning, Digital Forensics, Design of Operating Systems.",
      accomplishments: "National Science Foundation CyberCorps Scholarship for Service recipient, Vice President of Big Data Club, College of Engineering Research Assistant, Chancellor's List.",
    },
    {
      school: "Massasoit Community College",
      degree: "Associate Degrees in Computer Science and Mathematics",
      year: "September 2021 - May 2023",
      gpa: "4.0",
      other: "Graduated with Highest Honors and transferred to UMass Dartmouth.",
    },
  ];

  return (
    <section id="education">
      <h2 className="text-4xl font-bold text-center mb-6 text-black"></h2>
      <div className="flex flex-col items-center gap-10 w-full px-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`flip-card ${flipped[index] ? "flipped" : ""}`}
            style={{ width: "40%", height: "300px" }}
            onClick={() => toggleFlip(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
          <div className="flip-card-inner" style={{ perspective: "1000px" }}>
              {/* Front Side */}
              <div className="flip-card-front" style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}>
                <h3 className="text-2xl font-bold mb-4">{edu.degree}</h3>
                <p className="text-lg font-semibold text-blue-700 mb-4">{edu.school}</p>
                <p className="text-md text-gray-500 italic" style={{ marginBottom: "16px" }}>{edu.year}</p>
                <p className="text-sm">{edu.details}</p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                {edu.gpa && <p className="text-md" style={{ marginBottom: "12px" }}><strong>GPA:</strong> {edu.gpa}</p>}
                {edu.courses && <p className="text-md" style={{ marginBottom: "12px" }}><strong>Relevant Courses:</strong> {edu.courses}</p>}
                {edu.accomplishments && <p className="text-md"><strong>Awards & Activities:</strong> {edu.accomplishments}</p>}
                {edu.other && <p className="text-md"><strong></strong> {edu.other}</p>}
            </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
