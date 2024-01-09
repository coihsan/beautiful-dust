import DarkMode from "../UI/DarkMode";
import { navlink } from "../constants/personal";
import Image from "next/image";
export default function Header() {
  return (
    <header className="max-w-screen-md mx-auto bg-[#17181C] dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-2xl dark:shadow-zinc-500/50 px-6 text-zinc-100 rounded-lg mt-5">
      <div className="w-full mx-auto flex items-center justify-between py-3">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full border-2"
              src={"/avatar.webp"}
              width={40}
              height={40}
              alt="logo"
            />
            <span className="font-bold text-lg">coihsan</span>
          </div>
          {/* <nav className="flex items-center gap-5 ml-5">
            {navlink.map((links) => (
              <a
                className="text-zinc-400 hover:text-zinc-100"
                key={links.id}
                href={links.url}
              >
                {links.text}
              </a>
            ))}
          </nav> */}
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
