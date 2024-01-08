import Image from "next/image";
import { iconsUI } from "../constants/icons";
import { ProjectList } from "../constants/indexProjects";
import TitleSection from "../UI/TitleSection";
export default function CodeForFun() {
  return (
    <section>
      <TitleSection title={"Code for Fun"} icon={iconsUI.code} />
      <ul className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        {ProjectList.map((projects) => (
          <li
            key={projects.id}
            className="p-3 rounded-lg bg-[#EAEFF2] dark:bg-[#17181C] bordered group"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                className="rounded-lg group-hover:scale-[1.1] transition-all ease-in-out duration-300"
                src={projects.image}
                width={351}
                height={351}
                alt="code for fun and free"
              />
            </div>
            <h3>{projects.projectstitle}</h3>
            <div className="flex gap-2">
              {projects.ProjectsDesc.map((skilleds) => (
                <span className="text-sm text-zinc-600 dark:text-zinc-300  px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800">
                  {skilleds}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-5">
              <a
                className="flexJustifyCenter py-2 gap-2 rounded-lg bg-black text-white"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="text-sm">Preview</h5>
                <span>{iconsUI.call_made}</span>
              </a>
              <a
                className="flexJustifyCenter py-2 gap-2 rounded-lg bg-white text-black"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="">{iconsUI.github}</span>
                <span className="text-sm">Preview</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
