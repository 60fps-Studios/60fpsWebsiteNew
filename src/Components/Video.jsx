import { motion } from "framer-motion";
import React from "react";

const Video = ({ src, opacity }) => {
  return (
    <video autoPlay loop muted className="h-full w-full object-cover">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
