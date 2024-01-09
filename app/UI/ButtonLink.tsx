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
      className={`shadow-md shadow-zinc-300 dark:shadow-inherit flex items-center gap-2 cursor-pointer px-5 h-11 rounded-full border bg-[#17181C] text-white ${variant}`}
      href={link}
    >
      <span className="leading-none">{text}</span>
      <span className="p-2 rounded-full bg-zinc-50">
        <span className="">{icon}</span>
      </span>
    </Link>
  );
}
