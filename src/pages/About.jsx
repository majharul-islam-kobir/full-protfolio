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
    <div className="bg-gray-900 text-white min-h-screen p-10 ">
      <div className="text-center mb-10">
        <h1 className="sm:text-7xl text-4xl font-bold mb-15">
          ABOUT <span className="text-yellow-500">ME</span>
        </h1>
      </div>

      {/* Personal Info */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 w-10/12 mx-auto">
        <div>
          <div className="mb-16">
            <h2 className="text-4xl font-semibold mb-6 text-center  ">
              Personal Info
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg text-center sm:text-start">
              <li>
                <span className="font-bold">First Name:</span> Majharul{" "}
              </li>
              <li>
                <span className="font-bold">Last Name:</span> Islam
              </li>
              <li>
                <span className="font-bold">Age:</span> 25
              </li>
              <li>
                <span className="font-bold">Nationality:</span> Bangladeshi
              </li>
              <li>
                <span className="font-bold">Freelance:</span> Available
              </li>
              <li>
                <span className="font-bold">Email:</span> majhar13579@gmai.com
              </li>
            </ul>
          </div>
          <div className="mb-10">
            <h2 className="text-4xl font-semibold mb-6 text-center ">
              Personal Info
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg text-center sm:text-start">
              <li>
                <span className="font-bold">First Name:</span> Majharul{" "}
              </li>
              <li>
                <span className="font-bold">Last Name:</span> Islam
              </li>
              <li>
                <span className="font-bold">Age:</span> 25
              </li>
              <li>
                <span className="font-bold">Nationality:</span> Bangladeshi
              </li>
              <li>
                <span className="font-bold">Freelance:</span> Available
              </li>
              <li>
                <span className="font-bold">Email:</span> majhar13579@gmai.com
              </li>
            </ul>
          </div>
          <a href="/src/asset/image/ProfessionalCVResume.pdf" download="My_CV" className="mx-auto">
            <button className="relative overflow-hidden font-bold py-3 px-6  rounded-full border-2 text-white group">
              <span className=" absolute inset-0 bg-yellow-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 flex items-center pr-10">
                DOWNLOAD
                <span className="ml-3"> CV</span>
                <span className="ml-2 transform group-hover:rotate-0 transition-transform duration-300 ease-in-out bg-yellow-600 p-4 rounded-full absolute right-[-25px]">
                  <FaDownload />
                </span>
              </span>
            </button>
          </a>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white p-7 shadow-orange-400 rounded-md bg-black "
              >
                <h2 className="text-5xl font-bold text-yellow-400 text-start">
                  {stat.value}
                </h2>
                <p className="mt-2 text-lg uppercase text-end">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="text-center mb-10">
        <h1 className="sm:text-7xl text-4xl font-bold my-20">
          MY <span className="text-yellow-500">SKILLS</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 w-11/12 mx-auto">
        <Skills percentage={50} label="HTML" />
        <Skills percentage={70} label="CSS" />
        <Skills percentage={90} label="REACT" />
        <Skills percentage={80} label="JAVASCRIPT" />
        <Skills percentage={90} label="TAILWIND CSS" />
        <Skills percentage={80} label="BOOTSTRAP" />
        <Skills percentage={70} label="JQUERY" />
        <Skills percentage={50} label="FIREBASE" />
      </div>

      {/* Experience */}
      <ExperienceEducation />
    </div>
  );
};

export default About;
