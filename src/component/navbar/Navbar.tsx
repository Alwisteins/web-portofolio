import { Link } from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabName: number) => {
    setActiveTab(tabName);
  };
  return (
    <div className="flex justify-between sticky top-0 right-5 p-3 bg-prim-white z-50 backdrop-filter backdrop-blur-sm bg-opacity-30">
      <button className="sm:hidden sticky group">
        <div className="flex flex-col justify-between w-[20px] h-[13px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-y-1.5 group-focus:-rotate-90">
          <div className="bg-prim-black h-[2px] w-4 ml-1 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
          <div className="bg-prim-black h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
          <div className="bg-prim-black h-[2px] w-3 ml-2 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
        </div>
      </button>
      <div className="flex space-x-2 cursor-pointer">
        <img
          src="./src/assets/profile-rounded.jpg"
          alt=""
          className="w-40 sm:w-8 h-40 sm:h-8 top-40 border-solid border-1 rounded-full"
        />
        <h1 className="font-semibold font-['Phudu'] text-2xl">Alwisteins</h1>
      </div>
      <ul className="sm:flex text-right mt-2 italic text-sm sm:mr-4 sm:space-x-6">
        <li>
          <Link
            to="/"
            className={
              activeTab === 0
                ? "font-medium text-prim-blue sm:underline sm:underline-offset-8"
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
                ? "font-medium text-prim-blue sm:underline sm:underline-offset-8"
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
                ? "font-medium text-prim-blue sm:underline sm:underline-offset-8"
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
                ? "font-medium text-prim-blue sm:underline sm:underline-offset-8"
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
                ? "font-medium text-prim-blue sm:underline sm:underline-offset-8"
                : ""
            }
            onClick={() => handleTabClick(4)}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}
