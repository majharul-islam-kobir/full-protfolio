import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Framer Motion import করা হয়েছে

const Skills = ({ percentage, label }) => {
  const radius = 50;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll position নিয়ে Animation trigger করা
      const element = document.getElementById(label);
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("animate-fade-in"); // Fade-in animation add করা
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // On initial load, check if the element is in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, [label]);

  return (
    <div
      id={label}
      className="flex flex-col items-center justify-center relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Hover state set করা
      onMouseLeave={() => setIsHovered(false)} // Hover state remove করা
    >
      <motion.svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90 transition-all duration-300"
        whileHover={{ scale: 1.1 }} // Hover animation (slightly zoom-in effect)
      >
        {/* Background Circle */}
        <circle
          stroke="#2d2d2d"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Circle */}
        <circle
          stroke="#facc15"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </motion.svg>
      <div className="absolute text-white text-lg font-bold">
        {percentage}%
      </div>
      <p className="text-yellow-500 mt-2 text-sm">{label}</p>
    </div>
  );
};

export default Skills;
