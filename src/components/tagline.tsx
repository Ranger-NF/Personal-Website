import React from "react";
import { motion } from "motion/react";

interface TaglineProp {
  text: string;
}

const Tagline: React.FC<TaglineProp> = ({ text }) => {
  const characters = text.split("");
  const delay = 1;

  return (
    <div className="tagline overflow-hidden">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay, duration: 0.6 }}
        className="text-[var(--tertiary)] font-bold"
      >
        {"/  "}
      </motion.span>
      <span className="overflow-hidden">
        {characters.map((char, index) => (
          <motion.span
            key={`char-${index}`}
            className="text-[var(--text)] font-medium inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </div>
  );
};

export default Tagline;
