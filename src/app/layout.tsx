import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ClientOnlyNavbar from "@/components/Layouts/ClientOnlyNavbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlMovie",
  description: "Made by Aldi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Tentukan apakah Navbar harus ditampilkan atau tidak

  return (
    <html lang="en">
      <body className={`${manrope.className} `}>
        <ClientOnlyNavbar>{children}</ClientOnlyNavbar>
      </body>
    </html>
  );
}
