import { IconMenu, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import NavLinks from "./navLinks";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="z-10">
      <IconMenu
        className={`md:hidden h-6 w-6 cursor-pointer transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setIsOpen(true)}
      />

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-[var(--main)] transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full m-8">
          <div className="flex justify-end">
            <IconX
              className="h-6 w-6 cursor-pointer transition-transform duration-300 hover:rotate-90"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex flex-col mt-16 space-y-8">
            <NavLinks
              indexNum="01"
              text="LinkedIn"
              link="https://linkedin.com/in/just-fahad/"
            />
            <NavLinks
              indexNum="02"
              text="Github"
              link="https://github.com/Ranger-NF"
            />
            <NavLinks indexNum="03" text="Projects" link="/projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
