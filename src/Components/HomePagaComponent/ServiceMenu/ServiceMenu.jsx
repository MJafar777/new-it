import React, { useEffect } from "react";
import laptop from "../../../img/laptop.jpg";
import pc from "../../../img/pc.jpg";
import conditioner from "../../../img/conditioner.jpg";
import video_surveillance1 from "../../../img/video_surveillance1.jpg";
import household_appliances from "../../../img/household_appliances.jpg";
import printer from "../../../img/printer1.jpg";
import s from "./serviceMenu.module.css";
import { useState } from "react";
const services = [
  {
    id: 1,
    name: "PC",
    img: pc,
  },
  {
    id: 2,
    name: "Laptop",
    img: laptop,
  },
  {
    id: 3,
    name: "Konditsioner",
    img: conditioner,
  },
  {
    id: 4,
    name: "Videonabludeniya",
    img: video_surveillance1,
  },
  {
    id: 5,
    name: "Bitoviy texnika",
    img: household_appliances,
  },
  {
    id: 6,
    name: "Printer",
    img: printer,
  },
  {
    id: 7,
    name: "Printer",
    img: printer,
  },
  {
    id: 8,
    name: "Printer",
    img: printer,
  },
  {
    id: 9,
    name: "Printer",
    img: printer,
  },
  {
    id: 10,
    name: "Printer",
    img: printer,
  },
  {
    id: 11,
    name: "Printer",
    img: printer,
  },
];

const ServiceMenu = () => {
  const [gridArr, setGridArr] = useState(null);
  const [flexArr, setFlexArr] = useState(null);

  useEffect(() => {
    let l = services.length;
    if (l % 4) {
      let arr = services.slice(0, 4 * Math.floor(l / 4));
      setGridArr(arr);
      let subArr = services.slice(4 * Math.floor(l / 4));
      setFlexArr(subArr);
    } else {
      console.log("Hello else " + (l % 2));
    }
  }, []);

  return (
    <div className={s.services + " container"}>
      <h2 className={s.serviceHeader}>Our Services</h2>
      <div className={s.servicesMenu}>
        {gridArr?.map((service) => {
          return (
            <div key={service.id} className={s.serviceBox}>
              <div className={s.imgBox}>
                <img src={service.img} alt={service.name} />
              </div>
              <div className={s.box_shadow}></div>
              <h5 className={s.serviceName}>{service.name}</h5>
            </div>
          );
        })}
      </div>
      <div className={s.servicesMenuFlex}>
        {flexArr?.map((service) => {
          return (
            <div key={service.id} className={s.serviceBox}>
              <div className={s.imgBox}>
                <img src={service.img} alt={service.name} />
              </div>
              <div className={s.box_shadow}></div>
              <h5 className={s.serviceName}>{service.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceMenu;
