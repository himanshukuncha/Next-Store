import React from "react";
import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <Input
      type="search"
      placeholder="Search products..."
      className="max-w-xs dark:bg-muted"
    />
  );
};

export default NavSearch;
