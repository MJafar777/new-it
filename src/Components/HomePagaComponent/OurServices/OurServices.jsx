import React from "react";
import s from "./ourServices.module.scss";

const OurServices = () => {
  return (
    <div className={s.ourService}>
      <h2 className={s.ourServiceHeader}>Bizning service xizmat ishlashi</h2>
      <div className={s.serviceWorks}>
        <h3 className={s.serviceSubtitle}>
          Bizning service oson xizmat taklif qiladi
        </h3>
        <div className={s.serviceStep}>
          <div className={s.stepBox}>
            <img
              src="https://cdn.kwork.com/images/index/steps-pay-arrow.svg"
              alt=""
            />
            <div className={s.stepImgBox}>
              <img
                src="https://cdn.kwork.com/images/index/steps-choose.svg"
                alt=""
              />
            </div>
            <h4>Servicega ariza</h4>
            <p>Siz bitta tugmani bosish orqali o'ziz uchun kerakli yordamn</p>
          </div>
          <div className={s.stepBox}>
            <div className={s.stepImgBox}>
              <img
                src="https://cdn.kwork.com/images/index/steps-pay-en.svg"
                alt=""
              />
            </div>
            <h4>Servicega ariza</h4>
            <p>Siz bitta tugmani bosish orqali o'ziz uchun kerakli yordamn</p>
            <img
              src="https://cdn.kwork.com/images/index/steps-choose-arrow.svg"
              alt=""
            />
          </div>
          <div className={s.stepBox}>
            <img
              src="https://cdn.kwork.com/images/index/steps-pay-arrow.svg"
              alt=""
            />
            <div className={s.stepImgBox}>
              <img
                src="https://cdn.kwork.com/images/index/steps-choose.svg"
                alt=""
              />
            </div>
            <h4>Servicega ariza</h4>
            <p>Siz bitta tugmani bosish orqali o'ziz uchun kerakli yordamn</p>
          </div>
          <div className={s.stepBox}>
            <div className={s.stepImgBox}>
              <img
                src="https://cdn.kwork.com/images/index/steps-result.svg"
                alt=""
              />
            </div>
            <h4>Servicega ariza</h4>
            <p>Siz bitta tugmani bosish orqali o'ziz uchun kerakli yordamn</p>
            <img
              src="https://cdn.kwork.com/images/index/steps-choose-arrow.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
