import React from "react"
import Style from './sidemenu.module.css'

export default function SideMenu () {
return ( <div className={Style.content1}>

<div className={Style.item1}>
<button className={Style.btn3}><a href="/levelsMenu">
    <img src="/images/levelGp.png" alt="mlevel" ></img>
    <br></br>Уровни воды
    </a></button>
</div>

<div className={Style.item2}>
<button className={Style.btn3}><a href="/sib">
    <img src="/images/sib.png" alt="meteo" ></img>
    <br></br>Сводный<br/>инфрмационный<br/>бюллетень
    </a></button>
</div>

<div className={Style.item3}>
<button className={Style.btn3}><a href="/weather">
    <img src="/images/weather.png" alt="meteo" ></img>
    <br></br>Погода
    </a></button>
</div>

</div>
)
}