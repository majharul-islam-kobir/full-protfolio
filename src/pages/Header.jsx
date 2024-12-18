import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed right-6 top-1/3 space-y-4 z-50 overflow-hidden">
      {/* Home */}
      <div
       
        className="relative group rounded-full cursor-pointer shadow-md transition-transform transform hover:translate-x-2 duration-300 ease-in-out flex items-center space-x-2 overflow-hidden"
      >
        <span className="pl-4 mr-auto text-2xl font-semibold my-auto text-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Home
        </span>
        <span  onClick={() => navigate("/")} className="ml-3 bg-gray-700 group-hover:bg-yellow-500 p-3 z-10 rounded-full transition-all duration-300">
          🏠
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out"></div>
      </div>

      {/* Profile */}
      <div
       
        className="relative z-10 group rounded-full cursor-pointer shadow-md transition-transform transform hover:translate-x-2 duration-300 ease-in-out flex items-center space-x-2 overflow-hidden"
      >
        <span className="pl-4 text-2xl mr-auto font-semibold my-auto text-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          About
        </span>
        <span  onClick={() => navigate("about")} className="ml-3 bg-gray-700 group-hover:bg-yellow-500 p-3 z-10 rounded-full transition-all duration-300">
          👤
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out"></div>
      </div>

      {/* Portfolio */}
      <div
        
        className="relative z-10 group rounded-full cursor-pointer shadow-md transition-transform transform hover:translate-x-2 duration-300 ease-in-out flex items-center space-x-2 overflow-hidden"
      >
        <span className="pl-4 mr-auto text-2xl font-semibold my-auto text-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Portfolio
        </span>
        <span onClick={() => navigate("Portfolio")} className="ml-3 bg-gray-700 group-hover:bg-yellow-500 p-3 z-10 rounded-full transition-all duration-300">
          💼
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out"></div>
      </div>

      {/* Contact */}
      <div
        
        className="relative z-10 group rounded-full cursor-pointer shadow-md transition-transform transform hover:translate-x-2 duration-300 ease-in-out flex items-center space-x-2 overflow-hidden"
      >
        <span className="pl-4 mr-auto text-2xl font-semibold my-auto text-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Contact
        </span>
        <span onClick={() => navigate("contact")} className="ml-3 bg-gray-700 group-hover:bg-yellow-500 p-3 z-10 rounded-full transition-all duration-300">
          ✉️
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out"></div>
      </div>

      {/* Blog */}
      <div
        
        className="relative z-10 group rounded-full cursor-pointer shadow-md transition-transform transform hover:translate-x-2 duration-300 ease-in-out flex items-center space-x-2 overflow-hidden"
      >
        <span className="pl-4 mr-auto text-2xl font-semibold my-auto text-start z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          BLOG
        </span>
        <span onClick={() => navigate("blog")} className="ml-3 bg-gray-700 group-hover:bg-yellow-500 p-3 z-10 rounded-full transition-all duration-300">
          💬
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out"></div>
      </div>
    </div>
  );
}

export default Header;
