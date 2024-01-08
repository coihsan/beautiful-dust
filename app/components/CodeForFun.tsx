import Image from "next/link";
import { iconsUI } from "../constants/icons";
import TitleSection from "../UI/TitleSection";
export default function CodeForFun() {
  return (
    <section>
      <TitleSection title={"Code for Fun"} icon={iconsUI.code} />
    </section>
  );
}
