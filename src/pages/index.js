import { Fragment } from "react";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/How";
const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <HowItWorks />
    </Fragment>
  );
};

export default HomePage;
