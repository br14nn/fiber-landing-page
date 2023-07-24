import HamburgerMenu from "../../assets/svg/HamburgerMenu";

type TCloseNavButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler;
};

export default function (props: TCloseNavButtonProps) {
  return (
    <button
      className={`${props.className}`}
      id="closeNavButton"
      onClick={props.onClick}
    >
      <HamburgerMenu />
    </button>
  );
}
