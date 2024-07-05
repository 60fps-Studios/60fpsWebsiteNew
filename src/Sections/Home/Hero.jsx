import React, { useRef } from "react";
import { HeroText } from "../../data";
import {
  motion,
  useScroll,
  useTransform,
  easeIn,
  easeInOut,
} from "framer-motion";
import StartProjectButton from "../../Components/Hero/StartProjectButton";

const Hero = ({ handleNavigation }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-210%"], {
    ease: easeInOut,
  });
  const xTranslateReverse = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "210%"],
    { ease: easeInOut },
  );
  const headingOpacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0]);

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(15px)"],
  );

  const buttonScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const buttonBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(15px)"],
  );
  return (
    <div ref={targetRef} className="relative top-0 z-10 h-[300vh] select-none">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-[10%] w-full"></div>
        <div className="h-[90%] w-full">
          <div className="flex h-1/2 items-end justify-start px-4 pb-5 lg:items-center lg:pb-0">
            <motion.h1
              className="origin-left text-center text-5xl lg:text-9xl"
              style={{
                x: xTranslate,
                opacity: headingOpacity,
                scale: 2,
              }}
            >
              60fps
            </motion.h1>
            <div className="absolute left-16 right-10 top-10 h-full origin-top-right lg:left-auto lg:top-20 lg:w-1/4">
              <StartProjectButton
                scale={buttonScale}
                opacity={buttonOpacity}
                blur={buttonBlur}
                handleNavigation={handleNavigation}
              />
            </div>
          </div>
          <div className="relative flex h-1/2 items-start justify-end px-4 pt-5 lg:items-center lg:pt-0">
            <div className="absolute bottom-16 left-10 right-10 origin-bottom-left lg:right-0 lg:w-1/4">
              <motion.p
                className="w-full origin-bottom text-wrap text-xl lg:origin-bottom-left lg:text-3xl"
                style={{
                  scale: textScale,
                  filter: textBlur,
                  opacity: textOpacity,
                }}
              >
                {HeroText}
              </motion.p>
            </div>

            <motion.h1
              className="origin-right text-center text-5xl lg:text-9xl"
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
