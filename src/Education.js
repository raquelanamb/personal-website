import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const EducationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const educationData = [
    {
      school: "University of Massachusetts Dartmouth",
      degree: "Master of Science in Computer Science",
      year: "Expected May 2026",
      key_details: "Focusing in artificial intelligence and its applications to cybersecurity.",
      courses: "Intrusion Detection and Digital Defense, Theoretical Computer Science.",
    },
    {
      school: "University of Massachusetts Dartmouth",
      degree: "Bachelor of Science in Computer Science, AI Concentration, Mathematics Minor",
      year: "September 2023 - May 2025",
      key_details: "NSF CyberCorps SFS, Big Data Club VP, Research Assistant.",
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
      <div className="flex flex-col items-center gap-6 w-full px-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card shadow-lg rounded-lg bg-white p-4 w-full max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-sm text-blue-700">{edu.school}</p>
                <p className="text-xs text-gray-500 italic">{edu.year}</p>
              </div>
              <span className="text-gray-500">
                {expandedIndex === index ? "▲" : "▼"}
              </span>
            </div>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className="mt-4 text-sm text-gray-700"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  
                  {/*<p>{edu.key_details}</p>*/}
                  {edu.gpa && (
                    <>
                      <p><strong>GPA:</strong> {edu.gpa}</p>
                      {(edu.courses || edu.accomplishments || edu.other) && <br />}
                    </>
                  )}

                  {edu.courses && (
                    <>
                      <p><strong>Relevant Courses:</strong> {edu.courses}</p>
                      {(edu.accomplishments || edu.other) && <br />}
                    </>
                  )}
                  {edu.accomplishments && (
                    <p>
                      <strong>Awards & Activities:</strong> {edu.accomplishments}
                    </p>
                  )}
                  {edu.other && <p>{edu.other}</p>}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
