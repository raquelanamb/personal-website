import React from "react";

const awardsList = [
  {
    title: "NSF CyberCorps Scholarship for Service Recipient",
    date: "2024–2026",
    organization: "National Science Foundation",
    description:
      "Full-ride scholarship awarded to top students pursuing cybersecurity careers in public service.",
  },
  {
    title: "UMass Dartmouth Feature Story",
    date: "July 2025",
    organization: "University of Massachusetts Dartmouth",
    description: "Profiled by UMass Dartmouth for academic excellence and interdisciplinary impact. The feature explores my path through computer science research, work in AI and cybersecurity, leadership involvement, and dedication to ethical, service-driven computing.",
    url: "https://www.umassd.edu/feature-stories/2025/raquel-bush-25-26.html",
  },
  {
    title: "The Vine DeLoria, Jr. Award for Outstanding Academic Achievement",
    date: "May 2025",
    organization: "ALANA Graduation Faculty Awards Committee",
  },
  {
    title: "Nomination to be Scholar Day Presenter",
    date: "April 2025",
    organization: "University of Massachusetts Dartmouth",
    description:
      'Nominated by the Dean of the College of Engineering to represent the Computer Science department at UMass Dartmouth’s annual Scholar Day, a showcase of outstanding undergraduate research and academic achievement. I presented my research project, "Analysis of a Spotify Collaboration Network for Small-World Properties."',
  },
  {
    title: "Outstanding Transfer Student Award",
    date: "April 2025",
    organization: "Department of Computer and Information Science",
  },
  {
    title: "Transfer Student Academic Excellence Award",
    date: "April 2025",
    organization: "College of Engineering",
  },
  {
    title: "Featured iFixit Technical Writing Team",
    date: "December 2023",
    organization: "University of Massachusetts Dartmouth",
    description:
      "Created comprehensive Troubleshooting and Device pages for the Garmin Vívoactive 4 smartwatch, as well as six replacement guides for parts of the watch. My team's work was featured among iFixit's Featured Student Guides, and I was recognized for my professionalism and outstanding contributions to the project.",
  },
  {
    title: "CIS Coding Competition Finalist",
    date: "December 2023",
    organization:
      "University of Massachusetts Dartmouth Department of Computer and Information Science",
    description:
      "Achieved status of finalist in CIS coding competition, of which there were three. No winner was ultimately chosen.",
  },
  {
    title: "CSF Sealbearer",
    date: "May 2019",
    organization: "California Scholarship Federation",
    description:
      "Earned for sustained academic excellence through consistent membership in the California Scholarship Federation (CSF) during high school.",
  },
  {
    title: "California State Seal of Biliteracy",
    date: "May 2019",
    organization: "State of California",
    description: "Received for Latin.",
  },
];

const Awards = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <div className="space-y-6">
        {awardsList.map((award, index) => (
          <div
            key={index}
            className="pl-4 pr-4 py-2 bg-white/50 backdrop-blur-md rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold font-tomorrow text-gray-900">
              {award.title}
            </h3>

            <p className="text-sm text-gray-600 italic font-tomorrow">
              {award.date} — {award.organization}
            </p>

            {award.description && (
              <p className="mt-1 text-gray-700 text-sm font-tomorrow">
                {award.description}
              </p>
            )}

            {award.url && (
              <a
                href={award.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-tomorrow text-blue-600 hover:text-blue-800 underline"
              >
                Read feature
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
