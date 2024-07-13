"use client";

import { Eye, EyeSlash } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginViewsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-10 w-full rounded-md">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/img/logo.png"
          alt={`logo`}
          width={100}
          height={100}
          className="flex justify-center items-center"
        />
        <h3 className="text-xl font-medium text-center">
          Sign In to <span className="text-red-700">ALMOVIE</span>
        </h3>
      </div>
      <div className="flex flex-col gap-2 relative">
        <input
          className="px-4 py-2 rounded-md border"
          type="text"
          placeholder="Username"
        />
        <input
          className="px-4 py-2 rounded-md border"
          type={isOpen ? "text" : "password"}
          placeholder="Password"
        />
        {isOpen ? (
          <Eye
            style={{ bottom: "60px" }}
            className="absolute right-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <EyeSlash
            style={{ bottom: "60px" }}
            className="absolute right-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <button className="px-4 py-2 rounded-md bg-red-700 text-white font-medium">
          Sign in
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Don't have an account?</p>
        <Link
          href="/auth/register"
          className="text-red-700 font-medium text-sm"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginViewsPage;
