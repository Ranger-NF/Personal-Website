import React from "react";

interface TaglineProp {
  text: string;
}

const Tagline: React.FC<TaglineProp> = ({ text }) => {
  return (
    <div className="tagline">
      <span className="text-[var(--tertiary)] font-bold">{"/  "}</span>
      <span className="text-[var(--text)] font-medium">{text}</span>
    </div>
  );
};

export default Tagline;
