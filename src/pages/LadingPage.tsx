import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../assets/image/hero_illustration.webp";
import Ratings from "../components/Ratings/Ratings";
import StartFreeTrialButton from "../components/StartFreeTrialButton/StartFreeTrialButton";
import ViewExamplesAnchor from "../components/ViewExamplesAnchor/ViewExamplesAnchor";
import FreeTrialTier from "../components/FreeTrialTier/FreeTrialTier";

export default function () {
  return (
    <main className="overflow-y-auto">
      <Navbar />
      <section className="flex flex-row bg-vista-white px-28 py-36 screen<1024:flex-col-reverse screen<1024:gap-3 screen<1024:px-14 screen<1024:py-16 screen<600:px-7">
        <div className="flex w-6/12 flex-col justify-center gap-5 screen<1024:w-full">
          <Ratings className="screen<1024:hidden" />
          <h1 className="text-5xl font-bold leading-tight screen<1024:text-center screen<600:text-start screen<600:text-4xl">
            Create your portfolio in minutes.
          </h1>
          <p className="leading-normal text-liver screen<1024:text-center screen<600:text-start">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <div className="flex flex-row items-center gap-8 screen<1024:justify-center screen<1024:gap-5 screen<600:flex-col">
            <StartFreeTrialButton className="screen<600:w-full">
              Start Free Trial
            </StartFreeTrialButton>
            <ViewExamplesAnchor>View Examples</ViewExamplesAnchor>
          </div>
          <div className="flex flex-row items-center gap-5 screen<1024:justify-center screen<600:flex-col screen<600:items-start">
            <FreeTrialTier>No Credit Card Required</FreeTrialTier>
            <FreeTrialTier>10 Free Templates</FreeTrialTier>
          </div>
        </div>
        <div className="relative w-6/12 screen<1024:w-full">
          <img
            className="relative mx-auto h-full w-full max-w-[480px] screen<600:min-w-[248px]"
            src={HeroImg}
            alt="hero-image"
          />
        </div>
      </section>
      <section className="bg-white"></section>
    </main>
  );
}
