import { IconArrowDownRight } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

interface PageDirectButtonProp {
  text: string;
  link?: string;
  onClick?: () => void;
}

const PageDirectButton: React.FC<PageDirectButtonProp> = ({
  text,
  link = "/",
  onClick,
}) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="page-direct-button group flex flex-row justify-center h-max p-2 hover:bg-black hover:text-white border-2 border-black rounded-4xl w-fit transition"
    >
      <div className="nav-bar-item px-1 font-black">{text}</div>
      <IconArrowDownRight className="font-semibold group-hover:-rotate-45 transition" />
    </Link>
  );
};

export default PageDirectButton;
