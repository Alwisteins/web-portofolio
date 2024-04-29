import React from "react";

interface HamburgerMenuProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

export default function HamburgerMenu(props: HamburgerMenuProps) {
  const genericHamburgerLine = `h-[2px] w-6 rounded-full bg-black transition ease transform duration-300`;
  return (
    <>
      <button
        className="sm:hidden flex flex-col h-4 w-10 rounded justify-between items-center group"
        onClick={props.onClick}
      >
        <div
          className={`${genericHamburgerLine} ${
            props.isMenuOpen &&
            "rotate-45 translate-y-[3px] group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            props.isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            props.isMenuOpen &&
            "-rotate-45 -translate-y-[11px] group-hover:opacity-100"
          }`}
        />
      </button>
    </>
  );
}
