import React, { Suspense } from "react";
import Conatiner from "../global/Conatiner";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Conatiner className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Conatiner>
    </nav>
  );
};

export default Navbar;
