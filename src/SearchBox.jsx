import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "dc07b68dcbabefd3d9f998f09e79570e";

    let getWeatherInfo = async() =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRespnse = await response.json();
        let result = {
            city:city,
            temp: jsonRespnse.main.temp,
            tempMin: jsonRespnse.main.temp_min,
            tempMax: jsonRespnse.main.temp_max,
            humidity:jsonRespnse.main.humidity,
            feelsLikke: jsonRespnse.main.feels_like,
            weather: jsonRespnse.weather[0].description
        }
        console.log(result);
    }
    let handleChange =(event) =>{
        setCity(event.target.value);
    };
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return(
        <div className='SearchBox'>
        <h1>Search for the weather</h1>
        <form onSubmit={handleSubmit}>
        <TextField 
        id="city" 
        label="City Name" 
        variant="outlined" 
        required value={city} 
        onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>
        </div>
    )
}