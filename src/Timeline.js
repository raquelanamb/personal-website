import React, { useEffect, useRef } from "react";
import "./App.css"; // Styles for animations and timeline design

const timelineData = [
  {
    date: "2024 - Present",
    title: "Capstone Project Team Lead",
    company: "Naval Undersea Warfare Center (NUWC)",
    description:
      "Leading a team in the development of a Fog of War Chess Assistant. Utilizing NLP, AI, and SQL to analyze gameplay and provide strategic move suggestions in the Fog of War chess variant. Coordinating team meetings, ensuring team cohesion, and handling client communication.",
    skills: ["Python", "Game Theory", "LLMs", "Agile Methodologies", "Scrum"],
  },
  {
    date: "2024",
    title: "Research Assistant",
    company: "University of Massachusetts Dartmouth College of Engineering",
    description:
      "Utilized the Arduino Nano 33 BLE Sense Rev2 to aid in the development of a cutting-edge wearable device. Responsibilities included programming the device's sensors, integrating power management solutions, and enabling remote data storage.",
    skills: ["Arduino", "C++", "Sensor Data Processing", "Embedded Systems"],
  },
];

const Timeline = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          } else {
            entry.target.classList.remove("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="timeline-container relative mx-auto px-8 pb-24 pt-12">
      {/* Central Line */}
      <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300"></div>

      {timelineData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (timelineRefs.current[index] = el)}
          className={`timeline-item flex w-full opacity-0 transition-transform duration-700 
            ${index % 2 === 0 ? "justify-start" : "justify-end"} 
            lg:justify-start md:justify-start sm:justify-center`}
        >
          {/* Date Section */}
          <div className="timeline-date absolute bg-gray-200 text-gray-700 font-bold py-1 px-4 rounded transform -translate-x-1/2">
            {item.date}
          </div>

          {/* Card */}
          <div
            className={`timeline-card bg-white shadow-lg rounded-lg p-6 transition-all duration-300 
              ${index % 2 === 0 ? "lg:ml-12 md:ml-12 sm:mx-auto" : "lg:mr-12 md:mr-12 sm:mx-auto"}`}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 font-medium">{item.company}</p>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill-badge bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Node */}
          <div className="timeline-node w-4 h-4 bg-gray-900 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
