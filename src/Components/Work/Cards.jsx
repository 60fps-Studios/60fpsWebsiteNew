import { motion } from "framer-motion";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ image, OnClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={twMerge("group relative h-full w-full text-black", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={OnClick}
    >
      <img
        className="h-full w-full object-cover blur-[2px] saturate-0 duration-100 ease-in group-hover:blur-0 group-hover:saturate-100"
        src={image.image_url}
        alt={image.image_alt}
      />
      <div className="absolute inset-0">
        <div className="relative flex h-full flex-col items-center justify-center">
          <motion.div
            className="absolute flex"
            variants={{
              hover: {
                top: "5%",
                left: "5%",
                transition: {
                  duration: 0.5,
                },
              },
            }}
            animate={isHovered ? "hover" : "initial"}
          >
            <h4 className="rounded-lg bg-black/20 p-1 text-5xl font-semibold backdrop-blur-sm duration-500 ease-in-out group-hover:bg-black/30">
              {image.title}
            </h4>
          </motion.div>
          <motion.div
            className="absolute flex"
            variants={{
              initial: {
                display: "none",
                bottom: "10%",
                opacity: 0,
              },
              hover: {
                display: "flex",
                bottom: "15%",
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.5,
                },
              },
            }}
            animate={isHovered ? "hover" : "initial"}
          >
            <p className="backdrop-blur-xs mx-4 mt-4 self-center text-wrap rounded-lg bg-black/30 p-1 align-middle font-semibold">
              {image.description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
