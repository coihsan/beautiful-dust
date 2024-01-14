import { iconsUI } from "../constants/icons";
import Header from "../components/Header";
import Link from "next/link";
import { personaldata, credentials } from "../constants/personal";
import Image from "next/image";
export function Banner() {
  return (
    <div className="overflow-hidden w-full h-[270px] rounded-2xl">
      <Image
        className="rounded-2xl"
        src={"/banner1.webp"}
        width={900}
        height={800}
        alt="banner"
      />
    </div>
  );
}
const Hero = () => {
  const personal = personaldata[0];
  return (
    <section className="mx-auto w-full grid pb-12 pt-5">
      <div className="flex items-center flex-col gap-6">
        <div className="relative pb-12 flexJustifyCenter">
          <div className="absolute top-3 max-sm:top-0 w-full">
            <Header />
          </div>
          <Banner />
          <Image
            className="rounded-full absolute mx-auto bottom-[-20px] max-sm:bottom-4 border-4 border-white dark:border-bunker-900"
            src={"/avatar.webp"}
            width={160}
            height={160}
            alt="ihsan"
          />
        </div>
        <h1 className="text-7xl max-sm:text-6xl font-bold">˗ˏˋIhsanˎˊ</h1>
        <h3 className="text-center">
          I’m Digital Marketing at{" "}
          <a
            href="#"
            className="text-wrap after:content-['_↗'] px-3 py-1 rounded-full text-bunker-100 bg-bunker-900 dark:bg-bunker-100 dark:text-bunker-900"
          >
            freelance.com
          </a>
        </h3>
      </div>

      <div className="mt-[2rem]">
        <p className="text-[18px] text-center text-bunker-900 dark:text-bunker-300 w-10/12 mx-auto max-sm:w-full">
          {personal.about}
        </p>
        <div className="my-[2rem]">
          <div className="flex itemx-center justify-center flex-wrap gap-2">
            {personal.passion.map((skill) => (
              <div
                key={skill.key}
                className="flex items-center gap-1 listTheme"
              >
                <span className="dark:fill-bunker-100">{skill.icon}</span>
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
                className="after:content-['_↗'] px-4 py-1 text-[1.2rem] max-sm:text-sm text-sky-600 dark:text-sky-400 hover:bg-slate-200 hover:dark:bg-bunker-800 rounded-full hover:underline transition-all duration-300 ease-in-out"
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
