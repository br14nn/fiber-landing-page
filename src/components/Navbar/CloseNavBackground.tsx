type TCloseNavBackgroundProps = {
  onClick?: React.MouseEventHandler;
};

export default function (props: TCloseNavBackgroundProps) {
  return (
    <div
      className="fixed inset-0 left-full hidden h-screen w-screen bg-black/0 screen-800px:block"
      id="closeNavBackground"
      onClick={props.onClick}
    ></div>
  );
}
