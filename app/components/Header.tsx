"use client";
import DarkMode from "../UI/DarkMode";
import { useState } from "react";
import { navlink } from "../constants/personal";
import Image from "next/image";

export function Navbar() {
  return (
    <nav>
      <h1>sjds</h1>
    </nav>
  );
}
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="max-w-screen-md mx-auto px-6">
      <div className="w-full mx-auto flex items-center justify-between py-3">
        <div className="flex items-center">
          <nav className="flex items-center gap-5 ml-5">
            {navlink.map((links) => (
              <a
                className="text-zinc-400 hover:text-zinc-100"
                key={links.id}
                href={links.url}
              >
                {links.text}
              </a>
            ))}
          </nav>
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
