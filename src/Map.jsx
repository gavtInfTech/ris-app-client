import { YMaps, Map, Placemark} from "react-yandex-maps";


export default function Map1() {
    return (
        <YMaps>
            <div className="conteiner-map">
                <Map className="map" defaultState={{ center: [53.939773, 27.599938], zoom: 16 }}>
                    <Placemark geometry={[53.939773, 27.599938]} />
                </Map>
            </div>
        </YMaps>
    )
}