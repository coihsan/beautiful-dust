import Image from "next/image";
import { iconsUI } from "../constants/icons";
import { ProjectList } from "../constants/indexProjects";
import TitleSection from "../UI/TitleSection";
export default async function CodeForFun() {
  return (
    <section>
      <TitleSection title={"Code for Fun"} icon={iconsUI.code} />
      <ul className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        {ProjectList.map((projects) => (
          <li
            key={projects.id}
            className="p-3 rounded-lg bg-bunker-50/30 dark:bg-bunker-900/30 border border-bunker-100 dark:border-bunker-700 group"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                className="w-full rounded-lg group-hover:scale-[1.1] transition-all ease-in-out duration-300"
                src={projects.image}
                width={451}
                height={351}
                alt="code for fun and free"
              />
            </div>
            <h3 className="font-semibold pt-3">{projects.projectstitle}</h3>
            <div className="flex gap-2 py-3">
              {projects.ProjectsDesc.map((skilleds, index) => (
                <span
                  key={index}
                  className="text-sm text-bunker-600 dark:text-bunker-300 px-3 py-1 rounded-full bg-bunker-50 dark:bg-bunker-800"
                >
                  {skilleds}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 ">
              <a
                className="flexJustifyCenter py-2 gap-2 rounded-lg bg-[#09090B] text-white hover:bg-bunker-900 transitionAll"
                href={projects.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="text-sm">Preview</h5>
                <span>{iconsUI.call_made}</span>
              </a>
              <a
                className="flexJustifyCenter py-2 gap-2 rounded-lg bg-white dark:bg-bunker-900 hover:bg-bunker-100 dark:hover:bg-bunker-800 transitionAll"
                href={projects.getCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{iconsUI.github}</span>
                <span className="text-sm dark:text-white">Repository</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
