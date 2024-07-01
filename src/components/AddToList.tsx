"use client";

import {
  BookmarkSimple,
  DotsThreeCircle,
  HeartStraight,
  ListDashes,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";

const AddToList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-2 right-2 transform-transition transition-all ease-in-out">
        <DotsThreeCircle
          weight="fill"
          size={30}
          className="text-gray-200 hover:text-red-500 cursor-pointer transform-transition transition-all ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? (
        <>
          <div className="absolute flex flex-col justify-center px-2 gap-2 top-10 right-3 rounded-md h-[150px] w-[120px] bg-white shadow-lg z-10">
            <Link
              href="/"
              className="flex items-center gap-1 w-max  p-2 rounded-md text-sm hover:text-white hover:bg-red-500"
            >
              <ListDashes size={20} className="" />
              Add to list
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1  p-2 rounded-md text-sm hover:text-white hover:bg-red-500 "
            >
              <HeartStraight size={20} weight="fill" />
              Favorite
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1  p-2 rounded-md text-sm hover:text-white hover:bg-red-500 "
            >
              <BookmarkSimple size={20} weight="fill" />
              Watchlist
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AddToList;
