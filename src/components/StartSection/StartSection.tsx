import Ratings from "../Ratings/Ratings";
import StartFreeTrialButton from "../StartFreeTrialButton/StartFreeTrialButton";
import ViewExamplesAnchor from "../ViewExamplesAnchor/ViewExamplesAnchor";
import FreeTrialTier from "../FreeTrialTier/FreeTrialTier";
import HeroImg from "../../assets/image/hero_illustration.webp";

export default function () {
  return (
    <section className="flex flex-row gap-8 bg-vista-white px-28 py-36 tablet:flex-col-reverse tablet:gap-3 tablet:px-14 tablet:pb-10 tablet:pt-20 mobile-max:px-7">
      <div className="flex w-7/12 flex-col justify-center gap-3 desktop:w-8/12 tablet:w-full">
        <Ratings className="laptop-max:text-xl tablet:hidden" />
        <h1 className="text-5xl font-bold leading-tight laptop-max:text-6xl tablet:text-center mobile-max:text-start mobile-max:text-4xl">
          Create your portfolio in minutes.
        </h1>
        <p className="text-liver laptop-max:text-xl tablet:text-center mobile-max:text-start">
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <div className="flex flex-row items-center gap-8 tablet:justify-center tablet:gap-5 mobile-max:flex-col">
          <StartFreeTrialButton className="bg-violet-blue text-white laptop-max:text-xl mobile-max:w-full">
            Start Free Trial
          </StartFreeTrialButton>
          <ViewExamplesAnchor className="laptop-max:text-xl">
            View Examples
          </ViewExamplesAnchor>
        </div>
        <div className="flex flex-row items-center gap-5 tablet:justify-center mobile-max:flex-col mobile-max:items-start">
          <FreeTrialTier className="laptop-max:text-xl">
            No Credit Card Required
          </FreeTrialTier>
          <FreeTrialTier className="laptop-max:text-xl">
            10 Free Templates
          </FreeTrialTier>
        </div>
      </div>
      <div className="relative w-6/12 desktop:w-5/12 tablet:w-full">
        <img
          className="relative ml-auto h-full w-full tablet:mx-auto tablet:max-w-[520px] mobile-max:min-w-[248px]"
          src={HeroImg}
          alt="hero image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
