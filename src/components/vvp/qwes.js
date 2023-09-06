import { coordsDnepr } from "./FairwayDnepr";
import { zeroPointDnepr } from "./FairwayDnepr";
import { coordsBerezina } from "./FairwayBerezina";
import { zeroPointBerezina } from "./FairwayBerezina";
import { coordsNeman } from "./FairwayNeman";
import { zeroPointNeman } from "./FairwayNeman";
import { coordsSozh } from "./FairwaySozh";
import { zeroPointSozh } from "./FairwaySozh";
import { coordsWestDvina } from "./FairwayWestDvina";
import { zeroPointWestDvina } from "./FairwayWestDvina";
import { coordsDbk } from "./FairwayDbk";
import { zeroPointDbk } from "./FairwayDbk";
import { coordsMuhavets } from "./FairwayMuhavets";
import { zeroPointMuhavets } from "./FairwayMuhavets";
import { coordsPina } from "./FairwayPina";
import { zeroPointPina } from "./FairwayPina";
import { coordsUpperPripyat } from "./FairwayUpperPripyat";
import { zeroPointUpperPripyat } from "./FairwayUpperPripyat";
import { coordsAvgCanal } from "./FairwayAvgCanal";
import { zeroPointAvgCanal } from "./FairwayAvgCanal";
import { coordsPripyat } from "./FairwayPripyat";
import { zeroPointPripyat } from "./FairwayPripyat";
import { coordsMikhashevichy } from "./FairwayMikhashevichy";
import { zeroPointMikhashevichy } from "./FairwayMikhashevichy";
import { coordsGorin } from "./FairwayGorin";
import { zeroPointGorin } from "./FairwayGorin";
import { coordsTurov } from "./FairwayTurov";
import { zeroPointTurov } from "./FairwayTurov";
const coords = [];

coords.forEach((coord) => {
  console.log("[" + coord[1] + ", " + coord[0] + "]" + ",");
});

function haversineDistance(point1, point2) {
  const R = 6383;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const lat1Rad = toRadians(point1[0]);
  const lon1Rad = toRadians(point1[1]);
  const lat2Rad = toRadians(point2[0]);
  const lon2Rad = toRadians(point2[1]);

  const deltaLat = lat2Rad - lat1Rad;
  const deltaLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

function getRiverCoordsAndZeroPointByRiver(river) {
  let riverCoords = [];
  let zeroPoint;

  // eslint-disable-next-line default-case
  switch(river) {
    case 'Днепр': 
      riverCoords = coordsDnepr;
      zeroPoint = zeroPointDnepr;
      break;
    case 'Березина': 
      riverCoords = coordsBerezina;
      zeroPoint = zeroPointBerezina;
      break;
    case 'Сож': 
      riverCoords = coordsSozh;
      zeroPoint = zeroPointSozh;
      break;
    case 'Неман': 
      riverCoords = coordsNeman;
      zeroPoint = zeroPointNeman;
      break;
    case 'Мухавец': 
      riverCoords = coordsMuhavets;
      zeroPoint = zeroPointMuhavets;
      break;
    case 'Днепро-Бугский канал': 
      riverCoords = coordsDbk;
      zeroPoint = zeroPointDbk;
      break;
    case 'Пина': 
      riverCoords = coordsPina;
      zeroPoint = zeroPointPina;
      break;
    case 'Верхний участок реки Припять': 
      riverCoords = coordsUpperPripyat;
      zeroPoint = zeroPointUpperPripyat;
      break;
    case 'Припять': 
      riverCoords = coordsPripyat;
      zeroPoint = zeroPointPripyat;
      break;
    case 'Микашевичский канал': 
      riverCoords = coordsMikhashevichy;
      zeroPoint = zeroPointMikhashevichy;
      break;
    case 'Горынь': 
      riverCoords = coordsGorin;
      zeroPoint = zeroPointGorin;
      break;
    case 'Западная Двина': 
      riverCoords = coordsWestDvina;
      zeroPoint = zeroPointWestDvina;
      break;
    case 'Туровский затон': 
      riverCoords = coordsTurov;
      zeroPoint = zeroPointTurov;
      break;
    case 'Августовский канал': 
      riverCoords = coordsAvgCanal;
      zeroPoint = zeroPointAvgCanal;
      break;
  }

  return [riverCoords, zeroPoint];
}

export function findSegmentByKilometer(river, startKM, endKM) {
  let startIndex = null;
  let endIndex = null;
  let riverCoords = getRiverCoordsAndZeroPointByRiver(river)[0];
  let sum = getRiverCoordsAndZeroPointByRiver(river)[1];

  for (let i = 0; i < riverCoords.length; i++) {
    if (endIndex == null && i + 1 === riverCoords.length) {
      endIndex = i;
      break;
    }
    sum += haversineDistance(riverCoords[i], riverCoords[i + 1]);
    if (startIndex == null && sum >= startKM) startIndex = i;
    if (endIndex == null && sum >= endKM) {
      endIndex = i;
      break;
    }
  }
  return riverCoords.slice(startIndex, endIndex + 1);
}

export function getSiteByCoords(river, targetCoords, sites) {
  let riverCoords = getRiverCoordsAndZeroPointByRiver(river)[0];
  let sum = getRiverCoordsAndZeroPointByRiver(river)[1];

  let closestCoordinateIndex = 0;
  let minDistance = Infinity;

  for (let i = 0; i < riverCoords.length; i++) {
    const distance = haversineDistance(riverCoords[i], targetCoords);
    if (distance < minDistance) {
      minDistance = distance;
      closestCoordinateIndex = i;
    }
  }
  
  for (let i = 0; i < closestCoordinateIndex; i++) {
    sum += haversineDistance(riverCoords[i], riverCoords[i + 1]);
  }

  console.log(sum)
  for (const site of sites) {
    console.log(site.firstKM, site.secondKM)
    console.log(sum)
    if (sum >= site.firstKM && sum <= site.secondKM) {
      return site.name;
    }
  }
}