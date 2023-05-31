import  { React, useState, useEffect, useRef } from 'react';
import Style from './style.module.css'
//import L from 'leaflet'


export default function Map() {

    useEffect( () => {

        // let map = L.map('map').setView([51.505, -0.09], 13);
        // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map);

      }, []);

    return (
        <div id='map' >
            
        </div>
    
    )
}