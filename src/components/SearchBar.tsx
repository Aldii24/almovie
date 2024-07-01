"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchFilm = useRef<HTMLInputElement>(null);

  const handleSearch = (e: any) => {
    const search = searchFilm.current?.value;

    if (search === "" || search?.trim() === "") return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${search}`);
    }
  };

  return (
    <div className="flex border px-4 py-2 gap-2 flex-1 z-50 shadow-lg">
      <input
        type="text"
        className="bg-transparent outline-none text-black flex-1"
        placeholder="Search a movie"
        ref={searchFilm}
        onKeyDown={handleSearch}
      />
      <MagnifyingGlass
        size={24}
        className="text-black cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
