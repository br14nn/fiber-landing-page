import HamburgerMenu from "../../assets/svg/HamburgerMenu";

type TOpenNavButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler;
};

export default function (props: TOpenNavButtonProps) {
  return (
    <button
      className={`${props.className}`}
      id="openNavButton"
      onClick={props.onClick}
    >
      <HamburgerMenu />
    </button>
  );
}
