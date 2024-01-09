import TitleSection from "../UI/TitleSection";
import { iconsUI } from "../constants/icons";
import { ResumeData } from "../constants/personal";
export default function Resume() {
  return (
    <section className="bgSchemaDark rounded-lg py-9 mt-9 overflow-hidden">
      <TitleSection title={"Journey"} icon={iconsUI.journey} />
      <div className="overflow-scroll overscroll-y-auto h-[20rem] w-full ">
        <div className="relative before:absolute before:left-10 before:inline-flex before:h-full before:w-px before:bg-zinc-700">
          <ul className="grid grid-cols-1 gap-3 px-16">
            {ResumeData.map((work) => (
              <li
                key={work.id}
                className="flex flex-col items-start border-b-[1px] border-slate-300  last:border-none py-5"
              >
                <span className="text-zinc-600">{work.year}</span>
                <h3 className="pt-2 pb-1 font-semibold">{work.company}</h3>
                <p>{work.position}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
