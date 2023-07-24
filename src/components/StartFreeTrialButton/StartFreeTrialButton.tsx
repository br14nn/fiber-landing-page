type TStartFreeTrialButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function (props: TStartFreeTrialButtonProps) {
  return (
    <button
      className={`w-fit rounded bg-violet-blue px-7 py-5 font-bold leading-none text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
}
