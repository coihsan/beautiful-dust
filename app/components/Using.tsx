import NextJS from "../UI/NextJS";
import AstroJS from "../UI/AstroJS";
import { offering } from "../constants/personal";
export default function Using() {
  return (
    <div className="py-12">
      <h1 className="leading-tight max-sm:leading-7 text-[2rem] max-sm:text-[1.4rem] mx-auto font-semibold text-center w-10/12 max-sm:w-full">
        When focusing on SEO or features, I use{" "}
        <a
          className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500 underline decoration-sky-500"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>{" "}
        and either{" "}
        <a
          className="underline"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        or{" "}
        <a
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 underline decoration-violet-600"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astro.js
        </a>{" "}
        frameworks in my work.
      </h1>
      <ul className="flexJustifyCenter flex-wrap gap-2 py-9">
        {offering.map((offering, key) => (
          <li
            className="px-5 py-2 shadow-md bg:[#EAEFF2] dark:bg-[#17181C] rounded-full border border-zinc-400 dark:border-zinc-100"
            key={key}
          >
            {offering}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <NextJS />
        <AstroJS />
      </div>
    </div>
  );
}
