import React, { useState, useEffect } from "react";

interface TextTransitionProps {
  text: string;
  styleName?: string;
  delay?: number;
  characterCycleSpeed?: number;
  revealSpeed?: number;
  cycleCharacters?: string;
}

const TextTransition: React.FC<TextTransitionProps> = ({
  text,
  styleName = "",
  delay = 0,
  characterCycleSpeed = 10,
  revealSpeed = 8,
  cycleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}) => {
  const [displayedChars, setDisplayedChars] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize with empty characters
  useEffect(() => {
    setDisplayedChars(Array(text.length).fill(""));
  }, [text]);

  // Start animation after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, text]);

  const getRandomChar = () => {
    return cycleCharacters[Math.floor(Math.random() * cycleCharacters.length)];
  };

  const startAnimation = () => {
    // Animate each character sequentially
    const animateCharacter = (index: number) => {
      if (index >= text.length) return;

      let counter = 0;
      const cycles = 5 + Math.floor(Math.random() * 5); // 5-10 cycles per character

      const cycleInterval = setInterval(() => {
        setDisplayedChars((prev) => {
          const newChars = [...prev];
          newChars[index] = getRandomChar();
          return newChars;
        });

        counter++;
        if (counter >= cycles) {
          clearInterval(cycleInterval);
          // Set final character
          setDisplayedChars((prev) => {
            const newChars = [...prev];
            newChars[index] = text[index];
            return newChars;
          });
          // Move to next character after short pause
          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            animateCharacter(index + 1);
          }, revealSpeed);
        }
      }, characterCycleSpeed);
    };

    animateCharacter(0);
  };

  return (
    <div className={`text-transition-wrapper ${styleName}`}>
      {displayedChars.map((char, i) => (
        <span
          key={i}
          className={`transition-character ${i <= currentIndex ? "visible" : "hidden"}`}
          style={{
            display: "inline-block",
            minWidth: "0.5em",
            transition: "opacity 0.2s",
          }}
        >
          {char || (i === 0 ? " " : "\u00A0")}
        </span>
      ))}
    </div>
  );
};

export default TextTransition;
