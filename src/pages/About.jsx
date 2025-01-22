import { motion } from "framer-motion"; // Framer Motion import করা হয়েছে
import Skills from "./Skills";
import ExperienceEducation from "./ExperienceEducation";
import { FaDownload } from "react-icons/fa";

const About = () => {
  const stats = [
    { value: "1.5+", label: "----Years of Experience" },
    { value: "15+", label: "----Completed Projects" },
    { value: "12+", label: "----Happy Customers" },
    { value: "3+", label: "----Awards Won" },
  ];

  return (
    <div className="bg-gray-900 ">
      <div className="container mx-auto text-white min-h-screen p-10 ">
        {/* Title with Fade-in Animation */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="sm:text-7xl text-4xl font-bold mb-15">
            ABOUT <span className="text-yellow-500">ME</span>
          </h1>
        </motion.div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-10/12 mx-auto">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-16 sm:mb-8">
              <h2 className="text-4xl font-semibold mb-2 sm:mb-6 sm:text-center">
                Personal Info
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 text-lg text-start">
                <li>
                  <span className="font-bold">First Name:</span> Majharul Islam
                  Kobir
                </li>
                <li>
                  <span className="font-bold">Masters:</span> Islamic Studies
                </li>
                <li>
                  <span className="font-bold">Experience:</span> 1.5+ years in
                  Frontend Development
                </li>
                <li>
                  <span className="font-bold">Location:</span> Gazipur,
                  Bangladesh
                </li>
                <li>
                  <span className="font-bold">Freelance:</span> Available
                </li>
                <li>
                  <span className="font-bold">Email:</span> majhar13579@gmai.com
                </li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-8">
              <h2 className="text-4xl font-semibold mb-6 sm:mb-2 sm:text-center">
                Professional Info
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg text-start ">
                <li>
                  <span className="font-bold">Job Title:</span> Front-End
                  Developer
                </li>
                <li>
                  <span className="font-bold">Industry:</span> Web Development
                </li>
                <li>
                  <span className="font-bold">Skills:</span> React, JavaScript,
                  Next , Node , Mongodb
                </li>
                <li>
                  <span className="font-bold">Experience:</span> 1.5+ years in
                  Frontend Development
                </li>
                <li>
                  <span className="font-bold">Freelance:</span> Available
                </li>
                <li>
                  <span className="font-bold">Email:</span> majhar13579@gmai.com
                </li>
              </ul>
            </div>

            {/* Download Button with Hover Animation */}
            <motion.a
              href="/src/asset/image/ProfessionalCVResume.pdf"
              download="My_CV"
              className="mx-auto"
              whileHover={{ scale: 1.1 }} // Hover effect to zoom in
              whileTap={{ scale: 0.9 }} // Tap effect
            ></motion.a>
            <button className=" relative overflow-hidden font-bold py-3 px-6  rounded-full border-2 text-white group">
              <span className=" absolute inset-0 bg-yellow-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 flex items-center pr-10">
                DOWNLOAD
                <span className="ml-3"> CV</span>
                <span className="ml-2 transform group-hover:rotate-0 transition-transform duration-300 ease-in-out bg-yellow-600 p-4 rounded-full absolute right-[-25px]">
                  <FaDownload />
                </span>
              </span>
            </button>
          </motion.div>

          {/* Stats Section with Fade-in Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center text-white p-7  mt-12 shadow-orange-400 rounded-md bg-black"
                >
                  <motion.h2
                    className="text-5xl font-bold text-yellow-400 text-start"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.h2>
                  <motion.p
                    className="mt-2 text-lg uppercase text-end"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.label}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="sm:text-7xl text-4xl font-bold my-20">
            MY <span className="text-yellow-500">SKILLS</span>
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 w-11/12 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Skills percentage={50} label="HTML" />
          <Skills percentage={70} label="CSS" />
          <Skills percentage={80} label="JAVASCRIPT" />
          <Skills percentage={90} label="REACT.JS" />
          <Skills percentage={50} label="NEXT.JS" />
          <Skills percentage={90} label="TAILWIND CSS" />
          <Skills percentage={80} label="BOOTSTRAP" />
          <Skills percentage={70} label="JQUERY" />
          <Skills percentage={50} label="FIREBASE" />
          <Skills percentage={60} label="NODE" />
          <Skills percentage={70} label="MONGODB" />
          <Skills percentage={90} label="JWT" />
        </motion.div>

        {/* Experience Section */}
        <ExperienceEducation />
      </div>
    </div>
  );
};

export default About;
