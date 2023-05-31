import React from "react"
import './levelsMenu.css';

export default function LevelMenu () {
return ( <div className="content1234">
<div className="item5">
<button className="btn3"><a href="/levelsGp">
    <img src="/images/levelGp.png" alt="meteo" ></img>
    <br></br>Уровни воды на <br></br>гидропостах
    </a></button>
    </div>
<div></div>
<div></div>
<div className="item6">
<button className="btn3"><a href="/LevelsGu">
    <img src="/images/levelGu.png" alt="level" ></img>
    <br></br>Уровни воды на <br></br>гидроузлах
    </a></button>
    </div>
<div></div>
</div>
)
}