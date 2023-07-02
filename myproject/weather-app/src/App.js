import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('')
  const cities =['paris','new york','suwon','seoul','Changwon']
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d2f210280346b675f6ee15391d492c2b&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  const getWeatherByCity =async()=>{
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2f210280346b675f6ee15391d492c2b&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('Data',data)
    setWeather(data);
  }

  useEffect(() => {
    if(city==""){
      getCurrentLocation();
    }else{
      getWeatherByCity()
    }    
  }, [city]);


  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} 
        setCity={setCity} 
        />
      </div>
    </div>
  );
}

export default App;
