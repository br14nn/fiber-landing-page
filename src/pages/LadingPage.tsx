import Navbar from "../components/Navbar/Navbar";
import StartSection from "../components/StartSection/StartSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import ShowcaseSection from "../components/ShowcaseSection/ShowcaseSection";
import LinksSection from "../components/LinksSection/LinksSection";

export default function () {
  return (
    <main className="">
      <Navbar />
      <StartSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <LinksSection />
    </main>
  );
}
