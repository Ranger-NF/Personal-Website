import { IconMenu, IconX } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import NavLinks from "./navLinks";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  // Set the real viewport height
  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set height initially
    updateHeight();

    // Update height on resize and orientation change
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="z-[100]">
      <IconMenu
        className={`md:hidden h-6 w-6 cursor-pointer transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setIsOpen(true)}
      />
      {/* Mobile Menu Overlay */}
      <div
        style={{ height: windowHeight ? `${windowHeight}px` : "100vh" }}
        className={`fixed top-0 left-0 w-screen bg-[var(--main)] transition-all duration-300 ease-in-out ${
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
          <div className="flex flex-col h-full justify-center items-center">
            <div className="text-center space-y-8">
              <NavLinks
                indexNum="01"
                text="About"
                link="/about"
                onClick={handleLinkClick}
              />
              <NavLinks
                indexNum="02"
                text="LinkedIn"
                link="https://linkedin.com/in/just-fahad/"
                onClick={handleLinkClick}
              />
              <NavLinks
                indexNum="03"
                text="Github"
                link="https://github.com/Ranger-NF"
                onClick={handleLinkClick}
              />
              <NavLinks
                indexNum="04"
                text="Projects"
                link="/projects"
                onClick={handleLinkClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
