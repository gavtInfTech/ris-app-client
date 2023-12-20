import React from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';

export default function Gidroteh () {
    return (
        <div className={styles.container}>
            <button className={styles.btn}><Link to={'/gateways'}>
                <img src="/images/gateway.png" alt="gateways" ></img>
                <br></br>Перечень судоходных гидротехнических сооружений
                </Link>
            </button>
          
            <button className={styles.btn}><Link to={'/bridges'}>
                <img src="/images/bridge.png" alt="bridges" ></img>
                <br></br>Мосты
                </Link>
            </button>
       
            <button className={styles.btn}><Link to={'/ports'}>
                <img src="/images/port.png" alt="ports"></img>
                <br></br>Порты
                </Link>
            </button>
        
            <button className={styles.btn}><Link to={'/ges'}>
                <img src="/images/ges.png" alt="ges"></img>
                <br></br>ГЭС
                </Link>
            </button>
        </div>
    )
}