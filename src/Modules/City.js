import { isWithinInterval, format, add } from 'date-fns';
import weatherCodes from './WeatherCodeLookup';

class City {
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
  currentTime;
  utcOffsetSeconds;
  sunrise;
  sunset;
  dayOrNight;
 static convertToF(c){
    return Math.round((9/5*c+32))
  }
  constructor(cityData, weatherData){
    this.updateCity(cityData,weatherData);
  }

  updateCity(cityData, weatherData){
    if (!cityData || !weatherData) return;
    this.id = cityData.id;
    this.name = cityData.name;
    this.latitude = cityData.latitude;
    this.longitude = cityData.longitude;
    this.country = cityData.country;
    this.timezone = cityData.timezone;
    this.utcOffsetSeconds = weatherData.utc_offset_seconds;
    this.lastFetchTime = weatherData.current_weather.time;
    this.prettyTime = format(
      add(
        add(
          new Date(),
          { minutes: new Date().getTimezoneOffset() }),
        { seconds: this.utcOffsetSeconds }),
      'h:mm aaa');
    this.currentTempC = weatherData.current_weather.temperature;
    this.currentTempF = City.convertToF(this.currentTempC);
    this.todayHighTempC = weatherData.daily.temperature_2m_max[0];
    this.todayHighTempF = City.convertToF(this.todayHighTempC);
    this.todayLowTempC = weatherData.daily.temperature_2m_min[0];
    this.todayLowTempF = City.convertToF(this.todayLowTempC);
    this.sunrise = weatherData.daily.sunrise[0];
    this.sunset = weatherData.daily.sunset[0];
    this.prettySunriseTime = format(new Date(this.sunrise),'h:mm aaa');
    this.prettySunsetTime =  format(new Date(this.sunset), 'h:mm aaa');
    const localEpochTime = Date.now() + this.utcOffsetSeconds*1000 + new Date().getTimezoneOffset()*60*1000;
    const localSunriseTime = Date.parse(this.sunrise);
    const localSunsetTime = Date.parse(this.sunset);
    this.dayOrNight = (localSunriseTime < localEpochTime && localSunsetTime > localEpochTime) ? 'day' : 'night';
    this.conditions = weatherData.current_weather.weathercode;
    weatherCodes[this.conditions][this.dayOrNight].image.forEach(url => {
      const img = new Image;
      img.src = url;
    });
    return this;

  }
  toString() {
    return this.name;
  }
  flipDataOrder(obj){
    const keys = Object.keys(obj);
    const rows = obj.time.length;
    let newArray = [];
    let instanceObject = {};
    for (let row = 0; row < rows; row++){
      instanceObject={};
      keys.forEach(key => instanceObject[key] = obj[key][row])
      newArray.push(instanceObject);
    }
    return newArray;
  }
}

export default City;
