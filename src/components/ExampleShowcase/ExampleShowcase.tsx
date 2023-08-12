import PageImage from "../../assets/image/page_image.webp";
import StartFreeTrialButtonWhite from "../StartFreeTrialButton/StartFreeTrialButtonWhite";

export default function () {
  return (
    <div className="flex w-full flex-row rounded-md bg-violet-blue px-10 pt-10 tablet:flex-col tablet:items-center tablet:gap-y-12">
      <div className="flex w-[40%] flex-col justify-center gap-y-2 tablet:w-full">
        <p className="text-3xl font-bold leading-none text-white laptop-max:text-4xl tablet:text-center mobile-max:text-start">
          Diversify your portfolio.
        </p>
        <p className="text-link-water laptop-max:text-xl tablet:text-center mobile-max:text-start">
          Create an even more impressive portfolio by creating case studies for
          your projects. Simply follow our step-by-step guide
        </p>
        <StartFreeTrialButtonWhite />
      </div>
      <img
        className="w-[60%] tablet:w-full"
        width={550}
        height={450}
        src={PageImage}
        alt="page image"
        loading="lazy"
      />
    </div>
  );
}
