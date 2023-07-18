import List from "./List";
import OpenMenuButton from "./OpenNavButton";
import CloseNavButton from "./CloseNavButton";
import CloseNavBackground from "./CloseNavBackground";
import { useAnimate } from "framer-motion";

export default function () {
  const [scope, animate] = useAnimate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;

    if (id === "openNavButton") {
      animate("#navMenu", { left: "auto" });
      animate("#closeNavBackground", { left: "auto" }, { duration: 0 });
    }

    if (id === "closeNavButton" || id === "closeNavBackground") {
      animate("#navMenu", { left: "100%" });
      animate("#closeNavBackground", { left: "100%" }, { duration: 0 });
    }
  };

  return (
    <nav
      ref={scope}
      className="font-inter absolute z-10 flex w-full flex-row items-center justify-between px-28 py-10 leading-none screen-800px:fixed screen-800px:top-0 screen-800px:px-10"
    >
      <p className="hidden w-2/12 text-xl font-bold screen-800px:block">
        Fiber
      </p>

      <OpenMenuButton onClick={handleClick} />

      <CloseNavBackground onClick={handleClick} />

      <div
        className="flex w-full flex-row items-center justify-between screen-800px:fixed screen-800px:left-full screen-800px:right-0 screen-800px:top-0 screen-800px:h-screen screen-800px:w-[320px] screen-800px:flex-col screen-800px:justify-start screen-800px:gap-6 screen-800px:bg-white screen-800px:p-10 screen-800px:shadow-2xl"
        id="navMenu"
      >
        <CloseNavButton className="ml-auto" onClick={handleClick} />

        <p className="w-2/12 text-xl font-bold screen-800px:hidden">Fiber</p>

        <ul className="flex w-6/12 flex-row items-center justify-end gap-6 screen-800px:w-full screen-800px:flex-col screen-800px:justify-start">
          <List>Community</List>
          <List>Pricing</List>
          <List>Features</List>
        </ul>

        <ul className="flex w-4/12 flex-row items-center justify-end gap-6 font-bold screen-800px:w-full screen-800px:justify-center">
          <List>Sign In</List>
          <List className="rounded bg-violet-blue px-6 py-4 text-white">
            Sign Up
          </List>
        </ul>
      </div>
    </nav>
  );
}
