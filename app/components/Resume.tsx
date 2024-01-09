import TitleSection from "../UI/TitleSection";
import { iconsUI } from "../constants/icons";
import { ResumeData } from "../constants/personal";
export default function Resume() {
  return (
    <section className="bgSchemaDark rounded-lg py-9 mt-9 overflow-hidden">
      <TitleSection title={"Journey"} icon={iconsUI.journey} />
      <div className="overflow-scroll overscroll-y-auto touch-pan-y h-[20rem] w-full ">
        <ul className="grid grid-cols-1 gap-3 p-5">
          {ResumeData.map((work) => (
            <li
              key={work.id}
              className="flex items-start border-b-[1px] border-slate-300 dark:border-[#282A31] last:border-none py-5"
            >
              <span className="fill-[#282A31] dark:fill-zinc-100 p-2 rounded-md bg-white dark:bg-[#282A31]">
                {work.icon}
              </span>
              <div className="flex gap-2 flex-col items-start ml-5">
                <span className="text-zinc-700 dark:text-zinc-400">
                  {work.year}
                </span>
                <h3 className="pt-1 font-semibold leading-none text-[1.2rem]">
                  {work.company}
                </h3>
                <p>{work.position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
