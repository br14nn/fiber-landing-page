type TLinkProps = {
  children: React.ReactNode;
};

export default function (props: TLinkProps) {
  return (
    <a href="#" className="text-liver">
      {props.children}
    </a>
  );
}
