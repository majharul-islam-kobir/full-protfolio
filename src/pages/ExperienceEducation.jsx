import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserTie,
  faCode,
  faGraduationCap,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

const experienceData = [
  {
    year: "2021 - PRESENT",
    title: "STARTING WEB DEVELOPER",
    company: "ENVATO",
    description: "Developed multiple web applications with cutting-edge technologies.",
    icon: faCode,
  },
  {
    year: "2018 - 2021",
    title: "UI/UX DESIGNER",
    company: "THEMEFOREST",
    description: "Designed user-friendly interfaces and experiences for digital products.",
    icon: faUserTie,
  },
  {
    year: "2018",
    title: "GRAPHICS DESIGN COURSE",
    company: "TUNIS HIGH SCHOOL",
    description: "Completed a comprehensive course in Graphics Design.",
    icon: faSchool,
  },
];

const educationData = [
  {
    year: "2015",
    title: "HAFIZ OF THE QURAN",
    institution: "SELF-STUDY",
    description: "Memorized the entire Quran through dedicated study and devotion.",
    icon: faGraduationCap,
  },
  {
    year: "2022 - 2023",
    title: "GRADUATION",
    institution: "ISLAMIC UNIVERSITY",
    description: "Earned a Master's degree in Islamic Studies.",
    icon: faGraduationCap,
  },
  {
    year: "2024",
    title: "TEACHE IN AHMAD IT SOLUTION",
    institution: "AHMAD'S EDUCATION",
    description: "Specialized in advanced software development and AI.",
    icon: faBriefcase,
  },
];

const TimelineCard = ({ year, title, company, description, icon }) => (
  <motion.div
    className="flex sm:flex-row flex-col items-start gap-4 mb-10 w-9/12 mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
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
  </motion.div>
);

const ExperienceEducation = () => {
  return (
    <motion.div
      className="bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-white p-10 container mx-auto">
        <h2 className="mb-20 text-center sm:text-5xl text-3xl font-bold uppercase">
          Experience & Education
        </h2>
        <div className="sm:grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <h3 className="text-4xl font-semibold text-center mb-10 text-yellow-400">
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
    </motion.div>
  );
};

export default ExperienceEducation;
