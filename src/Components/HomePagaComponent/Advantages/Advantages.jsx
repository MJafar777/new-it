import React from "react";
import s from "./advantages.module.scss";

const Advantages = () => {
  return (
    <div className={s.advantages}>
      <h2 className={s.advantagesHeader}>
        Biz uchta afzallik bilan ajralib turamiz
      </h2>
      <div className={s.advantagesBoxes}>
        <div className={s.advantageBox}>
          <img
            src="https://service-eco.uz/wp-content/uploads/serv3.png"
            alt=""
          />
          <h4>Past narx kafolati</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias
            deserunt numquam natus cupiditate consequatur voluptates
            necessitatibus deleniti delectus praesentium?
          </p>
        </div>
        <div className={s.advantageBox}>
          <img
            src="https://service-eco.uz/wp-content/uploads/serv2.png"
            alt=""
          />
          <h4>Bir kunda yoki oz hisobidan tamirlang</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias
            deserunt numquam natus cupiditate consequatur voluptates
            necessitatibus deleniti delectus praesentium?
          </p>
        </div>
        <div className={s.advantageBox}>
          <img
            src="https://service-eco.uz/wp-content/uploads/serv1.png"
            alt=""
          />
          <h4>Magistrning bepul ketishi</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est alias
            deserunt numquam natus cupiditate consequatur voluptates
            necessitatibus deleniti delectus praesentium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
