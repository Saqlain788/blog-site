import React from "react";
import { AvatarDemo } from "./AvatarDemo";
import Menu from "./Menu";

function Navbar() {
  return (
    <header className="grid grid-cols-[auto,auto]">
      <AvatarDemo />
      <Menu />
    </header>
  );
}

export default Navbar;
