import weatherCodes from './WeatherCodeLookup';
import "../Styles/weather-icons.css";
import * as Plot from "@observablehq/plot";

class DOM {
  constructor(contentNode, userPreferences) {
    this.weatherCodes = weatherCodes;
    this.tempF = userPreferences.preferF;
    this.contentNode = contentNode;
    const placeholder = document.createDocumentFragment();

    this.searchBar = document.createElement('div');
    this.searchBar.id = 'searchBar';

    this.citiesContainer = document.createElement('div');
    this.citiesContainer.id = 'citiesContainer';
 
    this.cityBar = document.createElement('div');
    this.cityBar.id = 'cityBar';

    this.weatherContainer = document.createElement('div');
    this.weatherContainer.id = 'weatherContainer';

    this.searchEntry = document.createElement('input');
    this.searchEntry.type = 'text';
    this.searchEntry.id = 'searchEntry';
    this.searchEntry.placeholder = 'Enter a city name or zip code';

    this.closeSidebarButton = document.createElement('button');
    this.closeSidebarButton.id = 'closeSidebarButton';
    this.closeSidebarButton.textContent = 'chevron_left';
    this.closeSidebarButton.classList.add('material-symbols-outlined');
    this.closeSidebarButton.style.display = 'none';

    this.searchBar.appendChild(this.searchEntry);
    this.searchBar.appendChild(this.closeSidebarButton);

    this.searchResults = document.createElement('div');
    this.searchResults.id = "searchResults";

    this.citiesList = document.createElement('div');
    this.citiesList.id = 'citiesList';

    this.webAttribution = document.createElement('a');
    this.webAttribution.id ='webAttribution';
    this.webAttribution.textContent = 'Made with 💻 in Texas';
    this.webAttribution.href = 'https://github.com/RTnhN/weather-app';

    this.citiesContainer.appendChild(this.searchResults);
    this.citiesContainer.appendChild(this.citiesList);
    this.citiesContainer.appendChild(this.webAttribution);

    this.cityBar = document.createElement("div");
    this.cityBar.id = 'cityBar';

    this.openSidebarButton = document.createElement('button');
    this.openSidebarButton.id = 'openSidebarButton';
    this.openSidebarButton.textContent = "chevron_right";
    this.openSidebarButton.classList.add('material-symbols-outlined');

    this.menu = document.createElement('div');
    this.menu.id = 'menu';

    this.menuButton = document.createElement("button");
    this.menuButton.id = 'menuButton';
    this.menuButton.textContent = 'info';
    this.menuButton.classList.add('material-symbols-outlined');

    this.menuContents = document.createElement('div');
    this.menuContents.id = 'menuContents';
    this.menuContents.classList.add('menuContents');
    this.menuContents.classList.add('menuHide');

    this.changeUnitsButton = document.createElement('button');
    this.changeUnitsButton.id = 'changeUnitsButton';
    this.changeUnitsButton.textContent = this.tempF
      ? "Change temp to °C"
      : "Change temp to °F";

    this.removeCityButton = document.createElement('button');
    this.removeCityButton.id = 'removeCityButton';
    this.removeCityButton.textContent = 'Remove city from city list';

    this.menuContents.appendChild(this.changeUnitsButton);
    this.menuContents.appendChild(this.removeCityButton);

    this.menu.appendChild(this.menuButton);
    this.menu.appendChild(this.menuContents);

    this.cityBar.appendChild(this.openSidebarButton);
    this.cityBar.appendChild(this.menu);

    const placeholderTextWeatherContainer = document.createElement('div');
    placeholderTextWeatherContainer.id = 'placeholderTextWeatherContainer';
    // Normally I am opposed to using innerHTML, but in this case since it is just plain text with no input
    // it should be fine. I am honestly spoiled by jsx and react. 
    placeholderTextWeatherContainer.innerHTML = `
    <h1>Welcome to this Weather App!</h1>
    <br/>
    <p>Select a city or type in the search bar to find a city to begin.</p>
    <br/>
    <p>To change the units or delete a city, click the info button in the top right of the page.</p>
    `

    this.weatherContainer.appendChild(placeholderTextWeatherContainer);

    placeholder.appendChild(this.searchBar);
    placeholder.appendChild(this.citiesContainer);
    placeholder.appendChild(this.cityBar);
    placeholder.appendChild(this.weatherContainer);

    this.contentNode.appendChild(placeholder);
    this.menuButton.addEventListener('click', this.toggleMenu.bind(this));
    document.addEventListener('click', this.clickOutside.bind(this));
    this.menuElements = [this.menu, this.menuButton, this.menuContents, this.changeUnitsButton, this.removeCityButton];
    this.openSidebarButton.addEventListener('click', this.openSidebar.bind(this));
    this.closeSidebarButton.addEventListener('click', this.closeSidebar.bind(this));
    window.addEventListener('resize', this.windowResized.bind(this));
  }

  makeSearchList(json) {
    this.clearCitySearchList();
    this.searchResults.style.display = "flex";
    json.forEach(this.makeCitySearchList.bind(this));
  }

  clearCitySearchList() {
    this.searchResults.style.display = "";
    while (this.searchResults.firstChild) {
      this.searchResults.removeChild(this.searchResults.firstChild);
    }
  }

  makeCitySearchList(city) {
    const placeholder = document.createDocumentFragment();
    const cityDiv = document.createElement('button');
    cityDiv.id = city.id;
    let cityName;
    if (city.country === 'United States') {
      cityName = `${city.name}, ${city.admin1}, ${city.country}`;
    } else {
      cityName = `${city.name}, ${city.country}`;
    }
    cityDiv.textContent = cityName;
    placeholder.appendChild(cityDiv);
    this.searchResults.appendChild(placeholder);
  }

  addCity(city) {
    this.citiesList.style.display = '';
    const cityDiv = document.createElement("button");
    cityDiv.id = city.id;
    const weatherIcon = document.createElement('span');
    weatherIcon.className = this.weatherCodes[city.conditions][city.dayOrNight].icon;
    const cityName = document.createElement('span');
    cityName.textContent = city.name;
    const cityTime = document.createElement('span');
    cityTime.textContent = city.prettyTime;
    const cityTemp = document.createElement('span');
    if (this.tempF) {
      cityTemp.textContent = `${city.currentTempF}°`;
    } else {
      cityTemp.textContent = `${city.currentTempC}°`;
    }
    cityDiv.appendChild(weatherIcon);
    cityDiv.appendChild(cityName);
    cityDiv.appendChild(cityTime);
    cityDiv.appendChild(cityTemp);
    this.citiesList.appendChild(cityDiv);
  }
  updateCity(city) {
    const cityId = city.id;
    const cityElement = document.getElementById(cityId);
    const cityElementChildren = cityElement.children;
    cityElementChildren[0].className = this.weatherCodes[city.conditions][city.dayOrNight].icon;
    cityElementChildren[1].textContent = city.name;
    cityElementChildren[2].textContent = city.prettyTime;
    if (this.tempF) {
      cityElementChildren[3].textContent = `${city.currentTempF}°`;
    } else {
      cityElementChildren[3].textContent = `${city.currentTempC}°`;
    }
  }
  removeCity(cityId) {
    this.citiesList.removeChild(document.getElementById(cityId));
    this.weatherPageCity = undefined;
    this.weatherContainer.style.backgroundImage = '';
  }

  clearCities(){
    while(this.citiesList.lastChild){
      this.citiesList.removeChild(this.citiesList.lastChild);
    }
  }

  sortCities(cities){
    const placeholder = document.createDocumentFragment();
    cities.forEach(city => placeholder.appendChild(document.getElementById(city.id)));
    this.clearCities();
    this.citiesList.appendChild(placeholder);
  }

  makeWeatherPage(city) {
    this.clearWeatherPage();
    this.weatherPageCity = city;
    this.weatherContainer.style.backgroundImage = `url(${DOM.randomImage(weatherCodes[city.conditions][city.dayOrNight].image)})`;

    this.cityNameTitle = document.createElement('h1');
    this.cityNameTitle.id = 'cityNameTitle';
    this.cityNameTitle.textContent = city.name;

    this.weatherPageTemp = document.createElement('p');
    this.weatherPageTemp.id = 'weatherPageTemp';
    if (this.tempF) {
      this.weatherPageTemp.textContent = `${city.currentTempF}`;
    } else {
      this.weatherPageTemp.textContent = `${city.currentTempC}`;
    }

    this.weatherPageConditions = document.createElement('p');
    this.weatherPageConditions.id = 'weatherPageConditions';
    this.weatherPageConditions.textContent = this.weatherCodes[city.conditions][city.dayOrNight].name;

    this.weatherPageHighTemp = document.createElement('p');
    this.weatherPageHighTemp.id = 'weatherPageHighTemp';
    if (this.tempF) {
      this.weatherPageHighTemp.textContent = `High ${city.todayHighTempF}`;
    } else {
      this.weatherPageHighTemp.textContent = `High ${city.todayHighTempC}`;
    }

    this.weatherPageLowTemp = document.createElement('p');
    this.weatherPageLowTemp.id = 'weatherPageLowTemp';
    if (this.tempF) {
      this.weatherPageLowTemp.textContent = `Low ${city.todayLowTempF}`;
    } else {
      this.weatherPageLowTemp.textContent = `Low ${city.todayLowTempC}`;
    }
    this.sunriseTime = document.createElement('p');
    this.sunriseTime.id = 'sunriseTime';

    this.sunriseIcon = document.createElement('span');
    this.sunriseIcon.className = 'wi wi-sunrise';

    this.sunriseText = document.createElement('span');
    this.sunriseText.textContent = city.prettySunriseTime;

    this.sunriseTime.append(this.sunriseIcon, this.sunriseText)

    this.sunsetTime = document.createElement('p');
    this.sunsetTime.id = 'sunsetTime';

    this.sunsetIcon = document.createElement('span');
    this.sunsetIcon.className = 'wi wi-sunset';

    this.sunsetText = document.createElement('span');
    this.sunsetText.textContent = city.prettySunsetTime;

    this.sunsetTime.append(this.sunsetIcon, this.sunsetText);
    
    this.tempPlotTitle = document.createElement('h2');
    this.tempPlotTitle.id = 'tempPlotTitle';
    this.tempPlotTitle.textContent = 'Temperature';

    this.tempPlot = Plot.plot({
      marks: [Plot.line(city.graphData, {
        x:"time", 
        y: this.tempF ? "temperature_2mF" : "temperature_2m",
        strokeWidth: 4})],
      x: {ticks: 8, label: ""},
      y: {ticks: 6, label: ""},
      style: {background: "none", color:"black", fontSize: 20},
      marginLeft: 80,
      marginRight: 80,
      insetBottom: 20,
      insetTop: 20,
      insetLeft: 10,
      insetRight: 10,
    })
    this.tempPlot.id = "tempPlot";

    this.precptPlotTitle = document.createElement('h2');
    this.precptPlotTitle.id = 'precptPlotTitle';
    this.precptPlotTitle.textContent = `Precipitation (${this.tempF ? "inch/hr" : "mm/hr"})`;

    const labelX = city.graphData[36].time;
    const labels = [
      {x: labelX, y: this.tempF ? .05 : 1.125, text: "Light Rain" },
      {x: labelX, y: this.tempF ? .2 : 5, text: "Moderate Rain" },
      {x: labelX, y: this.tempF ? .35 : 8.75, text: "Heavy Rain" },
    ]
      this.precptPlot = Plot.plot({
      y: {label: "", domain: this.tempF ? [0,.4] : [0,10]},
      x: {ticks: 5},
      marks: [
        Plot.line(city.graphData, {
          x:"time", 
          y:this.tempF ? "precipitationInch" : "precipitation", strokeWidth: 4}),
        Plot.ruleY([this.tempF ? .1 : 2.5]),
        Plot.ruleY([this.tempF ? .3: 7.5]),
      Plot.text(labels, {x:"x", y:"y", text:"text", fill: "#555555"}) ],
      style: {background: "none", color:"black", fontSize: 20},
      marginLeft: 80,
      marginRight: 80,
      insetBottom: 20,
      insetTop: 20,
      insetLeft: 10,
      insetRight: 10,
    })
    this.precptPlot.id = "precptPlot";

    this.weatherSubcontainer = document.createElement('div');
    this.weatherSubcontainer.id = 'weatherSubcontainer';
    this.weatherSubcontainer.appendChild(this.cityNameTitle);
    this.weatherSubcontainer.appendChild(this.weatherPageTemp);
    this.weatherSubcontainer.appendChild(this.weatherPageConditions);
    this.weatherSubcontainer.appendChild(this.weatherPageHighTemp);
    this.weatherSubcontainer.appendChild(this.weatherPageLowTemp);
    this.weatherSubcontainer.appendChild(this.sunriseTime);
    this.weatherSubcontainer.appendChild(this.sunsetTime);
    this.weatherSubcontainer.appendChild(this.tempPlotTitle);
    this.weatherSubcontainer.appendChild(this.tempPlot);
    this.weatherSubcontainer.appendChild(this.precptPlotTitle);
    this.weatherSubcontainer.appendChild(this.precptPlot);
    this.weatherContainer.appendChild(this.weatherSubcontainer);
    document.getElementById(city.id).style.backgroundColor = 'hsl(0,0%,70%)';
  }
  clearWeatherPage() {
    while (this.weatherContainer.firstChild) {
      this.weatherContainer.removeChild(this.weatherContainer.firstChild);
    }
    Array.from(this.citiesList.children).forEach(div => div.style.backgroundColor = '');
  }

  toggleMenu() {
    if (this.menuContents.classList.contains('menuHide')) {
      this.menuContents.classList.remove('menuHide');
    } else {
      this.menuContents.classList.add('menuHide');
    }
  }
  clickOutside(event) {
    if (!this.menuElements.includes(event.target)) {
      if (!this.menuContents.classList.contains('menuHide')) {
        this.menuContents.classList.add('menuHide');
      }
    }
  }
  openSidebar(){
    this.contentNode.style.setProperty('grid-template-columns', '1fr 0');
    this.closeSidebarButton.style.setProperty('display', '');
    this.weatherContainer.style.setProperty('display', 'none');
    this.cityBar.style.setProperty('display', 'none');
    this.citiesContainer.style.setProperty('display', '');
  }
  closeSidebar(){
    this.contentNode.style.setProperty('grid-template-columns', '');
    this.closeSidebarButton.style.setProperty('display', 'none');
    this.weatherContainer.style.setProperty('display', '');
    this.cityBar.style.setProperty('display', '');
    this.citiesContainer.style.setProperty('display', 'none');
  }
  windowResized(event) {
    if (window.innerWidth > 600){
      this.citiesContainer.style.setProperty('display', '');
    } else {
      this.citiesContainer.style.setProperty('display', 'none');
    }
  }
  static randomImage(array){
    return array[Math.floor(Math.random()*array.length)];
  }
}

export default DOM;
