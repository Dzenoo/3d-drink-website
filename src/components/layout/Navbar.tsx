import Link from 'next/link';
import { Menu } from 'lucide-react';

const navLinks = ['Home', 'Products', 'About Us', 'Store'];

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between gap-5 bg-transparent px-10 py-5">
      <h1 className="text-[1.5rem] font-semibold text-white">ENERGY</h1>
      <ul className="flex gap-10 max-md:hidden">
        {navLinks.map((title) => (
          <li key={title}>
            <Link
              href="#"
              className="cursor-pointer uppercase tracking-wide text-white transition"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="hidden max-md:block">
        <Menu className="text-white" />
      </button>
    </header>
  );
}
