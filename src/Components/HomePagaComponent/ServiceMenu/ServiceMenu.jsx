import React from "react";
import laptop from "../../../img/laptop.jpg";
import s from "./serviceMenu.module.css";
const services = [
  {
    id: 1,
    name: "PC",
    img: laptop,
  },
  {
    id: 2,
    name: "Laptop",
    img: laptop,
  },
  {
    id: 3,
    name: "Konditsioner",
    img: laptop,
  },
  {
    id: 4,
    name: "Videonabludeniya",
    img: laptop,
  },
  {
    id: 5,
    name: "Bitoviy texnika",
    img: laptop,
  },
  {
    id: 6,
    name: "Printer",
    img: laptop,
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
              <h5 className={s.serviceName}>{service.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceMenu;
