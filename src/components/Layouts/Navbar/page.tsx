import Image from "next/image";
import Link from "next/link";
import Search from "../../SearchBar";
import SignIn from "../../SignIn";
import Menu from "../../Menu";

const Navbar = () => {
  return (
    <div className="h-20 md:px-8 xl:px-16 lg:px-32 2xl:px-64 py-4 relative z-30">
      {/* MOBILE */}
      <div className="h-full relative md:hidden">
        <div className="h-full flex justify-between">
          <Link href="/" className="flex items-center px-4">
            <Image src="/img/logo.png" width={50} height={50} alt="logo" />
            <h3 className="text-red-700 text-xl font-bold tracking-wide">
              ALMOVIE
            </h3>
          </Link>
          <Menu />
        </div>
        <div className="px-4 pt-4">
          <Search />
        </div>
      </div>
      {/* MOBILE */}

      {/* BIGGER SCREEN */}
      <div className="hidden md:flex px-4 justify-between items-center gap-4 h-full mb-4">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 gap-10 flex items-center ">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/img/logo.png" width={50} height={50} alt="logo" />
            <h3 className="text-red-700 text-2xl font-extrabold tracking-wide">
              ALMOVIE
            </h3>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link className="text-black menu-nav hover:text-red-700" href="/">
              Home
            </Link>
            <Link className="text-black menu-nav hover:text-red-700" href="/">
              Popular
            </Link>
            <Link className="text-black menu-nav hover:text-red-700" href="/">
              Top Rated
            </Link>
            <Link className="text-black menu-nav hover:text-red-700" href="/">
              Upcomming
            </Link>
          </div>
        </div>
        {/* LEFT */}

        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Search />
          <SignIn />
        </div>
        {/* RIGHT */}
        {/* BIGGER SCREEN */}
      </div>
      <div className="h-[1px] w-full bg-gray-300 "></div>
    </div>
  );
};

export default Navbar;
