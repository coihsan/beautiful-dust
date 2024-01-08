import Image from "next/image";
export default function AstroJS() {
  return (
    <div className="w-full h-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-purple-950 to-zinc-900 rounded-lg p-5 group overflow-hidden">
      <div className="flexJustifyCenter flex-col">
        <div className="flexJustifyCenter flex-col translate-y-[30%] group-hover:translate-y-[0%] transition-transform ease-in-out max-sm:translate-y-[0%]">
          <Image
            src={"/astro-logo-light-gradient.svg"}
            width={200}
            height={80}
            alt="astro logo"
          />
          <h2 className="text-[1.4rem] text-center text-white leading-none">
            The web framework for <br /> content-driven websites
          </h2>
        </div>
        <Image
          className="translate-y-[150%] group-hover:translate-y-[0%] transition-transform ease-in-out max-sm:translate-y-[0%]"
          src={"/houston.JWJVBh4U.webp"}
          width={80}
          height={80}
          alt="astro logo"
        />
      </div>
    </div>
  );
}
