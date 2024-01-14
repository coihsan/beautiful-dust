"use client";
import DarkMode from "../UI/DarkMode";
import { useState } from "react";
import { navlink } from "../constants/personal";
import { iconsUI } from "../constants/icons";
import Image from "next/image";

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex items-center gap-5">
      <button className="fill-white">
        {navbarOpen ? iconsUI.menu : iconsUI.close}
      </button>
      {navlink.map((links) => (
        <a
          className="text-bunker-400 hover:text-bunker-50"
          key={links.id}
          href={links.url}
        >
          {links.text}
        </a>
      ))}
    </nav>
  );
}
export default function Header() {
  return (
    <header className="max-w-screen-md mx-auto px-6">
      <div className="w-full mx-auto flex items-center justify-between py-3">
        <Navbar />
        <DarkMode />
      </div>
    </header>
  );
}
