import React from "react";

import s from "./deviceRepair.module.css";

import tools from "../../../img/tools_Icon/tools_icon.svg";

import img1 from "../../../img/DeciveRepair/1.jfif";
import img2 from "../../../img/DeciveRepair/2.jfif";
import img3 from "../../../img/DeciveRepair/3.jpeg";
import img4 from "../../../img/DeciveRepair/4.jpg";

const title1 = "Desktop Repair";
const title2 = "Laptop Repair";
const title3 = "Computer Repair";
const title4 = "Lcd & Led TV repair";

const content1 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ...";
const content2 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ...";
const content3 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ...";
const content4 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ...";

const container = "container";

const cart = [
  { img: img1, title: title1, content: content1, link: "/" },
  { img: img2, title: title2, content: content2, link: "/" },
  { img: img3, title: title3, content: content3, link: "/" },
  { img: img4, title: title4, content: content4, link: "/" },
];

const DeviceRepair = () => {
  return (
    <div className={container + " " + s.device_repair}>
      <div className={s.title}>
        <div className={s.title_icon}>
          <img src={tools} alt="tools" />
        </div>
        <div className={s.titleName}>
          <h2>Get Started With Your Device Repair</h2>
          <p>
            Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim
            veniam tempore quis sed ipsum nostrud ipsum lorem amet consectetur
            adipisicing elit sed do eiusmod tempor incididunt ut labore et
            dolore magna aliquat.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DeviceRepair;
