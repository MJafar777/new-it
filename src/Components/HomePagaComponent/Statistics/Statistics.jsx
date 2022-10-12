import React from "react";

import s from "./statistics.module.css";

const container = "container";
const Statistics = () => {
  return (
    <div className={container + " " + s.Statistics}>
      <div className={s.status}>
        <h1 className={s.title}>NewIt</h1>
        <h2>Tezkor Texniklar ixtirosi platforma №1</h2>
      </div>
      <div className={s.status}>
        <h1>123</h1>
        <p>status</p>
      </div>
      <div className={s.status}>
        <h1>123</h1>
        <p>status</p>
      </div>
      <div className={s.status}>
        <h1>123</h1>
        <p>status</p>
      </div>
    </div>
  );
};

export default Statistics;
