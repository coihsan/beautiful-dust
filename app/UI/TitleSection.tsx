interface titleProps {
  title: string;
  icon?: JSX.element;
}
export default function TitleSection({ title, icon }: titleProps) {
  return (
    <div className="flexJustifyCenter flex-col gap-4 pb-9">
      <div className="rounded-lg p-3 shadow-lg bg-zinc-950 border-2 border-[#9AA0AE] fill-white">
        {icon}
      </div>
      <h1 className="text-[2rem] font-bold">{title}</h1>
    </div>
  );
}
