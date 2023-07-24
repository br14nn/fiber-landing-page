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
      className="absolute z-10 flex w-full flex-row items-center justify-between px-28 py-10 leading-none tablet:fixed tablet:top-0 tablet:px-14 mobile-max:px-7 mobile-max:py-7"
    >
      <p className="hidden text-xl font-bold leading-none tablet:block">
        Fiber
      </p>

      <OpenMenuButton className="hidden tablet:block" onClick={handleClick} />

      <CloseNavBackground onClick={handleClick} />

      <div
        className="flex w-full flex-row items-center justify-between tablet:fixed tablet:left-full tablet:right-0 tablet:top-0 tablet:h-screen tablet:w-[320px] tablet:flex-col tablet:justify-start tablet:gap-6 tablet:bg-white tablet:p-10 tablet:shadow-2xl"
        id="navMenu"
      >
        <CloseNavButton
          className="ml-auto hidden tablet:block"
          onClick={handleClick}
        />

        <p className="w-3/12 text-xl font-bold laptop-max:text-2xl tablet:hidden">
          Fiber
        </p>

        <ul className="flex w-6/12 flex-row items-center justify-center gap-6 laptop-max:text-xl tablet:w-full tablet:flex-col tablet:justify-start">
          <List>Community</List>
          <List>Pricing</List>
          <List>Features</List>
        </ul>

        <ul className="flex w-3/12 flex-row items-center justify-end gap-6 font-bold laptop-max:text-xl tablet:w-full tablet:justify-center">
          <List>Sign In</List>
          <List className="rounded bg-violet-blue px-5 py-4 text-white">
            Sign Up
          </List>
        </ul>
      </div>
    </nav>
  );
}
