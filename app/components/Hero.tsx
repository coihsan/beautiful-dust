import { iconsUI } from "../constants/icons";
import Link from "next/link";
import { personaldata } from "../constants/personal";
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
        <h3>
          I’m Digital Marketing at{" "}
          <a href="#" className="px-3 py-1 rounded-full bg-slate-300">
            Freelance.com
          </a>
        </h3>
      </div>

      <div className="mt-[2rem]">
        <p className="text-[18px] text-center dark:text-zinc-400 w-10/12 mx-auto max-sm:w-full">
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
          <h3 className="font-semibold">Credentials :</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <div>{iconsUI.skillshop}</div>
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
      </div>
    </section>
  );
};
export default Hero;
