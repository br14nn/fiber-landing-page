type TNameProps = {
  children: React.ReactNode;
};

export default function (props: TNameProps) {
  return (
    <span className="select-none font-bold text-violet-blue">
      {props.children}
    </span>
  );
}
