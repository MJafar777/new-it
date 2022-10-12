import React, { useState } from "react";

import s from "./statistics.module.css";
const container = "container";

const Statistics = () => {
  return (
    <div className={s.parent}>
      <h1 className={s.sectionName}>Bizning statistika</h1>
      <div className={container + " " + s.Statistics}>
        <div className={s.status}>
          <h1 className={s.title}>NewIt</h1>
          <h2 className={s.title2}>Tezkor Texniklar ixtirosi platformasi №1</h2>
        </div>
        <div className={s.status}>
          <h1 className={s.sts}>234 034</h1>
          <p>Xizmat ko'rsatilgan insonlar</p>
        </div>
        <div className={s.status}>
          <h1 className={s.sts}>335 123</h1>
          <p>Turli xil savdo tovarlari</p>
        </div>
        <div className={s.status}>
          <h1 className={s.sts}>235 123</h1>
          <p>Yangi e'lonlar</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
