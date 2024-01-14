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
  const thisYear = today.getFullYear();
  const thisMonth = month[today.getMonth()];
  const thisFormat = thisMonth + " " + thisYear;
  return (
    <footer className="flex items-center justify-between max-sm:flex-col-reverse pb-12">
      <p className="text-sm text-bunker-800 dark:text-bunker-400">
        &#169; {thisYear} ALL right Reserved to coihsan
      </p>
      <code className="text-sm max-sm:pb-3">
        Last update &minus; 02 {thisFormat}
      </code>
    </footer>
  );
}
