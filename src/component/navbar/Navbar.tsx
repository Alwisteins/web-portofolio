import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="absolute right-5">
      <button className="sm:hidden relative group right-[-40px]">
        <div className="flex flex-col justify-between w-[20px] h-[13px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-y-1.5 group-focus:-rotate-90">
          <div className="bg-prim-black h-[2px] w-4 ml-1 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
          <div className="bg-prim-black h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
          <div className="bg-prim-black h-[2px] w-3 ml-2 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
        </div>
      </button>
      <ul className="sm:flex text-right mt-2 italic text-sm sm:mr-4 sm:space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}
