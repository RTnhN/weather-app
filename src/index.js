import './Styles/style.css';
import DOM from './Modules/DOM';
import FetchCities from './Modules/FetchCities';
import FetchWeather from './Modules/FetchWeather';
import LocalStorageAgent from './Modules/LocalStorageAgent';
import Database from './Modules/Database';
import City from './Modules/City';

const contentNode = document.getElementById('content');
const fetchCities = new FetchCities();
const fetchWeather = new FetchWeather();
const localStorageAgent = new LocalStorageAgent(City, 'cities');
const database = new Database(localStorageAgent);
const DOMinstance = new DOM(contentNode, database.userPreferences);

const citiesPromises = database.cities.map(city => (new Promise((resolve, reject) => fetchWeather.getWeather(city, DOMinstance.addCity.bind(DOMinstance), undefined, resolve, reject))));

Promise.all(citiesPromises).then(() => DOMinstance.sortCities(database.cities));

if (window.innerWidth < 600){
  DOMinstance.closeSidebar()
}

function updateWeather(){
  database.cities.forEach(city => fetchWeather.getWeather(city, DOMinstance.updateCity.bind(DOMinstance), database.updateCity.bind(database)));
  if (DOMinstance.weatherPageCity !== undefined){
    DOMinstance.makeWeatherPage(database.getCityById(DOMinstance.weatherPageCity.id));
  }
}

// Update every minute on the minute
setTimeout(() => {
  setInterval(updateWeather, 60000);
  updateWeather();
}, (60 - new Date().getSeconds()) * 1000);

function searchBarEntry(event) {
  if (event.target.value.length < 2) {
    DOMinstance.clearCitySearchList();
    return;
  } else if (event.key !== 'Tab') {
    fetchCities.getCities(event.target.value, DOMinstance.makeSearchList.bind(DOMinstance));
  }
}
DOMinstance.searchEntry.addEventListener('keydown', searchBarEntry);

function citySelected(event){
  if (event.target.id === "searchResults") return
  DOMinstance.clearCitySearchList();
  const cityId = Number(event.target.id);
  const targetCity = fetchCities.cityData.find(city => city.id === cityId);
  const cityAdded = new Promise((resolve, reject) => fetchWeather.getWeather(targetCity, DOMinstance.addCity.bind(DOMinstance), database.addCity.bind(database), resolve, reject))
  cityAdded.then(() => DOMinstance.sortCities(database.cities));
}
DOMinstance.searchResults.addEventListener('click', citySelected)

function toggleUnits(){
  DOMinstance.tempF = !DOMinstance.tempF;
  database.userPreferences.preferF = DOMinstance.tempF;
  updateWeather();
  DOMinstance.changeUnitsButton.textContent = (DOMinstance.tempF)
    ? "Change temp to °C"
    : "Change temp to °F";
}

DOMinstance.changeUnitsButton.addEventListener('click', toggleUnits);

function makeWeatherPage(event) {
  if (event.target.id === 'citiesList') return;
  const cityDiv = (event.target.tagName === "SPAN") ? event.target.parentElement : event.target;
  DOMinstance.makeWeatherPage(database.getCityById(cityDiv.id));
}

DOMinstance.citiesList.addEventListener('click', makeWeatherPage);

function removeCity(){
  if (DOMinstance.weatherPageCity === undefined){
    alert('You have to select a city before you can remove it from the list.');
    return
  }
  const cityId = DOMinstance.weatherPageCity.id;
  database.removeCity(cityId);
  DOMinstance.removeCity(cityId);
  DOMinstance.clearWeatherPage();
  DOMinstance.toggleMenu();
}

DOMinstance.removeCityButton.addEventListener('click', removeCity);