import { iconsUI } from "../constants/icons";

import Link from "next/link";
import { personaldata, credentials } from "../constants/personal";
import Image from "next/image";
const Hero = () => {
  const personal = personaldata[0];
  return (
    <section className="mx-auto w-full grid py-12">
      <div className="flex items-center flex-col gap-6">
        <Image
          className="rounded-full"
          src={"/avatar.webp"}
          width={160}
          height={160}
          alt="ihsan"
        />
        <h1 className="text-7xl max-sm:text-6xl font-bold">˗ˏˋIhsanˎˊ</h1>
        <h3 className="text-center">
          I’m Digital Marketing at{" "}
          <a
            href="#"
            className="text-wrap after:content-['_↗'] px-3 py-1 rounded-full text-zinc-100 bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900"
          >
            freelance.com
          </a>
        </h3>
      </div>

      <div className="mt-[2rem]">
        <p className="text-[18px] text-center text-zinc-900 dark:text-zinc-300 w-10/12 mx-auto max-sm:w-full">
          {personal.about}
        </p>
        <div className="my-[2rem]">
          <div className="flex itemx-center justify-center flex-wrap gap-2">
            {personal.passion.map((skill) => (
              <div
                key={skill.key}
                className="flex items-center gap-1 px-5 py-2 shadow-md bgTheme rounded-full border border-zinc-400 dark:border-zinc-100"
              >
                <span className="dark:fill-zinc-100">{skill.icon}</span>
                <p className="font-medium max-sm:text-sm">{skill.skilled}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-col">
          <div>{iconsUI.skillshop}</div>
          <h3 className="font-semibold">Credentials :</h3>
          <div className="flex items-center gap-1 flex-wrap">
            {credentials.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="after:content-['_↗'] px-4 py-1 text-[1.2rem] max-sm:text-sm text-sky-600 dark:text-sky-400 hover:bg-slate-200 hover:dark:bg-zinc-800 rounded-full hover:underline transition-all duration-300 ease-in-out"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
