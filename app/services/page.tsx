import React from "react";
import FAQservices from "./FAQservices";
import DetailedServices from "./DetailedServices";
import BehindTheScenes from "./BehindTheScenes";
import Testimonials from "./Testimonials";
// import ServiceCTA from "./ServiceCTA";

const page = () => {
  return (
    <>
      <DetailedServices />
      <BehindTheScenes/>
      <Testimonials/>
      {/* <ServiceCTA /> */}
      <FAQservices />
    </>
  );
};

export default page;
