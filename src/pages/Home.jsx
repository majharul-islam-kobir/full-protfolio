import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#000] text-white min-h-screen flex items-center justify-center relative">
      {/* Yellow Background Shape */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-yellow-500 -z-10 rounded-br-[50px]"></div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 relative z-10">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6">
          <h2 className="text-yellow-500 text-4xl font-bold">
            — I'M STEVE MILNER.
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            WEB DESIGNER
          </h3>
          <p className="text-gray-400 mr-[100px]">
            I'm a Tunisian-based web designer & front-end developer focused on
            crafting clean & user-friendly experiences. I am passionate about
            building excellent software that improves the lives of those around me.
          </p>

          {/* Button */}
          <button
            className="relative overflow-hidden font-bold py-3 px-6 rounded-full border-2 text-white group"
            onClick={() => navigate("/about")}
          >
            <span className="absolute inset-0 bg-yellow-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
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
  );
};

export default Home;
