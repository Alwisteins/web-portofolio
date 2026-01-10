"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const navFade: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const menuContainer: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: { duration: 0.2 },
  },
};

const menuItem: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = [
    { url: "/", name: "Home" },
    { url: "/work", name: "Work" },
  ];

  return (
    <motion.header
      variants={navFade}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-14 py-6">
        <h3 className="font-medium px-4 py-2 text-lg bg-white/70 backdrop-blur-lg rounded-full">
          Alwi
        </h3>

        <div className="relative">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden cursor-pointer bg-white/70 backdrop-blur-lg px-4 py-4 rounded-full">
            {isMenuOpen ? <XIcon /> : <Menu />}
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                variants={menuContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`
                  absolute right-0 top-16
                  w-48
                  bg-white/80 backdrop-blur-lg
                  rounded-xl
                  shadow-lg
                  py-4
                  space-y-3
                  text-center
                  sm:hidden
                `}>
                {NavLink.map((item) => (
                  <motion.li key={item.name} variants={menuItem}>
                    <Link
                      href={item.url}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 hover:opacity-70 transition">
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <ul
            className={`hidden sm:flex gap-6 bg-white/70 backdrop-blur-lg px-6 py-3 rounded-full`}>
            {NavLink.map((item) => (
              <li key={item.name}>
                <Link href={item.url} className="hover:opacity-70 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
