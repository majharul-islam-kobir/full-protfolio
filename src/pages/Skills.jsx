import React from "react";

const Skills = ({ percentage, label }) => {
  const radius = 50;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
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
      </svg>
      <div className="absolute text-white text-lg font-bold">
        {percentage}%
      </div>
      <p className="text-yellow-500 mt-2 text-sm">{label}</p>
    </div>
  );
};

export default Skills;
