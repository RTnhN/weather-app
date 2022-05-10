import WeatherCodes from "./WeatherCodeLookup";
class City {
  #weatherCodes;

  static convertToF(c){
    return Math.round((9/5*c+32)*10)/10
  }
  constructor(cityData, weatherData){
    this.#weatherCodes = new WeatherCodes()
    this.cityId = cityData.id;
    this.cityName = cityData.name;
    this.cityLat = cityData.latitude;
    this.cityLong = cityData.longitude;
    this.country = cityData.country;
    this.currentTempC = weatherData.current_weather.temperature;
    this.currentTempF = City.convertToF(this.currentTempC);
    this.todayHighTempC = weatherData.daily.temperature_2m_max[0];
    this.todayHighTempF = City.convertToF(this.todayHighTempC);
    this.todayLowTempC = weatherData.daily.temperature_2m_min[0];
    this.todayLowTempF = City.convertToF(this.todayLowTempC);
    this.conditions = this.#weatherCodes.codes[weatherData.daily.weathercode[0]];
  }
}

export default City;
