"use client";
import { iconsUI } from "../constants/icons";
import { useState } from "react";

export default function ButtonCopy() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = "co.ihsan@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(copyEmail).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      style={{ color: isCopied ? "#a3a3a3" : "#171717" }}
      className="w-max shadow-md dark:shadow-lg shadow-zinc-300 hover:dark:shadow-zinc-500/50  flex px-5 h-11 rounded-full bg-zinc-100 hover:bg-zinc-200 items-center gap-2 cursor-pointer border border-zinc-300 dark:border-white"
    >
      <span>{isCopied ? "Copied" : "E-Mail"}</span>
      <span className="fill-[#17181C]">{iconsUI.copy}</span>
    </button>
  );
}
