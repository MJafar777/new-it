import React from "react";
import s from "./ourServices.module.css";

const OurServices = () => {
  return (
    <div className={s.ourService}>
      <h2 className={s.ourServiceHeader}>Bizing service xizmat ishlashi</h2>
      <div className={s.serviceWorks}>
        <h3 className={s.serviceSubtitle}>
          Bizning service oson xizmat taklif qiladi
        </h3>
        <div className={s.serviceStep}>
          <div className={s.stepBox}>
            <img src="" alt="" />
            <h4>Service ga ariza</h4>
            <p>
              Siz bitta tugmani bosish orqali o'ziz uchun kerakli yordamni
              hodimlarizmi toponidan olishingiz mumkin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
