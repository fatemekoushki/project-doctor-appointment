"use client";
import React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../../../components/ui/command";
import Image from "next/image";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "react-query";
import axiosClient from "../../../_components/GelobalApi";

function CategoryList() {
  const { data } = useQuery("categorySearch", () =>
    axiosClient.get("/category").then((res) => res.data)
  );
  const params = usePathname();
  const category = params.split("/")[2];
  return (
    <div className="h-screen  mt-5  flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {data &&
              data.map((item, index) => (
                <CommandItem key={index}>
                  <Link
                    href={`/search/${item.name}`}
                    className={`
         p-2 flex gap-2 text-[14px] text-blue-600 items-center rounded-md cursor-pointer w-full
         ${category == item.name && "bg-blue-100"}
         `}
                  >
                    <Image
                      src={item?.url}
                      width={35}
                      height={35}
                      alt="icon"
                      className="bg-primary object-cover "
                    />
                    <label>{item?.name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList;
