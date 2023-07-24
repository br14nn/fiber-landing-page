import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../assets/image/hero_illustration.webp";
import Ratings from "../components/Ratings/Ratings";
import StartFreeTrialButton from "../components/StartFreeTrialButton/StartFreeTrialButton";
import ViewExamplesAnchor from "../components/ViewExamplesAnchor/ViewExamplesAnchor";
import FreeTrialTier from "../components/FreeTrialTier/FreeTrialTier";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import Time from "../assets/svg/Time";
import Code from "../assets/svg/Code";
import ExampleShowcase from "../components/ExampleShowcase/ExampleShowcase";

export default function () {
  return (
    <main className="overflow-y-auto">
      <Navbar />
      <section className="flex flex-row gap-8 bg-vista-white px-28 py-36 tablet:flex-col-reverse tablet:gap-3 tablet:px-14 tablet:py-20 mobile-max:px-7">
        <div className="flex w-7/12 flex-col justify-center gap-3 desktop:w-8/12 tablet:w-full">
          <Ratings className="laptop-max:text-xl tablet:hidden" />
          <h1 className="text-5xl font-bold leading-tight laptop-max:text-6xl tablet:text-center mobile-max:text-start mobile-max:text-4xl">
            Create your portfolio in minutes.
          </h1>
          <p className="text-liver laptop-max:text-xl tablet:text-center mobile-max:text-start">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <div className="flex flex-row items-center gap-8 tablet:justify-center tablet:gap-5 mobile-max:flex-col">
            <StartFreeTrialButton className="laptop-max:text-xl mobile-max:w-full">
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
            alt="hero-image"
          />
        </div>
      </section>
      <section className="px-28 pb-10 pt-20 tablet:px-14 mobile-max:px-7">
        <p className="font-bold text-violet-blue laptop-max:text-xl tablet:text-center mobile-max:text-start">
          Why Fiber?
        </p>
        <h2 className="mt-3 w-[500px] text-2xl font-bold leading-8 laptop-max:text-4xl tablet:w-full tablet:text-center mobile-max:text-start">
          A good portfolio means good employability
        </h2>
        <div className="mt-10 flex flex-row justify-between tablet:flex-col tablet:items-center tablet:gap-10">
          <FeatureCard
            icon={<Time />}
            title="Build in minutes"
            description="With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes."
          />
          <FeatureCard
            icon={<Code />}
            title="Add custom CSS"
            description="Customize your personal portfolio even more with the ability to add your own custom CSS styles."
          />
          <FeatureCard
            icon={<Time />}
            title="Build in minutes"
            description="With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes."
          />
        </div>
      </section>
      <section className="px-28 py-10 tablet:px-14 mobile-max:px-7">
        <ExampleShowcase />
      </section>
    </main>
  );
}
