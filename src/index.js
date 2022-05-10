import './style.css';
import DOM from './Modules/DOM';
import FetchCities from './Modules/FetchCities';
import FetchWeather from './Modules/FetchWeather';

const contentNode = document.getElementById('content');
const fetchCities = new FetchCities();
const fetchWeather = new FetchWeather();
const DOMinstance = new DOM(contentNode);

function searchBarEntry(event) {
  if (event.target.value.length < 2) {
    DOMinstance.clearCitySearchList();
    return;
  } else {
    fetchCities.getCities(event.target.value, DOMinstance.makeSearchList.bind(DOMinstance));
  }
}
DOMinstance.searchEntry.addEventListener('keydown', searchBarEntry);

function citySelected(event){
  if (event.target.id === "searchResults") return
  DOMinstance.clearCitySearchList();
  const cityId = Number(event.target.id);
  const targetCity = fetchCities.cityData.find(city => city.id === cityId);
  fetchWeather.getWeather(targetCity, DOMinstance.addCity.bind(DOMinstance) )
}
DOMinstance.searchResults.addEventListener('click', citySelected)