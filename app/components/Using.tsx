import NextJS from "../UI/NextJS";
import AstroJS from "../UI/AstroJS";
export default function Using() {
  return (
    <div className="py-12">
      <h1 className="leading-7 text-[2rem] max-sm:text-[1.4rem] mx-auto font-semibold text-center w-10/12 max-sm:w-full">
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
      <div>
        <h1>helo</h1>
      </div>
      <div className="pt-9 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <NextJS />
        <AstroJS />
      </div>
    </div>
  );
}
