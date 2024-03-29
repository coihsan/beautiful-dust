import { socialicons } from "../constants/socialicons";
import ButtonCopy from "../UI/ButtonCopy";
import ButtonLink from "../UI/ButtonLink";
import { iconsUI } from "../constants/icons";
import TitleSection from "../UI/TitleSection";

export default function Contact() {
  return (
    <div className="my-[5rem]">
      <TitleSection title={"Let's Connect!"} icon={iconsUI.sentiment} />
      <div className="flexJustifyCenter gap-3 pb-5">
        <span className="relative flex items-center justify-center h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <h3 className="text-red-500">Available 1 Spot</h3>
      </div>
      <h3 className="font-bold text-3xl text-center max-sm:text-2xl w-8/12 max-sm:w-full mx-auto">
        If you are interested in my resume, I am ready to work with you.
      </h3>
      <div className="flexJustifyCenter gap-2 py-7">
        <ButtonLink
          link={"#"}
          variant={"bg-coral-100 border-coral-500 dark:fill-white"}
          text={"Telegram"}
          icon={iconsUI.arrow_left_alt}
        />
        <ButtonCopy />
      </div>
      <div className="flexJustifyCenter gap-2">
        {socialicons.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-3 bg-bunker-900 hover:bg-bunker-700 hover:scale-[0.9] transition-all ease-linear fill-white"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <h3 className="font-semibold text-3xl text-center max-sm:text-2xl pt-9">
        Good Bye! 👋🏻
      </h3>
    </div>
  );
}
