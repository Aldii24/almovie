"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RegisterViewsPage = () => {
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
        <h3 className="text-xl font-medium text-center">Create an account</h3>
      </div>
      <div className="flex flex-col gap-2 relative">
        <input
          className="px-4 py-2 rounded-md border"
          type="text"
          placeholder="Name"
        />
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
        <input
          className="px-4 py-2 rounded-md border"
          type={isOpen ? "text" : "password"}
          placeholder="Confirm password"
        />
        <div className="flex gap-2 mt-4 mb-4">
          <input
            type="checkbox"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          <p className="text-sm">Show password</p>
        </div>
        <button className="px-4 py-2 rounded-md bg-red-700 text-white font-medium">
          Sign Up
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Have an account?</p>
        <Link href="/auth/login" className="text-red-700 font-medium text-sm">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default RegisterViewsPage;
