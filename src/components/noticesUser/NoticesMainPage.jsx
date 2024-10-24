import { React, useState } from "react";
import NoticesUser from "./NoticesUser";
import { Link } from "react-router-dom";
import Style from "./style.module.css";

export default function NoticesMainPage() {
  return (
    <div className={Style.container}>
      <div className={Style.item1}>
        <button className={Style.btn}>
          <Link to={"/levelsGp"}>
            <img src="/images/levelGp.png" alt="mlevel"></img>
            <br />
            Уровни воды на
            <br />
            гидропостах
          </Link>
        </button>
      </div>

      <div className={Style.item2}>
        <button className={Style.btn}>
          <Link to={"/LevelsGu"}>
            <img src="/images/levelGu.png" alt="mlevelgu"></img>
            <br />
            Уровни воды на
            <br />
            гидроузлах
          </Link>
        </button>
      </div>
      <div className={Style.item6}>
        <button className={Style.btn}>
          <Link to={"/vvp"}>
            <img src="/images/VVP.png" alt="limit"></img>
            <br></br>Схема ВВП<br></br>
          </Link>
        </button>
      </div>

      <div className={Style.item3}>
        <NoticesUser />
      </div>

      <div className={Style.item4}>
        <button className={Style.btn}>
          <Link to={"/bridgeGabs"}>
            <img src="/images/bridgeGab.png" alt="gabmost"></img>
            <br></br>Подмостовые<br></br>
            габариты
          </Link>
        </button>
      </div>

      <div className={Style.item5}>
        <button className={Style.btn}>
          <Link to={"/limit"}>
            <img src="/images/depth.png" alt="limit"></img>
            <br></br>Габариты<br></br>
            на лимитирующих <br></br>
            перекатах
          </Link>
        </button>
      </div>

      <div className={Style.item7}>
        <button className={Style.btn}>
          <Link to={"/gabarit"}>
            <img src="/images/Навигации.png" alt="navigation"></img>
            <br></br>Сроки<br></br>
            навигации <br></br>
          </Link>
        </button>
      </div>
    </div>
  );
}
