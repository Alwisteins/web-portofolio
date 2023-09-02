import { Link } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menambahkan state untuk mengontrol visibilitas menu

  const handleTabClick = (tabName: number) => {
    setActiveTab(tabName);
    setIsMenuOpen(false); // Menutup menu setelah tab dipilih
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Mengubah visibilitas menu saat tombol ditekan
  };

  return (
    <div className="flex justify-between items-center mx-5 pt-2 right-5 h-12 z-100">
      <div className="flex sm:ml-4 space-x-2 cursor-pointer">
        <img
          src="./src/assets/profile-rounded.jpg"
          alt=""
          className="w-8 h-8 top-40 border-solid border-sec-blue border-2 rounded-full"
        />
        <h1 className="font-['Poppins'] font-bold text-lg sm:text-2xl">
          Alwisteins.
        </h1>
      </div>
      <div className="relative bottom-2">
        <button className="sm:hidden group" onClick={toggleMenu}>
          <div className="flex flex-col justify-between w-[20px] h-[13px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-y-1.5 group-focus:-rotate-90">
            <div className="bg-prim-black h-[2px] w-4 ml-1 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
            <div className="bg-prim-black h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
            <div className="bg-prim-black h-[2px] w-3 ml-2 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
          </div>
        </button>
        <ul
          className={`sm:flex bg-prim-white absolute right-[-20px] top-10 sm:top-0 sm:mt-0 p-4 sm:p-0 text-right italic text-sm mr-4 sm:space-x-6 shadow-lg sm:shadow-none rounded-md ${
            isMenuOpen ? "block" : "hidden" // Menggunakan CSS classes untuk mengatur visibilitas
          }`}
        >
          <li>
            <Link
              to="/"
              className={
                activeTab === 0
                  ? "font-medium text-prim-blue"
                  : ""
              }
              onClick={() => handleTabClick(0)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                activeTab === 1
                  ? "font-medium text-prim-blue"
                  : ""
              }
              onClick={() => handleTabClick(1)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={
                activeTab === 2
                  ? "font-medium text-prim-blue"
                  : ""
              }
              onClick={() => handleTabClick(2)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={
                activeTab === 3
                  ? "font-medium text-prim-blue"
                  : ""
              }
              onClick={() => handleTabClick(3)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className={
                activeTab === 4
                  ? "font-medium text-prim-blue"
                  : ""
              }
              onClick={() => handleTabClick(4)}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
