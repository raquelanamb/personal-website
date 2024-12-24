import React, { useEffect, useRef } from "react";

// Timeline data for Experience section
const timelineData = [
  {
    period: "2024 - Present",
    title: "Capstone Project Team Lead",
    company: "Naval Undersea Warfare Center (NUWC)",
    description:
      "Leading a team in the development of a Fog of War Chess Assistant. Utilizing NLP, AI, and SQL to analyze gameplay and provide strategic move suggestions in the Fog of War chess variant. Coordinating team meetings, ensuring team cohesion, and handling client communication.",
    skills: ["Python", "Game Theory", "LLMs", "Agile Methodologies", "Scrum"],
  },
  {
    period: "2024",
    title: "Research Assistant",
    company: "University of Massachusetts Dartmouth College of Engineering",
    description:
      "Utilized the Arduino Nano 33 BLE Sense Rev2 to aid in the development of a cutting-edge wearable device. Responsibilities included programming the device's sensors, integrating power management solutions, and enabling remote data storage.",
    skills: ["Arduino", "C++", "Embedded Systems", "Sensor Data Processing"],
  },
];

const Timeline = () => {
  const timelineRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when visible
            entry.target.classList.add("animate-visible");
          } else {
            // Remove animation classes when not visible
            entry.target.classList.remove("animate-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe timeline elements
    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe timeline line
    if (lineRef.current) observer.observe(lineRef.current);

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });

      if (lineRef.current) observer.unobserve(lineRef.current);
    };
  }, []);

  return (
    <div className="relative container mx-auto px-8 pb-24 overflow-hidden">
      {/* Central Timeline Line */}
      <div
        ref={lineRef}
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 animate-fadeDown"
        style={{ height: "0%" }}
      ></div>

      {timelineData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (timelineRefs.current[index] = el)}
          className={`mb-10 flex items-center w-full opacity-0 transform transition duration-700 ${
            index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
          }`}
        >
          {/* Timeline Card */}
          <div
            className={`relative bg-white shadow-lg rounded-lg p-6 max-w-md ${
              index % 2 === 0 ? "mr-80" : "ml-80"
            }`}
          >
            <p className="text-gray-500 text-sm">{item.period}</p>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 font-medium">{item.company}</p>
            <p className="text-gray-700 text-sm mt-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full z-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
