import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
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

  return (
    <header className="px-10 py-5 flex justify-between gap-5 items-center z-10 sticky">
      <div>
        <h1 className="text-[1.5rem] font-semibold">DRINK</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          {NavbarLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="font-light text-xl tracking-wide cursor-pointer transition"
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
