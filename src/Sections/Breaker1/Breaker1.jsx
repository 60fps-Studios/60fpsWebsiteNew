import React, { useRef } from "react";
import { HERO_TEXT } from "../../data";
import { HERO_BG_VIDEO } from "../../data";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import StartProjectButton from "../../Components/Hero/StartProjectButton";
import HeroVid from "../../assets/Videos/Timeline.mov";
import BgVideo from "../../assets/Videos/BgVideo.mp4";
import Video from "../../Components/Video";
const Breaker1 = ({ handleNavigation, children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const xTranslate = useTransform(scrollYProgress, [0, 0.6], ["0%", "-510%"], {
    ease: easeInOut,
  });
  const xTranslateReverse = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0%", "510%"],
    { ease: easeInOut },
  );
  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.6],
    [1, 1, 0],
  );

  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textBlur = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["blur(0px)", "blur(15px)"],
  );

  const buttonScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.5]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const buttonBlur = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["blur(0px)", "blur(15px)"],
  );

  return (
    <div ref={targetRef} className="relative top-0 z-10 h-[500vh] select-none">
      <div className="sticky top-0 h-screen overflow-hidden">
        {children}

        <div className="h-[10%] w-full"></div>

        <div className="z-10 h-screen w-full">
          <div className="align-center flex h-full justify-center px-4 pb-5 portrait:items-end landscape:items-center landscape:pb-0">
            {/* <motion.div
              className="pointer-events-none absolute inset-0 z-0 h-screen"
              aria-hidden="true"
              style={{
                opacity: headingOpacity,
                scale: 0.5,
              }}
            >
              <Video src={HERO_BG_VIDEO} />
            </motion.div> */}
            <motion.h1
              className="font-poppins z-20 origin-left text-center font-semibold portrait:text-5xl landscape:text-7xl landscape:lg:text-[10rem]"
              style={{
                x: xTranslate,
                opacity: headingOpacity,
                scale: 2,
              }}
            >
              {"<"}
            </motion.h1>
            {/* <motion.div className="font-poppins relative z-20 h-full origin-top-right portrait:left-16 portrait:right-10 portrait:top-10 landscape:left-auto landscape:right-12 landscape:top-5 landscape:w-1/4 landscape:lg:right-0 landscape:lg:top-28">
              <StartProjectButton
                scale={buttonScale}
                opacity={buttonOpacity}
                blur={buttonBlur}
                handleNavigation={handleNavigation}
              />
            </motion.div> */}
            <motion.p
              className="font-poppins w-full text-wrap px-36 text-justify portrait:origin-bottom portrait:text-xl landscape:origin-bottom-left landscape:text-xl landscape:lg:max-w-3xl landscape:lg:text-3xl"
              style={{
                // filter: textBlur,
                opacity: textOpacity,
              }}
            >
              {HERO_TEXT}
            </motion.p>
            <motion.h1
              className="font-poppins z-20 origin-right text-right font-semibold portrait:text-5xl landscape:text-6xl landscape:lg:text-[10rem]"
              style={{
                x: xTranslateReverse,
                opacity: headingOpacity,
                scale: 2,
              }}
            >
              {">"}
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breaker1;
