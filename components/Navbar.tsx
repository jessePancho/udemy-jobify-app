import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "./ThemeToggle";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <LinksDropdown />
      <div className="flex items-center gap-x--4">
        <ThemeToggle />
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
