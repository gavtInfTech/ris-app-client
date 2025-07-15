import { React, useState } from "react";
import NoticesUser from "./NoticesUser";
import { Link } from "react-router-dom";
import Style from "./style.module.css";
import WeatherComponent from "../weather/weather";
import NewsComponent from "../news/News";
import { Grid } from "@mui/material";

export default function NoticesMainPage() {
  return (
    <Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} className={Style.FirstBlock}>
        <Grid size={{ xs: 12, md: 3 }} className={Style.FirstColumn}>
          <WeatherComponent></WeatherComponent>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={Style.NoticeUser}>
          <NoticesUser />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <NewsComponent></NewsComponent>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom:"50px"}}>
        <button className={Style.btn}>
          <Link to={"/levelsGp"}>
            <img src="/images/levelGp.png" alt="mlevel"></img>
            <br />
            Уровни воды на
            <br />
            гидропостах
          </Link>
        </button>

        <button className={Style.btn}>
          <Link to={"/LevelsGu"}>
            <img src="/images/levelGu.png" alt="mlevelgu"></img>
            <br />
            Уровни воды на
            <br />
            гидроузлах
          </Link>
        </button>

        <button className={Style.btn}>
          <Link to={"/vvp"}>
            <img src="/images/VVP.png" alt="limit"></img>
            <br></br>Схема ВВП<br></br>
          </Link>
        </button>

        <button className={Style.btn}>
          <Link to={"/bridgeGabs"}>
            <img src="/images/bridgeGab.png" alt="gabmost"></img>
            <br></br>Подмостовые<br></br>
            габариты
          </Link>
        </button>

        <button className={Style.btn}>
          <Link to={"/limit"}>
            <img src="/images/depth.png" alt="limit"></img>
            <br></br>Габариты<br></br>
            на лимитирующих <br></br>
            перекатах
          </Link>
        </button>

        <button className={Style.btn}>
          <Link to={"/gabarit"}>
            <img src="/images/Навигации.png" alt="navigation"></img>
            <br></br>Сроки<br></br>
            навигации <br></br>
          </Link>
        </button>
      </Grid>
    </Grid>
  );
}
