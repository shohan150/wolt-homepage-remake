import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import logo from "../../../public/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between gap-12 px-4 py-2 bg-white shadow-md z-50">
      {/* Left Side: Logo */}
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Wolt Logo" className="w-28 h-16" />
        <div className="flex items-center gap-4 text-sm text-primary">
          <IoLocationSharp className="text-4xl bg-primaryLight hover:bg-primaryHover p-[6px] rounded-full" />
          <span className="font-semibold">Kerava</span>
          <FaAngleDown />
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search in Wolt..."
            className="w-60 pl-10 pr-4 p-2 rounded-full bg-gray-200 text-sm focus:outline-primaryDark"
          />
            <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      {/* Right Side: Auth Links */}
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-gray-800">Log in</Link>
        <Link href="#" className="text-primary bg-primaryLight hover:bg-primaryHover px-4 py-2 rounded-md">Sign up</Link>
      </div>
    </header>
  );
};

