import FeatureCard from "../FeatureCard/FeatureCard";
import Time from "../../assets/svg/Time";
import Code from "../../assets/svg/Code";
import AllSizes from "../../assets/svg/AllSizes";

export default function () {
  return (
    <section className="px-28 pt-20 tablet:px-14 mobile-max:px-7">
      <p className="font-bold text-violet-blue laptop-max:text-xl tablet:text-center mobile-max:text-start">
        Why Fiber?
      </p>
      <h2 className="mt-3 w-[500px] text-3xl font-bold leading-8 laptop-max:text-4xl tablet:w-full tablet:text-center mobile-max:text-start">
        A good portfolio means good employability
      </h2>
      <div className="mt-10 flex flex-row justify-between gap-x-10 tablet:flex-col tablet:items-center tablet:gap-10">
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
          icon={<AllSizes />}
          title="Responsive"
          description="All Fiber templates are fully responsive to ensure the experience is seemless across all devices."
        />
      </div>
    </section>
  );
}
