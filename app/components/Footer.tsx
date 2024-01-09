import Image from "next/image";
export default function Header() {
  const today = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const thisYear = month[today.getMonth()];
  const thisMonth = today.getMonth();
  return (
    <footer className="flex items-center justify-between max-sm:flex-col-reverse pb-12">
      <p className="text-sm text-zinc-800 dark:text-zinc-400">
        &#169; {thisYear} ALL right Reserved to coihsan
      </p>
      <code className="text-sm max-sm:pb-3">
        Last update &minus; 02 {thisMonth} {thisYear}
      </code>
    </footer>
  );
}
