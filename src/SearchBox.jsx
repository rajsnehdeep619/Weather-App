import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "dc07b68dcbabefd3d9f998f09e79570e";

  const getWeatherInfo = async (cityName) => {
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
    );

    const jsonResponse = await response.json();

    // If city not found or API error
    if (!response.ok) {
      throw new Error(jsonResponse.message || "City not found");
    }

    // Prepare data for UI
    return {
      city: jsonResponse.name, // real city name from API
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather?.[0]?.description || "N/A",
    };
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cityName = city.trim();
    if (!cityName) return;

    try {
      const newInfo = await getWeatherInfo(cityName);
      updateInfo(newInfo); // ✅ update parent state -> UI updates
      setCity(""); // clear input after success
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="SearchBox">
      <h1>Search for the weather</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
