import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import image1 from "../asset/image/Screenshot 2024-12-16 155428.png";
import image2 from "../asset/image/Screenshot 2024-12-16 171010.png";
import image3 from "../asset/image/protfolio.png";
import image4 from "../asset/image/task menajment.png";
import image5 from "../asset/image/short.png";
import image6 from "../asset/image/restauran.png";
import image7 from "../asset/image/small project.png";
import image8 from "../asset/image/todo.png";
import image9 from "../asset/image/Todo2.png";

const portfolioItems = [
  {
    id: 1,
    category: "E-Commerce",
    imageUrl: image1,
    link: "https://book-selling-delta.vercel.app/",
    title: "Book Selling",
  },
  {
    id: 2,
    category: "Protfolio",
    imageUrl: image2,
    link: "https://jovial-starburst-51746b.netlify.app/",
    title: "Protfolio",
  },
  {
    id: 3,
    category: "Protfolio",
    imageUrl: image3,
    link: "https://protfolio-six-alpha.vercel.app/",
    title: "About Me",
  },
  {
    id: 4,
    category: "mockup",
    imageUrl: image4,
    link: "https://task-management-snowy-alpha.vercel.app/",
    title: "Task Menajment",
  },
  {
    id: 5,
    category: "E-Commerce",
    imageUrl: image5,
    link: "https://effortless-jalebi-2342cd.netlify.app/",
    title: "Small Project",
  },
  {
    id: 6,
    category: "E-Commerce",
    imageUrl: image6,
    link: "https://majharul-islam-kobir.github.io/restaurant-project/",
    title: "Restauran",
  },
  {
    id: 7,
    category: "graphic",
    imageUrl: image7,
    link: "https://graceful-frangipane-dcda75.netlify.app/",
    title: "Small Project",
  },
  {
    id: 8,
    category: "Todo-L",
    imageUrl: image8,
    link: "https://curious-centaur-6fb5d2.netlify.app/",
    title: "Small Project",
  },
  {
    id: 9,
    category: "Todo-L",
    imageUrl: image9,
    link: "https://majharul-islam-kobir.github.io/majharul-islam-kobir-todo-list/",
    title: "Logo 3",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="bg-black py-12 text-white">
      <div className="container mx-auto text-center w-10/12">
        <h2 className="sm:text-7xl text-4xl font-bold mb-10 text-white">
          MY <span className="text-yellow-400">PORTFOLIO</span>
        </h2>

        {/* Responsive Menu Icon */}
        <div className="sm:hidden flex justify-end mb-4">
          <button
            onClick={toggleMenu}
            className="text-yellow-400 text-3xl mx-auto"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faBars : faBars} />
          </button>
        </div>

        {/* Filter Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex justify-center sm:space-x-6 sm:mb-10 bg-black sm:bg-transparent p-4 sm:p-0 rounded-md `}
        >
          <div className="flex flex-col items-center space-y-4">
            <button
              className={`text-lg ${
                filter === "all" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400`}
              onClick={() => setFilter("all")}
            >
              ALL
            </button>
            <button
              className={`text-lg ${
                filter === "E-Commerce" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400`}
              onClick={() => setFilter("E-Commerce")}
            >
              E-Commerce
            </button>
            <button
              className={`text-lg ${
                filter === "Protfolio" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400`}
              onClick={() => setFilter("Protfolio")}
            >
              Protfolio
            </button>
            <button
              className={`text-lg ${
                filter === "Todo-L" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400`}
              onClick={() => setFilter("Todo-L")}
            >
              Todo-L
            </button>
            <button
              className={`text-lg ${
                filter === "mockup" ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400`}
              onClick={() => setFilter("mockup")}
            >
              MOCKUP
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 rounded-lg overflow-hidden block"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover p-2"
              />
              <p className="text-2xl font-bold">{item.category}</p>
              <p className="text-2xl font-bold">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
