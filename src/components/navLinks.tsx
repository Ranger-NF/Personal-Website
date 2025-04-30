import { IconArrowDownRight } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

interface NavLinksProp {
  indexNum: string;
  text: string;
  link: string;
}

const NavLinks: React.FC<NavLinksProp> = ({ indexNum, text, link }) => {
  return (
    <Link className="navlinks group flex gap-3 text-center" to={link}>
      <span className="text-[var(--tertiary)] font-bold group-hover:scale-105 transition">
        {indexNum}
      </span>
      <span className="text-[var(--text)] font-semibold group-hover:scale-105 transition">
        {text}
      </span>
      <IconArrowDownRight className="font-semibold group-hover:-rotate-45 transition" />
    </Link>
  );
};

export default NavLinks;
