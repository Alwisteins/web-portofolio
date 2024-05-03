"use client";
import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink: { url: string; name: string }[] = [
    { url: "#", name: "Home" },
    { url: "#about", name: "About" },
    { url: "#projects", name: "Projects" },
    { url: "#skills", name: "Skills" },
    { url: "#contacts", name: "Contacts" },
  ];

  return (
    <div className="flex py-7 px-14 items-center justify-between z-50 bg-white top-0 sticky">
      <div className="animate-pulse">
        <h1 className="font-bold text-xl">ALWISTEINS</h1>
      </div>
      <HamburgerMenu onClick={toggleMenu} isMenuOpen={isMenuOpen} />
      <ul
        className={`absolute top-24 w-3/4 sm:w-auto sm:static sm:flex sm:space-x-10 bg-white rounded-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {NavLink.map((item, index) => (
          <li key={index} className='flex items-center text-center w-full sm:w-auto h-10 sm:h-auto'>
            <Link href={item.url} className='grow'>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
