import React from "react";
import Spinner from "./Spinner";


const Card = ({
    showData, loadingData, weather, forecast
}) => 
{

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/'+ month + '/' + year;
    
var imagen = "";

    var url="";
    var iconUrl="";

    var iconUrl3= "";
    var iconUrl6= "";
    var iconUrl9= "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";


    if(loadingData){
        return <Spinner/>;
    }

    if(showData){
        url ="http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + '.png'


        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png"
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png"
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png"


        forecastDate3 = forecast.list[1].dt_txt.substring(8,10) + "/" + forecast.list[1].dt_txt.substring(5,7)+"/"+forecast.list[1].dt_txt.substring(0,4) + " " + forecast.list[1].dt_txt.substring(11,13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8,10) + "/" + forecast.list[2].dt_txt.substring(5,7)+"/"+forecast.list[2].dt_txt.substring(0,4) + " " + forecast.list[2].dt_txt.substring(11,13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8,10) + "/" + forecast.list[3].dt_txt.substring(5,7)+"/"+forecast.list[3].dt_txt.substring(0,4) + " " + forecast.list[3].dt_txt.substring(11,13);
            if (weather.weather[0].description === "lluvia" || weather.weather[0].description === "lluvia ligera" ) {
                imagen = "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            } 
            if (weather.weather[0].description === "muy nuboso" || weather.weather[0].description === "nubes"){
                imagen = "https://images.pexels.com/photos/1828305/pexels-photo-1828305.jpeg"
            }
            if (weather.weather[0].description === "nubes dispersas"|| weather.weather[0].description === "algo de nubes"){
                imagen = "https://images.pexels.com/photos/7283618/pexels-photo-7283618.jpeg"
            }
            if (weather.weather[0].description === "cielo claro"){
                imagen = "https://images.pexels.com/photos/4210918/pexels-photo-4210918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }if (weather.weather[0].description === "niebla"){
                imagen = "https://images.pexels.com/photos/4406289/pexels-photo-4406289.jpeg?auto=compress&cs=tinysrgb&w=600"
            }if (weather.weather[0].description === "nieve"){
                imagen = "https://images.pexels.com/photos/6612027/pexels-photo-6612027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }


    }if(showData === null){
        imagen="https://www.pexels.com/es-es/foto/vista-de-pajaro-de-los-edificios-de-la-ciudad-durante-la-puesta-de-sol-681336/";
    }

return ( 
<div className="mt-5">
    
{
    showData === true ?(
        <div className="container">
            <div className="card mb-3 mx-auto bg-dark text-ligth">
                <div className="row g-0">
                    <div className="col-md-4 text-light">
                        <h3 className=" card-title">{weather.name}</h3>
                        <p className="card-date">{date}</p>
                        <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C  </h1>
                        <p className="card-desc">
                        <img className="item" src={iconUrl} alt="icon" />{weather.weather[0].description}
                        </p>
                        <img src={imagen} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    
                    <div className="col-md-8 ">
                        <div className="card-body text-start mt-2 " >
                            <h5 className="card-text" >Temperatura Maxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C  </h5>
                            <h5 className="card-text">Temperatura Minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C  </h5>
                            <h5 className="card-text">Sensacion Termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C  </h5>
                            <h5 className="card-text">Humedad: {(weather.main.humidity)}% </h5>
                            <h5 className="card-text">Velocidad del Viento: {(weather.wind.speed)}M/S </h5>
                        </div>
                        <hr className="hr"/>
                        
                        <div className="row mt-4 card-body">
                            <div className="col">
                                <p>{forecastDate3}Hrs</p>
                                <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                <p className="temp">{(forecast.list[1].main.temp-273.15).toFixed(1)}°C</p>
                            </div>
                            <div className="col">
                                <p>{forecastDate6}Hrs</p>
                                <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                <p className="temp">{(forecast.list[2].main.temp-273.15).toFixed(1)}°C</p>
                            </div>
                            <div className="col">
                                <p>{forecastDate9}Hrs</p>
                                <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                <p className="temp">{(forecast.list[3].main.temp-273.15).toFixed(1)}°C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ):(
        <h2 className="text-light">Sin Datos</h2>
    )
}


</div>

);
}

export default Card