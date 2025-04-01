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
    <header className="sticky top-0 z-10 flex items-center justify-between gap-5 px-10 py-5">
      <div>
        <h1 className="text-[1.5rem] font-semibold">DRINK</h1>
      </div>
      <div>
        <ul className="flex gap-10 max-md:hidden">
          {NavbarLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="cursor-pointer text-xl font-light tracking-wide transition"
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
