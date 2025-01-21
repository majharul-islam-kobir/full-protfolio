import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ee6b958-d583-48db-a0ea-2e85fc394532")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="bg-black text-white text-start ">
      <div className="w-10/12 container mx-auto">
        <h2 className="sm:text-8xl text-4xl font-bold mb-16 mt-0 text-white text-center">
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

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/majharul.islam.kobir.2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-yellow-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/majharul-islam-0345b7322/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-yellow-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/majharul-islam-kobir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-yellow-400"
              >
                <FaGithub />
              </a>
              <a
                href="www.youtube.com/@majharulislam7852"
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
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  required
                  className="w-1/2 p-4 bg-gray-800 text-white rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  required
                  className="w-1/2 p-4 bg-gray-800 text-white rounded-lg focus:outline-none"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                required
                className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                required
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
            <span className="block mt-4 text-yellow-400 mb-10">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
