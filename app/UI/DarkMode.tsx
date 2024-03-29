"use client";
import React, { useState, useEffect } from "react";
import { iconsUI } from "../constants/icons";
export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    return savedTheme ? savedTheme === "dark" : true;
  });
  const handleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newDarkMode);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        const isDarkMode = savedTheme === "dark";
        setIsDarkMode(isDarkMode);
        document.documentElement.classList.toggle("dark", isDarkMode);
      }
    }
  }, []);

  return (
    <div className="relative rounded-md ">
      <div className="flex items-center gap-2 rounded-md px-3 py-2 text-white">
        <span className="fill-zinc-100 w-[20px] h-[20px]">
          {isDarkMode ? iconsUI.moon : iconsUI.sun}
        </span>
        <select
          className="text-zinc-50 dark bg-transparent cursor-pointer text-sm bg-"
          name="theme"
          id="darkmode"
          onChange={handleDarkMode}
          value={isDarkMode ? "dark" : "light"}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}
