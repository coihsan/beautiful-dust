import { iconsUI } from "../constants/icons";

import { personaldata } from "../constants/personal";
import Image from "next/image";
const Hero = () => {
  const personal = personaldata[0];
  return (
    <section className="mx-auto w-full grid py-12">
      <div className="flex items-center pb-9 flex-col gap-6">
        <Image
          className="rounded-full"
          src={"/avatar.webp"}
          width={160}
          height={160}
          alt="ihsan"
        />
        <h1 className="text-7xl max-sm:text-6xl font-bold">˗ˏˋIhsanˎˊ</h1>
      </div>

      <div className="mt-[2rem]">
        <p className="pt-[4rem] text-[18px] text-center dark:text-zinc-400">
          {personal.about}
        </p>
        <div className="flex items-center gap-2 py-1 max-sm:flex-col max-sm:items-start">
          <h3>Credentials</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-12 h-12">{iconsUI.skillshop}</div>
            <a
              href=""
              className="px-4 py-1 hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-full hover:underline"
            >
              Skillshop
            </a>
            <a
              href=""
              className="px-4 py-1 hover:bg-zinc-200 hover:dark:bg-zinc-800 hover:underline rounded-full"
            >
              Accredible.net
            </a>
          </div>
        </div>
        <div className="mb-[2rem]">
          <div className="flex itemx-center flex-wrap gap-2">
            {personal.passion.map((skill) => (
              <div
                key={skill.key}
                className="flex items-center gap-1 px-3 py-1 shadow-md rounded-full border border-zinc-400 dark:border-zinc-600"
              >
                <span className="dark:fill-zinc-100">{skill.icon}</span>
                <p className="font-medium max-sm:text-sm">{skill.skilled}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
