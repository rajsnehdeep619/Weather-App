import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [WeatherInfo, setWeatherInfo] = useState({
            city:"WonderLand",
            feelsLike:22.87,
            humidity: 56,
            temp: 23.05,
            tempMax: 23.05,
            tempMin: 23.05,
            weather: "smoke",
        });
        let updateInfo = (newInfo) =>{
            setWeatherInfo(newInfo);
        };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    )
}