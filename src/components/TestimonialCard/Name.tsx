type TNameProps = {
  children: React.ReactNode;
};

export default function (props: TNameProps) {
  return <span className="font-bold text-violet-blue">{props.children}</span>;
}
