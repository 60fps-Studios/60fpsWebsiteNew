import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { brandPhilosophy } from "../../data";

const BrandPhilosophy = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["250%", "-250%"]);

  // Split the text into words
  const words = useMemo(() => brandPhilosophy.split(" "), [brandPhilosophy]);

  // Group words into lines (adjust wordsPerLine as needed)
  const wordsPerLine = 7;
  const lines = useMemo(() => {
    const result = [];
    for (let i = 0; i < words.length; i += wordsPerLine) {
      result.push(words.slice(i, i + wordsPerLine).join(" "));
    }
    return result;
  }, [words]);

  // Define color transforms for each line
  const colorTransforms = lines.map((_, index) => {
    const startProgress = 0.3; // Adjust this value to change when the transitions start
    const endProgress = 0.6; // Adjust this value to change when the transitions end
    const transitionDuration = endProgress - startProgress;
    const lineProgress = transitionDuration / lines.length;

    return useTransform(
      scrollYProgress,
      [
        startProgress + index * lineProgress,
        startProgress + (index + 1) * lineProgress,
        startProgress + (index + 2) * lineProgress,
      ],
      ["#262626", "#ffffff", "#262626"],
    );
  });

  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full place-content-center text-justify">
        <motion.div
          className="m-10 max-w-2xl text-justify"
          style={{ y: yTransform }}
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className="inline-block portrait:text-xl landscape:text-xl landscape:lg:text-3xl"
              style={{ color: colorTransforms[index] }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandPhilosophy;
