import React from "react";
import Fotter from "../../Components/Fotter/Fotter";
import Advantages from "../../Components/HomePagaComponent/Advantages/Advantages";
import ContactUs from "../../Components/HomePagaComponent/ContactUs/ContactUs";
import Employees from "../../Components/HomePagaComponent/Employees/Employees";
import Description from "../../Components/HomePagaComponent/Description/Description";
import Hero from "../../Components/HomePagaComponent/Hero/Hero";
import Location from "../../Components/HomePagaComponent/Location/Location";
import OurServices from "../../Components/HomePagaComponent/OurServices/OurServices";
import Partners from "../../Components/HomePagaComponent/Partners/Partners";
import ServiceMenu from "../../Components/HomePagaComponent/ServiceMenu/ServiceMenu";
import Statistics from "../../Components/HomePagaComponent/Statistics/Statistics";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ServiceMenu />
      <Partners />
      <Statistics />
      <OurServices />
      <Employees />
      <Description />
      <Advantages />
      <ContactUs />
      <Location />
      <Fotter />
    </div>
  );
};

export default HomePage;
