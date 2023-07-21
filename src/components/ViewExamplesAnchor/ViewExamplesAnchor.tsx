type TViewExamplesAnchorProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function (props: TViewExamplesAnchorProps) {
  return (
    <a
      className={`font-bold text-violet-blue underline decoration-2 underline-offset-4 ${props.className}`}
      href="#"
    >
      {props.children}
    </a>
  );
}
