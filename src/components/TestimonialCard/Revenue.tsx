type TRevenueProps = {
  children: React.ReactNode;
};

export default function (props: TRevenueProps) {
  return <span className="select-none">{props.children}</span>;
}
