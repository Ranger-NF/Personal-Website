import { IconMenu, IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {isOpen ? (
        <div className="absolute top-0 left-0 flex h-screen w-screen bg-white/10">
          <div className="flex grow m-8">
            <div className="flex grow justify-end">
              <IconX className="flex" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      ) : (
        <IconMenu
          className="md:hidden h-6 w-6"
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
  );
};

export default MobileMenu;
