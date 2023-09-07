"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon, AcmeLogo } from "../../icons";

export default function LayoutNavBar() {

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <form action="/items" className="w-full">
          <Input
            width="100%"
            placeholder="Busque un producto..."
            size="lg"
            endContent={<SearchIcon size={18} width={20} height={20} />}
            type="search"
            name="search"
          />
        </form>
      </NavbarContent>
    </Navbar>
  );
}
