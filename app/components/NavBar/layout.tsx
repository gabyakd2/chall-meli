"use client";
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import { SearchIcon, AcmeLogo } from "../../icons";
import { useFetchItems } from "@/app/hooks";
import { useItemsQuery } from "@/app/store/itemsStore";

export default function LayoutNavBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const setItemInStore = useItemsQuery(state => state.setSearchQueryStore);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value;
    setSearchQuery(query);
  }

  const { data } = useFetchItems(searchQuery);
  console.log(data)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setItemInStore(data);
  }
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <form action="/items" className="w-full" onSubmit={handleSubmit}>
          <Input
            width="100%"
            placeholder="Busque un producto..."
            size="lg"
            endContent={<SearchIcon size={18} width={20} height={20} />}
            type="search"
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </form>
      </NavbarContent>
    </Navbar>
  );
}
