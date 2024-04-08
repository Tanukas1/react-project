import './weather2.css';
import {Search, MapPin, Wind} from 'react-feather';
import { useState } from 'react';
// import dateFormat from 'dateformat';
function Weather2() {
  const [city,setCity] = useState("");
  const [weather,setWeather] = useState({});

  const getWeatherbyCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity(""); 
  }

  const renderDate = () => {
    let now = new Date();
    // return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  }
  const apiKey = '15fabefea689769bc6af42cc3bd30d96';

  const getWeather = async (city) => {
      return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
          return json;
      })
}
  return (

    <>
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} 
        placeholder='Enter City Name' />
        <button onClick={()=>getWeatherbyCity()}>
          <Search></Search>
        </button>
      </div>

      {weather && weather.weather && 
      <div className="content">
        
        <div className="location d-flex">
          <MapPin></MapPin>
          <h2>{weather.name} <span>({weather.sys.country})</span></h2>
        </div>
        <p className="datetext">{renderDate()}</p>

        {/* <div className="weatherdesc d-flex flex-c">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          <h3>{weather.weather[0].description}</h3>
        </div> */}

        <div className="tempstats d-flex flex-c">
          <h1>{weather.main.temp} <span>&deg;C</span></h1>
          <h3>Feels Like {weather.main.feels_like} <span>&deg;C</span></h3>
        </div>

        {/* <div className="windstats d-flex">
          <Wind></Wind>
          <h3>Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;</h3>
        </div> */}

      </div>
      }

      {!weather.weather && <div className="content">
        <h4>No Data found !</h4>
      </div>}

      {/* <p>{JSON.stringify(weather)}</p> */}

    </div>
    </>
  )
}

export default Weather2