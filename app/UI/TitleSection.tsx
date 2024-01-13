interface titleProps {
  title: string;
  icon?: JSX.Element;
}
export default function TitleSection({ title, icon }: titleProps) {
  return (
    <div className="flexJustifyCenter flex-col gap-4 pb-9">
      <div className="rounded-lg p-3 shadow-lg bg-bunker-900 border-2 border-[#D9D9D9] dark:border-bunker-700 fill-white">
        {icon}
      </div>
      <h1 className="text-[2rem] font-bold">{title}</h1>
    </div>
  );
}
