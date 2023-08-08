import { React, useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import {
  YMaps,
  Map,
  Placemark,
  ListBoxItem,
  ListBox,
  Polyline,
} from "react-yandex-maps";

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function WorkMap() {
  const [map, setMap] = useState(mapState);

  return (
    <div className={styles.container}>
      <YMaps>
        <Map state={map} className={styles.map}></Map>
      </YMaps>
    </div>
  );
}
