import React , { useState }  from 'react';
const api ={
  key : "f2934b8e4ba5fad70b49b599d10af47f",
  base : "http://api.openweathermap.org/data/2.5/"
}
function App(){
    const [query , setQuery] = useState("");
    const [weather,setWeather] = useState({});

    const search = evt => {
      if(evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {setWeather(result);setQuery('');console.log(result)});
      }
    }
    const dateBuilder = (d) => {
      let months =["January","Febuary","March","April","May","June","July","August",
      "September","October","November","December"];
      let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
      "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year} `
    }
    return(
      <div className="app-move">
        <main>
        <div className="search-box">
          <input type="search" className="search-bar" placeholder="City Name" 
          onChange={e => setQuery(e.target.value)}
           value={query} onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className="location-box">
    <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}&#176;c</div>
        <div className="weather">{weather.weather[0].main}</div>
        </div>
        </div>
        ) : (" ")}
        </main>
       </div>
    );
  }

export default App;
