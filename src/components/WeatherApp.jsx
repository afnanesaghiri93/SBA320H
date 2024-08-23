import sunny from "../assets/images/sunny-icon-23517.png"
import cloudy from "../assets/images/rain-png-34472.png"
import rainy from "../assets/images/vecteezy_heavy-rain-on-transparent-background_19781563.png"
import snowy from "../assets/images/vecteezy_3d-icon-cloudy-snow-weather-forecast-illustration-concept_24683829.png"
import { useState } from "react"
const WeatherApp = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const api_key = '50df2c646d5a7db5ecc73f3ff972d404'

    const handleInputChange = (e)=> {
        setLocation(e.target.value)
    }
    const search = async() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
        const res = await fetch(url)
        const searchData = await res.json()
        console.log(searchData)
        setData(searchData)
        setLocation('')
    }
const handleKeydown = (e) => {
    if(e.key === "Enter"){
        search()
    }
}


    return (
        <div className="container">
            <div className="weather-app">
                <div className="search">
                    <div className="search-top">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="location">{data.name}</div>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Enter Location"
                         value={location} onChange={handleInputChange}
                         onKeyDown={handleKeydown}
                        />
                        <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                    </div>
                </div>
                <div className="weather">
                    <img src={sunny} alt="sunny" />
                    <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
                    <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>

                </div>
                <div className="weather-date">
                    <p>Fri, 3 May</p>
                </div>
                <div className="weather-data">
                    
                    <div className="humidity">
                        <div className="data-name">Humidity</div>
                        <i className="fa-solid fa-droplet"></i>
                        <div className="data">{data.main ? data.main.humidity : null}%</div>
                    </div>
                    <div className="wind">
                        <div className="data-name">Wind</div>
                        <i className="fa-solid fa-wind"></i>
                        <div className="data">{data.wind ? data.wind.speed : null} km/h</div></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp