"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useQuery } from "react-query";

const SearchComponent = ({ className }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery(
    "allDoctors",
    async () =>
      await axios.get("http://localhost:3000/doctors").then((res) => res.data)
  );

  //Filtering products based on search
  useEffect(() => {
    if (searchQuery && searchQuery?.length > 0) {
      const doctorsList = [...data];
      const filteredDoctors = doctorsList?.filter((d) =>
        d?.title.includes(searchQuery)
      );
      setDoctors(filteredDoctors ?? []);
    } else {
      setDoctors(data);
    }
  }, [searchQuery]);
  const searchDoctors = (title) => {
    router.push(`/search/${title}`);
  };

  return (
    <div>
      <div className={className}>
        <input
          type="text"
          placeholder="Search your products here"
          onFocus={() => setIsModalOpen(true)}
          className="h-full   flex-1 bg-transparent outline-none w-full placeholder:text-gray-600"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        {searchQuery ? (
          <IoCloseOutline
            onClick={() => setSearchQuery("")}
            className="size-5 duration-200 hover:cursor-pointer hover:text-red-500"
          />
        ) : (
          <FaSearch className="size-5 hover:cursor-pointer" />
        )}
      </div>
      {isModalOpen && searchQuery?.length > 0 ? (
        <div className="transition-all duration-300 text-primeColor absolute   z-40  max-h-76 overflow-y-auto w-[370px]   md:max-w-[500px] md:w-[500px]  flex-col  justify-center items-center text-center gap-2 rounded-md border-[1px] border-blue-400 bg-white px-6 text-base md:flex ">
          {doctors?.length > 0 ? (
            doctors.map((p) => (
              <div
                className="  border-b-[1px] p-1 border-blue-400 "
                onClick={() => {
                  searchDoctors(p?.title);
                  setSearchQuery("");
                }}
                key={p?.id}
              >
                {p?.title}
              </div>
            ))
          ) : (
            <div>no result</div>
          )}
        </div>
      ) : null}
    </div>
  );
};
export default SearchComponent;
