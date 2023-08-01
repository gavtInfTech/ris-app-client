import { React, useState } from "react";
import NoticesUser from "./NoticesUser";
import { Link } from "react-router-dom";
import Style from "./style.module.css";

export default function NoticesMainPage() {
  

  return (
    <div className={Style.container}>
      <div className={Style.item1}>
        <button className={Style.btn}>
          <Link to={"/levelsMenu"}>
            <img src="/images/levelGp.png" alt="mlevel"></img>
            <br />Уровни воды
          </Link>
        </button>
      </div>

      <div className={Style.item2}>
        <button className={Style.btn}>
          <Link to={"/sib"}>
            <img src="/images/sib.png" alt="meteo"></img>
            <br/>Сводный
            <br/>
            инфрмационный
            <br/>
            бюллетень
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
            <br></br>Глубины<br></br>
            на лимитирующих <br></br>
            перекатах
          </Link>
        </button>
      </div>
    </div>
  );
}
