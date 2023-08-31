"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon, AcmeLogo } from "../../icons";
import { useFetchItems } from "@/app/hooks";

export default function NavBar() {
  const {data} = useFetchItems('iphone')
  console.log(data)
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
