import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBriefcase, 
  faUserTie, 
  faCode, 
  faGraduationCap, 
  faSchool 
} from "@fortawesome/free-solid-svg-icons";

const experienceData = [
  {
    year: "2018 - PRESENT",
    title: "WEB DEVELOPER",
    company: "ENVATO",
    description: "Developed multiple web applications with cutting-edge technologies.",
    icon: faCode, // কোডিং আইকন
  },
  {
    year: "2013 - 2018",
    title: "UI/UX DESIGNER",
    company: "THEMEFOREST",
    description: "Designed user-friendly interfaces and experiences for digital products.",
    icon: faUserTie, // ডিজাইনার আইকন
  },
  {
    year: "2005 - 2013",
    title: "CONSULTANT",
    company: "VIDEOHIVE",
    description: "Provided consultancy on various digital media and marketing strategies.",
    icon: faBriefcase, // কনসাল্টেন্ট আইকন
  },
];

const educationData = [
  {
    year: "2015",
    title: "ENGINEERING DEGREE",
    institution: "OXFORD UNIVERSITY",
    description: "Completed a degree in Computer Science and Engineering.",
    icon: faGraduationCap, // গ্রাজুয়েশন আইকন
  },
  {
    year: "2012",
    title: "MASTER DEGREE",
    institution: "KIEV UNIVERSITY",
    description: "Specialized in advanced software development and AI.",
    icon: faGraduationCap,
  },
  {
    year: "2009",
    title: "BACHELOR DEGREE",
    institution: "TUNIS HIGH SCHOOL",
    description: "Completed foundational studies with excellent grades.",
    icon: faSchool, // স্কুল আইকন
  },
];

const TimelineCard = ({ year, title, company, description, icon }) => (
  <div className="flex gap-4 mb-8 items-start">
    <div className="bg-yellow-500 p-4 rounded-full flex-shrink-0">
      <FontAwesomeIcon icon={icon} className="text-black text-2xl" />
    </div>
    <div>
      <div className="bg-gray-800 text-white px-2 py-1 rounded-md inline-block mb-2 text-sm font-semibold">
        {year}
      </div>
      <h3 className="text-xl font-bold text-white">
        {title} - <span className="text-yellow-400">{company}</span>
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const ExperienceEducation = () => {
  return (
    <div className="bg-black text-white p-10">
      <h2 className="text-center text-3xl font-bold mb-10 uppercase">Experience & Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Experience</h3>
          {experienceData.map((exp, idx) => (
            <TimelineCard
              key={idx}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              icon={exp.icon}
            />
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Education</h3>
          {educationData.map((edu, idx) => (
            <TimelineCard
              key={idx}
              year={edu.year}
              title={edu.title}
              company={edu.institution}
              description={edu.description}
              icon={edu.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;