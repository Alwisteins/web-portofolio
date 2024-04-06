import Link from "next/link";

export default function Navbar() {
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
        <ul className="flex space-x-10">
          {NavLink.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}
