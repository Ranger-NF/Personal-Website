import React, { useEffect, useState } from "react";
import MobileMenu from "./mobileMenu";
import PageDirectButton from "./pageDirects";
import { Link, useLocation } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { AnimatePresence } from "motion/react";

const Header: React.FC = () => {
  const [isHomePage, setIsHomePage] = useState<boolean>(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      if (!isHomePage) setIsHomePage(true);
    } else {
      if (isHomePage) setIsHomePage(false);
    }
  }, [location]);

  return (
    <div className="flex group flex-row justify-between m-8">
      <AnimatePresence>
        {!isHomePage && (
          <div className="flex justify-start pt-1">
            <Link to="/">
              <IconArrowLeft className="text-[var(--tertiary)] w-10 h-10 group-hover:scale-105" />
            </Link>
          </div>
        )}
      </AnimatePresence>
      <img src="/logo.svg" width={50} height={50} className="h-12 w-12" />
      <div className="md:hidden p-3">
        <MobileMenu />
      </div>

      <div className="page-directs hidden md:flex h-max items-center gap-16">
        {/* <a>about</a> */}
        <a href="www.linkedin.com/in/just-fahad/">linkedin</a>
        <PageDirectButton text="github" link="https://github.com/Ranger-NF" />
      </div>
    </div>
  );
};

export default Header;
