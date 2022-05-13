import City from "./City";

class FetchWeather {
  weatherData;

  async getWeather(city, DOMcallback, databaseCallback, resolve, reject){
    const { latitude } = city;
    const { longitude } = city;
    const { timezone } = city;
    const responseWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=${timezone}`); 
    const jsonWeather = await responseWeather.json();
    if (jsonWeather.current_weather !== undefined){
      this.weatherData = jsonWeather;
      let cityObject;
      if (city.conditions !== undefined){
        cityObject = city.updateCity(city, jsonWeather)
      } else {
        cityObject = new City(city, jsonWeather)
      }
      
      if (DOMcallback) DOMcallback(cityObject);
      if (databaseCallback) databaseCallback(cityObject);
      if (resolve) resolve();
    }
    if (reject) reject();
  }
  }
 

export default FetchWeather;