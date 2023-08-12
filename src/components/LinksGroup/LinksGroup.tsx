type TLinksGroupProps = {
  title: string;
  children: React.ReactNode;
};

export default function (props: TLinksGroupProps) {
  return (
    <div className="flex w-[15%] flex-col items-start gap-y-2 mobile-max:w-full">
      <p className="text-xl font-bold">{props.title}</p>
      {props.children}
    </div>
  );
}
