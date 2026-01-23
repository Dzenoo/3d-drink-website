import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const NavbarLinks = [
  {
    id: 1,
    title: "Home",
    href: "",
  },
  {
    id: 2,
    title: "Products",
    href: "",
  },
  {
    id: 3,
    title: "About Us",
    href: "",
  },
  {
    id: 4,
    title: "Store",
    href: "",
  },
];

const Navbar: React.FC = () => {
  return (
    <header className="absolute top-0 right-0 left-0 z-10 flex items-center justify-between gap-5 px-10 py-5 bg-transparent">
      <div>
        <h1 className="text-[1.5rem] font-semibold text-white">ENERGY</h1>
      </div>
      <div>
        <ul className="flex gap-10 max-md:hidden">
          {NavbarLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="cursor-pointer uppercase tracking-wide transition text-white"
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden max-md:block">
        <button>
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
