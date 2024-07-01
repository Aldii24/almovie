"use client";

import { TextAlignRight, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";
import SignIn from "./SignIn";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="px-4">
      {isActive ? (
        <X
          size={32}
          className="text-red-700 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        />
      ) : (
        <TextAlignRight
          size={32}
          className="text-red-700 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        />
      )}
      {isActive && (
        <div
          className={`absolute top-12 right-0 w-[50%] h-[calc(100vh-4rem)] shadow-2xl rounded-l-md border bg-white  flex flex-col gap-8 transform transition-all ease-in-out p-4 z-60`}
        >
          <div className="flex flex-col gap-8">
            <Link className="text-black menu-nav border-b pb-2" href="/">
              Home
            </Link>
            <Link className="text-black menu-nav border-b pb-2" href="/">
              Popular
            </Link>
            <Link className="text-black menu-nav border-b pb-2" href="/">
              Top Rated
            </Link>
            <Link className="text-black menu-nav border-b pb-2" href="/">
              Upcoming
            </Link>
          </div>

          <SignIn />
        </div>
      )}
    </div>
  );
};

export default Menu;
