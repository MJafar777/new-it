import React from "react";

import s from "./hero.module.css";
import user1 from "../../../img/hero/users/hero-user.png";
import { NavLink } from "react-router-dom";

const container = "container";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.heroChild + " " + container}>
        <div className={s.leftCard}>
          <h1 className={s.title}>XIZMAT KO'RSATISH MARKAZI</h1>
          <h1 className={s.title + " " + s.span_title}>
            TEZKOR TEXNIKLAR IXTIROSI
          </h1>
          <h1 className={s.title}>TOSHKENT</h1>
          <h2 className={s.title2}>
            Biz sizni o'rab turgan texnologiyani hayotga olib chiqamiz!
          </h2>
          <NavLink className={s.links} to={"/"}>
            Batafsil
          </NavLink>
        </div>
        <div className={s.rightCard}>
          <img src={user1} alt="user1" className={s.user_hero} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
