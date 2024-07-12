import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND_PHILOSOPHY } from "../../data";

const BrandPhilosophy = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const yTransformer = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["150%", "-100%"],
  );

  //#region Text Color changing logic
  const words = useMemo(() => BRAND_PHILOSOPHY.split(" "), [BRAND_PHILOSOPHY]);
  // Group words into lines (adjust wordsPerLine as needed)
  const wordsPerLine = 10;
  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      result.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return result;
  }, [words]);

  // Variables to control the white text region
  const whiteRegionHeight = 20; // 20% of screen height
  // Center of the white region (50% means middle of the screen)
  // Range Between 20 to 60
  const whiteRegionCenter = 35;

  // Define color transforms for each line
  const colorTransforms = lines.map((_, index) => {
    const lineHeight = whiteRegionHeight / lines.length;
    const regionStart = whiteRegionCenter / 100 - whiteRegionHeight / 200;
    const startProgress = regionStart + (index * lineHeight) / 100;
    const endProgress = startProgress + lineHeight / 100;

    return useTransform(
      scrollYProgress,
      [startProgress - 0.01, startProgress, endProgress, endProgress + 0.01],
      ["#262626", "#ffffff", "#ffffff", "#262626"],
    );
  });
  //#endregion
  return (
    <div ref={targetRef} className="font-poppins relative top-0 h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full justify-center">
          <div className="h-full w-2/3 lg:w-2/3">
            <motion.div
              className="w-full text-wrap text-justify portrait:text-xl landscape:text-xl landscape:lg:text-3xl"
              style={{
                y: yTransformer,
              }}
            >
              {lines.map((line, index) => (
                <motion.p
                  key={index}
                  className="inline-block portrait:text-xl landscape:text-xl landscape:lg:text-5xl"
                  style={{ color: colorTransforms[index] }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPhilosophy;
