import React from "react"
import Style from './sidemenu.module.css'

export default function SideMenu () {
return ( <div className={Style.content1}>

<div className={Style.item3}>
<button className={Style.btn3}><a href="/bridges">
     <img src="/images/bridgeGab.png" alt="gabmost"></img>
    <br></br>Подмостовые<br></br>
     габариты
    </a></button>
    </div>



<div className={Style.item4}>
<button className={Style.btn3}><a href="/limit">
<img src="/images/depth.png" alt="limit"></img>
<br></br>Глубины<br></br>
 на лимитирующих <br></br>
  перекатах
    </a></button>
</div>

</div>
)
}