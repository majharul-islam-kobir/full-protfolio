import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white py-12 ">
      <div className='w-10/12 mx-auto'>
      <h2 className="text-8xl font-bold mb-16 text-white text-center show ">
            GET IN <span className="text-yellow-400">TOUCH</span>
          </h2>
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 max-w-[400px]">
          <h2 className="text-4xl font-bold mb-4">DON'T BE SHY!</h2>
          <p className="mb-6">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-4">📍</span>
              <div>
                <h4 className="font-bold">ADDRESS POINT</h4>
                <p>123 Street New York City, United States Of America 750065.</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-4">📧</span>
              <div>
                <h4 className="font-bold">MAIL ME</h4>
                <p>steve@mail.com</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-4">📞</span>
              <div>
                <h4 className="font-bold">CALL ME</h4>
                <p>+216 21 184 010</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            {/* Social Icons */}
            <a href="#" className="text-2xl text-white hover:text-yellow-400">🔗</a>
            <a href="#" className="text-2xl text-white hover:text-yellow-400">🐦</a>
            <a href="#" className="text-2xl text-white hover:text-yellow-400">▶️</a>
            <a href="#" className="text-2xl text-white hover:text-yellow-400">⚽</a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2">
          
          <form className="space-y-6">
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
            <input
              type="text"
              placeholder="YOUR SUBJECT"
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <textarea
              placeholder="YOUR MESSAGE"
              className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none h-32"
            ></textarea>
           <button className="relative overflow-hidden font-bold py-3 px-6 rounded-full border-2 text-white group">
                <span className="absolute inset-0 bg-yellow-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 flex items-center pr-10">
                  SEND MESSAGE
                  
                  <span className="bg-yellow-600 p-4 rounded-full  absolute right-[-25px] ml-2 transform rotate-180 group-hover:rotate-0 transition-transform duration-300 ease-in-out">
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
