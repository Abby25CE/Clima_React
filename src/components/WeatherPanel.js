import React, { useState } from "react";
import Form from './Form.js';
import Card from "./Card.js";

const WeatherPanel = () => {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?"; //Appi de tiempo real    
  let cityUrl = "q="; //
  let URLkey = "&appid=4cfdd6ecdbf7714f26b3f48a6ff06520&lang=es"

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?"; //Appi de pronostico del cllima

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async(loc) => {
    setLoading(true);
    setLocation(loc);

    //Pronostico Actual
    urlWeather = urlWeather + cityUrl + loc + URLkey;

    await fetch (urlWeather)
      .then((response) => {
        if (!response.ok) throw { response }
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      }).catch(error => {
        console.log(error);
        setLoading(false);
        setShow(false);
    });
    //Prediccion
    urlForecast = urlForecast + cityUrl+ loc + URLkey;

    await fetch(urlForecast )
    .then((response) => {
      if (!response.ok) throw{ 
        response }
      return response.json();
    })
    .then((forecastData) => {
      console.log(forecastData);
      setForecast(forecastData);

      setLoading(false);
      setShow(true);
    }).catch(error => {
      console.log(error);
      setLoading(false);
      setShow(false);
  });

  }

  return(
    <React.Fragment>
        <Form
        newLocation = {getLocation}
        />

        <Card
        showData= {show}
        loadingData = {loading}
        weather = {weather}
        forecast ={forecast}
        />
    </React.Fragment>
  );
}

export default WeatherPanel;
