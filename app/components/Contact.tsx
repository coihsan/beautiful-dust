import { socialicons } from "../constants/socialicons";
import ButtonCopy from "../UI/ButtonCopy";
import ButtonLink from "../UI/ButtonLink";
import { iconsUI } from "../constants/icons";
import TitleSection from "../UI/TitleSection";

export default function Contact() {
  return (
    <div className="my-[5rem]">
      <TitleSection title={""} icon={iconsUI.sentiment} />
      <h3 className="font-bold text-3xl text-center max-sm:text-2xl">
        If my profile aligns with your organizational objectives, I am excited
        about the opportunity to join your team and make a positive impact!
      </h3>
      <div className="flexJustifyCenter gap-2">
        {socialicons.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-3 bg-slate-300 dark:bg-coral-800 hover:scale-[0.9] transition-all ease-linear dark:fill-coral-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="flexJustifyCenter gap-2">
        <ButtonLink
          link={"#"}
          variant={"bg-coral-100 border-coral-500 dark:fill-white"}
          text={"Whatsapp"}
          icon={iconsUI.whatsapp}
        />
        <ButtonCopy />
      </div>
    </div>
  );
}
