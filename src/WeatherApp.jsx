import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderLand",
    feelsLike: 22.87,
    humidity: 56,
    temp: 23.05,
    tempMax: 23.05,
    tempMin: 23.05,
    weather: "smoke",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Delta</h2>

      {/* Pass updateInfo to SearchBox */}
      <SearchBox updateInfo={updateInfo} />

      {/* Send latest state to InfoBox */}
      <InfoBox info={weatherInfo} />
    </div>
  );
}
