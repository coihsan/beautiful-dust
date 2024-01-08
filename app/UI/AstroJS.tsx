import Image from "next/image";
export default function AstroJS() {
  return (
    <div className="w-full h-60 bg-zinc-900 rounded-lg p-5 group flexJustifyCenter flex-col">
      <Image
        src={"/astro-logo-light-gradient.svg"}
        width={200}
        height={80}
        alt="astro logo"
      />
      <h2 className="text-[1.4rem] text-center text-white leading-none">
        The web framework for <br /> content-driven websites
      </h2>
      <Image
        src={"/houston.JWJVBh4U.webp"}
        width={80}
        height={80}
        alt="astro logo"
      />
    </div>
  );
}
