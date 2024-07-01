"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/page";

const ClientOnlyNavbar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showNavbar =
    pathname !== "/auth/login" && pathname !== "/auth/register";
  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

export default ClientOnlyNavbar;
