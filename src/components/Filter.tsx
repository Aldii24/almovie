"use client";

import { CaretDown, CaretRight } from "@phosphor-icons/react/dist/ssr";
import GenreList from "./GenreList";
import { useState } from "react";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex flex-col w-full">
        <div
          className={`px-4 py-2 bg-white rounded-t-md cursor-pointer border shadow-xl ${
            isOpen ? "" : "rounded-b-md"
          } `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Filters</h3>
            {isOpen ? (
              <CaretDown size={20} weight="fill" />
            ) : (
              <CaretRight size={20} weight="fill" />
            )}
          </div>
        </div>
        {isOpen && <GenreList />}
      </div>
      {/* BIGGER SCREEN */}
    </>
  );
};

export default Filter;
