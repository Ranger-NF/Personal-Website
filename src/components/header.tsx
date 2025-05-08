import React, { useEffect, useState } from "react";
import MobileMenu from "./mobileMenu";
import PageDirectButton from "./pageDirects";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { AnimatePresence } from "motion/react";

const Header: React.FC = () => {
  const [isHomePage, setIsHomePage] = useState<boolean>(true);

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname == "/") {
      if (!isHomePage) setIsHomePage(true);
    } else {
      if (isHomePage) setIsHomePage(false);
    }
  }, [location]);

  return (
    <div className="flex flex-row justify-between m-6">
      <AnimatePresence>
        {!isHomePage && (
          <div className="flex justify-start pt-1">
            <Link to={location.state?.from || "/"}>
              <IconArrowLeft className="text-[var(--tertiary)] w-10 h-10 group-hover:scale-105" />
            </Link>
          </div>
        )}
      </AnimatePresence>

      <div className="flex hover:cursor-pointer" onClick={() => navigate("/")}>
        <img
          src="/logo.svg"
          width={50}
          height={50}
          className={`${!isHomePage && "absolute left-[50%]"} h-12 w-12`}
        />
      </div>
      <div className="md:hidden p-3">
        <MobileMenu />
      </div>

      <div className="page-directs hidden md:flex h-max items-center gap-16">
        <Link className="nav-bar-item" to="/about">
          about
        </Link>
        <a
          className="nav-bar-item"
          target="_blank"
          href="https://linkedin.com/in/just-fahad/"
        >
          linkedin
        </a>
        <PageDirectButton text="github" link="https://github.com/Ranger-NF" />
      </div>
    </div>
  );
};

export default Header;
