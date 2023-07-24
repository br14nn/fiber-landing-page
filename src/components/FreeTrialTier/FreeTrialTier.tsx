import CheckMark from "../../assets/svg/CheckMark";

type TFreeTrialTierProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function (props: TFreeTrialTierProps) {
  return (
    <div
      className={`flex flex-row items-center gap-2 text-liver ${props.className}`}
    >
      <CheckMark />
      {props.children}
    </div>
  );
}
