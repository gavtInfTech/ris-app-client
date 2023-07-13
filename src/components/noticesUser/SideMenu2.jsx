import React from "react"
import Style from './sidemenu.module.css'
import { Link } from 'react-router-dom';

export default function SideMenu () {
return ( <div className={Style.content1}>

<div className={Style.item3}>
<button className={Style.btn3}><Link to={'/bridges'}>
     <img src="/images/bridgeGab.png" alt="gabmost"></img>
    <br></br>Подмостовые<br></br>
     габариты
    </Link></button>
    </div>



<div className={Style.item4}>
<button className={Style.btn3}><Link to={'/limit'}>
<img src="/images/depth.png" alt="limit"></img>
<br></br>Глубины<br></br>
 на лимитирующих <br></br>
  перекатах
    </Link></button>
</div>

</div>
)
}