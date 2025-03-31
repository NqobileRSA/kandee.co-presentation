import Hero from "./LandingPage/Hero";
import FeaturedWork from "./LandingPage/FeaturedWork";
// import CallToAction from "./LandingPage/CallToAction";
import Services from "./LandingPage/Services";
import CTA from "./LandingPage/CTA";
import AboutUs from "./LandingPage/AboutUs";
import OurProcess from "./LandingPage/OurProcess";
import LogoScroller from "./LandingPage/LogoScroller";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoScroller/>
      <AboutUs />
      <FeaturedWork />
      <Services />
      <OurProcess />
      <CTA />
      {/* <CallToAction /> */}
    </>
  );
}
