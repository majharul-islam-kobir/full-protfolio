import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-12 text-start">
      <div className="w-10/12 mx-auto">
        <h2 className="text-8xl font-bold mb-16 text-white text-center">
          GET IN <span className="text-yellow-400">TOUCH</span>
        </h2>

        {/* Contact Section */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Left Side: Contact Info */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 max-w-[400px]">
            <h2 className="text-4xl font-bold mb-4">DON'T BE SHY!</h2>
            <p className="mb-6">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas, or opportunities to be part of your
              visions.
            </p>

            {/* Address */}
            <div className="mb-4 flex items-center">
              <span className="text-yellow-400 text-2xl mr-4">📞</span>
              <div>
                <h4 className="font-bold">CALL ME</h4>
                <a
                  href="tel:+8801893116109"
                  className="text-white hover:text-yellow-400"
                >
                  +8801893116109
                </a>
              </div>
            </div>


            <div className="mb-4 flex items-center">
              <span className="text-yellow-400 text-2xl mr-4">📧</span>
              <div>
                <h4 className="font-bold">MAIL ME</h4>
                <a
                  href="mailto:majhar13579@gmail.com"
                  className="text-white hover:text-yellow-400"
                >
                  majhar13579@gmail.com
                </a>
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <span className="text-yellow-400 text-2xl mr-4">📍</span>
              <div>
                <h4 className="font-bold">ADDRESS POINT</h4>
                <p>Rajbari Gazipur Dhaka Bangladesh</p>
              </div>
            </div>

            {/* Email */}
           

            {/* Phone */}
            

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-yellow-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-yellow-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-yellow-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-yellow-400"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              {/* Name & Email */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-1/2 p-4 bg-gray-800 text-white rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-1/2 p-4 bg-gray-800 text-white rounded-lg focus:outline-none"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="YOUR SUBJECT"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none"
              />

              {/* Message */}
              <textarea
                placeholder="YOUR MESSAGE"
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none h-32"
              ></textarea>

              {/* Send Button */}
              <button
                type="submit"
                className="relative overflow-hidden font-bold py-3 px-6 rounded-full border-2 text-white group"
              >
                <span className="absolute inset-0 bg-yellow-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 flex items-center pr-10">
                  SEND MESSAGE
                  <span className="bg-yellow-600 p-4 rounded-full absolute right-[-25px] ml-2 transform rotate-180 group-hover:rotate-0 transition-transform duration-300 ease-in-out">
                    ✈️
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
