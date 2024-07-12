import React, { useRef } from "react";
import {
  easeIn,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Video from "../../Components/Video";
import { SHOW_REEL } from "../../data";

const VideoSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const blur = useTransform(
    scrollYProgress,
    [0.2, 0.2],
    ["blur(15px)", "blur(0px)"],
  );
  const backgroundOpacity = useTransform(scrollYProgress, [0.1, 0.2], [1, 0], {
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
      <div className="m-8 bg-blue-900">
        <Video src={SHOW_REEL} />
      </div>
    </motion.div>
  );
};

export default VideoSection;
