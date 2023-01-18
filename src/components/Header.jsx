import React from "react";
import { useState } from "react";
import { navItems } from "../constant";

import Links from "./Links";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='flex-100 xs:flex'>
      <ul className='  h-full flex xs:flex-col w-full bg-gray-800 rounded-2xl items-center gap-8 py-4 px-1'>
        {navItems.map((i, index) => {
          return (
            <Links
              path={i.path}
              icon={i.icon}
              tooltip={i.tooltip}
              key={index}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
