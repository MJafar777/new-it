import React from "react";
import DeviceRepair from "../../Components/HomePagaComponent/DeviceRepair/DeviceRepair";
import Featured from "../../Components/HomePagaComponent/Featured/Featured";
import Hero from "../../Components/HomePagaComponent/Hero/Hero";
import HeroSelect from "../../Components/HomePagaComponent/HeroSelect/HeroSelect";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HeroSelect />
      <DeviceRepair />
      <Featured />
    </div>
  );
};

export default HomePage;
