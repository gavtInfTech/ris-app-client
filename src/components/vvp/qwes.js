const coords = [
  
]

coords.forEach((coord) => { console.log('[' + coord[1] + ', ' + coord[0] + ']' + ',')});

function haversineDistance(point1, point2) {
  const R = 6383;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  
  const lat1Rad = toRadians(point1[0]);
  const lon1Rad = toRadians(point1[1]);
  const lat2Rad = toRadians(point2[0]);
  const lon2Rad = toRadians(point2[1]);
  
  const deltaLat = lat2Rad - lat1Rad;
  const deltaLon = lon2Rad - lon1Rad;
  
  const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
}

export function findSegmentByKilometer (coords, zeroPoint, startKM, endKM) { 
  let startIndex = null;
  let endIndex = null;
  let sum = 0;

  for (let i = 0; i < coords.length; i++) { 
    if (endIndex == null && i + 1 === coords.length) {
      endIndex = i;
      break;
    }
    sum += haversineDistance(coords[i], coords[i + 1]);
    if (startIndex == null && sum >= (startKM - zeroPoint)) startIndex = i;
    if (endIndex == null && sum >= (endKM - zeroPoint)) {
      endIndex = i;
      break;
    }
  }
  return coords.slice(startIndex, endIndex + 1);
}