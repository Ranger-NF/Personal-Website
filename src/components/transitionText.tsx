import React, { useState, useEffect } from "react";

interface TextTransitionProps {
  text: string;
  styleName: string;
  delay?: number;
  typingSpeed?: number;
}

const TextTransition: React.FC<TextTransitionProps> = ({
  text,
  styleName,
  delay = 0,
  typingSpeed = 50, // ms per character
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(initialTimer);
  }, [delay]);

  // Handle the typing effect
  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, isTyping, text, typingSpeed]);

  return (
    <div className="relative inline-flex">
      <div className={styleName}>{displayedText}</div>
    </div>
  );
};

export default TextTransition;
