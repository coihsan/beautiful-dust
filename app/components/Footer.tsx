import Image from "next/image";
export default function Header() {
  const today = new Date();
  const thisYear = today.getFullYear();
  return (
    <footer className="flex items-center justify-between max-sm:flex-col-reverse pb-12">
      <p className="text-sm text-zinc-800 dark:text-zinc-400">
        &#169; {thisYear} ALL right Reserved to coihsan
      </p>
      <code className="text-sm max-sm:pb-3">
        Last update &minus; 02 January {thisYear}
      </code>
    </footer>
  );
}
