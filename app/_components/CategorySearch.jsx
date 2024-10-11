"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axiosClient from "./GelobalApi";
import Link from "next/link";
import SearchComponent from "./SearchComponent";
import { useQuery } from "react-query";

function CategorySearch() {
  const { data } = useQuery("categorySearch", () =>
    axiosClient.get("/category").then((res) => res.data)
  );

  return (
    <div className="mb-2 items-center flex flex-col gap-2 text-center px-5 ">
      <h2 className="font-bold text-4xl  tracking-wide ">
        Search <span className="text-primary"> Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        search Your Doctor and Book Appointment in One click{" "}
      </h2>
      <div className="flex justify-center   mt-3  items-center space-x-2">
        <SearchComponent
          className={`flex justify-between border-b-[1px] border-blue-400 p-2 w-[370px] md:max-w-[500px] md:w-[500px]`}
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center ">
        {data?.length > 0
          ? data.map(
              (item, index) =>
                index < 6 && (
                  <Link
                    key={index}
                    href={`/search/${item?.name}`}
                    className="flex flex-col gap-2 text-center items-center p-5 hover:scale-110 transition-all ease-in-out mt-5  "
                  >
                    <Image
                      src={item?.url}
                      width={50}
                      height={50}
                      alt="img"
                      className="bg-primary rounded-lg"
                    />
                    <label htmlFor="">{item?.name}</label>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className="bg-slate-200 m-2 w-[100px] h-[100px] rounded-lg animate-pulse  "></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
