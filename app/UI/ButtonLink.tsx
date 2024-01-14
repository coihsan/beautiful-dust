"use client";
import Link from "next/link";
interface Props {
  link: string;
  variant: string;
  text: string;
  icon?: JSX.Element;
}
export default function ButtonUI({ link, variant, text, icon }: Props) {
  return (
    <Link
      className={`shadow-md dark:shadow-lg shadow-bunker-300 hover:dark:shadow-bunker-500/50 flex items-center justify-between gap-2 cursor-pointer px-2 w-[9rem] h-11 rounded-full border bg-[#17181C] text-white ${variant}`}
      href={link}
    >
      <span className="pl-2 leading-none">{text}</span>
      <span className="p-2 rounded-full bg-bunker-50">
        <span className="">{icon}</span>
      </span>
    </Link>
  );
}
