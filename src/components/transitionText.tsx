import { motion } from "motion/react";
import React, { useState } from "react";

interface TextTransitionProps {
  text: string;
  styleName: string;
  delay?: number;
}

const TextTransition: React.FC<TextTransitionProps> = ({
  text,
  styleName,
  delay = 0,
}) => {
  const [characters, setCharacters] = useState<string[]>([]);

  setTimeout(() => setCharacters(text.split("")), delay);

  return (
    <div>
      {characters.map((char, index) => (
        <motion.span
          className={styleName}
          key={`char-${index}`}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            mass: 0.8,
            delay: index * 0.05, // Add delay based on character position
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextTransition;
