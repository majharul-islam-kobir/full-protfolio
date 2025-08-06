import { useNavigate } from "react-router-dom";
import image from "../asset/image/my-pic.jpg";
import About from "./About";
import Portfolio from "./Protfolio";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000] overflow-x-hidden">
      <div className="w-full text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Yellow Background Shape */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-yellow-500 -z-10 rounded-br-[50px]" />

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6 sm:p-8 relative z-10 max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Profile"
              className="rounded-full shadow-lg shadow-orange-800 w-60 h-60 sm:w-72 sm:h-72 object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 text-center sm:text-left">
            <h2 className="text-yellow-500 text-4xl sm:text-5xl font-bold">
              I'M MAJHARUL ISLAM.
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">
              FRONT-END DEVELOPER
            </h3>
            <p className="text-gray-400">
              I am a passionate front-end developer and web designer focused on
              creating clean, user-friendly, and impactful digital experiences.
              My goal is to build websites and applications that are accessible,
              engaging, and make a meaningful difference in people's lives,
              regardless of location.
            </p>

            {/* Button */}
            <button
              className="relative overflow-hidden font-bold py-3 px-6 rounded-full border-2 text-white group"
              onClick={() => navigate("/about")}
            >
              <span className="absolute inset-0 bg-yellow-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center pr-10">
                MORE ABOUT ME
                <span className="bg-yellow-600 absolute right-[-25px] p-3 rounded-full ml-2 transform rotate-180 group-hover:rotate-0 transition-transform duration-300 ease-in-out">
                  ➡️
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
