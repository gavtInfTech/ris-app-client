import React from 'react';
import './InfMenu.css';
import { Link } from 'react-router-dom';

export default function Gidroteh () {
    return (
        <div className="content14">
            <div></div>
            <div className="item21">
            <button className="btn33"><Link to={'/gateways'}>
                <img src="/images/gateway.png" alt="gateways" ></img>
                <br></br>Шлюзы
                </Link></button>
                </div>
            <div></div>
            <div className="item22">
            <button className="btn33"><Link to={'/bridges'}>
                <img src="/images/bridge.png" alt="bridges" ></img>
                <br></br>Мосты
                </Link></button>
                </div>
            <div></div>
            <div className="item23">
            <button className="btn33"><Link to={'/ports'}>
                <img src="/images/port.png" alt="ports"></img>
                <br></br>Порты
                </Link></button>
                </div>
            <div></div>
            <div className="item24">
            <button className="btn33"><Link to={'/ges'}>
                <img src="/images/ges.png" alt="ges"></img>
                <br></br>ГЭС
                </Link></button>
                </div>
            <div></div>
        </div>
    )
    }