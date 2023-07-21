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
      className="absolute z-10 flex w-full flex-row items-center justify-between px-28 py-10 leading-none screen<1024:fixed screen<1024:top-0 screen<1024:px-14"
    >
      <p className="hidden text-xl font-bold screen<1024:block">Fiber</p>

      <OpenMenuButton
        className="hidden screen<1024:block"
        onClick={handleClick}
      />

      <CloseNavBackground onClick={handleClick} />

      <div
        className="flex w-full flex-row items-center justify-between screen<1024:fixed screen<1024:left-full screen<1024:right-0 screen<1024:top-0 screen<1024:h-screen screen<1024:w-[320px] screen<1024:flex-col screen<1024:justify-start screen<1024:gap-6 screen<1024:bg-white screen<1024:p-10 screen<1024:shadow-2xl"
        id="navMenu"
      >
        <CloseNavButton
          className="ml-auto hidden screen<1024:block"
          onClick={handleClick}
        />

        <p className="w-3/12 text-xl font-bold screen<1024:hidden">Fiber</p>

        <ul className="flex w-6/12 flex-row items-center justify-center gap-6 screen<1024:w-full screen<1024:flex-col screen<1024:justify-start">
          <List>Community</List>
          <List>Pricing</List>
          <List>Features</List>
        </ul>

        <ul className="flex w-3/12 flex-row items-center justify-end gap-6 font-bold screen<1024:w-full screen<1024:justify-center">
          <List>Sign In</List>
          <List className="rounded bg-violet-blue px-5 py-4 text-white">
            Sign Up
          </List>
        </ul>
      </div>
    </nav>
  );
}
