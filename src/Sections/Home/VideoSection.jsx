import React, { useRef } from "react";
import {
  easeIn,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Video from "../../Components/Video";
import { showReel } from "../../data";

const VideoSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const blur = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["blur(15px)", "blur(0px)"],
  );
  const backgroundOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0], {
    ease: easeOut,
  });

  return (
    <motion.div
      className="absolute top-0 z-0 h-screen w-full"
      style={{ filter: blur }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{
          opacity: backgroundOpacity,
        }}
      />

      <Video src={showReel} />
    </motion.div>
  );
};

export default VideoSection;
