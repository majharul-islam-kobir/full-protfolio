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
    year: "2021 - PRESENT",
    title: "STARTING WEB DEVELOPER",
    company: "ENVATO",
    description: "Developed multiple web applications with cutting-edge technologies.",
    icon: faCode, // কোডিং আইকন
  },
  {
    year: "2018 - 2021",
    title: "UI/UX DESIGNER",
    company: "THEMEFOREST",
    description: "Designed user-friendly interfaces and experiences for digital products.",
    icon: faUserTie, // ডিজাইনার আইকন
  },
  {
    year: "2018",
    title: "GRAPHICS DESIGN COURSE",
    company: "TUNIS HIGH SCHOOL",
    description: "Completed a comprehensive course in Graphics Design, gaining expertise in visual communication, design tools, and creative project execution.",
    icon: faSchool,
  },
];

const educationData = [
  {
    year: "2015",
    title: "HAFIZ OF THE QURAN",
    institution: " SELF-STUDY",
    description: "Became a Hafiz of the Quran, completing the memorization of the entire Quran through dedicated study and devotion.",
    icon: faGraduationCap, // গ্রাজুয়েশন আইকন
  },
  {
    year: "2022 - 2023",
    title: "GRADUATION",
    institution: "ISLAMIC UNIVERSITY",
    description: "Earned a Master's degree from Islamic University, specializing in digital media and marketing strategies.",
    icon: faBriefcase, // কনসাল্টেন্ট আইকন
  },
  {
    year: "2024",
    title: "TEACHE IN AHMAD IT SLUTION",
    institution: "AHMAD'S EDUCATION",
    description: "Specialized in advanced software development and AI.",
    icon: faGraduationCap,
  },
];

const TimelineCard = ({ year, title, company, description, icon }) => (
  <div className="flex sm:flex-row flex-col items-start gap-4 mb-10">
    {/* Icon */}
    <div className="flex-shrink-0 mb-4 sm:mb-0 flex justify-center sm:justify-start w-full sm:w-auto">
      <div className="bg-yellow-500 p-4 rounded-full">
        <FontAwesomeIcon icon={icon} className="text-black text-2xl" />
      </div>
    </div>
    {/* Content */}
    <div className="text-center sm:text-left">
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
      <h2 className="mb-20 sm:text-5xl text-3xl font-bold uppercase">
        Experience & Education
      </h2>
      <div className="sm:grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Experience Section */}
        <div>
          <h3 className="text-4xl font-semibold mb-10 text-yellow-400">
            Experience
          </h3>
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
        {/* Education Section */}
        <div>
          <h3 className="text-4xl font-semibold mb-10 text-yellow-400">
            Education
          </h3>
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
