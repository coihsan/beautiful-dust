import NextJS from "../UI/NextJS";
export default function Using() {
  return (
    <div className="py-12">
      <h1 className="leading-7 text-[2rem] max-sm:text-[1.4rem] mx-auto font-semibold text-center w-10/12 max-sm:w-full">
        When focusing on SEO or features, I use{" "}
        <a
          className="text-[#1ABCFE] underline"
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
          className="text-purple-500 underline"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astro.js
        </a>{" "}
        frameworks in my work.
      </h1>
      <div className="pt-9 grid grid-cols-2 gap-3">
        <NextJS />
        <NextJS />
      </div>
    </div>
  );
}
