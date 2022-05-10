import WeatherCodes from "./WeatherCodeLookup";
class City {
  #weatherCodes;
  id;
  name;
  latitude
  longitude;
  country;
  currentTempC;
  currentTempF;
  todayHighTempC;
  todayHighTempF;
  todayLowTempC;
  todayLowTempF;
  conditions;
  timezone;
  static convertToF(c){
    return Math.round((9/5*c+32))
  }
  constructor(cityData, weatherData){
    this.updateCity(cityData,weatherData);
  }

  updateCity(cityData, weatherData){
    if (!cityData || !weatherData) return;
    this.#weatherCodes = new WeatherCodes()
    this.id = cityData.id;
    this.name = cityData.name;
    this.latitude = cityData.latitude;
    this.longitude = cityData.longitude;
    this.country = cityData.country;
    this.timezone = cityData.timezone;
    this.currentTempC = weatherData.current_weather.temperature;
    this.currentTempF = City.convertToF(this.currentTempC);
    this.todayHighTempC = weatherData.daily.temperature_2m_max[0];
    this.todayHighTempF = City.convertToF(this.todayHighTempC);
    this.todayLowTempC = weatherData.daily.temperature_2m_min[0];
    this.todayLowTempF = City.convertToF(this.todayLowTempC);
    this.conditions = this.#weatherCodes.codes[weatherData.daily.weathercode[0]];
    return this;

  }
  toString() {
    return this.name;
  }
}

export default City;
