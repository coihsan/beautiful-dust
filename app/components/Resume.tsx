import TitleSection from "../UI/TitleSection";
import { iconsUI } from "../constants/icons";
import { ResumeData } from "../constants/personal";
export default function Resume() {
  return (
    <section>
      <TitleSection title={"Journey"} icon={iconsUI.journey} />
      <ul className="grid grid-cols-2">
        {ResumeData.map((work) => (
          <li key={work.id}>
            <span>{work.year}</span>
            <span>{work.company}</span>
            <span>{work.position}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
