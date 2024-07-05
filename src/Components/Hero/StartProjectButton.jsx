import { motion } from "framer-motion";
import React from "react";
import { ProjectButtonText } from "../../data";

const StartProjectButton = ({ opacity, scale, blur, handleNavigation }) => {
  return (
    <motion.button
      onClick={handleNavigation}
      className="relative flex flex-col items-center justify-center rounded-full border-2 border-white text-white portrait:size-52 landscape:size-44 landscape:lg:size-52"
      style={{
        opacity,
        scale,
        filter: blur,
      }}
      whileHover={{
        scale: 1.25,
        backgroundColor: "white",
        color: "black",
      }}
      whileTap={{
        scale: 0.9,
        backgroundColor: "white",
        color: "black",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </motion.svg>
      <span className="text-lg">{ProjectButtonText}</span>
    </motion.button>
  );
};

export default StartProjectButton;
