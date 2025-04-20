import React from "react";

interface NavLinksProp {
  indexNum: string;
  text: string;
  link: string;
}

const NavLinks: React.FC<NavLinksProp> = ({ indexNum, text, link }) => {
  return (
    <div
      className="navlinks group flex gap-3"
      onClick={() => window.open(link, "_blank")}
    >
      <span className="text-[var(--tertiary)] font-bold group-hover:scale-105 transition">
        {indexNum}
      </span>
      <span className="text-[var(--text)] font-semibold group-hover:scale-105 transition">
        {text}
      </span>
      {/* <IconArrowDownRight className="text-[var(--text)] font-semibold group-hover:-rotate-45 transition" /> */}
    </div>
  );
};

export default NavLinks;
