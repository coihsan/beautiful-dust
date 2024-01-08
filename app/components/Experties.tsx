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
export function WrapperList({ items, className }: WrapperListProps) {
  return (
    <ul>
      {index.map((items) => (
        <li key={key}>
          <div>{icon}</div>
          <h4>{title}</h4>
        </li>
      ))}
    </ul>
  );
}
export default function Experties() {
  return (
    <section className="w-full rounded-lg bgSchemaDark p-9">
      <TitleSection title={"Tech Stack"} icon={iconsUI.terminal} />
      <WrapperList className="" index={techstack} />
    </section>
  );
}
