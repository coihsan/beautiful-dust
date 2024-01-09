import NextJS from "../UI/NextJS";
import AstroJS from "../UI/AstroJS";
import { offering } from "../constants/personal";
export default function Using() {
  return (
    <div className="py-12">
      <h1 className="leading-tight max-sm:leading-7 text-[2rem] max-sm:text-[1.4rem] mx-auto font-semibold text-center w-11/12 max-sm:w-full">
        When focusing on #SEO or #features, I use{" "}
        <a
          className="after:content-['_↗'] bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500 underline decoration-sky-500"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>{" "}
        and either{" "}
        <a
          className="underline after:content-['_↗']"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        or{" "}
        <a
          className="after:content-['_↗'] bg-clip-text text-transparent bg-gradient-to-r from-[#D83333] to-[#F041FF] underline decoration-[#D83333]"
          href="https://astro.build/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astro.js
        </a>{" "}
        frameworks in my work.
      </h1>
      <ul className="flexJustifyCenter flex-wrap gap-2 py-9">
        {offering.map((offering, key) => (
          <li className="listTheme" key={key}>
            <span className="text-sky-400 dark:text-sky-600">#</span>
            <em>{offering}</em>
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
