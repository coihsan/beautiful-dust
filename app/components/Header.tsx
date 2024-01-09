import DarkMode from "../UI/DarkMode";
import Image from "next/image";
export default function Header() {
  return (
    <header className="max-w-screen-md mx-auto bg-[#17181C] px-6 text-zinc-100 rounded-lg mt-5">
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
          <nav className="ml-5">
            <a href="">Projects</a>
          </nav>
        </div>
        <DarkMode />
      </div>
    </header>
  );
}
