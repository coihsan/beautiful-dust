import { iconsUI } from "../constants/icons";
import TitleSection from "../UI/TitleSection";
import { techstack, moretools } from "../constants/techstack";

interface IconProps{
    index: () => function;
    className: string;
    key: number;
    title: string;
    icon: JSX.element
}
export function ({index, className, key, title, icon} : IconProps){
    return(
        <ul>
            {{index}.map}
        </ul>
    )
}
export default function Experties() {
  return (
    <section className="w-full rounded-lg bgSchemaDark p-9">
      <TitleSection title={"Tech Stack"} icon={iconsUI.terminal} />
    </section>
  );
}
