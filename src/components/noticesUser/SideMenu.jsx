import React from "react"
import Style from './sidemenu.module.css'
import { Link } from 'react-router-dom';

export default function SideMenu () {
return ( <div className={Style.content1}>

<div className={Style.item1}>
<button className={Style.btn3}><Link to={'/levelsMenu'}>
    <img src="/images/levelGp.png" alt="mlevel" ></img>
    <br></br>Уровни воды
    </Link></button>
</div>

<div className={Style.item2}>
<button className={Style.btn3}><Link to={'/sib'}>
    <img src="/images/sib.png" alt="meteo" ></img>
    <br></br>Сводный<br/>инфрмационный<br/>бюллетень
    </Link></button>
</div>

</div>
)
}