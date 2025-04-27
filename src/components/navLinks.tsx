import { IconArrowDownRight } from "@tabler/icons-react";
import React from "react";

interface NavLinksProp {
  indexNum: string;
  text: string;
  link: string;
}

const NavLinks: React.FC<NavLinksProp> = ({ indexNum, text, link }) => {
  return (
    <a className="navlinks group flex gap-3 text-center" href={link}>
      <span className="text-[var(--tertiary)] font-bold group-hover:scale-105 transition">
        {indexNum}
      </span>
      <span className="text-[var(--text)] font-semibold group-hover:scale-105 transition">
        {text}
      </span>
      <IconArrowDownRight className="font-semibold group-hover:-rotate-45 transition" />
    </a>
  );
};

export default NavLinks;
