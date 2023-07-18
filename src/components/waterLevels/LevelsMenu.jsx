import React from "react"
import { Link } from "react-router-dom";
import './levelsMenu.css';

export default function LevelMenu () {
return ( <div className="container">

<button className="btn">
    <Link to={'/levelsGp'}>
        <img src="/images/levelGp.png" alt="meteo" ></img>
        <br></br>Уровни воды на <br></br>гидропостах
    </Link>
</button>


<button className="btn">
    <Link to={'/LevelsGu'}>
        <img src="/images/levelGu.png" alt="level" ></img>
        <br></br>Уровни воды на <br></br>гидроузлах
    </Link>
</button>

</div>
)
}