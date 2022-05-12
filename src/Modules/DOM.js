import { format, add } from 'date-fns';
import weatherCodes from './WeatherCodeLookup';

class DOM {
  constructor(contentNode, userPreferences) {
    this.weatherCodes = weatherCodes;
    this.tempF = userPreferences.preferF;
    this.contentNode = contentNode;
    const placeholder = document.createDocumentFragment();
    this.searchBar = document.createElement('div');
    this.citiesContainer = document.createElement('div');
    this.cityBar = document.createElement('div');
    this.weatherContainer = document.createElement('div');

    this.searchBar.id = 'searchBar';
    this.citiesContainer.id = 'citiesContainer';
    this.cityBar.id = 'cityBar';
    this.weatherContainer.id = 'weatherContainer';

    this.searchEntry = document.createElement('input');
    this.searchEntry.type = 'text';
    this.searchEntry.id = 'searchEntry';

    this.autoLocateButton = document.createElement('button');
    this.autoLocateButton.id = 'autoLocateButton';
    this.autoLocateButton.textContent = 'my_location';
    this.autoLocateButton.classList.add('material-symbols-outlined');

    this.searchBar.appendChild(this.searchEntry);
    this.searchBar.appendChild(this.autoLocateButton);

    this.searchResults = document.createElement('div');
    this.searchResults.id = "searchResults";

    this.citiesList = document.createElement('div');
    this.citiesList.id = 'citiesList';

    this.citiesContainer.appendChild(this.searchResults);
    this.citiesContainer.appendChild(this.citiesList);

    this.cityBar = document.createElement("div");
    this.cityBar.id = 'cityBar';

    this.openCitiesHalf = document.createElement('button');
    this.openCitiesHalf.id = 'openCitiesHalf';
    this.openCitiesHalf.textContent = "chevron_right";
    this.openCitiesHalf.classList.add('material-symbols-outlined');

    this.cityNameTitle = document.createElement('p');
    this.cityNameTitle.id = 'cityNameTitle';
    this.cityNameTitle.textContent = '';

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

    this.changeUnitsButton = document.createElement('div');
    this.changeUnitsButton.id = 'changeUnitsButton';
    this.changeUnitsButton.textContent = this.tempF
      ? "Change temp to °C"
      : "Change temp to °F";

    this.removeCityButton = document.createElement('div');
    this.removeCityButton.id = 'removeCityButton';
    this.removeCityButton.textContent = 'Remove city from city list';

    this.menuContents.appendChild(this.changeUnitsButton);
    this.menuContents.appendChild(this.removeCityButton);

    this.menu.appendChild(this.menuButton);
    this.menu.appendChild(this.menuContents);

    this.cityBar.appendChild(this.openCitiesHalf);
    this.cityBar.appendChild(this.cityNameTitle);
    this.cityBar.appendChild(this.menu);

    const placeholderTextWeatherContainer = document.createElement('p');
    placeholderTextWeatherContainer.id = 'placeholderTextWeatherContainer';
    placeholderTextWeatherContainer.textContent = 'Select a city to see the weather';

    this.weatherContainer.appendChild(placeholderTextWeatherContainer);

    placeholder.appendChild(this.searchBar);
    placeholder.appendChild(this.citiesContainer);
    placeholder.appendChild(this.cityBar);
    placeholder.appendChild(this.weatherContainer);

    this.contentNode.appendChild(placeholder);
    this.menuButton.addEventListener('click', this.toggleMenu.bind(this));
    document.addEventListener('click', this.clickOutside.bind(this));
    this.menuElements = [this.menu, this.menuButton, this.menuContents, this.changeUnitsButton, this.removeCityButton];
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
    const cityDiv = document.createElement('div');
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
    const cityDiv = document.createElement("div");
    cityDiv.id = city.id;
    const weatherIcon = document.createElement('span');
    weatherIcon.textContent = this.weatherCodes[city.conditions].icon;
    weatherIcon.classList.add('material-symbols-outlined');
    const cityName = document.createElement('span');
    cityName.textContent = city.name;
    const cityTime = document.createElement('span');
    cityTime.textContent = format(
      add(
        add(
          new Date(),
          { minutes: new Date().getTimezoneOffset() }),
        { seconds: city.utcOffsetSeconds }),
      'h:mm aaa');
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
    cityElementChildren[0].textContent = this.weatherCodes[city.conditions].icon;
    cityElementChildren[1].textContent = city.name;
    cityElementChildren[2].textContent = format(
      add(
        add(
          new Date(),
          { minutes: new Date().getTimezoneOffset() }),
        { seconds: city.utcOffsetSeconds }),
      'h:mm aaa');
    if (this.tempF) {
      cityElementChildren[3].textContent = `${city.currentTempF}°`;
    } else {
      cityElementChildren[3].textContent = `${city.currentTempC}°`;
    }
  }
  removeCity(cityId) {
    this.citiesList.removeChild(document.getElementById(cityId));
    this.weatherPageCity = undefined;
    this.weatherContainer.style = '';
  }
  makeWeatherPage(city) {
    this.clearWeatherPage();
    this.weatherPageCity = city;
    this.weatherContainer.style = `background-image: url(${weatherCodes[city.conditions].image});`
    this.cityNameTitle.textContent = city.name;
    this.weatherPageTemp = document.createElement('p');
    this.weatherPageTemp.id = 'weatherPageTemp';
    if (this.tempF) {
      this.weatherPageTemp.textContent = `${city.currentTempF}°`;
    } else {
      this.weatherPageTemp.textContent = `${city.currentTempC}°`;
    }

    this.weatherPageConditions = document.createElement('p');
    this.weatherPageConditions.id = 'weatherPageConditions';
    this.weatherPageConditions.textContent = this.weatherCodes[city.conditions].name;

    this.weatherPageHighTemp = document.createElement('p');
    this.weatherPageHighTemp.id = 'weatherPageHighTemp';
    if (this.tempF) {
      this.weatherPageHighTemp.textContent = `High ${city.todayHighTempF}°`;
    } else {
      this.weatherPageHighTemp.textContent = `High ${city.todayHighTempC}°`;
    }

    this.weatherPageLowTemp = document.createElement('p');
    this.weatherPageLowTemp.id = 'weatherPageLowTemp';
    if (this.tempF) {
      this.weatherPageLowTemp.textContent = `Low ${city.todayLowTempF}°`;
    } else {
      this.weatherPageLowTemp.textContent = `Low ${city.todayLowTempC}°`;
    }
    this.weatherSubcontainer = document.createElement('div');
    this.weatherSubcontainer.id = 'weatherSubcontainer';
    this.weatherSubcontainer.appendChild(this.weatherPageTemp);
    this.weatherSubcontainer.appendChild(this.weatherPageConditions);
    this.weatherSubcontainer.appendChild(this.weatherPageHighTemp);
    this.weatherSubcontainer.appendChild(this.weatherPageLowTemp);
    this.weatherContainer.appendChild(this.weatherSubcontainer);
  }
  clearWeatherPage() {
    while (this.weatherContainer.firstChild) {
      this.weatherContainer.removeChild(this.weatherContainer.firstChild);
    }
    this.cityNameTitle.textContent = '';
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
}

export default DOM;
