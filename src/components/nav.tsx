import { Navbar, NavbarBrand } from "@nextui-org/react";
import React from "react";

export function Nav() {
  return (
    <Navbar maxWidth={"full"} isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit text-lg cursor-default">Media Harmonizer</p>
      </NavbarBrand>
    </Navbar>
  );
}
