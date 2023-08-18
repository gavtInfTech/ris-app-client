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
import { Box } from "@mui/system";

const mapState = { center: [54.133392, 27.577899], zoom: 7, controls: [] };

export default function PathInformationMap() {
  const [map, setMap] = useState(mapState);
  const [contentHeight, setContentHeight] = useState("auto");

  const calculateMaxHeight = () => {
    const windowHeight = window.innerHeight;
  
    if (window.innerWidth > 1200) {
      setContentHeight(windowHeight - 188);
    } else setContentHeight(null);
  };
  
  useEffect(() => {
    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);

  }, []);

  return (
    <Box className={styles.container}>
      <Box sx={{ maxHeight: contentHeight + "px" }} className={styles.infoPart}>
        
      </Box>
      <Box className={styles.mapPart}>
        <YMaps>
          <Map state={map} className={styles.map}></Map>
        </YMaps>
      </Box>
    </Box>
  );
}
