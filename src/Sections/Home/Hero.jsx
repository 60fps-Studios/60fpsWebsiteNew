import React, { useRef } from "react";
import { HERO_TEXT } from "../../data";
import { HERO_BG_VIDEO } from "../../data";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import StartProjectButton from "../../Components/Hero/StartProjectButton";
import HeroVid from "../../assets/Videos/Timeline.mov";
import BgVideo from "../../assets/Videos/BgVideo.mp4";
import Video from "../../Components/Video";
const Hero = ({ handleNavigation, children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const xTranslate = useTransform(scrollYProgress, [0, 0.6], ["0%", "-210%"], {
    ease: easeInOut,
  });
  const xTranslateReverse = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0%", "210%"],
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

        <div className="z-10 h-[90%] w-full">
          <div className="flex h-1/2 justify-start px-4 pb-5 portrait:items-end landscape:items-center landscape:pb-0">
            {/* <motion.div
              className="pointer-events-none absolute inset-0 z-10 h-screen backdrop-blur-sm"
              aria-hidden="true"
              style={{
                x: xTranslate,
                opacity: headingOpacity,
                scale: 2,
              }}
            /> */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-0 h-screen"
              aria-hidden="true"
              style={{
                x: xTranslate,
                opacity: headingOpacity,
                scale: 2,
              }}
            >
              <Video src={HERO_BG_VIDEO} />
            </motion.div>
            <motion.h1
              className="z-20 origin-left text-center font-bold portrait:text-5xl landscape:text-7xl landscape:lg:text-[10rem]"
              style={{
                x: xTranslate,
                opacity: headingOpacity,
                scale: 2,
              }}
            >
              60FPS
            </motion.h1>
            <motion.div className="absolute z-20 h-full origin-top-right font-poppins portrait:left-16 portrait:right-10 portrait:top-10 landscape:left-auto landscape:right-12 landscape:top-5 landscape:w-1/4 landscape:lg:right-0 landscape:lg:top-28">
              <StartProjectButton
                scale={buttonScale}
                opacity={buttonOpacity}
                blur={buttonBlur}
                handleNavigation={handleNavigation}
              />
            </motion.div>
          </div>
          <div className="relative z-20 flex h-1/2 justify-end px-4 portrait:items-start portrait:pt-5 landscape:items-center landscape:pt-0">
            <div className="absolute left-10 origin-bottom-left font-poppins portrait:bottom-16 portrait:right-10 landscape:bottom-10 landscape:right-0 landscape:w-1/4 landscape:lg:bottom-28">
              <motion.p
                className="w-full text-wrap portrait:origin-bottom portrait:text-xl landscape:origin-bottom-left landscape:text-xl landscape:lg:text-3xl"
                style={{
                  scale: textScale,
                  filter: textBlur,
                  opacity: textOpacity,
                }}
              >
                {HERO_TEXT}
              </motion.p>
            </div>

            <motion.h1
              className="z-20 origin-right text-center portrait:text-5xl landscape:text-6xl landscape:lg:text-[10rem]"
              style={{
                x: xTranslateReverse,
                opacity: headingOpacity,
                scale: 2,
              }}
            >
              Studio
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
