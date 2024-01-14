import { iconsUI } from "../constants/icons";
import TitleSection from "../UI/TitleSection";
import { techstack, moretools } from "../constants/techstack";

interface TechStackItem {
  id: number;
  title: string;
  icon: JSX.Element;
}

interface WrapperListProps {
  index: TechStackItem[];
  className: string;
}
export function WrapperList({ index, className }: WrapperListProps) {
  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {index.map((item) => (
        <li
          className="flexJustifyCenter gap-3 px-5 py-2 rounded-full bgSchemaList bordered max-sm:text-sm"
          key={item.id}
        >
          <div className="max-sm:h-[20px] max-sm:w-[20px] h-[24px] w-[24px]">
            {item.icon}
          </div>
          <h4>{item.title}</h4>
        </li>
      ))}
    </ul>
  );
}
export default function Experties() {
  return (
    <section className="w-full rounded-lg">
      <TitleSection title={"Tech Stack"} icon={iconsUI.terminal} />
      <WrapperList className={""} index={techstack} />
      <div className="mt-5">
        <h3 className="text-center text-[1.5rem] font-semibold mb-5">
          More Tool{"'"}s
        </h3>
        <WrapperList className={""} index={moretools} />
      </div>
    </section>
  );
}
