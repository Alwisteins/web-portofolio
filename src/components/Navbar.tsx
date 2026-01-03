"use client";
import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Menu, XIcon } from "lucide-react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink: { url: string; name: string }[] = [
    { url: "#work", name: "Work" },
    { url: "#services", name: "Services" },
    { url: "#about", name: "About" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-14 py-6">
        <h3 className="font-medium px-4 py-2 text-lg bg-white/70 backdrop-blur-lg rounded-full">
          Alwi
        </h3>

        <div className="relative">
          <div className="sm:hidden cursor-pointer bg-white/70 backdrop-blur-lg px-4 py-4 rounded-full">
            {!isMenuOpen && <Menu onClick={() => setIsMenuOpen(true)} />}
            {isMenuOpen && <XIcon onClick={() => setIsMenuOpen(false)} />}
          </div>

          <ul
            className={`
              ${poppins.className}
              absolute right-0 top-16
              w-48
              bg-white/80 backdrop-blur-lg
              rounded-xl
              shadow-lg
              py-4
              space-y-3
              text-center
              sm:static sm:flex sm:w-auto sm:space-y-0 sm:shadow-none sm:py-0 sm:rounded-full
              ${isMenuOpen ? "block" : "hidden sm:flex"}
            `}>
            {NavLink.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 hover:opacity-70 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
