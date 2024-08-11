import React, { useState } from 'react'
import './Weatherapp.css'
import Search from './Images/search.png'
import Wind from './Images/wind.png' 
import Rain from './Images/rain.png'
import Snow from './Images/snow.png'
import Humidity from './Images/humidity.png'
import Drizzle from './Images/drizzle.png'
import Cloud from './Images/cloud.png'
import Clear from './Images/clear.png'






export const WeatherApp = () => {

    let KEY = '77bd08751ae50be06b3a94535a8735e2';

    const [wicon,setWicon] = useState(Cloud);

   const search = async () => {
    const element = document.getElementsByClassName("cityinput")
    if(element[0].value==="")
    {
        return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${KEY}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-percent");
    const temperture = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = data.wind.speed+" km/h";
    temperture[0].innerHTML = data.main.temp+" °C";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
        setWicon(Clear);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
{
    setWicon(Cloud);
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
{
    setWicon(Drizzle);
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
{
    setWicon(Drizzle);
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
{
    setWicon(Rain);
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
{
    setWicon(Rain);
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
{
    setWicon(Snow);
}
else
{
    setWicon(Clear);
}

   }
  return (
    <div className='background'>
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityinput' placeholder='Search'/>
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={Search} alt="#" />
            </div>
        </div>
        <div className="weather-img">
            <img style={{width:"120px"}} src={wicon} alt="" />
        </div>
        <div className='weather-temp'>24 °C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={Humidity} alt="" />
                <div className="data">
                    <div className="humidity-percent">64 %</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={Wind} alt="" />
                <div className="data">
                    <div className="wind-percent">18 Km/h</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>
    </div>
    <h1 className='tilak'>Created by <a style={{textDecoration:"none"}} href="https://instagram.com/tilxk__?igshid=OGQ5ZDc2ODk2ZA=="><span className='span'>tilxk</span></a></h1>
    </div>
  )
}
