import React from "react";
import laptop from "../../../img/laptop.jpg";
import pc from "../../../img/pc.jpg";
import conditioner from "../../../img/conditioner.jpg";
import video_surveillance1 from "../../../img/video_surveillance1.jpg";
import household_appliances from "../../../img/household_appliances.jpg";
import printer from "../../../img/printer1.jpg";
import s from "./serviceMenu.module.css";
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
];

const ServiceMenu = () => {
  return (
    <div className={s.services + " " + "container"}>
      <h2 className={s.serviceHeader}>Our Services</h2>
      <div className={s.servicesMenu}>
        {services.map((service) => {
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
