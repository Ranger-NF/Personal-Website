import { IconArrowDownRight } from "@tabler/icons-react";
import React from "react";

interface PageDirectButtonProp {
  text: string;
  link?: string;
}

const PageDirectButton: React.FC<PageDirectButtonProp> = ({
  text,
  link = "/",
}) => {
  return (
    <div className="page-direct-button group flex flex-row justify-center h-max p-2 hover:bg-black hover:text-white border border-black rounded-4xl transition">
      <a className="nav-bar-item px-1" href={link}>
        {text}
      </a>
      <IconArrowDownRight className="font-semibold group-hover:-rotate-45 transition" />
    </div>
  );
};

export default PageDirectButton;
